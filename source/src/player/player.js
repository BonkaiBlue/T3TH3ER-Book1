// Player controller: state machine for ground / air / slide / wallrun / climb / hang / vault /
// swing / zip / ride / locked. Free-running is context-automatic while L1 (free-run) is held.
import * as THREE from 'three';
import { FSM } from '../core/fsm.js';
import { moveBody } from '../world/collision.js';
import { clamp, damp, lerp, wrapAngle } from '../core/util.js';
import { bus } from '../core/events.js';
import { input } from '../ui/input.js';

const UP = new THREE.Vector3(0, 1, 0);
const G = 22;
const RIDES = {
  skateboard: { max: 13.5, accel: 7, friction: 0.35, turn: 1, jump: 7.0, pose: 'ride' },
  skates:     { max: 12.0, accel: 12, friction: 1.2, turn: 1, jump: 7.5, pose: 'ride' },
  bicycle:    { max: 17.0, accel: 9, friction: 0.6, turn: 0.75, jump: 5.5, pose: 'bike' },
};

export class Player {
  constructor(game) {
    this.game = game; this.world = game.world;
    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3();
    this.yaw = 0; this.pitch = 0; this.hw = 0.32; this.h = 1.8; this.targetH = 1.8;
    this.ground = false; this.crouch = false; this.health = 100; this.maxHealth = 100; this.lastHurt = 0;
    this.abilities = { swing: true, zip: true, gadgets: true, ride: true, wallrun: true, climb: true };
    this.ride = null; this.rideIdx = 0; this.anchor = new THREE.Vector3(); this.ropeLen = 0; this.ropeActive = false;
    this.wallN = new THREE.Vector3(); this.wallSide = 0; this.wallTime = 0; this.wallCooldown = 0;
    this.lerpFrom = new THREE.Vector3(); this.lerpTo = new THREE.Vector3(); this.lerpT = 0; this.lerpDur = 0.3; this.afterLerp = 'ground';
    this.zipTarget = null; this.aimZipPoint = null; this._zipScan = 0;
    this.pose = 'idle'; this.speed = 0; this.landImpact = 0; this.stepPhase = 0; this.lastStepSign = 1;
    this.swingDistance = 0; this.airTime = 0; this.noiseTimer = 0; this.lockTimer = 0; this.lockPose = 'idle';
    this.lastSafe = new THREE.Vector3(); this.safeTimer = 0; this.swingRetry = 0; this.coyote = 0; this.jumpBuffer = 0;
    this._fwd = new THREE.Vector3(); this._right = new THREE.Vector3(); this._tmp = new THREE.Vector3(); this._tmp2 = new THREE.Vector3();
    this.fsm = new FSM(this, STATES, 'ground');
  }
  spawn(p, yaw = 0) {
    this.pos.copy(p); this.vel.set(0, 0, 0); this.yaw = yaw; this.pitch = 0; this.lastSafe.copy(p);
    this.ropeActive = false; this.ride = null; this.crouch = false; this.h = this.targetH = 1.8; this.health = this.maxHealth;
    this.fsm.set('air');
  }
  get eyeHeight() { return this.h - 0.18; }
  fwd() { return this._fwd.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)); }
  right() { return this._right.set(Math.cos(this.yaw), 0, -Math.sin(this.yaw)); }
  lookDir(out = new THREE.Vector3()) {
    const cp = Math.cos(this.pitch);
    return out.set(-Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp);
  }
  eye(out = new THREE.Vector3()) { return out.set(this.pos.x, this.pos.y + this.eyeHeight, this.pos.z); }
  hurt(amount, from) {
    if (this.game.godMode || this.fsm.is('locked') && this.lockPose === 'takedown') return;
    this.health -= amount; this.lastHurt = this.game.time;
    bus.emit('player:hurt', { amount, from });
    if (this.health <= 0) { this.health = 0; bus.emit('player:dead'); }
  }
  lock(t, pose = 'idle') { this.lockTimer = t; this.lockPose = pose; if (!this.fsm.is('locked')) this.fsm.set('locked'); }
  setCrouch(c) {
    if (!c && this.crouch) { // need headroom
      const q = this.world.collision.query(this.pos.x - this.hw, this.pos.y + 0.1, this.pos.z - this.hw, this.pos.x + this.hw, this.pos.y + 1.8, this.pos.z + this.hw, []);
      if (q.some((b) => !b.trigger)) return false;
    }
    this.crouch = c; this.targetH = c ? 1.1 : 1.8; return true;
  }

  update(dt) {
    // look
    if (!this.fsm.is('locked') || this.lockPose !== 'dialogue') {
      this.yaw = wrapAngle(this.yaw - input.look.x);
      this.pitch = clamp(this.pitch - input.look.y, -1.45, 1.45);
    }
    this.wallCooldown = Math.max(0, this.wallCooldown - dt);
    this.h = damp(this.h, this.targetH, 14, dt);
    this.fsm.update(dt);
    // regen
    if (this.health < this.maxHealth && this.game.time - this.lastHurt > 4) this.health = Math.min(this.maxHealth, this.health + 8 * dt);
    // safe-spot tracking for respawns (water / pits)
    this.safeTimer += dt;
    if (this.ground && this.safeTimer > 1 && this.pos.y > this.world.collision.floorFn(this.pos.x, this.pos.z) + -0.5) { this.lastSafe.copy(this.pos); this.safeTimer = 0; }
    // water / void check
    const floorY = this.world.collision.floorFn(this.pos.x, this.pos.z);
    if (floorY < -1 && this.pos.y <= floorY + 0.3 && !this.world.data.interior) { bus.emit('player:splash'); this.respawnSafe(); }
    if (this.pos.y < -25) this.respawnSafe();
    this.speed = Math.hypot(this.vel.x, this.vel.z);
    // swing distance stat
    if (this.fsm.is('swing')) this.swingDistance += this.vel.length() * dt;
    // fire hazard
    if (this.world.isBurning(this.pos)) { this.hurt(28 * dt, 'fire'); }
  }
  respawnSafe() {
    const r = this.world.roofAt(this.lastSafe.x, this.lastSafe.z);
    this.pos.copy(this.lastSafe); if (r && this.pos.y < r.y) this.pos.y = r.y + 0.1;
    this.vel.set(0, 0, 0); this.ropeActive = false; this.fsm.set('air');
    bus.emit('player:respawned');
  }

  // ---------- helpers ----------
  moveInput() { // camera-relative desired direction (unnormalized magnitude 0..1)
    const f = this.fwd(), r = this.right();
    const x = input.move.x, y = input.move.y;
    return this._tmp.set(f.x * y + r.x * x, 0, f.z * y + r.z * x);
  }
  physics(dt, opts) {
    const res = moveBody(this.world.collision, this.pos, this.vel, dt, this.hw, this.h, opts);
    this.contact = res; return res;
  }
  ray(ox, oy, oz, dx, dy, dz, dist, filter) { return this.world.collision.raycast(ox, oy, oz, dx, dy, dz, dist, filter); }
  probeWall(dir, height, dist) {
    const h = this.ray(this.pos.x, this.pos.y + height, this.pos.z, dir.x, 0, dir.z, dist);
    if (h && h.box && Math.abs(h.normal[1]) < 0.5) return h; return null;
  }
  emitNoise(radius) { bus.emit('noise', { pos: this.pos.clone(), radius, source: 'player' }); }
  freerun() { return input.down('l1'); }
  sprinting() { return Math.hypot(input.move.x, input.move.y) > 0.85 || this.freerun(); }
  tryVault() {
    const f = this.fwd(); if (this.speed < 1.5 && !input.pressed('cross')) return false;
    const h = this.probeWall(f, 0.5, 0.8 + this.speed * 0.06); if (!h || h.box.trigger) return false;
    const top = h.box.max[1]; const rise = top - this.pos.y;
    if (rise < 0.4 || rise > 1.4) return false;
    // thickness along forward
    const back = this.ray(h.point[0] + f.x * 3, top - 0.05, h.point[2] + f.z * 3, -f.x, 0, -f.z, 3);
    const depth = back && back.box === h.box ? 3 - back.t : 3;
    const q = this.world.collision.query(h.point[0] + f.x * 0.4 - this.hw, top + 0.05, h.point[2] + f.z * 0.4 - this.hw, h.point[0] + f.x * 0.4 + this.hw, top + 1.0, h.point[2] + f.z * 0.4 + this.hw, []);
    if (q.some((b) => !b.trigger)) return false;
    this.lerpFrom.copy(this.pos);
    if (depth < 1.6) { this.lerpTo.set(h.point[0] + f.x * (depth + 0.6), this.pos.y + 0.0, h.point[2] + f.z * (depth + 0.6)); this.vaultTop = top + 0.25; }
    else { this.lerpTo.set(h.point[0] + f.x * 0.6, top + 0.02, h.point[2] + f.z * 0.6); this.vaultTop = top + 0.3; }
    // landing beyond might be a drop: keep momentum
    this.vaultSpeed = Math.max(this.speed, 5);
    this.lerpDur = 0.32; this.afterLerp = 'air';
    this.fsm.set('vault');
    bus.emit('player:vault');
    return true;
  }
  tryLedge() {
    if (!this.abilities.climb) return false;
    const f = this.fwd();
    const h = this.probeWall(f, 1.2, 0.75); if (!h || h.box.trigger || h.box.rail) return false;
    const top = h.box.max[1]; if (top - this.pos.y < 1.2 || top - this.pos.y > 2.35) return false;
    // space above
    const n = h.normal;
    const q = this.world.collision.query(h.point[0] - n[0] * 0.5 - this.hw, top + 0.05, h.point[2] - n[2] * 0.5 - this.hw, h.point[0] - n[0] * 0.5 + this.hw, top + 1.0, h.point[2] - n[2] * 0.5 + this.hw, []);
    if (q.some((b) => !b.trigger)) return false;
    this.wallN.set(n[0], 0, n[2]); this.ledgeTop = top; this.ledgePoint = new THREE.Vector3(h.point[0], top, h.point[2]);
    this.fsm.set('hang'); return true;
  }
  tryClimb() {
    if (!this.abilities.climb) return false;
    const f = this.fwd();
    const h = this.probeWall(f, 1.0, 0.7); if (!h || !h.box.climb || h.box.trigger || h.box.rail) return false;
    if (h.box.max[1] - this.pos.y < 1.2) return false;
    this.wallN.set(h.normal[0], 0, h.normal[2]); this.climbBox = h.box;
    this.fsm.set('climb'); return true;
  }
  tryWallRun() {
    if (!this.abilities.wallrun || this.wallCooldown > 0) return false;
    const hs = Math.hypot(this.vel.x, this.vel.z); if (hs < 5.5) return false;
    const r = this.right();
    for (const side of [-1, 1]) {
      const d = this._tmp2.set(r.x * side, 0, r.z * side);
      const h = this.probeWall(d, 1.0, 1.1);
      if (!h || h.box.trigger || h.box.rail || h.box.max[1] - this.pos.y < 2.2) continue;
      const n = this._tmp.set(h.normal[0], 0, h.normal[2]);
      const along = Math.abs((this.vel.x * n.x + this.vel.z * n.z) / hs);
      if (along > 0.75) continue;
      this.wallN.copy(n); this.wallSide = side; this.fsm.set('wallrun'); return true;
    }
    return false;
  }
  findAnchor() {
    const eye = this.eye(new THREE.Vector3()); const look = this.lookDir(new THREE.Vector3());
    const hv = Math.hypot(this.vel.x, this.vel.z);
    // bias toward velocity when moving fast, else toward camera
    let fx = look.x, fz = look.z;
    if (hv > 6) { fx = fx * 0.5 + this.vel.x / hv * 0.5; fz = fz * 0.5 + this.vel.z / hv * 0.5; }
    const fl = Math.hypot(fx, fz) || 1; fx /= fl; fz /= fl;
    let best = null, bestScore = -1e9;
    const elev = [0.95, 1.1, 0.8, 1.25, 0.65];
    const yawOff = [0, 0.38, -0.38, 0.7, -0.7];
    for (const e of elev) for (const yo of yawOff) {
      const c = Math.cos(yo), s = Math.sin(yo);
      const hx = fx * c - fz * s, hz = fx * s + fz * c;
      const ce = Math.cos(e), se = Math.sin(e);
      const dx = hx * ce, dy = se, dz = hz * ce;
      const h = this.ray(eye.x, eye.y, eye.z, dx, dy, dz, 75, (b) => !b.trigger && !b.curb);
      if (!h || h.floor || !h.box) continue;
      if (h.point[1] < this.pos.y + 4) continue;
      const ahead = (h.point[0] - eye.x) * fx + (h.point[2] - eye.z) * fz;
      if (ahead < 2) continue;
      const score = Math.min(ahead, 30) / 30 * 2 - Math.abs(yo) * 0.6 + Math.min(h.point[1] - this.pos.y, 30) / 30 - Math.abs(e - 0.95) * 0.4;
      if (score > bestScore) { bestScore = score; best = h; }
    }
    return best;
  }
  startSwing(h) {
    this.anchor.set(h.point[0], h.point[1], h.point[2]);
    const d = this.anchor.distanceTo(this.pos);
    this.ropeLen = Math.max(5, d * 0.9);
    this.ropeActive = true;
    if (this.ride) this.dismount();
    this.fsm.set('swing');
    bus.emit('player:thwip', { anchor: this.anchor.clone() });
  }
  dismount() { if (this.ride) { this.ride = null; bus.emit('player:ride', null); } }
  cycleRide() {
    const list = this.game.save.data.inventory.rides.filter((r) => this.game.registry.get('rides', r));
    const opts = [null, ...list];
    this.rideIdx = (this.rideIdx + 1) % opts.length; this.ride = opts[this.rideIdx];
    if (this.ride) { this.setCrouch(false); this.fsm.set('ride'); } else this.fsm.set('ground');
    bus.emit('player:ride', this.ride);
  }
  groundJump(mult = 1) {
    this.vel.y = 8.0 * mult; this.ground = false;
    // parkour leap: more distance when free-running off an edge
    if (this.freerun() && this.speed > 6) { const f = this.fwd(); this.vel.x += f.x * 2; this.vel.z += f.z * 2; this.vel.y += 1; }
    this.fsm.set('air'); bus.emit('player:jump'); this.emitNoise(6);
  }
  aimZip(dt) {
    this._zipScan -= dt;
    if (input.down('l2') && this.abilities.zip) {
      if (this._zipScan <= 0) { this._zipScan = 0.1; this.aimZipPoint = this.world.findZipPoint(this.eye(new THREE.Vector3()), this.lookDir(new THREE.Vector3())); }
    } else this.aimZipPoint = null;
    if (this.aimZipPoint && input.pressed('r2')) { input.consume('r2'); this.zipTarget = this.aimZipPoint.clone(); this.fsm.set('zip'); bus.emit('player:zip', { target: this.zipTarget }); return true; }
    return false;
  }
  canSwingInput() { return this.abilities.swing && input.down('r2') && !input.down('l2'); }
}

// ---------------------------------------------------------------- states
const STATES = {
  ground: {
    enter() { this.ground = true; this.airTime = 0; },
    update(dt) {
      const p = this;
      if (p.aimZip(dt)) return;
      const want = p.moveInput(); const mag = Math.min(1, Math.hypot(input.move.x, input.move.y));
      let maxS = p.crouch ? 2.6 : (mag > 0.85 || p.freerun()) ? (p.freerun() ? 9.6 : 7.6) : 4.4;
      if (p.game.combat && p.game.combat.aiming) maxS = Math.min(maxS, 3.5);
      const tx = want.x * maxS, tz = want.z * maxS;
      const acc = mag > 0.05 ? 45 : 30;
      p.vel.x = approach(p.vel.x, tx, acc * dt); p.vel.z = approach(p.vel.z, tz, acc * dt);
      p.vel.y -= G * dt;
      // crouch / slide
      if (input.pressed('circle')) {
        if (p.speed > 5.8 && !p.crouch) { p.fsm.set('slide'); return; }
        p.setCrouch(!p.crouch); bus.emit('player:crouch', p.crouch);
      }
      if (input.pressed('down') && p.abilities.ride && !p.crouch) { p.cycleRide(); return; }
      // jump / vault
      if (input.pressed('cross')) {
        if (p.tryVault()) return;
        if (p.crouch) p.setCrouch(false);
        p.groundJump(); return;
      }
      if (p.freerun() && mag > 0.3) { if (p.tryVault()) return; if (p.tryClimb()) return; }
      if (p.canSwingInput() && input.pressed('r2')) { p.groundJump(0.9); return; }
      const res = p.physics(dt, { grounded: true, stepH: 0.45 });
      if (!res.ground) { p.coyote = 0.12; p.fsm.set('air'); return; }
      p.ground = true;
      // footsteps
      if (p.speed > 0.5) {
        p.stepPhase += dt * (1.6 + p.speed * 0.32);
        const s = Math.sign(Math.sin(p.stepPhase * Math.PI));
        if (s !== p.lastStepSign) { p.lastStepSign = s; bus.emit('player:step', { crouch: p.crouch, speed: p.speed }); if (!p.crouch) p.emitNoise(p.speed > 6 ? 9 : 4); }
      }
      p.pose = p.crouch ? 'crouch' : p.speed > 6 ? 'run' : p.speed > 0.5 ? 'walk' : 'idle';
    },
  },
  air: {
    enter(prev) { this.ground = false; if (prev !== 'swing' && prev !== 'wallrun') this.swingRetry = 0; },
    update(dt) {
      const p = this;
      p.airTime += dt; p.coyote -= dt;
      if (p.aimZip(dt)) return;
      const want = p.moveInput();
      const ac = 10;
      p.vel.x += want.x * ac * dt; p.vel.z += want.z * ac * dt;
      const hs = Math.hypot(p.vel.x, p.vel.z), cap = Math.max(9.5, hs - 3 * dt);
      if (hs > cap) { p.vel.x *= cap / hs; p.vel.z *= cap / hs; }
      p.vel.y -= G * dt; if (p.vel.y < -55) p.vel.y = -55;
      if (input.pressed('cross') && p.coyote > 0) { p.groundJump(); return; }
      // swinging (hold R2) — auto re-attach while held after a short delay
      p.swingRetry -= dt;
      if (p.canSwingInput() && p.swingRetry <= 0 && (input.pressed('r2') || p.airTime > 0.18)) {
        const h = p.findAnchor();
        if (h) { p.startSwing(h); return; }
        else if (input.pressed('r2')) bus.emit('player:noanchor');
        p.swingRetry = 0.15;
      }
      // free-run in air: wall-run / ledge / climb
      if (p.vel.y < 4 && p.tryLedge()) return;
      if ((p.freerun() || p.speed > 6.5) && p.tryWallRun()) return;
      if (input.move.y > 0.5 && (p.freerun() || p.vel.y < 0) && p.tryClimb()) return;
      // dive / dive-kick feel: holding circle in air falls faster
      if (input.down('circle')) p.vel.y -= 14 * dt;
      const vy = p.vel.y;
      const res = p.physics(dt, {});
      if (res.ground) {
        p.landImpact = clamp(-vy / 25, 0, 1);
        bus.emit('player:land', { impact: p.landImpact, vy });
        if (-vy > 10) p.emitNoise(12);
        // roll landing keeps speed when free-running
        if (-vy > 18 && !p.freerun()) { p.vel.x *= 0.4; p.vel.z *= 0.4; }
        p.fsm.set(p.ride ? 'ride' : 'ground'); return;
      }
      p.pose = p.vel.y < -14 ? 'glide' : 'air';
    },
  },
  slide: {
    enter() { this.targetH = 0.9; this.h = Math.min(this.h, 1.0); const f = this.fwd(); const s = Math.max(this.speed, 9); this.vel.x = f.x * s; this.vel.z = f.z * s; bus.emit('player:slide'); this.emitNoise(5); },
    exit() { if (!this.crouch) this.targetH = 1.8; },
    update(dt) {
      const p = this;
      const decay = Math.exp(-1.6 * dt); p.vel.x *= decay; p.vel.z *= decay; p.vel.y -= G * dt;
      const res = p.physics(dt, { grounded: true });
      p.pose = 'slide';
      if (input.pressed('cross') && p.fsm.time > 0.15) { p.targetH = 1.8; if (p.setCrouch(false) !== false) { p.groundJump(); return; } }
      if (!res.ground) { p.fsm.set('air'); return; }
      if (p.fsm.time > 0.75 || (p.speed < 3 && p.fsm.time > 0.25)) {
        // under something? stay crouched
        p.crouch = true; if (!p.setCrouch(false)) { p.crouch = true; p.targetH = 1.1; }
        p.fsm.set('ground');
      }
    },
  },
  wallrun: {
    enter() { this.wallTime = 0; this.vel.y = Math.max(this.vel.y, 2.5); bus.emit('player:wallrun'); },
    update(dt) {
      const p = this; p.wallTime += dt;
      const n = p.wallN; const t = p._tmp.set(-n.z, 0, n.x);
      if (t.x * p.vel.x + t.z * p.vel.z < 0) t.negate();
      const sp = Math.max(9, Math.hypot(p.vel.x, p.vel.z));
      p.vel.x = t.x * sp - n.x * 1.5; p.vel.z = t.z * sp - n.z * 1.5;
      p.vel.y -= (p.wallTime < 0.6 ? 4 : 14) * dt;
      p.pose = p.wallSide < 0 ? 'wallrunL' : 'wallrunR';
      if (input.pressed('cross')) {
        p.vel.x = t.x * sp * 0.9 + n.x * 7; p.vel.z = t.z * sp * 0.9 + n.z * 7; p.vel.y = 8.5;
        p.wallCooldown = 0.25; p.fsm.set('air'); bus.emit('player:jump'); return;
      }
      if (p.canSwingInput() && input.pressed('r2')) { const h = p.findAnchor(); if (h) { p.startSwing(h); return; } }
      const res = p.physics(dt, {});
      const still = p.probeWall(p._tmp2.set(-n.x, 0, -n.z), 1.0, 1.2);
      if (res.ground) { p.fsm.set('ground'); return; }
      if (!still || p.wallTime > 1.7 || input.pressed('circle')) { p.wallCooldown = 0.35; p.vel.x += n.x * 2; p.vel.z += n.z * 2; p.fsm.set('air'); }
      // turning into the wall = climb
      if (input.move.y > 0.6 && input.down('l1') && Math.abs(p.fwd().dot(n)) > 0.85 && p.tryClimb()) return;
    },
  },
  climb: {
    enter() { this.vel.set(0, 0, 0); this.climbTime = 0; bus.emit('player:climb'); },
    update(dt) {
      const p = this; const n = p.wallN; p.climbTime += dt;
      const t = p._tmp.set(-n.z, 0, n.x); // tangent
      // map stick: up = climb, sideways = shimmy (relative to camera facing the wall)
      const facing = p.fwd().dot(n) < 0 ? 1 : -1;
      const fast = p.freerun() ? 1.45 : 1;
      const up = input.move.y * 4.2 * fast * (facing > 0 ? 1 : 0.6);
      const side = input.move.x * 3.2 * fast;
      const rr = p.right();
      const tsgn = (t.x * rr.x + t.z * rr.z) >= 0 ? 1 : -1;
      p.vel.set(t.x * side * tsgn - n.x * 1.0, up, t.z * side * tsgn - n.z * 1.0);
      p.pose = Math.abs(up) + Math.abs(side) > 0.2 ? 'climb' : 'hang';
      if (input.pressed('cross')) { // wall jump: push off and up
        if (input.move.y > 0.3) { p.vel.set(-n.x * -0.5, 9.5, -n.z * -0.5); }
        else { p.vel.set(n.x * 7, 8, n.z * 7); p.yaw = Math.atan2(-n.x, -n.z); }
        p.wallCooldown = 0.25; p.fsm.set('air'); bus.emit('player:jump'); return;
      }
      if (input.pressed('circle')) { p.vel.set(n.x * 2, 0, n.z * 2); p.fsm.set('air'); return; }
      if (p.canSwingInput() && input.pressed('r2')) { const h = p.findAnchor(); if (h) { p.vel.set(n.x * 4, 4, n.z * 4); p.startSwing(h); return; } }
      p.physics(dt, {});
      // still on wall? check chest + head
      const chest = p.probeWall(p._tmp2.set(-n.x, 0, -n.z), 1.0, 1.0);
      const head = p.probeWall(p._tmp2.set(-n.x, 0, -n.z), 1.75, 1.0);
      if (!head && chest) { if (p.tryLedge()) return; }
      if (!chest && !head) {
        // reached top -> mantle
        const top = p.climbBox ? p.climbBox.max[1] : p.pos.y + 1;
        if (top - p.pos.y < 2.0 && up > 0) {
          p.lerpFrom.copy(p.pos); p.lerpTo.set(p.pos.x - n.x * 0.9, top + 0.02, p.pos.z - n.z * 0.9);
          p.lerpDur = 0.28; p.vaultTop = top + 0.3; p.afterLerp = 'ground'; p.vaultSpeed = 2; p.fsm.set('vault'); bus.emit('player:mantle'); return;
        }
        p.fsm.set('air'); return;
      }
      if (chest && chest.box) p.climbBox = chest.box;
      if (p.contact && p.contact.ground && input.move.y < -0.3) { p.fsm.set('ground'); }
    },
  },
  hang: {
    enter() {
      const n = this.wallN; this.vel.set(0, 0, 0);
      this.pos.set(this.ledgePoint.x + n.x * (this.hw + 0.06), this.ledgeTop - 1.75, this.ledgePoint.z + n.z * (this.hw + 0.06));
      bus.emit('player:grab');
    },
    update(dt) {
      const p = this; const n = p.wallN; p.pose = 'hang';
      if (input.pressed('cross') || (input.move.y > 0.5 && p.fsm.time > 0.18) || (p.freerun() && p.fsm.time > 0.1)) {
        p.lerpFrom.copy(p.pos); p.lerpTo.set(p.ledgePoint.x - n.x * 0.6, p.ledgeTop + 0.02, p.ledgePoint.z - n.z * 0.6);
        p.lerpDur = 0.3; p.vaultTop = p.ledgeTop + 0.35; p.afterLerp = 'ground'; p.vaultSpeed = 2; p.fsm.set('vault'); bus.emit('player:mantle'); return;
      }
      if (input.pressed('circle')) { p.vel.set(n.x * 1.5, -1, n.z * 1.5); p.wallCooldown = 0.4; p.fsm.set('air'); p.airTime = 0.5; return; }
      // shimmy
      if (Math.abs(input.move.x) > 0.3) {
        const t = p._tmp.set(-n.z, 0, n.x); const rr = p.right(); const s = (t.x * rr.x + t.z * rr.z) >= 0 ? 1 : -1;
        const nx = p.pos.x + t.x * s * input.move.x * 2.2 * dt, nz = p.pos.z + t.z * s * input.move.x * 2.2 * dt;
        const chk = p.ray(nx, p.ledgeTop - 0.1, nz, -n.x, 0, -n.z, 0.8);
        if (chk && chk.box) { p.pos.x = nx; p.pos.z = nz; p.ledgePoint.x = chk.point[0]; p.ledgePoint.z = chk.point[2]; }
      }
    },
  },
  vault: {
    enter() { this.lerpT = 0; bus.emit('player:vaultstart'); },
    update(dt) {
      const p = this; p.lerpT += dt / p.lerpDur; const t = Math.min(1, p.lerpT);
      const e = t * t * (3 - 2 * t);
      p.pos.lerpVectors(p.lerpFrom, p.lerpTo, e);
      const arcTop = Math.max(p.vaultTop, p.lerpFrom.y, p.lerpTo.y);
      p.pos.y = lerp(lerp(p.lerpFrom.y, arcTop, Math.min(1, t * 2)), p.lerpTo.y, Math.max(0, t * 2 - 1));
      p.pose = 'crouch';
      if (t >= 1) {
        const f = p.fwd(); const s = p.vaultSpeed || 4;
        p.vel.set(f.x * s, 0, f.z * s);
        p.fsm.set(p.afterLerp === 'ground' ? 'ground' : 'air');
      }
    },
  },
  swing: {
    enter() { this.swingT = 0; this.pose = 'swing'; },
    exit() { this.ropeActive = false; },
    update(dt) {
      const p = this; p.swingT += dt;
      const a = p.anchor;
      // forces: gravity + pump along camera forward (tangent to rope) + steer
      p.vel.y -= G * dt;
      const look = p.lookDir(p._tmp2); const want = p.moveInput();
      const toA = p._tmp.subVectors(a, p.pos); const dist = toA.length(); toA.divideScalar(dist);
      const pump = 15 * Math.max(0.25, input.move.y);
      const fx = look.x * 0.6 + want.x * 0.6, fz = look.z * 0.6 + want.z * 0.6;
      p.vel.x += fx * pump * dt; p.vel.z += fz * pump * dt;
      // reel in for lift when slow, keeps swing satisfying near ground
      if (p.ropeLen > 7) p.ropeLen -= (2.2 + (p.pos.y < 6 ? 4 : 0)) * dt;
      // integrate & constrain
      const res = p.physics(dt, {});
      const d2 = p._tmp.subVectors(p.pos, a); const len = d2.length();
      if (len > p.ropeLen) {
        d2.divideScalar(len);
        p.pos.copy(a).addScaledVector(d2, p.ropeLen);
        const radial = p.vel.dot(d2); if (radial > 0) p.vel.addScaledVector(d2, -radial);
      }
      const sp = p.vel.length(); if (sp > 44) p.vel.multiplyScalar(44 / sp);
      // keep feet out of the street: if close to ground, nudge up
      if (p.pos.y < 1.5 && p.vel.y < 0) p.vel.y *= 0.9;
      p.pose = 'swing';
      const passed = p.pos.y > a.y - 1.5 || (p.swingT > 0.4 && toA.y < 0.15);
      if (input.pressed('cross')) { // swing jump
        const v = p.vel; v.y = Math.max(v.y, 0) + 9; const hs = Math.hypot(v.x, v.z) || 1; v.x += v.x / hs * 3; v.z += v.z / hs * 3;
        p.swingRetry = 0.35; p.fsm.set('air'); bus.emit('player:release', { jump: true }); return;
      }
      if (!input.down('r2') || passed || p.swingT > 4.5) {
        if (p.vel.y > -6) p.vel.y += 3.5;
        const hs = Math.hypot(p.vel.x, p.vel.z) || 1; p.vel.x += p.vel.x / hs * 1.5; p.vel.z += p.vel.z / hs * 1.5;
        p.swingRetry = passed ? 0.12 : 0.05; p.fsm.set('air'); bus.emit('player:release', { jump: false }); return;
      }
      if (res.ground && p.vel.y <= 0.1 && p.swingT > 0.2) { p.fsm.set('ground'); return; }
      if (res.wallX || res.wallZ) { if (p.tryWallRun() || p.tryClimb()) return; }
    },
  },
  zip: {
    enter() { this.zipT = 0; this.ropeActive = true; this.anchor.copy(this.zipTarget); if (this.ride) this.dismount(); },
    exit() { this.ropeActive = false; },
    update(dt) {
      const p = this; p.zipT += dt;
      const to = p._tmp.subVectors(p.zipTarget, p.pos); const d = to.length();
      p.pose = 'zip';
      if (d < 1.2 || p.zipT > 3) {
        // point launch: arrive with a hop; Cross held/pressed = launch
        const f = p.fwd();
        p.vel.set(f.x * 6, input.down('cross') ? 14 : 6.5, f.z * 6); p.pos.y = Math.max(p.pos.y, p.zipTarget.y - 0.2);
        p.fsm.set('air'); bus.emit('player:ziparrive'); return;
      }
      to.divideScalar(d); const s = Math.min(34, 10 + p.zipT * 60);
      p.vel.copy(to).multiplyScalar(s);
      const res = p.physics(dt, {});
      if ((res.wallX || res.wallZ || res.ceiling) && p.zipT > 0.2) { p.fsm.set('air'); }
    },
  },
  ride: {
    enter() { this.ground = true; },
    update(dt) {
      const p = this; const R = RIDES[p.ride] || RIDES.skateboard;
      const f = p.fwd(); const want = p.moveInput();
      // momentum-based: accelerate toward look direction scaled by stick
      const thr = clamp(input.move.y, -1, 1);
      const hs = Math.hypot(p.vel.x, p.vel.z);
      let dirx = hs > 0.5 ? p.vel.x / hs : f.x, dirz = hs > 0.5 ? p.vel.z / hs : f.z;
      // steer velocity toward camera forward (+ stick x)
      const tgt = Math.atan2(-(f.x + want.x * 0.3), -(f.z + want.z * 0.3));
      const cur = Math.atan2(-dirx, -dirz);
      const na = cur + wrapAngle(tgt - cur) * Math.min(1, R.turn * 4 * dt);
      dirx = -Math.sin(na); dirz = -Math.cos(na);
      let s = hs + (thr > 0 ? thr * R.accel : thr * R.accel * 1.8) * dt - R.friction * dt;
      s = clamp(s, 0, R.max);
      p.vel.x = dirx * s; p.vel.z = dirz * s; p.vel.y -= G * dt;
      if (input.pressed('cross')) { p.vel.y = R.jump; bus.emit('player:jump'); }
      if (input.pressed('down')) { p.cycleRide(); if (!p.ride) return; }
      if (input.pressed('circle')) { p.dismount(); p.rideIdx = 0; p.fsm.set('ground'); return; }
      if (p.canSwingInput() && input.pressed('r2')) { p.dismount(); p.rideIdx = 0; p.groundJump(); return; }
      const res = p.physics(dt, { grounded: p.vel.y <= 0, stepH: 0.3 });
      p.ground = res.ground;
      if ((res.wallX || res.wallZ) && s > 10) { p.dismount(); p.rideIdx = 0; p.vel.set(-dirx * 3, 4, -dirz * 3); bus.emit('player:bail'); p.fsm.set('air'); return; }
      p.pose = R.pose; p.rideSpeed = s;
      if (res.ground && s > 0.5) bus.emit('player:rolling', s);
    },
  },
  locked: {
    enter() { this.vel.x = 0; this.vel.z = 0; },
    update(dt) {
      const p = this; p.lockTimer -= dt; p.pose = p.lockPose === 'dialogue' ? 'idle' : p.lockPose;
      p.vel.y -= G * dt; p.physics(dt, { grounded: true });
      if (p.lockTimer <= 0 && p.lockPose !== 'dialogue') p.fsm.set(p.ride ? 'ride' : 'ground');
    },
  },
};
function approach(v, t, d) { return v < t ? Math.min(t, v + d) : Math.max(t, v - d); }
export { RIDES };
