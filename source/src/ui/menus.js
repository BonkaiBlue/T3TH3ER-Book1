// Menus: title, story/chapter select, Sims-3-style world map travel, loading screen with tips,
// pause, suits (skin packs), settings, mods (pack toggles), inventory, credits.
import { bus } from '../core/events.js';
import { drawPortrait } from './dialogue.js';
import { CAMERA_MODES } from '../player/camera.js';

const $ = (id) => document.getElementById(id);
const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

export class Menus {
  constructor(game) {
    this.game = game; this.root = $('menus'); this.current = null; this.stack = [];
    this.loadEl = $('loading');
  }
  btn(label, fn, cls = '') { const b = h('button', 'cbtn ' + cls, label); b.addEventListener('click', (e) => { e.stopPropagation(); this.game.audio.unlock(); this.game.audio.play('ui_click'); fn(); }); return b; }
  panel(title, cls = '') {
    this.root.innerHTML = ''; this.root.className = 'show ' + cls;
    const p = h('div', 'panel'); if (title) p.appendChild(h('h2', 'ptitle', title)); this.root.appendChild(p); return p;
  }
  hide() { this.root.className = ''; this.root.innerHTML = ''; this.current = null; }
  back() { const prev = this.stack.pop(); if (prev) prev(); else this.hide(); }
  go(fn) { if (this.currentFn) this.stack.push(this.currentFn); this.currentFn = fn; fn(); }

  title() {
    this.stack = []; this.currentFn = () => this.title();
    const g = this.game, s = g.save.data;
    this.root.innerHTML = ''; this.root.className = 'show title';
    const t = h('div', 'title-wrap');
    t.appendChild(h('div', 'logo', `<span class="l1">${g.registry.str('gameTitle', 'TETHER')}</span><span class="l2">${g.registry.str('gameSubtitle', 'BOOK ONE: THE CLONE OF BRASSHAVEN')}</span>`));
    const col = h('div', 'title-btns');
    const hasStory = s.story.completed.length || s.story.step > 0 || s.story.chapter !== 'ch1';
    if (hasStory) col.appendChild(this.btn('▶ CONTINUE STORY', () => g.startStory(s.story.chapter, true), 'big'));
    col.appendChild(this.btn(hasStory ? 'CHAPTER SELECT' : '▶ NEW STORY', () => (hasStory ? this.go(() => this.chapters()) : g.startStory('ch1', false)), hasStory ? '' : 'big'));
    col.appendChild(this.btn('FREE ROAM', () => g.startFreeRoam(s.lastCity || 'midtown')));
    col.appendChild(this.btn('WORLD MAP', () => this.go(() => this.worldMap(false))));
    col.appendChild(this.btn('SUITS', () => this.go(() => this.suits())));
    col.appendChild(this.btn('SETTINGS', () => this.go(() => this.settings())));
    col.appendChild(this.btn('MODS & PACKS', () => this.go(() => this.mods())));
    col.appendChild(this.btn('CREDITS', () => this.go(() => this.credits())));
    t.appendChild(col);
    t.appendChild(h('div', 'title-foot', `v${g.version} · ${g.registry.packs.length} packs loaded · ★${s.reputation} · pages ${s.collectibles.length}`));
    this.root.appendChild(t);
  }
  chapters() {
    const g = this.game, p = this.panel('STORY — BOOK ONE');
    const grid = h('div', 'cards');
    for (const ch of g.registry.list('chapters').sort((a, b) => (a.order || 0) - (b.order || 0))) {
      const unlocked = ch.id === 'ch1' || g.save.data.story.completed.includes(ch.requires) || g.save.data.story.completed.includes(ch.id);
      const c = h('div', 'card' + (unlocked ? '' : ' locked'));
      c.appendChild(h('div', 'c-num', ch.number || ''));
      c.appendChild(h('div', 'c-title', ch.title));
      c.appendChild(h('div', 'c-desc', unlocked ? ch.blurb || '' : 'Locked — finish the previous chapter.'));
      if (g.save.data.story.completed.includes(ch.id)) c.appendChild(h('div', 'c-badge', 'COMPLETE'));
      if (unlocked) c.addEventListener('click', () => { g.audio.play('ui_ok'); g.startStory(ch.id, false); });
      grid.appendChild(c);
    }
    p.appendChild(grid); p.appendChild(this.btn('BACK', () => this.back()));
  }
  // Sims 3–style travel: pick a destination card on a stylized map, see info, press travel.
  worldMap(inGame) {
    const g = this.game; const p = this.panel('TRAVEL — ' + g.registry.str('regionName', 'GREATER BRASSHAVEN'), 'map');
    const wrap = h('div', 'map-wrap'); const map = h('div', 'map-canvas'); const info = h('div', 'map-info');
    const cities = g.registry.list('cities').filter((c) => !c.hidden);
    let sel = cities.find((c) => c.id === (g.cityId || g.save.data.lastCity)) || cities[0];
    const draw = () => {
      map.innerHTML = '<div class="sea"></div>';
      for (const c of cities) {
        const pin = h('div', 'pin' + (c === sel ? ' sel' : '') + (c.id === g.cityId ? ' here' : ''), `<b>${c.short || c.name}</b>`);
        pin.style.left = (c.map ? c.map[0] : 50) + '%'; pin.style.top = (c.map ? c.map[1] : 50) + '%';
        pin.style.setProperty('--pc', c.color || '#e4573d');
        pin.addEventListener('click', () => { sel = c; g.audio.play('ui_click'); draw(); });
        map.appendChild(pin);
      }
      info.innerHTML = '';
      info.appendChild(h('h3', '', sel.name));
      info.appendChild(h('p', '', sel.description || ''));
      const facts = h('ul', 'facts');
      facts.innerHTML = `<li>Skyline: <b>${sel.skyline || '—'}</b></li><li>Crime: <b>${sel.crime || '—'}</b></li><li>Best for: <b>${sel.bestFor || '—'}</b></li>`;
      info.appendChild(facts);
      info.appendChild(this.btn(sel.id === g.cityId ? 'YOU ARE HERE' : 'TRAVEL ➜', () => { if (sel.id !== g.cityId || !inGame) { this.hide(); g.travel(sel.id, { freeRoam: true }); } }, 'big'));
    };
    draw();
    wrap.appendChild(map); wrap.appendChild(info); p.appendChild(wrap);
    p.appendChild(this.btn('BACK', () => this.back()));
  }
  loading(city, tip) {
    const el = this.loadEl; el.classList.add('show');
    el.querySelector('.ld-city').textContent = city.name || city.title || '';
    el.querySelector('.ld-tip').textContent = tip;
    el.querySelector('.ld-fill').style.transform = 'scaleX(0)';
    const cv = el.querySelector('canvas'); const spk = this.game.registry.data.speakers; const keys = Object.keys(spk);
    const sp = spk[keys[(Math.random() * keys.length) | 0]];
    if (sp) drawPortrait(cv, sp.portrait || {}, 0);
  }
  loadingProgress(p) { this.loadEl.querySelector('.ld-fill').style.transform = `scaleX(${p.toFixed(3)})`; }
  loadingDone() { this.loadEl.classList.remove('show'); }

  pause() {
    const g = this.game; this.stack = []; this.currentFn = () => this.pause();
    const p = this.panel('PAUSED');
    const col = h('div', 'col');
    col.appendChild(this.btn('RESUME', () => g.resume(), 'big'));
    if (g.missions.active) col.appendChild(this.btn('RESTART CHECKPOINT', () => g.restartStep()));
    if (g.missions.active && !g.storyMode) col.appendChild(this.btn('ABANDON JOB', () => { g.missions.stop(true); g.resume(); }));
    if (!g.world.data.interior) col.appendChild(this.btn('WORLD MAP / TRAVEL', () => this.go(() => this.worldMap(true))));
    col.appendChild(this.btn('CAMERA: ' + camName(g.rig.mode), () => { g.cycleCamera(); this.pause(); }));
    col.appendChild(this.btn('SUITS', () => this.go(() => this.suits())));
    col.appendChild(this.btn('MOVES & CONTROLS', () => this.go(() => this.controls())));
    col.appendChild(this.btn('SETTINGS', () => this.go(() => this.settings())));
    col.appendChild(this.btn('QUIT TO TITLE', () => g.toTitle()));
    p.appendChild(col);
    const st = g.save.data.stats;
    p.appendChild(h('div', 'stats', `Crimes stopped <b>${st.crimes}</b> · Takedowns <b>${st.takedowns}</b> · Swung <b>${(g.player.swingDistance / 1000).toFixed(2)} km</b> · Rep <b>★${g.save.data.reputation}</b>`));
  }
  inventory() {
    const g = this.game; this.stack = []; this.currentFn = () => this.inventory();
    const p = this.panel('GEAR');
    p.appendChild(h('h4', '', 'GADGETS (R1 to fire · ◀ ▶ to switch)'));
    const row = h('div', 'chips');
    g.combat.gadgets.forEach((gd, i) => {
      const b = this.btn(`${gd.name}<small>${gd.desc || ''}</small>`, () => { g.combat.gadgetIdx = i; this.inventory(); }, i === g.combat.gadgetIdx ? 'sel' : '');
      b.style.borderColor = gd.color; row.appendChild(b);
    });
    p.appendChild(row);
    p.appendChild(h('h4', '', 'RIDES (D-pad ▼ to cycle)'));
    const rr = h('div', 'chips');
    for (const id of g.save.data.inventory.rides) { const r = g.registry.get('rides', id); if (r) rr.appendChild(h('div', 'chip', `${r.name}<small>${r.desc || ''}</small>`)); }
    p.appendChild(rr);
    p.appendChild(this.btn('SUITS', () => this.go(() => this.suits())));
    p.appendChild(this.btn('CLOSE', () => g.resume(), 'big'));
  }
  suits() {
    const g = this.game, p = this.panel('SUITS'); const grid = h('div', 'cards suits');
    for (const s of g.registry.list('skins')) {
      const unlocked = g.save.data.unlockedSkins.includes(s.id) || s.unlocked;
      const c = h('div', 'card suit' + (unlocked ? '' : ' locked') + (g.save.data.skin === s.id ? ' sel' : ''));
      const cv = document.createElement('canvas'); cv.width = 120; cv.height = 120;
      drawPortrait(cv, { style: s.style === 'pod' ? 'face' : 'mask', primary: s.palette.primary, secondary: s.palette.secondary, accent: s.palette.accent, eyes: s.palette.eyes, emblem: true, bg: s.palette.bg || '#f2c14e', skin: s.palette.skin, hair: s.palette.hair });
      c.appendChild(cv); c.appendChild(h('div', 'c-title', s.name)); c.appendChild(h('div', 'c-desc', unlocked ? (s.desc || '') : (s.unlockText || 'Locked')));
      if (s._pack && !s._pack.startsWith('base')) c.appendChild(h('div', 'c-badge', s._pack));
      if (unlocked) c.addEventListener('click', () => { g.setSkin(s.id); g.audio.play('ui_ok'); this.suits(); });
      grid.appendChild(c);
    }
    p.appendChild(grid); p.appendChild(this.btn('BACK', () => this.back()));
  }
  settings() {
    const g = this.game, S = g.save.settings, p = this.panel('SETTINGS');
    const form = h('div', 'form');
    const row = (label, el) => { const r = h('label', 'row'); r.appendChild(h('span', '', label)); r.appendChild(el); form.appendChild(r); };
    const sel = (key, opts, after) => { const s = document.createElement('select'); for (const [v, t] of opts) { const o = document.createElement('option'); o.value = v; o.textContent = t; if (String(S[key]) === String(v)) o.selected = true; s.appendChild(o); } s.addEventListener('change', () => { S[key] = isNaN(+s.value) || s.value === '' ? (s.value === 'true' ? true : s.value === 'false' ? false : s.value) : +s.value; g.applySettings(); after && after(); }); return s; };
    const rng = (key, min, max, step) => { const r = document.createElement('input'); r.type = 'range'; r.min = min; r.max = max; r.step = step; r.value = S[key]; r.addEventListener('input', () => { S[key] = +r.value; g.applySettings(); }); return r; };
    const tog = (key) => { const c = document.createElement('input'); c.type = 'checkbox'; c.checked = !!S[key]; c.addEventListener('change', () => { S[key] = c.checked; g.applySettings(); }); return c; };
    row('Quality', sel('quality', [['auto', 'Auto (dynamic res)'], ['low', 'Low'], ['high', 'High']]));
    row('Comic ink + halftone', tog('comicFX'));
    row('PS1 vertex wobble', tog('ps1Wobble'));
    row('Camera', sel('camera', CAMERA_MODES.map((m) => [m, camName(m)]), () => { g.rig.mode = S.camera; }));
    row('Field of view (horizontal)', rng('fov', 70, 115, 1));
    row('Look sensitivity', rng('sens', 0.3, 2.5, 0.05));
    row('Invert look Y', tog('invertY'));
    row('Head bob', rng('headBob', 0, 1, 0.05));
    row('SFX volume', rng('sfx', 0, 1, 0.05));
    row('Music volume', rng('music', 0, 1, 0.05));
    row('Controls size', rng('controlsScale', 0.7, 1.4, 0.05));
    row('Controls opacity', rng('controlsOpacity', 0.2, 1, 0.05));
    row('Floating stick', tog('floatingStick'));
    row('Left-handed (mirror)', tog('leftHanded'));
    row('Show FPS / draw calls', tog('showFPS'));
    p.appendChild(form);
    p.appendChild(this.btn('RESET STORY PROGRESS', () => { if (confirm('Erase story progress, suits and stats? Settings are kept.')) { g.save.reset(); this.title(); } }, 'danger'));
    p.appendChild(this.btn('BACK', () => { g.save.write(); this.back(); }));
  }
  mods() {
    const g = this.game, p = this.panel('MODS & PACKS');
    p.appendChild(h('p', 'note', 'Packs are .js files listed in <b>packs/packs.manifest.js</b>. Toggle optional packs here (core packs always load). See docs/MODDING.md to make your own suits, cities, gadgets, chapters and dialogue.'));
    const list = h('div', 'mods');
    for (const pk of g.registry.packs) {
      const on = !g.registry.disabled.has(pk.id);
      const r = h('div', 'mod' + (on ? ' on' : ''));
      r.innerHTML = `<div><b>${pk.name || pk.id}</b> <small>v${pk.version || '1.0'} · ${pk.author || 'unknown'}</small><br><span>${pk.description || ''}</span></div>`;
      const counts = ['cities', 'skins', 'gadgets', 'chapters', 'sideQuests', 'crimes'].map((k) => (pk[k] && pk[k].length ? `${pk[k].length} ${k}` : '')).filter(Boolean).join(' · ');
      r.appendChild(h('small', 'counts', counts));
      if (!pk.core) {
        const b = this.btn(on ? 'ENABLED' : 'DISABLED', () => {
          const d = new Set(g.save.data.mods.disabled); if (on) d.add(pk.id); else d.delete(pk.id);
          g.save.data.mods.disabled = [...d]; g.registry.setDisabled(g.save.data.mods.disabled); g.save.write(); this.mods();
        }, on ? 'sel' : '');
        r.appendChild(b);
      } else r.appendChild(h('span', 'core', 'CORE'));
      list.appendChild(r);
    }
    p.appendChild(list); p.appendChild(this.btn('BACK', () => this.back()));
  }
  controls() {
    const p = this.panel('MOVES & CONTROLS');
    p.appendChild(h('div', 'controls-doc', CONTROLS_HTML));
    p.appendChild(this.btn('BACK', () => this.back()));
  }
  credits() {
    const g = this.game, p = this.panel('CREDITS');
    p.appendChild(h('div', 'controls-doc', g.registry.str('credits', '')));
    p.appendChild(this.btn('BACK', () => this.back()));
  }
  chapterComplete(ch, next, cb) {
    const p = this.panel(ch.title + ' — COMPLETE', 'complete');
    p.appendChild(h('p', 'note', ch.outroText || 'To be continued…'));
    if (ch.reward && ch.reward.unlockSkins) p.appendChild(h('p', 'note', 'Suit unlocked: <b>' + ch.reward.unlockSkins.map((id) => (this.game.registry.get('skins', id) || {}).name || id).join(', ') + '</b>'));
    if (next) p.appendChild(this.btn('NEXT: ' + next.title, () => { this.hide(); cb('next'); }, 'big'));
    p.appendChild(this.btn('FREE ROAM', () => { this.hide(); cb('roam'); }));
    p.appendChild(this.btn('TITLE', () => { this.hide(); cb('title'); }));
  }
}
export function camName(m) { return { fp: 'First-person', tp: 'Third-person', shoulderR: 'Shoulder (Right)', shoulderL: 'Shoulder (Left)' }[m] || m; }

const CONTROLS_HTML = `
<table>
<tr><th>Touch / Pad</th><th>Keyboard</th><th>Action</th></tr>
<tr><td>Left stick</td><td>WASD</td><td>Move (push fully to run)</td></tr>
<tr><td>Drag screen</td><td>Mouse (click to lock)</td><td>Look</td></tr>
<tr><td style="color:#1e7bff">✕ Cross</td><td>Space</td><td>Jump · Vault · Mantle · Swing-jump · Wall-jump</td></tr>
<tr><td style="color:#ff1e3c">○ Circle</td><td>C</td><td>Crouch · Slide (while running) · Drop · Dodge (when ⚠)</td></tr>
<tr><td style="color:#ff2fb3">■ Square</td><td>E</td><td>Interact · Talk · Strike · Takedown · (hold) Reload</td></tr>
<tr><td style="color:#39ff6a">▲ Triangle</td><td>Q</td><td>Next gadget · (hold) Gear menu</td></tr>
<tr><td>R2</td><td>F / MMB</td><td>Hold to SWING (keep holding to chain)</td></tr>
<tr><td>L2</td><td>Z / RMB</td><td>Aim · with R2: Point-Launch to marked ledge</td></tr>
<tr><td>R1</td><td>R / LMB</td><td>Fire gadget</td></tr>
<tr><td>L1</td><td>Shift</td><td>Hold: FREE-RUN (auto vault/climb/wall-run)</td></tr>
<tr><td>L3</td><td>Tab</td><td>Tether-Sense (see foes through walls)</td></tr>
<tr><td>R3</td><td>V</td><td>Camera: FP → 3rd → Shoulder R → Shoulder L</td></tr>
<tr><td>D-pad ▼</td><td>↓</td><td>Ride: board → skates → bike → on foot</td></tr>
<tr><td>D-pad ◀ ▶</td><td>← →</td><td>Switch gadget</td></tr>
<tr><td>D-pad ▲</td><td>↑</td><td>Ping objective</td></tr>
<tr><td>START / SELECT</td><td>Esc / M</td><td>Pause · World map</td></tr>
</table>
<p><b>Stealth:</b> crouch to stay quiet, perch high (goons rarely look up), throw a Decoy Chirp to pull guards, and take them down from behind or from a ledge (■ when prompted). Downed goons found by others raise the alarm.</p>
<p><b>Swinging:</b> anchors need something tall to stick to. Pump by looking where you want to go; release at the bottom of the arc for speed, ✕ for a swing-jump.</p>`;
