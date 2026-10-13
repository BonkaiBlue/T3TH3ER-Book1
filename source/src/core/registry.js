// Asset Registry + Pack loader.
// Every piece of content (cities, suits, gadgets, rides, chapters, dialogue, side quests,
// crimes, NPC archetypes, loading tips, palettes) is data registered by "packs".
// Packs are plain .js files that call TetherMod.register({...}) so they load from file://
// (no fetch/CORS) on any Android browser. See docs/MODDING.md.
import { deepMerge } from './util.js';
import { bus } from './events.js';

const CATEGORIES = ['cities', 'skins', 'gadgets', 'rides', 'chapters', 'sideQuests', 'crimes', 'npcTypes', 'palettes', 'collectibles'];
const MAPS = ['dialogues', 'strings', 'speakers'];

export class Registry {
  constructor() {
    this.packs = [];          // pack descriptors, sorted by priority
    this.disabled = new Set();
    this.data = {};
    this.tips = [];
    this.hooks = [];
    this.rebuild();
  }
  addPack(pack) {
    if (!pack || !pack.id) { console.warn('Pack without id ignored', pack); return; }
    const existing = this.packs.findIndex((p) => p.id === pack.id);
    if (existing >= 0) this.packs.splice(existing, 1);
    pack.priority = pack.priority ?? 0;
    this.packs.push(pack);
    this.packs.sort((a, b) => a.priority - b.priority);
  }
  setDisabled(ids) { this.disabled = new Set(ids || []); this.rebuild(); }
  rebuild() {
    const d = {};
    for (const c of CATEGORIES) d[c] = new Map();
    for (const m of MAPS) d[m] = {};
    const tips = []; const hooks = [];
    for (const p of this.packs) {
      if (this.disabled.has(p.id) && !p.core) continue;
      for (const c of CATEGORIES) {
        for (const item of p[c] || []) {
          if (!item.id) continue;
          const prev = d[c].get(item.id);
          if (prev && item.patch) d[c].set(item.id, deepMerge(structuredCloneSafe(prev), item));
          else d[c].set(item.id, { ...item, _pack: p.id });
        }
      }
      for (const m of MAPS) Object.assign(d[m], p[m] || {});
      tips.push(...(p.tips || []));
      if (p.hooks) hooks.push(p.hooks);
    }
    this.data = d; this.tips = tips; this.hooks = hooks;
    bus.emit('registry:rebuilt', this);
  }
  get(cat, id) { return this.data[cat] && this.data[cat].get(id); }
  list(cat) { return this.data[cat] ? Array.from(this.data[cat].values()) : []; }
  dialogue(id) { return this.data.dialogues[id]; }
  str(key, fallback) { return this.data.strings[key] ?? fallback ?? key; }
  runHook(name, ...args) { for (const h of this.hooks) if (typeof h[name] === 'function') { try { h[name](...args); } catch (e) { console.error('[mod hook]', name, e); } } }
}

function structuredCloneSafe(o) { try { return structuredClone(o); } catch { return JSON.parse(JSON.stringify(o)); } }

export const registry = new Registry();

// Public mod API exposed on window before packs load (Boot.html creates a queue).
export function installModAPI(game) {
  const api = {
    version: '1.0.0',
    register(pack) { registry.addPack(pack); registry.rebuild(); },
    registry, bus, game,
  };
  const queued = (window.TetherMod && window.TetherMod._queue) || [];
  window.TetherMod = api;
  for (const p of queued) registry.addPack(p);
  registry.rebuild();
  return api;
}
