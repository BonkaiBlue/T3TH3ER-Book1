// Low-poly procedural models: characters (rigged from boxes), viewmodel hands, rides, props.
// All colors come from data (skins / npcTypes) so skin packs restyle without touching code.
import * as THREE from 'three';
import { GeoBuilder, C } from './geo.js';
import { comicMaterial, TILE } from './materials.js';

function mesh(gb, mat) { const m = new THREE.Mesh(gb.build(), mat); m.matrixAutoUpdate = true; return m; }

// pal: {primary, secondary, accent, eyes, skin, hair, emblem, style}
export function buildCharacter(pal, opts = {}) {
  const P = C(pal.primary || '#2a9d9a'), S = C(pal.secondary || '#e4573d'), A = C(pal.accent || '#f2c14e');
  const E = C(pal.eyes || '#ffffff'), K = C('#151018'), SK = C(pal.skin || '#d9a27a'), H = C(pal.hair || '#3a2a20');
  const style = pal.style || 'hero';
  const scale = opts.scale || 1;
  const mat = comicMaterial({ atlas: false });
  const root = new THREE.Group(); root.name = 'char';
  const parts = {};
  const full = !opts.simple;

  // ---- torso + head (+hips) ----
  const tb = new GeoBuilder();
  if (style === 'hero') {
    tb.cbox(0, 1.22, 0, 0.5, 0.5, 0.28, P);           // chest
    tb.cbox(0, 0.97, 0, 0.42, 0.2, 0.25, S);          // abdomen panel
    tb.cbox(0, 0.86, 0, 0.44, 0.08, 0.27, A);         // belt
    tb.cbox(0.24, 1.22, 0, 0.06, 0.44, 0.29, S); tb.cbox(-0.24, 1.22, 0, 0.06, 0.44, 0.29, S); // side stripes
    // emblem: knot chevron
    tb.cbox(0, 1.3, 0.145, 0.22, 0.05, 0.02, A); tb.cbox(0, 1.22, 0.145, 0.05, 0.16, 0.02, A); tb.cbox(0, 1.13, 0.145, 0.12, 0.05, 0.02, A);
    // head: masked
    tb.cbox(0, 1.62, 0, 0.3, 0.32, 0.3, P);
    tb.cbox(0, 1.79, 0, 0.26, 0.04, 0.26, S);          // crest
    tb.cbox(0.075, 1.64, 0.152, 0.1, 0.07, 0.02, K); tb.cbox(-0.075, 1.64, 0.152, 0.1, 0.07, 0.02, K);
    tb.cbox(0.075, 1.64, 0.158, 0.075, 0.045, 0.02, E); tb.cbox(-0.075, 1.64, 0.158, 0.075, 0.045, 0.02, E);
    tb.cbox(0, 1.44, 0, 0.14, 0.08, 0.14, P);          // neck
  } else if (style === 'pod') {
    tb.cbox(0, 1.1, 0, 0.5, 0.7, 0.28, P); tb.cbox(0, 1.24, 0.145, 0.16, 0.08, 0.02, A);
    tb.cbox(0, 1.62, 0, 0.28, 0.32, 0.28, SK); tb.cbox(0, 1.77, 0, 0.29, 0.06, 0.29, H);
    eyes(tb, K);
  } else if (style === 'jester') {
    tb.cbox(0, 1.18, 0, 0.52, 0.6, 0.3, P); tb.cbox(0, 1.18, 0.155, 0.12, 0.5, 0.02, A);
    tb.cbox(0, 0.86, 0, 0.46, 0.1, 0.28, A);
    tb.cbox(0, 1.6, 0, 0.3, 0.32, 0.3, E);             // white mask
    tb.cbox(0.07, 1.62, 0.152, 0.07, 0.1, 0.02, P); tb.cbox(-0.07, 1.62, 0.152, 0.07, 0.1, 0.02, P);
    tb.cbox(0, 1.5, 0.152, 0.16, 0.03, 0.02, K);
    // two-point jester hat
    tb.cbox(0, 1.8, 0, 0.34, 0.1, 0.32, P); tb.cbox(0.22, 1.9, 0, 0.12, 0.2, 0.12, S); tb.cbox(-0.22, 1.9, 0, 0.12, 0.2, 0.12, P);
    tb.cbox(0.3, 2.02, 0, 0.08, 0.08, 0.08, A); tb.cbox(-0.3, 2.02, 0, 0.08, 0.08, 0.08, A);
  } else {
    // civilian / thug / cop
    tb.cbox(0, 1.15, 0, 0.5, 0.62, 0.28, P);
    if (pal.stripes) for (let i = 0; i < 3; i++) tb.cbox(0, 1.0 + i * 0.18, 0, 0.51, 0.06, 0.29, S);
    if (pal.badge) tb.cbox(0.12, 1.3, 0.145, 0.07, 0.07, 0.02, A);
    tb.cbox(0, 0.86, 0, 0.46, 0.1, 0.27, pal.belt ? C(pal.belt) : K);
    tb.cbox(0, 1.6, 0, 0.28, 0.3, 0.28, SK);
    if (pal.hat === 'beanie') tb.cbox(0, 1.78, 0, 0.3, 0.12, 0.3, S);
    else if (pal.hat === 'cap') { tb.cbox(0, 1.77, 0, 0.3, 0.08, 0.3, P); tb.cbox(0, 1.74, 0.17, 0.26, 0.03, 0.1, K); }
    else if (pal.hat === 'fedora') { tb.cbox(0, 1.76, 0, 0.42, 0.03, 0.42, H); tb.cbox(0, 1.82, 0, 0.28, 0.1, 0.28, H); }
    else tb.cbox(0, 1.76, -0.02, 0.29, 0.06, 0.3, H);
    if (pal.mask) tb.cbox(0, 1.58, 0.13, 0.29, 0.1, 0.05, K);
    eyes(tb, K);
  }
  const torso = mesh(tb, mat); root.add(torso); parts.torso = torso;

  const limbCol = style === 'hero' ? P : style === 'jester' ? P : P;
  const handCol = style === 'hero' ? S : style === 'jester' ? A : SK;
  const legCol = style === 'hero' ? P : C(pal.pants || pal.primary || '#333');
  const bootCol = style === 'hero' ? S : style === 'jester' ? A : K;
  // arms (pivot at shoulder)
  for (const side of [-1, 1]) {
    const ab = new GeoBuilder();
    ab.cbox(0, -0.2, 0, 0.14, 0.42, 0.14, style === 'hero' ? limbCol : (pal.sleeves ? C(pal.sleeves) : P));
    ab.cbox(0, -0.5, 0, 0.12, 0.26, 0.12, style === 'hero' ? limbCol : SK);
    ab.cbox(0, -0.66, 0.01, 0.13, 0.1, 0.14, handCol);
    if (style === 'hero') ab.cbox(0, -0.47, 0, 0.14, 0.12, 0.15, handCol); // gauntlet launcher
    const arm = mesh(ab, mat); arm.position.set(side * 0.33, 1.42, 0); root.add(arm);
    parts[side < 0 ? 'armL' : 'armR'] = arm;
    const lb = new GeoBuilder();
    lb.cbox(0, -0.22, 0, 0.18, 0.46, 0.18, legCol);
    lb.cbox(0, -0.6, 0, 0.16, 0.34, 0.16, legCol);
    lb.cbox(0, -0.78, 0.04, 0.17, 0.1, 0.24, bootCol);
    if (style === 'hero') lb.cbox(0, -0.62, 0, 0.17, 0.26, 0.17, bootCol);
    const leg = mesh(lb, mat); leg.position.set(side * 0.12, 0.84, 0); root.add(leg);
    parts[side < 0 ? 'legL' : 'legR'] = leg;
  }
  root.scale.setScalar(scale);
  return { root, parts, mat, anim: { t: 0, pose: 'idle', blend: 0 } };
}
function eyes(tb, K) { tb.cbox(0.07, 1.63, 0.142, 0.05, 0.05, 0.02, K); tb.cbox(-0.07, 1.63, 0.142, 0.05, 0.05, 0.02, K); }

// Procedural animation driver (no skeletal anims needed).
// pose: idle | walk | run | crouch | air | swing | climb | wallrunL | wallrunR | hang | punch | stunned | down | ride | sit | cheer | aim
export function animateCharacter(ch, pose, speed, dt, phaseOverride) {
  const a = ch.anim; const p = ch.parts;
  a.t += dt * (pose === 'run' ? 1.6 + speed * 0.12 : pose === 'walk' ? 1.2 + speed * 0.4 : pose === 'climb' ? 1 + speed * 0.5 : 1);
  const t = phaseOverride ?? a.t * 5.5;
  const s = Math.sin(t), c = Math.cos(t);
  let aL = 0, aR = 0, lL = 0, lR = 0, aLz = 0, aRz = 0, lean = 0, bodyY = 0, roll = 0;
  switch (pose) {
    case 'walk': aL = s * 0.5; aR = -s * 0.5; lL = -s * 0.55; lR = s * 0.55; bodyY = Math.abs(c) * 0.04; break;
    case 'run': aL = s * 1.1; aR = -s * 1.1; lL = -s * 0.95; lR = s * 0.95; lean = 0.25; bodyY = Math.abs(c) * 0.08; break;
    case 'crouch': lL = -0.9; lR = -0.9; aL = 0.4; aR = 0.4; bodyY = -0.35; lean = 0.35; break;
    case 'slide': lL = -1.4; lR = -0.2; aL = -0.6; aR = 0.8; lean = -0.5; bodyY = -0.55; break;
    case 'air': aL = -0.6; aR = -0.4; aLz = -0.7; aRz = 0.7; lL = -0.6; lR = 0.3; break;
    case 'swing': aR = -2.9; aRz = 0.1; aL = 0.3; aLz = -0.6; lL = -0.9 + s * 0.2; lR = 0.2; lean = 0.15; break;
    case 'zip': aR = -2.6; aL = -2.6; lL = -0.4; lR = -0.2; lean = 0.4; break;
    case 'climb': aL = -2.4 + s * 0.6; aR = -2.4 - s * 0.6; lL = -0.6 - s * 0.4; lR = -0.6 + s * 0.4; lean = 0.2; break;
    case 'hang': aL = -2.9; aR = -2.9; lL = 0.1; lR = -0.1; break;
    case 'wallrunL': aL = -1.2; aR = s * 0.8; lL = -s * 0.9; lR = s * 0.9; roll = 0.45; break;
    case 'wallrunR': aR = -1.2; aL = s * 0.8; lL = -s * 0.9; lR = s * 0.9; roll = -0.45; break;
    case 'punch': aR = -1.57; aL = 0.3; lean = 0.2; lL = 0.3; lR = -0.3; break;
    case 'kick': lR = -1.5; aL = 0.6; aR = -0.6; lean = -0.2; break;
    case 'stunned': aL = 0.2 + s * 0.2; aR = 0.2 - s * 0.2; aLz = -0.4; aRz = 0.4; lean = -0.15 + s * 0.05; break;
    case 'down': lean = -1.5; bodyY = -0.75; aLz = -1.2; aRz = 1.2; break;
    case 'webbed': aLz = -0.05; aRz = 0.05; lL = 0; lR = 0; break;
    case 'ride': lL = -0.3; lR = 0.2; aL = 0.2; aR = 0.1; aLz = -0.3; aRz = 0.3; lean = 0.15; break;
    case 'bike': lL = -1.0 + s * 0.6; lR = -1.0 - s * 0.6; aL = -1.0; aR = -1.0; lean = 0.45; bodyY = -0.1; break;
    case 'cheer': aL = -2.8 + s * 0.2; aR = -2.8 - s * 0.2; bodyY = Math.abs(s) * 0.1; break;
    case 'aim': aR = -1.57; aL = -1.3; aLz = 0.3; break;
    case 'cower': aL = -2.2; aR = -2.2; aLz = 0.5; aRz = -0.5; lL = -0.8; lR = -0.8; bodyY = -0.3; lean = 0.4; break;
    case 'glide': aL = -1.4; aR = -1.4; aLz = -0.8; aRz = 0.8; lL = 0.2; lR = -0.2; lean = 0.3; break;
    default: aL = s * 0.04; aR = -s * 0.04; bodyY = s * 0.01;
  }
  const k = 1 - Math.exp(-14 * dt);
  const lerpR = (o, x, z) => { o.rotation.x += (x - o.rotation.x) * k; o.rotation.z += ((z || 0) - o.rotation.z) * k; };
  lerpR(p.armL, aL, aLz); lerpR(p.armR, aR, aRz); lerpR(p.legL, lL); lerpR(p.legR, lR);
  p.torso.rotation.x += (lean * 0.5 - p.torso.rotation.x) * k;
  p.torso.rotation.z += (roll * 0.4 - p.torso.rotation.z) * k;
  const yOff = bodyY;
  p.torso.position.y += (yOff - p.torso.position.y) * k;
  p.armL.position.y = 1.42 + p.torso.position.y; p.armR.position.y = 1.42 + p.torso.position.y;
  if (pose === 'down') { ch.root.rotation.x += (-1.45 - ch.root.rotation.x) * k; }
  else ch.root.rotation.x += (0 - ch.root.rotation.x) * k;
  ch.root.rotation.z += (roll - ch.root.rotation.z) * k;
}

// First-person viewmodel: two gloved forearms with wrist launchers.
export function buildViewModel(pal) {
  const P = C(pal.primary || '#2a9d9a'), S = C(pal.secondary || '#e4573d'), A = C(pal.accent || '#f2c14e');
  const mat = comicMaterial({ atlas: false });
  const g = new THREE.Group();
  const hands = {};
  for (const side of [-1, 1]) {
    const b = new GeoBuilder();
    b.cbox(0, 0, 0.18, 0.09, 0.09, 0.38, P);
    b.cbox(0, 0, -0.04, 0.11, 0.11, 0.14, S);
    b.cbox(0, 0.06, -0.02, 0.05, 0.03, 0.1, A);           // launcher nozzle
    b.cbox(0, -0.01, -0.13, 0.1, 0.08, 0.09, S);          // fist
    b.cbox(0, 0.03, -0.17, 0.035, 0.035, 0.035, A);
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
  dst.c.push(...src.c); dst.uv.push(...src.uv); dst.t.push(...src.t);
}
