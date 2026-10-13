// Object pool — avoids GC stutter during swinging and fights.
export class Pool {
  constructor(factory, reset, initial = 16) {
    this.factory = factory; this.reset = reset; this.free = []; this.active = [];
    for (let i = 0; i < initial; i++) this.free.push(factory());
  }
  get() {
    const o = this.free.length ? this.free.pop() : this.factory();
    this.active.push(o);
    return o;
  }
  release(o) {
    const i = this.active.indexOf(o);
    if (i >= 0) { this.active[i] = this.active[this.active.length - 1]; this.active.pop(); }
    if (this.reset) this.reset(o);
    this.free.push(o);
  }
  // Iterate actives safely while allowing release inside callback.
  each(fn) { for (let i = this.active.length - 1; i >= 0; i--) fn(this.active[i], i); }
  releaseAll() { while (this.active.length) this.release(this.active[this.active.length - 1]); }
}
