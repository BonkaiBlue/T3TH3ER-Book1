// Spatial-hashed AABB collision world. Everything solid in the city is an axis-aligned box,
// which keeps collision, raycasts (swing anchors, AI line-of-sight) and climbing cheap on phones.
const CELL = 8;
const key = (cx, cz) => ((cx + 4096) << 13) | (cz + 4096);

export class CollisionWorld {
  constructor() { this.boxes = []; this.grid = new Map(); this.stamp = 0; this.floorFn = () => 0; }
  clear() { this.boxes.length = 0; this.grid.clear(); }
  add(minX, minY, minZ, maxX, maxY, maxZ, meta = {}) {
    const b = { min: [minX, minY, minZ], max: [maxX, maxY, maxZ], _s: 0, climb: meta.climb !== false, ...meta };
    b.id = this.boxes.length; this.boxes.push(b);
    const cx0 = Math.floor(minX / CELL), cx1 = Math.floor(maxX / CELL), cz0 = Math.floor(minZ / CELL), cz1 = Math.floor(maxZ / CELL);
    for (let x = cx0; x <= cx1; x++) for (let z = cz0; z <= cz1; z++) {
      const k = key(x, z); let a = this.grid.get(k); if (!a) { a = []; this.grid.set(k, a); } a.push(b);
    }
    return b;
  }
  remove(b) {
    b.dead = true;
    const cx0 = Math.floor(b.min[0] / CELL), cx1 = Math.floor(b.max[0] / CELL), cz0 = Math.floor(b.min[2] / CELL), cz1 = Math.floor(b.max[2] / CELL);
    for (let x = cx0; x <= cx1; x++) for (let z = cz0; z <= cz1; z++) { const a = this.grid.get(key(x, z)); if (a) { const i = a.indexOf(b); if (i >= 0) a.splice(i, 1); } }
  }
  // Query boxes overlapping an AABB.
  query(minX, minY, minZ, maxX, maxY, maxZ, out = []) {
    out.length = 0; const s = ++this.stamp;
    const cx0 = Math.floor(minX / CELL), cx1 = Math.floor(maxX / CELL), cz0 = Math.floor(minZ / CELL), cz1 = Math.floor(maxZ / CELL);
    for (let x = cx0; x <= cx1; x++) for (let z = cz0; z <= cz1; z++) {
      const a = this.grid.get(key(x, z)); if (!a) continue;
      for (const b of a) {
        if (b._s === s) continue; b._s = s;
        if (b.max[0] > minX && b.min[0] < maxX && b.max[1] > minY && b.min[1] < maxY && b.max[2] > minZ && b.min[2] < maxZ) out.push(b);
      }
    }
    return out;
  }
  // Ray vs boxes (2D DDA over cells + slab test). dir must be normalized. Returns hit or null.
  raycast(ox, oy, oz, dx, dy, dz, maxDist, filter) {
    const s = ++this.stamp; let best = null, bestT = maxDist;
    let cx = Math.floor(ox / CELL), cz = Math.floor(oz / CELL);
    const stepX = dx > 0 ? 1 : -1, stepZ = dz > 0 ? 1 : -1;
    const tDX = Math.abs(dx) < 1e-9 ? 1e9 : CELL / Math.abs(dx), tDZ = Math.abs(dz) < 1e-9 ? 1e9 : CELL / Math.abs(dz);
    let tMX = Math.abs(dx) < 1e-9 ? 1e9 : ((dx > 0 ? (cx + 1) * CELL - ox : ox - cx * CELL) / Math.abs(dx));
    let tMZ = Math.abs(dz) < 1e-9 ? 1e9 : ((dz > 0 ? (cz + 1) * CELL - oz : oz - cz * CELL) / Math.abs(dz));
    let t = 0, guard = 0;
    while (t <= bestT && guard++ < 256) {   // hard search limit (RCT-style bounded search)
      const a = this.grid.get(key(cx, cz));
      if (a) for (const b of a) {
        if (b._s === s) continue; b._s = s;
        if (filter && !filter(b)) continue;
        const h = slab(ox, oy, oz, dx, dy, dz, b, bestT);
        if (h && h.t < bestT) { bestT = h.t; best = h; best.box = b; }
      }
      if (tMX < tMZ) { t = tMX; tMX += tDX; cx += stepX; } else { t = tMZ; tMZ += tDZ; cz += stepZ; }
    }
    // floor
    if (dy < -1e-6) {
      const fy = this.floorFn(ox, oz); const tf = (fy - oy) / dy;
      if (tf >= 0 && tf < bestT) best = { t: tf, point: [ox + dx * tf, fy, oz + dz * tf], normal: [0, 1, 0], box: null, floor: true };
    }
    if (best && !best.point) best.point = [ox + dx * best.t, oy + dy * best.t, oz + dz * best.t];
    return best;
  }
  lineOfSight(a, b, ignore) {
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z, d = Math.hypot(dx, dy, dz);
    if (d < 0.01) return true;
    const h = this.raycast(a.x, a.y, a.z, dx / d, dy / d, dz / d, d - 0.2, (bx) => !bx.seeThrough && bx !== ignore);
    return !h;
  }
}

function slab(ox, oy, oz, dx, dy, dz, b, maxT) {
  let tmin = 0, tmax = maxT, nAxis = -1, nSign = 0;
  const o = [ox, oy, oz], d = [dx, dy, dz];
  for (let i = 0; i < 3; i++) {
    if (Math.abs(d[i]) < 1e-9) { if (o[i] < b.min[i] || o[i] > b.max[i]) return null; continue; }
    const inv = 1 / d[i]; let t1 = (b.min[i] - o[i]) * inv, t2 = (b.max[i] - o[i]) * inv, s = -1;
    if (t1 > t2) { const tt = t1; t1 = t2; t2 = tt; s = 1; }
    if (t1 > tmin) { tmin = t1; nAxis = i; nSign = s; }
    if (t2 < tmax) tmax = t2;
    if (tmin > tmax) return null;
  }
  if (nAxis < 0) return null; // origin inside
  const n = [0, 0, 0]; n[nAxis] = nSign;
  return { t: tmin, normal: n };
}

// Kinematic character mover: per-axis sweep with step-up. Returns contact info.
const _q = [];
export function moveBody(world, pos, vel, dt, hw, h, opts = {}) {
  const res = { ground: false, wallX: 0, wallZ: 0, ceiling: false, groundBox: null, stepped: false, hitBox: null };
  const stepH = opts.stepH ?? 0.45;
  // X
  const dx = vel.x * dt, dz = vel.z * dt, dy = vel.y * dt;
  axis(0, dx); axis(2, dz);
  // Y
  pos.y += dy;
  const boxes = world.query(pos.x - hw, pos.y, pos.z - hw, pos.x + hw, pos.y + h, pos.z + hw, _q);
  for (const b of boxes) {
    if (b.trigger) continue;
    if (dy <= 0 && pos.y < b.max[1] && pos.y - dy >= b.max[1] - 0.05 - Math.max(0, -dy)) { pos.y = b.max[1]; vel.y = 0; res.ground = true; res.groundBox = b; }
    else if (dy > 0 && pos.y + h > b.min[1] && pos.y + h - dy <= b.min[1] + 0.05) { pos.y = b.min[1] - h; vel.y = 0; res.ceiling = true; }
    else if (pos.y < b.max[1] && b.max[1] - pos.y < 0.6) { pos.y = b.max[1]; if (vel.y < 0) vel.y = 0; res.ground = true; res.groundBox = b; }
  }
  const fy = world.floorFn(pos.x, pos.z);
  if (pos.y <= fy) { pos.y = fy; if (vel.y < 0) vel.y = 0; res.ground = true; }
  return res;

  function axis(i, d) {
    if (d === 0) return;
    const k = i === 0 ? 'x' : 'z';
    pos[k] += d;
    const bs = world.query(pos.x - hw, pos.y + 0.02, pos.z - hw, pos.x + hw, pos.y + h, pos.z + hw, _q);
    for (const b of bs) {
      if (b.trigger) continue;
      // step-up onto low obstacles
      if (opts.grounded && b.max[1] - pos.y <= stepH && b.max[1] - pos.y > 0) {
        const clear = world.query(pos.x - hw, b.max[1] + 0.01, pos.z - hw, pos.x + hw, b.max[1] + h, pos.z + hw, []);
        if (!clear.some((c) => !c.trigger)) { pos.y = b.max[1]; res.stepped = true; continue; }
      }
      if (d > 0) pos[k] = b.min[i] - hw - 0.001; else pos[k] = b.max[i] + hw + 0.001;
      vel[k] = 0;
      if (i === 0) res.wallX = d > 0 ? 1 : -1; else res.wallZ = d > 0 ? 1 : -1;
      res.hitBox = b;
    }
  }
}
