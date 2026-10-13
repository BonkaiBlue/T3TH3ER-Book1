// Data-driven mission runner. Chapters and side quests are lists of "steps" defined in packs.
// Step types are pluggable: TetherMod.game.missions.registerStep('myType', {start, update, end}).
import * as THREE from 'three';
import { bus } from '../core/events.js';
import { input } from '../ui/input.js';

export class MissionRunner {
  constructor(game) {
    this.game = game; this.active = null; this.stepIdx = -1; this.step = null; this.ctx = null; this.spawned = [];
    this.steps = { ...STEP_TYPES }; this.offs = [];
  }
  registerStep(name, impl) { this.steps[name] = impl; }
  // resolve a location spec into a Vector3
  loc(spec) {
    const w = this.game.world.data; if (!spec) return null;
    if (Array.isArray(spec)) return new THREE.Vector3(...spec);
    if (spec.isVector3) return spec.clone();
    if (spec.pos) return new THREE.Vector3(...spec.pos);
    if (spec.landmark) {
      const lm = w.landmarks[spec.landmark]; if (!lm) { console.warn('no landmark', spec.landmark); return this.game.player.pos.clone(); }
      const base = (spec.key && lm[spec.key]) ? lm[spec.key].clone() : lm.pos.clone();
      if (spec.offset) base.add(new THREE.Vector3(...spec.offset));
      if (spec.ground) { const h = this.game.world.collision.raycast(base.x, base.y + 50, base.z, 0, -1, 0, 120); if (h) base.y = h.point[1]; }
      return base;
    }
    if (spec.npc) { const n = this.game.npcs.byId(spec.npc); return n ? n.pos.clone() : null; }
    if (spec.relative) { const p = this.game.player; const f = p.fwd(); return p.pos.clone().add(new THREE.Vector3(f.x * spec.relative[2], spec.relative[1], f.z * spec.relative[2])); }
    return null;
  }
  start(def, opts = {}) {
    this.stop(false);
    this.active = def; this.stepIdx = (opts.startAt || 0) - 1; this.opts = opts;
    if (def.abilities) Object.assign(this.game.player.abilities, def.abilities);
    bus.emit('mission:start', def);
    this.next();
  }
  stop(failed) {
    if (this.step && this.impl && this.impl.end) this.impl.end.call(this, this.step, this.ctx);
    for (const off of this.offs) off(); this.offs = [];
    this.cleanupSpawns();
    this.active = null; this.step = null; this.impl = null; this.game.fx.setBeacon(null);
    this.game.hud.setObjective(null);
    if (failed) bus.emit('mission:failed');
  }
  cleanupSpawns() { for (const n of this.spawned) this.game.npcs.remove(n); this.spawned = []; for (const it of this.items || []) this.game.combat.removeInteractable(it); this.items = []; }
  next() {
    if (this.step && this.impl && this.impl.end) this.impl.end.call(this, this.step, this.ctx);
    for (const off of this.offs) off(); this.offs = [];
    this.stepIdx++;
    const def = this.active; if (!def) return;
    if (this.stepIdx >= def.steps.length) { this.complete(); return; }
    this.step = def.steps[this.stepIdx]; this.impl = this.steps[this.step.type];
    if (!this.impl) { console.warn('Unknown step type', this.step.type); this.next(); return; }
    this.ctx = { t: 0, done: false };
    this.game.fx.setBeacon(null);
    this.game.hud.setObjective(this.step.text || null, this.step.sub);
    if (this.step.thought) this.game.dialogue.thought(this.step.thought);
    this.impl.start && this.impl.start.call(this, this.step, this.ctx);
    // checkpoint save for story chapters
    if (this.opts.story) { this.game.save.data.story.step = this.stepIdx; this.game.save.write(); }
    if (this.step.checkpoint) { const g = this.game; const at = this.step.at ? this.loc(this.step.at) : g.player.pos.clone(); g.checkpoint = { pos: at, yaw: g.player.yaw }; }
  }
  on(ev, fn) { this.offs.push(bus.on(ev, fn)); }
  done() { if (this.ctx && !this.ctx.done) { this.ctx.done = true; this.game.audio.play('ui_ok'); setTimeout(() => { if (this.active) this.next(); }, this.step.delay ?? 350); } }
  complete() {
    const def = this.active; const g = this.game;
    this.cleanupSpawns(); this.game.fx.setBeacon(null); g.hud.setObjective(null);
    this.active = null; this.step = null; this.impl = null;
    const r = def.reward || {};
    if (r.unlockSkins) for (const s of r.unlockSkins) if (!g.save.data.unlockedSkins.includes(s)) g.save.data.unlockedSkins.push(s);
    if (r.flags) Object.assign(g.save.data.flags, r.flags);
    if (r.rep) g.save.data.reputation += r.rep;
    g.save.write();
    bus.emit('mission:complete', def);
  }
  update(dt) {
    if (!this.active || !this.step || !this.impl) return;
    this.ctx.t += dt;
    if (this.impl.update && !this.ctx.done) this.impl.update.call(this, this.step, this.ctx, dt);
    if (this.ctx.target) this.game.hud.setWaypoint(this.ctx.target);
  }
  spawnGroup(list) {
    const out = [];
    for (const s of list || []) {
      const base = this.loc(s.at) || this.game.player.pos.clone();
      const count = s.count || 1;
      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2 + (s.angle || 0); const r = count > 1 ? (s.spread ?? 2.5) : 0;
        const p = base.clone().add(new THREE.Vector3(Math.cos(a) * r, 0.2, Math.sin(a) * r));
        if (s.ground !== false) { const h = this.game.world.collision.raycast(p.x, p.y + 2, p.z, 0, -1, 0, 60); if (h) p.y = h.point[1]; }
        const patrol = s.patrol ? s.patrol.map((q) => base.clone().add(new THREE.Vector3(...q))) : null;
        const n = this.game.npcs.spawn(s.npc, p, { id: s.id && count === 1 ? s.id : undefined, yaw: s.yaw ?? (a + Math.PI), state: s.state, patrol, tag: s.tag, talk: s.talk, name: s.name, portrait: s.portrait, role: s.role });
        n.important = true; this.spawned.push(n); out.push(n);
      }
    }
    return out;
  }
}

const near = (a, b, r) => a.distanceTo(b) < r;

export const STEP_TYPES = {
  dialogue: {
    start(s, c) { this.game.dialogue.play(s.id, () => this.done()); },
  },
  thought: { start(s, c) { this.game.dialogue.thought(s.text, s.time); c.wait = s.time || 3.5; }, update(s, c) { if (c.t > c.wait) this.done(); } },
  wait: { update(s, c) { if (c.t > (s.time || 1)) this.done(); } },
  reach: {
    start(s, c) { c.target = this.loc(s.target); this.game.fx.setBeacon(c.target); if (s.hint) for (const k in s.hint) this.game.overlay.setHint(k, s.hint[k]); },
    update(s, c) { if (near(this.game.player.pos, c.target, s.radius || 5)) this.done(); },
    end(s) { if (s.hint) for (const k in s.hint) this.game.overlay.setHint(k, null); },
  },
  trigger: {
    start(s, c) { c.target = s.target ? this.loc(s.target) : null; this.on('trigger:enter', (e) => { if (e.name === s.name) this.done(); }); },
  },
  action: {
    // wait for a player verb event (tutorials)
    start(s, c) {
      c.count = 0;
      const evs = { jump: 'player:jump', crouch: 'player:crouch', slide: 'player:slide', vault: 'player:vault', climb: 'player:climb', mantle: 'player:mantle', wallrun: 'player:wallrun', swing: 'player:thwip', zip: 'player:ziparrive', ride: 'player:ride', sense: 'combat:sense', gadget: 'combat:fire', grab: 'player:grab', release: 'player:release', camera: 'camera:mode', dodge: 'combat:dodge', decoy: 'combat:decoy' };
      this.on(evs[s.action] || s.action, (e) => { if (s.action === 'ride' && !e) return; if (++c.count >= (s.count || 1)) this.done(); });
      if (s.hint) for (const k in s.hint) this.game.overlay.setHint(k, s.hint[k]);
      if (s.target) { c.target = this.loc(s.target); }
    },
    end(s) { if (s.hint) for (const k in s.hint) this.game.overlay.setHint(k, null); },
  },
  swingDistance: {
    start(s, c) { c.start = this.game.player.swingDistance; },
    update(s, c) { const d = this.game.player.swingDistance - c.start; this.game.hud.setObjective(s.text, `${Math.floor(d)} / ${s.meters} m`); if (d >= s.meters) this.done(); },
  },
  airtime: {
    start(s, c) { c.acc = 0; },
    update(s, c, dt) { const p = this.game.player; if (!p.ground && !p.fsm.is('climb', 'hang', 'wallrun')) c.acc += dt; else if (p.ground) c.acc = Math.max(0, c.acc - dt * 2); this.game.hud.setObjective(s.text, `${c.acc.toFixed(1)} / ${s.time}s`); if (c.acc >= s.time) this.done(); },
  },
  rings: {
    start(s, c) {
      const g = this.game; c.rings = []; c.idx = 0; c.time = s.timeLimit || 0;
      const pts = s.points ? s.points.map((p) => this.loc(p)) : autoRingPath(g, s.count || 6, s.from ? this.loc(s.from) : g.player.pos);
      const geo = new THREE.TorusGeometry(3.2, 0.35, 5, 12);
      for (const p of pts) { const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xf2c14e })); m.position.copy(p); g.world.dynamic.add(m); c.rings.push(m); }
      c.target = pts[0];
    },
    update(s, c, dt) {
      const g = this.game; const p = g.player.pos.clone(); p.y += 1;
      c.rings.forEach((r, i) => { r.rotation.y += dt; r.material.color.set(i === c.idx ? 0xff2fb3 : i < c.idx ? 0x39ff6a : 0xf2c14e); r.visible = i >= c.idx; });
      const r = c.rings[c.idx];
      if (r && r.position.distanceTo(p) < 4.5) { c.idx++; g.audio.play('collect'); c.target = c.rings[c.idx] ? c.rings[c.idx].position : null; }
      if (s.timeLimit) {
        const left = s.timeLimit - c.t; g.hud.setObjective(s.text, `${c.idx}/${c.rings.length}  ⏱ ${Math.max(0, left).toFixed(1)}s`);
        if (left <= 0) { g.hud.toast('Out of time! Try again.'); this.stepIdx--; this.next(); return; }
      } else g.hud.setObjective(s.text, `${c.idx}/${c.rings.length}`);
      if (c.idx >= c.rings.length) this.done();
    },
    end(s, c) { for (const r of c.rings || []) this.game.world.dynamic.remove(r); },
  },
  defeat: {
    start(s, c) {
      c.npcs = this.spawnGroup(s.spawn);
      c.target = c.npcs.length ? c.npcs[0].pos : null;
      if (s.civilians) c.civ = this.spawnGroup(s.civilians);
      if (s.stealth) c.stealth = true;
      this.on('npc:alert', () => { if (s.stealthFail) { this.game.hud.toast('Spotted! Restarting…'); setTimeout(() => { this.cleanupSpawns(); this.stepIdx--; this.next(); }, 900); } });
    },
    update(s, c) {
      const left = c.npcs.filter((n) => n.alive && !n.downed);
      this.game.hud.setObjective(s.text, `${c.npcs.length - left.length} / ${c.npcs.length}`);
      c.target = left.length ? left[0].pos.clone().setY(left[0].pos.y + 2.5) : null;
      if (!left.length) this.done();
    },
  },
  talk: {
    start(s, c) {
      let n = this.game.npcs.byId(s.npc);
      if (!n && s.spawn) n = this.spawnGroup([{ ...s.spawn, id: s.npc }])[0];
      if (!n) { this.done(); return; }
      n.talk = s.dialogue; n.setIcon('talk'); c.npc = n;
      this.on('npc:talk', (e) => { if (e.npc === n) { this.game.dialogue.play(s.dialogue, () => this.done(), n); } });
    },
    update(s, c) { if (c.npc) c.target = c.npc.pos.clone().setY(c.npc.pos.y + 2.2); },
    end(s, c) { if (c.npc) { c.npc.talk = s.after || null; c.npc.setIcon(s.after ? 'talk' : null); } },
  },
  interact: {
    start(s, c) {
      c.target = this.loc(s.target);
      const it = this.game.combat.addInteractable({ pos: c.target, label: s.label || 'USE', radius: s.radius || 2.4, onUse: () => { this.game.combat.removeInteractable(it); if (s.dialogue) this.game.dialogue.play(s.dialogue, () => this.done()); else this.done(); } });
      this.items = this.items || []; this.items.push(it);
    },
  },
  collect: {
    start(s, c) {
      const g = this.game; c.items = []; c.got = 0;
      const spots = s.points ? s.points.map((p) => this.loc(p)) : pickSpots(g, s.count || 5, s.near ? this.loc(s.near) : g.player.pos, s.radius || 120);
      const geo = new THREE.OctahedronGeometry(0.7, 0);
      for (const p of spots) { const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: new THREE.Color(s.color || '#f2c14e') })); m.position.copy(p); g.world.dynamic.add(m); c.items.push(m); }
    },
    update(s, c, dt) {
      const g = this.game; const p = g.player.pos.clone(); p.y += 1;
      let nearest = null, nd = 1e9;
      for (const m of c.items) { if (!m.visible) continue; m.rotation.y += dt * 2; m.position.y += Math.sin(c.t * 3) * 0.005; const d = m.position.distanceTo(p); if (d < 2.2) { m.visible = false; c.got++; g.audio.play('collect'); g.combat.word(s.word || 'GOT IT!', m.position); } else if (d < nd) { nd = d; nearest = m; } }
      c.target = nearest ? nearest.position : null;
      g.hud.setObjective(s.text, `${c.got} / ${c.items.length}`);
      if (c.got >= c.items.length) this.done();
    },
    end(s, c) { for (const m of c.items || []) this.game.world.dynamic.remove(m); },
  },
  boss: {
    start(s, c) {
      const g = this.game; c.arena = this.loc(s.arena);
      c.boss = g.spawnBoss(s.id, c.arena);
      this.on('boss:defeated', () => { c.won = true; setTimeout(() => this.done(), 1600); });
      this.on('boss:summon', (e) => { const n = this.spawnGroup([{ npc: 'jester_goon', at: c.arena, count: e.count, spread: 5, state: 'combat' }]); for (const x of n) { x.aware = true; } });
      g.hud.showBoss(s.name || 'BOSS', c.boss);
    },
    update(s, c) { c.target = c.boss && c.boss.alive ? c.boss.pos.clone().setY(c.boss.pos.y + 3) : null; },
    end(s, c) { this.game.hud.showBoss(null); },
  },
  ride: {
    start(s, c) { c.target = this.loc(s.target); this.game.fx.setBeacon(c.target); c.limit = s.timeLimit || 0; },
    update(s, c) {
      const g = this.game; const p = g.player;
      if (s.requireRide && !p.ride && c.t > 1.5) { g.hud.toast('Stay on your ride! Restarting…'); this.stepIdx--; this.next(); return; }
      if (c.limit) { const left = c.limit - c.t; g.hud.setObjective(s.text, `⏱ ${Math.max(0, left).toFixed(1)}s`); if (left <= 0) { g.hud.toast('Late delivery! Try again.'); this.stepIdx--; this.next(); return; } }
      if (near(p.pos, c.target, s.radius || 6)) this.done();
    },
  },
  travel: {
    start(s) { this.game.travel(s.city, { keepMission: true, spawn: s.spawn }).then(() => this.done()); },
  },
  crime: { // run a specific crime (from the crimes registry) as a story/side step
    start(s, c) {
      const g = this.game; const def = g.registry.get('crimes', s.crime);
      g.activities.startCrime(def, s.at ? this.loc(s.at) : null);
      this.on('crime:stopped', () => this.done());
    },
    update(s, c) { const cr = this.game.activities.crime; if (!cr && !c.done && c.t > 2) { this.game.activities.startCrime(this.game.registry.get('crimes', s.crime), s.at ? this.loc(s.at) : null); } },
  },
  setAbility: { start(s) { Object.assign(this.game.player.abilities, s.abilities); this.done(); } },
  title: { start(s) { this.game.hud.titleCard(s.title, s.subtitle, () => this.done()); } },
  teleport: { start(s) { const p = this.loc(s.target); this.game.player.spawn(p, s.yaw || 0); this.done(); } },
  emit: { start(s) { bus.emit(s.event, s.payload); this.done(); } },
  fire: { // facility fire front advances behind player
    start(s) { const w = this.game.world; if (w.fire) w.fire.front = s.from ?? 0; this.game.fireRate = s.rate || 2.2; this.game.fireOn = true; this.done(); },
  },
};

function autoRingPath(g, n, from) {
  // pick a chain of roofs ahead of the player and hang rings between them at swing height
  const w = g.world.data; const pts = []; let cur = from.clone(); let dir = g.player.fwd().clone();
  let tries = 0;
  for (let i = 0; i < n && tries < 80; i++, tries++) {
    const cands = w.roofs.filter((r) => { const cx = (r.x0 + r.x1) / 2, cz = (r.z0 + r.z1) / 2; const dx = cx - cur.x, dz = cz - cur.z, d = Math.hypot(dx, dz); return d > 28 && d < 60 && (dx * dir.x + dz * dir.z) / d > 0.3; });
    let r = cands.sort((a, b) => b.y - a.y)[0];
    if (!r) { dir.applyAxisAngle(new THREE.Vector3(0, 1, 0), 1.2); i--; continue; }
    const p = new THREE.Vector3((r.x0 + r.x1) / 2, 0, (r.z0 + r.z1) / 2);
    // ring sits in the street between current and roof, at mid height
    const mid = cur.clone().lerp(p, 0.55); mid.y = Math.max(10, Math.min(r.y, 40) * 0.7);
    pts.push(mid); dir = p.clone().sub(cur).setY(0).normalize(); cur = p;
  }
  return pts;
}
function pickSpots(g, n, near, radius) {
  const spots = g.world.data.collectibleSpots.map((s) => new THREE.Vector3(...s)).filter((v) => v.distanceTo(near) < radius && v.distanceTo(near) > 15);
  spots.sort(() => Math.random() - 0.5);
  return spots.slice(0, n);
}
export { pickSpots };
