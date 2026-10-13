// BRASS-64 terminal: a 40×25 character screen (C64-style 16-color palette) driving the BASIC interpreter.
// Works with a hardware keyboard, the Android soft keyboard (hidden input), on-screen game keys and a
// full-screen program editor (much nicer than typing line numbers on a phone).
import { Basic, DISK, BasicError } from '../pc/basic.js';

const COLS = 40, ROWS = 25;
const PAL = ['#000000', '#ffffff', '#c0362c', '#5fd0c8', '#a24bd6', '#4fb84a', '#3a3ac8', '#f2e05a', '#d08a3a', '#7a5a20', '#ff8a7a', '#555555', '#8a8a8a', '#a8ff9a', '#7a7aff', '#bbbbbb'];
const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };

export class Terminal {
  constructor(game, home) {
    this.game = game; this.home = home;
    this.ch = []; this.fg = []; this.bg = []; for (let r = 0; r < ROWS; r++) { this.ch.push(new Array(COLS).fill(32)); this.fg.push(new Array(COLS).fill(13)); this.bg.push(new Array(COLS).fill(0)); }
    this.row = 0; this.col = 0; this.curFg = 13; this.curBg = 0; this.line = ''; this.inputCb = null; this.keyBuf = []; this.dirty = true; this.blink = 0;
    this.basic = new Basic(this.io());
    this.booted = false;
  }
  get disk() { const S = this.game.save.data; S.disk = S.disk || {}; return S.disk; }
  // ---------------------------------------------------------------- DOM
  open() {
    const home = this.home; const p = home.panel('BRASS-64 PERSONAL COMPUTER', 'pc');
    const bezel = h('div', 'bezel'); this.cv = document.createElement('canvas'); this.cv.width = COLS * 16; this.cv.height = ROWS * 16; bezel.appendChild(this.cv);
    this.kb = document.createElement('input'); this.kb.className = 'kbcatch'; this.kb.setAttribute('autocapitalize', 'characters'); this.kb.setAttribute('autocomplete', 'off'); this.kb.setAttribute('autocorrect', 'off'); this.kb.setAttribute('spellcheck', 'false'); this.kb.value = ' ';
    bezel.appendChild(this.kb);
    bezel.addEventListener('pointerdown', (e) => { e.preventDefault(); this.kb.focus({ preventScroll: true }); });
    p.appendChild(bezel);
    const keys = h('div', 'pckeys');
    const k = (label, fn, cls = '') => { const b = h('button', 'pk ' + cls, label); b.addEventListener('pointerdown', (e) => { e.preventDefault(); fn(); }); keys.appendChild(b); };
    k('▲', () => this.press(1, '')); k('▼', () => this.press(2, '')); k('◀', () => this.press(3, '')); k('▶', () => this.press(4, ''));
    k('SPACE', () => this.press(32, ' '), 'wide'); k('ENTER', () => this.press(13, '\n'), 'wide'); k('ESC/BRK', () => this.press(27, ''), 'wide');
    k('⌨', () => this.kb.focus({ preventScroll: true }));
    p.appendChild(keys);
    const macros = h('div', 'pckeys macros');
    const m = (label, cmd) => { const b = h('button', 'pk mac', label); b.addEventListener('click', () => { if (typeof cmd === 'function') cmd(); else this.typeCommand(cmd); }); macros.appendChild(b); };
    m('RUN', 'RUN'); m('LIST', 'LIST'); m('DIR', 'DIR'); m('NEW', 'NEW'); m('CLS', 'CLS'); m('HELP', 'HELP'); m('✎ EDIT', () => this.editor()); m('⏻ EXIT', () => this.home.close());
    p.appendChild(macros);
    const dl = h('div', 'pckeys disk'); dl.appendChild(h('span', 'lbl', 'DISK:'));
    for (const name of [...Object.keys(DISK), ...Object.keys(this.disk)]) { const b = h('button', 'pk mac', name); b.addEventListener('click', () => { this.typeCommand(`LOAD "${name}"`); this.typeCommand('RUN'); }); dl.appendChild(b); }
    p.appendChild(dl);
    this.ctx = this.cv.getContext('2d');
    this.kb.addEventListener('input', () => this.onSoftInput());
    this.kb.addEventListener('keydown', (e) => this.onKey(e));
    this._onWinKey = (e) => { if (document.activeElement !== this.kb && !this.editing) this.onKey(e); };
    window.addEventListener('keydown', this._onWinKey);
    if (!this.booted) { this.booted = true; this.bootScreen(); }
    this.dirty = true;
    setTimeout(() => { if (!matchMedia('(pointer:coarse)').matches) this.kb.focus({ preventScroll: true }); }, 50);
  }
  close() { window.removeEventListener('keydown', this._onWinKey); if (this.basic.running) this.basic.stop(); this.editing = false; this.cv = null; this.ctx = null; this.game.save.write(); }
  bootScreen() {
    this.cls(); this.curFg = 14;
    this.print('\n    **** BRASS-64 BASIC V2 ****\n\n 64K RAM SYSTEM  38911 BASIC BYTES FREE\n\n'); this.curFg = 13;
    this.basic.load(DISK.HELLO.replace('{HERO}', this.game.registry.str('heroName', 'TETHER').toUpperCase()));
    try { this.basic.run(); } catch (e) { this.print('?' + e.message + '\nREADY.\n'); }
  }
  // ---------------------------------------------------------------- keyboard
  onSoftInput() {
    const v = this.kb.value;
    if (v.length === 0) this.press(8, '');          // sentinel removed → backspace
    else for (const c of v.slice(1)) this.press(c.charCodeAt(0), c.toUpperCase());
    this.kb.value = ' ';
  }
  onKey(e) {
    const map = { ArrowUp: [1, ''], ArrowDown: [2, ''], ArrowLeft: [3, ''], ArrowRight: [4, ''], Enter: [13, '\n'], Escape: [27, ''], Backspace: [8, ''] };
    if (map[e.key]) { e.preventDefault(); e.stopPropagation(); this.press(...map[e.key]); return; }
    if (e.target === this.kb) return; // printable chars arrive through 'input'
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) { e.preventDefault(); this.press(e.key.charCodeAt(0), e.key.toUpperCase()); }
  }
  press(code, chr) {
    const b = this.basic;
    if (code === 27 && b.running && !b.waiting) {
      // programs that read KEY get the first ESC; a quick double-ESC (or programs that don't read keys) BREAKs
      const now = performance.now(); const readsKeys = b.program && [...b.program.values()].some((t) => /KEY|INKEY/i.test(t));
      if (!readsKeys || now - (this.lastEsc || 0) < 700) { b.stop('\nBREAK'); this.print('READY.\n'); this.keyBuf.length = 0; return; }
      this.lastEsc = now;
    }
    if (b.running && !b.waiting) { this.keyBuf.push({ code: code === 8 ? 8 : code >= 97 && code <= 122 ? code - 32 : code, chr }); if (this.keyBuf.length > 8) this.keyBuf.shift(); return; }
    // line editing (command line or INPUT)
    if (code === 13) { const l = this.line; this.line = ''; this.print(' \n'); this.submit(l); return; }
    if (code === 8) { if (this.line.length) { this.line = this.line.slice(0, -1); this.backspace(); } return; }
    if (chr && chr.length === 1 && chr >= ' ') { if (this.line.length < 160) { this.line += chr; this.putc(chr); } }
  }
  typeCommand(cmd) { if (this.basic.running && !this.basic.waiting) this.basic.stop('\nBREAK'); this.print(cmd); this.line = ''; this.print(' \n'); this.submit(cmd); }
  submit(l) {
    if (this.inputCb) { const cb = this.inputCb; this.inputCb = null; cb(l.trim()); return; }
    const t = l.trim(); if (!t) return;
    const m = t.match(/^(\d+)\s*(.*)$/);
    if (m) { this.basic.setLine(+m[1], m[2]); return; }
    const [cmdRaw, ...rest] = t.split(/\s+/); const cmd = cmdRaw.toUpperCase(); const arg = rest.join(' ');
    const name = (arg.match(/"([^"]*)"/) || [null, arg])[1].trim().toUpperCase();
    try {
      switch (cmd) {
        case 'RUN': this.basic.run(); return;
        case 'LIST': { const r = arg.match(/(\d*)\s*-?\s*(\d*)/); const a = r && r[1] ? +r[1] : 0, b = r && r[2] ? +r[2] : r && r[1] && !arg.includes('-') ? +r[1] : 1e9; this.print(this.basic.listing(a, b).join('\n') + '\n'); break; }
        case 'NEW': this.basic.program.clear(); this.basic.lines = null; this.print('READY.\n'); return;
        case 'DIR': case 'CATALOG': {
          this.print('DISK: BUILT-IN\n  ' + Object.keys(DISK).join('  ') + '\nDISK: YOURS\n  ' + (Object.keys(this.disk).join('  ') || '(EMPTY)') + '\n'); break;
        }
        case 'LOAD': { const src = this.disk[name] || DISK[name]; if (!src) { this.print('?FILE NOT FOUND\n'); break; } this.basic.load(src.replace('{HERO}', 'TETHER')); this.print(`LOADED "${name}"\n`); break; }
        case 'SAVE': { if (!name) { this.print('?NAME? SAVE "NAME"\n'); break; } if (DISK[name]) { this.print('?BUILT-IN NAME, PICK ANOTHER\n'); break; } this.disk[name] = this.basic.source(); this.game.save.write(); this.print(`SAVED "${name}"\n`); break; }
        case 'DEL': case 'SCRATCH': { if (this.disk[name]) { delete this.disk[name]; this.game.save.write(); this.print('DELETED\n'); } else this.print('?FILE NOT FOUND\n'); break; }
        case 'HELP': this.print('COMMANDS: RUN LIST NEW DIR LOAD SAVE DEL\n  CLS EDIT EXIT. TYPE "10 PRINT 1" TO\n  ADD A LINE. STATEMENTS: PRINT INPUT\n  LET IF THEN ELSE GOTO GOSUB RETURN\n  FOR NEXT DIM DATA READ ON LOCATE\n  COLOR WAIT BEEP. FUNCS: RND INT KEY\n  INKEY$ SCRN LEN MID$ CHR$ ASC TIME\n'); break;
        case 'EDIT': this.editor(); return;
        case 'EXIT': case 'BYE': case 'QUIT': this.home.close(); return;
        case 'CLS': this.cls(); break;
        default: this.basic.direct(t); return; // immediate-mode statement
      }
    } catch (e) { this.print('?' + (e instanceof BasicError ? e.message : e.message) + '\n'); }
    this.print('READY.\n');
  }
  // full-screen editor for touch devices
  editor() {
    const ov = h('div', 'pceditor');
    const ta = document.createElement('textarea'); ta.value = this.basic.source() || '10 PRINT "HELLO FROM TETHER"\n20 GOTO 10'; ta.spellcheck = false; ta.setAttribute('autocapitalize', 'characters');
    const row = h('div', 'pckeys');
    const nameIn = document.createElement('input'); nameIn.placeholder = 'NAME (to save)'; nameIn.className = 'pcname';
    const b = (l, fn) => { const x = h('button', 'pk wide', l); x.addEventListener('click', fn); row.appendChild(x); };
    b('✔ APPLY', () => { this.basic.load(ta.value.toUpperCase()); this.basic.lines = null; done(); this.print('PROGRAM UPDATED. READY.\n'); });
    b('💾 APPLY + SAVE', () => { const n = nameIn.value.trim().toUpperCase(); this.basic.load(ta.value.toUpperCase()); if (n && !DISK[n]) { this.disk[n] = this.basic.source(); this.game.save.write(); } done(); this.print(n ? `SAVED "${n}". READY.\n` : 'READY.\n'); });
    b('▶ APPLY + RUN', () => { this.basic.load(ta.value.toUpperCase()); done(); this.basic.run(); });
    b('✕ CANCEL', () => done());
    ov.appendChild(ta); ov.appendChild(nameIn); ov.appendChild(row);
    this.home.el.appendChild(ov); this.editing = true;
    const done = () => { ov.remove(); this.editing = false; this.dirty = true; };
  }
  // ---------------------------------------------------------------- BASIC io
  io() {
    const T = this;
    return {
      print: (s) => T.print(s), cls: () => T.cls(),
      locate: (r, c) => { T.row = Math.max(0, Math.min(ROWS - 1, r)); T.col = Math.max(0, Math.min(COLS - 1, c)); },
      color: (fg, bg) => { if (fg !== undefined) T.curFg = (fg | 0) & 15; if (bg !== undefined) T.curBg = (bg | 0) & 15; },
      input: (prompt, cb) => { T.print(prompt); T.line = ''; T.inputCb = cb; },
      key: () => { const k = T.keyBuf.shift(); return k ? k.code : 0; },
      inkey: () => { const k = T.keyBuf.shift(); return k ? (k.chr || '') : ''; },
      scrn: (r, c) => (r < 0 || c < 0 || r >= ROWS || c >= COLS ? 35 : T.ch[r][c]),
      beep: (hz, frames) => T.beep(hz, frames),
    };
  }
  beep(hz, frames) {
    const A = this.game.audio; if (!A.ready) return; const c = A.ctx, t = c.currentTime;
    const o = c.createOscillator(); o.type = 'square'; o.frequency.value = hz; const g = c.createGain(); g.gain.setValueAtTime(0.06, t); g.gain.setValueAtTime(0.0001, t + frames / 60);
    o.connect(g).connect(A.sfxBus); o.start(t); o.stop(t + frames / 60 + 0.02);
  }
  cls() { for (let r = 0; r < ROWS; r++) { this.ch[r].fill(32); this.fg[r].fill(this.curFg); this.bg[r].fill(this.curBg); } this.row = 0; this.col = 0; this.dirty = true; }
  scroll() { this.ch.push(this.ch.shift().fill(32)); this.fg.push(this.fg.shift().fill(this.curFg)); this.bg.push(this.bg.shift().fill(0)); this.row = ROWS - 1; }
  putc(c) {
    if (c === '\n') { this.col = 0; this.row++; if (this.row >= ROWS) this.scroll(); this.dirty = true; return; }
    this.ch[this.row][this.col] = c.charCodeAt(0); this.fg[this.row][this.col] = this.curFg; this.bg[this.row][this.col] = this.curBg;
    this.col++; if (this.col >= COLS) { this.col = 0; this.row++; if (this.row >= ROWS) this.scroll(); }
    this.dirty = true;
  }
  print(s) { for (const c of String(s)) this.putc(c); }
  backspace() { if (this.col > 0) this.col--; else if (this.row > 0) { this.row--; this.col = COLS - 1; } this.ch[this.row][this.col] = 32; this.dirty = true; }
  // ---------------------------------------------------------------- frame
  update(dt) {
    const b = this.basic; const wasRunning = b.running;
    if (b.running && !this.editing) b.step(2500);
    if (wasRunning && !b.running && !b.waiting) { this.print((this.col ? '\n' : '') + 'READY.\n'); this.keyBuf.length = 0; }
    this.blink += dt; if (this.blink > 0.4) { this.blink = 0; this.cursorOn = !this.cursorOn; this.dirty = true; }
    if (this.dirty && this.ctx) this.draw();
  }
  draw() {
    const g = this.ctx, W = 16; this.dirty = false;
    g.fillStyle = PAL[0]; g.fillRect(0, 0, this.cv.width, this.cv.height);
    g.font = 'bold 15px "Courier New", monospace'; g.textBaseline = 'top';
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      const bgc = this.bg[r][c]; if (bgc) { g.fillStyle = PAL[bgc]; g.fillRect(c * W, r * W, W, W); }
      const ch = this.ch[r][c]; if (ch !== 32) { g.fillStyle = PAL[this.fg[r][c]]; g.fillText(String.fromCharCode(ch), c * W + 2, r * W + 1); }
    }
    const showCursor = this.cursorOn && (!this.basic.running || this.basic.waiting);
    if (showCursor) { g.fillStyle = PAL[13]; g.fillRect(this.col * W, this.row * W, W, W); }
    // scanlines
    g.fillStyle = 'rgba(0,0,0,0.18)'; for (let y = 0; y < this.cv.height; y += 3) g.fillRect(0, y, this.cv.width, 1);
  }
}
