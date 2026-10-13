// Procedural sound effects — zero audio files needed. Every sound is a tiny synth "recipe"
// pre-rendered once into an AudioBuffer with OfflineAudioContext (cheap to play, no GC per shot).
// Mods can add recipes: TetherMod.game.audio.addRecipe('name', {dur, build(ctx,out,noise)}).
import { bus } from '../core/events.js';

const SR = 22050;

function env(g, t, a, peak, d, end = 0.0001) {
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + a);
  g.gain.exponentialRampToValueAtTime(end, t + a + d);
}
function noiseBuf(ctx, dur) {
  const b = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * dur), ctx.sampleRate);
  const d = b.getChannelData(0); let seed = 1234567;
  for (let i = 0; i < d.length; i++) { seed = (seed * 1103515245 + 12345) & 0x7fffffff; d[i] = seed / 0x3fffffff - 1; }
  return b;
}
const N = (ctx, dur) => { const s = ctx.createBufferSource(); s.buffer = noiseBuf(ctx, dur); return s; };
const O = (ctx, type, f) => { const o = ctx.createOscillator(); o.type = type; o.frequency.value = f; return o; };
const G = (ctx, v = 1) => { const g = ctx.createGain(); g.gain.value = v; return g; };
const F = (ctx, type, f, q = 1) => { const b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q; return b; };

export const RECIPES = {
  thwip: { dur: 0.34, build(c, out) {
    // airy "th" + whippy line: bandpassed noise sweeping down + fast falling chirp
    const n = N(c, 0.3), bp = F(c, 'bandpass', 4200, 2.2), g = G(c);
    bp.frequency.setValueAtTime(5200, 0); bp.frequency.exponentialRampToValueAtTime(900, 0.2);
    env(g, 0, 0.004, 0.9, 0.22); n.connect(bp).connect(g).connect(out); n.start(0);
    const o = O(c, 'triangle', 2400), g2 = G(c);
    o.frequency.setValueAtTime(2600, 0.01); o.frequency.exponentialRampToValueAtTime(320, 0.16);
    env(g2, 0.01, 0.005, 0.35, 0.15); o.connect(g2).connect(out); o.start(0); o.stop(0.3);
    const ck = N(c, 0.02), hp = F(c, 'highpass', 2500), g3 = G(c); env(g3, 0, 0.001, 0.6, 0.015);
    ck.connect(hp).connect(g3).connect(out); ck.start(0);
  } },
  zip: { dur: 0.5, build(c, out) {
    const o = O(c, 'sawtooth', 180), lp = F(c, 'lowpass', 300, 6), g = G(c);
    o.frequency.setValueAtTime(140, 0); o.frequency.exponentialRampToValueAtTime(620, 0.4);
    lp.frequency.setValueAtTime(300, 0); lp.frequency.exponentialRampToValueAtTime(2600, 0.4);
    env(g, 0, 0.02, 0.35, 0.42); o.connect(lp).connect(g).connect(out); o.start(0); o.stop(0.5);
    const n = N(c, 0.5), bp = F(c, 'bandpass', 1500, 1.5), g2 = G(c); env(g2, 0, 0.05, 0.4, 0.4);
    n.connect(bp).connect(g2).connect(out); n.start(0);
  } },
  release: { dur: 0.25, build(c, out) {
    const n = N(c, 0.25), hp = F(c, 'highpass', 3000), g = G(c); env(g, 0, 0.003, 0.4, 0.12);
    n.connect(hp).connect(g).connect(out); n.start(0);
  } },
  whoosh: { dur: 0.7, build(c, out) {
    const n = N(c, 0.7), bp = F(c, 'bandpass', 400, 0.9), g = G(c);
    bp.frequency.setValueAtTime(350, 0); bp.frequency.exponentialRampToValueAtTime(1800, 0.3); bp.frequency.exponentialRampToValueAtTime(300, 0.65);
    env(g, 0, 0.18, 0.7, 0.45); n.connect(bp).connect(g).connect(out); n.start(0);
  } },
  step: { dur: 0.09, build(c, out) {
    const n = N(c, 0.09), lp = F(c, 'lowpass', 700), g = G(c); env(g, 0, 0.002, 0.5, 0.06);
    n.connect(lp).connect(g).connect(out); n.start(0);
  } },
  land: { dur: 0.35, build(c, out) {
    const o = O(c, 'sine', 140), g = G(c); o.frequency.exponentialRampToValueAtTime(42, 0.25);
    env(g, 0, 0.003, 0.9, 0.28); o.connect(g).connect(out); o.start(0); o.stop(0.35);
    const n = N(c, 0.2), lp = F(c, 'lowpass', 900), g2 = G(c); env(g2, 0, 0.002, 0.5, 0.15);
    n.connect(lp).connect(g2).connect(out); n.start(0);
  } },
  jump: { dur: 0.2, build(c, out) {
    const n = N(c, 0.2), bp = F(c, 'bandpass', 900, 1), g = G(c); env(g, 0, 0.01, 0.35, 0.14);
    n.connect(bp).connect(g).connect(out); n.start(0);
  } },
  punch: { dur: 0.25, build(c, out) {
    const n = N(c, 0.12), lp = F(c, 'lowpass', 2200), g = G(c); env(g, 0, 0.001, 0.9, 0.08);
    n.connect(lp).connect(g).connect(out); n.start(0);
    const o = O(c, 'sine', 180), g2 = G(c); o.frequency.exponentialRampToValueAtTime(55, 0.18);
    env(g2, 0, 0.002, 1, 0.18); o.connect(g2).connect(out); o.start(0); o.stop(0.25);
  } },
  whiff: { dur: 0.2, build(c, out) {
    const n = N(c, 0.2), bp = F(c, 'bandpass', 1200, 2), g = G(c);
    bp.frequency.setValueAtTime(700, 0); bp.frequency.exponentialRampToValueAtTime(2400, 0.15);
    env(g, 0, 0.03, 0.4, 0.12); n.connect(bp).connect(g).connect(out); n.start(0);
  } },
  takedown: { dur: 0.6, build(c, out) {
    RECIPES.punch.build(c, out);
    const o = O(c, 'square', 90), lp = F(c, 'lowpass', 400), g = G(c); o.frequency.exponentialRampToValueAtTime(40, 0.4);
    env(g, 0.05, 0.005, 0.5, 0.45); o.connect(lp).connect(g).connect(out); o.start(0); o.stop(0.6);
  } },
  gunshot: { dur: 0.4, build(c, out) {
    const n = N(c, 0.4), hp = F(c, 'highpass', 600), g = G(c); env(g, 0, 0.001, 1, 0.25);
    n.connect(hp).connect(g).connect(out); n.start(0);
    const o = O(c, 'sine', 120), g2 = G(c); o.frequency.exponentialRampToValueAtTime(40, 0.15); env(g2, 0, 0.001, 0.8, 0.14);
    o.connect(g2).connect(out); o.start(0); o.stop(0.3);
  } },
  explosion: { dur: 1.6, build(c, out) {
    const n = N(c, 1.6), lp = F(c, 'lowpass', 1200, 0.7), g = G(c);
    lp.frequency.setValueAtTime(1600, 0); lp.frequency.exponentialRampToValueAtTime(90, 1.4);
    env(g, 0, 0.005, 1, 1.5); n.connect(lp).connect(g).connect(out); n.start(0);
    const o = O(c, 'sine', 70), g2 = G(c); o.frequency.exponentialRampToValueAtTime(28, 1); env(g2, 0, 0.005, 1, 1);
    o.connect(g2).connect(out); o.start(0); o.stop(1.4);
  } },
  pod: { dur: 0.4, build(c, out) {
    const o = O(c, 'sine', 300), g = G(c); o.frequency.setValueAtTime(900, 0); o.frequency.exponentialRampToValueAtTime(140, 0.25);
    env(g, 0, 0.003, 0.6, 0.3); o.connect(g).connect(out); o.start(0); o.stop(0.4);
    const n = N(c, 0.3), bp = F(c, 'bandpass', 600, 3), g2 = G(c); env(g2, 0.02, 0.01, 0.6, 0.22);
    n.connect(bp).connect(g2).connect(out); n.start(0);
  } },
  chirp: { dur: 0.6, build(c, out) {
    for (let i = 0; i < 3; i++) {
      const t = i * 0.16, o = O(c, 'sine', 2200), g = G(c);
      o.frequency.setValueAtTime(2100, t); o.frequency.exponentialRampToValueAtTime(3400, t + 0.08);
      env(g, t, 0.005, 0.35, 0.09); o.connect(g).connect(out); o.start(t); o.stop(t + 0.14);
    }
  } },
  alert: { dur: 0.45, build(c, out) {
    [[0, 740], [0.12, 1110]].forEach(([t, f]) => { const o = O(c, 'square', f), lp = F(c, 'lowpass', 3000), g = G(c); env(g, t, 0.005, 0.25, 0.25); o.connect(lp).connect(g).connect(out); o.start(t); o.stop(t + 0.32); });
  } },
  suspicious: { dur: 0.5, build(c, out) {
    const o = O(c, 'triangle', 520), lfo = O(c, 'sine', 9), lg = G(c, 40), g = G(c);
    lfo.connect(lg).connect(o.frequency); env(g, 0, 0.05, 0.25, 0.4);
    o.connect(g).connect(out); o.start(0); lfo.start(0); o.stop(0.5); lfo.stop(0.5);
  } },
  collect: { dur: 0.6, build(c, out) {
    [660, 880, 1320, 1760].forEach((f, i) => { const t = i * 0.07, o = O(c, 'square', f), g = G(c); env(g, t, 0.004, 0.18, 0.18); o.connect(g).connect(out); o.start(t); o.stop(t + 0.25); });
  } },
  ui_click: { dur: 0.08, build(c, out) {
    const o = O(c, 'square', 1200), g = G(c); env(g, 0, 0.002, 0.15, 0.05); o.connect(g).connect(out); o.start(0); o.stop(0.08);
  } },
  ui_ok: { dur: 0.3, build(c, out) {
    [880, 1320].forEach((f, i) => { const t = i * 0.08, o = O(c, 'triangle', f), g = G(c); env(g, t, 0.004, 0.3, 0.15); o.connect(g).connect(out); o.start(t); o.stop(t + 0.2); });
  } },
  ui_back: { dur: 0.25, build(c, out) {
    [880, 587].forEach((f, i) => { const t = i * 0.08, o = O(c, 'triangle', f), g = G(c); env(g, t, 0.004, 0.25, 0.12); o.connect(g).connect(out); o.start(t); o.stop(t + 0.2); });
  } },
  blip: { dur: 0.05, build(c, out) {
    const o = O(c, 'square', 520), lp = F(c, 'lowpass', 2000), g = G(c); env(g, 0, 0.002, 0.12, 0.035); o.connect(lp).connect(g).connect(out); o.start(0); o.stop(0.05);
  } },
  laugh: { dur: 1.4, build(c, out) {
    [0, 0.2, 0.38, 0.55, 0.75].forEach((t, i) => {
      const f = 520 - i * 35, o = O(c, 'sawtooth', f), lfo = O(c, 'sine', 28), lg = G(c, 60), lp = F(c, 'bandpass', 1100, 2), g = G(c);
      lfo.connect(lg).connect(o.frequency); o.frequency.setValueAtTime(f * 1.15, t); o.frequency.exponentialRampToValueAtTime(f * 0.8, t + 0.15);
      env(g, t, 0.01, 0.4, 0.15); o.connect(lp).connect(g).connect(out); o.start(t); lfo.start(t); o.stop(t + 0.2); lfo.stop(t + 0.2);
    });
  } },
  clang: { dur: 1.0, build(c, out) {
    [220, 347, 513, 761].forEach((f, i) => { const o = O(c, 'sine', f), g = G(c); env(g, 0, 0.002, 0.25 / (i + 1), 0.9); o.connect(g).connect(out); o.start(0); o.stop(1); });
    const n = N(c, 0.05), g = G(c); env(g, 0, 0.001, 0.6, 0.04); n.connect(g).connect(out); n.start(0);
  } },
  bell: { dur: 2.5, build(c, out) {
    [196, 392, 466, 588, 784].forEach((f, i) => { const o = O(c, 'sine', f), g = G(c); env(g, 0, 0.005, 0.28 / (1 + i * 0.6), 2.3); o.connect(g).connect(out); o.start(0); o.stop(2.5); });
  } },
  ignite: { dur: 0.9, build(c, out) {
    const n = N(c, 0.9), lp = F(c, 'lowpass', 300, 1), g = G(c); lp.frequency.exponentialRampToValueAtTime(2500, 0.4);
    env(g, 0, 0.15, 0.8, 0.7); n.connect(lp).connect(g).connect(out); n.start(0);
  } },
  hurt: { dur: 0.3, build(c, out) {
    const o = O(c, 'sawtooth', 220), lp = F(c, 'lowpass', 900), g = G(c); o.frequency.exponentialRampToValueAtTime(110, 0.25);
    env(g, 0, 0.005, 0.4, 0.25); o.connect(lp).connect(g).connect(out); o.start(0); o.stop(0.3);
  } },
  siren: { dur: 1.6, build(c, out) {
    const o = O(c, 'square', 700), lp = F(c, 'lowpass', 1600), g = G(c);
    for (let i = 0; i < 4; i++) o.frequency.setValueAtTime(i % 2 ? 950 : 700, i * 0.4);
    env(g, 0, 0.05, 0.12, 1.5); o.connect(lp).connect(g).connect(out); o.start(0); o.stop(1.6);
  } },
  ride: { dur: 0.3, build(c, out) {
    const o = O(c, 'triangle', 330), g = G(c); o.frequency.exponentialRampToValueAtTime(660, 0.12); env(g, 0, 0.005, 0.25, 0.2);
    o.connect(g).connect(out); o.start(0); o.stop(0.3);
  } },
  sense: { dur: 0.7, build(c, out) {
    [1568, 2093, 2637].forEach((f, i) => { const o = O(c, 'sine', f), g = G(c); env(g, i * 0.03, 0.01, 0.15, 0.6); o.connect(g).connect(out); o.start(0); o.stop(0.7); });
  } },
};

export class Audio {
  constructor(settings) {
    this.settings = settings; this.ctx = null; this.buffers = {}; this.ready = false; this.recipes = { ...RECIPES };
    this.loops = {}; this._lastPlay = {};
  }
  addRecipe(name, r) { this.recipes[name] = r; if (this.ready) this._render(name).then((b) => (this.buffers[name] = b)); }
  async unlock() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain(); this.master.connect(this.ctx.destination);
    this.sfxBus = this.ctx.createGain(); this.sfxBus.connect(this.master);
    this.musicBus = this.ctx.createGain(); this.musicBus.connect(this.master);
    this.applyVolumes();
    await this.renderAll();
    this._makeLoops();
    this.ready = true; bus.emit('audio:ready');
  }
  applyVolumes() { if (!this.ctx) return; this.sfxBus.gain.value = this.settings.sfx; this.musicBus.gain.value = this.settings.music; }
  async _render(name) {
    const r = this.recipes[name];
    const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    const oc = new OAC(1, Math.ceil(SR * r.dur), SR);
    const out = oc.createGain(); out.connect(oc.destination);
    r.build(oc, out);
    const buf = await oc.startRendering();
    // normalize so layered synth voices never clip
    const d = buf.getChannelData(0); let peak = 0; for (let i = 0; i < d.length; i++) { const a = Math.abs(d[i]); if (a > peak) peak = a; }
    const k = peak > 0.9 ? 0.9 / peak : 1; if (k !== 1) for (let i = 0; i < d.length; i++) d[i] *= k;
    return buf;
  }
  async renderAll() {
    const names = Object.keys(this.recipes);
    await Promise.all(names.map(async (n) => { try { this.buffers[n] = await this._render(n); } catch (e) { console.warn('sfx render failed', n, e); } }));
  }
  play(name, { vol = 1, rate = 1, vary = 0.06, minGap = 0.03 } = {}) {
    if (!this.ready || !this.buffers[name]) return;
    const t = this.ctx.currentTime;
    if (this._lastPlay[name] && t - this._lastPlay[name] < minGap) return;
    this._lastPlay[name] = t;
    const s = this.ctx.createBufferSource(); s.buffer = this.buffers[name];
    s.playbackRate.value = rate * (1 + (Math.random() * 2 - 1) * vary);
    const g = this.ctx.createGain(); g.gain.value = vol; s.connect(g).connect(this.sfxBus); s.start(t);
  }
  _makeLoops() {
    const c = this.ctx;
    const mk = (filterType, freq, q) => {
      const src = c.createBufferSource(); src.buffer = noiseBuf(c, 2); src.loop = true;
      const f = c.createBiquadFilter(); f.type = filterType; f.frequency.value = freq; f.Q.value = q;
      const g = c.createGain(); g.gain.value = 0; src.connect(f).connect(g).connect(this.sfxBus); src.start();
      return { src, f, g };
    };
    this.loops.wind = mk('bandpass', 500, 0.6);
    this.loops.fire = mk('lowpass', 500, 1.5);
    this.loops.city = mk('lowpass', 220, 0.5);
    this.loops.roll = mk('bandpass', 180, 2);
    this._music();
  }
  setLoop(name, gain, freq) {
    const l = this.loops[name]; if (!l) return; const t = this.ctx.currentTime;
    l.g.gain.setTargetAtTime(gain, t, 0.15); if (freq) l.f.frequency.setTargetAtTime(freq, t, 0.2);
  }
  // Tiny adaptive music sequencer: walking bass + brush hats; "intensity" adds lead stabs.
  _music() {
    const c = this.ctx; this.intensity = 0; this.musicOn = true;
    const bass = [0, 0, 7, 5, 3, 3, 7, 10]; const root = 55 * Math.pow(2, 3 / 12);
    let step = 0; let next = c.currentTime + 0.2;
    const tick = () => {
      if (!this.ctx) return;
      while (next < c.currentTime + 0.25) {
        const bpm = 96 + this.intensity * 40, dur = 60 / bpm / 2;
        if (this.musicOn && this.settings.music > 0) {
          if (step % 2 === 0) note(c, this.musicBus, 'triangle', root * Math.pow(2, bass[(step / 2) % 8] / 12), next, dur * 1.8, 0.22);
          hat(c, this.musicBus, next, step % 4 === 2 ? 0.06 : 0.025);
          if (this.intensity > 0.4 && step % 4 === 0) note(c, this.musicBus, 'square', root * 4 * Math.pow(2, [0, 3, 7, 10][(step / 4) % 4] / 12), next, dur, 0.05);
        }
        next += dur; step = (step + 1) % 64;
      }
      setTimeout(tick, 90);
    };
    tick();
  }
  // WAV export (used to ship the generated SFX as files too)
  toWav(name) {
    const b = this.buffers[name]; if (!b) return null; const d = b.getChannelData(0);
    const buf = new ArrayBuffer(44 + d.length * 2), v = new DataView(buf);
    const w = (o, s) => { for (let i = 0; i < s.length; i++) v.setUint8(o + i, s.charCodeAt(i)); };
    w(0, 'RIFF'); v.setUint32(4, 36 + d.length * 2, true); w(8, 'WAVE'); w(12, 'fmt '); v.setUint32(16, 16, true);
    v.setUint16(20, 1, true); v.setUint16(22, 1, true); v.setUint32(24, b.sampleRate, true); v.setUint32(28, b.sampleRate * 2, true);
    v.setUint16(32, 2, true); v.setUint16(34, 16, true); w(36, 'data'); v.setUint32(40, d.length * 2, true);
    for (let i = 0; i < d.length; i++) v.setInt16(44 + i * 2, Math.max(-1, Math.min(1, d[i])) * 0x7fff, true);
    return buf;
  }
}
function note(c, out, type, f, t, dur, vol) {
  const o = c.createOscillator(); o.type = type; o.frequency.value = f; const g = c.createGain();
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(out); o.start(t); o.stop(t + dur + 0.05);
}
let _hatBuf = null;
function hat(c, out, t, vol) {
  if (!_hatBuf) _hatBuf = noiseBuf(c, 0.05);
  const s = c.createBufferSource(); s.buffer = _hatBuf; const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 7000;
  const g = c.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);
  s.connect(f).connect(g).connect(out); s.start(t);
}
