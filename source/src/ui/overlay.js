// Touch controller overlay drawn on its own HTML5 canvas, layered over the WebGL canvas.
// ResponsiveLayout recomputes anchors/scales for portrait vs landscape and resolves overlaps.
import { input } from './input.js';
import { clamp } from '../core/util.js';
import { bus } from '../core/events.js';

const FACE = {
  square:   { glyph: 'square',   color: '#ff2fb3', label: 'ACT' },
  triangle: { glyph: 'triangle', color: '#39ff6a', label: 'GEAR' },
  circle:   { glyph: 'circle',   color: '#ff1e3c', label: 'CROUCH' },
  cross:    { glyph: 'cross',    color: '#1e7bff', label: 'JUMP' },
};

export class TouchOverlay {
  constructor(canvas, settings) {
    this.cv = canvas; this.ctx = canvas.getContext('2d'); this.settings = settings;
    this.controls = {};          // id -> {x,y,r,kind,w,h}
    this.pointers = new Map();   // pointerId -> {type:'btn'|'stick'|'look', id, lx, ly}
    this.stick = { active: false, bx: 0, by: 0, x: 0, y: 0, home: { x: 0, y: 0 }, r: 50, zone: null };
    this.hints = {}; this.visible = true; this.dirty = true; this.enabled = true;
    this.hiddenButtons = new Set();
    this._bind();
    this.layout();
    window.addEventListener('resize', () => this.layout());
    window.addEventListener('orientationchange', () => setTimeout(() => this.layout(), 120));
    if (window.visualViewport) window.visualViewport.addEventListener('resize', () => this.layout());
  }
  setHint(btn, text) { if (this.hints[btn] !== text) { this.hints[btn] = text; this.dirty = true; } }
  setVisible(v) { if (this.visible !== v) { this.visible = v; this.cv.style.display = v ? 'block' : 'none'; if (!v) this.releaseAll(); this.dirty = true; } }
  releaseAll() { this.pointers.clear(); input.clearTouch(); this.stick.active = false; this.dirty = true; }

  layout() {
    const W = window.innerWidth, H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.W = W; this.H = H; this.dpr = dpr;
    this.cv.width = Math.round(W * dpr); this.cv.height = Math.round(H * dpr);
    this.cv.style.width = W + 'px'; this.cv.style.height = H + 'px';
    const portrait = H > W;
    this.portrait = portrait;
    const sc = this.settings.controlsScale || 1;
    const u = (portrait ? W : Math.min(H * 1.25, W * 0.62)) / 100 * sc;
    this.u = u;
    const safe = 4 * u;
    const c = {};
    const circ = (id, x, y, r, kind = 'btn') => (c[id] = { id, x, y, r, kind });
    const pill = (id, x, y, w, h) => (c[id] = { id, x, y, r: Math.max(w, h) / 2, w, h, kind: 'pill' });
    let stick, fx, fy, fo, fr;
    if (!portrait) {
      stick = { x: safe + 17 * u, y: H - safe - 17 * u, r: 14 * u };
      fx = W - safe - 19 * u; fy = H - safe - 19 * u; fo = 11 * u; fr = 7 * u;
      const dc = { x: safe + 50 * u, y: H - safe - 12 * u }; const da = 6 * u, ds = 4.4 * u;
      circ('up', dc.x, dc.y - da, ds, 'dpad'); circ('down', dc.x, dc.y + da, ds, 'dpad');
      circ('left', dc.x - da, dc.y, ds, 'dpad'); circ('right', dc.x + da, dc.y, ds, 'dpad');
      const sy = safe + 4 * u;
      pill('l2', safe + 10 * u, sy, 18 * u, 7.5 * u); pill('l1', safe + 10 * u, sy + 10 * u, 18 * u, 7.5 * u);
      pill('r2', W - safe - 10 * u, sy, 18 * u, 7.5 * u); pill('r1', W - safe - 10 * u, sy + 10 * u, 18 * u, 7.5 * u);
      circ('l3', stick.x + 19 * u, stick.y - 14 * u, 4.8 * u); circ('r3', fx - 23 * u, fy - 14 * u, 4.8 * u);
      const mid = (dc.x + 6 * u + (fx - 23 * u)) / 2;
      pill('select', mid - 8 * u, H - safe - 4 * u, 12 * u, 5 * u); pill('start', mid + 8 * u, H - safe - 4 * u, 12 * u, 5 * u);
      this.stick.zone = { x0: 0, y0: H * 0.38, x1: W * 0.42, y1: H };
    } else {
      stick = { x: safe + 19 * u, y: H - safe - 21 * u, r: 15 * u };
      fx = W - safe - 21 * u; fy = H - safe - 24 * u; fo = 11.5 * u; fr = 7.5 * u;
      const dc = { x: W / 2, y: H - safe - 11 * u }; const da = 6 * u, ds = 4.4 * u;
      circ('up', dc.x, dc.y - da, ds, 'dpad'); circ('down', dc.x, dc.y + da, ds, 'dpad');
      circ('left', dc.x - da, dc.y, ds, 'dpad'); circ('right', dc.x + da, dc.y, ds, 'dpad');
      const sy = H - safe - 58 * u;
      pill('l1', safe + 10 * u, sy + 10 * u, 19 * u, 8 * u); pill('l2', safe + 10 * u, sy, 19 * u, 8 * u);
      pill('r1', W - safe - 10 * u, sy + 10 * u, 19 * u, 8 * u); pill('r2', W - safe - 10 * u, sy, 19 * u, 8 * u);
      circ('l3', W / 2 - 10 * u, H - safe - 31 * u, 4.6 * u); circ('r3', W / 2 + 10 * u, H - safe - 31 * u, 4.6 * u);
      pill('select', W / 2 - 9 * u, safe + 4 * u, 12 * u, 5.5 * u); pill('start', W / 2 + 9 * u, safe + 4 * u, 12 * u, 5.5 * u);
      this.stick.zone = { x0: 0, y0: H * 0.55, x1: W * 0.45, y1: H };
    }
    circ('triangle', fx, fy - fo, fr, 'face'); circ('cross', fx, fy + fo, fr, 'face');
    circ('square', fx - fo, fy, fr, 'face'); circ('circle', fx + fo, fy, fr, 'face');
    if (this.settings.leftHanded) for (const k in c) c[k].x = W - c[k].x;
    this.controls = c;
    this.stick.home = { x: this.settings.leftHanded ? W - stick.x : stick.x, y: stick.y };
    this.stick.r = stick.r;
    if (this.settings.leftHanded) { const z = this.stick.zone; this.stick.zone = { x0: W - z.x1, y0: z.y0, x1: W - z.x0, y1: z.y1 }; }
    this._resolveOverlaps();
    // tell the DOM HUD how much room the shoulder buttons take (landscape keeps HUD clear of them)
    const rs = document.documentElement.style;
    if (!portrait) { const l = c.l1, r = c.r1; rs.setProperty('--hudL', Math.round(Math.max(c.l1.x, c.l2.x) + l.w / 2 + 8) + 'px'); rs.setProperty('--hudR', Math.round(W - Math.min(c.r1.x, c.r2.x) + r.w / 2 + 8) + 'px'); }
    else { rs.setProperty('--hudL', '0px'); rs.setProperty('--hudR', '0px'); }
    this.dirty = true;
    bus.emit('ui:layout', { portrait, W, H, u });
  }
  // Iteratively push apart any overlapping controls (and keep inside the screen).
  _resolveOverlaps() {
    const list = Object.values(this.controls);
    const stickC = { x: this.stick.home.x, y: this.stick.home.y, r: this.stick.r * 1.15, fixed: true };
    const all = [stickC, ...list];
    for (let it = 0; it < 12; it++) {
      let moved = false;
      for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++) {
        const a = all[i], b = all[j];
        const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 0.01, min = a.r + b.r + 2;
        if (d < min) {
          const push = (min - d) / 2, nx = dx / d, ny = dy / d;
          if (!a.fixed && a.kind !== 'face') { a.x -= nx * push; a.y -= ny * push; }
          if (!b.fixed && b.kind !== 'face') { b.x += nx * push; b.y += ny * push; }
          moved = true;
        }
      }
      for (const k of list) { k.x = clamp(k.x, k.r, this.W - k.r); k.y = clamp(k.y, k.r, this.H - k.r); }
      if (!moved) break;
    }
  }
  hit(x, y, kinds) {
    let best = null, bd = 1e9;
    for (const id in this.controls) {
      const c = this.controls[id];
      if (this.hiddenButtons.has(id)) continue;
      if (kinds && !kinds.includes(c.kind)) continue;
      const pad = c.kind === 'face' ? 1.25 : 1.15;
      let inside, d;
      if (c.kind === 'pill') { inside = Math.abs(x - c.x) <= c.w / 2 * 1.1 && Math.abs(y - c.y) <= c.h / 2 * 1.3; d = Math.hypot(x - c.x, y - c.y); }
      else { d = Math.hypot(x - c.x, y - c.y); inside = d <= c.r * pad; }
      if (inside && d < bd) { bd = d; best = id; }
    }
    return best;
  }
  _bind() {
    const cv = this.cv;
    const opts = { passive: false };
    cv.addEventListener('pointerdown', (e) => {
      if (!this.enabled) return;
      e.preventDefault(); cv.setPointerCapture && cv.setPointerCapture(e.pointerId);
      const x = e.clientX, y = e.clientY;
      const id = this.hit(x, y);
      if (id) { this.pointers.set(e.pointerId, { type: 'btn', id }); input.setTouchButton(id, true); this.dirty = true; bus.emit('ui:touchbtn', id); return; }
      const z = this.stick.zone;
      if (!this.stick.active && x >= z.x0 && x <= z.x1 && y >= z.y0 && y <= z.y1) {
        this.stick.active = true;
        const fl = this.settings.floatingStick;
        this.stick.bx = fl ? x : this.stick.home.x; this.stick.by = fl ? y : this.stick.home.y;
        this.pointers.set(e.pointerId, { type: 'stick' });
        this._stickMove(x, y); return;
      }
      this.pointers.set(e.pointerId, { type: 'look', lx: x, ly: y });
    }, opts);
    cv.addEventListener('pointermove', (e) => {
      const p = this.pointers.get(e.pointerId); if (!p) return;
      e.preventDefault();
      if (p.type === 'stick') this._stickMove(e.clientX, e.clientY);
      else if (p.type === 'look') {
        input.touchLook.x += e.clientX - p.lx; input.touchLook.y += e.clientY - p.ly; p.lx = e.clientX; p.ly = e.clientY;
      } else if (p.type === 'btn' && this.controls[p.id] && this.controls[p.id].kind === 'face') {
        // slide between face buttons (like a real pad thumb roll)
        const nid = this.hit(e.clientX, e.clientY, ['face']);
        if (nid && nid !== p.id) { input.setTouchButton(p.id, false); input.setTouchButton(nid, true); p.id = nid; this.dirty = true; }
      }
    }, opts);
    const up = (e) => {
      const p = this.pointers.get(e.pointerId); if (!p) return;
      this.pointers.delete(e.pointerId);
      if (p.type === 'btn') {
        // only release if no other pointer holds same button
        let still = false; for (const q of this.pointers.values()) if (q.type === 'btn' && q.id === p.id) still = true;
        if (!still) input.setTouchButton(p.id, false);
      } else if (p.type === 'stick') { this.stick.active = false; input.touchMove.x = input.touchMove.y = 0; }
      this.dirty = true;
    };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up); cv.addEventListener('lostpointercapture', up);
  }
  _stickMove(x, y) {
    const s = this.stick; let dx = x - s.bx, dy = y - s.by; const d = Math.hypot(dx, dy), R = s.r;
    if (d > R) {
      if (this.settings.floatingStick && d > R * 1.6) { s.bx = x - dx / d * R * 1.6; s.by = y - dy / d * R * 1.6; dx = x - s.bx; dy = y - s.by; }
      const dd = Math.hypot(dx, dy); dx = dx / dd * R; dy = dy / dd * R;
    }
    s.x = dx / R; s.y = dy / R;
    const m = Math.hypot(s.x, s.y); const dz = 0.12;
    const k = m < dz ? 0 : (m - dz) / (1 - dz) / (m || 1);
    input.touchMove.x = s.x * k; input.touchMove.y = -s.y * k;
    this.dirty = true;
  }

  draw() {
    if (!this.visible || !this.dirty) return;
    this.dirty = false;
    const ctx = this.ctx, d = this.dpr, u = this.u;
    ctx.setTransform(d, 0, 0, d, 0, 0);
    ctx.clearRect(0, 0, this.W, this.H);
    const op = this.settings.controlsOpacity ?? 0.55;
    // stick
    const s = this.stick; const bx = s.active ? s.bx : s.home.x, by = s.active ? s.by : s.home.y;
    ctx.globalAlpha = op * (s.active ? 1 : 0.7);
    ring(ctx, bx, by, s.r, 'rgba(20,20,30,0.35)', 'rgba(255,240,200,0.8)', 2.5);
    ctx.globalAlpha = op * 1.2;
    ring(ctx, bx + s.x * s.r, by + s.y * s.r, s.r * 0.45, 'rgba(255,240,200,0.55)', '#1b1b22', 3);
    for (const id in this.controls) {
      if (this.hiddenButtons.has(id)) continue;
      const c = this.controls[id]; const pressed = input.state[id].down && (input._raw[id] & 1);
      ctx.globalAlpha = Math.min(1, op * (pressed ? 1.6 : 1));
      if (c.kind === 'face') {
        const f = FACE[id];
        ring(ctx, c.x, c.y, c.r * (pressed ? 0.92 : 1), pressed ? f.color : 'rgba(15,15,25,0.55)', f.color, 3);
        glyph(ctx, f.glyph, c.x, c.y, c.r * 0.5, pressed ? '#fff' : f.color);
        label(ctx, this.hints[id] ?? f.label, c.x, c.y + c.r + u * 2.2, u);
      } else if (c.kind === 'dpad') {
        ring(ctx, c.x, c.y, c.r, pressed ? 'rgba(255,240,200,0.8)' : 'rgba(15,15,25,0.5)', 'rgba(255,240,200,0.8)', 2);
        arrow(ctx, id, c.x, c.y, c.r * 0.45, pressed ? '#111' : 'rgba(255,240,200,0.95)');
        if (this.hints[id]) label(ctx, this.hints[id], c.x, c.y + (id === 'down' ? c.r + u * 2 : id === 'up' ? -c.r - u * 1.3 : c.r + u * 2), u * 0.8);
      } else if (c.kind === 'pill') {
        roundRect(ctx, c.x - c.w / 2, c.y - c.h / 2, c.w, c.h, c.h / 2, pressed ? 'rgba(255,240,200,0.85)' : 'rgba(15,15,25,0.5)', 'rgba(255,240,200,0.85)');
        text(ctx, id.toUpperCase(), c.x, c.y, Math.max(9, u * 3), pressed ? '#111' : '#fff1c9');
        if (this.hints[id]) label(ctx, this.hints[id], c.x, c.y + c.h / 2 + u * 2, u * 0.85);
      } else {
        ring(ctx, c.x, c.y, c.r, pressed ? 'rgba(255,240,200,0.85)' : 'rgba(15,15,25,0.5)', 'rgba(255,240,200,0.85)', 2);
        text(ctx, id.toUpperCase(), c.x, c.y, Math.max(8, u * 2.6), pressed ? '#111' : '#fff1c9');
        if (this.hints[id]) label(ctx, this.hints[id], c.x, c.y + c.r + u * 2, u * 0.8);
      }
    }
    ctx.globalAlpha = 1;
  }
}

function ring(ctx, x, y, r, fill, stroke, lw) {
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.lineWidth = lw; ctx.strokeStyle = stroke; ctx.stroke(); }
}
function roundRect(ctx, x, y, w, h, r, fill, stroke) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  ctx.fillStyle = fill; ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = stroke; ctx.stroke();
}
function text(ctx, t, x, y, size, col) {
  ctx.font = `${Math.round(size)}px Bangers, Impact, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillStyle = col; ctx.fillText(t, x, y + 1);
}
function label(ctx, t, x, y, u) {
  if (!t) return;
  ctx.font = `${Math.round(Math.max(9, u * 2.4))}px Bangers, Impact, sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(0,0,0,0.75)'; ctx.strokeText(t, x, y); ctx.fillStyle = '#fff1c9'; ctx.fillText(t, x, y);
}
function glyph(ctx, g, x, y, s, col) {
  ctx.lineWidth = Math.max(2.5, s * 0.28); ctx.strokeStyle = col; ctx.lineJoin = 'round'; ctx.beginPath();
  if (g === 'square') ctx.rect(x - s * 0.75, y - s * 0.75, s * 1.5, s * 1.5);
  else if (g === 'circle') ctx.arc(x, y, s * 0.82, 0, Math.PI * 2);
  else if (g === 'triangle') { ctx.moveTo(x, y - s * 0.9); ctx.lineTo(x + s * 0.88, y + s * 0.62); ctx.lineTo(x - s * 0.88, y + s * 0.62); ctx.closePath(); }
  else { ctx.moveTo(x - s * 0.75, y - s * 0.75); ctx.lineTo(x + s * 0.75, y + s * 0.75); ctx.moveTo(x + s * 0.75, y - s * 0.75); ctx.lineTo(x - s * 0.75, y + s * 0.75); }
  ctx.stroke();
}
function arrow(ctx, dir, x, y, s, col) {
  const a = { up: -Math.PI / 2, down: Math.PI / 2, left: Math.PI, right: 0 }[dir];
  ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.beginPath(); ctx.moveTo(s, 0); ctx.lineTo(-s * 0.6, -s * 0.8); ctx.lineTo(-s * 0.6, s * 0.8); ctx.closePath();
  ctx.fillStyle = col; ctx.fill(); ctx.restore();
}
