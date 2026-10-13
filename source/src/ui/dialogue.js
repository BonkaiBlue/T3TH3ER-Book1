// Comic-panel dialogue system: speech balloons with procedural portraits, typewriter text,
// branching choices, flags/events, narration "thought" captions and ambient barks.
// Data lives in packs: dialogues: { id: { lines: [ {s, t, id?, go?, choices?, set?, emit?, sfx?, end?} ] } }
import { bus } from '../core/events.js';
import { input } from './input.js';

export class Dialogue {
  constructor(game) {
    this.game = game; this.el = document.getElementById('dialogue');
    this.nameEl = this.el.querySelector('.d-name'); this.textEl = this.el.querySelector('.d-text');
    this.portrait = this.el.querySelector('canvas'); this.choicesEl = this.el.querySelector('.d-choices'); this.moreEl = this.el.querySelector('.d-more');
    this.capEl = document.getElementById('caption'); this.barkEl = document.getElementById('bark');
    this.active = null; this.queue = []; this.capQueue = []; this.capT = 0; this.barkT = 0;
    this.el.addEventListener('pointerdown', (e) => { if (e.target.closest('.d-choices button')) return; e.preventDefault(); this.advance(); });
  }
  get open() { return !!this.active; }
  play(id, cb, npc) {
    const d = this.game.registry.dialogue(id);
    if (!d) { console.warn('missing dialogue', id); cb && cb(); return; }
    const lines = Array.isArray(d) ? d : d.lines;
    this.active = { id, lines, i: 0, cb, npc, result: null };
    this.el.classList.add('show');
    this.game.player.lock(999, 'dialogue');
    this.game.overlay.setVisible(false);
    if (npc) npc._prevYaw = npc.yaw;
    bus.emit('dialogue:start', id);
    this.show();
  }
  speaker(s) {
    const sp = this.game.registry.data.speakers[s] || { name: s, portrait: { style: 'face' } };
    return sp;
  }
  show() {
    const a = this.active; const L = a.lines[a.i]; if (!L) { this.close(); return; }
    if (L.set) Object.assign(this.game.save.data.flags, L.set);
    if (L.emit) bus.emit(L.emit, L.payload);
    if (L.sfx) this.game.audio.play(L.sfx);
    const sp = this.speaker(L.s);
    this.nameEl.textContent = sp.name; this.nameEl.style.background = sp.color || '#f2c14e';
    this.el.classList.toggle('narration', L.s === 'narrator');
    this.el.classList.toggle('radio', !!sp.radio);
    drawPortrait(this.portrait, sp.portrait || {}, this.game.time);
    this.full = this.format(L.t || ''); this.shown = 0; this.typing = true;
    this.textEl.textContent = ''; this.choicesEl.innerHTML = ''; this.moreEl.style.visibility = 'hidden';
    this.pitch = sp.pitch || 1;
  }
  format(t) {
    const g = this.game; const hero = g.registry.str('heroName', 'Tether');
    return t.replace(/\{hero\}/g, hero).replace(/\{city\}/g, g.cityName || 'Brasshaven');
  }
  update(dt) {
    // narration captions
    if (this.capT > 0) { this.capT -= dt; if (this.capT <= 0) { this.capEl.classList.remove('show'); setTimeout(() => this.nextCaption(), 350); } }
    if (this.barkT > 0) { this.barkT -= dt; if (this.barkT <= 0) this.barkEl.classList.remove('show'); }
    if (!this.active) return;
    if (this.typing) {
      const before = Math.floor(this.shown);
      this.shown += dt * 55;
      const n = Math.min(this.full.length, Math.floor(this.shown));
      if (n !== before) { this.textEl.textContent = this.full.slice(0, n); if (n % 3 === 0 && this.full[n - 1] !== ' ') this.game.audio.play('blip', { rate: this.pitch * (0.9 + Math.random() * 0.2), vary: 0, minGap: 0.03 }); }
      if (n >= this.full.length) this.finishTyping();
    }
    if (input.pressed('cross') || input.pressed('square')) this.advance();
    if (this.choiceBtns && this.choiceBtns.length) {
      if (input.pressed('down')) this.selChoice((this.sel + 1) % this.choiceBtns.length);
      if (input.pressed('up')) this.selChoice((this.sel - 1 + this.choiceBtns.length) % this.choiceBtns.length);
    }
    // NPC faces player
    const npc = this.active && this.active.npc; if (npc) npc.faceTo(this.game.player.pos, dt, 6);
  }
  finishTyping() {
    this.typing = false; this.textEl.textContent = this.full;
    const L = this.active.lines[this.active.i];
    if (L.choices) {
      this.choiceBtns = L.choices.map((c, i) => {
        const b = document.createElement('button'); b.textContent = this.format(c.t);
        b.addEventListener('click', (e) => { e.stopPropagation(); this.pick(i); });
        this.choicesEl.appendChild(b); return b;
      });
      this.selChoice(0);
    } else { this.choiceBtns = null; this.moreEl.style.visibility = 'visible'; }
  }
  selChoice(i) { this.sel = i; this.choiceBtns.forEach((b, k) => b.classList.toggle('sel', k === i)); }
  pick(i) {
    const a = this.active; const L = a.lines[a.i]; const c = L.choices[i];
    this.game.audio.play('ui_click');
    if (c.set) Object.assign(this.game.save.data.flags, c.set);
    if (c.result) a.result = c.result;
    this.choiceBtns = null;
    if (c.end) { this.close(); return; }
    this.goto(c.go);
  }
  goto(label) {
    const a = this.active;
    if (label) { const idx = a.lines.findIndex((l) => l.id === label); a.i = idx >= 0 ? idx : a.lines.length; }
    else a.i++;
    this.show();
  }
  advance() {
    if (!this.active) return;
    if (this.typing) { this.finishTyping(); return; }
    if (this.choiceBtns && this.choiceBtns.length) { this.pick(this.sel); return; }
    const L = this.active.lines[this.active.i];
    if (L.end) { this.close(); return; }
    this.goto(L.go);
  }
  close() {
    const a = this.active; this.active = null;
    this.el.classList.remove('show');
    this.game.player.fsm.set(this.game.player.ride ? 'ride' : 'ground');
    this.game.overlay.setVisible(this.game.state === 'play');
    this.game.save.write();
    bus.emit('dialogue:end', a.id);
    // swallow the confirm press so it doesn't also jump
    input.consume('cross'); input.consume('square');
    if (a.cb) a.cb(a.result);
  }
  // Narration caption boxes (non-blocking, queueable) — comic "Meanwhile…" boxes
  thought(text, time = 4) { this.capQueue.push({ text: this.format(text), time }); if (this.capT <= 0 && !this.capEl.classList.contains('show')) this.nextCaption(); }
  nextCaption() {
    const c = this.capQueue.shift(); if (!c) return;
    this.capEl.textContent = c.text; this.capEl.classList.add('show'); this.capT = c.time;
  }
  bark(text, time = 3) { this.barkEl.textContent = this.format(text); this.barkEl.classList.add('show'); this.barkT = time; }
}

// ---------------- procedural comic portraits ----------------
export function drawPortrait(cv, p, t = 0) {
  const g = cv.getContext('2d'); const W = cv.width, H = cv.height;
  g.clearRect(0, 0, W, H);
  // background with halftone dots
  g.fillStyle = p.bg || '#f2c14e'; g.fillRect(0, 0, W, H);
  g.fillStyle = 'rgba(0,0,0,0.12)';
  for (let y = 0; y < H; y += 8) for (let x = (y / 8) % 2 ? 4 : 0; x < W; x += 8) { const r = 1 + (y / H) * 2.5; g.beginPath(); g.arc(x, y, r, 0, 6.283); g.fill(); }
  const ink = '#1d1712'; g.lineWidth = 4; g.strokeStyle = ink; g.lineJoin = 'round';
  const cx = W / 2, cy = H * 0.52;
  // shoulders
  g.fillStyle = p.primary || '#2a9d9a';
  g.beginPath(); g.moveTo(cx - W * 0.42, H); g.quadraticCurveTo(cx - W * 0.38, H * 0.74, cx, H * 0.72); g.quadraticCurveTo(cx + W * 0.38, H * 0.74, cx + W * 0.42, H); g.closePath(); g.fill(); g.stroke();
  if (p.collar) { g.fillStyle = p.collar; g.beginPath(); g.moveTo(cx - 18, H * 0.72); g.lineTo(cx, H * 0.86); g.lineTo(cx + 18, H * 0.72); g.closePath(); g.fill(); g.stroke(); }
  if (p.emblem) { g.fillStyle = p.accent || '#f2c14e'; g.beginPath(); g.moveTo(cx - 14, H * 0.84); g.lineTo(cx + 14, H * 0.84); g.lineTo(cx, H * 0.95); g.closePath(); g.fill(); g.stroke(); }
  // head
  const style = p.style || 'face';
  const headCol = style === 'mask' ? (p.primary || '#2a9d9a') : style === 'jester' ? '#f6f1df' : style === 'helmet' ? (p.primary || '#5a5f6a') : (p.skin || '#d9a27a');
  const hw = style === 'kid' ? W * 0.2 : W * 0.23, hh = style === 'kid' ? H * 0.24 : H * 0.28;
  g.fillStyle = headCol; g.beginPath(); g.ellipse(cx, cy - H * 0.06, hw, hh, 0, 0, 6.283); g.fill(); g.stroke();
  if (style === 'mask') {
    // big comic lenses
    for (const s of [-1, 1]) {
      g.fillStyle = ink; g.beginPath(); g.ellipse(cx + s * hw * 0.42, cy - H * 0.09, hw * 0.34, hh * 0.24, s * -0.35, 0, 6.283); g.fill();
      g.fillStyle = p.eyes || '#ffffff'; g.beginPath(); g.ellipse(cx + s * hw * 0.42, cy - H * 0.09, hw * 0.26, hh * 0.17, s * -0.35, 0, 6.283); g.fill();
    }
    g.strokeStyle = p.secondary || '#e4573d'; g.lineWidth = 6; g.beginPath(); g.moveTo(cx, cy - hh - H * 0.05); g.lineTo(cx, cy - H * 0.2); g.stroke(); g.strokeStyle = ink; g.lineWidth = 4;
    g.fillStyle = p.secondary || '#e4573d'; g.beginPath(); g.moveTo(cx - 10, cy + hh * 0.55); g.lineTo(cx + 10, cy + hh * 0.55); g.lineTo(cx, cy + hh * 0.75); g.closePath(); g.fill(); g.stroke();
  } else if (style === 'jester') {
    g.fillStyle = p.primary || '#7a3fb0';
    for (const s of [-1, 1]) { g.beginPath(); g.moveTo(cx + s * hw * 0.2, cy - hh * 1.0); g.quadraticCurveTo(cx + s * hw * 1.6, cy - hh * 1.9, cx + s * hw * 1.4, cy - hh * 0.6); g.lineTo(cx + s * hw * 0.8, cy - hh * 0.75); g.closePath(); g.fillStyle = s < 0 ? (p.primary || '#7a3fb0') : (p.secondary || '#3a2a6a'); g.fill(); g.stroke(); g.fillStyle = p.accent || '#f2c14e'; g.beginPath(); g.arc(cx + s * hw * 1.42, cy - hh * 0.6, 8, 0, 6.283); g.fill(); g.stroke(); }
    g.fillStyle = p.primary || '#7a3fb0'; for (const s of [-1, 1]) { g.beginPath(); g.moveTo(cx + s * hw * 0.42, cy - H * 0.16); g.lineTo(cx + s * hw * 0.62, cy - H * 0.07); g.lineTo(cx + s * hw * 0.42, cy + H * 0.02); g.lineTo(cx + s * hw * 0.22, cy - H * 0.07); g.closePath(); g.fill(); g.stroke(); }
    g.fillStyle = ink; g.beginPath(); g.arc(cx, cy + hh * 0.35, hw * 0.5, 0.15, Math.PI - 0.15); g.fill();
  } else if (style === 'helmet') {
    g.fillStyle = p.accent || '#9aa3ad'; g.fillRect(cx - hw * 0.8, cy - H * 0.13, hw * 1.6, hh * 0.32); g.strokeRect(cx - hw * 0.8, cy - H * 0.13, hw * 1.6, hh * 0.32);
    g.fillStyle = p.eyes || '#ff3b3b'; g.fillRect(cx - hw * 0.6, cy - H * 0.1, hw * 0.4, hh * 0.12); g.fillRect(cx + hw * 0.2, cy - H * 0.1, hw * 0.4, hh * 0.12);
    for (let i = -2; i <= 2; i++) { g.beginPath(); g.moveTo(cx + i * 10, cy + hh * 0.3); g.lineTo(cx + i * 10, cy + hh * 0.75); g.stroke(); }
  } else {
    // human face
    if (p.hair) { g.fillStyle = p.hair; g.beginPath(); g.ellipse(cx, cy - hh * 0.62, hw * 1.04, hh * 0.55, 0, Math.PI, 0); g.fill(); g.stroke(); if (p.long) { g.fillRect(cx - hw * 1.04, cy - hh * 0.62, hw * 0.3, hh * 1.2); g.fillRect(cx + hw * 0.74, cy - hh * 0.62, hw * 0.3, hh * 1.2); } }
    for (const s of [-1, 1]) { g.fillStyle = '#fff'; g.beginPath(); g.ellipse(cx + s * hw * 0.38, cy - H * 0.07, 9, 6, 0, 0, 6.283); g.fill(); g.stroke(); g.fillStyle = ink; g.beginPath(); g.arc(cx + s * hw * 0.38, cy - H * 0.07, 3, 0, 6.283); g.fill(); g.beginPath(); g.moveTo(cx + s * hw * 0.62, cy - H * 0.14); g.lineTo(cx + s * hw * 0.16, cy - H * 0.13 - (p.stern ? -4 : 2)); g.stroke(); }
    if (p.glasses) { g.strokeStyle = ink; g.lineWidth = 3; for (const s of [-1, 1]) { g.beginPath(); g.arc(cx + s * hw * 0.38, cy - H * 0.07, 13, 0, 6.283); g.stroke(); } g.lineWidth = 4; }
    g.beginPath(); g.moveTo(cx, cy - H * 0.05); g.lineTo(cx - 5, cy + 4); g.lineTo(cx + 2, cy + 6); g.stroke();
    g.beginPath(); if (p.smile) g.arc(cx, cy + hh * 0.35, hw * 0.35, 0.3, Math.PI - 0.3); else { g.moveTo(cx - hw * 0.3, cy + hh * 0.48); g.lineTo(cx + hw * 0.3, cy + hh * 0.46); } g.stroke();
    if (p.mustache) { g.fillStyle = p.hair || ink; g.beginPath(); g.ellipse(cx, cy + hh * 0.3, hw * 0.4, 6, 0, 0, 6.283); g.fill(); }
    if (p.hat === 'cap') { g.fillStyle = p.hatColor || '#2a3f6a'; g.beginPath(); g.ellipse(cx, cy - hh * 0.75, hw * 1.05, hh * 0.38, 0, Math.PI, 0); g.fill(); g.stroke(); g.fillRect(cx - hw * 1.1, cy - hh * 0.8, hw * 2.2, 10); g.strokeRect(cx - hw * 1.1, cy - hh * 0.8, hw * 2.2, 10); g.fillStyle = p.accent || '#f2c14e'; g.beginPath(); g.arc(cx, cy - hh * 0.95, 7, 0, 6.283); g.fill(); g.stroke(); }
    if (p.hat === 'beanie') { g.fillStyle = p.hatColor || '#c0462e'; g.beginPath(); g.ellipse(cx, cy - hh * 0.7, hw * 1.05, hh * 0.55, 0, Math.PI, 0); g.fill(); g.stroke(); }
    if (p.mask) { g.fillStyle = ink; g.fillRect(cx - hw, cy - H * 0.11, hw * 2, 16); }
    if (p.scar) { g.strokeStyle = '#8a3a2a'; g.beginPath(); g.moveTo(cx + hw * 0.2, cy - H * 0.16); g.lineTo(cx + hw * 0.55, cy + 4); g.stroke(); g.strokeStyle = ink; }
  }
  if (p.iron) { // Baron's iron half-mask
    g.fillStyle = '#5a5f6a'; g.beginPath(); g.moveTo(cx, cy - hh); g.lineTo(cx + hw * 1.02, cy - hh * 0.3); g.lineTo(cx + hw * 0.8, cy + hh * 0.8); g.lineTo(cx, cy + hh); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#ff3b3b'; g.beginPath(); g.arc(cx + hw * 0.4, cy - H * 0.07, 6, 0, 6.283); g.fill();
  }
  if (p.static) { g.fillStyle = 'rgba(255,255,255,0.18)'; for (let y = 0; y < H; y += 4) if (Math.random() < 0.5) g.fillRect(0, y, W, 2); }
  g.lineWidth = 6; g.strokeRect(3, 3, W - 6, H - 6);
}
