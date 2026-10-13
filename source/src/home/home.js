// HOME — Okafor's walk-up in Kettle's Row (GTA-style safehouse) + the economy it runs on.
//   ⚙ PARTS: earned from clean trick combos, crimes, takedowns, side jobs, pages, chapters.
//   LINE FLUID: reserve that reloads gadget cartridges; refill at the Workstation or rooftop supply caches.
//   Stations: Workstation (refill + upgrades), Kitchen (cooking minigame → buffs), Fridge (snack),
//   BRASS-64 (BASIC computer), Sewing Station (costume designer + suit mods), Bed (time of day),
//   TV (Klaxon news), Clippings (stats & story so far), Window (back out to the city).
import * as THREE from 'three';
import { bus } from '../core/events.js';
import { input } from '../ui/input.js';
import { Terminal } from './terminal.js';
import { Cooking } from './cooking.js';
import { Sewing } from './sewing.js';
import { clamp } from '../core/util.js';

const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const BASE_STATS = () => ({ swingPower: 1, zipRange: 55, maxHealth: 100, armor: 0, fluidCap: 0, mag: 0, sense: 0, regen: 1, quiet: 0 });
const BUFF_ICON = { regen: '✚', armor: '🛡', swing: '🌀', quiet: '🤫', maxhp: '❤' };

export class Home {
  constructor(game) {
    this.game = game; this.el = document.getElementById('home'); this.station = null; this.showcase = null;
    this.terminal = new Terminal(game, this); this.cooking = new Cooking(game, this); this.sewing = new Sewing(game, this);
    this.snackCool = 0; this._buffTick = 0;
    this.registerCustomSuits();
    this._wire();
  }
  get S() { return this.game.save.data; }
  _wire() {
    const g = this.game;
    bus.on('player:stylecash', (e) => { if (e.parts > 0) this.addParts(e.parts, `STYLE x${e.combo}`); });
    bus.on('player:trick', () => { this.S.stats.tricks = (this.S.stats.tricks || 0) + 1; });
    bus.on('crime:stopped', () => this.addParts(6, 'CRIME STOPPED'));
    bus.on('npc:takedown', () => this.addParts(1, null));
    bus.on('collectible', () => this.addParts(3, 'PAGE'));
    bus.on('boss:defeated', () => this.addParts(20, 'BOSS'));
    bus.on('mission:complete', (def) => { if (def.side) this.addParts(12, 'SIDE JOB'); else if (g.registry.get('chapters', def.id)) this.addParts(25, 'CHAPTER'); });
  }

  // ------------------------------------------------------------------ economy
  addParts(n, why) {
    if (!n) return;
    this.S.parts = (this.S.parts || 0) + n; this.game.save.write();
    this.game.hud.partsPop(n, why);
  }
  spend(n) { if ((this.S.parts || 0) < n) { this.game.audio.play('ui_back'); this.game.hud.toast(`Need ${n} ⚙ parts (you have ${this.S.parts}).`, 1.8); return false; } this.S.parts -= n; this.game.save.write(); this.game.audio.play('collect'); return true; }
  fluidCap() { return 60 + (this.game.player.stats.fluidCap || 0); }
  refill(amount, label) {
    const g = this.game, S = this.S; const cap = this.fluidCap();
    const before = S.fluid; S.fluid = Math.min(cap, (S.fluid || 0) + (amount ?? cap)); g.combat.ammo = g.combat.maxAmmo;
    if (label) g.hud.toast(`${label}: line fluid ${Math.round(S.fluid)}/${cap} · cartridges full`, 2);
    g.save.write(); return S.fluid - before;
  }
  // Recompute player.stats from upgrades + current suit mod + active buffs.
  applyUpgrades() {
    const g = this.game, p = g.player, S = this.S, st = BASE_STATS();
    for (const up of g.registry.list('upgrades')) {
      const lvl = (S.upgrades && S.upgrades[up.id]) || 0; if (!lvl) continue;
      if (up.stat) st[up.stat] = (st[up.stat] || 0) + up.per * lvl;
      if (up.gadget && !S.inventory.gadgets.includes(up.gadget)) S.inventory.gadgets.push(up.gadget);
    }
    const skin = g.registry.get('skins', g.activeSkin);
    const mod = skin && skin.mod && g.registry.get('suitMods', skin.mod);
    if (mod) { st.armor += mod.armor || 0; st.swingPower += mod.swing || 0; st.quiet += mod.quiet || 0; st.mag += mod.mag || 0; }
    for (const b of S.buffs || []) {
      if (b.type === 'regen') st.regen += b.amount; if (b.type === 'armor') st.armor += b.amount; if (b.type === 'swing') st.swingPower += b.amount;
      if (b.type === 'quiet') st.quiet += b.amount; if (b.type === 'maxhp') st.maxHealth += b.amount;
    }
    st.armor = Math.min(0.6, st.armor); st.quiet = Math.min(0.8, st.quiet);
    p.stats = st;
    const hpWas = p.maxHealth; p.maxHealth = st.maxHealth; if (p.maxHealth > hpWas) p.health += p.maxHealth - hpWas; p.health = Math.min(p.health, p.maxHealth);
    g.combat.maxAmmo = 12 + (st.mag | 0); g.combat.ammo = Math.min(g.combat.ammo, g.combat.maxAmmo);
    S.fluid = Math.min(S.fluid, this.fluidCap());
  }
  addBuff(type, amount, time, label) {
    const S = this.S; S.buffs = (S.buffs || []).filter((b) => b.type !== type);
    S.buffs.push({ type, amount, left: time, label }); this.applyUpgrades(); this.game.save.write();
  }
  update(dt) {
    // buffs tick only while playing
    if (this.game.state === 'play' && this.S.buffs && this.S.buffs.length) {
      let changed = false;
      for (const b of this.S.buffs) b.left -= dt;
      const keep = this.S.buffs.filter((b) => b.left > 0); if (keep.length !== this.S.buffs.length) { changed = true; this.S.buffs = keep; }
      this._buffTick += dt; if (this._buffTick > 10) { this._buffTick = 0; this.game.save.write(); }
      if (changed) { this.applyUpgrades(); this.game.hud.toast('A meal buff wore off.', 1.4); }
    }
    this.snackCool = Math.max(0, this.snackCool - dt);
    if (this.station === 'pc') this.terminal.update(dt);
    if (this.station === 'kitchen') this.cooking.update(dt);
    if (this.station) {
      if (input.pressed('circle') && this.station !== 'pc' && !this.cooking.busy) this.close();
    }
  }
  buffIcons() { return (this.S.buffs || []).map((b) => `<span title="${b.label || b.type}">${BUFF_ICON[b.type] || '•'}${Math.ceil(b.left / 60)}m</span>`).join(''); }

  // ------------------------------------------------------------------ custom suits (Sewing Station)
  registerCustomSuits() {
    const list = (this.S.customSkins || []).map((c) => ({ ...c, unlocked: true, style: 'hero' }));
    this.game.registry.addPack({ id: 'custom-suits', name: 'My Sewn Suits', core: true, priority: 100, description: 'Suits you designed at the Sewing Station.', skins: list });
    this.game.registry.rebuild();
  }

  // ------------------------------------------------------------------ entering / leaving
  canTravelNow() {
    const g = this.game;
    if (g.storyMode && g.missions.active) { g.hud.toast('Finish the current story mission first.', 2); g.audio.play('ui_back'); return false; }
    return true;
  }
  async enter() {
    const g = this.game; if (!this.canTravelNow()) return;
    this.prevAbilities = { ...g.player.abilities }; this.returnCity = g.cityId;
    const ok = await g.travel('apartment', { freeRoam: false, palette: 'interior', yaw: Math.PI });
    if (!ok) return;
    g.storyMode = false;
    g.player.abilities = { swing: false, zip: false, gadgets: false, ride: false, wallrun: false, climb: false };
    this.setupStations();
    if (!this.S.homeVisited) { this.S.homeVisited = true; g.save.write(); g.dialogue.play('home_first'); }
    else g.dialogue.thought('Home. Steve is on the windowsill again.', 3);
  }
  leave() {
    const g = this.game; this.close(true);
    g.startFreeRoam('kettle', { spawn: { landmark: 'home', key: 'top' }, yaw: 0 });
  }
  setupStations() {
    const g = this.game; const st = g.world.data.stations || [];
    for (const s of st) g.combat.addInteractable({ pos: s.pos, label: s.label, radius: s.radius, onUse: () => this.openStation(s.id) });
  }

  // ------------------------------------------------------------------ station panels
  panel(title, cls = '') {
    this.el.innerHTML = ''; this.el.className = 'show ' + cls;
    const p = h('div', 'hpanel'); const top = h('div', 'htop');
    top.appendChild(h('h2', 'ptitle', title));
    top.appendChild(h('div', 'hstat', `⚙ <b>${this.S.parts || 0}</b> · 🧪 <b>${Math.round(this.S.fluid || 0)}/${this.fluidCap()}</b>`));
    const x = h('button', 'hclose', '✕'); x.addEventListener('click', () => this.close()); top.appendChild(x);
    p.appendChild(top); this.el.appendChild(p); return p;
  }
  btn(label, fn, cls = '') { const b = h('button', 'cbtn ' + cls, label); b.addEventListener('click', (e) => { e.stopPropagation(); this.game.audio.play('ui_click'); fn(); }); return b; }
  openStation(id) {
    const g = this.game; if (g.state !== 'play') return;
    if (id === 'window') { this.leave(); return; }
    if (id === 'fridge') { this.snack(); return; }
    this.station = id; g.state = 'home'; g.overlay.setVisible(false); input.clearTouch(); g.hud.show(false);
    document.exitPointerLock && document.exitPointerLock();
    ({ workstation: () => this.workstation(), kitchen: () => this.cooking.open(), pc: () => this.terminal.open(), sewing: () => this.sewing.open(),
      bed: () => this.bed(), tv: () => this.tv(), clippings: () => this.clippings() })[id]();
    bus.emit('home:station', id);
  }
  close(silent) {
    const g = this.game; if (!this.station) return;
    if (this.station === 'pc') this.terminal.close();
    if (this.station === 'sewing') this.sewing.close();
    if (this.station === 'kitchen') this.cooking.close();
    this.station = null; this.showcase = null; this.el.className = ''; this.el.innerHTML = '';
    if (g.state === 'home') { g.state = 'play'; g.overlay.setVisible(true); g.hud.show(true); }
    if (!silent) g.audio.play('ui_back');
    input.consume('square'); input.consume('cross'); input.consume('circle');
  }
  snack() {
    const g = this.game;
    if (this.snackCool > 0) { g.hud.toast(`Fridge is empty. Groceries tomorrow. (${Math.ceil(this.snackCool)}s)`, 1.6); return; }
    this.snackCool = 120; g.player.health = g.player.maxHealth; this.addBuff('regen', 1, 120, 'Cold pizza');
    g.audio.play('collect'); g.hud.toast('Cold pizza. Health full + regen for 2 min.', 2);
  }
  workstation(tab = 'refill') {
    const g = this.game, S = this.S; const p = this.panel('WORKSTATION', 'work');
    const tabs = h('div', 'htabs');
    for (const [id, l] of [['refill', 'REFILL'], ['upgrades', 'UPGRADES'], ['gadgets', 'GADGETS']]) tabs.appendChild(this.btn(l, () => this.workstation(id), tab === id ? 'sel' : ''));
    p.appendChild(tabs);
    if (tab === 'refill') {
      const cap = this.fluidCap();
      p.appendChild(h('p', 'note', `Okafor's bench can mix line fluid from tap water and "do not ask". Refills at home are free.<br>Reserve: <b>${Math.round(S.fluid)}/${cap}</b> · Cartridges: <b>${g.combat.ammo}/${g.combat.maxAmmo}</b>`));
      const bar = h('div', 'hbar'); bar.innerHTML = `<i style="transform:scaleX(${clamp(S.fluid / cap, 0, 1)})"></i>`; p.appendChild(bar);
      p.appendChild(this.btn('🧪 REFILL EVERYTHING', () => { this.refill(null); g.audio.play('ui_ok'); this.workstation('refill'); }, 'big'));
      p.appendChild(h('p', 'note small', 'Out in the city: teal supply caches on rooftops top you up. Hold ■ (with nothing nearby) to reload cartridges from your reserve.'));
    } else if (tab === 'upgrades') {
      const grid = h('div', 'upgrades');
      for (const up of g.registry.list('upgrades')) {
        const lvl = (S.upgrades[up.id] || 0), max = up.costs.length, next = up.costs[lvl];
        const c = h('div', 'upg' + (lvl >= max ? ' maxed' : ''));
        c.innerHTML = `<div class="ui">${up.icon || '⚙'}</div><div class="ut"><b>${up.name}</b><small>${up.desc}</small><div class="pips">${'■'.repeat(lvl)}${'□'.repeat(max - lvl)}</div></div>`;
        if (lvl < max) c.appendChild(this.btn(`⚙ ${next}`, () => { if (this.spend(next)) { S.upgrades[up.id] = lvl + 1; this.applyUpgrades(); g.save.write(); g.hud.toast(`${up.name} ${lvl + 1 >= max ? 'MAXED' : 'upgraded'}!`, 1.6); this.workstation('upgrades'); } }));
        else c.appendChild(h('span', 'core', 'MAX'));
        grid.appendChild(c);
      }
      p.appendChild(grid);
    } else {
      p.appendChild(h('p', 'note', 'Gadgets loaded in your gauntlets. Switch in the field with ▲ / D-pad ◀ ▶. New ones unlock in UPGRADES.'));
      const row = h('div', 'chips');
      for (const gd of g.combat.gadgets) { const c = h('div', 'chip', `${gd.name}<small>${gd.desc || ''} · uses ${gd.cost ?? 1}</small>`); c.style.borderColor = gd.color; row.appendChild(c); }
      p.appendChild(row);
    }
  }
  bed() {
    const g = this.game; const p = this.panel('BED', 'bed');
    p.appendChild(h('p', 'note', 'Grab some sleep: full health, game saved — and pick when you wake up. The city outside follows your choice in Free Roam.'));
    const row = h('div', 'todrow');
    for (const [id, label, ico] of [['day', 'MORNING', '☀'], ['sunset', 'GOLDEN HOUR', '🌇'], ['dusk', 'DUSK', '🌆'], ['night', 'NIGHT', '🌙'], [null, 'DISTRICT DEFAULT', '🗺']]) {
      row.appendChild(this.btn(`<span class="big-ico">${ico}</span>${label}`, () => {
        this.S.tod = id; g.player.health = g.player.maxHealth; g.save.write();
        this.close(true); this.sleepFade(label);
      }, this.S.tod === id ? 'sel' : ''));
    }
    p.appendChild(row);
  }
  sleepFade(label) {
    const g = this.game; const f = document.getElementById('fade'); f.querySelector('span').textContent = label === 'DISTRICT DEFAULT' ? 'Zzz…' : `Zzz… ${label}`;
    f.classList.add('show'); g.audio.play('bell', { vol: 0.3 });
    setTimeout(() => { f.classList.remove('show'); g.hud.toast('Rested. Health full, game saved.', 2); }, 1600);
  }
  tv() {
    const g = this.game, S = this.S; const p = this.panel('CHANNEL 4 · EVENING KLAXON', 'tv');
    const news = g.registry.list('news').filter((n) => n.any || (n.requires && S.flags[n.requires]) || (n.minRep && S.reputation >= n.minRep));
    const pick = news.sort(() => Math.random() - 0.5).slice(0, 4);
    const screen = h('div', 'crt');
    screen.innerHTML = `<div class="crt-head">● LIVE · ${g.cityName || 'BRASSHAVEN'}</div>` + pick.map((n) => `<div class="crt-line">${n.text}</div>`).join('') +
      `<div class="crt-ticker"><span>REP ★${S.reputation} · CRIMES STOPPED ${S.stats.crimes} · TRICKS LANDED ${S.stats.tricks || 0} · PAGES ${S.collectibles.length} · STAY TUNED FOR "BRASS AFTER DARK" ·</span></div>`;
    p.appendChild(screen);
    p.appendChild(this.btn('CHANGE CHANNEL', () => { g.audio.play('blip'); this.tv(); }));
  }
  clippings() {
    const g = this.game, S = this.S; const p = this.panel('CLIPPINGS WALL', 'clip');
    const chs = g.registry.list('chapters').sort((a, b) => (a.order || 0) - (b.order || 0));
    const story = chs.map((c) => `<div class="clipping ${S.story.completed.includes(c.id) ? '' : 'faded'}"><b>${c.number || ''}: ${c.title}</b><br>${S.story.completed.includes(c.id) ? (c.outroText || '') : '???'}</div>`).join('');
    const st = S.stats;
    p.appendChild(h('div', 'clips', story));
    p.appendChild(h('div', 'stats', `Crimes stopped <b>${st.crimes}</b> · Takedowns <b>${st.takedowns}</b> · Tricks <b>${st.tricks || 0}</b> · Golden Age Pages <b>${S.collectibles.length}</b> · Reputation <b>★${S.reputation}</b> · Parts <b>⚙${S.parts}</b> · Suits sewn <b>${(S.customSkins || []).length}</b>`));
  }
  // camera for the sewing showcase: orbit the hero standing at the mannequin spot
  showcaseCam(dt) {
    const sc = this.showcase, cam = this.game.renderer.camera, p = this.game.player.pos;
    sc.t = (sc.t || 0) + dt * (sc.spin ? 1 : 0);
    // stay on the room side of the mannequin (it stands near the south wall): sweep ±60° around "north"
    const yaw = Math.PI + Math.sin(sc.t * 0.6) * 1.05;
    const portrait0 = window.innerHeight > window.innerWidth; const d = (sc.dist || 3.2) * (portrait0 ? 1.25 : 1), y = p.y + 1.0;
    cam.position.set(p.x + Math.sin(yaw) * d, y + 0.45, p.z + Math.cos(yaw) * d);
    // frame the hero in the free part of the screen (panel is bottom in portrait, right in landscape)
    const portrait = window.innerHeight > window.innerWidth;
    const rx = Math.cos(yaw), rz = -Math.sin(yaw);
    if (portrait) { cam.position.y = y + 0.1; cam.lookAt(p.x, y - 1.05, p.z); }
    else cam.lookAt(p.x + rx * 0.9, y - 0.1, p.z + rz * 0.9);
    if (cam.fov !== 60) { cam.fov = 60; cam.updateProjectionMatrix(); }
  }
}
export { BASE_STATS };
