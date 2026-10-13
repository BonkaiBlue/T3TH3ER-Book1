// World: owns the scene graph for the current city/level, collision, chunk culling,
// sky/palette, ambient traffic + pedestrians (instanced), fire hazards, collectibles.
import * as THREE from 'three';
import { CollisionWorld } from './collision.js';
import { comicMaterial, shared } from '../render/materials.js';
import { GeoBuilder, C } from '../render/geo.js';
import { generateCity } from './citygen.js';
import { generateFacility } from './facility.js';
import { rng, clamp } from '../core/util.js';
import { Props } from '../render/models.js';

export class World {
  constructor(renderer) {
    this.r = renderer;
    this.scene = new THREE.Scene();
    this.collision = new CollisionWorld();
    this.mat = comicMaterial();
    this.statics = [];
    this.data = null;
    this.dynamic = new THREE.Group(); this.scene.add(this.dynamic);
    this.time = 0;
    this._frustum = new THREE.Frustum(); this._pm = new THREE.Matrix4();
  }
  clear() {
    for (const m of this.statics) { this.scene.remove(m); m.geometry.dispose(); }
    this.statics.length = 0;
    this.collision.clear();
    if (this.traffic) { this.scene.remove(this.traffic.mesh); this.traffic.mesh.geometry.dispose(); this.traffic = null; }
    if (this.peds) { this.scene.remove(this.peds.mesh); this.peds.mesh.geometry.dispose(); this.peds = null; }
    if (this.fire) { this.scene.remove(this.fire.mesh); this.fire = null; }
    if (this.sky) { this.scene.remove(this.sky); this.sky = null; }
    while (this.dynamic.children.length) this.dynamic.remove(this.dynamic.children[0]);
    this.data = null;
  }
  addStatic(geo, kind, meta) {
    const m = new THREE.Mesh(geo, this.mat); m.matrixAutoUpdate = false; m.updateMatrix();
    m.userData.kind = kind; m.userData.meta = meta;
    this.scene.add(m); this.statics.push(m);
    return m;
  }
  // Streamed generation: returns iterator of progress 0..1
  *load(def, palette) {
    this.clear();
    this.def = def;
    this.applyPalette(palette);
    const gen = def.kind === 'facility' ? generateFacility(def, this) : generateCity(def, this);
    for (const p of gen) yield p * 0.85;
    this._buildSky(palette);
    if (!this.data.interior) { this._buildTraffic(def); this._buildPeds(def); }
    this._buildFire();
    yield 1;
  }
  applyPalette(p) {
    this.palette = p;
    shared.sunDir.value.set(...(p.sunDir || [-0.5, 0.75, 0.35])).normalize();
    shared.sunColor.value.set(p.sun); shared.skyColor.value.set(p.sky); shared.groundColor.value.set(p.ground);
    shared.fogColor.value.set(p.fog); shared.fogNear.value = p.fogNear ?? 70; shared.fogFar.value = p.fogFar ?? 280;
    this.scene.background = new THREE.Color(p.fog);
  }
  _buildSky(p) {
    const geo = new THREE.SphereGeometry(400, 16, 10);
    const mat = new THREE.ShaderMaterial({
      uniforms: { top: { value: new THREE.Color(p.skyTop) }, mid: { value: new THREE.Color(p.skyMid) }, bot: { value: new THREE.Color(p.fog) },
        sunDir: shared.sunDir, sunCol: { value: new THREE.Color(p.sunDisc || '#ffd35a') }, sunSize: { value: p.sunSize ?? 0.06 } },
      vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position,1.0); gl_Position = p.xyww; }',
      fragmentShader: `uniform vec3 top; uniform vec3 mid; uniform vec3 bot; uniform vec3 sunDir; uniform vec3 sunCol; uniform float sunSize; varying vec3 vD;
        void main(){ float h = vD.y; vec3 c = h > 0.08 ? mix(mid, top, smoothstep(0.08, 0.6, h)) : mix(bot, mid, smoothstep(-0.05, 0.08, h));
        vec3 sd = normalize(vec3(sunDir.x, 0.06, sunDir.z)); float s = dot(normalize(vD), sd);
        if (s > 1.0 - sunSize * 0.5) c = sunCol; else if (s > 1.0 - sunSize) c = mix(c, sunCol, 0.35);
        gl_FragColor = vec4(c, 1.0); }`,
      side: THREE.BackSide, depthWrite: false,
    });
    this.sky = new THREE.Mesh(geo, mat); this.sky.renderOrder = -1; this.sky.frustumCulled = false;
    this.scene.add(this.sky);
    // flat comic clouds
    if (!this.data.interior) {
      const b = new GeoBuilder(); const R = rng(7); const cc = C(p.cloud || '#f7deaa');
      for (let i = 0; i < 26; i++) {
        const a = R.range(0, Math.PI * 2), d = R.range(250, 340), y = R.range(55, 110), w = R.range(18, 40);
        const x = Math.cos(a) * d, z = Math.sin(a) * d;
        b.cbox(x, y, z, w, 2.5, w * 0.35, cc); b.cbox(x + w * 0.15, y + 2, z, w * 0.5, 2.5, w * 0.25, cc);
      }
      const m = new THREE.Mesh(b.build(), comicMaterial({ atlas: false, emissive: 0.8 })); m.frustumCulled = false;
      this.sky.add(m); m.position.set(0, 0, 0); m.scale.setScalar(1);
      this.clouds = m;
    }
  }
  _buildTraffic(def) {
    const n = def.traffic ?? 16; if (!n || !this.data.lanes.length) return;
    const b = new GeoBuilder(); Props.car(b, 0, 0, 0, '#ffffff');
    const mesh = new THREE.InstancedMesh(b.build(), comicMaterial({ atlas: false }), n);
    mesh.frustumCulled = false;
    const R = rng(def.seed + 5); const cars = [];
    const cols = ['#d4472f', '#2a6fd4', '#f2c14e', '#3a8a5a', '#e8e0d0', '#6b4fa0', '#222222'];
    for (let i = 0; i < n; i++) {
      const lane = R.pick(this.data.lanes); const dir = R.chance(0.5) ? 1 : -1;
      cars.push({ lane, dir, t: R.range(lane.a, lane.b), speed: R.range(7, 12), stopped: 0, box: null });
      mesh.setColorAt(i, new THREE.Color(R.pick(cols)));
    }
    mesh.instanceColor.needsUpdate = true;
    this.scene.add(mesh);
    this.traffic = { mesh, cars, R };
  }
  _buildPeds(def) {
    const n = def.peds ?? 30; if (!n || !this.data.sidewalks.length) return;
    const b = new GeoBuilder();
    b.cbox(0, 0.45, 0, 0.32, 0.9, 0.22, C('#3a3a48')); b.cbox(0, 1.2, 0, 0.48, 0.62, 0.28, C('#ffffff')); b.cbox(0, 1.62, 0, 0.28, 0.3, 0.28, C('#d9a27a'));
    b.cbox(0, 1.78, 0, 0.3, 0.07, 0.3, C('#3a2a20'));
    const mesh = new THREE.InstancedMesh(b.build(), comicMaterial({ atlas: false }), n);
    mesh.frustumCulled = false;
    const R = rng(def.seed + 9); const peds = [];
    const cols = ['#c0462e', '#2a6f8a', '#c9a23a', '#4f7a3a', '#e8e0d0', '#7a4f9a', '#d97a3a', '#556070'];
    for (let i = 0; i < n; i++) {
      const sw = R.pick(this.data.sidewalks);
      const p = { sw, edge: R.int(0, 3), t: R.range(0, 1), speed: R.range(1.0, 1.6) * (R.chance(0.5) ? 1 : -1), x: 0, z: 0, flee: 0, phase: R.range(0, 6), alive: true };
      peds.push(p); mesh.setColorAt(i, new THREE.Color(R.pick(cols)));
    }
    mesh.instanceColor.needsUpdate = true;
    this.scene.add(mesh); this.peds = { mesh, peds };
  }
  _buildFire() {
    const nodes = this.data.fireNodes || []; if (!nodes.length) return;
    const geo = new THREE.BufferGeometry();
    // a flame = 2 crossed quads
    const p = [], c = [], n = [], uv = [], t = [];
    const quad = (ax, az) => {
      const w = 0.7, h = 1.6;
      const v = [[-w * ax, 0, -w * az], [w * ax, 0, w * az], [w * ax * 0.2, h, w * az * 0.2], [-w * ax * 0.2, h, -w * az * 0.2]];
      for (const idx of [0, 1, 2, 0, 2, 3]) { p.push(...v[idx]); n.push(0, 1, 0); uv.push(0, 0); t.push(0, 0, 0, 0); c.push(...(v[idx][1] > 0.5 ? [1, 0.85, 0.25] : [1, 0.35, 0.1])); }
    };
    quad(1, 0); quad(0, 1);
    geo.setAttribute('position', new THREE.Float32BufferAttribute(p, 3)); geo.setAttribute('normal', new THREE.Float32BufferAttribute(n, 3));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(c, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); geo.setAttribute('tile', new THREE.Float32BufferAttribute(t, 4));
    const mat = comicMaterial({ atlas: false, emissive: 1, side: THREE.DoubleSide });
    const mesh = new THREE.InstancedMesh(geo, mat, nodes.length);
    mesh.frustumCulled = false;
    for (const f of nodes) { f.on = false; f.heat = 0; }
    this.scene.add(mesh);
    this.fire = { mesh, nodes, front: -999 };
    this._updateFire(0);
  }
  _updateFire(dt) {
    const f = this.fire; if (!f) return;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(), pos = new THREE.Vector3();
    let i = 0;
    for (const nd of f.nodes) {
      const on = nd.steam ? f.front > -998 : nd.z < f.front;
      nd.on = on;
      const fl = on ? 0.75 + 0.35 * Math.sin(this.time * 13 + nd.z * 3.1 + nd.x) : 0.0001;
      s.set(nd.steam ? 1.6 : 1, fl * (nd.steam ? 0.5 : 1.0), nd.steam ? 1.6 : 1);
      q.setFromAxisAngle(UP, this.time * 0.5 + nd.z);
      pos.set(nd.x, nd.y, nd.z); m.compose(pos, q, s); f.mesh.setMatrixAt(i++, m);
    }
    f.mesh.instanceMatrix.needsUpdate = true;
  }
  isBurning(p, radius = 1.2) {
    if (!this.fire) return false;
    for (const nd of this.fire.nodes) if (nd.on && !nd.steam && Math.abs(nd.y - p.y) < 2 && Math.abs(nd.z - p.z) < radius && Math.abs(nd.x - p.x) < radius + 0.3) return true;
    return false;
  }
  update(dt, camera, player) {
    this.time += dt;
    shared.time.value = this.time;
    if (this.sky) this.sky.position.copy(camera.position);
    // chunk culling (frustum + distance) — cheap bounding sphere checks
    this._pm.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse); this._frustum.setFromProjectionMatrix(this._pm);
    const far = shared.fogFar.value + 40;
    for (const m of this.statics) {
      const bs = m.geometry.boundingSphere;
      const d = bs.center.distanceTo(camera.position) - bs.radius;
      m.visible = d < far && this._frustum.intersectsSphere(bs);
    }
    this._updateTraffic(dt, player);
    this._updatePeds(dt, player);
    this._updateFire(dt);
  }
  _updateTraffic(dt, player) {
    const T = this.traffic; if (!T) return;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), pos = new THREE.Vector3();
    T.cars.forEach((car, i) => {
      const L = car.lane;
      if (car.stopped > 0) car.stopped -= dt;
      else car.t += car.dir * car.speed * dt;
      if (car.t > L.b) car.t = L.a; if (car.t < L.a) car.t = L.b;
      const off = car.dir * 3.2;
      if (L.axis === 'z') pos.set(L.c + off, 0, car.t); else pos.set(car.t, 0, L.c - off);
      // brake for player standing on the street
      if (player && Math.abs(player.pos.y) < 1 && pos.distanceToSquared(player.pos) < 36) car.stopped = 0.5;
      car.pos = car.pos || new THREE.Vector3(); car.pos.copy(pos);
      const yaw = L.axis === 'z' ? (car.dir > 0 ? 0 : Math.PI) : (car.dir > 0 ? Math.PI / 2 : -Math.PI / 2);
      q.setFromAxisAngle(UP, yaw); m.compose(pos, q, s); T.mesh.setMatrixAt(i, m);
    });
    T.mesh.instanceMatrix.needsUpdate = true;
  }
  _updatePeds(dt, player) {
    const P = this.peds; if (!P) return;
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), s = new THREE.Vector3(1, 1, 1), pos = new THREE.Vector3();
    const panic = this.panic || null;
    P.peds.forEach((p, i) => {
      const sw = p.sw; const w = sw.x1 - sw.x0, d = sw.z1 - sw.z0; const per = 2 * (w + d);
      let spd = p.speed;
      if (panic && Math.hypot(p.x - panic.x, p.z - panic.z) < 25) spd = Math.sign(p.speed) * 4.5;
      p.t = (p.t + spd * dt / per + 1) % 1;
      // walk the perimeter of a sidewalk rectangle
      let u = p.t * per, x, z, yaw;
      if (u < w) { x = sw.x0 + u; z = sw.z0; yaw = Math.PI / 2; } else if ((u -= w) < d) { x = sw.x1; z = sw.z0 + u; yaw = 0; }
      else if ((u -= d) < w) { x = sw.x1 - u; z = sw.z1; yaw = -Math.PI / 2; } else { u -= w; x = sw.x0; z = sw.z1 - u; yaw = Math.PI; }
      if (spd < 0) yaw += Math.PI;
      p.x = x; p.z = z; p.phase += dt * Math.abs(spd) * 6;
      pos.set(x, 0.22 + Math.abs(Math.sin(p.phase)) * 0.05, z);
      q.setFromAxisAngle(UP, yaw); m.compose(pos, q, s); P.mesh.setMatrixAt(i, m);
    });
    P.mesh.instanceMatrix.needsUpdate = true;
  }
  // nearest zip point in view cone
  findZipPoint(eye, fwd, maxDist = 55, cone = 0.93) {
    let best = null, bestScore = -1;
    for (const zp of this.data.zipPoints) {
      const dx = zp[0] - eye.x, dy = zp[1] - eye.y, dz = zp[2] - eye.z; const d = Math.hypot(dx, dy, dz);
      if (d < 4 || d > maxDist) continue;
      const dot = (dx * fwd.x + dy * fwd.y + dz * fwd.z) / d; if (dot < cone) continue;
      const score = dot * 2 - d / maxDist;
      if (score > bestScore) {
        const v = new THREE.Vector3(zp[0], zp[1] + 0.3, zp[2]);
        if (!this.collision.lineOfSight(eye, v)) continue;
        bestScore = score; best = v;
      }
    }
    return best;
  }
  roofAt(x, z) {
    let best = null;
    for (const r of this.data.roofs) if (x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1 && (!best || r.y > best.y)) best = r;
    return best;
  }
}
const UP = new THREE.Vector3(0, 1, 0);
