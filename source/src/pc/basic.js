// BRASS-64 BASIC — a small line-numbered BASIC interpreter for the in-apartment 80s computer.
// Time-sliced (step(budget)) so games run inside the game loop without blocking.
// Statements: PRINT/? INPUT LET IF..THEN..ELSE GOTO GOSUB RETURN FOR..TO..STEP NEXT END STOP REM CLS
//   LOCATE r,c  COLOR fg[,bg]  WAIT frames  DIM  BEEP [hz,frames]  RANDOMIZE  DATA READ RESTORE  ON x GOTO/GOSUB  RUN
// Functions: RND INT ABS SQR SIN COS TAN ATN LOG EXP SGN LEN VAL STR$ CHR$ ASC LEFT$ RIGHT$ MID$ KEY INKEY$ SCRN(r,c) TIME PI
const KW = new Set(['PRINT', '?', 'INPUT', 'LET', 'IF', 'THEN', 'ELSE', 'GOTO', 'GOSUB', 'RETURN', 'FOR', 'TO', 'STEP', 'NEXT', 'END', 'STOP', 'REM', 'CLS', 'LOCATE', 'COLOR', 'WAIT', 'DIM', 'BEEP', 'RANDOMIZE', 'DATA', 'READ', 'RESTORE', 'ON', 'RUN', 'AND', 'OR', 'NOT', 'MOD']);
const FN = new Set(['RND', 'INT', 'ABS', 'SQR', 'SIN', 'COS', 'TAN', 'ATN', 'LOG', 'EXP', 'SGN', 'LEN', 'VAL', 'STR$', 'CHR$', 'ASC', 'LEFT$', 'RIGHT$', 'MID$', 'KEY', 'INKEY$', 'SCRN', 'TIME', 'PI']);

export class BasicError extends Error {}

export function tokenize(src) {
  const out = []; let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === ' ' || c === '\t') { i++; continue; }
    if (c === '"') { let j = i + 1; while (j < src.length && src[j] !== '"') j++; out.push({ t: 'str', v: src.slice(i + 1, j) }); i = j + 1; continue; }
    if (/[0-9.]/.test(c)) { let j = i; while (j < src.length && /[0-9.]/.test(src[j])) j++; if (src[j] === 'E' && /[-+0-9]/.test(src[j + 1] || '')) { j += 2; while (/[0-9]/.test(src[j] || '')) j++; } out.push({ t: 'num', v: parseFloat(src.slice(i, j)) }); i = j; continue; }
    if (/[A-Za-z]/.test(c)) {
      let j = i; while (j < src.length && /[A-Za-z0-9_]/.test(src[j])) j++; if (src[j] === '$') j++;
      const w = src.slice(i, j).toUpperCase();
      if (w === 'REM') { out.push({ t: 'id', v: 'REM' }); out.push({ t: 'str', v: src.slice(j).trim() }); return out; }
      out.push({ t: 'id', v: w }); i = j; continue;
    }
    if (c === "'") { out.push({ t: 'id', v: 'REM' }); return out; }
    const two = src.slice(i, i + 2);
    if (two === '<>' || two === '<=' || two === '>=') { out.push({ t: 'op', v: two }); i += 2; continue; }
    if ('+-*/^=<>(),;:?'.includes(c)) { out.push(c === '?' ? { t: 'id', v: 'PRINT' } : { t: 'op', v: c }); i++; continue; }
    throw new BasicError('SYNTAX ERROR (' + c + ')');
  }
  return out;
}
// split a line's tokens into statements at top-level ':' (REM swallows the rest)
function splitStatements(toks) {
  const res = []; let cur = [];
  for (const t of toks) { if (t.t === 'op' && t.v === ':') { res.push(cur); cur = []; } else cur.push(t); }
  res.push(cur); return res.filter((s) => s.length);
}
const fmtNum = (n) => { const r = Math.abs(n) < 1e-9 ? 0 : Math.round(n * 1e6) / 1e6; return (r >= 0 ? ' ' : '') + r + ' '; };

export class Basic {
  constructor(io) { this.io = io; this.program = new Map(); this.reset(); }
  reset() { this.vars = {}; this.arrays = {}; this.forStack = []; this.gosub = []; this.data = []; this.dataPtr = 0; this.running = false; this.waitFrames = 0; this.waiting = false; }
  setLine(n, text) { if (!text.trim()) this.program.delete(n); else this.program.set(n, text); }
  listing(from = 0, to = 1e9) { return [...this.program.keys()].sort((a, b) => a - b).filter((n) => n >= from && n <= to).map((n) => n + ' ' + this.program.get(n)); }
  source() { return this.listing().join('\n'); }
  load(src) { this.program.clear(); for (const line of src.split(/\r?\n/)) { const m = line.match(/^\s*(\d+)\s?(.*)$/); if (m) this.program.set(+m[1], m[2]); } }
  compile() {
    this.lines = []; this.lineIndex = new Map(); this.data = [];
    for (const n of [...this.program.keys()].sort((a, b) => a - b)) {
      let stmts;
      try { stmts = splitStatements(tokenize(this.program.get(n))); } catch (e) { throw new BasicError(e.message + ' IN ' + n); }
      this.lineIndex.set(n, this.lines.length); this.lines.push({ n, stmts });
      for (const st of stmts) if (st[0] && st[0].v === 'DATA') { for (let k = 1; k < st.length; k++) { const t = st[k]; if (t.t === 'num') this.data.push(t.v); else if (t.t === 'str') this.data.push(t.v); else if (t.t === 'op' && t.v === '-' && st[k + 1] && st[k + 1].t === 'num') { this.data.push(-st[k + 1].v); k++; } } }
    }
  }
  run() { this.reset(); this.compile(); this.li = 0; this.si = 0; this.running = true; this.startTime = performance.now(); }
  stop(msg) { this.running = false; this.waiting = false; if (msg) this.io.print(msg + '\n'); }
  // execute one immediate-mode line (no line number)
  direct(text) {
    if (!this.lines) this.compile();
    const stmts = splitStatements(tokenize(text));
    this.directStmts = stmts; this.li = -1; this.si = 0; this.running = true;
  }
  step(budget = 1500) {
    if (!this.running || this.waiting) return;
    if (this.waitFrames > 0) { this.waitFrames--; return; }
    try {
      while (budget-- > 0 && this.running && !this.waiting && this.waitFrames <= 0) {
        let stmts;
        if (this.li === -1) stmts = this.directStmts;
        else { if (this.li >= this.lines.length) { this.running = false; break; } stmts = this.lines[this.li].stmts; }
        if (this.si >= stmts.length) { if (this.li === -1) { this.running = false; break; } this.li++; this.si = 0; continue; }
        const st = stmts[this.si]; this.si++;
        this.exec(st, 0);
      }
    } catch (e) {
      const where = this.li >= 0 && this.lines[this.li] ? ' IN ' + this.lines[this.li].n : '';
      this.stop('?' + (e instanceof BasicError ? e.message : 'ERROR: ' + e.message) + where);
    }
  }
  jump(n) { const i = this.lineIndex.get(n); if (i === undefined) throw new BasicError('UNDEF\'D LINE ' + n); this.li = i; this.si = 0; }
  // ---- statement execution
  exec(t, p) {
    const head = t[p]; if (!head) return;
    const kw = head.t === 'id' ? head.v : null;
    switch (kw) {
      case 'REM': case 'DATA': return;
      case 'PRINT': return this.doPrint(t, p + 1);
      case 'CLS': this.io.cls(); return;
      case 'END': case 'STOP': this.running = false; return;
      case 'RUN': this.run(); return;
      case 'GOTO': { const v = this.evalAt(t, p + 1); this.jump(v); return; }
      case 'GOSUB': { const v = this.evalAt(t, p + 1); this.gosub.push([this.li, this.si]); this.jump(v); return; }
      case 'RETURN': { const r = this.gosub.pop(); if (!r) throw new BasicError('RETURN WITHOUT GOSUB'); [this.li, this.si] = r; return; }
      case 'LET': return this.assign(t, p + 1);
      case 'IF': return this.doIf(t, p);
      case 'FOR': return this.doFor(t, p);
      case 'NEXT': return this.doNext(t, p);
      case 'INPUT': return this.doInput(t, p + 1);
      case 'LOCATE': { const a = this.args(t, p + 1); this.io.locate(a[0] | 0, a[1] | 0); return; }
      case 'COLOR': { const a = this.args(t, p + 1); this.io.color(a[0], a[1]); return; }
      case 'WAIT': { const a = this.args(t, p + 1); this.waitFrames = Math.max(1, a[0] | 0); return; }
      case 'BEEP': { const a = this.args(t, p + 1); this.io.beep(a[0] || 660, a[1] || 6); return; }
      case 'RANDOMIZE': return;
      case 'RESTORE': this.dataPtr = 0; return;
      case 'READ': { let q = p + 1; while (q < t.length) { const nameTok = t[q]; const tgt = this.lvalue(t, q); q = tgt.next; if (this.dataPtr >= this.data.length) throw new BasicError('OUT OF DATA'); this.store(tgt, this.data[this.dataPtr++]); if (t[q] && t[q].v === ',') q++; else break; void nameTok; } return; }
      case 'DIM': { let q = p + 1; while (q < t.length) { const name = t[q].v; q += 2; const dims = []; let depth = 0, start = q; for (; q < t.length; q++) { if (t[q].v === '(') depth++; if (t[q].v === ')') { if (depth === 0) break; depth--; } if (t[q].v === ',' && depth === 0) { dims.push(this.evalRange(t, start, q)); start = q + 1; } } dims.push(this.evalRange(t, start, q)); q++; const size = dims.reduce((a, d) => a * ((d | 0) + 1), 1); if (size > 20000) throw new BasicError('ARRAY TOO BIG'); this.arrays[name] = { dims: dims.map((d) => (d | 0) + 1), data: new Array(size).fill(name.endsWith('$') ? '' : 0) }; if (t[q] && t[q].v === ',') q++; } return; }
      case 'ON': { let q = p + 1; let depth = 0, e = q; for (; e < t.length; e++) { if (t[e].v === '(') depth++; if (t[e].v === ')') depth--; if (depth === 0 && (t[e].v === 'GOTO' || t[e].v === 'GOSUB')) break; } const idx = this.evalRange(t, q, e) | 0; const kind = t[e].v; const targets = []; for (let k = e + 1; k < t.length; k++) if (t[k].t === 'num') targets.push(t[k].v); if (idx >= 1 && idx <= targets.length) { if (kind === 'GOSUB') this.gosub.push([this.li, this.si]); this.jump(targets[idx - 1]); } return; }
      default:
        if (head.t === 'id') return this.assign(t, p);
        throw new BasicError('SYNTAX ERROR');
    }
  }
  doPrint(t, p) {
    let s = '', endNl = true;
    while (p < t.length) {
      const tk = t[p];
      if (tk.t === 'op' && tk.v === ';') { endNl = false; p++; continue; }
      if (tk.t === 'op' && tk.v === ',') { s += ' '.repeat(10 - (s.length % 10)); endNl = false; p++; continue; }
      let e = p, depth = 0; for (; e < t.length; e++) { const v = t[e].v; if (v === '(') depth++; if (v === ')') depth--; if (depth === 0 && t[e].t === 'op' && (v === ';' || v === ',')) break; if (t[e].t === 'id' && t[e].v === 'ELSE' && depth === 0) break; }
      const v = this.evalRange(t, p, e); s += typeof v === 'number' ? fmtNum(v) : v; endNl = true; p = e;
      if (t[p] && t[p].t === 'id' && t[p].v === 'ELSE') break;
    }
    this.io.print(s + (endNl ? '\n' : ''));
  }
  doIf(t, p) {
    let th = -1, el = -1; for (let k = p + 1; k < t.length; k++) { if (t[k].t === 'id' && t[k].v === 'THEN' && th < 0) th = k; if (t[k].t === 'id' && t[k].v === 'ELSE' && th >= 0) { el = k; break; } }
    if (th < 0) { th = t.findIndex((x, k) => k > p && x.t === 'id' && x.v === 'GOTO'); if (th < 0) throw new BasicError('SYNTAX ERROR'); }
    const cond = this.evalRange(t, p + 1, th);
    const run = (from, to) => {
      const part = t.slice(from, to === -1 ? t.length : to);
      if (part.length === 1 && part[0].t === 'num') { this.jump(part[0].v); return; }
      if (t[th].v === 'GOTO') { this.jump(this.evalRange(t, th + 1, to === -1 ? t.length : to)); return; }
      this.exec(part, 0);
    };
    if (cond) run(t[th].v === 'GOTO' ? th : th + 1, el);
    else if (el >= 0) { run(el + 1, -1); if (this.li >= 0) this.si = Infinity; }
    else this.si = Infinity; // false: skip the rest of the line
  }
  doFor(t, p) {
    const name = t[p + 1].v; let to = -1, step = -1;
    for (let k = p + 2; k < t.length; k++) { if (t[k].v === 'TO' && to < 0) to = k; if (t[k].v === 'STEP') step = k; }
    const start = this.evalRange(t, p + 3, to), end = this.evalRange(t, to + 1, step > 0 ? step : t.length), stp = step > 0 ? this.evalRange(t, step + 1, t.length) : 1;
    this.vars[name] = start;
    this.forStack = this.forStack.filter((f) => f.name !== name);
    this.forStack.push({ name, end, step: stp, li: this.li, si: this.si });
  }
  doNext(t, p) {
    const name = t[p + 1] ? t[p + 1].v : null;
    let f; while (this.forStack.length) { f = this.forStack[this.forStack.length - 1]; if (!name || f.name === name) break; this.forStack.pop(); f = null; }
    if (!f) throw new BasicError('NEXT WITHOUT FOR');
    this.vars[f.name] += f.step;
    if ((f.step >= 0 && this.vars[f.name] <= f.end) || (f.step < 0 && this.vars[f.name] >= f.end)) { this.li = f.li; this.si = f.si; }
    else this.forStack.pop();
  }
  doInput(t, p) {
    let prompt = '? ';
    if (t[p] && t[p].t === 'str') { prompt = t[p].v + '? '; p++; if (t[p] && (t[p].v === ';' || t[p].v === ',')) p++; }
    const tgt = this.lvalue(t, p);
    this.waiting = true;
    this.io.input(prompt, (str) => { this.store(tgt, tgt.name.endsWith('$') ? str : (parseFloat(str) || 0)); this.waiting = false; });
  }
  assign(t, p) {
    const tgt = this.lvalue(t, p);
    if (!t[tgt.next] || t[tgt.next].v !== '=') throw new BasicError('SYNTAX ERROR');
    this.store(tgt, this.evalRange(t, tgt.next + 1, t.length));
  }
  lvalue(t, p) {
    const name = t[p].v; if (!name || t[p].t !== 'id') throw new BasicError('SYNTAX ERROR');
    if (t[p + 1] && t[p + 1].v === '(') {
      let depth = 0, q = p + 2, start = q; const idx = [];
      for (; q < t.length; q++) { if (t[q].v === '(') depth++; if (t[q].v === ')') { if (depth === 0) break; depth--; } if (t[q].v === ',' && depth === 0) { idx.push(this.evalRange(t, start, q)); start = q + 1; } }
      idx.push(this.evalRange(t, start, q));
      return { name, idx, next: q + 1 };
    }
    return { name, next: p + 1 };
  }
  arr(name, idx) {
    let a = this.arrays[name];
    if (!a) { a = this.arrays[name] = { dims: idx.map(() => 11), data: new Array(Math.pow(11, idx.length)).fill(name.endsWith('$') ? '' : 0) }; }
    let o = 0, m = 1; for (let k = idx.length - 1; k >= 0; k--) { const i = idx[k] | 0; if (i < 0 || i >= a.dims[k]) throw new BasicError('BAD SUBSCRIPT'); o += i * m; m *= a.dims[k]; }
    return { a, o };
  }
  store(tgt, v) { if (tgt.idx) { const { a, o } = this.arr(tgt.name, tgt.idx); a.data[o] = v; } else this.vars[tgt.name] = v; }
  args(t, p) { const out = []; let start = p, depth = 0; for (let q = p; q <= t.length; q++) { const v = t[q] && t[q].v; if (v === '(') depth++; if (v === ')') depth--; if (q === t.length || (v === ',' && depth === 0)) { if (q > start) out.push(this.evalRange(t, start, q)); start = q + 1; } } return out; }
  evalAt(t, p) { return this.evalRange(t, p, t.length); }
  evalRange(t, a, b) { this.tk = t; this.pos = a; this.end = b; const v = this.eOr(); return v; }
  peek() { return this.pos < this.end ? this.tk[this.pos] : null; }
  eOr() { let v = this.eAnd(); for (;;) { const k = this.peek(); if (k && k.v === 'OR') { this.pos++; const r = this.eAnd(); v = (v || r) ? -1 : 0; } else return v; } }
  eAnd() { let v = this.eNot(); for (;;) { const k = this.peek(); if (k && k.v === 'AND') { this.pos++; const r = this.eNot(); v = (v && r) ? -1 : 0; } else return v; } }
  eNot() { const k = this.peek(); if (k && k.v === 'NOT') { this.pos++; return this.eNot() ? 0 : -1; } return this.eCmp(); }
  eCmp() {
    const l = this.eAdd(); const k = this.peek();
    if (k && k.t === 'op' && ['=', '<>', '<', '>', '<=', '>='].includes(k.v)) {
      this.pos++; const r = this.eAdd();
      const res = k.v === '=' ? l === r : k.v === '<>' ? l !== r : k.v === '<' ? l < r : k.v === '>' ? l > r : k.v === '<=' ? l <= r : l >= r;
      return res ? -1 : 0;
    }
    return l;
  }
  eAdd() { let v = this.eMul(); for (;;) { const k = this.peek(); if (k && k.t === 'op' && (k.v === '+' || k.v === '-')) { this.pos++; const r = this.eMul(); v = k.v === '+' ? (typeof v === 'string' || typeof r === 'string' ? String(v) + String(r) : v + r) : v - r; } else return v; } }
  eMul() { let v = this.ePow(); for (;;) { const k = this.peek(); if (k && ((k.t === 'op' && (k.v === '*' || k.v === '/')) || k.v === 'MOD')) { this.pos++; const r = this.ePow(); if (k.v === '/' && r === 0) throw new BasicError('DIVISION BY ZERO'); v = k.v === '*' ? v * r : k.v === '/' ? v / r : ((v % r) + r) % r; } else return v; } }
  ePow() { let v = this.eUnary(); for (;;) { const k = this.peek(); if (k && k.v === '^') { this.pos++; v = Math.pow(v, this.eUnary()); } else return v; } }
  eUnary() { const k = this.peek(); if (k && k.t === 'op' && k.v === '-') { this.pos++; return -this.eUnary(); } if (k && k.t === 'op' && k.v === '+') { this.pos++; return this.eUnary(); } return this.ePrim(); }
  ePrim() {
    const k = this.peek(); if (!k) throw new BasicError('SYNTAX ERROR');
    this.pos++;
    if (k.t === 'num' || k.t === 'str') return k.v;
    if (k.t === 'op' && k.v === '(') { const v = this.eOr(); this.expect(')'); return v; }
    if (k.t === 'id') {
      if (FN.has(k.v)) return this.callFn(k.v);
      if (KW.has(k.v)) throw new BasicError('SYNTAX ERROR');
      const nx = this.peek();
      if (nx && nx.v === '(') {
        this.pos++; const idx = [this.eOr()]; while (this.peek() && this.peek().v === ',') { this.pos++; idx.push(this.eOr()); } this.expect(')');
        const { a, o } = this.arr(k.v, idx); return a.data[o];
      }
      const v = this.vars[k.v]; return v === undefined ? (k.v.endsWith('$') ? '' : 0) : v;
    }
    throw new BasicError('SYNTAX ERROR');
  }
  expect(v) { const k = this.peek(); if (!k || k.v !== v) throw new BasicError('SYNTAX ERROR'); this.pos++; }
  fnArgs() { const nx = this.peek(); if (!nx || nx.v !== '(') return []; this.pos++; if (this.peek() && this.peek().v === ')') { this.pos++; return []; } const a = [this.eOr()]; while (this.peek() && this.peek().v === ',') { this.pos++; a.push(this.eOr()); } this.expect(')'); return a; }
  callFn(name) {
    const a = this.fnArgs(), x = a[0];
    switch (name) {
      case 'RND': return Math.random();
      case 'INT': return Math.floor(x); case 'ABS': return Math.abs(x); case 'SQR': return Math.sqrt(x);
      case 'SIN': return Math.sin(x); case 'COS': return Math.cos(x); case 'TAN': return Math.tan(x); case 'ATN': return Math.atan(x);
      case 'LOG': return Math.log(x); case 'EXP': return Math.exp(x); case 'SGN': return Math.sign(x);
      case 'LEN': return String(x).length; case 'VAL': return parseFloat(x) || 0; case 'STR$': return fmtNum(x).trim();
      case 'CHR$': return String.fromCharCode(x); case 'ASC': return String(x).charCodeAt(0) || 0;
      case 'LEFT$': return String(x).slice(0, a[1]); case 'RIGHT$': return a[1] > 0 ? String(x).slice(-a[1]) : '';
      case 'MID$': return String(x).substr(a[1] - 1, a[2] === undefined ? undefined : a[2]);
      case 'KEY': return this.io.key(); case 'INKEY$': return this.io.inkey();
      case 'SCRN': return this.io.scrn(a[0] | 0, a[1] | 0);
      case 'TIME': return Math.floor((performance.now() - (this.startTime || 0)) / 1000 * 60);
      case 'PI': return Math.PI;
    }
    return 0;
  }
}

// ------------------------------------------------------------------ built-in disk
export const DISK = {
  HELLO: `10 REM WELCOME DISK
20 CLS: COLOR 7: PRINT "BRASS-64 BASIC  *  WELCOME, {HERO}"
30 COLOR 13: PRINT
40 PRINT "TRY:  DIR        (LIST PROGRAMS)"
50 PRINT "      LOAD SNAKE   THEN  RUN"
60 PRINT "      LIST       (SEE THE CODE)"
70 PRINT "      NEW        (START YOUR OWN)"
80 PRINT "      10 PRINT ";CHR$(34);"HI";CHR$(34);"  (ADD A LINE)"
90 PRINT "      SAVE MINE    HELP   EXIT"
100 PRINT: COLOR 3: PRINT "KEY CODES: 1 UP 2 DOWN 3 LEFT 4 RIGHT"
110 PRINT "           13 ENTER 32 SPACE 27 ESC": COLOR 13`,
  GUESS: `10 REM GUESS MY NUMBER
20 CLS: N=INT(RND(1)*100)+1: T=0
30 PRINT "I'M THINKING OF A NUMBER 1-100."
40 INPUT "YOUR GUESS";G: T=T+1
50 IF G<N THEN PRINT "HIGHER!": GOTO 40
60 IF G>N THEN PRINT "LOWER!": GOTO 40
70 PRINT "GOT IT IN";T;"TRIES!": BEEP 880,10
80 INPUT "PLAY AGAIN (Y/N)";A$: IF A$="Y" THEN 20
90 END`,
  SNAKE: `10 REM SNAKE FOR THE BRASS-64 - ARROWS TO STEER
20 CLS: DIM X(400),Y(400)
30 L=4: D=4: S=0: SP=5
40 FOR I=0 TO L-1: X(I)=16+I: Y(I)=12: NEXT I: H=L-1
50 GOSUB 500
60 FOR I=0 TO L-1: LOCATE Y(I),X(I): COLOR 13: PRINT "O";: NEXT I
70 GOSUB 400
100 K=KEY
105 IF K=27 THEN END
110 IF K=1 AND D<>2 THEN D=1
120 IF K=2 AND D<>1 THEN D=2
130 IF K=3 AND D<>4 THEN D=3
140 IF K=4 AND D<>3 THEN D=4
150 NX=X(H): NY=Y(H)
160 IF D=1 THEN NY=NY-1
170 IF D=2 THEN NY=NY+1
180 IF D=3 THEN NX=NX-1
190 IF D=4 THEN NX=NX+1
200 C=SCRN(NY,NX)
210 IF C<>32 AND C<>42 THEN 600
220 H=(H+1) MOD 400: X(H)=NX: Y(H)=NY
230 LOCATE NY,NX: COLOR 13: PRINT "O";
240 IF C=42 THEN L=L+1: S=S+10: GOSUB 450: GOSUB 400: GOTO 280
250 T=(H-L+400) MOD 400
260 LOCATE Y(T),X(T): PRINT " ";
280 WAIT SP
290 GOTO 100
400 REM NEW FOOD
410 FX=INT(RND(1)*38)+1: FY=INT(RND(1)*21)+2
420 IF SCRN(FY,FX)<>32 THEN 410
430 LOCATE FY,FX: COLOR 7: PRINT "*";
440 RETURN
450 LOCATE 0,0: COLOR 1: PRINT "SNAKE   SCORE:";S;"   ";: BEEP 880,3: RETURN
500 REM BORDER
510 COLOR 3
520 FOR I=0 TO 39: LOCATE 1,I: PRINT "#";: LOCATE 23,I: PRINT "#";: NEXT I
530 FOR I=1 TO 23: LOCATE I,0: PRINT "#";: LOCATE I,39: PRINT "#";: NEXT I
540 GOSUB 450: RETURN
600 LOCATE 11,14: COLOR 2: PRINT "GAME  OVER": LOCATE 12,13: PRINT "SCORE:";S: BEEP 110,20
610 LOCATE 14,9: COLOR 1: PRINT "PRESS SPACE TO RETRY"
620 K=KEY: IF K=32 THEN RUN
625 IF K=27 THEN END
630 WAIT 2: GOTO 620`,
  ROOFRUN: `10 REM ROOFTOP RUN FOR THE BRASS-64
20 CLS: DIM G(40): S=0: Y=0: V=0
30 FOR I=0 TO 39: G(I)=1: NEXT I
40 COLOR 3: LOCATE 0,0: PRINT "ROOFTOP RUN  [SPACE] JUMP  [ESC] QUIT"
50 COLOR 9: FOR I=19 TO 22: LOCATE I,0: PRINT "########################################";: NEXT I
100 FOR I=0 TO 38: G(I)=G(I+1): NEXT I
110 N=1: IF G(38)=0 AND G(37)=1 THEN N=0
120 IF N=1 AND RND(1)<0.16 AND G(38)+G(37)+G(36)+G(35)=4 THEN N=0
130 G(39)=N
140 LOCATE 18,0: FOR I=0 TO 39: IF G(I)=1 THEN COLOR 7: PRINT "=";
150 IF G(I)=0 THEN PRINT " ";
160 NEXT I
200 K=KEY: IF K=27 THEN END
210 IF K=32 AND Y=0 THEN V=1.6: BEEP 660,2
220 LOCATE 17-INT(Y),6: PRINT " ";
230 Y=Y+V: V=V-0.35: IF Y<0 THEN Y=0: V=0
240 IF Y=0 AND G(6)=0 THEN 400
250 LOCATE 17-INT(Y),6: COLOR 13: PRINT "@";
260 S=S+1: LOCATE 1,0: COLOR 1: PRINT "DISTANCE:";S;"   "
270 WAIT 4: GOTO 100
400 LOCATE 17,6: PRINT " ": COLOR 2: LOCATE 10,15: PRINT "YOU FELL!": BEEP 150,20
410 LOCATE 12,11: COLOR 1: PRINT "SPACE TO RUN AGAIN"
420 K=KEY: IF K=32 THEN RUN
430 IF K=27 THEN END
440 WAIT 2: GOTO 420`,
  LANDER: `10 REM LUNAR LANDER (TEXT)
20 CLS: H=500: V=0: F=120
30 PRINT "LAND THE CAPSULE SOFTLY (SPEED < 5)."
40 PRINT "HEIGHT:";INT(H);"SPEED:";INT(V);"FUEL:";F
50 INPUT "BURN (0-30)";B: IF B<0 THEN B=0
60 IF B>30 THEN B=30
70 IF B>F THEN B=F
80 F=F-B: V=V+5-B/2: H=H-V
90 IF H>0 THEN 40
100 IF V<5 THEN PRINT "TOUCHDOWN! PERFECT LANDING.": BEEP 880,10: GOTO 120
110 PRINT "CRASH AT";INT(V);"M/S... TRY AGAIN.": BEEP 110,20
120 INPUT "AGAIN (Y/N)";A$: IF A$="Y" THEN 20
130 END`,
  OKAFOR: `10 REM PROPERTY OF DR. I. OKAFOR. HINT: WHO ARE YOU?
20 CLS: COLOR 7: PRINT "== JOURNAL :: ENCRYPTED =="
30 INPUT "PASSWORD";P$
40 IF P$<>"NINE" THEN PRINT "ACCESS DENIED.": BEEP 110,10: END
50 COLOR 13: PRINT: PRINT "ENTRY 12. SUBJECTS ONE THROUGH EIGHT"
60 PRINT "DID NOT WAKE. FERROUS CALLS THEM"
70 PRINT "'DRAFTS'. I CALL THEM BY NAME."
80 PRINT: PRINT "ENTRY 31. NINE SMILED TODAY. MALLOY"
90 PRINT "NEVER SMILED IN ANY FOOTAGE I HAVE."
100 PRINT "SO THERE IS ROOM. THERE IS ROOM."
110 PRINT: PRINT "ENTRY 40. FERROUS MENTIONED A NEW"
120 PRINT "CONTRACT: 'THE IRON CHOIR'. I DON'T"
130 PRINT "KNOW WHAT IT IS. I KNOW I'M AFRAID."
140 PRINT: COLOR 3: PRINT "IF YOU'RE READING THIS, NINE: THE"
150 PRINT "SPARE KEY IS UNDER THE PIGEON. LOVE, I."
160 COLOR 13: END`,
};
