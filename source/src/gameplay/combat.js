// Combat + gadgets + interaction. Pooled projectiles/ropes/FX so fights never allocate per frame.
import * as THREE from 'three';
import { Pool } from '../core/pool.js';
import { bus } from '../core/events.js';
import { input } from '../ui/input.js';
import { comicMaterial } from '../render/materials.js';
import { GeoBuilder, C } from '../render/geo.js';
import { clamp } from '../core/util.js';
import { Rope } from '../render/rope.js';
import { boneWorld } from '../render/rig.js';
const COMBO = ['jab', 'cross', 'hook', 'jab', 'uppercut', 'spinkick'];

const WORDS = { punch: ['POW!', 'WHAM!', 'BIFF!', 'SOCK!'], kick: ['KRAK!', 'THUD!'], takedown: ['BONK!', 'KAYO!'], bind: ['SNAP!', 'TWANG!'], pod: ['SPLUT!', 'GLOMP!'], line: ['ZZIP!'], boom: ['KA-BOOM!', 'BLAM!'], shot: ['BLAM!', 'PEW!'] };

export class Combat {
  constructor(game) {
    this.game = game; this.scene = null;
    this.gadgetIdx = 0; this.ammo = 12; this.maxAmmo = 12; this.aiming = false; this.combo = 0; this.comboT = 0;
    this.iframes = 0; this.dangerT = 0; this.senseT = 0; this.senseCool = 0; this.reloadT = 0; this.triT = 0;
    this.interactables = []; this.prompt = null; this.lastBossHit = 0; this.targets = [];
    const rope = new THREE.BoxGeometry(1, 1, 1); rope.translate(0, 0, 0.5);
    const ropeMat = new THREE.MeshBasicMaterial({ color: 0xf6f1df });
    this.ropePool = new Pool(() => { const m = new THREE.Mesh(rope, ropeMat); m.frustumCulled = false; m.visible = false; return m; }, (m) => { m.visible = false; }, 6);
    const pb = new GeoBuilder(); pb.cbox(0, 0, 0, 0.22, 0.22, 0.22, C('#ffffff'));
    const pgeo = pb.build();
    this.projMat = comicMaterial({ atlas: false, emissive: 1 });
    this.projPool = new Pool(() => { const m = new THREE.Mesh(pgeo, comicMaterial({ atlas: false, emissive: 1 })); m.visible = false; return { mesh: m, vel: new THREE.Vector3(), prev: new THREE.Vector3(), life: 0, kind: '', owner: null, gravity: 0, rope: null }; },
      (p) => { p.mesh.visible = false; if (p.rope) { this.ropePool.release(p.rope); p.rope = null; } }, 24);
    this.wordPool = new Pool(() => { const d = document.createElement('div'); d.className = 'pow'; document.getElementById('fx').appendChild(d); return { el: d, pos: new THREE.Vector3(), t: 0 }; }, (w) => { w.el.style.display = 'none'; }, 10);
    this.swingRope = null;
    this.handPos = new THREE.Vector3(); this._v = new THREE.Vector3(); this._v2 = new THREE.Vector3();
    this.lingerLines = [];
  }
  attach(scene) {
    this.scene = scene;
    this.rope = new Rope(scene); this.traps = [];
    for (const r of [...this.ropePool.free, ...this.ropePool.active]) scene.add(r);
    for (const p of [...this.projPool.free, ...this.projPool.active]) scene.add(p.mesh);
  }
  reset() { this.projPool.releaseAll(); this.ropePool.releaseAll(); this.swingRope = null; this.lingerLines.length = 0; this.wordPool.releaseAll(); this.interactables.length = 0; this.targets.length = 0; for (const t of this.traps || []) this.scene.remove(t.mesh); this.traps = []; if (this.rope) this.rope.hide(); }
  get gadgets() { return this.game.save.data.inventory.gadgets.map((g) => this.game.registry.get('gadgets', g)).filter(Boolean); }
  get gadget() { const g = this.gadgets; return g[this.gadgetIdx % Math.max(1, g.length)]; }
  addInteractable(it) { this.interactables.push(it); return it; }
  removeInteractable(it) { const i = this.interactables.indexOf(it); if (i >= 0) this.interactables.splice(i, 1); }

  word(kind, pos) {
    const list = WORDS[kind] || [kind]; const w = this.wordPool.get();
    w.el.textContent = list[(Math.random() * list.length) | 0]; w.el.style.display = 'block'; w.pos.copy(pos); w.pos.y += 1.6; w.t = 0;
    w.el.style.setProperty('--rot', (Math.random() * 24 - 12).toFixed(1) + 'deg');
    w.el.dataset.kind = kind;
  }

  update(dt) {
    const g = this.game, p = g.player, A = g.audio;
    this.iframes -= dt; this.dangerT -= dt; this.comboT -= dt; if (this.comboT <= 0) this.combo = 0;
    this.senseT -= dt; this.senseCool -= dt;
    const playable = g.state === 'play' && !p.fsm.is('locked');
    // ---------- Tether-Sense (L3)
    if (playable && input.pressed('l3') && this.senseCool <= 0 && p.abilities.gadgets !== false) {
      this.senseT = this.senseMax = 6 + (p.stats.sense || 0); this.senseCool = 9; A.play('sense'); bus.emit('combat:sense');
    }
    const senseOn = this.senseT > 0;
    for (const n of g.npcs.list) n.senseVisible = senseOn && n.hostile && n.alive && !n.downed && n.dist(p.pos) < 70 + (p.stats.sense || 0) * 10;
    g.renderer.postMat.uniforms.senseAmt.value = clamp(this.senseT > (this.senseMax || 6) - 0.4 ? ((this.senseMax || 6) - this.senseT) * 2.5 : this.senseT / 1.5, 0, 1) * 0.8;
    // ---------- dodge: circle while a telegraph is active nearby
    if (playable && this.dangerT > 0 && input.pressed('circle') && !p.fsm.is('swing', 'climb', 'hang')) {
      input.consume('circle'); this.iframes = 0.5; this.dangerT = 0;
      const r = p.right(); const s = Math.random() < 0.5 ? -1 : 1; p.vel.x = r.x * s * 9; p.vel.z = r.z * s * 9; p.vel.y = 3;
      A.play('whiff'); bus.emit('combat:dodge');
    }
    // ---------- aiming (L2) — gadget precise aim
    this.aiming = playable && input.down('l2') && p.abilities.gadgets !== false && !p.aimZipPoint;
    // ---------- gadget select / inventory (triangle tap/hold, dpad left/right)
    if (playable && p.abilities.gadgets !== false) {
      if (input.down('triangle')) { this.triT += dt; if (this.triT > 0.45 && !this._invOpened) { this._invOpened = true; bus.emit('ui:inventory'); } }
      if (input.released('triangle')) { if (!this._invOpened) this.cycleGadget(1); this._invOpened = false; this.triT = 0; }
      if (input.pressed('right')) this.cycleGadget(1); if (input.pressed('left')) this.cycleGadget(-1);
      if (input.pressed('r1')) this.fireGadget();
    }
    // ---------- interact / melee / takedown / reload (square)
    this.updatePrompt();
    if (playable && input.pressed('square')) this.square();
    if (playable && input.down('square') && !this.prompt && this.ammo < this.maxAmmo) {
      this.reloadT += dt;
      if (this.reloadT > 0.8) {
        this.reloadT = 0; const S = g.save.data; const need = this.maxAmmo - this.ammo; const got = Math.min(need, Math.floor(S.fluid));
        if (got <= 0) { g.hud.toast('Out of line fluid! Refill at home or grab a supply cache.', 2.2); A.play('ui_back'); }
        else { this.ammo += got; S.fluid -= got; A.play('ui_ok'); bus.emit('combat:reload'); this.word('RELOAD!', p.pos); }
      }
    } else this.reloadT = 0;
    this.updateTraps(dt);
    // ---------- projectiles
    this.projPool.each((pr) => this.updateProjectile(pr, dt));
    // ---------- ropes
    this.updateRopes(dt);
    // ---------- words
    const cam = g.renderer.camera; const W = window.innerWidth, H = window.innerHeight;
    this.wordPool.each((w) => {
      w.t += dt; if (w.t > 0.9) { this.wordPool.release(w); return; }
      const v = this._v.copy(w.pos); v.y += w.t * 0.8; v.project(cam);
      if (v.z > 1) { w.el.style.display = 'none'; return; }
      w.el.style.display = 'block';
      w.el.style.transform = `translate(${((v.x + 1) / 2 * W).toFixed(0)}px, ${((1 - v.y) / 2 * H).toFixed(0)}px) translate(-50%,-50%) rotate(var(--rot)) scale(${(1 + Math.min(w.t * 6, 1) * 0.3 - w.t * 0.3).toFixed(2)})`;
      w.el.style.opacity = w.t > 0.6 ? (1 - (w.t - 0.6) / 0.3).toFixed(2) : '1';
    });
  }
  cycleGadget(d) { const n = this.gadgets.length; if (!n) return; this.gadgetIdx = (this.gadgetIdx + d + n) % n; this.game.audio.play('ui_click'); bus.emit('combat:gadget', this.gadget); }

  // Contextual prompt: talk/use > takedown > punch
  updatePrompt() {
    const g = this.game, p = g.player; let best = null, bd = 1e9;
    for (const it of this.interactables) {
      if (it.enabled === false) continue;
      const d = it.pos.distanceTo(p.pos); if (d < (it.radius || 2.2) && d < bd) { bd = d; best = { kind: 'use', label: it.label || 'USE', it }; }
    }
    for (const n of g.npcs.list) {
      if (n.hostile || !n.alive || !n.talk) continue;
      const d = n.dist(p.pos); if (d < 2.8 && Math.abs(n.pos.y - p.pos.y) < 2 && d < bd) { bd = d; best = { kind: 'talk', label: 'TALK', npc: n }; }
    }
    if (!best) {
      const td = this.findTakedown();
      if (td) best = { kind: 'takedown', label: td.perch ? 'PERCH K.O.' : 'TAKEDOWN', npc: td.npc, perch: td.perch };
    }
    this.prompt = best;
    g.overlay.setHint('square', best ? best.label : (g.npcs.hostilesNear(p.pos, 7).length || (g.boss && g.boss.vulnerable) ? 'STRIKE' : 'ACT'));
  }
  findTakedown() {
    const p = this.game.player; let best = null, bd = 1e9;
    const f = p.fwd();
    for (const n of this.game.npcs.list) {
      if (!n.hostile || !n.alive || n.downed || n.fsm.is('combat')) continue;
      const dx = n.pos.x - p.pos.x, dz = n.pos.z - p.pos.z, dy = p.pos.y - n.pos.y, d = Math.hypot(dx, dz);
      const facing = (dx * f.x + dz * f.z) / (d || 1);
      // behind check: npc forward vs vector npc->player
      const nfx = Math.sin(n.yaw), nfz = Math.cos(n.yaw);
      const behind = ((p.pos.x - n.pos.x) * nfx + (p.pos.z - n.pos.z) * nfz) / (d || 1) < 0.1;
      if (d < 2.4 && Math.abs(dy) < 1.5 && behind && d < bd) { best = { npc: n, perch: false }; bd = d; }
      else if (dy > 2.5 && dy < 18 && d < 10 && facing > 0.55 && d < bd) { best = { npc: n, perch: true }; bd = d; }
    }
    return best;
  }
  square() {
    const g = this.game, p = g.player, pr = this.prompt;
    if (pr && pr.kind === 'use') { input.consume('square'); pr.it.onUse && pr.it.onUse(pr.it); g.audio.play('ui_click'); return; }
    if (pr && pr.kind === 'talk') { input.consume('square'); bus.emit('npc:talk', { npc: pr.npc }); return; }
    if (pr && pr.kind === 'takedown') { this.takedown(pr.npc, pr.perch); return; }
    // boss strike
    if (g.boss && g.boss.vulnerable && g.boss.pos.distanceTo(p.pos) < 4) { this.punchFX(g.boss.pos); g.boss.hit(1); return; }
    // melee target
    const f = p.lookDir(this._v); let tgt = null, bs = -1e9;
    for (const n of g.npcs.list) {
      if (!n.hostile || !n.alive || n.downed) continue;
      const dx = n.pos.x - p.pos.x, dz = n.pos.z - p.pos.z, dy = n.pos.y - p.pos.y, d = Math.hypot(dx, dz);
      if (d > 7 || Math.abs(dy) > 2.5) continue;
      const dot = (dx * f.x + dz * f.z) / (d || 1);
      if (d > 2 && dot < 0.35) continue;
      const s = dot * 3 - d; if (s > bs) { bs = s; tgt = n; }
    }
    if (!tgt) { g.audio.play('whiff'); p.lock(0.26, COMBO[this.combo % 2]); this.combo++; this.comboT = 0.8; bus.emit('combat:whiff'); return; }
    // lunge
    const d = tgt.dist(p.pos);
    if (d > 1.6) { const dx = tgt.pos.x - p.pos.x, dz = tgt.pos.z - p.pos.z; p.vel.x = dx / d * Math.min(20, d * 8); p.vel.z = dz / d * Math.min(20, d * 8); }
    p.yaw = Math.atan2(-(tgt.pos.x - p.pos.x), -(tgt.pos.z - p.pos.z));
    const move = COMBO[this.combo % COMBO.length]; this.combo++; this.comboT = 1.2;
    const finisher = move === 'uppercut' || move === 'spinkick';
    p.lock(finisher ? 0.42 : 0.28, move);
    p.addStyle(finisher ? 60 : 25, null);
    setTimeout(() => {
      if (!tgt.alive || tgt.downed) return;
      tgt.hit(finisher ? 2 : 1, p.pos, finisher ? 'kick' : 'melee');
      if (move === 'uppercut') tgt.vel.y = 7;
      this.punchFX(tgt.pos, finisher ? 'kick' : 'punch');
      g.player.emitNoise(10);
    }, 110);
  }
  punchFX(pos, kind = 'punch') { this.game.audio.play('punch'); this.word(kind, pos); this.game.rig.addShake(0.25); g_hitstop(this.game, 0.05); }
  takedown(n, perch) {
    const g = this.game, p = g.player;
    const from = p.pos.clone(); const nfx = Math.sin(n.yaw), nfz = Math.cos(n.yaw);
    const to = new THREE.Vector3(n.pos.x - nfx * 0.9, n.pos.y, n.pos.z - nfz * 0.9);
    if (perch) { g.audio.play('zip'); this.addLingerLine(from.clone().setY(from.y + 1.2), n.pos.clone().setY(n.pos.y + 1.5), 0.4); }
    p.lock(perch ? 0.7 : 0.5, 'takedown'); p.addStyle(perch ? 200 : 120, null);
    const dur = perch ? 0.45 : 0.18; let t = 0;
    n.stun = 99; n.fsm.set('stunned');
    const step = () => {
      t += 1 / 60; const k = Math.min(1, t / dur);
      p.pos.lerpVectors(from, to, k); if (perch) p.pos.y += Math.sin(k * Math.PI) * 2;
      if (k < 1) requestAnimationFrame(step);
      else { n.takedown(); g.audio.play('takedown'); this.word('takedown', n.pos); g.rig.addShake(0.35); p.vel.set(0, 0, 0); p.emitNoise(perch ? 6 : 3); g.save.data.stats.takedowns++; }
    };
    p.yaw = Math.atan2(-(n.pos.x - p.pos.x), -(n.pos.z - p.pos.z));
    requestAnimationFrame(step);
  }
  // ---------- gadgets
  fireGadget() {
    const g = this.game, p = g.player, gd = this.gadget; if (!gd) return;
    if (this.ammo < (gd.cost ?? 1)) { g.audio.play('ui_back'); this.word('EMPTY!', p.pos); return; }
    this.ammo -= gd.cost ?? 1;
    const eye = p.eye(new THREE.Vector3()); const dir = p.lookDir(new THREE.Vector3());
    // soft auto-aim when not precision aiming
    if (!this.aiming) {
      let best = null, bd = 0.94;
      const cands = g.npcs.list.filter((n) => n.hostile && n.alive && !n.downed).map((n) => n.pos.clone().setY(n.pos.y + 1.1));
      if (g.boss && g.boss.alive) cands.push(g.boss.pos.clone().setY(g.boss.pos.y + 1));
      let bestT = null; const ents = g.npcs.list.filter((n) => n.hostile && n.alive && !n.downed);
      for (let i = 0; i < cands.length; i++) { const c = cands[i]; const v = c.clone().sub(eye); const d = v.length(); if (d > 45) continue; v.divideScalar(d); const dt = v.dot(dir); if (dt > bd) { bd = dt; best = v; bestT = i < ents.length ? ents[i] : g.boss; } }
      if (best) { dir.copy(best); this._homeTarget = bestT; } else this._homeTarget = null;
    }
    const pr = this.projPool.get(); if (!pr.mesh.parent) this.scene.add(pr.mesh);
    this.handWorld(this.handPos, 1);
    pr.mesh.position.copy(this.handPos); pr.prev.copy(this.handPos); pr.vel.copy(dir).multiplyScalar(gd.speed || 45);
    pr.life = gd.life || 1.2; pr.kind = gd.effect; pr.gadget = gd; pr.owner = 'player'; pr.gravity = gd.gravity || 0;
    pr.target = !this.aiming && gd.gravity == null ? this._homeTarget : null; // straight-line gadgets get gentle homing
    pr.mesh.material.uniforms.tint.value.set(gd.color || '#ffffff'); pr.mesh.material.uniforms.tintAmt.value = 1; pr.mesh.visible = true;
    pr.mesh.scale.setScalar(gd.size || 1);
    if (gd.effect === 'bind' || gd.effect === 'pull') { pr.rope = this.ropePool.get(); if (!pr.rope.parent) this.scene.add(pr.rope); pr.rope.visible = true; }
    g.audio.play(gd.sound || 'thwip'); bus.emit('combat:fire', gd); p.emitNoise(3);
    g.viewmodel && g.viewmodel.kick('R');
  }
  handWorld(out, side = 1) {
    const g = this.game, vm = g.viewmodel;
    if (g.rig.mode === 'fp' && vm) { out.set(0.22 * side, -0.12, -0.55); return g.renderer.camera.localToWorld(out); }
    if (g.heroModel && g.heroModel.root.visible) return boneWorld(g.heroModel, side < 0 ? 'handL' : 'handR', out);
    const p = g.player; const r = p.right(); return out.set(p.pos.x + r.x * 0.35 * side, p.pos.y + 1.35, p.pos.z + r.z * 0.35 * side);
  }
  updateProjectile(pr, dt) {
    const g = this.game; pr.life -= dt;
    pr.prev.copy(pr.mesh.position);
    if (pr.target && pr.owner === 'player' && (pr.target.alive !== false) && !pr.target.downed) {
      const tp = this._v.copy(pr.target.pos); tp.y += 1.1; tp.sub(pr.mesh.position); const dist = tp.length();
      if (dist > 0.5) { const sp = pr.vel.length(); tp.multiplyScalar(sp / dist); pr.vel.lerp(tp, Math.min(1, dt * 6)).setLength(sp); }
    }
    pr.vel.y -= pr.gravity * dt;
    pr.mesh.position.addScaledVector(pr.vel, dt);
    pr.mesh.rotation.x += dt * 12; pr.mesh.rotation.y += dt * 9;
    if (pr.rope) { this.handWorld(this.handPos); this.stretch(pr.rope, this.handPos, pr.mesh.position); }
    const a = pr.prev, b = pr.mesh.position; const seg = this._v2.subVectors(b, a); const len = seg.length();
    if (len > 0) {
      // NPC / player hits (segment-sphere)
      if (pr.owner === 'player') {
        for (const n of g.npcs.list) {
          if (!n.hostile || !n.alive || n.downed) continue;
          if (segSphere(a, seg, len, n.pos.x, n.pos.y + 1.0, n.pos.z, 0.75)) { this.impact(pr, b, n); return; }
        }
        if (g.boss && g.boss.alive && segSphere(a, seg, len, g.boss.pos.x, g.boss.pos.y + 1.0, g.boss.pos.z, 2.0)) { this.impact(pr, b, null, g.boss); return; }
        for (const t of this.targets) if (segSphere(a, seg, len, t.pos.x, t.pos.y + 1.2, t.pos.z, t.radius)) { t.onHit(pr.kind); this.projPool.release(pr); return; }
      } else {
        const p = g.player;
        if (segSphere(a, seg, len, p.pos.x, p.pos.y + 1.0, p.pos.z, 0.7)) {
          if (this.iframes <= 0) { p.hurt(pr.damage || 10, 'shot'); g.audio.play('hurt'); g.rig.addShake(0.4); }
          this.projPool.release(pr); return;
        }
      }
      seg.divideScalar(len);
      const h = g.world.collision.raycast(a.x, a.y, a.z, seg.x, seg.y, seg.z, len, (bx) => !bx.trigger && !bx.seeThrough);
      if (h) { this.impact(pr, new THREE.Vector3(...h.point)); return; }
    }
    if (pr.life <= 0) { if (pr.kind === 'boom') this.impact(pr, pr.mesh.position.clone()); else this.projPool.release(pr); }
  }
  impact(pr, point, npc, boss) {
    const g = this.game, gd = pr.gadget || {};
    switch (pr.kind) {
      case 'bind':
        if (npc) { npc.bind(gd.bind || 1); this.word('bind', npc.pos); g.audio.play('pod', { rate: 1.3 }); }
        if (boss) boss.tethered();
        if (pr.rope) this.addLingerLine(this.handWorld(new THREE.Vector3()), point, 0.25);
        break;
      case 'aoe':
        g.audio.play('pod'); this.word('pod', point);
        for (const n of g.npcs.list) if (n.hostile && n.alive && !n.downed && n.pos.distanceTo(point) < (gd.radius || 2.8)) n.bind(gd.bind || 1);
        if (boss) boss.tethered(0.5);
        g.fx.burst(point, '#e8f6f0', 14);
        break;
      case 'stun':
        if (npc) { npc.hit(1, g.player.pos, 'zap'); npc.stun = Math.max(npc.stun, gd.stun || 3); npc.fsm.set('stunned'); this.word('ZZAP!', npc.pos); g.fx.burst(npc.pos.clone().setY(npc.pos.y + 1), '#7fd8ff', 12); g.audio.play('sense', { rate: 1.8 }); }
        if (boss) boss.tethered(0.5);
        break;
      case 'mine': {
        if (npc) { npc.bind(3); this.word('SNAP!', npc.pos); break; }
        if (this.traps.length >= 3) { const old = this.traps.shift(); this.scene.remove(old.mesh); }
        const m = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 0.12, 8), new THREE.MeshBasicMaterial({ color: gd.color || 0xff8ab0 }));
        m.position.copy(point); m.position.y += 0.06; this.scene.add(m); this.traps.push({ mesh: m, t: 40, pos: m.position });
        g.audio.play('pod', { rate: 1.6 }); this.word('SET!', point);
        break;
      }
      case 'noise':
        g.audio.play('chirp'); g.fx.burst(point, '#f2c14e', 6);
        g.npcs.onNoise({ pos: point.clone(), radius: gd.radius || 20, source: 'decoy' });
        this.word('CHIRP!', point); bus.emit('combat:decoy', { pos: point });
        break;
      case 'boom': {
        g.audio.play('explosion'); g.fx.burst(point, '#ff8a2a', 22); this.word('boom', point); g.rig.addShake(0.6);
        const p = g.player; const d = p.pos.distanceTo(point);
        if (d < (pr.radius || 4.5) && this.iframes <= 0) { p.hurt(pr.damage || 18, 'boom'); const dir = p.pos.clone().sub(point).normalize(); p.vel.addScaledVector(dir, 10); p.vel.y = 6; if (!p.fsm.is('swing')) p.fsm.set('air'); }
        break;
      }
      default: break;
    }
    this.projPool.release(pr);
  }
  updateTraps(dt) {
    for (let i = this.traps.length - 1; i >= 0; i--) {
      const tr = this.traps[i]; tr.t -= dt; tr.mesh.rotation.y += dt * 2;
      let hit = null; for (const n of this.game.npcs.list) if (n.hostile && n.alive && !n.downed && n.pos.distanceTo(tr.pos) < 1.7) { hit = n; break; }
      if (hit) { hit.bind(3); this.word('SNAP!', hit.pos); this.game.audio.play('pod'); this.game.fx.burst(tr.pos, '#ff8ab0', 10); }
      if (hit || tr.t <= 0) { this.scene.remove(tr.mesh); this.traps.splice(i, 1); }
    }
  }
  addLingerLine(a, b, t) { const r = this.ropePool.get(); if (!r.parent) this.scene.add(r); r.visible = true; this.stretch(r, a, b); this.lingerLines.push({ r, t }); }
  stretch(m, a, b) {
    const d = a.distanceTo(b); m.position.copy(a); m.scale.set(0.06, 0.06, Math.max(0.01, d)); m.lookAt(b);
  }
  updateRopes(dt) {
    const g = this.game, p = g.player;
    if (p.ropeActive) {
      this.handWorld(this.handPos, p.swingSide);
      const slack = p.ropeLen - p.pos.distanceTo(p.anchor);
      this.rope.update(this.handPos, p.anchor, p.ropeShootT, slack, g.time, g.renderer.camera.position);
    } else this.rope.hide();
    for (let i = this.lingerLines.length - 1; i >= 0; i--) { const l = this.lingerLines[i]; l.t -= dt; if (l.t <= 0) { this.ropePool.release(l.r); this.lingerLines.splice(i, 1); } }
  }
  // ---------- enemy attacks
  telegraph(npc) { const d = npc.pos.distanceTo(this.game.player.pos); if (d < 30) { this.dangerT = 0.75; bus.emit('combat:danger', { npc }); } }
  enemyShoot(npc, p) {
    const g = this.game; const pr = this.projPool.get(); if (!pr.mesh.parent) this.scene.add(pr.mesh);
    const from = npc.pos.clone(); from.y += 1.4;
    const to = p.pos.clone(); to.y += 1.0; to.addScaledVector(p.vel, 0.25);
    to.x += (Math.random() - 0.5) * 1.2; to.z += (Math.random() - 0.5) * 1.2;
    const dir = to.sub(from).normalize();
    pr.mesh.position.copy(from); pr.prev.copy(from); pr.vel.copy(dir).multiplyScalar(48); pr.life = 1.5; pr.kind = 'bullet'; pr.owner = 'enemy'; pr.gravity = 0; pr.damage = npc.type.damage || 9; pr.gadget = null;
    pr.mesh.material.uniforms.tint.value.set('#ffe066'); pr.mesh.material.uniforms.tintAmt.value = 1; pr.mesh.scale.set(0.5, 0.5, 2.5); pr.mesh.visible = true;
    pr.mesh.lookAt(from.clone().add(dir));
    g.audio.play('gunshot', { vol: clamp(1 - npc.dist(p.pos) / 60, 0.15, 1) }); g.fx.burst(from, '#ffe066', 4);
  }
  enemyMelee(npc, p) {
    const g = this.game;
    if (this.iframes > 0) { this.word('MISS!', p.pos); return; }
    p.hurt(npc.type.damage || 11, 'melee'); g.audio.play('punch', { rate: 0.8 }); g.audio.play('hurt'); g.rig.addShake(0.5);
    const dx = p.pos.x - npc.pos.x, dz = p.pos.z - npc.pos.z, d = Math.hypot(dx, dz) || 1; p.vel.x += dx / d * 6; p.vel.z += dz / d * 6;
  }
  bomb(from, target, opts = {}) {
    const g = this.game; const pr = this.projPool.get(); if (!pr.mesh.parent) this.scene.add(pr.mesh);
    const T = opts.time || 1.3, grav = 14;
    const v = new THREE.Vector3((target.x - from.x) / T, (target.y - from.y + 0.5 * grav * T * T) / T, (target.z - from.z) / T);
    pr.mesh.position.copy(from); pr.prev.copy(from); pr.vel.copy(v); pr.life = T + 0.05; pr.kind = 'boom'; pr.owner = 'enemy'; pr.gravity = grav; pr.damage = opts.damage || 18; pr.radius = opts.radius || 4.5; pr.gadget = null;
    pr.mesh.material.uniforms.tint.value.set(opts.color || '#a24bd6'); pr.mesh.material.uniforms.tintAmt.value = 1; pr.mesh.scale.setScalar(2.2); pr.mesh.visible = true;
    g.fx.marker(target, T, pr.radius);
  }
}
function segSphere(a, seg, len, cx, cy, cz, r) {
  // closest point on segment a + seg(unnormalized) to sphere center
  const tx = cx - a.x, ty = cy - a.y, tz = cz - a.z;
  let t = (tx * seg.x + ty * seg.y + tz * seg.z) / (len * len); t = Math.max(0, Math.min(1, t));
  const px = a.x + seg.x * t - cx, py = a.y + seg.y * t - cy, pz = a.z + seg.z * t - cz;
  return px * px + py * py + pz * pz < r * r;
}
function g_hitstop(game, t) { game.hitstop = Math.max(game.hitstop || 0, t); }
