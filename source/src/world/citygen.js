// Procedural + data-driven city generator. Input: a city definition from a pack (see packs/base).
// Output: merged per-block chunk meshes, AABB colliders, zip points, sidewalks, lanes, named landmarks.
// Written as a generator (function*) so the loading screen can stream it over frames (no ANR / jank).
import * as THREE from 'three';
import { GeoBuilder, C, shade } from '../render/geo.js';
import { TILE } from '../render/materials.js';
import { Props, appendRotated } from '../render/models.js';
import { rng } from '../core/util.js';

const STYLE_TILE = { deco: TILE.deco, brick: TILE.brick, glass: TILE.glass, office: TILE.office, brownstone: TILE.brownstone, warehouse: TILE.warehouse };
const STYLE_TINT = {
  deco: ['#fff4dc', '#f6e2c0', '#efe0d0'], brick: ['#ffffff', '#f2d8c8', '#e8c0a8'], glass: ['#ffffff', '#e0f0ee'],
  office: ['#ffffff', '#f0ead8', '#e6e0cc'], brownstone: ['#ffffff', '#f0d8c8'], warehouse: ['#ffffff', '#e8d8c8', '#d8e0d0'],
};

export function* generateCity(def, world) {
  const R = rng(def.seed || 1);
  const B = def.blockSize || 44, S = def.street || 14, NX = def.blocks[0], NZ = def.blocks[1];
  const P = B + S, W = NX * P, D = NZ * P;
  const x0 = -W / 2, z0 = -D / 2;
  const out = world.data = {
    def, bounds: { x0: x0 - 8, z0: z0 - 8, x1: x0 + W + 8, z1: z0 + D + 8 }, zipPoints: [], roofs: [], sidewalks: [], lanes: [],
    landmarks: {}, crimeSpots: [], collectibleSpots: [], perches: [], blocks: [], spawn: new THREE.Vector3(0, 0, 0), parks: [],
  };
  const col = world.collision;
  const waterY = -1.6;
  col.floorFn = (x, z) => (x < out.bounds.x0 || x > out.bounds.x1 || z < out.bounds.z0 || z > out.bounds.z1 ? waterY : 0);

  // ---- ground: roads + water ----
  const gb = new GeoBuilder();
  gb.ground(out.bounds.x0, out.bounds.z0, out.bounds.x1, out.bounds.z1, 0, TILE.road, C('#ffffff'), 7);
  const WR = 900;
  const wc = C('#ffffff');
  gb.ground(-WR, -WR, WR, out.bounds.z0, waterY, TILE.water, wc, 12);
  gb.ground(-WR, out.bounds.z1, WR, WR, waterY, TILE.water, wc, 12);
  gb.ground(-WR, out.bounds.z0, out.bounds.x0, out.bounds.z1, waterY, TILE.water, wc, 12);
  gb.ground(out.bounds.x1, out.bounds.z0, WR, out.bounds.z1, waterY, TILE.water, wc, 12);
  // seawall
  const sw = C('#9d8f78');
  gb.box(out.bounds.x0 - 1, waterY, out.bounds.z0 - 1, out.bounds.x1 + 1, 0.01, out.bounds.z0, { color: sw, faces: 8 | 16 });
  gb.box(out.bounds.x0 - 1, waterY, out.bounds.z1, out.bounds.x1 + 1, 0.01, out.bounds.z1 + 1, { color: sw, faces: 4 | 16 });
  gb.box(out.bounds.x0 - 1, waterY, out.bounds.z0, out.bounds.x0, 0.01, out.bounds.z1, { color: sw, faces: 2 | 16 });
  gb.box(out.bounds.x1, waterY, out.bounds.z0, out.bounds.x1 + 1, 0.01, out.bounds.z1, { color: sw, faces: 1 | 16 });
  world.addStatic(gb.build(), 'ground');
  // seawall railings as collision (so you don't accidentally walk into the bay)
  const rail = 1.1;
  col.add(out.bounds.x0 - 1, 0, out.bounds.z0 - 1, out.bounds.x1 + 1, rail, out.bounds.z0 - 0.4, { climb: true, rail: true });
  col.add(out.bounds.x0 - 1, 0, out.bounds.z1 + 0.4, out.bounds.x1 + 1, rail, out.bounds.z1 + 1, { climb: true, rail: true });
  col.add(out.bounds.x0 - 1, 0, out.bounds.z0, out.bounds.x0 - 0.4, rail, out.bounds.z1, { climb: true, rail: true });
  col.add(out.bounds.x1 + 0.4, 0, out.bounds.z0, out.bounds.x1 + 1, rail, out.bounds.z1, { climb: true, rail: true });
  yield 0.1;

  // traffic lanes (center lines of streets)
  for (let i = 0; i <= NX; i++) { const x = x0 + i * P; out.lanes.push({ axis: 'z', c: x, a: z0, b: z0 + D }); }
  for (let j = 0; j <= NZ; j++) { const z = z0 + j * P; out.lanes.push({ axis: 'x', c: z, a: x0, b: x0 + W }); }

  // ---- landmark placement ----
  const reserved = new Map();
  for (const lm of def.landmarks || []) reserved.set(lm.block[0] + ',' + lm.block[1], lm);
  const cx = (NX - 1) / 2, cz = (NZ - 1) / 2, maxR = Math.hypot(cx, cz) || 1;
  const parkChance = def.parks ?? 0.08, plazaChance = def.plazas ?? 0.05;

  let n = 0; const total = NX * NZ;
  for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) {
    const bx0 = x0 + i * P + S / 2, bz0 = z0 + j * P + S / 2, bx1 = bx0 + B, bz1 = bz0 + B;
    const b = new GeoBuilder();
    const blk = { i, j, x0: bx0, z0: bz0, x1: bx1, z1: bz1, kind: 'buildings' };
    out.blocks.push(blk);
    // curb / sidewalk slab
    b.box(bx0, 0, bz0, bx1, 0.22, bz1, { color: C('#ffffff'), side: null, top: TILE.sidewalk, faces: 1 | 2 | 4 | 8 | 16 });
    col.add(bx0, 0, bz0, bx1, 0.22, bz1, { curb: true, climb: false });
    out.sidewalks.push({ x0: bx0 + 1, z0: bz0 + 1, x1: bx1 - 1, z1: bz1 - 1 });
    const lm = reserved.get(i + ',' + j);
    const dist = Math.hypot(i - cx, j - cz) / maxR;
    if (lm) { blk.kind = lm.type; landmark(lm, b, blk, R, col, out); }
    else if (R.chance(parkChance)) { blk.kind = 'park'; park(b, blk, R, col, out); }
    else if (R.chance(plazaChance)) { blk.kind = 'plaza'; plaza(b, blk, R, col, out); }
    else buildings(def, b, blk, dist, R, col, out);
    // street furniture
    for (let k = 0; k < 4; k++) {
      const t = (k + 0.5) / 4;
      Props.lamp(b, bx0 + 0.8, bz0 + B * t); Props.lamp(b, bx1 - 0.8, bz0 + B * t);
    }
    if (R.chance(0.5)) Props.hydrant(b, bx0 + 2, bz0 + 1.2);
    world.addStatic(b.build(), 'block', blk);
    if (++n % 3 === 0) yield 0.1 + 0.75 * (n / total);
  }
  // bridge (optional data)
  if (def.bridge) bridge(def.bridge, out, col, world);
  yield 0.9;
  // spawn: tallest roof near center or provided
  const center = out.roofs.filter((r) => Math.hypot((r.x0 + r.x1) / 2, (r.z0 + r.z1) / 2) < 90).sort((a, b) => b.y - a.y)[0] || out.roofs[0];
  if (center) out.spawn.set((center.x0 + center.x1) / 2, center.y + 0.1, (center.z0 + center.z1) / 2);
  out.roofs.sort((a, b) => a.y - b.y);
  yield 1;
}

function pickStyle(def, R, dist) {
  const st = def.styles || [['brick', 1]];
  return R.weighted(st);
}

function buildings(def, b, blk, dist, R, col, out) {
  const inset = 2.6;
  const lots = [];
  split({ x0: blk.x0 + inset, z0: blk.z0 + inset, x1: blk.x1 - inset, z1: blk.z1 - inset }, 0);
  function split(r, depth) {
    const w = r.x1 - r.x0, d = r.z1 - r.z0;
    if (depth >= 3 || (w < 22 && d < 22) || (depth >= 1 && R.chance(0.3))) { lots.push(r); return; }
    const gap = R.chance(0.35) ? R.range(2, 4) : 0.0; // alleys
    if (w >= d) { const m = r.x0 + w * R.range(0.38, 0.62); split({ ...r, x1: m - gap / 2 }, depth + 1); split({ ...r, x0: m + gap / 2 }, depth + 1); }
    else { const m = r.z0 + d * R.range(0.38, 0.62); split({ ...r, z1: m - gap / 2 }, depth + 1); split({ ...r, z0: m + gap / 2 }, depth + 1); }
  }
  const H = def.heights || { min: 10, max: 70 };
  for (const lot of lots) {
    const style = pickStyle(def, R, dist);
    const centerBoost = Math.pow(1 - dist, H.centerBias ?? 1.4);
    let h = H.min + (H.max - H.min) * (0.15 + 0.85 * centerBoost) * R.range(0.45, 1.05);
    if (style === 'brownstone') h = Math.min(h, R.range(10, 18));
    if (style === 'warehouse') h = Math.min(h, R.range(8, 14));
    h = Math.max(H.min * 0.8, Math.round(h / 3.5) * 3.5);
    building(b, lot, h, style, R, col, out);
  }
}

export function building(b, lot, h, style, R, col, out, opts = {}) {
  const tile = STYLE_TILE[style] ?? TILE.brick;
  const tint = C(R.pick(STYLE_TINT[style] || ['#ffffff']));
  let { x0, z0, x1, z1 } = lot; let y = 0;
  const tiers = opts.tiers ?? (h > 40 && (style === 'deco' || style === 'office') ? R.int(2, 3) : h > 25 && R.chance(0.4) ? 2 : 1);
  for (let t = 0; t < tiers; t++) {
    const th = t === tiers - 1 ? h - y : Math.round((h * (t === 0 ? R.range(0.5, 0.65) : R.range(0.2, 0.3))) / 3.5) * 3.5;
    const top = y + Math.max(3.5, th);
    b.box(x0, y, z0, x1, top, z1, { color: tint, side: tile, top: TILE.roof, colorTop: C('#ffffff'), unit: 3.5, noBottom: true });
    col.add(x0, y, z0, x1, top, z1, { building: true, style });
    // cornice ledge (visual) + roof record
    const cor = shade(tint, 0.75);
    b.box(x0 - 0.35, top - 0.5, z0 - 0.35, x1 + 0.35, top - 0.1, z1 + 0.35, { color: cor, noBottom: false });
    // parapet walls
    const pw = 0.3, ph = 0.9;
    if (!opts.noParapet) {
      const pc = shade(tint, 0.85);
      b.box(x0, top, z0, x1, top + ph, z0 + pw, { color: pc }); b.box(x0, top, z1 - pw, x1, top + ph, z1, { color: pc });
      b.box(x0, top, z0 + pw, x0 + pw, top + ph, z1 - pw, { color: pc }); b.box(x1 - pw, top, z0 + pw, x1, top + ph, z1 - pw, { color: pc });
      col.add(x0, top, z0, x1, top + ph, z0 + pw, { parapet: true }); col.add(x0, top, z1 - pw, x1, top + ph, z1, { parapet: true });
      col.add(x0, top, z0 + pw, x0 + pw, top + ph, z1 - pw, { parapet: true }); col.add(x1 - pw, top, z0 + pw, x1, top + ph, z1 - pw, { parapet: true });
    }
    out.roofs.push({ x0, z0, x1, z1, y: top, style });
    // zip points: corners + edge midpoints on top of parapet
    const zy = top + 1.0;
    out.zipPoints.push([x0, zy, z0], [x1, zy, z0], [x0, zy, z1], [x1, zy, z1], [(x0 + x1) / 2, zy, z0], [(x0 + x1) / 2, zy, z1], [x0, zy, (z0 + z1) / 2], [x1, zy, (z0 + z1) / 2]);
    // rooftop props
    if (t === tiers - 1) {
      const rw = x1 - x0, rd = z1 - z0;
      if (rw > 8 && rd > 8) {
        if (R.chance(0.35)) { const wx = R.range(x0 + 3, x1 - 3), wz = R.range(z0 + 3, z1 - 3); Props.waterTower(b, wx, top, wz); col.add(wx - 1.7, top + 3, wz - 1.7, wx + 1.7, top + 6.2, wz + 1.7, { prop: true }); }
        if (R.chance(0.6)) { const ax = R.range(x0 + 2, x1 - 2), az = R.range(z0 + 2, z1 - 2); Props.acUnit(b, ax, top, az); col.add(ax - 0.8, top, az - 0.6, ax + 0.8, top + 1.2, az + 0.6, { prop: true }); }
        if (R.chance(0.3)) Props.antenna(b, R.range(x0 + 1, x1 - 1), top, R.range(z0 + 1, z1 - 1), R.range(4, 9));
        if (R.chance(0.12) && h < 40) { const by = top; const bx = (x0 + x1) / 2, bz = (z0 + z1) / 2; Props.billboard(b, bx, by, bz, R.pick([0, Math.PI / 2]), R.pick(['#e4573d', '#2a9d9a', '#f2c14e']), R.pick(['#fff4dc', '#1d1712'])); }
        out.collectibleSpots.push([R.range(x0 + 2, x1 - 2), top + 1.2, R.range(z0 + 2, z1 - 2)]);
        out.perches.push([x0 + 0.15, top + ph, (z0 + z1) / 2]);
      }
      if (style === 'deco' && h > 50 && R.chance(0.6)) { const m = Math.min(x1 - x0, z1 - z0) * 0.3; const cxx = (x0 + x1) / 2, czz = (z0 + z1) / 2; b.box(cxx - m, top, czz - m, cxx + m, top + 4, czz + m, { color: tint, side: tile, top: TILE.roof }); col.add(cxx - m, top, czz - m, cxx + m, top + 4, czz + m, {}); b.pyramid(cxx - m, top + 4, czz - m, cxx + m, top + 4 + m * 2.5, czz + m, C('#c9a23a')); }
    }
    // storefront awnings at street level for brick/brownstone
    if (t === 0 && (style === 'brick' || style === 'brownstone' || style === 'office') && R.chance(0.5)) {
      const ac = C(R.pick(['#e4573d', '#2a9d9a', '#f2c14e', '#6b4fa0']));
      b.box(x0 + 1, 3.0, z0 - 1.4, x1 - 1, 3.3, z0, { color: ac });
      col.add(x0 + 1, 3.0, z0 - 1.4, x1 - 1, 3.3, z0, { awning: true });
      out.crimeSpots.push([(x0 + x1) / 2, 0.25, z0 - 2.2, 'store', style]);
    }
    // setback for next tier
    const sb = R.range(1.5, 3.5);
    if (x1 - x0 > 8 + sb * 2 && z1 - z0 > 8 + sb * 2) { x0 += sb; x1 -= sb; z0 += sb; z1 -= sb; }
    y = top;
  }
}

function park(b, blk, R, col, out) {
  const { x0, z0, x1, z1 } = blk;
  b.ground(x0 + 2, z0 + 2, x1 - 2, z1 - 2, 0.23, TILE.grass, C('#ffffff'), 6);
  out.parks.push(blk);
  for (let k = 0; k < 10; k++) {
    const tx = R.range(x0 + 5, x1 - 5), tz = R.range(z0 + 5, z1 - 5), s = R.range(0.9, 1.6);
    Props.tree(b, tx, tz, s); col.add(tx - 0.2 * s, 0, tz - 0.2 * s, tx + 0.2 * s, 2.4 * s, tz + 0.2 * s, {});
    col.add(tx - 1.2 * s, 2.2 * s, tz - 1.2 * s, tx + 1.2 * s, 4.2 * s, tz + 1.2 * s, { tree: true, seeThrough: true });
  }
  for (let k = 0; k < 4; k++) Props.bench(b, R.range(x0 + 6, x1 - 6), R.range(z0 + 6, z1 - 6), R.range(0, Math.PI));
  out.crimeSpots.push([(x0 + x1) / 2, 0.25, (z0 + z1) / 2, 'park']);
  out.collectibleSpots.push([(x0 + x1) / 2, 1.2, (z0 + z1) / 2]);
}
function plaza(b, blk, R, col, out) {
  const { x0, z0, x1, z1 } = blk, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  b.cyl(cx, 0.22, cz, 6, 0.8, C('#bfb39b'), 10); b.cyl(cx, 0.25, cz, 5.3, 0.65, C('#5fa3a8'), 10);
  b.cbox(cx, 2.5, cz, 1.2, 3.5, 1.2, C('#bfb39b')); b.cbox(cx, 5.2, cz, 0.8, 2, 0.8, C('#c9a23a'));
  col.add(cx - 6, 0, cz - 6, cx + 6, 1.0, cz + 6, {}); col.add(cx - 0.6, 0, cz - 0.6, cx + 0.6, 6.2, cz + 0.6, {});
  for (let k = 0; k < 6; k++) Props.bench(b, cx + Math.cos(k) * 12, cz + Math.sin(k) * 12, k);
  out.crimeSpots.push([cx + 9, 0.25, cz, 'plaza']);
  out.collectibleSpots.push([cx, 7.5, cz]);
}

function landmark(lm, b, blk, R, col, out) {
  const { x0, z0, x1, z1 } = blk, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  const t = lm.type;
  const rec = { type: t, name: lm.name || t, pos: new THREE.Vector3(cx, 0, cz), block: blk };
  out.landmarks[lm.id || t] = rec;
  if (t === 'clocktower') {
    building(b, { x0: x0 + 4, z0: z0 + 4, x1: x1 - 4, z1: z1 - 4 }, 21, 'deco', R, col, out, { tiers: 1 });
    const s = 7, base = 21, top = base + (lm.height || 78);
    b.box(cx - s, base, cz - s, cx + s, top, cz + s, { color: C('#efe0c0'), side: TILE.deco, top: TILE.roof });
    col.add(cx - s, base, cz - s, cx + s, top, cz + s, { building: true });
    const fc = C('#fff2b0');
    for (const [dx, dz, w, d] of [[0, s + 0.05, 8, 0.1], [0, -s - 0.05, 8, 0.1], [s + 0.05, 0, 0.1, 8], [-s - 0.05, 0, 0.1, 8]]) {
      b.cbox(cx + dx, top - 7, cz + dz, w, 8, d, fc);
      b.cbox(cx + dx * 1.01, top - 7, cz + dz * 1.01, Math.max(w * 0.08, 0.12), 3.2, Math.max(d * 0.08, 0.12), C('#1d1712'));
    }
    b.box(cx - s - 0.6, top, cz - s - 0.6, cx + s + 0.6, top + 1.2, cz + s + 0.6, { color: C('#c9a23a') });
    col.add(cx - s - 0.6, top, cz - s - 0.6, cx + s + 0.6, top + 1.2, cz + s + 0.6, {});
    b.pyramid(cx - s, top + 1.2, cz - s, cx + s, top + 22, cz + s, C('#3f7f7a'));
    rec.top = new THREE.Vector3(cx, top + 1.3, cz);
    out.roofs.push({ x0: cx - s, z0: cz - s, x1: cx + s, z1: cz + s, y: top + 1.2, style: 'deco' });
  } else if (t === 'bank' || t === 'pawnshop' || t === 'gallery' || t === 'museum') {
    const h = t === 'bank' ? 28 : t === 'museum' ? 18 : 14;
    const style = t === 'bank' ? 'deco' : t === 'museum' ? 'deco' : 'brick';
    building(b, { x0: x0 + 4, z0: z0 + 6, x1: x1 - 4, z1: z1 - 4 }, h, style, R, col, out, { tiers: 1 });
    // columns + sign
    for (let k = 0; k < 6; k++) { const x = x0 + 7 + k * ((x1 - x0 - 14) / 5); b.cbox(x, 4, z0 + 4.6, 1, 8, 1, C('#efe6d0')); col.add(x - 0.5, 0, z0 + 4.1, x + 0.5, 8, z0 + 5.1, {}); }
    b.cbox(cx, 9, z0 + 4.4, (x1 - x0) - 10, 2, 0.8, C(t === 'bank' ? '#c9a23a' : '#e4573d'));
    rec.door = new THREE.Vector3(cx, 0.25, z0 + 2.5);
    out.crimeSpots.push([cx, 0.25, z0 + 1.8, t]);
  } else if (t === 'rooftopGarden') {
    building(b, { x0: x0 + 4, z0: z0 + 4, x1: x1 - 4, z1: z1 - 4 }, lm.height || 24, 'brownstone', R, col, out, { tiers: 1 });
    const y = lm.height || 24;
    b.ground(x0 + 6, z0 + 6, x1 - 6, z1 - 6, y + 0.05, TILE.grass, C('#ffffff'), 4);
    for (let k = 0; k < 6; k++) { const px = R.range(x0 + 8, x1 - 8), pz = R.range(z0 + 8, z1 - 8); Props.tree(b, px, pz, 0.6); }
    // pigeon coop
    b.box(cx - 2, y, cz - 2, cx + 2, y + 2.4, cz + 2, { color: C('#ffffff'), side: TILE.wood, top: TILE.wood, unit: 1.2 });
    col.add(cx - 2, y, cz - 2, cx + 2, y + 2.4, cz + 2, {});
    rec.top = new THREE.Vector3(cx + 4, y + 0.1, cz);
  } else if (t === 'warehouseYard' || t === 'docks') {
    for (let k = 0; k < 3; k++) {
      const wx0 = x0 + 3 + k * ((x1 - x0 - 6) / 3);
      building(b, { x0: wx0 + 1, z0: z0 + 4, x1: wx0 + (x1 - x0 - 6) / 3 - 1, z1: z0 + 22 }, R.range(8, 12), 'warehouse', R, col, out, { tiers: 1 });
    }
    for (let k = 0; k < 10; k++) {
      const px = R.range(x0 + 4, x1 - 6), pz = R.range(z0 + 26, z1 - 4), stack = R.int(1, 3);
      const cc = C(R.pick(['#c0462e', '#2a6f8a', '#c9a23a', '#4f7a3a']));
      b.box(px, 0.22, pz, px + 6, 0.22 + 2.6 * stack, pz + 2.5, { color: cc });
      col.add(px, 0, pz, px + 6, 0.22 + 2.6 * stack, pz + 2.5, { container: true });
    }
    for (let k = 0; k < 8; k++) Props.crate(b, R.range(x0 + 4, x1 - 4), 0.22, R.range(z0 + 24, z1 - 4));
    // crane
    const kx = x1 - 8, kz = z1 - 8;
    b.box(kx - 1, 0, kz - 1, kx + 1, 30, kz + 1, { color: C('#e0a02a') }); col.add(kx - 1, 0, kz - 1, kx + 1, 30, kz + 1, {});
    b.box(kx - 22, 30, kz - 0.8, kx + 8, 31.6, kz + 0.8, { color: C('#e0a02a') }); col.add(kx - 22, 30, kz - 0.8, kx + 8, 31.6, kz + 0.8, {});
    rec.door = new THREE.Vector3(cx, 0.25, z0 + 26);
    out.crimeSpots.push([cx, 0.25, z0 + 28, 'docks']);
  } else if (t === 'tower') {
    building(b, { x0: x0 + 6, z0: z0 + 6, x1: x1 - 6, z1: z1 - 6 }, lm.height || 110, 'glass', R, col, out, { tiers: 3 });
    rec.top = new THREE.Vector3(cx, (lm.height || 110) + 0.2, cz);
  } else if (t === 'park') {
    park(b, blk, R, col, out);
  }
}

function bridge(br, out, col, world) {
  const b = new GeoBuilder();
  const z0 = out.bounds.z1, len = br.length || 260, w = 14, x = br.x || 0, deckY = 12;
  const tan = C('#a9473a');
  b.box(x - w / 2, deckY - 1.2, z0, x + w / 2, deckY, z0 + len, { color: C('#7b6f62'), top: TILE.road, unit: 7 });
  col.add(x - w / 2, deckY - 1.2, z0, x + w / 2, deckY, z0 + len, { building: true });
  // ramp down to street
  for (let k = 0; k < 12; k++) {
    const y = deckY * (1 - (k + 1) / 13); const zz = z0 - (k + 1) * 3;
    b.box(x - w / 2, 0, zz, x + w / 2, y, zz + 3, { color: C('#7b6f62'), top: TILE.road, unit: 7 });
    col.add(x - w / 2, 0, zz, x + w / 2, y, zz + 3, {});
  }
  for (const zt of [z0 + len * 0.25, z0 + len * 0.75]) {
    for (const sx of [-1, 1]) {
      b.box(x + sx * (w / 2 + 1) - 1.2, -8, zt - 1.2, x + sx * (w / 2 + 1) + 1.2, 60, zt + 1.2, { color: tan });
      col.add(x + sx * (w / 2 + 1) - 1.2, -8, zt - 1.2, x + sx * (w / 2 + 1) + 1.2, 60, zt + 1.2, { building: true });
    }
    b.box(x - w / 2 - 2.2, 56, zt - 1.2, x + w / 2 + 2.2, 59, zt + 1.2, { color: tan }); col.add(x - w / 2 - 2.2, 56, zt - 1.2, x + w / 2 + 2.2, 59, zt + 1.2, {});
    b.box(x - w / 2 - 2.2, 30, zt - 1, x + w / 2 + 2.2, 32, zt + 1, { color: tan }); col.add(x - w / 2 - 2.2, 30, zt - 1, x + w / 2 + 2.2, 32, zt + 1, {});
    out.zipPoints.push([x, 60, zt], [x, 33, zt]);
  }
  // suspension cables (visual) as thin boxes stepping
  for (const sx of [-1, 1]) for (let k = 0; k < 24; k++) {
    const zz = z0 + (k / 24) * len; const yy = deckY + 6 + 40 * Math.pow(Math.abs(((zz - z0) / len) * 2 - 1), 2) * 0.8;
    b.cbox(x + sx * (w / 2 + 1), yy, zz, 0.3, 0.3, len / 24 + 0.3, C('#2b2b2b'));
    b.cbox(x + sx * (w / 2 + 1), (yy + deckY) / 2, zz, 0.1, yy - deckY, 0.1, C('#2b2b2b'));
  }
  // bridge railing
  col.add(x - w / 2 - 0.3, deckY, z0, x - w / 2, deckY + 1.1, z0 + len, { rail: true }); col.add(x + w / 2, deckY, z0, x + w / 2 + 0.3, deckY + 1.1, z0 + len, { rail: true });
  b.box(x - w / 2 - 0.3, deckY, z0, x - w / 2, deckY + 1.1, z0 + len, { color: tan }); b.box(x + w / 2, deckY, z0, x + w / 2 + 0.3, deckY + 1.1, z0 + len, { color: tan });
  // far shore strip
  const fz = z0 + len;
  b.box(x - 60, -2, fz, x + 60, deckY, fz + 40, { color: C('#8a7d68'), top: TILE.grass, unit: 6 }); col.add(x - 60, -2, fz, x + 60, deckY, fz + 40, {});
  const prev = col.floorFn;
  col.floorFn = (px, pz) => (px > x - w / 2 && px < x + w / 2 && pz > z0 - 40 && pz < fz ? prev(px, pz) : prev(px, pz));
  out.landmarks.bridge = { type: 'bridge', name: br.name || 'Bay Bridge', pos: new THREE.Vector3(x, deckY, z0 + len / 2), top: new THREE.Vector3(x, 59.2, z0 + len * 0.25) };
  out.roofs.push({ x0: x - w / 2, z0, x1: x + w / 2, z1: z0 + len, y: deckY, style: 'bridge' });
  world.addStatic(b.build(), 'bridge');
}
