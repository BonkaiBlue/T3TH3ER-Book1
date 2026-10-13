// Kitchen: pick a recipe, then a short rhythm/timing minigame per step.
//   CHOP  – tap 3× as the knife passes over the green marks
//   FLIP  – one tap when the pancake/patty is at the top of its toss
//   STIR  – hold, release when the swirl meter is in the zone
//   HEAT  – tap when the flame gauge sits in the "sizzle" band
// Quality (0–1) scales the buff from data (packs: recipes[]).
const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const STEP = {
  chop: { label: 'CHOP!', hint: 'Tap when the knife is over a mark (3 cuts)', hits: 3, speed: 1.9, zone: 0.12, mode: 'tap' },
  flip: { label: 'FLIP!', hint: 'Tap at the top of the toss', hits: 1, speed: 1.3, zone: 0.09, mode: 'tap' },
  stir: { label: 'STIR!', hint: 'HOLD to stir — release inside the zone', hits: 1, speed: 0.55, zone: 0.14, mode: 'hold' },
  heat: { label: 'HEAT!', hint: 'Tap when the flame is in the sizzle band', hits: 1, speed: 1.1, zone: 0.11, mode: 'tap' },
};
import { input } from '../ui/input.js';

export class Cooking {
  constructor(game, home) { this.game = game; this.home = home; this.busy = false; }
  open() {
    const p = this.home.panel('KITCHEN', 'kitchen');
    p.appendChild(h('p', 'note', 'Cook something before heading out — meals give a buff for a few minutes. Better timing, better meal.'));
    const grid = h('div', 'recipes');
    for (const r of this.game.registry.list('recipes')) {
      const c = h('div', 'recipe'); c.style.setProperty('--rc', r.color || '#f2c14e');
      c.innerHTML = `<div class="dish"></div><b>${r.name}</b><small>${r.desc}</small><small class="steps">${r.steps.map((s) => s.toUpperCase()).join(' → ')}</small>`;
      c.addEventListener('click', () => { this.game.audio.play('ui_click'); this.start(r); });
      grid.appendChild(c);
    }
    p.appendChild(grid);
  }
  close() { this.busy = false; this.cur = null; }
  start(r) {
    this.recipe = r; this.si = 0; this.scores = []; this.busy = true;
    const p = this.home.panel('KITCHEN — ' + r.name.toUpperCase(), 'kitchen cooking');
    this.stage = h('canvas', 'pan'); this.stage.width = 480; this.stage.height = 260; p.appendChild(this.stage);
    this.hintEl = h('div', 'cookhint'); p.appendChild(this.hintEl);
    const act = h('button', 'cbtn big cookbtn', 'ACTION ■ / ✕');
    const down = (e) => { e.preventDefault(); this.press(true); }, up = (e) => { e.preventDefault(); this.press(false); };
    act.addEventListener('pointerdown', down); act.addEventListener('pointerup', up); act.addEventListener('pointercancel', up);
    p.appendChild(act);
    this.ctx = this.stage.getContext('2d');
    this.nextStep();
  }
  nextStep() {
    if (this.si >= this.recipe.steps.length) { this.finish(); return; }
    const k = this.recipe.steps[this.si]; const d = STEP[k];
    const marks = k === 'chop' ? [0.25, 0.5, 0.75] : [0.25 + Math.random() * 0.5];
    this.cur = { k, d, t: 0, x: 0, dir: 1, hits: 0, got: [], marks, holding: false, meter: 0, done: false, word: null, wordT: 0 };
    this.hintEl.innerHTML = `<b>${d.label}</b> ${d.hint} <span>(${this.si + 1}/${this.recipe.steps.length})</span>`;
    this.game.audio.play('ui_click');
  }
  press(down) {
    const c = this.cur; if (!c || c.done) return;
    if (c.d.mode === 'hold') {
      if (down) c.holding = true;
      else if (c.holding) { c.holding = false; this.judge(Math.abs(c.meter - c.marks[0])); }
      return;
    }
    if (!down) return;
    // nearest unhit mark
    let best = 1, bi = -1; c.marks.forEach((m, i) => { if (c.got.includes(i)) return; const d = Math.abs(c.x - m); if (d < best) { best = d; bi = i; } });
    if (bi >= 0 && c.k === 'chop') c.got.push(bi);
    this.judge(best);
  }
  judge(dist) {
    const c = this.cur, z = c.d.zone;
    const s = dist < z * 0.35 ? 1 : dist < z ? 0.75 : dist < z * 2 ? 0.35 : 0;
    this.scores.push(s); c.hits++;
    c.word = s >= 1 ? 'PERFECT!' : s >= 0.75 ? 'NICE!' : s > 0 ? 'OK…' : 'OOPS!'; c.wordT = 0.6;
    this.game.audio.play(s >= 0.75 ? 'collect' : s > 0 ? 'blip' : 'ui_back', { vol: 0.6 });
    if (c.k === 'chop') this.game.audio.play('punch', { vol: 0.25, rate: 2 });
    if (c.hits >= c.d.hits) { c.done = true; setTimeout(() => { this.si++; this.nextStep(); }, 650); }
  }
  update(dt) {
    const c = this.cur; if (!c || !this.ctx) return;
    if (input.pressed('cross') || input.pressed('square')) this.press(true);
    if (input.released('cross') || input.released('square')) this.press(false);
    c.t += dt; c.wordT -= dt;
    if (!c.done) {
      if (c.d.mode === 'hold') { if (c.holding) c.meter = Math.min(1.05, c.meter + dt * c.d.speed); else if (c.meter > 0 && c.hits === 0) c.meter = Math.max(0, c.meter - dt * 0.3); if (c.meter >= 1.05) { c.holding = false; this.judge(1); } }
      else { c.x += c.dir * dt * c.d.speed * (0.9 + this.si * 0.08); if (c.x > 1) { c.x = 1; c.dir = -1; } if (c.x < 0) { c.x = 0; c.dir = 1; } }
    }
    this.draw(c);
  }
  draw(c) {
    const g = this.ctx, W = 480, H = 260, col = this.recipe.color || '#f2c14e';
    g.fillStyle = '#f2f0e6'; g.fillRect(0, 0, W, H);
    g.fillStyle = 'rgba(42,157,154,0.25)'; for (let y = 0; y < H; y += 20) for (let x = (y / 20) % 2 ? 0 : 20; x < W; x += 40) g.fillRect(x, y, 20, 20);
    g.lineWidth = 4; g.strokeStyle = '#1d1712';
    // board / pan
    if (c.k === 'chop') { g.fillStyle = '#b98a5a'; g.fillRect(60, 120, 360, 90); g.strokeRect(60, 120, 360, 90); g.fillStyle = col; for (let i = 0; i < 5; i++) { g.fillRect(90 + i * 62, 140, 48, 50); g.strokeRect(90 + i * 62, 140, 48, 50); } }
    else { g.fillStyle = '#3a3a40'; g.beginPath(); g.ellipse(240, 170, 150, 50, 0, 0, 6.283); g.fill(); g.stroke(); g.fillRect(380, 160, 90, 16); g.strokeRect(380, 160, 90, 16);
      const toss = c.k === 'flip' ? Math.sin(c.x * Math.PI) * 90 : 0; const swirl = c.k === 'stir' ? c.meter * 12 : 0;
      g.fillStyle = col; g.beginPath(); g.ellipse(240 + Math.sin(swirl) * 20, 160 - toss, 70, 22 + (c.k === 'flip' ? Math.cos(c.x * 9) * 10 : 0), 0, 0, 6.283); g.fill(); g.stroke(); }
    if (c.k === 'heat') { g.fillStyle = '#ff8a2a'; for (let i = 0; i < 7; i++) { const fh = 10 + c.x * 40 + Math.sin(c.t * 20 + i) * 6; g.beginPath(); g.moveTo(130 + i * 36, 222); g.lineTo(144 + i * 36, 222 - fh); g.lineTo(158 + i * 36, 222); g.fill(); } }
    // timing track
    const tx = 40, tw = 400, ty = 30;
    g.fillStyle = '#fff'; g.fillRect(tx, ty, tw, 26); g.strokeRect(tx, ty, tw, 26);
    c.marks.forEach((m, i) => { const z = c.d.zone; g.fillStyle = c.got.includes(i) ? '#9a9a9a' : '#4fb84a'; g.fillRect(tx + (m - z) * tw, ty, z * 2 * tw, 26); g.fillStyle = '#2e6b3a'; g.fillRect(tx + (m - z * 0.35) * tw, ty, z * 0.7 * tw, 26); });
    const needle = c.d.mode === 'hold' ? c.meter : c.x;
    g.fillStyle = '#e4573d'; g.fillRect(tx + needle * tw - 4, ty - 8, 8, 42); g.strokeRect(tx + needle * tw - 4, ty - 8, 8, 42);
    if (c.k === 'chop') { g.fillStyle = '#c9c9c0'; g.beginPath(); g.moveTo(tx + c.x * tw - 10, 70); g.lineTo(tx + c.x * tw + 30, 70); g.lineTo(tx + c.x * tw - 10, 125); g.closePath(); g.fill(); g.stroke(); }
    if (c.wordT > 0 && c.word) { g.font = '44px Bangers, Impact'; g.textAlign = 'center'; g.fillStyle = '#f2c14e'; g.strokeStyle = '#1d1712'; g.lineWidth = 6; g.strokeText(c.word, W / 2, 112); g.fillText(c.word, W / 2, 112); g.textAlign = 'left'; }
  }
  finish() {
    const g = this.game, r = this.recipe; const q = this.scores.reduce((a, b) => a + b, 0) / Math.max(1, this.scores.length);
    const grade = q >= 0.85 ? 'CHEF\'S KISS' : q >= 0.55 ? 'TASTY' : q > 0.2 ? 'EDIBLE' : 'BURNT';
    const mult = q >= 0.85 ? 1.25 : q >= 0.55 ? 1 : q > 0.2 ? 0.65 : 0.35;
    const b = r.buff; this.home.addBuff(b.type, +(b.amount * mult).toFixed(3), Math.round(b.time * mult), r.name);
    g.player.health = Math.min(g.player.maxHealth, g.player.health + 40);
    this.busy = false; this.cur = null;
    const p = this.home.panel('KITCHEN — DONE', 'kitchen');
    p.appendChild(h('div', 'cookresult', `<div class="dish big" style="--rc:${r.color}"></div><h3>${r.name}</h3><div class="grade">${grade}</div><p>Buff: <b>${b.type.toUpperCase()}</b> for ${Math.round(b.time * mult / 60)} min · +40 health</p>`));
    p.appendChild(this.home.btn('COOK SOMETHING ELSE', () => this.open()));
    p.appendChild(this.home.btn('DONE', () => this.home.close(), 'big'));
    g.audio.play(q >= 0.55 ? 'ui_ok' : 'ui_back');
  }
}
