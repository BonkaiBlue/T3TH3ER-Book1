// Skinned low-poly character rig — ONE draw call per character with 16 rigidly-skinned joints
// (exactly how PS1/PS2 games animated segmented bodies). Procedural pose library + blending,
// a pivot at the centre of mass for flips/tricks, and data-driven costume options (patterns,
// emblems, lenses, scarf…) so the Sewing Station and skin packs can restyle it without code.
import * as THREE from 'three';
import { GeoBuilder, C } from './geo.js';
import { comicMaterial } from './materials.js';

const BONES = [
  ['hips', null, [0, 0.95, 0]], ['spine', 'hips', [0, 1.06, 0]], ['chest', 'spine', [0, 1.24, 0]], ['head', 'chest', [0, 1.5, 0]],
  ['uArmL', 'chest', [-0.31, 1.44, 0]], ['fArmL', 'uArmL', [-0.31, 1.15, 0]], ['handL', 'fArmL', [-0.31, 0.9, 0]],
  ['uArmR', 'chest', [0.31, 1.44, 0]], ['fArmR', 'uArmR', [0.31, 1.15, 0]], ['handR', 'fArmR', [0.31, 0.9, 0]],
  ['thighL', 'hips', [-0.12, 0.92, 0]], ['shinL', 'thighL', [-0.12, 0.51, 0]], ['footL', 'shinL', [-0.12, 0.1, 0]],
  ['thighR', 'hips', [0.12, 0.92, 0]], ['shinR', 'thighR', [0.12, 0.51, 0]], ['footR', 'shinR', [0.12, 0.1, 0]],
];
const NB = BONES.length;
const BI = {}; BONES.forEach((b, i) => (BI[b[0]] = i));
const PI2 = Math.PI * 2;

// ------------------------------------------------------------------ geometry
export function buildRig(pal = {}, opts = {}) {
  const style = pal.style || 'hero';
  const P = C(pal.primary || '#2a9d9a'), S = C(pal.secondary || '#e4573d'), A = C(pal.accent || '#f2c14e');
  const E = C(pal.eyes || '#ffffff'), K = C('#151018'), SK = C(pal.skin || '#d9a27a'), H = C(pal.hair || '#3a2a20');
  const G = C(pal.gloves || pal.secondary || '#e4573d'), BT = C(pal.boots || pal.secondary || '#e4573d');
  const PANTS = C(pal.pants || (style === 'hero' ? pal.primary : '#333344') || '#333');
  const gb = new GeoBuilder(); gb.skinned = true;
  const on = (n) => (gb.bone = BI[n]);
  const hero = style === 'hero';
  const body = hero ? P : style === 'jester' ? P : P;
  // ---- hips / pelvis
  on('hips');
  gb.taper(0, 0.8, 0, 0.38, 0.24, 1.0, 0.38, 0.25, hero ? body : PANTS);
  gb.cbox(0, 0.98, 0, 0.38, 0.07, 0.25, hero ? A : (pal.belt ? C(pal.belt) : K)); // belt
  if (hero && pal.pattern !== 'none') { gb.cbox(0.185, 0.88, 0, 0.02, 0.16, 0.2, S); gb.cbox(-0.185, 0.88, 0, 0.02, 0.16, 0.2, S); }
  // ---- abdomen
  on('spine');
  gb.taper(0, 1.0, 0, 0.32, 0.21, 1.2, 0.36, 0.23, style === 'pod' ? P : body);
  if (hero) gb.cbox(0, 1.1, 0.115, 0.18, 0.14, 0.012, shadeC(P, 0.86)); // abs plate
  // ---- chest (V-taper hero torso)
  on('chest');
  const chestTop = hero ? 0.62 : 0.52;
  gb.taper(0, 1.18, 0, 0.38, 0.24, 1.47, chestTop, 0.29, body);
  gb.taper(0, 1.46, 0, 0.36, 0.2, 1.53, 0.16, 0.14, hero ? body : style === 'civ' ? P : body); // trapezius
  gb.taper(0, 1.5, 0, 0.12, 0.12, 1.56, 0.11, 0.11, hero || style === 'jester' ? body : SK); // neck
  if (hero) {
    gb.cbox(0, 1.36, 0.13, 0.36, 0.16, 0.015, shadeC(P, 1.08)); // pecs
    if (pal.pattern !== 'none' && pal.pattern !== 'split') { gb.cbox(0.25, 1.32, 0, 0.03, 0.26, 0.24, S); gb.cbox(-0.25, 1.32, 0, 0.03, 0.26, 0.24, S); }
    pattern(gb, pal.pattern || 'sides', P, S, A);
    emblem(gb, pal.emblem || 'knot', A, K);
    if (pal.scarf) { gb.cbox(0, 1.5, 0, 0.22, 0.08, 0.2, C(pal.scarf)); gb.taper(0.05, 1.05, -0.17, 0.1, 0.03, 1.5, 0.14, 0.04, C(pal.scarf), 0.04); }
  } else if (style === 'civ' || style === 'pod') {
    if (pal.stripes) for (let i = 0; i < 2; i++) gb.cbox(0, 1.24 + i * 0.12, 0, 0.47 - i * 0.04, 0.05, 0.27, S);
    if (pal.badge) gb.cbox(0.12, 1.38, 0.135, 0.07, 0.07, 0.02, A);
    if (pal.jacket) { gb.cbox(-0.15, 1.3, 0.13, 0.12, 0.34, 0.02, C(pal.jacket)); gb.cbox(0.15, 1.3, 0.13, 0.12, 0.34, 0.02, C(pal.jacket)); }
    if (style === 'pod') gb.cbox(0, 1.38, 0.135, 0.14, 0.06, 0.02, A);
  } else if (style === 'jester') {
    gb.cbox(0, 1.3, 0.135, 0.12, 0.34, 0.02, A); gb.cbox(0, 1.46, 0, 0.5, 0.06, 0.3, A); // collar
  }
  // ---- head
  on('head');
  if (hero) {
    gb.taper(0, 1.5, 0.01, 0.17, 0.2, 1.62, 0.25, 0.26, P);          // jaw
    gb.taper(0, 1.62, 0, 0.25, 0.26, 1.8, 0.21, 0.22, P);            // cranium
    gb.cbox(0, 1.8, 0, 0.16, 0.025, 0.17, P);
    if (pal.crest !== false) gb.cbox(0, 1.72, -0.005, 0.035, 0.17, 0.27, S);
    lenses(gb, pal.lens || 'classic', E, K);
    if (pal.goggles) { gb.cbox(0, 1.67, 0, 0.27, 0.04, 0.27, K); }
  } else if (style === 'jester') {
    gb.taper(0, 1.5, 0.01, 0.17, 0.2, 1.64, 0.25, 0.26, C('#f6f1df'));
    gb.taper(0, 1.64, 0, 0.25, 0.26, 1.8, 0.22, 0.23, C('#f6f1df'));
    for (const s of [-1, 1]) { gb.cbox(s * 0.065, 1.66, 0.13, 0.06, 0.1, 0.02, P); }
    gb.cbox(0, 1.56, 0.13, 0.14, 0.025, 0.02, K);
    gb.cbox(0, 1.82, 0, 0.32, 0.08, 0.3, P);
    gb.taper(0.12, 1.84, 0, 0.12, 0.12, 2.02, 0.06, 0.06, S, 0); gb.taper(-0.12, 1.84, 0, 0.12, 0.12, 2.02, 0.06, 0.06, P, 0);
    gb.cbox(0.13, 2.04, 0, 0.07, 0.07, 0.07, A); gb.cbox(-0.13, 2.04, 0, 0.07, 0.07, 0.07, A);
  } else {
    gb.taper(0, 1.5, 0.01, 0.17, 0.19, 1.62, 0.24, 0.25, SK);
    gb.taper(0, 1.62, 0, 0.24, 0.25, 1.77, 0.21, 0.22, SK);
    for (const s of [-1, 1]) gb.cbox(s * 0.065, 1.65, 0.125, 0.045, 0.045, 0.02, K);
    gb.cbox(0, 1.6, 0.13, 0.04, 0.05, 0.03, shadeC(SK, 0.85));  // nose
    if (pal.hat === 'beanie') gb.taper(0, 1.7, 0, 0.27, 0.28, 1.86, 0.2, 0.2, S);
    else if (pal.hat === 'cap') { gb.taper(0, 1.72, 0, 0.27, 0.28, 1.84, 0.22, 0.22, P); gb.cbox(0, 1.73, 0.17, 0.24, 0.025, 0.12, K); }
    else if (pal.hat === 'fedora') { gb.cbox(0, 1.76, 0, 0.42, 0.025, 0.42, H); gb.taper(0, 1.76, 0, 0.26, 0.26, 1.9, 0.22, 0.2, H); }
    else { gb.taper(0, 1.7, -0.02, 0.26, 0.27, 1.8, 0.22, 0.22, H); if (pal.long) gb.cbox(0, 1.55, -0.1, 0.26, 0.3, 0.08, H); }
    if (pal.mask) gb.cbox(0, 1.58, 0.11, 0.25, 0.09, 0.06, K);
    if (pal.glasses) gb.cbox(0, 1.655, 0.13, 0.2, 0.04, 0.015, K);
    if (pal.mustache) gb.cbox(0, 1.575, 0.13, 0.12, 0.025, 0.02, H);
  }
  // ---- arms
  for (const side of ['L', 'R']) {
    const sx = side === 'L' ? -1 : 1, x = 0.31 * sx;
    const harl = style === 'jester' ? (side === 'L' ? P : S) : null;
    const sleeve = hero ? P : harl || (pal.sleeves ? C(pal.sleeves) : P);
    on('uArm' + side);
    gb.taper(x, 1.3, 0, 0.18, 0.18, 1.5, 0.23, 0.2, hero && pal.pattern !== 'none' && pal.shoulders ? S : sleeve); // deltoid
    gb.taper(x, 1.14, 0, 0.14, 0.14, 1.36, 0.18, 0.17, sleeve);
    on('fArm' + side);
    const fore = hero ? P : harl || (pal.longSleeves ? sleeve : SK);
    gb.taper(x, 0.92, 0, 0.12, 0.12, 1.16, 0.15, 0.15, fore);
    if (hero) { gb.taper(x, 0.9, 0, 0.135, 0.135, 1.03, 0.155, 0.155, G); gb.cbox(x, 0.98, 0.07, 0.06, 0.06, 0.04, A); } // glove + launcher
    on('hand' + side);
    gb.cbox(x, 0.84, 0.01, 0.12, 0.13, 0.13, hero ? G : style === 'jester' ? A : SK);
    gb.cbox(x - sx * 0.055, 0.86, 0.04, 0.03, 0.06, 0.05, hero ? G : style === 'jester' ? A : SK);
  }
  // ---- legs
  for (const side of ['L', 'R']) {
    const sx = side === 'L' ? -1 : 1, x = 0.12 * sx;
    const legC = style === 'jester' ? (side === 'L' ? S : P) : hero ? P : PANTS;
    on('thigh' + side);
    gb.taper(x, 0.5, 0, 0.16, 0.17, 0.92, 0.23, 0.24, legC);
    if (hero && pal.pattern === 'stripes') gb.cbox(x, 0.7, 0, 0.205, 0.05, 0.215, S);
    on('shin' + side);
    gb.taper(x, 0.12, 0.0, 0.12, 0.13, 0.38, 0.17, 0.18, legC);
    gb.taper(x, 0.38, 0, 0.17, 0.18, 0.52, 0.16, 0.17, legC);
    if (hero) gb.taper(x, 0.12, 0, 0.135, 0.145, 0.36, 0.18, 0.19, BT);
    on('foot' + side);
    const shoe = hero ? BT : style === 'jester' ? A : K;
    gb.cbox(x, 0.05, 0.05, 0.13, 0.1, 0.27, shoe);
    gb.cbox(x, 0.11, -0.01, 0.13, 0.04, 0.15, shoe);
  }
  const geo = gb.build();
  const mat = comicMaterial({ atlas: false });
  const bones = BONES.map(([n]) => { const b = new THREE.Bone(); b.name = n; return b; });
  BONES.forEach(([n, par, p], i) => {
    if (par) { const pp = BONES[BI[par]][2]; bones[i].position.set(p[0] - pp[0], p[1] - pp[1], p[2] - pp[2]); bones[BI[par]].add(bones[i]); }
    else bones[i].position.set(p[0], p[1], p[2]);
  });
  const mesh = new THREE.SkinnedMesh(geo, mat);
  mesh.add(bones[0]);
  const pivot = new THREE.Group(); pivot.position.y = 1.0; mesh.position.y = -1.0; pivot.add(mesh);
  const root = new THREE.Group(); root.add(pivot);
  root.updateMatrixWorld(true);
  mesh.bind(new THREE.Skeleton(bones));
  mesh.boundingSphere = new THREE.Sphere(new THREE.Vector3(0, 1, 0), 2.4);
  mesh.frustumCulled = !opts.hero;
  root.scale.setScalar(opts.scale || 1);
  const anim = { cur: new Float32Array(NB * 3), tgt: new Float32Array(NB * 3), t: 0, piv: [0, 0, 0], rootY: 0, hipY: 0, landT: 0 };
  return { root, pivot, mesh, mat, bones, anim, style, isRig: true };
}
function shadeC(c, k) { return new THREE.Color(Math.min(1, c.r * k), Math.min(1, c.g * k), Math.min(1, c.b * k)); }
function pattern(gb, p, P, S, A) {
  if (p === 'stripes') { gb.cbox(0, 1.27, 0, 0.47, 0.05, 0.255, S); gb.cbox(0, 1.1, 0, 0.37, 0.05, 0.235, S); }
  else if (p === 'lattice') { for (const y of [1.24, 1.32, 1.4]) gb.cbox(0, y, 0.128, 0.42, 0.012, 0.012, S); for (const x of [-0.14, 0, 0.14]) gb.cbox(x, 1.32, 0.128, 0.012, 0.26, 0.012, S); }
  else if (p === 'chevron') { for (const s of [-1, 1]) { gb.hexa([[s * 0.02, 1.2, 0.12], [s * 0.26, 1.42, 0.12], [s * 0.26, 1.42, 0.14], [s * 0.02, 1.2, 0.14]].map((v) => v), [[s * 0.02, 1.27, 0.12], [s * 0.26, 1.49, 0.12], [s * 0.26, 1.49, 0.14], [s * 0.02, 1.27, 0.14]], S); } }
  else if (p === 'split') { gb.cbox(-0.14, 1.32, 0, 0.27, 0.28, 0.262, S); }
}
function emblem(gb, e, A, K) {
  const z = 0.142;
  if (e === 'knot') { gb.cbox(0, 1.39, z, 0.2, 0.045, 0.02, A); gb.cbox(0, 1.31, z, 0.045, 0.14, 0.02, A); gb.cbox(0, 1.23, z, 0.12, 0.045, 0.02, A); }
  else if (e === 'star') { gb.cbox(0, 1.33, z, 0.16, 0.05, 0.02, A); gb.cbox(0, 1.33, z, 0.05, 0.16, 0.02, A); gb.cbox(0, 1.33, z, 0.1, 0.1, 0.02, A); }
  else if (e === 'bolt') { gb.cbox(0.03, 1.39, z, 0.06, 0.1, 0.02, A); gb.cbox(0, 1.33, z, 0.14, 0.04, 0.02, A); gb.cbox(-0.03, 1.26, z, 0.06, 0.1, 0.02, A); }
  else if (e === 'eye') { gb.cbox(0, 1.33, z, 0.2, 0.08, 0.02, A); gb.cbox(0, 1.33, z + 0.005, 0.06, 0.06, 0.02, K); }
  else if (e === 'tether') { gb.cbox(0, 1.33, z, 0.04, 0.22, 0.02, A); gb.cbox(-0.07, 1.4, z, 0.1, 0.04, 0.02, A); gb.cbox(0.07, 1.4, z, 0.1, 0.04, 0.02, A); gb.cbox(0, 1.22, z, 0.12, 0.04, 0.02, A); }
}
function lenses(gb, l, E, K) {
  const z = 0.126;
  for (const s of [-1, 1]) {
    if (l === 'slit') { gb.cbox(s * 0.065, 1.665, z, 0.1, 0.035, 0.02, K); gb.cbox(s * 0.065, 1.665, z + 0.004, 0.085, 0.02, 0.02, E); continue; }
    const big = l === 'big' ? 1.3 : l === 'round' ? 1.05 : 1;
    const w = 0.085 * big, h = 0.06 * big, cx = s * 0.068, cy = 1.665;
    // slanted angular lens: outer corner higher (classic comic mask look)
    const tilt = l === 'round' ? 0 : 0.022 * big;
    const ring = (ww, hh, zz) => [[cx - ww / 2, cy - hh / 2 + (s < 0 ? tilt : 0), zz], [cx + ww / 2, cy - hh / 2 + (s > 0 ? tilt : 0), zz]];
    const bk = ring(w + 0.025, h + 0.022, z), fr = ring(w, h, z + 0.012);
    gb.hexa([[bk[0][0], bk[0][1], z - 0.01], [bk[1][0], bk[1][1], z - 0.01], [bk[1][0], bk[1][1], z + 0.006], [bk[0][0], bk[0][1], z + 0.006]],
      [[bk[0][0], bk[0][1] + h + 0.022, z - 0.01], [bk[1][0], bk[1][1] + h + 0.022, z - 0.01], [bk[1][0], bk[1][1] + h + 0.022, z + 0.006], [bk[0][0], bk[0][1] + h + 0.022, z + 0.006]], K, false);
    gb.hexa([[fr[0][0], fr[0][1], z], [fr[1][0], fr[1][1], z], [fr[1][0], fr[1][1], z + 0.012], [fr[0][0], fr[0][1], z + 0.012]],
      [[fr[0][0], fr[0][1] + h, z], [fr[1][0], fr[1][1] + h, z], [fr[1][0], fr[1][1] + h, z + 0.012], [fr[0][0], fr[0][1] + h, z + 0.012]], E, false);
  }
}

// ------------------------------------------------------------------ pose library
// rotations per bone: x (+ = bend forward for spine/chest/head, + = swing BACK for limbs),
// limbs use helpers with "outward" z mirrored for L/R.
const T = new Float32Array(NB * 3);
let rootY = 0, hipY = 0; const piv = [0, 0, 0];
function clr() { T.fill(0); rootY = 0; hipY = 0; piv[0] = piv[1] = piv[2] = 0; }
function set(b, x, y = 0, z = 0) { const i = BI[b] * 3; T[i] = x; T[i + 1] = y; T[i + 2] = z; }
function add(b, x, y = 0, z = 0) { const i = BI[b] * 3; T[i] += x; T[i + 1] += y; T[i + 2] += z; }
function arm(s, x, out = 0, twist = 0, elbow = 0, wrist = 0) { const m = s === 'L' ? -1 : 1; set('uArm' + s, x, twist * m, out * m); set('fArm' + s, -elbow); set('hand' + s, wrist); }
function leg(s, x, out = 0, knee = 0, foot = 0) { const m = s === 'L' ? -1 : 1; set('thigh' + s, x, 0, out * m); set('shin' + s, knee); set('foot' + s, foot); }
const sm = (k) => k * k * (3 - 2 * k);

const POSES = {
  idle(t, e) {
    const b = Math.sin(t * 1.7) * 0.025, w = Math.sin(t * 0.6);
    set('spine', 0.02); set('chest', 0.03 + b); set('head', -0.02, Math.sin(t * 0.37) * 0.25 * (e.hero ? 1 : 0.4));
    arm('L', 0.05, 0.14 + b, 0, 0.25); arm('R', 0.05, 0.14 + b, 0, 0.25);
    leg('L', 0, 0.05 + w * 0.02, 0.05); leg('R', 0, 0.05 - w * 0.02, 0.05); set('hips', 0, 0, w * 0.03); hipY = -0.01;
  },
  walk(t, e) {
    const s = Math.sin(t), c = Math.cos(t);
    leg('L', -0.55 * s, 0.03, 0.12 + 0.75 * Math.max(0, c), 0.15 * s); leg('R', 0.55 * s, 0.03, 0.12 + 0.75 * Math.max(0, -c), -0.15 * s);
    arm('L', 0.42 * s, 0.1, 0, 0.3 + 0.2 * Math.max(0, -s)); arm('R', -0.42 * s, 0.1, 0, 0.3 + 0.2 * Math.max(0, s));
    set('hips', 0, -0.12 * s); set('chest', 0.06, 0.15 * s); set('spine', 0.02); hipY = -0.035 + 0.035 * Math.abs(c);
  },
  run(t, e) {
    const s = Math.sin(t), c = Math.cos(t), k = e.sprint ? 1.15 : 1;
    leg('L', (-0.95 * s - 0.25) * k, 0.03, 0.3 + 1.45 * Math.max(0, c), 0.3 * s); leg('R', (0.95 * s - 0.25) * k, 0.03, 0.3 + 1.45 * Math.max(0, -c), -0.3 * s);
    arm('L', 0.95 * s * k, 0.12, 0, 1.5); arm('R', -0.95 * s * k, 0.12, 0, 1.5);
    set('hips', 0, -0.2 * s); set('chest', 0.18 * k, 0.25 * s); set('spine', 0.12 * k); set('head', -0.15);
    hipY = -0.06 + 0.07 * Math.abs(c); piv[0] = 0.12 * k;
  },
  crouch(t, e) {
    const mv = e.speed > 0.4; const s = mv ? Math.sin(t * 0.8) : 0, c = mv ? Math.cos(t * 0.8) : 0;
    leg('L', -1.15 - 0.35 * s, 0.12, 1.75 + 0.3 * Math.max(0, c), -0.45); leg('R', -1.15 + 0.35 * s, 0.12, 1.75 + 0.3 * Math.max(0, -c), -0.45);
    set('spine', 0.35); set('chest', 0.3); set('head', -0.5);
    arm('L', -0.55 + 0.2 * s, 0.25, 0.3, 1.2); arm('R', -0.55 - 0.2 * s, 0.25, 0.3, 1.2); hipY = -0.4;
  },
  slide(t, e) {
    leg('L', -1.45, 0.05, 0.05, 0.4); leg('R', -0.25, 0.2, 2.1, -0.3);
    set('spine', -0.35); set('chest', -0.25); set('head', 0.45);
    arm('L', 0.6, 0.8, 0, 0.2); arm('R', -0.9, 0.5, 0, 1.0); hipY = -0.6; piv[2] = 0.15;
  },
  jump(t, e) {
    leg('L', -1.1, 0.1, 1.3, -0.3); leg('R', -0.5, 0.1, 0.8, -0.2);
    arm('L', -1.3, 0.6, 0, 0.6); arm('R', -0.9, 0.7, 0, 0.6); set('chest', 0.1); set('head', -0.1);
  },
  fall(t, e) {
    const w = Math.sin(t * 7);
    leg('L', -0.4 + 0.25 * w, 0.2, 0.5 + 0.3 * w); leg('R', -0.2 - 0.25 * w, 0.2, 0.4 - 0.3 * w);
    arm('L', -0.7 + 0.3 * w, 1.3, 0, 0.4); arm('R', -0.7 - 0.3 * w, 1.3, 0, 0.4); set('chest', -0.1); set('head', 0.2);
  },
  skydive(t, e) {
    const w = Math.sin(t * 3) * 0.1;
    leg('L', 0.15, 0.3, 0.5 + w); leg('R', 0.15, 0.3, 0.5 - w);
    arm('L', -0.4, 1.35 + w, 0, 0.5); arm('R', -0.4, 1.35 - w, 0, 0.5); set('head', -0.6); set('chest', -0.15); piv[0] = 1.15;
  },
  dive(t, e) {
    leg('L', 0.05, 0.02, 0.1, 0.6); leg('R', 0.05, 0.02, 0.15, 0.6);
    arm('L', -3.0, 0.1, 0, 0.05); arm('R', -3.0, 0.1, 0, 0.05); set('head', -0.9); piv[0] = 1.45;
  },
  swing(t, e) {
    const s = e.side === 'L' ? 'L' : 'R', o = s === 'L' ? 'R' : 'L';
    const ph = e.sp ?? 0; // -1 falling into the arc … +1 rising out of it
    const tuck = Math.max(0, Math.min(1, 0.45 - ph * 0.9));
    arm(s, -2.95, -0.08, 0, 0.1, 0);
    arm(o, 0.25 - ph * 0.4, 0.95, 0, 0.7);
    const sc = Math.sin(t * 3) * 0.12;
    leg('L', -0.25 - tuck * 1.15 + sc, 0.08, 0.35 + tuck * 1.5, 0.3); leg('R', -0.1 - tuck * 0.95 - sc, 0.08, 0.25 + tuck * 1.2, 0.3);
    set('chest', 0.12 - ph * 0.15, 0, (s === 'L' ? 0.1 : -0.1)); set('head', -0.15);
    piv[0] = e.ropePitch || 0; piv[2] = e.ropeRoll || 0;
  },
  zip(t, e) {
    arm('L', -2.5, 0.15, 0, 0.2); arm('R', -2.5, 0.15, 0, 0.2); leg('L', 0.35, 0.05, 0.7); leg('R', 0.15, 0.05, 0.4);
    set('head', -0.2); piv[0] = e.ropePitch || 0.4;
  },
  wallrun(t, e) {
    POSES.run(t, e); const w = e.wallSide || 1; const s = w < 0 ? 'L' : 'R';
    arm(s, -0.9, 1.3, 0, 0.3); piv[2] = -0.55 * w; piv[0] = 0.2;
  },
  wallup(t, e) {
    POSES.run(t * 1.2, e); piv[0] = 0.55; set('head', -0.5);
    const sn = Math.sin(t * 1.2); arm('L', -1.6 + 0.6 * sn, 0.2, 0, 0.8); arm('R', -1.6 - 0.6 * sn, 0.2, 0, 0.8);
  },
  climb(t, e) {
    const s = Math.sin(t), mv = e.speed > 0.2 ? 1 : 0.15;
    arm('L', -2.6 + 0.55 * s * mv, 0.35, 0, 0.7 - 0.3 * s * mv); arm('R', -2.6 - 0.55 * s * mv, 0.35, 0, 0.7 + 0.3 * s * mv);
    leg('L', -0.95 - 0.45 * s * mv, 0.35, 1.5, -0.4); leg('R', -0.95 + 0.45 * s * mv, 0.35, 1.5, -0.4);
    set('chest', 0.1); set('head', -0.3); piv[0] = 0.12;
  },
  hang(t, e) {
    const w = Math.sin(t * 2) * 0.08;
    arm('L', -3.0, 0.15, 0, 0.15); arm('R', -3.0, 0.15, 0, 0.15); leg('L', 0.05 + w, 0.05, 0.25); leg('R', 0.0 - w, 0.05, 0.35); set('head', -0.25);
  },
  vault(t, e) {
    leg('L', -1.4, 0.5, 0.6); leg('R', -1.2, 0.3, 0.9); arm('L', -0.5, 0.2, 0, 0.1); arm('R', -0.2, 1.2, 0, 0.3);
    set('chest', 0.3); piv[2] = 0.55; piv[0] = 0.2;
  },
  // ---- combat (e.k = 0..1 progress through the move)
  jab(t, e) { combatStance(); const k = strike(e.k); arm('R', -1.55 * k + 0.3 * (1 - k), 0.15, 0, 1.9 * (1 - k)); set('chest', 0.1, -0.45 * k + 0.25 * (1 - k)); },
  cross(t, e) { combatStance(); const k = strike(e.k); arm('L', -1.55 * k + 0.3 * (1 - k), 0.15, 0, 1.9 * (1 - k)); set('chest', 0.1, 0.45 * k - 0.25 * (1 - k)); },
  hook(t, e) { combatStance(); const k = strike(e.k); arm('R', -1.4, 1.2 - 1.0 * k, -0.6 * k, 1.4); set('chest', 0.05, -0.8 * k + 0.3); },
  uppercut(t, e) { combatStance(); const k = strike(e.k); arm('R', 0.5 - 2.9 * k, 0.15, 0, 1.6 - 0.6 * k); set('chest', -0.15 * k + 0.2 * (1 - k)); hipY = -0.15 * (1 - k); },
  kick(t, e) { const k = strike(e.k); leg('R', -1.65 * k, 0.05, 1.6 * (1 - k) + 0.1); leg('L', 0, 0.05, 0.2); set('chest', -0.3 * k); arm('L', -0.4, 0.8, 0, 1.2); arm('R', 0.3, 0.9, 0, 0.8); },
  spinkick(t, e) { const k = strike(e.k); leg('R', -1.5, 0.6 * k, 0.15); leg('L', 0, 0.05, 0.3); arm('L', -0.2, 1.3, 0, 0.3); arm('R', -0.2, 1.3, 0, 0.3); piv[1] = PI2 * sm(Math.min(1, e.k * 1.2)); set('chest', -0.2); },
  takedown(t, e) { const k = strike(e.k); POSES.crouch(t, { speed: 0 }); arm('L', -2.6 + 2.9 * k, 0.2, 0, 0.6); arm('R', -2.6 + 2.9 * k, 0.2, 0, 0.6); },
  punch(t, e) { POSES.jab(t, e); },
  aim(t, e) { POSES.idle(t, e); arm('R', -1.55, 0.1, 0, 0.05); arm('L', -1.2, -0.4, 0, 1.2); set('chest', 0, -0.2); },
  throw(t, e) { POSES.idle(t, e); const k = strike(e.k ?? 0.5); arm('R', -2.4 * (1 - k) - 1.4 * k, 0.2, 0, 0.6 * (1 - k)); },
  stunned(t, e) { const w = Math.sin(t * 6); POSES.idle(t, e); set('chest', -0.25 + 0.06 * w, 0.2 * w); set('head', 0.3, 0.3 * w); arm('L', 0.2, 0.4, 0, 0.2); arm('R', 0.2, 0.4, 0, 0.2); },
  down(t, e) { arm('L', -0.3, 1.25, 0, 0.3); arm('R', -0.6, 1.0, 0, 0.6); leg('L', 0, 0.15, 0.1); leg('R', -0.3, 0.1, 0.6); set('head', 0.15); piv[0] = -1.5; rootY = -0.82; },
  webbed(t, e) { const w = Math.sin(t * 9) * 0.06; arm('L', 0, -0.05 + w, 0, 0); arm('R', 0, -0.05 - w, 0, 0); leg('L', 0, -0.03, 0); leg('R', 0, -0.03, 0); set('chest', w); set('head', 0, w * 4); },
  cower(t, e) { POSES.crouch(t, { speed: 0 }); arm('L', -2.5, -0.4, 0, 2.2); arm('R', -2.5, -0.4, 0, 2.2); set('head', 0.7); },
  cheer(t, e) { const h = Math.abs(Math.sin(t * 2.5)); arm('L', -2.9, 0.35, 0, 0.2 * h); arm('R', -2.9, 0.35, 0, 0.2 * h); leg('L', -0.2 * h, 0.05, 0.4 * h); leg('R', -0.2 * h, 0.05, 0.4 * h); rootY = h * 0.12; },
  ride(t, e) {
    set('hips', 0, 1.25); set('chest', 0.15, -0.9); set('head', 0, -0.4);
    leg('L', -0.55, 0.25, 0.95, -0.2); leg('R', -0.35, 0.25, 0.75, -0.2); arm('L', 0.1, 1.0, 0, 0.4); arm('R', -0.1, 0.9, 0, 0.6); hipY = -0.2;
  },
  skate(t, e) {
    const s = Math.sin(t * 0.7);
    leg('L', -0.4, 0.15 + 0.3 * Math.max(0, s), 0.7); leg('R', -0.4, 0.15 + 0.3 * Math.max(0, -s), 0.7);
    arm('L', 0.6 * s, 0.2, 0, 0.5); arm('R', -0.6 * s, 0.2, 0, 0.5); set('chest', 0.45, 0.15 * s); set('spine', 0.2); hipY = -0.15;
  },
  bike(t, e) {
    const s = Math.sin(t), c = Math.cos(t);
    leg('L', -1.15 - 0.45 * s, 0.05, 1.5 + 0.45 * c); leg('R', -1.15 + 0.45 * s, 0.05, 1.5 - 0.45 * c);
    arm('L', -1.15, 0.15, 0, 0.35); arm('R', -1.15, 0.15, 0, 0.35); set('chest', 0.55); set('spine', 0.25); set('head', -0.5);
  },
  glide(t, e) { arm('L', -2.95, 0.4, 0, 0.1); arm('R', -2.95, 0.4, 0, 0.1); leg('L', 0.2, 0.1, 0.4); leg('R', -0.1, 0.1, 0.6); piv[0] = 0.35; },
  talk(t, e) { POSES.idle(t, e); const g = Math.sin(t * 2.3); arm('R', -0.6 - 0.2 * g, 0.3, 0.3, 1.3); },
  land(t, e) { leg('L', -0.9, 0.1, 1.5, -0.5); leg('R', -0.9, 0.1, 1.5, -0.5); set('chest', 0.5); set('spine', 0.2); arm('L', -0.3, 0.6, 0, 0.8); arm('R', -0.3, 0.6, 0, 0.8); hipY = -0.35; },
};
POSES.sprint = (t, e) => POSES.run(t, { ...e, sprint: true });
POSES.air = POSES.jump;
function combatStance() { leg('L', -0.35, 0.12, 0.45, 0); leg('R', 0.25, 0.12, 0.35, 0); arm('L', -0.9, 0.2, 0.2, 1.9); arm('R', -0.8, 0.2, 0.2, 1.9); set('chest', 0.12); hipY = -0.06; }
function strike(k) { return k < 0.25 ? -0.3 * (k / 0.25) : k < 0.55 ? -0.3 + 1.3 * ((k - 0.25) / 0.3) : 1 - (k - 0.55) / 0.45 * 0.7; }

// Trick overlays: rotate the pivot (centre of mass) with a tuck/layout body pose.
const TRICKS = {
  frontflip: { dur: 0.55, pose: 'tuck', rot: [PI2, 0, 0] },
  backflip: { dur: 0.6, pose: 'tuck', rot: [-PI2, 0, 0] },
  corkscrew: { dur: 0.7, pose: 'layout', rot: [0, PI2, PI2] },
  sidespin: { dur: 0.6, pose: 'layout', rot: [0, 0, PI2] },
  twist: { dur: 0.55, pose: 'pencil', rot: [0, PI2 * 1.5, 0] },
  superman: { dur: 0.8, pose: 'superman', rot: [0, 0, 0] },
  starfish: { dur: 0.75, pose: 'starfish', rot: [0, 0, 0] },
  roll: { dur: 0.45, pose: 'tuck', rot: [PI2, 0, 0] },
  doubleflip: { dur: 0.85, pose: 'tuck', rot: [PI2 * 2, 0, 0] },
};
export const TRICK_LIST = TRICKS;
const BODY = {
  tuck() { leg('L', -1.9, 0.08, 2.3, 0.3); leg('R', -1.9, 0.08, 2.3, 0.3); arm('L', -1.1, 0.25, 0, 1.8); arm('R', -1.1, 0.25, 0, 1.8); set('chest', 0.5); set('head', 0.4); },
  layout() { leg('L', 0.05, 0.05, 0.1); leg('R', 0.05, 0.05, 0.1); arm('L', -0.3, 1.45, 0, 0.1); arm('R', -0.3, 1.45, 0, 0.1); },
  pencil() { leg('L', 0, -0.03, 0); leg('R', 0, -0.03, 0); arm('L', -3.05, -0.05, 0, 0); arm('R', -3.05, -0.05, 0, 0); },
  superman() { leg('L', 0.25, 0.02, 0.1, 0.6); leg('R', 0.35, 0.02, 0.3, 0.6); arm('R', -3.0, 0.05, 0, 0); arm('L', 0.3, 0.6, 0, 0.6); set('head', -0.7); piv[0] = 1.35; },
  starfish() { leg('L', 0.1, 0.55, 0.1); leg('R', 0.1, 0.55, 0.1); arm('L', -1.6, 1.0, 0, 0.1); arm('R', -1.6, 1.0, 0, 0.1); set('head', -0.3); piv[0] = 0.9; },
};

// ------------------------------------------------------------------ animator
// e: { speed, phase, hero, side, sp, ropePitch, ropeRoll, k, wallSide, trick:{type,k} }
export function animateRig(ch, pose, speed, dt, e = {}) {
  const a = ch.anim;
  const rate = pose === 'run' || pose === 'sprint' ? 1.55 + speed * 0.11 : pose === 'walk' ? 1.1 + speed * 0.45 : pose === 'crouch' ? 1 + speed * 0.5 : pose === 'climb' || pose === 'wallup' ? 1 + speed * 0.4 : pose === 'bike' ? 0.6 + speed * 0.12 : pose === 'skate' ? 0.6 + speed * 0.08 : 1;
  a.t += dt * rate * 5.2;
  const t = e.phase ?? a.t;
  e.speed = speed;
  clr();
  (POSES[pose] || POSES.idle)(t, e);
  // landing squash
  if (a.landT > 0) { a.landT -= dt; const k = Math.min(1, a.landT / 0.22); hipY += -0.32 * k; add('chest', 0.35 * k); add('thighL', -0.6 * k); add('thighR', -0.6 * k); add('shinL', 1.0 * k); add('shinR', 1.0 * k); }
  let trickRot = null;
  if (e.trick) {
    const tr = TRICKS[e.trick.type];
    if (tr) {
      const k = Math.min(1, e.trick.k);
      const blend = Math.min(1, k * 6, (1 - k) * 6);
      if (blend > 0.01) { const keep = T.slice(); clr(); BODY[tr.pose](); for (let i = 0; i < T.length; i++) T[i] = keep[i] + (T[i] - keep[i]) * blend; }
      const ek = sm(k);
      trickRot = [tr.rot[0] * ek, tr.rot[1] * ek, tr.rot[2] * ek];
      if (tr.pose === 'superman' || tr.pose === 'starfish') trickRot = null;
    }
  }
  const kk = 1 - Math.exp(-(e.snap || 16) * dt);
  const cur = a.cur;
  for (let i = 0; i < cur.length; i++) cur[i] += (T[i] - cur[i]) * kk;
  const bs = ch.bones;
  for (let b = 0; b < NB; b++) bs[b].rotation.set(cur[b * 3], cur[b * 3 + 1], cur[b * 3 + 2]);
  a.hipY += (hipY - a.hipY) * kk; a.rootY += (rootY - a.rootY) * kk;
  bs[0].position.y = 0.95 + a.hipY;
  const pk = 1 - Math.exp(-10 * dt);
  for (let i = 0; i < 3; i++) a.piv[i] += (piv[i] - a.piv[i]) * pk;
  if (trickRot) ch.pivot.rotation.set(a.piv[0] + trickRot[0], a.piv[1] + trickRot[1], a.piv[2] + trickRot[2]);
  else ch.pivot.rotation.set(a.piv[0], a.piv[1], a.piv[2]);
  ch.pivot.position.y = 1.0 + a.rootY;
}
export function boneWorld(ch, name, out) { return ch.bones[BI[name]].getWorldPosition(out); }
export { BI as BONE_INDEX };
