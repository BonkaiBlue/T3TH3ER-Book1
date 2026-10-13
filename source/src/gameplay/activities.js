// Free-roam activities: random crimes (police scanner), side-quest givers, persistent collectibles.
import * as THREE from 'three';
import { bus } from '../core/events.js';
import { rng, hashStr } from '../core/util.js';
import { GeoBuilder, C } from '../render/geo.js';
import { comicMaterial } from '../render/materials.js';

export class Activities {
  constructor(game) {
    this.game = game; this.crime = null; this.crimeTimer = 20; this.givers = []; this.pages = []; this.enabled = false;
    bus.on('npc:talk', (e) => this.onTalk(e.npc));
  }
  setup(cityId) {
    this.clear();
    const g = this.game; this.enabled = true; this.crimeTimer = 18;
    // side quest givers in this city
    for (const sq of g.registry.list('sideQuests')) {
      if (sq.city && sq.city !== cityId) continue;
      if (g.save.data.sideQuests.done.includes(sq.id) && !sq.repeatable) continue;
      if (sq.requires && !g.save.data.flags[sq.requires]) continue;
      const pos = g.missions.loc(sq.giver.at); if (!pos) continue;
      const n = g.npcs.spawn(sq.giver.npc, pos, { id: 'giver_' + sq.id, talk: sq.giver.dialogue, name: sq.giver.name, portrait: sq.giver.portrait, state: sq.giver.state || 'idle', yaw: sq.giver.yaw || 0 });
      n.important = true; n.sideQuest = sq; this.givers.push(n);
    }
    // golden age pages (persistent collectibles)
    const spots = g.world.data.collectibleSpots; const R = rng(hashStr(cityId) ^ 0x51);
    const def = g.registry.get('collectibles', 'pages'); const per = def ? def.perCity : 20;
    const chosen = [...spots].sort(() => R() - 0.5).slice(0, per);
    const geo = new GeoBuilder(); geo.cbox(0, 0, 0, 0.8, 1.1, 0.06, C('#fff4dc')); geo.cbox(0, 0.2, 0.035, 0.6, 0.5, 0.01, C('#e4573d')); geo.cbox(0, -0.3, 0.035, 0.6, 0.15, 0.01, C('#2a9d9a'));
    const pg = geo.build(); const mat = comicMaterial({ atlas: false, emissive: 0.6 });
    chosen.forEach((s, i) => {
      const id = cityId + ':' + i; if (g.save.data.collectibles.includes(id)) return;
      const m = new THREE.Mesh(pg, mat); m.position.set(s[0], s[1], s[2]); g.world.dynamic.add(m); this.pages.push({ id, m });
    });
  }
  clear() {
    const g = this.game;
    for (const n of this.givers) g.npcs.remove(n); this.givers = [];
    for (const p of this.pages) g.world.dynamic.remove(p.m); this.pages = [];
    this.endCrime(false);
  }
  onTalk(n) {
    const g = this.game;
    if (!n.sideQuest) return;
    if (g.missions.active) { g.hud.toast('Finish your current job first.'); return; }
    const sq = n.sideQuest;
    g.dialogue.play(sq.giver.dialogue, (res) => {
      if (res === 'decline') return;
      this.endCrime(false);
      g.missions.start(sq, { side: true });
      const off = bus.on('mission:complete', (def) => {
        if (def !== sq) return; off();
        if (!g.save.data.sideQuests.done.includes(sq.id)) g.save.data.sideQuests.done.push(sq.id);
        g.save.write(); g.hud.toast(`Side job complete: ${sq.name}`, 3);
        if (sq.outro) g.dialogue.play(sq.outro);
        if (!sq.repeatable) { g.npcs.remove(n); this.givers.splice(this.givers.indexOf(n), 1); }
      });
    }, n);
  }
  update(dt) {
    const g = this.game, p = g.player;
    if (this.crime) this.updateCrime(dt);
    if (!this.enabled) return;
    // pages
    for (let i = this.pages.length - 1; i >= 0; i--) {
      const pg = this.pages[i]; pg.m.rotation.y += dt * 1.5;
      if (pg.m.position.distanceTo(p.pos) < 2.2) {
        g.world.dynamic.remove(pg.m); this.pages.splice(i, 1); g.save.data.collectibles.push(pg.id); g.save.write();
        g.audio.play('collect'); g.combat.word('PAGE!', pg.m.position);
        g.hud.toast(`Golden Age Page found! (${g.save.data.collectibles.length} total)`);
        bus.emit('collectible', pg.id);
        for (const sk of g.registry.list('skins')) if (sk.unlockPages && g.save.data.collectibles.length >= sk.unlockPages && !g.save.data.unlockedSkins.includes(sk.id)) { g.save.data.unlockedSkins.push(sk.id); g.save.write(); g.hud.toast(`Suit unlocked: ${sk.name}!`, 3); }
      }
    }
    // crimes (random, free roam only)
    if (g.missions.active || !g.freeRoam || this.crime) return;
    this.crimeTimer -= dt; if (this.crimeTimer <= 0) this.startCrime();
  }
  startCrime(forced, forcedAt) {
    const g = this.game, p = g.player; const defs = g.registry.list('crimes').filter((c) => !c.storyOnly && (!c.city || c.city === g.cityId) && (!c.requiresFlag || g.save.data.flags[c.requiresFlag]));
    if (!defs.length && !forced) return;
    const R = Math.random; const def = forced || defs[(R() * defs.length) | 0];
    let at = forcedAt ? forcedAt.clone() : null;
    if (!at) {
      let spots = g.world.data.crimeSpots.filter((s) => { const d = Math.hypot(s[0] - p.pos.x, s[2] - p.pos.z); return d > 45 && d < 230 && (!def.spot || def.spot.includes(s[3])); });
      if (!spots.length && forced) spots = g.world.data.crimeSpots;
      if (!spots.length) { this.crimeTimer = 10; return; }
      const s = spots[(R() * spots.length) | 0]; at = new THREE.Vector3(s[0], s[1], s[2]);
    }
    const c = { def, at, npcs: [], civ: [], t: 0 };
    if (def.kind === 'van') this.spawnVan(c);
    else {
      c.npcs = g.missions.spawnGroup((def.enemies || []).map((e) => ({ npc: e[0], count: e[1], at, spread: 3, state: 'idle' })));
      c.civ = g.missions.spawnGroup((def.civilians || []).map((e) => ({ npc: e.npc, at: at.clone().add(new THREE.Vector3(1.5, 0, 1.5)), state: e.state || 'cower', role: 'hostage' })));
      g.missions.spawned = g.missions.spawned.filter((n) => !c.npcs.includes(n) && !c.civ.includes(n)); // owned by crime, not mission
      for (const n of c.npcs) n.yaw = Math.random() * 6.28;
    }
    this.crime = c;
    g.audio.play('siren', { vol: 0.5 });
    g.hud.scanner(def.scanner || `Crime in progress: ${def.name}`);
    g.hud.setObjective(def.name, 'Police scanner');
  }
  spawnVan(c) {
    const g = this.game; const lanes = g.world.data.lanes;
    const lane = lanes.reduce((best, L) => { const d = L.axis === 'z' ? Math.abs(L.c - c.at.x) : Math.abs(L.c - c.at.z); return !best || d < best.d ? { L, d } : best; }, null).L;
    const b = new GeoBuilder(); b.cbox(0, 1.3, 0, 2.2, 2.0, 5.0, C('#3a3a48')); b.cbox(0, 1.5, 2.3, 2.0, 1.0, 0.5, C('#7fb3b8')); b.cbox(0, 1.9, -0.3, 2.22, 0.5, 3, C('#c9a23a'));
    for (const z of [-1.7, 1.7]) for (const x of [-1, 1]) b.cbox(x, 0.4, z, 0.4, 0.8, 0.8, C('#111'));
    const m = new THREE.Mesh(b.build(), comicMaterial({ atlas: false })); g.world.dynamic.add(m);
    const v = { mesh: m, lane, t: lane.axis === 'z' ? c.at.z : c.at.x, dir: 1, speed: 15, hits: 0, stopped: false, pos: new THREE.Vector3() };
    c.van = v;
    v.target = { pos: v.pos, radius: 2.6, onHit: () => { v.hits++; g.combat.word('THUNK!', v.pos); g.audio.play('pod', { rate: 0.7 }); v.speed *= 0.55; if (v.hits >= (c.def.hitsToStop || 3)) this.stopVan(c); } };
    g.combat.targets.push(v.target);
  }
  stopVan(c) {
    const g = this.game, v = c.van; if (v.stopped) return; v.stopped = true; g.audio.play('explosion', { vol: 0.5, rate: 1.4 });
    g.combat.targets.splice(g.combat.targets.indexOf(v.target), 1);
    c.npcs = g.missions.spawnGroup([{ npc: 'thug', count: 2, at: v.pos.clone(), spread: 3, state: 'combat' }, { npc: 'thug_gun', count: 1, at: v.pos.clone(), spread: 4, state: 'combat' }]);
    g.missions.spawned = g.missions.spawned.filter((n) => !c.npcs.includes(n));
    for (const n of c.npcs) n.aware = true;
  }
  updateCrime(dt) {
    const g = this.game, c = this.crime; c.t += dt;
    if (c.van && !c.van.stopped) {
      const v = c.van, L = v.lane; v.t += v.dir * v.speed * dt; if (v.t > L.b || v.t < L.a) v.dir *= -1;
      if (L.axis === 'z') { v.pos.set(L.c + 3.2 * v.dir, 0, v.t); v.mesh.rotation.y = v.dir > 0 ? 0 : Math.PI; } else { v.pos.set(v.t, 0, L.c - 3.2 * v.dir); v.mesh.rotation.y = v.dir > 0 ? Math.PI / 2 : -Math.PI / 2; }
      v.mesh.position.copy(v.pos); v.speed = Math.min(15, v.speed + dt * 1.2);
      g.hud.setObjective(c.def.name, `Tether the van: ${v.hits}/${c.def.hitsToStop || 3}`);
      g.hud.setWaypoint(v.pos.clone().setY(4));
      if (g.player.pos.distanceTo(v.pos) > 420) this.endCrime(false);
      return;
    }
    const left = c.npcs.filter((n) => n.alive && !n.downed);
    if (left.length) { g.hud.setWaypoint(left[0].pos.clone().setY(left[0].pos.y + 2.4)); g.hud.setObjective(c.def.name, `${c.npcs.length - left.length}/${c.npcs.length} stopped`); }
    if (!left.length && c.npcs.length) { this.endCrime(true); return; }
    if (g.player.pos.distanceTo(c.at) > 420 || c.t > 240) this.endCrime(false);
  }
  endCrime(success) {
    const g = this.game, c = this.crime; if (!c) return;
    this.crime = null; this.crimeTimer = 30 + Math.random() * 35;
    g.hud.setObjective(null); g.hud.setWaypoint(null);
    if (success) {
      g.save.data.stats.crimes++; g.save.data.reputation += c.def.rep || 10; g.save.write();
      g.hud.toast(`${c.def.name} stopped! +${c.def.rep || 10} rep`, 3); g.audio.play('ui_ok');
      for (const n of c.civ) { n.fsm.set('cheer'); }
      if (c.def.thanks) g.dialogue.bark(c.def.thanks[(Math.random() * c.def.thanks.length) | 0]);
      bus.emit('crime:stopped', c.def);
    }
    setTimeout(() => {
      for (const n of [...c.npcs, ...c.civ]) g.npcs.remove(n);
      if (c.van) { g.world.dynamic.remove(c.van.mesh); const i = g.combat.targets.indexOf(c.van.target); if (i >= 0) g.combat.targets.splice(i, 1); }
    }, success ? 8000 : 0);
  }
}
