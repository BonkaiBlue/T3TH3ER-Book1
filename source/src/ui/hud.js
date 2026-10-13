// HUD layer (DOM): health, gadget/ammo, objective + waypoint, crosshair, zip marker, minimap,
// toasts, police scanner, boss bar, chapter title cards, danger + speed-line effects.
import * as THREE from 'three';
import { bus } from '../core/events.js';
import { clamp } from '../core/util.js';

const $ = (id) => document.getElementById(id);

export class HUD {
  constructor(game) {
    this.game = game;
    this.el = $('hud'); this.hp = $('hp-fill'); this.hpGhost = $('hp-ghost'); this.obj = $('objective'); this.objT = this.obj.querySelector('.o-title'); this.objS = this.obj.querySelector('.o-sub');
    this.way = $('waypoint'); this.cross = $('crosshair'); this.zip = $('zipmark'); this.toastEl = $('toast'); this.scannerEl = $('scanner');
    this.bossEl = $('bossbar'); this.bossFill = this.bossEl.querySelector('.b-fill'); this.bossName = this.bossEl.querySelector('.b-name');
    this.gadgetEl = $('gadget'); this.ammoEl = $('ammo'); this.fpsEl = $('fps'); this.danger = $('danger'); this.speedEl = $('speedlines');
    this.mini = $('minimap'); this.mctx = this.mini.getContext('2d'); this.miniT = 0; this.cardEl = $('titlecard'); this.repEl = $('rep');
    this.styleEl = $('style'); this.styleT = 0; this.partsEl = $('partspop'); this.partsT = 0; this.buffEl = $('buffs');
    this.waypoint = null; this.boss = null; this.toastT = 0; this.scanT = 0; this._v = new THREE.Vector3(); this.ghost = 100; this.fpsAcc = 0; this.fpsN = 0;
    bus.on('combat:danger', () => { this.danger.classList.remove('on'); void this.danger.offsetWidth; this.danger.classList.add('on'); });
    bus.on('player:hurt', () => { this.el.classList.remove('hurt'); void this.el.offsetWidth; this.el.classList.add('hurt'); });
    this.miniBtn = this.mini; this.mini.addEventListener('click', () => bus.emit('ui:map'));
  }
  show(v) { this.el.style.display = v ? 'block' : 'none'; }
  setObjective(title, sub) {
    if (!title) { this.obj.classList.remove('show'); this._objTitle = null; return; }
    if (this._objTitle !== title) { this.obj.classList.remove('show'); void this.obj.offsetWidth; this._objTitle = title; }
    this.objT.textContent = title; this.objS.textContent = sub || ''; this.obj.classList.add('show');
  }
  setWaypoint(v) { this.waypoint = v ? v.clone() : null; }
  stylePop(e) {
    if (!e) { this.styleEl.classList.remove('show'); this.styleEl.classList.add('bail'); this.styleEl.querySelector('b').textContent = 'BAIL!'; this.styleEl.classList.add('show'); this.styleT = 0.9; return; }
    this.styleEl.classList.remove('bail');
    const nice = { frontflip: 'FRONT FLIP', backflip: 'BACKFLIP', corkscrew: 'CORKSCREW', sidespin: 'SIDE SPIN', twist: 'TWISTER', superman: 'SUPERMAN', starfish: 'STARFISH', doubleflip: 'DOUBLE FLIP' }[e.label] || String(e.label).toUpperCase();
    this.styleEl.querySelector('b').textContent = nice + '!';
    this.styleEl.querySelector('span').textContent = `STYLE ${e.style}${e.combo > 1 ? '  ×' + e.combo : ''}`;
    this.styleEl.classList.remove('show'); void this.styleEl.offsetWidth; this.styleEl.classList.add('show'); this.styleT = 1.6;
  }
  partsPop(n, why) {
    this.partsEl.textContent = `+${n} ⚙${why ? '  ' + why : ''}`; this.partsEl.classList.remove('show'); void this.partsEl.offsetWidth; this.partsEl.classList.add('show'); this.partsT = 1.8;
    this._rep = null;
  }
  toast(msg, t = 2.2) { this.toastEl.textContent = msg; this.toastEl.classList.add('show'); this.toastT = t; }
  scanner(msg) { this.scannerEl.querySelector('span').textContent = msg; this.scannerEl.classList.add('show'); this.scanT = 4.5; }
  showBoss(name, boss) { this.boss = boss; this.bossEl.classList.toggle('show', !!boss); if (boss) this.bossName.textContent = name; }
  titleCard(title, sub, cb) {
    this.cardEl.querySelector('.t-title').textContent = title; this.cardEl.querySelector('.t-sub').textContent = sub || '';
    this.cardEl.classList.add('show'); this.game.audio.play('bell', { vol: 0.5 });
    setTimeout(() => { this.cardEl.classList.remove('show'); cb && cb(); }, 2600);
  }
  update(dt) {
    const g = this.game, p = g.player, cam = g.renderer.camera;
    const W = window.innerWidth, H = window.innerHeight;
    // health
    const hpk = p.health / p.maxHealth; this.hp.style.transform = `scaleX(${hpk.toFixed(3)})`;
    this.ghost += (p.health - this.ghost) * Math.min(1, dt * 2); this.hpGhost.style.transform = `scaleX(${(this.ghost / p.maxHealth).toFixed(3)})`;
    this.el.classList.toggle('lowhp', hpk < 0.3);
    // gadget
    const gd = g.combat.gadget;
    const gtxt = gd ? gd.name : '—'; if (this._gtxt !== gtxt) { this._gtxt = gtxt; this.gadgetEl.textContent = gtxt; this.gadgetEl.style.borderColor = gd ? gd.color : '#fff'; }
    const at = `${g.combat.ammo}/${g.combat.maxAmmo} · 🧪${Math.round(g.save.data.fluid || 0)}`; if (this._at !== at) { this._at = at; this.ammoEl.textContent = at; this.ammoEl.classList.toggle('low', (g.save.data.fluid || 0) < 6 && g.combat.ammo < 3); }
    this.gadgetEl.parentElement.style.display = p.abilities.gadgets === false ? 'none' : '';
    // crosshair: bigger when aiming
    this.cross.classList.toggle('aim', g.combat.aiming || !!p.aimZipPoint);
    this.cross.style.display = g.rig.mode === 'fp' || g.combat.aiming || input_l2() ? '' : 'none';
    // zip marker
    if (p.aimZipPoint) this.project(p.aimZipPoint, this.zip, W, H, false); else this.zip.style.display = 'none';
    // waypoint
    if (this.waypoint) {
      this.way.style.display = 'block';
      const d = this.waypoint.distanceTo(p.pos);
      this.way.querySelector('span').textContent = d > 999 ? (d / 1000).toFixed(1) + 'km' : Math.round(d) + 'm';
      this.project(this.waypoint, this.way, W, H, true);
    } else this.way.style.display = 'none';
    // timers
    if (this.toastT > 0) { this.toastT -= dt; if (this.toastT <= 0) this.toastEl.classList.remove('show'); }
    if (this.scanT > 0) { this.scanT -= dt; if (this.scanT <= 0) this.scannerEl.classList.remove('show'); }
    // boss
    if (this.boss) this.bossFill.style.transform = `scaleX(${clamp(this.boss.hp / this.boss.maxHp, 0, 1).toFixed(3)})`;
    // speed lines
    const sp = p.vel.length(); this.speedEl.style.opacity = clamp((sp - 16) / 20, 0, 0.8).toFixed(2);
    // minimap @ ~8Hz
    this.miniT -= dt; if (this.miniT <= 0) { this.miniT = 0.12; this.drawMini(); }
    // fps
    if (g.save.settings.showFPS) {
      this.fpsAcc += dt; this.fpsN++;
      if (this.fpsAcc > 0.5) { this.fpsEl.textContent = `${Math.round(this.fpsN / this.fpsAcc)} fps · ${g.renderer.info.calls} calls · ${(g.renderer.scale * 100) | 0}%`; this.fpsAcc = 0; this.fpsN = 0; }
      this.fpsEl.style.display = 'block';
    } else this.fpsEl.style.display = 'none';
    const rep = g.save.data.reputation + '|' + g.save.data.parts; if (this._rep !== rep) { this._rep = rep; this.repEl.textContent = `★ ${g.save.data.reputation} · ⚙ ${g.save.data.parts || 0}`; }
    if (this.styleT > 0) { this.styleT -= dt; if (this.styleT <= 0) this.styleEl.classList.remove('show'); }
    if (this.partsT > 0) { this.partsT -= dt; if (this.partsT <= 0) this.partsEl.classList.remove('show'); }
    this._buffT = (this._buffT || 0) - dt; if (this._buffT <= 0) { this._buffT = 1; const bi = g.home.buffIcons(); if (bi !== this._bi) { this._bi = bi; this.buffEl.innerHTML = bi; } }
    // home beacon on the minimap / waypoint when no objective
    if (!this.waypoint && g.activities.homeBeacon && g.freeRoam && !g.activities.crime) this._homeWp = g.activities.homeBeacon; else this._homeWp = null;
  }
  project(v3, el, W, H, clampEdge) {
    const v = this._v.copy(v3).project(this.game.renderer.camera);
    let x = (v.x + 1) / 2 * W, y = (1 - v.y) / 2 * H; const behind = v.z > 1;
    if (!clampEdge) { if (behind || x < 0 || x > W || y < 0 || y > H) { el.style.display = 'none'; return; } el.style.display = 'block'; el.style.transform = `translate(${x | 0}px,${y | 0}px)`; return; }
    const m = 34;
    if (behind) { x = W - x; y = H - m; }
    const off = behind || x < m || x > W - m || y < m || y > H - m;
    x = clamp(x, m, W - m); y = clamp(y, m + 40, H - m);
    el.classList.toggle('edge', off);
    el.style.transform = `translate(${x | 0}px,${y | 0}px)`;
  }
  drawMini() {
    const g = this.game, p = g.player, c = this.mctx, S = this.mini.width, R = 110, sc = S / (R * 2);
    const w = g.world.data; if (!w) return;
    c.save(); c.clearRect(0, 0, S, S);
    c.beginPath(); c.arc(S / 2, S / 2, S / 2 - 2, 0, 6.283); c.clip();
    c.fillStyle = w.interior ? '#3d4a52' : '#4b4743'; c.fillRect(0, 0, S, S);
    c.translate(S / 2, S / 2); c.rotate(p.yaw); c.scale(sc, sc); c.translate(-p.pos.x, -p.pos.z);
    // water
    if (!w.interior) { c.fillStyle = '#4f8d93'; const b = w.bounds; c.fillRect(p.pos.x - 400, p.pos.z - 400, 800, 800); c.fillStyle = '#4b4743'; c.fillRect(b.x0, b.z0, b.x1 - b.x0, b.z1 - b.z0); }
    for (const r of w.roofs) {
      if (Math.abs(r.x0 - p.pos.x) > R * 1.5 && Math.abs(r.x1 - p.pos.x) > R * 1.5) continue;
      if (Math.abs(r.z0 - p.pos.z) > R * 1.5 && Math.abs(r.z1 - p.pos.z) > R * 1.5) continue;
      const k = clamp(r.y / 90, 0, 1); c.fillStyle = `rgb(${200 - k * 60 | 0},${180 - k * 40 | 0},${140 - k * 30 | 0})`;
      c.fillRect(r.x0, r.z0, r.x1 - r.x0, r.z1 - r.z0);
    }
    for (const pk of w.parks || []) { c.fillStyle = '#6f9a45'; c.fillRect(pk.x0 + 2, pk.z0 + 2, pk.x1 - pk.x0 - 4, pk.z1 - pk.z0 - 4); }
    // npcs
    for (const n of g.npcs.list) { if (!n.alive) continue; c.fillStyle = n.hostile ? (n.downed ? '#777' : '#ff3b3b') : n.talk ? '#5fd0ff' : '#f2ead0'; c.beginPath(); c.arc(n.pos.x, n.pos.z, 3.5 / sc * 0.5, 0, 6.283); c.fill(); }
    if (this.waypoint) { c.fillStyle = '#ffe066'; c.beginPath(); c.arc(this.waypoint.x, this.waypoint.z, 5 / sc * 0.6, 0, 6.283); c.fill(); }
    const hb = g.activities.homeBeacon; if (hb) { c.fillStyle = '#2a9d9a'; c.strokeStyle = '#f2c14e'; c.lineWidth = 2 / sc; const r = 6 / sc; c.fillRect(hb.x - r, hb.z - r, r * 2, r * 2); c.strokeRect(hb.x - r, hb.z - r, r * 2, r * 2); }
    for (const cch of g.activities.caches) if (cch.m.visible) { c.fillStyle = '#5fe0c8'; c.beginPath(); c.arc(cch.pos.x, cch.pos.z, 3 / sc, 0, 6.283); c.fill(); }
    c.restore();
    // player arrow
    c.save(); c.translate(S / 2, S / 2); c.fillStyle = '#ff2fb3'; c.strokeStyle = '#1d1712'; c.lineWidth = 2;
    c.beginPath(); c.moveTo(0, -9); c.lineTo(6, 7); c.lineTo(0, 3); c.lineTo(-6, 7); c.closePath(); c.fill(); c.stroke(); c.restore();
    // waypoint off-map arrow on ring
    if (this.waypoint) {
      const dx = this.waypoint.x - p.pos.x, dz = this.waypoint.z - p.pos.z; const d = Math.hypot(dx, dz);
      if (d > R) { const a = Math.atan2(dz, dx) + p.yaw; c.save(); c.translate(S / 2 + Math.cos(a) * (S / 2 - 9), S / 2 + Math.sin(a) * (S / 2 - 9)); c.fillStyle = '#ffe066'; c.beginPath(); c.arc(0, 0, 5, 0, 6.283); c.fill(); c.restore(); }
    }
  }
}
import { input } from './input.js';
function input_l2() { return input.down('l2'); }
