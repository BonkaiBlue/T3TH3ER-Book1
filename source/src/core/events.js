// Global event bus — decouples gameplay, UI, audio and mods.
export class EventBus {
  constructor() { this.map = new Map(); }
  on(type, fn) {
    if (!this.map.has(type)) this.map.set(type, new Set());
    this.map.get(type).add(fn);
    return () => this.off(type, fn);
  }
  once(type, fn) { const off = this.on(type, (p) => { off(); fn(p); }); return off; }
  off(type, fn) { const s = this.map.get(type); if (s) s.delete(fn); }
  emit(type, payload) {
    const s = this.map.get(type);
    if (s) for (const fn of Array.from(s)) { try { fn(payload); } catch (e) { console.error('[event]', type, e); } }
    const any = this.map.get('*');
    if (any) for (const fn of any) fn({ type, payload });
  }
}
export const bus = new EventBus();
