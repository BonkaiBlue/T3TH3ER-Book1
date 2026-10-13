// Boss: THE VIOLET JESTER — flies a jet-kite between rooftops, lobs jack-bombs, summons goons,
// and dives. Tether him (R1 line) to yank him onto a roof, then strike (Square) while he's dazed.
import * as THREE from 'three';
import { buildCharacter, animateCharacter } from '../render/models.js';
import { GeoBuilder, C } from '../render/geo.js';
import { comicMaterial } from '../render/materials.js';
import { FSM } from '../core/fsm.js';
import { bus } from '../core/events.js';
import { dampAngle } from '../core/util.js';

export class Boss {
  constructor(game, def, arena) {
    this.game = game; this.def = def; this.arena = arena.clone(); // center of fight (roof level)
    this.hp = def.hp || 8; this.maxHp = this.hp; this.alive = true; this.vulnerable = false; this.hitsThisStagger = 0;
    this.pos = arena.clone().add(new THREE.Vector3(0, 16, -20)); this.vel = new THREE.Vector3(); this.yaw = 0; this.orbitA = 0;
    this.ch = buildCharacter(def.palette, { scale: 1.1 });
    this.root = this.ch.root;
    const kb = new GeoBuilder();
    kb.tri([0, 0, 1.4], [-2.4, 0, -0.9], [2.4, 0, -0.9], [0, 1, 0], C(def.palette.secondary), [0, 0], [0, 0], [0, 0], [0, 0, 0, 0]);
    kb.tri([0, -0.02, 1.4], [2.4, -0.02, -0.9], [-2.4, -0.02, -0.9], [0, -1, 0], C(def.palette.primary), [0, 0], [0, 0], [0, 0], [0, 0, 0, 0]);
    kb.cbox(0, -0.15, -0.6, 0.6, 0.3, 0.9, C('#333')); kb.cbox(0, -0.15, -1.1, 0.4, 0.4, 0.2, C('#ff8a2a'));
    this.kite = new THREE.Mesh(kb.build(), comicMaterial({ atlas: false })); this.kite.position.y = 2.25;
    this.root.add(this.kite);
    game.world.dynamic.add(this.root);
    this.fsm = new FSM(this, STATES, 'intro');
    this.bombT = 2; this.summoned = 0;
  }
  get phase() { return this.hp > this.maxHp * 0.6 ? 1 : this.hp > this.maxHp * 0.25 ? 2 : 3; }
  tethered(power = 1) {
    if (!this.fsm.is('fly', 'dive', 'recover')) return;
    this.game.audio.play('zip'); bus.emit('boss:tethered');
    this.fsm.set('yanked');
  }
  hit(d) {
    if (!this.vulnerable) return;
    this.hp -= d; this.hitsThisStagger++; this.ch.mat.uniforms.tintAmt.value = 0.8; setTimeout(() => (this.ch.mat.uniforms.tintAmt.value = 0), 120);
    this.game.audio.play('punch'); bus.emit('boss:hit', { hp: this.hp });
    if (this.hp <= 0) { this.fsm.set('defeated'); return; }
    if (this.hitsThisStagger >= 3) this.fsm.set('escape');
  }
  update(dt) {
    if (!this.alive) return;
    this.fsm.update(dt);
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
    const flying = this.fsm.is('fly', 'dive', 'escape', 'intro', 'recover');
    this.kite.visible = flying;
    animateCharacter(this.ch, this.pose || 'glide', 2, dt);
  }
  faceTo(p, dt) { this.yaw = dampAngle(this.yaw, Math.atan2(p.x - this.pos.x, p.z - this.pos.z), 6, dt); }
  dispose() { this.game.world.dynamic.remove(this.root); this.alive = false; }
}

const STATES = {
  intro: {
    enter() { this.pose = 'glide'; this.game.audio.play('laugh'); },
    update(dt) { this.pos.y += Math.sin(this.fsm.time * 3) * dt; this.faceTo(this.game.player.pos, dt); if (this.fsm.time > 2.5) this.fsm.set('fly'); },
  },
  fly: {
    enter() { this.pose = 'glide'; this.vulnerable = false; this.flyT = 0; },
    update(dt) {
      const p = this.game.player; this.flyT += dt;
      const ph = this.phase; const R = 22 + ph * 2, H = 13 + Math.sin(this.flyT * 0.7) * 4;
      this.orbitA += dt * (0.35 + ph * 0.08);
      const tgt = new THREE.Vector3(this.arena.x + Math.cos(this.orbitA) * R, this.arena.y + H, this.arena.z + Math.sin(this.orbitA) * R);
      this.pos.lerp(tgt, 1 - Math.exp(-2 * dt));
      this.faceTo(p.pos, dt);
      this.bombT -= dt;
      if (this.bombT <= 0) {
        this.bombT = ph === 1 ? 2.6 : ph === 2 ? 2.0 : 1.6;
        const n = ph === 1 ? 1 : 2;
        for (let i = 0; i < n; i++) {
          const t = p.pos.clone().addScaledVector(p.vel, 0.9); t.x += (Math.random() - 0.5) * 4 * i; t.z += (Math.random() - 0.5) * 4 * i;
          const gy = this.game.world.collision.raycast(t.x, t.y + 3, t.z, 0, -1, 0, 30); if (gy) t.y = gy.point[1];
          this.game.combat.bomb(this.pos.clone().setY(this.pos.y + 1), t, { time: 1.4, color: '#a24bd6' });
        }
        if (Math.random() < 0.3) this.game.audio.play('laugh', { vol: 0.6 });
        bus.emit('boss:bomb');
      }
      if (ph >= 2 && this.summoned < ph - 1) { this.summoned++; bus.emit('boss:summon', { count: 2 + this.summoned }); }
      if (ph === 3 && this.flyT > 5) this.fsm.set('dive');
    },
  },
  dive: {
    enter() {
      this.diveFrom = this.pos.clone(); this.diveTo = this.game.player.pos.clone(); this.diveTo.y += 1; this.pose = 'glide';
      this.game.combat.dangerT = 1.0; bus.emit('combat:danger', { boss: true }); this.game.fx.marker(this.game.player.pos, 0.9, 2.5); this.game.audio.play('alert');
    },
    update(dt) {
      const t = this.fsm.time;
      if (t < 0.8) { this.faceTo(this.diveTo, dt); this.pos.y += dt * 2; return; }
      const k = Math.min(1, (t - 0.8) / 0.5);
      this.pos.lerpVectors(this.diveFrom, this.diveTo, k);
      const p = this.game.player;
      if (k > 0.6 && this.pos.distanceTo(p.pos.clone().setY(p.pos.y + 1)) < 2.4 && !this.hitDone) {
        this.hitDone = true; if (this.game.combat.iframes <= 0) { p.hurt(22, 'boss'); p.vel.y = 8; p.fsm.set('air'); this.game.rig.addShake(0.7); this.game.audio.play('hurt'); }
      }
      if (k >= 1) { this.hitDone = false; this.fsm.set('recover'); }
    },
  },
  recover: {
    enter() { this.pose = 'stunned'; },
    update(dt) { this.pos.y += dt * 1.5; if (this.fsm.time > 1.6) this.fsm.set('fly'); },
  },
  yanked: {
    enter() {
      this.pose = 'air'; this.from = this.pos.clone();
      const p = this.game.player; const r = this.game.world.roofAt(p.pos.x, p.pos.z);
      this.to = p.pos.clone().add(p.fwd().multiplyScalar(4)); this.to.y = r ? r.y : p.pos.y;
      // make sure target is on a surface
      const h = this.game.world.collision.raycast(this.to.x, this.to.y + 4, this.to.z, 0, -1, 0, 40);
      if (h && Math.abs(h.point[1] - p.pos.y) < 1.5) this.to.y = h.point[1];
      else { this.to.copy(p.pos).add(p.fwd().multiplyScalar(1.8)); this.to.y = p.pos.y; } // never strand him out of reach
      this.game.combat.word('YANK!', this.pos);
    },
    update(dt) {
      const k = Math.min(1, this.fsm.time / 0.6); this.pos.lerpVectors(this.from, this.to, k); this.pos.y += Math.sin(k * Math.PI) * 3;
      if (k >= 1) { this.game.audio.play('land'); this.game.rig.addShake(0.4); this.fsm.set('dazed'); }
    },
  },
  dazed: {
    enter() { this.vulnerable = true; this.hitsThisStagger = 0; this.pose = 'stunned'; bus.emit('boss:vulnerable'); },
    exit() { this.vulnerable = false; },
    update(dt) { this.faceTo(this.game.player.pos, dt); if (this.fsm.time > 4.5) this.fsm.set('escape'); },
  },
  escape: {
    enter() { this.pose = 'glide'; this.game.audio.play('laugh', { vol: 0.8 }); this.from = this.pos.clone(); },
    update(dt) { this.pos.y += dt * 9; if (this.fsm.time > 1.4) this.fsm.set('fly'); },
  },
  defeated: {
    enter() { this.pose = 'down'; this.vulnerable = false; this.game.audio.play('explosion'); this.game.fx.burst(this.pos, '#a24bd6', 30); bus.emit('boss:defeated', { boss: this }); },
    update() {},
  },
};
