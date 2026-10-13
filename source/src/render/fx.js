// Pooled particle bursts (one InstancedMesh) + ground warning rings + waypoint beacons.
import * as THREE from 'three';
import { comicMaterial } from './materials.js';
import { GeoBuilder, C } from './geo.js';

const MAX = 160;
export class FX {
  constructor(scene) {
    const b = new GeoBuilder(); b.cbox(0, 0, 0, 0.18, 0.18, 0.18, C('#ffffff'));
    this.mesh = new THREE.InstancedMesh(b.build(), comicMaterial({ atlas: false, emissive: 1 }), MAX);
    this.mesh.frustumCulled = false; this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.p = []; for (let i = 0; i < MAX; i++) { this.p.push({ pos: new THREE.Vector3(), vel: new THREE.Vector3(), life: 0, max: 1, s: 1 }); this.mesh.setColorAt(i, new THREE.Color(1, 1, 1)); }
    this.next = 0; this._m = new THREE.Matrix4(); this._q = new THREE.Quaternion(); this._s = new THREE.Vector3(); this._c = new THREE.Color();
    scene.add(this.mesh);
    // rings
    const rg = new THREE.RingGeometry(0.85, 1, 24); rg.rotateX(-Math.PI / 2);
    this.ringMat = new THREE.MeshBasicMaterial({ color: 0xff3b3b, transparent: true, opacity: 0.7, depthWrite: false });
    this.rings = []; for (let i = 0; i < 8; i++) { const m = new THREE.Mesh(rg, this.ringMat); m.visible = false; scene.add(m); this.rings.push({ m, t: 0, dur: 1 }); }
    // waypoint beacon (tall column of light)
    const bg = new THREE.CylinderGeometry(0.5, 0.5, 60, 6, 1, true); bg.translate(0, 30, 0);
    this.beacon = new THREE.Mesh(bg, new THREE.MeshBasicMaterial({ color: 0xffe066, transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide }));
    this.beacon.visible = false; this.beacon.frustumCulled = false; scene.add(this.beacon);
    this.collect = [];
  }
  burst(pos, col, n = 10, speed = 6) {
    this._c.set(col);
    for (let i = 0; i < n; i++) {
      const k = this.next; this.next = (this.next + 1) % MAX; const q = this.p[k];
      q.pos.copy(pos); q.vel.set((Math.random() - 0.5) * speed, Math.random() * speed, (Math.random() - 0.5) * speed);
      q.life = q.max = 0.4 + Math.random() * 0.5; q.s = 0.6 + Math.random() * 0.9;
      this.mesh.setColorAt(k, this._c);
    }
    this.mesh.instanceColor.needsUpdate = true;
  }
  marker(pos, dur, radius) {
    const r = this.rings.find((x) => !x.m.visible) || this.rings[0];
    r.m.position.set(pos.x, pos.y + 0.05, pos.z); r.m.scale.setScalar(radius); r.m.visible = true; r.t = 0; r.dur = dur;
  }
  setBeacon(pos) { if (!pos) { this.beacon.visible = false; return; } this.beacon.visible = true; this.beacon.position.copy(pos); }
  update(dt) {
    for (let i = 0; i < MAX; i++) {
      const q = this.p[i];
      if (q.life > 0) { q.life -= dt; q.vel.y -= 14 * dt; q.pos.addScaledVector(q.vel, dt); const s = Math.max(0.001, q.life / q.max) * q.s; this._s.set(s, s, s); }
      else this._s.set(0.0001, 0.0001, 0.0001);
      this._m.compose(q.pos, this._q, this._s); this.mesh.setMatrixAt(i, this._m);
    }
    this.mesh.instanceMatrix.needsUpdate = true;
    for (const r of this.rings) if (r.m.visible) { r.t += dt; const k = r.t / r.dur; r.m.material.opacity = 0.35 + 0.4 * Math.abs(Math.sin(r.t * 12)); if (k >= 1) r.m.visible = false; }
    if (this.beacon.visible) this.beacon.rotation.y += dt;
  }
}
