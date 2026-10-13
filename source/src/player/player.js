// Player controller: state machine for ground / air / slide / wallrun / climb / hang / vault /
// swing / zip / ride / locked. Free-running is context-automatic while L1 (free-run) is held.
import * as THREE from 'three';
import { FSM } from '../core/fsm.js';
import { moveBody } from '../world/collision.js';
import { clamp, damp, lerp, wrapAngle } from '../core/util.js';
import { bus } from '../core/events.js';
import { input } from '../ui/input.js';
import { TRICK_LIST } from '../render/rig.js';

const UP = new THREE.Vector3(0, 1, 0);
const _eye = new THREE.Vector3(), _look = new THREE.Vector3(), _tmpA = new THREE.Vector3(), _tmpB = new THREE.Vector3(), _tmpC = new THREE.Vector3();
const YAW_FAN = [0, 0.3, -0.3, 0.6, -0.6, 0.95, -0.95, 1.3, -1.3];
const ELEV_FAN = [0.62, 0.8, 0.98, 1.15];
const anchorFilter = (b) => !b.trigger && !b.curb && !b.rail && !b.invisible;
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
    this.trick = null; this.style = 0; this.combo = 0; this.swingSide = 1; this.ropeTarget = 0; this.swingChain = 0; this.swingPhase = 0;
    this.groundTrick = null; this.ropeShootT = 1; this.anchorNormal = new THREE.Vector3(0, 1, 0); this.wallUp = false;
    this.stats = { swingPower: 1, zipRange: 55, maxHealth: 100, armor: 0 }; // filled from upgrades by Game.applyUpgrades
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
    amount *= 1 - (this.stats.armor || 0) - (this.game.buffArmor ? this.game.buffArmor() : 0);
    this.health -= amount; this.lastHurt = this.game.time;
    if (this.trick) { this.trick = null; this.style = 0; this.combo = 0; }
    bus.emit('player:hurt', { amount, from });
    if (this.health <= 0) { this.health = 0; bus.emit('player:dead'); }
  }
  lock(t, pose = 'idle') { this.lockTimer = t; this.lockDur = t; this.lockPose = pose; if (!this.fsm.is('locked')) this.fsm.set('locked'); }
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
    if (this.health < this.maxHealth && this.game.time - this.lastHurt > 4) this.health = Math.min(this.maxHealth, this.health + 8 * (this.stats.regen || 1) * dt);
    // safe-spot tracking for respawns (water / pits)
    this.safeTimer += dt;
    if (this.ground && this.safeTimer > 1 && !this.inLake() && this.pos.y > this.world.collision.floorFn(this.pos.x, this.pos.z) + -0.5) { this.lastSafe.copy(this.pos); this.safeTimer = 0; }
    // water / void check
    const floorY = this.world.collision.floorFn(this.pos.x, this.pos.z);
    if (floorY < -1 && this.pos.y <= floorY + 0.3 && !this.world.data.interior) { bus.emit('player:splash'); this.respawnSafe(); }
    if (this.pos.y < 0.8 && this.inLake()) { bus.emit('player:splash'); this.respawnSafe(); }
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
  emitNoise(radius) { bus.emit('noise', { pos: this.pos.clone(), radius: radius * (1 - (this.stats.quiet || 0)), source: 'player' }); }
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
  // Swing anchors: aim for a point ahead & above (like the big Spidey games), fan rays around it and
  // pick the building hit closest to that ideal. Low hits, floors, curbs and things behind us are rejected.
  findAnchor() {
    const eye = this.eye(_eye); const look = this.lookDir(_look);
    const hv = Math.hypot(this.vel.x, this.vel.z);
    let fx = look.x, fz = look.z;
    if (hv > 4) { const w = Math.min(0.7, hv / 25); fx = fx * (1 - w) + this.vel.x / hv * w; fz = fz * (1 - w) + this.vel.z / hv * w; }
    const fl = Math.hypot(fx, fz) || 1; fx /= fl; fz /= fl;
    const wantAhead = 14 + Math.min(hv, 32) * 0.45, wantUp = clamp(13 + hv * 0.3, 11, 26);
    let best = null, bestScore = -1e9;
    for (const yo of YAW_FAN) for (const e of ELEV_FAN) {
      const c = Math.cos(yo), sn = Math.sin(yo);
      const hx = fx * c - fz * sn, hz = fx * sn + fz * c;
      const ce = Math.cos(e), se = Math.sin(e);
      const h = this.ray(eye.x, eye.y, eye.z, hx * ce, se, hz * ce, 90, anchorFilter);
      if (!h || h.floor || !h.box) continue;
      const up = h.point[1] - this.pos.y;
      if (up < (this.pos.y < 4 ? 3 : 4.5)) continue;
      const ahead = (h.point[0] - eye.x) * fx + (h.point[2] - eye.z) * fz;
      if (ahead < 2.5) continue;
      const roofEdge = h.box.max[1] - h.point[1] < 3 ? 0.35 : 0;
      const score = -Math.abs(ahead - wantAhead) * 0.07 - Math.abs(up - wantUp) * 0.05 - Math.abs(yo) * 0.45 + roofEdge + (Math.abs(yo) > 0.2 ? 0.15 : 0);
      if (score > bestScore) { bestScore = score; best = h; }
    }
    return best;
  }
  startSwing(h) {
    this.anchor.set(h.point[0], Math.min(h.point[1], h.box ? h.box.max[1] : h.point[1]), h.point[2]);
    if (h.normal) this.anchorNormal.set(h.normal[0], h.normal[1], h.normal[2]);
    const d = this.anchor.distanceTo(this.pos);
    // ground under the bottom of the arc → never drag through the street
    const g = this.ray(this.anchor.x + this.anchorNormal.x * 0.6, this.anchor.y - 0.5, this.anchor.z + this.anchorNormal.z * 0.6, 0, -1, 0, 200, anchorFilter);
    this.arcFloor = g ? g.point[1] : 0;
    const maxLen = Math.max(6, this.anchor.y - this.arcFloor - 2.6);
    this.ropeLen = d; this.ropeTarget = clamp(d * 0.93, 6, maxLen);
    const r = this.right(); this.swingSide = ((this.anchor.x - this.pos.x) * r.x + (this.anchor.z - this.pos.z) * r.z) < 0 ? -1 : 1;
    // slow / low starts get a yank so a swing from the sidewalk still feels heroic
    const sp = this.vel.length();
    if (sp < 12) { const to = _tmpA.subVectors(this.anchor, this.pos).normalize(); this.vel.addScaledVector(to, 7 - sp * 0.3); this.vel.y += 2.5; }
    this.ropeActive = true; this.ropeShootT = 0;
    if (this.ride) this.dismount();
    this.fsm.set('swing');
    this.addStyle(25, null);
    bus.emit('player:thwip', { anchor: this.anchor.clone(), side: this.swingSide });
  }
  // ---- style & tricks
  addStyle(n, label) { this.style += Math.round(n * (1 + this.combo * 0.25)); if (label) { this.combo++; bus.emit('player:style', { label, style: this.style, combo: this.combo }); } }
  startTrick(type) {
    const def = TRICK_LIST[type]; if (!def) return false;
    this.trick = { type, t: 0, dur: def.dur, k: 0 };
    this.addStyle(type === 'doubleflip' ? 220 : 120, type);
    bus.emit('player:trick', { type });
    return true;
  }
  pickTrick() {
    const x = input.move.x, y = input.move.y;
    if (y > 0.55) return this.trick && this.trick.type === 'frontflip' ? 'doubleflip' : 'frontflip';
    if (y < -0.55) return 'backflip';
    if (x > 0.55) return 'corkscrew';
    if (x < -0.55) return 'sidespin';
    return ['superman', 'starfish', 'twist'][(Math.random() * 3) | 0];
  }
  updateTrick(dt) {
    const tr = this.trick || this.groundTrick; if (!tr) return;
    tr.t += dt; tr.k = tr.t / tr.dur;
    if (tr.k >= 1) { if (this.trick === tr) this.trick = null; else this.groundTrick = null; }
  }
  cashStyle(clean) {
    if (this.style <= 0) { this.combo = 0; return; }
    if (clean) {
      const parts = this.style >= 120 ? Math.max(1, Math.floor(this.style / 220)) : 0;
      bus.emit('player:stylecash', { style: this.style, combo: this.combo, parts });
    } else bus.emit('player:bailstyle', { style: this.style });
    this.style = 0; this.combo = 0;
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
      if (this._zipScan <= 0) { this._zipScan = 0.1; this.aimZipPoint = this.world.findZipPoint(this.eye(_eye), this.lookDir(_look), this.stats.zipRange); }
    } else this.aimZipPoint = null;
    if (this.aimZipPoint && input.pressed('r2')) { input.consume('r2'); this.zipTarget = this.aimZipPoint.clone(); this.fsm.set('zip'); bus.emit('player:zip', { target: this.zipTarget }); return true; }
    return false;
  }
  inLake() { const L = this.world.data && this.world.data.lakes; if (!L) return false; for (const l of L) if (this.pos.x > l.x0 - 1.5 && this.pos.x < l.x1 + 1.5 && this.pos.z > l.z0 - 1.5 && this.pos.z < l.z1 + 1.5) return true; return false; }
  heightAboveGround() { const h = this.ray(this.pos.x, this.pos.y + 0.1, this.pos.z, 0, -1, 0, 60, anchorFilter); return h ? h.t : 60; }
  canSwingInput() { return this.abilities.swing && input.down('r2') && !input.down('l2'); }
}

// ---------------------------------------------------------------- states
const STATES = {
  ground: {
    enter() { this.ground = true; this.airTime = 0; this.swingChain = 0; },
    update(dt) {
      const p = this;
      p.updateTrick(dt);
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
      p.pose = p.crouch ? 'crouch' : p.speed > 8.4 ? 'sprint' : p.speed > 5 ? 'run' : p.speed > 0.4 ? 'walk' : 'idle';
    },
  },
  air: {
    enter(prev) { this.ground = false; if (prev !== 'swing' && prev !== 'wallrun' && prev !== 'zip') this.swingRetry = 0; },
    update(dt) {
      const p = this;
      p.airTime += dt; p.coyote -= dt;
      p.updateTrick(dt);
      if (p.aimZip(dt)) return;
      const want = p.moveInput();
      const ac = 10;
      p.vel.x += want.x * ac * dt; p.vel.z += want.z * ac * dt;
      const hs = Math.hypot(p.vel.x, p.vel.z), cap = Math.max(9.5, hs - 3 * dt);
      if (hs > cap) { p.vel.x *= cap / hs; p.vel.z *= cap / hs; }
      p.vel.y -= G * dt; if (p.vel.y < -55) p.vel.y = -55;
      if (input.pressed('cross')) {
        if (p.coyote > 0) { p.groundJump(); return; }
        // air tricks: stick direction picks the move, chain them before you land
        if (p.airTime > 0.1 && (!p.trick || p.trick.k > 0.7) && p.heightAboveGround() > 2.5) p.startTrick(p.pickTrick());
      }
      // swinging (hold R2) — auto re-attach while held after a short delay
      p.swingRetry -= dt;
      if (p.canSwingInput() && p.swingRetry <= 0 && (input.pressed('r2') || p.airTime > 0.16)) {
        const h = p.findAnchor();
        if (h) { p.trick = null; p.startSwing(h); return; }
        else if (input.pressed('r2')) bus.emit('player:noanchor');
        p.swingRetry = 0.15;
      }
      // free-run in air: wall-run / ledge / climb
      if (!p.trick) {
        if (p.vel.y < 4 && p.tryLedge()) return;
        if ((p.freerun() || p.speed > 6.5) && p.tryWallRun()) return;
        if (input.move.y > 0.5 && (p.freerun() || p.vel.y < 0) && p.tryClimb()) return;
      }
      // dive: hold circle to drop head-first
      const diving = input.down('circle') && p.vel.y < 0;
      if (diving) p.vel.y -= 16 * dt;
      const vy = p.vel.y;
      const res = p.physics(dt, {});
      if (res.ground) {
        const hsp = Math.hypot(p.vel.x, p.vel.z);
        p.landImpact = clamp(-vy / 25, 0, 1);
        const bailed = p.trick && p.trick.k < 0.82;
        if (bailed) {
          p.trick = null; p.cashStyle(false); p.vel.x *= 0.2; p.vel.z *= 0.2; p.lock(0.6, 'stunned'); bus.emit('player:bail');
          bus.emit('player:land', { impact: p.landImpact, vy }); return;
        }
        p.trick = null; p.cashStyle(true);
        bus.emit('player:land', { impact: p.landImpact, vy });
        if (-vy > 10) p.emitNoise(12);
        if (-vy > 13 && hsp > 5.5) { p.groundTrick = { type: 'roll', t: 0, dur: 0.45, k: 0 }; bus.emit('player:roll'); }
        else if (-vy > 18 && !p.freerun()) { p.vel.x *= 0.45; p.vel.z *= 0.45; p.landSquash = true; }
        p.fsm.set(p.ride ? 'ride' : 'ground'); return;
      }
      const fallSpeed = -p.vel.y;
      p.pose = diving ? 'dive' : fallSpeed > 17 ? 'skydive' : fallSpeed > 5 && p.airTime > 0.5 ? 'fall' : 'jump';
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
      const fast = p.freerun() ? 2.1 : 1;
      p.wallUp = p.freerun() && input.move.y > 0.5;
      const up = input.move.y * 4.2 * fast * (facing > 0 ? 1 : 0.6);
      const side = input.move.x * 3.2 * fast;
      const rr = p.right();
      const tsgn = (t.x * rr.x + t.z * rr.z) >= 0 ? 1 : -1;
      p.vel.set(t.x * side * tsgn - n.x * 1.0, up, t.z * side * tsgn - n.z * 1.0);
      p.pose = p.wallUp ? 'wallup' : Math.abs(up) + Math.abs(side) > 0.2 ? 'climb' : 'hang';
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
      const p = this; p.swingT += dt; p.ropeShootT += dt;
      p.updateTrick(dt);
      const a = p.anchor, power = p.stats.swingPower * (1 + Math.min(p.swingChain, 6) * 0.03);
      p.vel.y -= G * dt;
      const toA = _tmpA.subVectors(a, p.pos); const dist = toA.length(); toA.divideScalar(dist);
      // tangential direction of travel (perpendicular to rope)
      const tan = _tmpB.copy(p.vel).addScaledVector(toA, -p.vel.dot(toA));
      const tl = tan.length(); if (tl > 0.5) tan.divideScalar(tl); else tan.copy(p.fwd());
      const bottom = clamp(toA.y, 0, 1);                       // 1 = hanging straight down
      const pushing = input.move.y > -0.3 ? 1 : 0.3;
      const pump = (9 + 14 * bottom * bottom) * power * pushing;
      p.vel.addScaledVector(tan, pump * dt);
      // steer: stick sideways + camera look pull the arc around corners
      const look = p.lookDir(_look); const r = p.right();
      p.vel.x += (r.x * input.move.x * 10 + look.x * 5) * dt; p.vel.z += (r.z * input.move.x * 10 + look.z * 5) * dt;
      // reel toward the ground-safe length (smooth, no snapping)
      if (p.ropeLen > p.ropeTarget) p.ropeLen = Math.max(p.ropeTarget, p.ropeLen - 24 * dt);
      const lowest = a.y - p.ropeLen; if (lowest < p.arcFloor + 2.2) p.ropeLen = Math.max(5, a.y - p.arcFloor - 2.2);
      const res = p.physics(dt, {});
      const d2 = _tmpC.subVectors(p.pos, a); const len = d2.length();
      if (len > p.ropeLen) {
        d2.divideScalar(len);
        p.pos.copy(a).addScaledVector(d2, p.ropeLen);
        const radial = p.vel.dot(d2); if (radial > 0) p.vel.addScaledVector(d2, -radial);
      }
      const sp = p.vel.length(), cap = 46 * power; if (sp > cap) p.vel.multiplyScalar(cap / sp);
      p.swingPhase = clamp(p.vel.y / Math.max(6, sp), -1, 1);
      p.pose = 'swing';
      const passed = p.pos.y > a.y - 1.2 || (p.swingT > 0.45 && toA.y < 0.1);
      if (input.pressed('cross')) { // swing-jump: big launch + automatic flip
        const v = p.vel; v.y = Math.max(v.y, 0) + 10; const hs = Math.hypot(v.x, v.z) || 1; v.x += v.x / hs * 4; v.z += v.z / hs * 4;
        p.swingRetry = 0.35; p.swingChain++; p.fsm.set('air'); bus.emit('player:release', { jump: true });
        p.addStyle(80, null); if (sp > 12) p.startTrick(input.move.y < -0.5 ? 'backflip' : 'frontflip');
        return;
      }
      if (!input.down('r2') || passed || p.swingT > 4.5) {
        // release timing: letting go while rising at ~15–50° gives a PERFECT boost
        const rise = p.vel.y / Math.max(1, sp);
        const perfect = !passed && rise > 0.22 && rise < 0.78 && sp > 10;
        const hs = Math.hypot(p.vel.x, p.vel.z) || 1;
        if (perfect) { p.vel.x += p.vel.x / hs * 5; p.vel.z += p.vel.z / hs * 5; p.vel.y += 4; p.swingChain++; p.addStyle(150, null); bus.emit('player:perfect'); }
        else { if (p.vel.y > -6) p.vel.y += 3; p.vel.x += p.vel.x / hs * 1.5; p.vel.z += p.vel.z / hs * 1.5; }
        p.swingRetry = passed ? 0.12 : 0.05; p.fsm.set('air'); bus.emit('player:release', { jump: false, perfect }); return;
      }
      if (res.ground && p.vel.y <= 0.1 && p.swingT > 0.2) { p.swingChain = 0; p.fsm.set('ground'); return; }
      if (res.wallX || res.wallZ) { if (p.tryWallRun() || p.tryClimb()) return; }
    },
  },
  zip: {
    enter() { this.zipT = 0; this.ropeActive = true; this.ropeShootT = 0; this.trick = null; this.anchor.copy(this.zipTarget); this.ropeLen = this.anchor.distanceTo(this.pos); this.swingSide = 1; if (this.ride) this.dismount(); },
    exit() { this.ropeActive = false; },
    update(dt) {
      const p = this; p.zipT += dt;
      const to = p._tmp.subVectors(p.zipTarget, p.pos); const d = to.length();
      p.pose = 'zip'; p.ropeShootT += dt;
      if (d < 1.2 || p.zipT > 3) {
        // point launch: arrive with a hop; Cross held/pressed = launch
        const f = p.fwd();
        const launch = input.down('cross');
        p.vel.set(f.x * (launch ? 9 : 6), launch ? 15 : 6.5, f.z * (launch ? 9 : 6)); p.pos.y = Math.max(p.pos.y, p.zipTarget.y - 0.2);
        p.fsm.set('air'); bus.emit('player:ziparrive'); if (launch) { p.addStyle(100, null); p.startTrick('frontflip'); } return;
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
      const p = this; p.lockTimer -= dt; p.pose = p.lockPose === 'dialogue' ? 'idle' : p.lockPose; p.updateTrick(dt);
      p.vel.y -= G * dt; p.physics(dt, { grounded: true });
      if (p.lockTimer <= 0 && p.lockPose !== 'dialogue') p.fsm.set(p.ride ? 'ride' : 'ground');
    },
  },
};
function approach(v, t, d) { return v < t ? Math.min(t, v + d) : Math.max(t, v - d); }
export { RIDES };
