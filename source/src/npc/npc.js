// NPCs: data-driven archetypes (npcTypes in packs). Enemies run a stealth-aware FSM with
// vision cones + line of sight + hearing (Hitman-style suspicion meter), friendlies talk/flee.
import * as THREE from 'three';
import { FSM } from '../core/fsm.js';
import { buildCharacter, animateCharacter } from '../render/models.js';
import { moveBody } from '../world/collision.js';
import { clamp, wrapAngle, dampAngle, rng } from '../core/util.js';
import { bus } from '../core/events.js';

const ICONS = {};
const _eye = new THREE.Vector3(), _tp = new THREE.Vector3();
function iconTex(ch, col) {
  const k = ch + col; if (ICONS[k]) return ICONS[k];
  const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d');
  g.fillStyle = col; g.strokeStyle = '#1d1712'; g.lineWidth = 6;
  g.beginPath(); g.moveTo(32, 4); g.lineTo(60, 32); g.lineTo(32, 60); g.lineTo(4, 32); g.closePath(); g.fill(); g.stroke();
  g.font = 'bold 40px Bangers, Impact, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#1d1712'; g.fillText(ch, 32, 35);
  const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; ICONS[k] = t; return t;
}

let NID = 0;
export class NPC {
  constructor(mgr, type, pos, opts = {}) {
    this.mgr = mgr; this.game = mgr.game; this.type = type; this.id = opts.id || ('npc' + NID++);
    this.pos = pos.clone(); this.vel = new THREE.Vector3(); this.yaw = opts.yaw ?? 0;
    this.hp = type.hp ?? 3; this.maxHp = this.hp; this.hostile = !!type.hostile; this.role = opts.role || type.role || (this.hostile ? 'enemy' : 'civilian');
    this.home = pos.clone(); this.patrol = opts.patrol || null; this.patrolIdx = 0; this.tag = opts.tag || null;
    this.suspicion = 0; this.aware = false; this.bound = 0; this.stun = 0; this.attackT = 0; this.cool = 0; this.investigate = null;
    this.talk = opts.talk || null; this.name = opts.name || type.name; this.portrait = opts.portrait || type.portrait;
    this.ch = buildCharacter(type.palette || {}, { simple: true, scale: type.scale || 1 });
    this.root = this.ch.root; this.root.position.copy(this.pos);
    mgr.group.add(this.root);
    this.icon = new THREE.Sprite(new THREE.SpriteMaterial({ map: iconTex('?', '#f2c14e'), depthTest: false, transparent: true }));
    this.icon.scale.set(0.7, 0.7, 0.7); this.icon.position.y = 2.4 * (type.scale || 1); this.icon.visible = false; this.icon.renderOrder = 20;
    this.root.add(this.icon);
    this.marker = null; this.pose = 'idle'; this.hw = 0.3; this.h = 1.8 * (type.scale || 1);
    this.R = rng(NID * 977);
    this.windup = 0;
    this.fsm = new FSM(this, NPC_STATES, opts.state || (this.hostile ? (this.patrol ? 'patrol' : 'idle') : 'idle'));
    this.flash = 0; this.alive = true; this.downTime = 0; this.senseVisible = false;
  }
  get downed() { return this.fsm.is('down', 'bound'); }
  setIcon(kind) {
    if (kind === this._icon) return; this._icon = kind;
    if (!kind) { this.icon.visible = false; return; }
    const m = { sus: ['?', '#f2c14e'], alert: ['!', '#ff3b3b'], talk: ['…', '#9fe0d8'], target: ['★', '#ff2fb3'], hostage: ['!', '#5fd0ff'] }[kind];
    this.icon.material.map = iconTex(m[0], m[1]); this.icon.material.needsUpdate = true; this.icon.visible = true;
  }
  dist(p) { return Math.hypot(p.x - this.pos.x, p.z - this.pos.z); }
  faceTo(p, dt, k = 8) { const a = Math.atan2(p.x - this.pos.x, p.z - this.pos.z); this.yaw = dampAngle(this.yaw, a, k, dt); }
  moveTo(p, speed, dt, stopDist = 0.8) {
    const dx = p.x - this.pos.x, dz = p.z - this.pos.z, d = Math.hypot(dx, dz);
    if (d < stopDist) { this.vel.x *= 0.5; this.vel.z *= 0.5; return true; }
    this.vel.x = dx / d * speed; this.vel.z = dz / d * speed; this.faceTo(p, dt);
    return false;
  }
  canSee(target, eyeH = 1.6) {
    const v = this.type.vision || { range: 22, fov: 70 };
    const dx = target.x - this.pos.x, dz = target.z - this.pos.z, dy = target.y - this.pos.y; const d = Math.hypot(dx, dz);
    if (d > v.range * (dy > 4 ? 0.7 : 1)) return 0;
    const fwdx = Math.sin(this.yaw), fwdz = Math.cos(this.yaw);
    const cos = (dx * fwdx + dz * fwdz) / (d || 1);
    const half = (v.fov * Math.PI / 180) / 2;
    if (d > 2.5 && cos < Math.cos(half)) return 0;
    // looking up is unnatural for goons: big height difference = harder to notice (perching!)
    if (dy > 3.5 && Math.atan2(dy, d) > 0.6) return 0;
    const eye = _eye.set(this.pos.x, this.pos.y + eyeH, this.pos.z);
    const tp = _tp.set(target.x, target.y + 1.0, target.z);
    if (!this.game.world.collision.lineOfSight(eye, tp)) return 0;
    return 1 - d / v.range;
  }
  hit(dmg, from, kind = 'melee') {
    if (!this.alive || this.downed) return;
    this.hp -= dmg; this.flash = 0.15;
    if (!this.aware && this.hostile) { this.aware = true; this.alertAllies(); }
    if (this.hp <= 0) { this.knockout(kind); return; }
    this.stun = Math.max(this.stun, kind === 'pod' ? 2.5 : 0.45);
    if (from) { const dx = this.pos.x - from.x, dz = this.pos.z - from.z, d = Math.hypot(dx, dz) || 1; this.vel.x = dx / d * 4; this.vel.z = dz / d * 4; this.vel.y = 2; }
    this.fsm.set('stunned');
  }
  bind(amount = 1) {
    if (!this.alive || this.fsm.is('down')) return;
    this.bound += amount; this.flash = 0.1;
    if (!this.aware && this.hostile) { this.aware = true; this.alertAllies(); }
    if (this.bound >= (this.type.bindHits ?? 2)) { this.fsm.set('bound'); bus.emit('npc:defeated', { npc: this, how: 'bound' }); }
    else { this.stun = Math.max(this.stun, 1.2); this.fsm.set('stunned'); }
  }
  knockout(how = 'melee') { this.hp = 0; this.fsm.set('down'); bus.emit('npc:defeated', { npc: this, how }); }
  takedown() { this.knockout('takedown'); bus.emit('npc:takedown', { npc: this }); }
  alertAllies() {
    for (const o of this.mgr.list) if (o !== this && o.hostile && o.alive && !o.downed && o.dist(this.pos) < 22) { o.aware = true; if (o.fsm.is('idle', 'patrol', 'suspicious', 'investigate', 'search')) o.fsm.set('combat'); }
    bus.emit('npc:alert', { npc: this });
  }
  hear(n) {
    if (!this.hostile || this.downed || this.fsm.is('combat', 'stunned')) return;
    const d = this.dist(n.pos); if (d > n.radius * (this.type.hearing ?? 1)) return;
    this.investigate = n.pos.clone(); this.fsm.set('investigate');
  }
  update(dt, player) {
    if (!this.alive) return;
    this.fsm.update(dt);
    if (this.stun > 0) this.stun -= dt;
    this.cool -= dt;
    // physics
    this.vel.y -= 22 * dt;
    moveBody(this.game.world.collision, this.pos, this.vel, dt, this.hw, this.h, { grounded: true, stepH: 0.5 });
    if (this.pos.y < -20) { this.pos.copy(this.home); this.vel.set(0, 0, 0); }
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
    const sp = Math.hypot(this.vel.x, this.vel.z);
    animateCharacter(this.ch, this.pose === 'auto' || !this.pose ? (sp > 3.5 ? 'run' : sp > 0.4 ? 'walk' : 'idle') : this.pose, sp, dt);
    // damage flash
    if (this.flash > 0) { this.flash -= dt; this.ch.mat.uniforms.tintAmt.value = 0.7; this.ch.mat.uniforms.tint.value.set('#ffffff'); }
    else this.ch.mat.uniforms.tintAmt.value = this.senseVisible ? 0.35 : 0;
    if (this.senseVisible && this.flash <= 0) this.ch.mat.uniforms.tint.value.set(this.hostile ? '#ff5050' : '#5fd0ff');
  }
  dispose() { this.mgr.group.remove(this.root); this.alive = false; }
}

const NPC_STATES = {
  idle: {
    enter() { this.pose = 'auto'; this.vel.x = this.vel.z = 0; this.setIcon(this.talk ? 'talk' : this.tag === 'target' ? 'target' : null); this.lookT = 0; },
    update(dt) {
      this.lookT -= dt; if (this.lookT <= 0) { this.lookT = this.R.range(2, 5); this.lookYaw = this.yaw + this.R.range(-1.2, 1.2); }
      if (this.lookYaw != null) this.yaw = dampAngle(this.yaw, this.lookYaw, 2, dt);
      this.vel.x *= 0.8; this.vel.z *= 0.8;
      if (this.hostile) perceive.call(this, dt);
      else if (this.role === 'civilian' && this.mgr.panicAt && this.dist(this.mgr.panicAt) < 18) this.fsm.set('flee');
    },
  },
  patrol: {
    enter() { this.pose = 'auto'; this.setIcon(null); },
    update(dt) {
      const pts = this.patrol; if (!pts || !pts.length) { this.fsm.set('idle'); return; }
      const tgt = pts[this.patrolIdx % pts.length];
      if (this.moveTo(tgt, 1.6, dt, 0.6)) { this.patrolIdx++; this.waitT = 1.5; }
      perceive.call(this, dt);
    },
  },
  suspicious: {
    enter() { this.setIcon('sus'); bus.emit('npc:suspicious', { npc: this }); },
    update(dt) {
      const p = this.game.player; this.vel.x *= 0.85; this.vel.z *= 0.85; this.faceTo(p.pos, dt, 4);
      perceive.call(this, dt);
      if (this.suspicion <= 0.05) this.fsm.set(this.patrol ? 'patrol' : 'idle');
    },
  },
  investigate: {
    enter() { this.setIcon('sus'); this.invT = 0; },
    update(dt) {
      this.invT += dt;
      if (!this.investigate) { this.fsm.set('search'); return; }
      const arrived = this.moveTo(this.investigate, 2.4, dt, 1.0);
      if (arrived || this.invT > 9) { this.fsm.set('search'); return; }
      perceive.call(this, dt);
    },
  },
  search: {
    enter() { this.setIcon('sus'); this.searchT = 0; },
    update(dt) {
      this.searchT += dt; this.vel.x *= 0.85; this.vel.z *= 0.85; this.yaw += Math.sin(this.searchT * 1.3) * dt * 1.5;
      perceive.call(this, dt);
      if (this.searchT > 5) { this.aware = false; this.suspicion = 0; this.home && this.fsm.set(this.patrol ? 'patrol' : 'return'); }
    },
  },
  return: {
    enter() { this.setIcon(null); },
    update(dt) { if (this.moveTo(this.home, 1.6, dt, 0.8)) this.fsm.set('idle'); perceive.call(this, dt); },
  },
  combat: {
    enter() { this.setIcon('alert'); this.aware = true; this.lostT = 0; this.attackT = 0; this.windup = 0; bus.emit('npc:combat', { npc: this }); },
    update(dt) {
      const p = this.game.player; const t = this.type; const d = this.dist(p.pos);
      const sees = this.canSee(p.pos) > 0 || d < 3;
      this.lostT = sees ? 0 : this.lostT + dt;
      if (this.lostT > 6) { this.investigate = p.pos.clone(); this.fsm.set('search'); return; }
      this.faceTo(p.pos, dt, 10);
      const ranged = t.weapon === 'gun';
      const want = ranged ? 13 : 1.5;
      if (this.windup > 0) {
        this.windup -= dt; this.vel.x *= 0.7; this.vel.z *= 0.7; this.pose = ranged ? 'aim' : (this.id.length % 2 ? 'jab' : 'hook'); this._k = (this._k || 0) + 1;
        if (this.windup <= 0) {
          if (ranged) this.mgr.game.combat.enemyShoot(this, p);
          else if (d < 2.3 && Math.abs(p.pos.y - this.pos.y) < 1.6) this.mgr.game.combat.enemyMelee(this, p);
          this.cool = ranged ? this.R.range(1.6, 2.6) : this.R.range(1.0, 1.8);
        }
        return;
      }
      this.pose = 'auto';
      if (ranged) {
        if (d > want + 4) this.moveTo(p.pos, 3.2, dt, want);
        else if (d < want - 5) { const dx = this.pos.x - p.pos.x, dz = this.pos.z - p.pos.z, l = Math.hypot(dx, dz) || 1; this.vel.x = dx / l * 2.5; this.vel.z = dz / l * 2.5; }
        else { this.vel.x *= 0.8; this.vel.z *= 0.8; }
        if (this.cool <= 0 && sees && d < 34 && this.mgr.attackToken(this)) { this.windup = 0.65; bus.emit('npc:telegraph', { npc: this, kind: 'shot' }); }
      } else {
        // melee goons circle and take turns (attack tokens) — readable, Arkham-ish
        if (d > want) this.moveTo(p.pos, t.speed || 4.6, dt, want);
        else { this.vel.x *= 0.6; this.vel.z *= 0.6; }
        if (this.cool <= 0 && d < 2.6 && this.mgr.attackToken(this)) { this.windup = 0.5; bus.emit('npc:telegraph', { npc: this, kind: 'melee' }); }
      }
    },
  },
  stunned: {
    enter() { this.pose = 'stunned'; this.setIcon(null); },
    update(dt) {
      this.vel.x *= 0.9; this.vel.z *= 0.9;
      if (this.stun <= 0) this.fsm.set(this.hostile ? 'combat' : 'flee');
    },
  },
  bound: {
    enter() { this.pose = 'webbed'; this.setIcon(null); this.vel.set(0, 0, 0); this.ch.mat.uniforms.tint.value.set('#e8f6f0'); },
    update() { this.ch.mat.uniforms.tintAmt.value = 0.45; this.ch.mat.uniforms.tint.value.set('#e8f6f0'); this.vel.x = 0; this.vel.z = 0; },
  },
  down: {
    enter() { this.pose = 'down'; this.setIcon(null); this.vel.x = this.vel.z = 0; },
    update() { this.vel.x = 0; this.vel.z = 0; },
  },
  flee: {
    enter() { this.pose = 'auto'; this.setIcon(null); this.fleeT = 0; },
    update(dt) {
      this.fleeT += dt; const p = this.mgr.panicAt || this.game.player.pos;
      const dx = this.pos.x - p.x, dz = this.pos.z - p.z, l = Math.hypot(dx, dz) || 1;
      this.vel.x = dx / l * 5; this.vel.z = dz / l * 5; this.yaw = Math.atan2(dx, dz);
      if (this.fleeT > 6) this.fsm.set('idle');
    },
  },
  cower: {
    enter() { this.pose = 'cower'; this.setIcon(this.role === 'hostage' ? 'hostage' : this.talk ? 'talk' : null); },
    update() { this.vel.x = this.vel.z = 0; },
  },
  follow: {
    enter() { this.pose = 'auto'; },
    update(dt) { const p = this.game.player.pos; if (this.dist(p) > 3) this.moveTo(p, this.dist(p) > 8 ? 5 : 2.4, dt, 2.5); else { this.vel.x *= 0.8; this.vel.z *= 0.8; this.faceTo(p, dt, 3); } },
  },
  cheer: { enter() { this.pose = 'cheer'; this.setIcon(this.talk ? 'talk' : null); }, update(dt) { this.vel.x = this.vel.z = 0; this.faceTo(this.game.player.pos, dt, 3); } },
};

// Perception shared by calm states: fills suspicion; full -> combat.
function perceive(dt) {
  const p = this.game.player; if (this.game.stealthOff) return;
  let s = this.canSee(p.pos);
  if (s > 0) {
    let rate = 0.6 + s * 2.4;
    if (p.crouch) rate *= 0.45;
    rate *= 1 - (p.stats && p.stats.quiet || 0) * 0.6;
    if (p.pos.y - this.pos.y > 3) rate *= 0.35;
    if (p.fsm.is('swing', 'zip')) rate *= 1.5;
    this.suspicion = clamp(this.suspicion + rate * dt * (this.type.alertness ?? 1), 0, 1);
    if (this.suspicion > 0.3 && this.fsm.is('idle', 'patrol', 'return')) this.fsm.set('suspicious');
    if (this.suspicion >= 1) { this.fsm.set('combat'); this.alertAllies(); }
  } else this.suspicion = clamp(this.suspicion - dt * 0.25, 0, 1);
  // spot downed allies (Hitman body discovery)
  if (!this._bodyCheckT || (this._bodyCheckT -= dt) <= 0) {
    this._bodyCheckT = 0.5;
    for (const o of this.mgr.list) if (o !== this && o.hostile && o.downed && !o.discovered && o.dist(this.pos) < 14 && this.canSee(o.pos, 1.6) > 0) {
      o.discovered = true; this.investigate = o.pos.clone(); this.suspicion = Math.max(this.suspicion, 0.7); this.fsm.set('investigate'); bus.emit('npc:bodyfound', { npc: this });
    }
  }
}

export class NPCManager {
  constructor(game) { this.game = game; this.list = []; this.group = new THREE.Group(); this.tokens = 0; this.tokenHolders = new Set(); this.panicAt = null; }
  attach(scene) { scene.add(this.group); }
  spawn(typeId, pos, opts = {}) {
    const t = this.game.registry.get('npcTypes', typeId) || this.game.registry.get('npcTypes', 'thug');
    const n = new NPC(this, t, pos, opts); this.list.push(n); return n;
  }
  remove(n) { n.dispose(); const i = this.list.indexOf(n); if (i >= 0) this.list.splice(i, 1); }
  clear() { for (const n of this.list) n.dispose(); this.list.length = 0; }
  byTag(tag) { return this.list.filter((n) => n.tag === tag); }
  byId(id) { return this.list.find((n) => n.id === id); }
  attackToken(n) {
    // at most 2 enemies attack at once
    for (const h of this.tokenHolders) if (!h.alive || h.downed || !h.fsm.is('combat') || h.windup <= 0) this.tokenHolders.delete(h);
    if (this.tokenHolders.size >= 2) return false;
    this.tokenHolders.add(n); return true;
  }
  update(dt, player) {
    const cam = this.game.renderer.camera.position;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const n = this.list[i];
      const far = n.dist(cam) > 140;
      n.root.visible = !far;
      if (far && !n.important) continue; // LOD: skip AI for distant NPCs
      n.update(dt, player);
    }
    if (this.panicT > 0) { this.panicT -= dt; if (this.panicT <= 0) this.panicAt = null; }
  }
  onNoise(n) { for (const e of this.list) e.hear(n); }
  panic(pos, t = 6) { this.panicAt = pos.clone(); this.panicT = t; if (this.game.world) this.game.world.panic = { x: pos.x, z: pos.z }; setTimeout(() => { if (this.game.world) this.game.world.panic = null; }, t * 1000); }
  hostilesNear(p, r) { return this.list.filter((n) => n.hostile && n.alive && !n.downed && n.dist(p) < r); }
}
