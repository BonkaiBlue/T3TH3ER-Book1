// Unified input: touch overlay + keyboard/mouse + Gamepad API all write into one action state.
// Gameplay code only ever reads input.btn('cross').pressed, input.move, input.look.
export const BUTTONS = ['cross', 'circle', 'square', 'triangle', 'l1', 'l2', 'l3', 'r1', 'r2', 'r3', 'up', 'down', 'left', 'right', 'start', 'select'];

const KEYMAP = {
  Space: 'cross', KeyC: 'circle', ControlLeft: 'circle', KeyE: 'square', KeyQ: 'triangle',
  ShiftLeft: 'l1', ShiftRight: 'l1', KeyF: 'r2', KeyR: 'r1', KeyV: 'r3', Tab: 'l3', KeyZ: 'l2',
  ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
  Escape: 'start', KeyP: 'start', KeyM: 'select', Enter: 'cross',
};
// Standard gamepad mapping
const PADMAP = ['cross', 'circle', 'square', 'triangle', 'l1', 'r1', 'l2', 'r2', 'select', 'start', 'l3', 'r3', 'up', 'down', 'left', 'right'];

export class Input {
  constructor() {
    this.state = {};
    for (const b of BUTTONS) this.state[b] = { down: false, pressed: false, released: false, held: 0, src: 0 };
    this.move = { x: 0, y: 0 };      // x right, y forward
    this.look = { x: 0, y: 0 };      // radians-ish deltas accumulated this frame
    this.touchMove = { x: 0, y: 0 };
    this.keys = new Set();
    this.mouseLook = { x: 0, y: 0 };
    this.touchLook = { x: 0, y: 0 };
    this.lastDevice = 'touch';
    this.enabled = true;
    this._raw = {};  // per source bitmask: 1 touch, 2 key, 4 mouse, 8 pad
    for (const b of BUTTONS) this._raw[b] = 0;
    this._bindKeyboard();
  }
  _bindKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
      this.keys.add(e.code); this.lastDevice = 'kbm';
      const b = KEYMAP[e.code]; if (b) { this._raw[b] |= 2; e.preventDefault(); }
    });
    window.addEventListener('keyup', (e) => { this.keys.delete(e.code); const b = KEYMAP[e.code]; if (b) this._raw[b] &= ~2; });
    window.addEventListener('blur', () => { this.keys.clear(); for (const b of BUTTONS) this._raw[b] = 0; });
    window.addEventListener('mousemove', (e) => { if (document.pointerLockElement) { this.mouseLook.x += e.movementX; this.mouseLook.y += e.movementY; } });
    window.addEventListener('mousedown', (e) => {
      if (!document.pointerLockElement) return;
      this.lastDevice = 'kbm';
      if (e.button === 0) this._raw.r1 |= 4; if (e.button === 2) this._raw.l2 |= 4; if (e.button === 1) this._raw.r2 |= 4;
    });
    window.addEventListener('mouseup', (e) => { if (e.button === 0) this._raw.r1 &= ~4; if (e.button === 2) this._raw.l2 &= ~4; if (e.button === 1) this._raw.r2 &= ~4; });
    window.addEventListener('contextmenu', (e) => { if (document.pointerLockElement) e.preventDefault(); });
  }
  setTouchButton(b, down) { if (down) this._raw[b] |= 1; else this._raw[b] &= ~1; this.lastDevice = 'touch'; }
  clearTouch() { for (const b of BUTTONS) this._raw[b] &= ~1; this.touchMove.x = this.touchMove.y = 0; }
  // called once per frame before gameplay update
  poll(dt, settings) {
    // Gamepad
    let padMove = null, padLook = null;
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    for (const p of pads) {
      if (!p || !p.connected) continue;
      for (let i = 0; i < PADMAP.length; i++) {
        const pressed = p.buttons[i] && (p.buttons[i].pressed || p.buttons[i].value > 0.4);
        if (pressed) { this._raw[PADMAP[i]] |= 8; this.lastDevice = 'pad'; } else this._raw[PADMAP[i]] &= ~8;
      }
      const dz = (v) => (Math.abs(v) < 0.15 ? 0 : v);
      padMove = { x: dz(p.axes[0] || 0), y: -dz(p.axes[1] || 0) };
      padLook = { x: dz(p.axes[2] || 0), y: dz(p.axes[3] || 0) };
      break;
    }
    for (const b of BUTTONS) {
      const s = this.state[b]; const down = this.enabled && this._raw[b] !== 0;
      s.pressed = down && !s.down; s.released = !down && s.down; s.down = down;
      s.held = down ? s.held + dt : 0;
    }
    // Movement
    let mx = 0, my = 0;
    if (this.keys.has('KeyW')) my += 1; if (this.keys.has('KeyS')) my -= 1;
    if (this.keys.has('KeyD')) mx += 1; if (this.keys.has('KeyA')) mx -= 1;
    if (mx || my) { const l = Math.hypot(mx, my); mx /= l; my /= l; }
    if (Math.abs(this.touchMove.x) + Math.abs(this.touchMove.y) > 0.01) { mx = this.touchMove.x; my = this.touchMove.y; }
    if (padMove && Math.hypot(padMove.x, padMove.y) > 0.01) { mx = padMove.x; my = padMove.y; }
    this.move.x = this.enabled ? mx : 0; this.move.y = this.enabled ? my : 0;
    const sens = settings ? settings.sens : 1; const inv = settings && settings.invertY ? -1 : 1;
    let lx = this.mouseLook.x * 0.0022 + this.touchLook.x * 0.0058;
    let ly = this.mouseLook.y * 0.0022 + this.touchLook.y * 0.0058;
    if (padLook) { lx += padLook.x * 2.6 * dt; ly += padLook.y * 2.2 * dt; }
    this.look.x = this.enabled ? lx * sens : 0; this.look.y = this.enabled ? ly * sens * inv : 0;
    this.mouseLook.x = this.mouseLook.y = 0; this.touchLook.x = this.touchLook.y = 0;
  }
  btn(b) { return this.state[b]; }
  pressed(b) { return this.state[b].pressed; }
  down(b) { return this.state[b].down; }
  released(b) { return this.state[b].released; }
  consume(b) { this.state[b].pressed = false; }
  // For menus: any confirm
  anyPressed() { return BUTTONS.some((b) => this.state[b].pressed); }
}
export const input = new Input();
