// Low-poly procedural models: characters (rigged from boxes), viewmodel hands, rides, props.
// All colors come from data (skins / npcTypes) so skin packs restyle without touching code.
import * as THREE from 'three';
import { GeoBuilder, C } from './geo.js';
import { comicMaterial, TILE } from './materials.js';

export { buildRig as buildCharacter, animateRig as animateCharacter } from './rig.js';

// First-person viewmodel: two gloved forearms with wrist launchers.
export function buildViewModel(pal) {
  const P = C(pal.primary || '#2a9d9a'), S = C(pal.gloves || pal.secondary || '#e4573d'), A = C(pal.accent || '#f2c14e');
  const mat = comicMaterial({ atlas: false });
  const g = new THREE.Group();
  const hands = {};
  for (const side of [-1, 1]) {
    const b = new GeoBuilder();
    // forearm runs along -z (toward the screen centre); built tapered like the 3rd-person rig
    b.hexa([[-0.05, -0.05, 0.42], [0.05, -0.05, 0.42], [0.06, -0.06, 0.08], [-0.06, -0.06, 0.08]].map(([x, y, z]) => [x, y, z]),
      [[-0.05, 0.05, 0.42], [0.05, 0.05, 0.42], [0.06, 0.06, 0.08], [-0.06, 0.06, 0.08]], P);
    b.cbox(0, 0, 0.0, 0.13, 0.13, 0.18, S);            // glove cuff
    b.cbox(0, 0.075, 0.02, 0.05, 0.03, 0.12, A);       // launcher
    b.cbox(0, 0.075, -0.05, 0.025, 0.025, 0.03, C('#1d1712'));
    b.cbox(0, -0.005, -0.13, 0.115, 0.1, 0.1, S);      // fist
    for (let k = 0; k < 4; k++) b.cbox(-0.04 + k * 0.027, 0.04, -0.17, 0.022, 0.03, 0.03, S); // knuckles
    b.cbox(side * -0.06, 0.0, -0.11, 0.03, 0.05, 0.07, S); // thumb
    const m = new THREE.Mesh(b.build(), mat);
    m.position.set(side * 0.2, -0.22, -0.32);
    m.rotation.set(0.12, side * -0.06, 0);
    g.add(m); hands[side < 0 ? 'L' : 'R'] = m;
  }
  g.traverse((o) => { if (o.isMesh) { o.renderOrder = 10; o.frustumCulled = false; } });
  return { group: g, hands, mat, base: { L: hands.L.position.clone(), R: hands.R.position.clone() } };
}

export function buildRide(kind) {
  const b = new GeoBuilder(); const K = C('#1a1418');
  if (kind === 'skateboard') {
    b.cbox(0, 0.12, 0, 0.26, 0.04, 0.85, C('#d4472f')); b.cbox(0, 0.145, 0, 0.2, 0.01, 0.6, C('#f2c14e'));
    for (const z of [-0.28, 0.28]) for (const x of [-0.1, 0.1]) b.cbox(x, 0.05, z, 0.06, 0.08, 0.08, C('#f2ead0'));
  } else if (kind === 'skates') {
    for (const x of [-0.12, 0.12]) { b.cbox(x, 0.12, 0.02, 0.13, 0.16, 0.28, C('#f2ead0')); b.cbox(x, 0.03, 0.02, 0.06, 0.06, 0.26, C('#e4573d')); }
  } else if (kind === 'bicycle') {
    const F = C('#2a6fd4');
    for (const z of [-0.55, 0.55]) { b.cyl(0, 0.0, z, 0.33, 0.06, K, 8); }
    // wheels as thin rings approximated: rotate cylinders later -> simpler: discs via boxes
    b.p.length = 0; b.n.length = 0; b.c.length = 0; b.uv.length = 0; b.t.length = 0;
    for (const z of [-0.55, 0.55]) { b.cbox(0, 0.33, z, 0.05, 0.66, 0.12, K); b.cbox(0, 0.33, z, 0.05, 0.12, 0.66, K); b.cbox(0, 0.33, z, 0.06, 0.1, 0.1, C('#ccc')); }
    b.cbox(0, 0.62, 0, 0.05, 0.06, 1.0, F); b.cbox(0, 0.48, -0.15, 0.05, 0.36, 0.06, F);
    b.cbox(0, 0.68, -0.18, 0.14, 0.05, 0.22, K); b.cbox(0, 0.9, 0.45, 0.5, 0.04, 0.04, K); b.cbox(0, 0.76, 0.45, 0.05, 0.3, 0.05, F);
  }
  const m = new THREE.Mesh(b.build(), comicMaterial({ atlas: false }));
  return m;
}

// Props (merged into city chunks by passing a GeoBuilder)
export const Props = {
  car(b, x, z, rot, col) {
    const tmp = new GeoBuilder(); const K = C('#16120f'); const body = C(col);
    tmp.cbox(0, 0.55, 0, 1.8, 0.6, 4.0, body); tmp.cbox(0, 1.05, -0.2, 1.6, 0.5, 2.0, body);
    tmp.cbox(0, 1.06, -0.2, 1.62, 0.36, 1.7, C('#7fb3b8'));
    for (const zz of [-1.3, 1.3]) for (const xx of [-0.85, 0.85]) tmp.cbox(xx, 0.3, zz, 0.3, 0.6, 0.6, K);
    tmp.cbox(0, 0.62, 2.01, 1.4, 0.15, 0.02, C('#fff2b0'));
    appendRotated(b, tmp, x, 0, z, rot);
  },
  waterTower(b, x, y, z) {
    const W = C('#8a5a3a'), K = C('#3b2a20');
    for (const dx of [-0.9, 0.9]) for (const dz of [-0.9, 0.9]) b.cbox(x + dx, y + 1.5, z + dz, 0.2, 3, 0.2, K);
    b.cyl(x, y + 3, z, 1.6, 3, W, 8); b.box(x - 1.65, y + 6, z - 1.65, x + 1.65, y + 6.1, z + 1.65, { color: K });
    b.pyramid(x - 1.7, y + 6.1, z - 1.7, x + 1.7, y + 7.4, z + 1.7, K);
  },
  acUnit(b, x, y, z) { b.cbox(x, y + 0.6, z, 1.6, 1.2, 1.2, C('#a7a59a')); b.cbox(x, y + 1.25, z, 1.0, 0.1, 0.8, C('#555')); },
  antenna(b, x, y, z, h) { b.cbox(x, y + h / 2, z, 0.15, h, 0.15, C('#2b2b2b')); b.cbox(x, y + h * 0.7, z, 1.2, 0.08, 0.08, C('#2b2b2b')); b.cbox(x, y + h + 0.1, z, 0.3, 0.3, 0.3, C('#e4573d')); },
  billboard(b, x, y, z, rotY, col, col2) {
    const tmp = new GeoBuilder();
    tmp.cbox(-2, 1.5, 0, 0.2, 3, 0.2, C('#333')); tmp.cbox(2, 1.5, 0, 0.2, 3, 0.2, C('#333'));
    tmp.cbox(0, 4.2, 0, 7, 3, 0.25, C(col)); tmp.cbox(0, 4.2, 0.14, 4.5, 1.2, 0.02, C(col2)); tmp.cbox(-2.4, 4.2, 0.14, 1.2, 1.2, 0.02, C('#1d1712'));
    appendRotated(b, tmp, x, y, z, rotY);
  },
  lamp(b, x, z) { b.cbox(x, 2.5, z, 0.15, 5, 0.15, C('#2a2a30')); b.cbox(x, 5, z, 0.5, 0.25, 0.5, C('#fff0b0')); },
  tree(b, x, z, s = 1) { b.cbox(x, 1.2 * s, z, 0.35 * s, 2.4 * s, 0.35 * s, C('#6b4a2e')); b.cbox(x, 3.2 * s, z, 2.4 * s, 2.0 * s, 2.4 * s, C('#5f8f3c')); b.cbox(x, 4.4 * s, z, 1.5 * s, 1.0 * s, 1.5 * s, C('#76a64a')); },
  crate(b, x, y, z, s = 1.2) { b.box(x - s / 2, y, z - s / 2, x + s / 2, y + s, z + s / 2, { side: TILE.wood, top: TILE.wood, unit: s, color: C('#ffffff') }); },
  barrel(b, x, y, z) { b.cyl(x, y, z, 0.4, 1.0, C('#c0462e'), 6); },
  bench(b, x, z, rot) { const t = new GeoBuilder(); t.cbox(0, 0.45, 0, 1.8, 0.08, 0.5, C('#9a6a3c')); t.cbox(0, 0.75, -0.22, 1.8, 0.4, 0.06, C('#9a6a3c')); t.cbox(-0.8, 0.22, 0, 0.08, 0.45, 0.45, C('#333')); t.cbox(0.8, 0.22, 0, 0.08, 0.45, 0.45, C('#333')); appendRotated(b, t, x, 0, z, rot); },
  hydrant(b, x, z) { b.cyl(x, 0, z, 0.2, 0.7, C('#d03a2a'), 6); },
};
export function appendRotated(dst, src, x, y, z, rotY) {
  const c = Math.cos(rotY), s = Math.sin(rotY);
  for (let i = 0; i < src.p.length; i += 3) {
    const px = src.p[i], py = src.p[i + 1], pz = src.p[i + 2];
    dst.p.push(px * c + pz * s + x, py + y, -px * s + pz * c + z);
    const nx = src.n[i], ny = src.n[i + 1], nz = src.n[i + 2];
    dst.n.push(nx * c + nz * s, ny, -nx * s + nz * c);
  }
  dst.c.push(...src.c); dst.uv.push(...src.uv); dst.t.push(...src.t); for (let i = 0; i < src.si.length; i++) dst.si.push(dst.bone);
}
