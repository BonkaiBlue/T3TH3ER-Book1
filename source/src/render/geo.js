// GeoBuilder: accumulates low-poly primitives into one non-indexed BufferGeometry
// (flat normals, vertex colors, atlas tile per face). Used for merged city chunks and models.
import * as THREE from 'three';
import { tileRect } from './materials.js';

const NOTILE = [0, 0, 0, 0];

export class GeoBuilder {
  constructor() { this.p = []; this.n = []; this.c = []; this.uv = []; this.t = []; this.si = []; this.bone = 0; }
  get count() { return this.p.length / 3; }
  tri(a, b, c, nrm, col, uva, uvb, uvc, tile) {
    this.p.push(...a, ...b, ...c);
    for (let i = 0; i < 3; i++) { this.n.push(nrm[0], nrm[1], nrm[2]); this.c.push(col.r, col.g, col.b); this.t.push(tile[0], tile[1], tile[2], tile[3]); this.si.push(this.bone); }
    this.uv.push(...uva, ...uvb, ...uvc);
  }
  quad(a, b, c, d, nrm, col, u = 1, v = 1, tile = NOTILE) {
    // a-b-c-d counter-clockwise when viewed from the normal side
    this.tri(a, b, c, nrm, col, [0, 0], [u, 0], [u, v], tile);
    this.tri(a, c, d, nrm, col, [0, 0], [u, v], [0, v], tile);
  }
  // Axis aligned box. opts: color, side (tile idx), top (tile idx), unit (m per tile), noBottom, colorTop, faces
  box(x0, y0, z0, x1, y1, z1, opts = {}) {
    const col = opts.color || WHITE, ct = opts.colorTop || col, unit = opts.unit || 3.5;
    const st = opts.side != null ? tileRect(opts.side) : NOTILE, tt = opts.top != null ? tileRect(opts.top) : st;
    const w = x1 - x0, h = y1 - y0, d = z1 - z0;
    const su = (len) => (opts.side != null ? Math.max(1, Math.round(len / unit)) : 1);
    const sv = opts.side != null ? Math.max(1, Math.round(h / (opts.unitV || unit))) : 1;
    const f = opts.faces || 63;
    if (f & 1) this.quad([x1, y0, z1], [x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [1, 0, 0], shade(col, 0.92), su(d), sv, st);   // +x
    if (f & 2) this.quad([x0, y0, z0], [x0, y0, z1], [x0, y1, z1], [x0, y1, z0], [-1, 0, 0], shade(col, 0.92), su(d), sv, st); // -x
    if (f & 4) this.quad([x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1], [0, 0, 1], col, su(w), sv, st);               // +z
    if (f & 8) this.quad([x1, y0, z0], [x0, y0, z0], [x0, y1, z0], [x1, y1, z0], [0, 0, -1], col, su(w), sv, st);              // -z
    if (f & 16) this.quad([x0, y1, z1], [x1, y1, z1], [x1, y1, z0], [x0, y1, z0], [0, 1, 0], ct, opts.top != null ? Math.max(1, w / 6) : 1, opts.top != null ? Math.max(1, d / 6) : 1, tt); // top
    if ((f & 32) && !opts.noBottom) this.quad([x0, y0, z0], [x1, y0, z0], [x1, y0, z1], [x0, y0, z1], [0, -1, 0], shade(col, 0.6), 1, 1, NOTILE);
  }
  // Generic 8-corner hexahedron: b = bottom ring [4 pts], t = top ring [4 pts], both CCW seen from above
  // (order: -x-z, +x-z, +x+z, -x+z). Flat normals computed per face. Used for tapered low-poly limbs.
  hexa(b, t, color, shadeSides = true) {
    const face = (a, b2, c, d, k) => {
      const ux = b2[0] - a[0], uy = b2[1] - a[1], uz = b2[2] - a[2], vx = d[0] - a[0], vy = d[1] - a[1], vz = d[2] - a[2];
      let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx; const l = Math.hypot(nx, ny, nz) || 1; nx /= l; ny /= l; nz /= l;
      const col = shadeSides ? shade(color, 0.8 + 0.2 * Math.max(ny, Math.abs(nz) * 0.9)) : color;
      this.quad(a, b2, c, d, [nx, ny, nz], col, 1, 1, NOTILE);
    };
    face(b[3], b[2], t[2], t[3]); // +z
    face(b[1], b[0], t[0], t[1]); // -z
    face(b[2], b[1], t[1], t[2]); // +x
    face(b[0], b[3], t[3], t[0]); // -x
    face(t[3], t[2], t[1], t[0]); // top
    face(b[0], b[1], b[2], b[3]); // bottom
  }
  // tapered box along Y: (cx,cz) center, y0..y1, bottom size (wb,db), top size (wt,dt), optional z offset of top (lean)
  taper(cx, y0, cz, wb, db, y1, wt, dt, color, topOff = 0) {
    const B = [[cx - wb / 2, y0, cz - db / 2], [cx + wb / 2, y0, cz - db / 2], [cx + wb / 2, y0, cz + db / 2], [cx - wb / 2, y0, cz + db / 2]];
    const T = [[cx - wt / 2, y1, cz - dt / 2 + topOff], [cx + wt / 2, y1, cz - dt / 2 + topOff], [cx + wt / 2, y1, cz + dt / 2 + topOff], [cx - wt / 2, y1, cz + dt / 2 + topOff]];
    this.hexa(B, T, color);
  }
  // centered box helper for models
  cbox(cx, cy, cz, sx, sy, sz, color, opts = {}) { this.box(cx - sx / 2, cy - sy / 2, cz - sz / 2, cx + sx / 2, cy + sy / 2, cz + sz / 2, { ...opts, color }); }
  // pyramid roof
  pyramid(x0, y0, z0, x1, y1, z1, color) {
    const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, apex = [cx, y1, cz];
    const faces = [[[x0, y0, z1], [x1, y0, z1]], [[x1, y0, z1], [x1, y0, z0]], [[x1, y0, z0], [x0, y0, z0]], [[x0, y0, z0], [x0, y0, z1]]];
    for (const [a, b] of faces) {
      const n = new THREE.Vector3().subVectors(new THREE.Vector3(...b), new THREE.Vector3(...a)).cross(new THREE.Vector3(apex[0] - a[0], apex[1] - a[1], apex[2] - a[2])).normalize();
      this.tri(a, b, apex, [n.x, n.y, n.z], shade(color, 0.85 + n.y * 0.15), [0, 0], [1, 0], [0.5, 1], NOTILE);
    }
  }
  // low-poly cylinder (n sides)
  cyl(cx, y0, cz, r, h, color, n = 6, top = true) {
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2, a1 = ((i + 1) / n) * Math.PI * 2, am = (a0 + a1) / 2;
      const p0 = [cx + Math.cos(a0) * r, y0, cz + Math.sin(a0) * r], p1 = [cx + Math.cos(a1) * r, y0, cz + Math.sin(a1) * r];
      const q0 = [p0[0], y0 + h, p0[2]], q1 = [p1[0], y0 + h, p1[2]];
      const nm = [Math.cos(am), 0, Math.sin(am)];
      this.quad(p1, p0, q0, q1, nm, shade(color, 0.85 + 0.15 * Math.cos(am)), 1, 1, NOTILE);
      if (top) this.tri([cx, y0 + h, cz], q1, q0, [0, 1, 0], color, [0, 0], [0, 0], [0, 0], NOTILE);
    }
  }
  // flat ground quad with tiled texture
  ground(x0, z0, x1, z1, y, tile, color, unit = 6) {
    this.quad([x0, y, z1], [x1, y, z1], [x1, y, z0], [x0, y, z0], [0, 1, 0], color || WHITE, (x1 - x0) / unit, (z1 - z0) / unit, tile != null ? tileRect(tile) : NOTILE);
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.n, 3));
    g.setAttribute('color', new THREE.Float32BufferAttribute(this.c, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('tile', new THREE.Float32BufferAttribute(this.t, 4));
    if (this.skinned) {
      const n = this.si.length, idx = new Uint16Array(n * 4), w = new Float32Array(n * 4);
      for (let i = 0; i < n; i++) { idx[i * 4] = this.si[i]; w[i * 4] = 1; }
      g.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(idx, 4));
      g.setAttribute('skinWeight', new THREE.Float32BufferAttribute(w, 4));
    }
    g.computeBoundingSphere(); g.computeBoundingBox();
    return g;
  }
}
const WHITE = new THREE.Color(1, 1, 1);
const _sc = new THREE.Color();
export function shade(c, k) { return { r: Math.min(1, c.r * k), g: Math.min(1, c.g * k), b: Math.min(1, c.b * k) }; }
export const C = (hex) => new THREE.Color(hex);
