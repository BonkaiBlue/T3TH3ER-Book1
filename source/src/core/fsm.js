// Minimal hierarchical-friendly finite state machine.
// States: { enter(ctx, prev, data), update(ctx, dt), exit(ctx, next) }
export class FSM {
  constructor(owner, states, initial) {
    this.owner = owner; this.states = states; this.current = null; this.name = null; this.time = 0; this.prev = null;
    if (initial) this.set(initial);
  }
  set(name, data) {
    if (!this.states[name]) { console.warn('FSM: unknown state', name); return; }
    const prevName = this.name;
    if (this.current && this.current.exit) this.current.exit.call(this.owner, name);
    this.prev = prevName; this.name = name; this.current = this.states[name]; this.time = 0;
    if (this.current.enter) this.current.enter.call(this.owner, prevName, data);
  }
  is(...names) { return names.includes(this.name); }
  update(dt) { this.time += dt; if (this.current && this.current.update) this.current.update.call(this.owner, dt); }
}
