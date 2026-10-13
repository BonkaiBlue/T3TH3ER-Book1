// Persistence — isolated, versioned, migration-friendly. Content packs never touch this.
const KEY = 'tether.save';
const VERSION = 3;

const DEFAULT = () => ({
  version: VERSION,
  story: { chapter: 'ch1', step: 0, completed: [] },   // completed chapter ids
  flags: {},
  sideQuests: { done: [] },
  collectibles: [],
  stats: { crimes: 0, takedowns: 0, swingDistance: 0, playTime: 0, tricks: 0 },
  reputation: 0,
  unlockedSkins: ['tether_classic', 'pod_suit'],
  skin: 'tether_classic',
  inventory: { gadgets: ['line', 'pod', 'chirp'], rides: ['skateboard', 'skates', 'bicycle'] },
  lastCity: 'midtown',
  parts: 0, fluid: 60, upgrades: {}, buffs: [], tod: null, customSkins: [], disk: {}, homeVisited: false, suitModsOwned: ['none'],
  settings: {
    quality: 'auto', comicFX: true, ps1Wobble: true, fov: 92, sens: 1.0, invertY: false,
    camera: 'fp', headBob: 0.5, sfx: 0.8, music: 0.4, controlsScale: 1.0, controlsOpacity: 0.55,
    floatingStick: true, leftHanded: false, showFPS: false,
  },
  mods: { disabled: [] },
});

const MIGRATIONS = {
  2: (s) => { s.parts = s.parts || 0; s.fluid = s.fluid ?? 60; s.upgrades = s.upgrades || {}; s.buffs = []; s.customSkins = s.customSkins || []; s.disk = s.disk || {}; if (s.settings) s.settings.fov = Math.max(s.settings.fov || 92, 88); return s; },
  1: (s) => { s.inventory = s.inventory || { gadgets: ['line', 'pod', 'chirp'], rides: ['skateboard', 'skates', 'bicycle'] }; return s; },
};

export class Save {
  constructor() { this.data = this.load(); }
  load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return DEFAULT();
      let s = JSON.parse(raw);
      while ((s.version || 1) < VERSION) { const v = s.version || 1; s = (MIGRATIONS[v] || ((x) => x))(s); s.version = v + 1; }
      // fill any new default keys (update-safe)
      const d = DEFAULT();
      fill(s, d);
      return s;
    } catch (e) { console.warn('Save corrupt, resetting', e); return DEFAULT(); }
  }
  write() { try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* private mode */ } }
  reset() { const settings = this.data.settings; this.data = DEFAULT(); this.data.settings = settings; this.write(); }
  get settings() { return this.data.settings; }
  flag(k, v) { if (v === undefined) return this.data.flags[k]; this.data.flags[k] = v; this.write(); }
}
function fill(t, d) { for (const k in d) { if (!(k in t)) t[k] = d[k]; else if (d[k] && typeof d[k] === 'object' && !Array.isArray(d[k])) fill(t[k], d[k]); } }

export const save = new Save();
