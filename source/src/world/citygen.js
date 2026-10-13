// Procedural + data-driven city generator. Input: a city definition from a pack (see packs/base).
// Output: merged per-block chunk meshes, AABB colliders, zip points, sidewalks, lanes, named landmarks.
// Written as a generator (function*) so the loading screen can stream it over frames (no ANR / jank).
import * as THREE from 'three';
import { GeoBuilder, C, shade } from '../render/geo.js';
import { TILE } from '../render/materials.js';
import { Props, appendRotated } from '../render/models.js';
import { rng } from '../core/util.js';

const STYLE_TILE = { deco: TILE.deco, brick: TILE.brick, glass: TILE.glass, office: TILE.office, brownstone: TILE.brownstone, warehouse: TILE.warehouse,
  tenement: TILE.tenement, lantern: TILE.lantern, nightglass: TILE.nightglass, stone: TILE.stone, brickdark: TILE.brickdark };
const STYLE_TINT = {
  deco: ['#fff4dc', '#f6e2c0', '#efe0d0'], brick: ['#ffffff', '#f2d8c8', '#e8c0a8'], glass: ['#ffffff', '#e0f0ee'],
  office: ['#ffffff', '#f0ead8', '#e6e0cc'], brownstone: ['#ffffff', '#f0d8c8'], warehouse: ['#ffffff', '#e8d8c8', '#d8e0d0'],
  tenement: ['#ffffff', '#f2d0c0', '#e8d8c8'], lantern: ['#ffffff', '#ffd8c8', '#f0f0d0', '#d8f0e0'], nightglass: ['#ffffff', '#d8e8ff'],
  stone: ['#ffffff', '#f0ece0'], brickdark: ['#ffffff', '#e8d0c8'],
};
const FIRE_ESCAPE = new Set(['brick', 'tenement', 'brownstone', 'brickdark']);
const IRON = C('#2b2a2e');
const SIDES = ['x0', 'x1', 'z0', 'z1'];

export function* generateCity(def, world) {
  const R = rng(def.seed || 1);
  const B = def.blockSize || 44, S = def.street || 14, NX = def.blocks[0], NZ = def.blocks[1];
  const P = B + S, W = NX * P, D = NZ * P;
  const x0 = -W / 2, z0 = -D / 2;
  const out = world.data = {
    def, bounds: { x0: x0 - 8, z0: z0 - 8, x1: x0 + W + 8, z1: z0 + D + 8 }, zipPoints: [], roofs: [], sidewalks: [], lanes: [],
    landmarks: {}, crimeSpots: [], collectibleSpots: [], perches: [], blocks: [], spawn: new THREE.Vector3(0, 0, 0), parks: [],
    exits: [], edgeSpawns: {}, vents: [], cacheSpots: [], lakes: [], landRects: [], subways: [],
  };
  const bd = out.bounds;
  const col = world.collision;
  const waterY = -1.6;
  const edges = def.edges || {};
  const EDGE = 70; // depth of the neighbouring-district strip on land edges
  // land strips (neighbouring districts continue past the edge)
  for (const sd of SIDES) {
    const e = edges[sd]; if (!e || e === 'water') continue;
    const r = sd === 'x0' ? { x0: bd.x0 - EDGE, x1: bd.x0, z0: bd.z0, z1: bd.z1 } : sd === 'x1' ? { x0: bd.x1, x1: bd.x1 + EDGE, z0: bd.z0, z1: bd.z1 }
      : sd === 'z0' ? { x0: bd.x0, x1: bd.x1, z0: bd.z0 - EDGE, z1: bd.z0 } : { x0: bd.x0, x1: bd.x1, z0: bd.z1, z1: bd.z1 + EDGE };
    r.side = sd; r.to = e.to; r.label = e.label; out.landRects.push(r);
  }
  const inRect = (x, z, r) => x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1;
  col.floorFn = (x, z) => {
    for (const l of out.lakes) if (inRect(x, z, l)) return waterY;
    if (x >= bd.x0 && x <= bd.x1 && z >= bd.z0 && z <= bd.z1) return 0;
    for (const r of out.landRects) if (inRect(x, z, r)) return 0;
    return waterY;
  };

  // ---- ground: roads + water ----
  const gb = new GeoBuilder();
  gb.ground(bd.x0, bd.z0, bd.x1, bd.z1, 0, TILE.road, C('#ffffff'), 7);
  const WR = 900;
  gb.ground(-WR, -WR, WR, WR, waterY, TILE.water, C('#ffffff'), 12);
  const sw = C('#9d8f78'); const rail = 1.1;
  const wall = { x0: [bd.x0 - 1, bd.z0, bd.x0, bd.z1, 2], x1: [bd.x1, bd.z0, bd.x1 + 1, bd.z1, 1], z0: [bd.x0 - 1, bd.z0 - 1, bd.x1 + 1, bd.z0, 8], z1: [bd.x0 - 1, bd.z1, bd.x1 + 1, bd.z1 + 1, 4] };
  for (const sd of SIDES) {
    const e = edges[sd]; const [a0, b0, a1, b1, face] = wall[sd];
    if (!e || e === 'water') {
      gb.box(a0, waterY, b0, a1, 0.01, b1, { color: sw, faces: face | 16 });
      const t = 0.6; // railing just inside the seawall
      if (sd === 'x0') col.add(a0, 0, b0, a1 - t + 0.6, rail, b1, { climb: true, rail: true });
      if (sd === 'x1') col.add(a0 + t - 0.6, 0, b0, a1, rail, b1, { climb: true, rail: true });
      if (sd === 'z0') col.add(a0, 0, b0, a1, rail, b1 - t + 0.6, { climb: true, rail: true });
      if (sd === 'z1') col.add(a0, 0, b0 + t - 0.6, a1, rail, b1, { climb: true, rail: true });
    }
  }
  world.addStatic(gb.build(), 'ground');
  yield 0.08;
  for (const r of out.landRects) { edgeStrip(r, out, col, world, R, def); }
  yield 0.12;

  // traffic lanes (center lines of streets), minus lanes swallowed by a mega park
  const mp = def.megaPark; // [i0, j0, i1, j1] inclusive block range
  const inMega = (i, j) => mp && i >= mp[0] && i <= mp[2] && j >= mp[1] && j <= mp[3];
  for (let i = 0; i <= NX; i++) { if (mp && i > mp[0] && i <= mp[2]) continue; const x = x0 + i * P; out.lanes.push({ axis: 'z', c: x, a: z0, b: z0 + D }); }
  for (let j = 0; j <= NZ; j++) { if (mp && j > mp[1] && j <= mp[3]) continue; const z = z0 + j * P; out.lanes.push({ axis: 'x', c: z, a: x0, b: x0 + W }); }

  // ---- landmark placement ----
  const reserved = new Map();
  for (const lm of def.landmarks || []) reserved.set(lm.block[0] + ',' + lm.block[1], lm);
  const cx = (NX - 1) / 2, cz = (NZ - 1) / 2, maxR = Math.hypot(cx, cz) || 1;
  const parkChance = def.parks ?? 0.08, plazaChance = def.plazas ?? 0.05;

  let n = 0; const total = NX * NZ;
  for (let i = 0; i < NX; i++) for (let j = 0; j < NZ; j++) {
    if (inMega(i, j)) { n++; continue; }
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
    if (lm) { blk.kind = lm.type; landmark(lm, b, blk, R, col, out, def); }
    else if (R.chance(parkChance)) { blk.kind = 'park'; park(b, blk, R, col, out); }
    else if (R.chance(plazaChance)) { blk.kind = 'plaza'; plaza(b, blk, R, col, out); }
    else buildings(def, b, blk, dist, R, col, out);
    // street furniture
    for (let k = 0; k < 4; k++) {
      const t = (k + 0.5) / 4;
      Props.lamp(b, bx0 + 0.8, bz0 + B * t); Props.lamp(b, bx1 - 0.8, bz0 + B * t);
    }
    if (R.chance(0.5)) Props.hydrant(b, bx0 + 2, bz0 + 1.2);
    if (R.chance(def.subway ?? 0.25)) { subwayEntrance(b, bx0 + 3.5, bz1 - 3.5, col); out.subways.push([bx0 + 2.2, 0.25, bz1 - 3.5]); }
    if (def.lanternStrings && R.chance(0.7)) lanternString(b, bx0 + 4, bx1 - 4, bz0 - S / 2, R);
    if (R.chance(def.steam ?? 0.35)) out.vents.push([bx0 - S / 2 + R.range(-2, 2), 0.05, R.range(bz0, bz1)]);
    world.addStatic(b.build(), 'block', blk);
    if (++n % 3 === 0) yield 0.12 + 0.72 * (n / total);
  }
  if (mp) { megaPark(def, out, col, world, R, { x0: x0 + mp[0] * P + S / 2, z0: z0 + mp[1] * P + S / 2, x1: x0 + (mp[2] + 1) * P - S / 2, z1: z0 + (mp[3] + 1) * P - S / 2 }); yield 0.86; }
  if (def.bridge) bridge(def.bridge, out, col, world);
  if (def.statue) beaconStatue(def.statue, out, world, col);
  yield 0.9;
  // supply caches: a handful of rooftops
  const roofs = out.roofs.filter((r) => r.x1 - r.x0 > 7 && r.z1 - r.z0 > 7 && r.y > 8 && r.x0 > bd.x0 + 4 && r.x1 < bd.x1 - 4 && r.z0 > bd.z0 + 4 && r.z1 < bd.z1 - 4);
  for (let k = 0; k < Math.min(def.caches ?? 6, roofs.length); k++) { const r = roofs[(R() * roofs.length) | 0]; out.cacheSpots.push([(r.x0 + r.x1) / 2 + R.range(-2, 2), r.y, (r.z0 + r.z1) / 2 + R.range(-2, 2)]); }
  // edge spawns (arriving from a neighbouring district)
  const midX = x0 + Math.round(NX / 2) * P, midZ = z0 + Math.round(NZ / 2) * P;
  out.edgeSpawns = { x0: [bd.x0 + 10, 0.3, midZ, -Math.PI / 2], x1: [bd.x1 - 10, 0.3, midZ, Math.PI / 2], z0: [midX, 0.3, bd.z0 + 10, 0], z1: [midX, 0.3, bd.z1 - 10, Math.PI] };
  // spawn: tallest roof near center or provided
  const center = out.roofs.filter((r) => Math.hypot((r.x0 + r.x1) / 2, (r.z0 + r.z1) / 2) < 90 && r.style !== 'bridge').sort((a, b) => b.y - a.y)[0] || out.roofs[0];
  if (center) out.spawn.set((center.x0 + center.x1) / 2, center.y + 0.1, (center.z0 + center.z1) / 2);
  out.roofs.sort((a, b) => a.y - b.y);
  yield 1;
}

// Neighbouring district strip: real (collidable, swingable) skyline + a travel exit zone.
function edgeStrip(r, out, col, world, R, def) {
  const b = new GeoBuilder();
  b.ground(r.x0, r.z0, r.x1, r.z1, 0, TILE.road, C('#ffffff'), 7);
  const alongX = r.side === 'z0' || r.side === 'z1';
  const len = alongX ? r.x1 - r.x0 : r.z1 - r.z0;
  const styles = def.edgeStyles || def.styles || [['brick', 1]];
  // two rows of buildings with a street in between (the street continues our grid)
  for (let row = 0; row < 2; row++) {
    let t = 4;
    while (t < len - 8) {
      const w = R.range(14, 26); const d = R.range(16, 24); const h = Math.round(R.range(14, (def.heights ? def.heights.max : 60) * 0.85) / 3.5) * 3.5;
      const depth0 = 20 + row * 28; // distance from boundary
      let lot;
      if (r.side === 'x0') lot = { x0: r.x1 - depth0 - d, x1: r.x1 - depth0, z0: r.z0 + t, z1: r.z0 + t + w };
      else if (r.side === 'x1') lot = { x0: r.x0 + depth0, x1: r.x0 + depth0 + d, z0: r.z0 + t, z1: r.z0 + t + w };
      else if (r.side === 'z0') lot = { x0: r.x0 + t, x1: r.x0 + t + w, z0: r.z1 - depth0 - d, z1: r.z1 - depth0 };
      else lot = { x0: r.x0 + t, x1: r.x0 + t + w, z0: r.z0 + depth0, z1: r.z0 + depth0 + d };
      if (R.chance(0.85)) building(b, lot, h, R.weighted(styles), R, col, out, { tiers: 1, noParapet: true, edge: true });
      t += w + R.range(10, 16);
    }
  }
  world.addStatic(b.build(), 'edge');
  // exit zone starts a little past the boundary; invisible wall far out stops you leaving the map
  const ex = { ...r };
  const pad = 4;
  if (r.side === 'x0') ex.x1 = r.x1 - pad; if (r.side === 'x1') ex.x0 = r.x0 + pad; if (r.side === 'z0') ex.z1 = r.z1 - pad; if (r.side === 'z1') ex.z0 = r.z0 + pad;
  out.exits.push({ min: [ex.x0, -5, ex.z0], max: [ex.x1, 400, ex.z1], to: r.to, label: r.label, side: r.side });
  const T = 2;
  if (r.side === 'x0') col.add(r.x0 - T, -5, r.z0, r.x0, 300, r.z1, { invisible: true, seeThrough: true, climb: false });
  if (r.side === 'x1') col.add(r.x1, -5, r.z0, r.x1 + T, 300, r.z1, { invisible: true, seeThrough: true, climb: false });
  if (r.side === 'z0') col.add(r.x0, -5, r.z0 - T, r.x1, 300, r.z0, { invisible: true, seeThrough: true, climb: false });
  if (r.side === 'z1') col.add(r.x0, -5, r.z1, r.x1, 300, r.z1 + T, { invisible: true, seeThrough: true, climb: false });
}

function subwayEntrance(b, x, z, col) {
  const G = C('#2e6b3a');
  b.box(x - 1.3, 0.22, z - 2, x + 1.3, 1.2, z - 1.9, { color: G }); b.box(x - 1.3, 0.22, z + 1.9, x + 1.3, 1.2, z + 2, { color: G });
  b.box(x - 1.4, 0.22, z - 2, x - 1.3, 1.2, z + 2, { color: G });
  for (const dz of [-2, 2]) { b.cbox(x + 1.3, 1.3, z + dz, 0.12, 2.2, 0.12, G); b.cbox(x + 1.3, 2.5, z + dz, 0.4, 0.4, 0.4, C('#9fe0a0')); }
  b.box(x - 1.2, 0.18, z - 1.8, x + 1.2, 0.23, z + 1.8, { color: C('#1d1712') });
  col.add(x - 1.4, 0.22, z - 2, x + 1.3, 1.2, z - 1.9, {}); col.add(x - 1.4, 0.22, z + 1.9, x + 1.3, 1.2, z + 2, {});
}
function lanternString(b, xa, xb, z, R) {
  const cols = ['#e4573d', '#f2c14e', '#e4573d', '#ff8ab0', '#f2c14e'];
  const y0 = R.range(7, 9.5);
  const n = Math.floor((xb - xa) / 2.6);
  for (let k = 0; k <= n; k++) {
    const t = k / n, x = xa + (xb - xa) * t, y = y0 - Math.sin(t * Math.PI) * 1.2;
    b.cbox(x, y, z, 0.5, 0.6, 0.5, C(cols[k % cols.length]), { });
    if (k < n) b.cbox(x + 1.3, y - 0.05, z, 2.6, 0.04, 0.04, C('#1d1712'));
  }
}
function fireEscape(b, lot, h, face, col, R) {
  // zig-zag iron balconies up a street-facing wall (classic NY): landable + climbable
  const w = Math.min(4.2, (face === 'z' ? lot.x1 - lot.x0 : lot.z1 - lot.z0) - 2);
  if (w < 3) return;
  const off = R.range(1, (face === 'z' ? lot.x1 - lot.x0 : lot.z1 - lot.z0) - w - 1);
  for (let y = 3.5; y < h - 2; y += 3.5) {
    let x0, x1, z0, z1;
    if (face === 'z') { x0 = lot.x0 + off; x1 = x0 + w; z1 = lot.z0; z0 = z1 - 1.3; }
    else { z0 = lot.z0 + off; z1 = z0 + w; x1 = lot.x0; x0 = x1 - 1.3; }
    b.box(x0, y - 0.08, z0, x1, y, z1, { color: IRON });
    col.add(x0, y - 0.08, z0, x1, y, z1, { fireEscape: true, climb: true });
    // railing
    if (face === 'z') { b.box(x0, y, z0, x1, y + 0.9, z0 + 0.05, { color: IRON, faces: 63 }); b.box(x0, y, z0, x0 + 0.05, y + 0.9, z1, { color: IRON }); b.box(x1 - 0.05, y, z0, x1, y + 0.9, z1, { color: IRON }); }
    else { b.box(x0, y, z0, x0 + 0.05, y + 0.9, z1, { color: IRON }); b.box(x0, y, z0, x1, y + 0.9, z0 + 0.05, { color: IRON }); b.box(x0, y, z1 - 0.05, x1, y + 0.9, z1, { color: IRON }); }
    // diagonal stair (stepped)
    for (let s = 0; s < 5; s++) {
      const sy = y + 0.7 * s / 5 * 5, st = s / 5;
      if (face === 'z') b.box(x0 + 0.3 + st * (w - 1.4), y + st * 3.4, z0 + 0.3, x0 + 0.9 + st * (w - 1.4), y + st * 3.4 + 0.06, z1 - 0.2, { color: IRON });
      else b.box(x0 + 0.3, y + st * 3.4, z0 + 0.3 + st * (w - 1.4), x1 - 0.2, y + st * 3.4 + 0.06, z0 + 0.9 + st * (w - 1.4), { color: IRON });
    }
  }
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
        if (!opts.edge) { out.collectibleSpots.push([R.range(x0 + 2, x1 - 2), top + 1.2, R.range(z0 + 2, z1 - 2)]); out.perches.push([x0 + 0.15, top + ph, (z0 + z1) / 2]); }
      }
      if (style === 'deco' && h > 50 && R.chance(0.6)) { const m = Math.min(x1 - x0, z1 - z0) * 0.3; const cxx = (x0 + x1) / 2, czz = (z0 + z1) / 2; b.box(cxx - m, top, czz - m, cxx + m, top + 4, czz + m, { color: tint, side: tile, top: TILE.roof }); col.add(cxx - m, top, czz - m, cxx + m, top + 4, czz + m, {}); b.pyramid(cxx - m, top + 4, czz - m, cxx + m, top + 4 + m * 2.5, czz + m, C('#c9a23a')); }
    }
    // storefront awnings at street level for brick/brownstone
    if (t === 0 && (style === 'brick' || style === 'brownstone' || style === 'office' || style === 'lantern' || style === 'tenement') && R.chance(style === 'lantern' ? 0.85 : 0.5)) {
      const ac = C(R.pick(style === 'lantern' ? ['#c0362c', '#1e7a4a', '#f2c14e'] : ['#e4573d', '#2a9d9a', '#f2c14e', '#6b4fa0', '#2e6b3a']));
      b.box(x0 + 1, 3.0, z0 - 1.4, x1 - 1, 3.3, z0, { color: ac });
      col.add(x0 + 1, 3.0, z0 - 1.4, x1 - 1, 3.3, z0, { awning: true });
      if (!opts.edge) out.crimeSpots.push([(x0 + x1) / 2, 0.25, z0 - 2.2, 'store', style]);
    }
    if (t === 0 && FIRE_ESCAPE.has(style) && top > 9 && R.chance(opts.edge ? 0.3 : 0.6)) fireEscape(b, { x0, z0, x1, z1 }, top, R.chance(0.6) ? 'z' : 'x', col, R);
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

function landmark(lm, b, blk, R, col, out, def = {}) {
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
  } else if (t === 'tower' && !lm.style) {
    building(b, { x0: x0 + 6, z0: z0 + 6, x1: x1 - 6, z1: z1 - 6 }, lm.height || 110, 'glass', R, col, out, { tiers: 3 });
    rec.top = new THREE.Vector3(cx, (lm.height || 110) + 0.2, cz);
  } else if (t === 'exchange') {
    building(b, { x0: x0 + 4, z0: z0 + 7, x1: x1 - 4, z1: z1 - 4 }, lm.height || 34, 'stone', R, col, out, { tiers: 1 });
    for (let k = 0; k < 8; k++) { const x = x0 + 6 + k * ((x1 - x0 - 12) / 7); b.cbox(x, 6, z0 + 5.6, 1.3, 12, 1.3, C('#efe6d0')); col.add(x - 0.65, 0, z0 + 4.9, x + 0.65, 12, z0 + 6.3, {}); }
    b.hexa([[x0 + 4, 12, z0 + 4.6], [x1 - 4, 12, z0 + 4.6], [x1 - 4, 12, z0 + 7], [x0 + 4, 12, z0 + 7]], [[cx - 1, 17, z0 + 4.6], [cx + 1, 17, z0 + 4.6], [cx + 1, 17, z0 + 7], [cx - 1, 17, z0 + 7]], C('#efe6d0'));
    b.box(x0 + 4, 0.22, z0 + 1.5, x1 - 4, 1.2, z0 + 4.6, { color: C('#d8cdb2') }); col.add(x0 + 4, 0.22, z0 + 1.5, x1 - 4, 1.2, z0 + 4.6, {});
    rec.door = new THREE.Vector3(cx, 0.25, z0 + 0.5); rec.top = new THREE.Vector3(cx, (lm.height || 34) + 0.2, cz + 4);
    out.crimeSpots.push([cx, 0.25, z0 - 1, 'bank']);
  } else if (t === 'theater') {
    building(b, { x0: x0 + 4, z0: z0 + 6, x1: x1 - 4, z1: z1 - 4 }, 22, 'brickdark', R, col, out, { tiers: 1 });
    b.box(x0 + 8, 4, z0 + 1.5, x1 - 8, 7.5, z0 + 6, { color: C('#ffffff'), side: TILE.marquee, top: TILE.marquee, unit: 3.5 });
    col.add(x0 + 8, 4, z0 + 1.5, x1 - 8, 7.5, z0 + 6, {});
    b.box(cx - 1.5, 8, z0 + 4.8, cx + 1.5, 20, z0 + 6, { color: C('#c0362c') }); for (let k = 0; k < 5; k++) b.cbox(cx, 9.5 + k * 2.2, z0 + 4.7, 1.8, 1.6, 0.12, C('#ffe066'));
    out.zipPoints.push([cx, 20.5, z0 + 5.4]);
    rec.door = new THREE.Vector3(cx, 0.25, z0 + 0.5); rec.top = new THREE.Vector3(cx, 22.2, cz + 4);
    out.crimeSpots.push([cx, 0.25, z0 - 1, 'store']);
  } else if (t === 'gate') {
    plaza(b, blk, R, col, out);
    const gx = cx, gz = z0 - 0.5, R2 = C('#c0362c'), Gd = C('#c9a23a');
    for (const s of [-1, 1]) { b.cbox(gx + s * 6, 4.5, gz, 1.2, 9, 1.2, R2); col.add(gx + s * 6 - 0.6, 0, gz - 0.6, gx + s * 6 + 0.6, 9, gz + 0.6, {}); }
    b.cbox(gx, 9.4, gz, 15, 0.8, 2.2, Gd); b.cbox(gx, 10.5, gz, 14, 1.4, 1.4, R2); b.hexa([[gx - 9, 11.2, gz - 1.8], [gx + 9, 11.2, gz - 1.8], [gx + 9, 11.2, gz + 1.8], [gx - 9, 11.2, gz + 1.8]], [[gx - 6, 13, gz - 0.6], [gx + 6, 13, gz - 0.6], [gx + 6, 13, gz + 0.6], [gx - 6, 13, gz + 0.6]], C('#1e7a4a'));
    col.add(gx - 9, 9, gz - 1.8, gx + 9, 13, gz + 1.8, {});
    rec.top = new THREE.Vector3(gx, 13.1, gz); out.zipPoints.push([gx - 8, 12.5, gz], [gx + 8, 12.5, gz]);
  } else if (t === 'diner') {
    const dx0 = x0 + 6, dz0 = z0 + 3, dx1 = cx + 8, dz1 = z0 + 13;
    b.box(dx0, 0.22, dz0, dx1, 4.5, dz1, { color: C('#d8dde0') }); col.add(dx0, 0.22, dz0, dx1, 4.5, dz1, { building: true });
    b.box(dx0 - 0.1, 1.6, dz0 - 0.05, dx1 + 0.1, 3.4, dz0 + 0.1, { color: C('#7fb3b8') }); b.box(dx0 - 0.15, 3.6, dz0 - 0.1, dx1 + 0.15, 4.0, dz1 + 0.1, { color: C('#e4573d') });
    b.box(cx - 4, 4.5, dz0, cx + 4, 6.6, dz0 + 0.4, { color: C('#f2c14e') }); b.cbox(cx, 5.55, dz0 - 0.05, 6.6, 1.2, 0.1, C('#1d1712'));
    out.roofs.push({ x0: dx0, z0: dz0, x1: dx1, z1: dz1, y: 4.5, style: 'diner' });
    building(b, { x0: cx + 11, z0: z0 + 4, x1: x1 - 4, z1: z1 - 4 }, 24, 'tenement', R, col, out, { tiers: 1 });
    rec.door = new THREE.Vector3(cx, 0.25, dz0 - 1.5); out.crimeSpots.push([cx, 0.25, dz0 - 2, 'store']);
  } else if (t === 'church') {
    const sx0 = x0 + 8, sx1 = x1 - 8, sz0 = z0 + 6, sz1 = z1 - 10;
    b.box(sx0, 0.22, sz0, sx1, 16, sz1, { color: C('#ffffff'), side: TILE.stone, top: TILE.roof, unit: 3.5 }); col.add(sx0, 0.22, sz0, sx1, 16, sz1, { building: true });
    b.hexa([[sx0, 16, sz0], [sx1, 16, sz0], [sx1, 16, sz1], [sx0, 16, sz1]], [[cx - 0.5, 23, sz0], [cx + 0.5, 23, sz0], [cx + 0.5, 23, sz1], [cx - 0.5, 23, sz1]], C('#4a5560'));
    b.box(cx - 3.5, 0.22, sz0 - 6, cx + 3.5, 30, sz0, { color: C('#ffffff'), side: TILE.stone, unit: 3.5 }); col.add(cx - 3.5, 0.22, sz0 - 6, cx + 3.5, 30, sz0, { building: true });
    b.pyramid(cx - 3.5, 30, sz0 - 6, cx + 3.5, 46, sz0, C('#4a5560')); b.cbox(cx, 47.5, sz0 - 3, 0.3, 3, 0.3, C('#c9a23a')); b.cbox(cx, 48, sz0 - 3, 1.6, 0.3, 0.3, C('#c9a23a'));
    out.roofs.push({ x0: cx - 3.5, z0: sz0 - 6, x1: cx + 3.5, z1: sz0, y: 30, style: 'stone' }); out.zipPoints.push([cx, 31, sz0 - 6], [cx, 46.5, sz0 - 3]);
    rec.top = new THREE.Vector3(cx, 30.1, sz0 - 3); rec.door = new THREE.Vector3(cx, 0.25, sz0 - 7.5);
  } else if (t === 'home') {
    // Okafor's safehouse walk-up: brownstone with fire escapes + a rooftop hatch (enter the apartment)
    const hx0 = x0 + 5, hz0 = z0 + 5, hx1 = cx + 4, hz1 = cz + 6, h = 21;
    building(b, { x0: hx0, z0: hz0, x1: hx1, z1: hz1 }, h, 'brownstone', R, col, out, { tiers: 1 });
    fireEscape(b, { x0: hx0, z0: hz0, x1: hx1, z1: hz1 }, h, 'z', col, R);
    const tx = (hx0 + hx1) / 2, tz = (hz0 + hz1) / 2;
    b.box(tx - 1.5, h, tz - 1.5, tx + 1.5, h + 1.4, tz + 1.5, { color: C('#2a9d9a') }); b.box(tx - 1.2, h + 1.4, tz - 1.2, tx + 1.2, h + 1.5, tz + 1.2, { color: C('#f2c14e') });
    col.add(tx - 1.5, h, tz - 1.5, tx + 1.5, h + 1.4, tz + 1.5, {});
    rec.top = new THREE.Vector3(tx + 3, h + 0.1, tz); rec.hatch = new THREE.Vector3(tx, h + 0.1, tz + 2.2); rec.home = true;
    building(b, { x0: cx + 7, z0: z0 + 4, x1: x1 - 4, z1: z1 - 4 }, R.range(14, 26), 'tenement', R, col, out, { tiers: 1 });
    building(b, { x0: x0 + 5, z0: cz + 9, x1: cx + 4, z1: z1 - 4 }, R.range(12, 20), 'brick', R, col, out, { tiers: 1 });
  } else if (t === 'tower' && lm.style) {
    building(b, { x0: x0 + 6, z0: z0 + 6, x1: x1 - 6, z1: z1 - 6 }, lm.height || 110, lm.style, R, col, out, { tiers: lm.tiers || 3 });
    rec.top = new THREE.Vector3(cx, (lm.height || 110) + 0.2, cz);
  } else if (t === 'park') {
    park(b, blk, R, col, out);
  }
}

function bridge(br, out, col, world) {
  // Built in a canonical frame (deck runs along +Z from the city edge); swapped onto the X axis when side === 'x1'.
  const swap = br.side === 'x1';
  const G = new GeoBuilder();
  const sw = (x0, y0, z0, x1, y1, z1) => (swap ? [z0, y0, x0, z1, y1, x1] : [x0, y0, z0, x1, y1, z1]);
  const b = { box: (x0, y0, z0, x1, y1, z1, o) => G.box(...sw(x0, y0, z0, x1, y1, z1), o), cbox: (cx, cy, cz, sx, sy, sz, c) => (swap ? G.cbox(cz, cy, cx, sz, sy, sx, c) : G.cbox(cx, cy, cz, sx, sy, sz, c)) };
  const add = (x0, y0, z0, x1, y1, z1, m) => col.add(...sw(x0, y0, z0, x1, y1, z1), m);
  const V = (x, y, z) => (swap ? new THREE.Vector3(z, y, x) : new THREE.Vector3(x, y, z));
  const z0 = swap ? out.bounds.x1 : out.bounds.z1, len = br.length || 260, w = 14, x = br.x || 0, deckY = 12;
  const tan = C('#a9473a');
  b.box(x - w / 2, deckY - 1.2, z0, x + w / 2, deckY, z0 + len, { color: C('#7b6f62'), top: TILE.road, unit: 7 });
  add(x - w / 2, deckY - 1.2, z0, x + w / 2, deckY, z0 + len, { building: true });
  for (let k = 0; k < 12; k++) {
    const y = deckY * (1 - (k + 1) / 13); const zz = z0 - (k + 1) * 3;
    b.box(x - w / 2, 0, zz, x + w / 2, y, zz + 3, { color: C('#7b6f62'), top: TILE.road, unit: 7 });
    add(x - w / 2, 0, zz, x + w / 2, y, zz + 3, {});
  }
  for (const zt of [z0 + len * 0.25, z0 + len * 0.75]) {
    for (const sx of [-1, 1]) {
      b.box(x + sx * (w / 2 + 1) - 1.2, -8, zt - 1.2, x + sx * (w / 2 + 1) + 1.2, 60, zt + 1.2, { color: tan });
      add(x + sx * (w / 2 + 1) - 1.2, -8, zt - 1.2, x + sx * (w / 2 + 1) + 1.2, 60, zt + 1.2, { building: true });
    }
    b.box(x - w / 2 - 2.2, 56, zt - 1.2, x + w / 2 + 2.2, 59, zt + 1.2, { color: tan }); add(x - w / 2 - 2.2, 56, zt - 1.2, x + w / 2 + 2.2, 59, zt + 1.2, {});
    b.box(x - w / 2 - 2.2, 30, zt - 1, x + w / 2 + 2.2, 32, zt + 1, { color: tan }); add(x - w / 2 - 2.2, 30, zt - 1, x + w / 2 + 2.2, 32, zt + 1, {});
    const z1 = V(x, 60, zt), z2 = V(x, 33, zt); out.zipPoints.push([z1.x, z1.y, z1.z], [z2.x, z2.y, z2.z]);
  }
  for (const sx of [-1, 1]) for (let k = 0; k < 24; k++) {
    const zz = z0 + (k / 24) * len; const yy = deckY + 6 + 40 * Math.pow(Math.abs(((zz - z0) / len) * 2 - 1), 2) * 0.8;
    b.cbox(x + sx * (w / 2 + 1), yy, zz, 0.3, 0.3, len / 24 + 0.3, C('#2b2b2b'));
    b.cbox(x + sx * (w / 2 + 1), (yy + deckY) / 2, zz, 0.1, yy - deckY, 0.1, C('#2b2b2b'));
  }
  add(x - w / 2 - 0.3, deckY, z0, x - w / 2, deckY + 1.1, z0 + len, { rail: true }); add(x + w / 2, deckY, z0, x + w / 2 + 0.3, deckY + 1.1, z0 + len, { rail: true });
  b.box(x - w / 2 - 0.3, deckY, z0, x - w / 2, deckY + 1.1, z0 + len, { color: tan }); b.box(x + w / 2, deckY, z0, x + w / 2 + 0.3, deckY + 1.1, z0 + len, { color: tan });
  const fz = z0 + len;
  b.box(x - 60, -2, fz, x + 60, deckY, fz + 40, { color: C('#8a7d68'), top: TILE.grass, unit: 6 }); add(x - 60, -2, fz, x + 60, deckY, fz + 40, {});
  out.landmarks.bridge = { type: 'bridge', name: br.name || 'Bay Bridge', pos: V(x, deckY, z0 + len / 2), top: V(x, 59.2, z0 + len * 0.25) };
  const [rx0, , rz0, rx1, , rz1] = sw(x - w / 2, 0, z0, x + w / 2, 0, z0 + len);
  out.roofs.push({ x0: rx0, z0: rz0, x1: rx1, z1: rz1, y: deckY, style: 'bridge' });
  world.addStatic(G.build(), 'bridge');
}

// Offshore copper-green torch-bearer ("Lady Brass") — scenery visible across the bay.
function beaconStatue(st, out, world, col) {
  const b = new GeoBuilder(); const x = st.pos[0], z = st.pos[1]; const G = C('#5fa894'), Gd = C('#4a8a78'), S = C('#b7b0a2');
  b.box(x - 22, -2, z - 22, x + 22, 1.5, z + 22, { color: C('#7f9a6a'), top: TILE.grass, unit: 6 });
  b.box(x - 9, 1.5, z - 9, x + 9, 6, z + 9, { color: S, side: TILE.stone, unit: 3 });
  b.taper(x, 6, z, 9, 9, 26, 6, 6, S);
  b.taper(x, 26, z, 5.5, 5, 46, 3.6, 3.4, G); b.taper(x, 46, z, 3.6, 3.4, 56, 4.2, 3.6, Gd);
  b.taper(x, 56, z, 1.6, 1.6, 59, 1.4, 1.4, G); b.taper(x, 59, z, 2.2, 2.2, 63, 1.8, 1.8, G);
  for (let k = 0; k < 7; k++) { const a = k / 7 * Math.PI * 2; b.cbox(x + Math.cos(a) * 1.4, 64, z + Math.sin(a) * 1.4, 0.4, 1.6, 0.4, G); }
  b.taper(x + 2.6, 52, z, 1.0, 1.0, 66, 0.8, 0.8, G); b.taper(x + 2.6, 66, z, 1.2, 1.2, 68, 1.6, 1.6, C('#c9a23a')); b.cbox(x + 2.6, 69.2, z, 1.2, 2.2, 1.2, C('#ffd35a'));
  b.cbox(x - 2.6, 46, z + 1.2, 1.4, 3, 1.0, Gd);
  col.add(x - 22, -2, z - 22, x + 22, 1.5, z + 22, {}); col.add(x - 9, 1.5, z - 9, x + 9, 26, z + 9, { building: true }); col.add(x - 3, 26, z - 3, x + 3, 63, z + 3, { building: true });
  out.landmarks.statue = { type: 'statue', name: st.name || 'Lady Brass', pos: new THREE.Vector3(x, 1.5, z), top: new THREE.Vector3(x, 26.2, z + 6) };
  out.roofs.push({ x0: x - 9, z0: z - 9, x1: x + 9, z1: z + 9, y: 26, style: 'stone' });
  out.lakes = out.lakes || [];
  const prev = col.floorFn; col.floorFn = (px, pz) => (Math.abs(px - x) < 22 && Math.abs(pz - z) < 22 ? 1.5 : prev(px, pz));
  world.addStatic(b.build(), 'statue');
}

// Founders' Green: one big Olmsted-style park spanning several blocks (paths, lake, elder trees, keep, needle).
function megaPark(def, out, col, world, R, r) {
  const b = new GeoBuilder();
  const { x0, z0, x1, z1 } = r, cx = (x0 + x1) / 2, cz = (z0 + z1) / 2;
  b.box(x0, 0, z0, x1, 0.25, z1, { color: C('#ffffff'), top: TILE.grass, unit: 6 });
  col.add(x0, 0, z0, x1, 0.25, z1, { curb: true, climb: false });
  // low stone perimeter wall with gaps
  const S = C('#a59b88');
  for (const [a0, a1, zz] of [[x0, x1, z0], [x0, x1, z1 - 0.6]]) for (let x = a0; x < a1; x += 22) { b.box(x, 0.25, zz, Math.min(a1, x + 16), 1.0, zz + 0.6, { color: S }); col.add(x, 0.25, zz, Math.min(a1, x + 16), 1.0, zz + 0.6, {}); }
  for (const [b0, b1, xx] of [[z0, z1, x0], [z0, z1, x1 - 0.6]]) for (let z = b0; z < b1; z += 22) { b.box(xx, 0.25, z, xx + 0.6, 1.0, Math.min(b1, z + 16), { color: S }); col.add(xx, 0.25, z, xx + 0.6, 1.0, Math.min(b1, z + 16), {}); }
  // lake + reservoir (water: falling in = respawn)
  const lakes = [{ x0: cx - 26, z0: z0 + (z1 - z0) * 0.55, x1: cx + 18, z1: z0 + (z1 - z0) * 0.55 + 34 }, { x0: cx - 30, z0: z0 + (z1 - z0) * 0.12, x1: cx + 30, z1: z0 + (z1 - z0) * 0.12 + 40 }];
  for (const l of lakes) { b.ground(l.x0, l.z0, l.x1, l.z1, 0.27, TILE.water, C('#ffffff'), 8); b.box(l.x0 - 1, 0.25, l.z0 - 1, l.x1 + 1, 0.5, l.z0, { color: S }); b.box(l.x0 - 1, 0.25, l.z1, l.x1 + 1, 0.5, l.z1 + 1, { color: S }); out.lakes.push(l); }
  // paths
  for (let k = 0; k < 4; k++) { const z = z0 + (k + 0.5) * (z1 - z0) / 4; b.ground(x0 + 2, z - 1.5, x1 - 2, z + 1.5, 0.28, TILE.cobble, C('#ffffff'), 3); }
  b.ground(cx - 1.5, z0 + 2, cx + 1.5, z1 - 2, 0.28, TILE.cobble, C('#ffffff'), 3);
  const inLake = (x, z, m = 3) => lakes.some((l) => x > l.x0 - m && x < l.x1 + m && z > l.z0 - m && z < l.z1 + m);
  // elder trees: tall enough to swing from (sparser anchors — park swinging is a skill)
  for (let k = 0; k < 46; k++) {
    const tx = R.range(x0 + 6, x1 - 6), tz = R.range(z0 + 6, z1 - 6); if (inLake(tx, tz) || Math.abs(tx - cx) < 3) continue;
    const big = R.chance(0.45), s = big ? R.range(2.6, 3.6) : R.range(1.1, 1.7);
    Props.tree(b, tx, tz, s); col.add(tx - 0.2 * s, 0, tz - 0.2 * s, tx + 0.2 * s, 2.4 * s, tz + 0.2 * s, {});
    col.add(tx - 1.2 * s, 2.2 * s, tz - 1.2 * s, tx + 1.2 * s, 4.9 * s, tz + 1.2 * s, { tree: true, seeThrough: true });
    if (big) out.zipPoints.push([tx, 4.9 * s, tz]);
  }
  for (let k = 0; k < 14; k++) { const bx = R.range(x0 + 6, x1 - 6), bz = R.range(z0 + 6, z1 - 6); if (!inLake(bx, bz)) Props.bench(b, bx, bz, R.range(0, Math.PI)); }
  // Founders' Keep: little castle on a rock
  const kx = cx + 24, kz = z0 + (z1 - z0) * 0.4;
  b.box(kx - 9, 0.25, kz - 7, kx + 9, 5, kz + 7, { color: C('#8a8274'), side: TILE.stone, unit: 3 }); col.add(kx - 9, 0.25, kz - 7, kx + 9, 5, kz + 7, { building: true });
  b.box(kx - 6, 5, kz - 4, kx + 6, 13, kz + 4, { color: C('#b7b0a2'), side: TILE.stone, top: TILE.roof, unit: 3 }); col.add(kx - 6, 5, kz - 4, kx + 6, 13, kz + 4, { building: true });
  b.box(kx + 3, 5, kz - 3, kx + 7, 22, kz + 1, { color: C('#b7b0a2'), side: TILE.stone, unit: 3 }); col.add(kx + 3, 5, kz - 3, kx + 7, 22, kz + 1, { building: true });
  b.pyramid(kx + 2.6, 22, kz - 3.4, kx + 7.4, 28, kz + 1.4, C('#3f5f7a'));
  for (let q = -5; q <= 5; q += 2) b.cbox(kx + q, 13.5, kz - 4, 1, 1, 0.6, C('#b7b0a2'));
  out.roofs.push({ x0: kx - 6, z0: kz - 4, x1: kx + 6, z1: kz + 4, y: 13, style: 'stone' });
  out.landmarks.keep = { type: 'keep', name: "Founders' Keep", pos: new THREE.Vector3(kx, 5, kz), top: new THREE.Vector3(kx - 2, 13.1, kz) };
  out.zipPoints.push([kx + 5, 22.5, kz - 1], [kx - 6, 14, kz - 4], [kx + 6, 14, kz + 4]);
  // Founders' Needle obelisk (big anchor in the middle of the lawn)
  const nx = cx - 18, nz = z0 + (z1 - z0) * 0.86;
  b.box(nx - 3, 0.25, nz - 3, nx + 3, 2, nz + 3, { color: S }); b.taper(nx, 2, nz, 2.4, 2.4, 30, 1.4, 1.4, C('#d8cdb2')); b.pyramid(nx - 0.7, 30, nz - 0.7, nx + 0.7, 32.5, nz + 0.7, C('#c9a23a'));
  col.add(nx - 3, 0.25, nz - 3, nx + 3, 2, nz + 3, {}); col.add(nx - 1.2, 2, nz - 1.2, nx + 1.2, 30, nz + 1.2, { building: true });
  out.zipPoints.push([nx, 31, nz]);
  out.landmarks.needle = { type: 'needle', name: "Founders' Needle", pos: new THREE.Vector3(nx, 0, nz), top: new THREE.Vector3(nx, 2.1, nz + 3.5) };
  // bandshell / carousel
  const ox = cx + 22, oz = z0 + (z1 - z0) * 0.82;
  b.cyl(ox, 0.25, oz, 6, 0.5, C('#c9a23a'), 10); b.cyl(ox, 0.75, oz, 0.5, 4, C('#e4573d'), 6); b.pyramid(ox - 6, 4.7, oz - 6, ox + 6, 7.5, oz + 6, C('#e4573d'));
  for (let k = 0; k < 8; k++) { const a = k / 8 * Math.PI * 2; b.cbox(ox + Math.cos(a) * 4.5, 1.6, oz + Math.sin(a) * 4.5, 0.6, 1.2, 1.4, C(k % 2 ? '#f6f1df' : '#2a9d9a')); }
  col.add(ox - 6, 0.25, oz - 6, ox + 6, 0.75, oz + 6, {});
  out.landmarks.carousel = { type: 'carousel', name: 'Green Carousel', pos: new THREE.Vector3(ox, 0.3, oz) };
  // stone arch bridges over the cross paths
  for (let k = 1; k < 4; k += 2) { const z = z0 + (k + 0.5) * (z1 - z0) / 4, bx = cx - 30; b.box(bx - 6, 3, z - 2.5, bx + 6, 3.6, z + 2.5, { color: S }); b.box(bx - 6, 0.25, z - 2.5, bx - 4.5, 3, z + 2.5, { color: S }); b.box(bx + 4.5, 0.25, z - 2.5, bx + 6, 3, z + 2.5, { color: S }); col.add(bx - 6, 3, z - 2.5, bx + 6, 3.6, z + 2.5, {}); }
  for (let k = 0; k < 10; k++) Props.lamp(b, x0 + 8 + k * (x1 - x0 - 16) / 9, cz + 2);
  out.parks.push({ ...r, i: -1 });
  out.crimeSpots.push([cx + 4, 0.3, cz, 'park'], [ox - 8, 0.3, oz, 'park']);
  for (let k = 0; k < 14; k++) { const px = R.range(x0 + 8, x1 - 8), pz = R.range(z0 + 8, z1 - 8); if (!inLake(px, pz)) out.collectibleSpots.push([px, R.range(1.2, 3), pz]); }
  world.addStatic(b.build(), 'park');
}
