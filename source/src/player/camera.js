// Camera rig: first-person (default), third-person chase, left/right over-the-shoulder.
// Includes damped head-bob, crouch/slide height easing, wall-run roll, speed FOV kick, camera collision.
import * as THREE from 'three';
import { damp, clamp } from '../core/util.js';

export const CAMERA_MODES = ['fp', 'tp', 'shoulderR', 'shoulderL'];
const MODE_CFG = {
  tp: { dist: 4.4, side: 0, up: 0.45 },
  shoulderR: { dist: 2.6, side: 0.75, up: 0.25 },
  shoulderL: { dist: 2.6, side: -0.75, up: 0.25 },
};

export class CameraRig {
  constructor(camera, settings) {
    this.cam = camera; this.settings = settings;
    this.mode = settings.camera || 'fp';
    this.bob = 0; this.bobAmt = 0; this.roll = 0; this.fovKick = 0; this.landDip = 0; this.shake = 0;
    this.curDist = 4; this.eyeY = 1.62; this._v = new THREE.Vector3(); this._e = new THREE.Vector3();
  }
  cycle() { const i = CAMERA_MODES.indexOf(this.mode); this.mode = CAMERA_MODES[(i + 1) % CAMERA_MODES.length]; this.settings.camera = this.mode; return this.mode; }
  addShake(a) { this.shake = Math.min(1, this.shake + a); }
  update(dt, p, world) {
    const fp = this.mode === 'fp';
    // head bob (damped, scaled by setting); none while airborne/swinging
    const moving = p.fsm.is('ground') && p.speed > 0.6;
    this.bobAmt = damp(this.bobAmt, moving ? Math.min(1, p.speed / 7) : 0, 8, dt);
    this.bob += dt * (6 + p.speed * 0.9);
    const hb = this.settings.headBob ?? 0.5;
    const bobY = Math.abs(Math.sin(this.bob)) * 0.06 * this.bobAmt * hb;
    const bobX = Math.cos(this.bob) * 0.03 * this.bobAmt * hb;
    // land dip
    if (p.landImpact > 0) { this.landDip = Math.max(this.landDip, p.landImpact * 0.35); p.landImpact = 0; }
    this.landDip = damp(this.landDip, 0, 9, dt);
    // roll for wallrun + slight lean on strafe
    let tr = 0;
    if (p.fsm.is('wallrun')) tr = p.wallSide * 0.18;
    else if (p.fsm.is('swing')) tr = clamp(-p.vel.dot(p.right()) * 0.006, -0.12, 0.12);
    this.roll = damp(this.roll, tr, 7, dt);
    // FOV kick with speed
    const sp = p.vel.length();
    this.fovKick = damp(this.fovKick, clamp((sp - 8) * 0.7, 0, 16), 4, dt);
    // settings.fov is HORIZONTAL fov, so portrait and landscape frame the world the same way
    const hfov = (this.settings.fov || 90) + this.fovKick - (p.game.combat && p.game.combat.aiming ? 22 : 0);
    const fov = clamp(2 * Math.atan(Math.tan(hfov * Math.PI / 360) / this.cam.aspect) * 180 / Math.PI, 40, 100);
    if (Math.abs(this.cam.fov - fov) > 0.05) { this.cam.fov = fov; this.cam.updateProjectionMatrix(); }
    this.eyeY = damp(this.eyeY, p.eyeHeight, 16, dt);
    const shake = this.shake; this.shake = damp(this.shake, 0, 6, dt);
    const sx = (Math.random() - 0.5) * shake * 0.15, sy = (Math.random() - 0.5) * shake * 0.15;
    const eye = this._e.set(p.pos.x + bobX * Math.cos(p.yaw), p.pos.y + this.eyeY - bobY - this.landDip, p.pos.z - bobX * Math.sin(p.yaw));
    this.cam.rotation.order = 'YXZ';
    this.cam.rotation.set(p.pitch + sy, p.yaw + sx, this.roll);
    if (fp) { this.cam.position.copy(eye); return; }
    const cfg = MODE_CFG[this.mode];
    const back = this._v.set(0, 0, 1).applyEuler(this.cam.rotation);
    const right = new THREE.Vector3(1, 0, 0).applyEuler(this.cam.rotation);
    const pivot = eye.clone(); pivot.y += cfg.up;
    const want = pivot.clone().addScaledVector(right, cfg.side).addScaledVector(back, cfg.dist);
    // collision pull-in
    const dir = want.clone().sub(pivot); const len = dir.length(); dir.divideScalar(len);
    const h = world.collision.raycast(pivot.x, pivot.y, pivot.z, dir.x, dir.y, dir.z, len, (b) => !b.trigger && !b.seeThrough);
    const d = h ? Math.max(0.4, h.t - 0.3) : len;
    this.curDist = d < this.curDist ? d : damp(this.curDist, d, 6, dt);
    this.cam.position.copy(pivot).addScaledVector(dir, this.curDist);
  }
}
