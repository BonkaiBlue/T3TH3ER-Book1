// Dynamic tether-line: a 12-segment cross-ribbon rebuilt each frame (1 draw call).
// Shoots out from the hand over ~80 ms, wobbles with a decaying wave on impact, sags when slack.
import * as THREE from 'three';

const SEG = 12;
export class Rope {
  constructor(scene, color = 0xf6f1df, width = 0.05) {
    this.w = width;
    const verts = SEG * 2 * 6; // 2 crossed quads per segment, 6 verts each
    this.pos = new Float32Array(verts * 3);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide }));
    this.mesh.frustumCulled = false; this.mesh.visible = false;
    scene.add(this.mesh);
    // impact splat
    const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
    x.translate(32, 32); x.fillStyle = '#f6f1df'; x.strokeStyle = '#1d1712'; x.lineWidth = 3; x.beginPath();
    for (let i = 0; i < 16; i++) { const r = i % 2 ? 11 : 28, a = i / 16 * Math.PI * 2; x.lineTo(Math.cos(a) * r, Math.sin(a) * r); } x.closePath(); x.fill(); x.stroke();
    this.splat = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthTest: true }));
    this.splat.scale.setScalar(0.9); this.splat.visible = false; scene.add(this.splat);
    this._a = new THREE.Vector3(); this._d = new THREE.Vector3(); this._s1 = new THREE.Vector3(); this._s2 = new THREE.Vector3(); this._p = new THREE.Vector3(); this._q = new THREE.Vector3();
  }
  hide() { this.mesh.visible = false; this.splat.visible = false; }
  // hand → anchor; shootT = seconds since fired; slack = ropeLen - actual distance
  update(hand, anchor, shootT, slack, time, camPos) {
    this.mesh.visible = true;
    const k = Math.min(1, shootT / 0.08);
    const d = this._d.subVectors(anchor, hand); const len = d.length(); if (len < 0.01) return;
    d.divideScalar(len);
    // two perpendicular side vectors
    const up = Math.abs(d.y) > 0.9 ? this._p.set(1, 0, 0) : this._p.set(0, 1, 0);
    const s1 = this._s1.crossVectors(d, up).normalize(), s2 = this._s2.crossVectors(d, s1).normalize();
    const wob = Math.exp(-shootT * 7) * 0.5 * Math.min(1, len / 10), sag = Math.max(0, slack) * 0.35;
    const P = this.pos; let o = 0; const w = this.w;
    const pt = (i, out) => {
      const t = i / SEG * k; const env = Math.sin(Math.PI * Math.min(1, t / Math.max(0.001, k)));
      out.copy(hand).addScaledVector(d, len * t);
      out.addScaledVector(s1, Math.sin(t * 9 - time * 38) * wob * env);
      out.y -= sag * env * 4 * t * (1 - t) * 4;
      return out;
    };
    let a = pt(0, this._a);
    for (let i = 1; i <= SEG; i++) {
      const b = pt(i, this._q);
      for (const s of [s1, s2]) {
        const ax = a.x - s.x * w, ay = a.y - s.y * w, az = a.z - s.z * w, bx = a.x + s.x * w, by = a.y + s.y * w, bz = a.z + s.z * w;
        const cx = b.x + s.x * w, cy = b.y + s.y * w, cz = b.z + s.z * w, dx = b.x - s.x * w, dy = b.y - s.y * w, dz = b.z - s.z * w;
        P[o++] = ax; P[o++] = ay; P[o++] = az; P[o++] = bx; P[o++] = by; P[o++] = bz; P[o++] = cx; P[o++] = cy; P[o++] = cz;
        P[o++] = ax; P[o++] = ay; P[o++] = az; P[o++] = cx; P[o++] = cy; P[o++] = cz; P[o++] = dx; P[o++] = dy; P[o++] = dz;
      }
      a.copy(b);
    }
    this.mesh.geometry.attributes.position.needsUpdate = true;
    if (k >= 1) { this.splat.visible = true; this.splat.position.copy(anchor); this.splat.material.opacity = Math.max(0.35, 1 - (shootT - 0.08) * 2); this.splat.scale.setScalar(0.6 + Math.min(0.5, (shootT - 0.08) * 3)); }
    else this.splat.visible = false;
  }
}
