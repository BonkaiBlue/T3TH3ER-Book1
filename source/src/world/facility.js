// Chapter-1 facility ("The Foundry") generator — a linear, data-driven tutorial gauntlet.
// Each segment type teaches one movement verb. Layout runs along +Z.
import * as THREE from 'three';
import { GeoBuilder, C } from '../render/geo.js';
import { TILE } from '../render/materials.js';
import { Props } from '../render/models.js';
import { rng } from '../core/util.js';

export function* generateFacility(def, world) {
  const R = rng(def.seed || 9);
  const col = world.collision;
  const b = new GeoBuilder();
  const out = world.data = {
    def, segments: [], triggers: [], fireNodes: [], zipPoints: [], roofs: [], landmarks: {}, sidewalks: [], lanes: [], crimeSpots: [],
    collectibleSpots: [], perches: [], blocks: [], parks: [], spawn: new THREE.Vector3(0, 0.1, 3), bounds: { x0: -60, z0: -20, x1: 60, z1: 400 }, interior: true,
  };
  col.floorFn = () => -30;
  const W = 4.2, H = 5.5;
  let z = 0, y = 0;
  const wallCol = C('#ffffff'), dark = C('#b8beb6');
  const wall = (x0, y0, z0, x1, y1, z1, meta = {}) => { b.box(x0, y0, z0, x1, y1, z1, { color: wallCol, side: TILE.labwall, top: TILE.grate, unit: 2.8 }); col.add(x0, y0, z0, x1, y1, z1, meta); };
  const floor = (x0, z0, x1, z1, fy, meta = {}) => { b.box(x0, fy - 1, z0, x1, fy, z1, { color: wallCol, side: TILE.labwall, top: TILE.labfloor, unit: 3 }); col.add(x0, fy - 1, z0, x1, fy, z1, meta); };
  const ceil = (x0, z0, x1, z1, cy) => { b.box(x0, cy, z0, x1, cy + 0.6, z1, { color: dark, side: TILE.grate, top: TILE.grate, unit: 3 }); col.add(x0, cy, z0, x1, cy + 0.6, z1, {}); };
  const trig = (name, z0, z1, y0, y1, data = {}) => out.triggers.push({ name, min: [-W - 2, y0, z0], max: [W + 2, y1, z1], ...data });
  const fires = (z0, z1, fy, every = 2.4) => { for (let zz = z0; zz < z1; zz += every) { out.fireNodes.push({ x: -W + 0.8 + R.range(0, 1), y: fy, z: zz }); out.fireNodes.push({ x: W - 0.8 - R.range(0, 1), y: fy, z: zz + 1.2 }); } };
  const lamp = (zz, cy) => { b.cbox(0, cy - 0.15, zz, 2.4, 0.15, 0.4, C('#fff3c0')); };

  for (const seg of def.segments) {
    const len = seg.len || 12, z0 = z, z1 = z + len;
    const rec = { ...seg, z0, z1, y };
    out.segments.push(rec);
    let w = seg.wide ? W * 1.8 : W;
    switch (seg.type) {
      case 'pod_room': {
        w = W * 1.8;
        floor(-w, z0, w, z1, y); ceil(-w, z0, w, z1, y + H + 1);
        wall(-w - 0.6, y, z0 - 0.6, w + 0.6, y + H + 1, z0); // back wall
        wall(-w - 0.6, y, z0, -w, y + H + 1, z1); wall(w, y, z0, w + 0.6, y + H + 1, z1);
        wall(-w, y, z1 - 0.4, -W, y + H + 1, z1); wall(W, y, z1 - 0.4, w, y + H + 1, z1); // narrow to corridor
        // clone pods (glass tubes)
        for (let k = 0; k < 4; k++) {
          for (const sx of [-1, 1]) {
            const px = sx * (w - 1.6), pz = z0 + 2.5 + k * 3;
            b.cyl(px, y, pz, 0.9, 0.4, C('#555a5e'), 8); b.cyl(px, y + 2.6, pz, 0.9, 0.4, C('#555a5e'), 8);
            b.cyl(px, y + 0.4, pz, 0.75, 2.2, C(k === 1 && sx === -1 ? '#9fe0d8' : '#6e8f8c'), 8, false);
            col.add(px - 0.9, y, pz - 0.9, px + 0.9, y + 3, pz + 0.9, { prop: true });
          }
        }
        out.spawn.set(-(w - 3), y + 0.05, z0 + 5.5);
        // console desk
        b.cbox(0, y + 0.5, z0 + 3, 3, 1, 1, C('#3d4a52')); col.add(-1.5, y, z0 + 2.5, 1.5, y + 1, z0 + 3.5, {});
        b.cbox(0, y + 1.3, z0 + 2.7, 2.6, 0.6, 0.1, C('#7cf0c8'));
        out.landmarks.console = { pos: new THREE.Vector3(0, y, z0 + 4.2) };
        out.landmarks.okafor = { pos: new THREE.Vector3(1.8, y, z0 + 8) };
        trig('seg:' + seg.id, z0, z1, y - 2, y + H, { seg: rec });
        break;
      }
      case 'corridor': case 'pipes_crouch': case 'debris_vault': case 'slide_door': case 'exit_hall': {
        floor(-W, z0, W, z1, y); ceil(-W, z0, W, z1, y + H);
        wall(-W - 0.6, y, z0, -W, y + H, z1); wall(W, y, z0, W + 0.6, y + H, z1);
        for (let zz = z0 + 2; zz < z1; zz += 6) lamp(zz, y + H);
        if (seg.type === 'pipes_crouch') {
          // a low pipe bundle: must crouch (1.15m clearance)
          const pz = z0 + len / 2;
          b.box(-W, y + 1.15, pz - 2.5, W, y + H, pz + 2.5, { color: C('#ffffff'), side: TILE.grate, top: TILE.grate, unit: 1 });
          for (let k = 0; k < 4; k++) b.cyl(-W, y + 1.3 + k * 0.25, pz - 2 + k, 0.1, 0.1, C('#b5532e'), 4);
          col.add(-W, y + 1.15, pz - 2.5, W, y + H, pz + 2.5, {});
        }
        if (seg.type === 'debris_vault') {
          for (const [dz, hh] of [[len * 0.35, 1.1], [len * 0.7, 1.25]]) {
            const pz = z0 + dz;
            b.box(-W, y, pz - 0.6, W, y + hh, pz + 0.6, { color: C('#ffffff'), side: TILE.grate, top: TILE.grate, unit: 1.2 });
            col.add(-W, y, pz - 0.6, W, y + hh, pz + 0.6, { vault: true });
            Props.crate(b, R.range(-2, 2), y + hh, pz - 0.2, 0.6);
          }
        }
        if (seg.type === 'slide_door') {
          // shutter that closes when you approach -> slide under
          const pz = z0 + len * 0.55;
          rec.shutter = { z: pz, x0: -W, x1: W, y, h: H };
          wall(-W, y + H - 0.5, pz - 0.3, W, y + H, pz + 0.3);
        }
        trig('seg:' + seg.id, z0, z1, y - 2, y + H, { seg: rec });
        break;
      }
      case 'climb_shaft': {
        // tall room: lower floor, wall ahead with ledge at +height; upper floor continues
        const hh = seg.height || 8;
        floor(-w, z0, w, z1, y); ceil(-w, z0, w, z1, y + hh + H);
        wall(-w - 0.6, y, z0, -w, y + hh + H, z1); wall(w, y, z0, w + 0.6, y + hh + H, z1);
        // climbable face
        const fz = z1 - 4;
        b.box(-w, y, fz, w, y + hh, z1, { color: C('#ffffff'), side: TILE.labwall, top: TILE.labfloor, unit: 2.8 });
        col.add(-w, y, fz, w, y + hh, z1, { climb: true, climbWall: true });
        // pipes ladder visual
        for (let k = 0; k < 6; k++) b.cbox(0, y + 1 + k * (hh / 6), fz - 0.12, 2.4, 0.12, 0.12, C('#c9a23a'));
        Props.crate(b, -2.5, y, z0 + 3); Props.crate(b, 2.2, y, z0 + 5, 1.6);
        col.add(-3.1, y, z0 + 2.4, -1.9, y + 1.2, z0 + 3.6, {}); col.add(1.4, y, z0 + 4.2, 3.0, y + 1.6, z0 + 5.8, {});
        trig('seg:' + seg.id, z0, z1, y - 2, y + hh + 2, { seg: rec });
        out.fireNodes.push({ x: -w + 1, y, z: z0 + 1 });
        y += hh;
        break;
      }
      case 'gap_wallrun': {
        // collapsed floor between two lips. side wall is runnable.
        const lip = 3;
        floor(-W, z0, W, z0 + lip, y); floor(-W, z1 - lip, W, z1, y);
        floor(-W - 4, z0, W + 4, z1, y - 14, { pit: true });
        ceil(-W, z0, W, z1, y + H + 1);
        wall(-W - 0.6, y - 14, z0, -W, y + H + 1, z1, { runWall: true }); wall(W, y - 14, z0, W + 0.6, y + H + 1, z1, { runWall: true });
        // stripes on run wall
        for (let zz = z0 + lip; zz < z1 - lip; zz += 2) b.cbox(-W + 0.02, y + 1.5, zz, 0.04, 0.4, 0.9, C('#2a9d9a'));
        out.triggers.push({ name: 'pit', min: [-W - 4, y - 15, z0], max: [W + 4, y - 6, z1], pit: true, respawnZ: z0 + 1, respawnY: y });
        trig('seg:' + seg.id, z0, z1, y - 6, y + H, { seg: rec });
        rec.gap = [z0 + lip, z1 - lip];
        break;
      }
      case 'ledge_grab': {
        // a raised platform: jump, grab the lip, climb up (ledge is NOT free-climbable)
        const rise = seg.rise || 2.7, wz = z0 + len * 0.45;
        floor(-W, z0, W, z1, y); ceil(-W, z0, W, z1, y + rise + H);
        wall(-W - 0.6, y, z0, -W, y + rise + H, z1); wall(W, y, z0, W + 0.6, y + rise + H, z1);
        b.box(-W, y, wz, W, y + rise, z1, { color: C('#ffffff'), side: TILE.labwall, top: TILE.labfloor, unit: 2.8 });
        col.add(-W, y, wz, W, y + rise, z1, { climb: false });
        b.cbox(0, y + rise - 0.05, wz - 0.06, W * 2, 0.1, 0.12, C('#d6a12e'));
        trig('seg:' + seg.id, z0, z1, y - 2, y + rise + H, { seg: rec });
        out.fireNodes.push({ x: -W + 1, y, z: z0 + 1 });
        y += rise;
        break;
      }
      case 'exit_yard': {
        // night yard outside, fence, open sky, end trigger at far side
        const yw = 24;
        floor(-yw, z0, yw, z1, y); out.roofs.push({ x0: -yw, z0, x1: yw, z1, y });
        wall(-yw - 0.6, y, z0, -yw, y + 3, z1); wall(yw, y, z0, yw + 0.6, y + 3, z1);
        wall(-yw, y, z0 - 0.6, -W, y + H, z0); wall(W, y, z0 - 0.6, yw, y + H, z0);
        // facility façade
        b.box(-yw, y + H, z0 - 0.6, yw, y + H + 10, z0, { color: C('#ffffff'), side: TILE.warehouse, unit: 3 });
        // containers / cover
        for (let k = 0; k < 6; k++) {
          const px = R.range(-yw + 4, yw - 8), pz = R.range(z0 + 5, z1 - 8);
          b.box(px, y, pz, px + 6, y + 2.6, pz + 2.5, { color: C(R.pick(['#c0462e', '#2a6f8a', '#c9a23a'])) }); col.add(px, y, pz, px + 6, y + 2.6, pz + 2.5, {});
        }
        // perimeter fence to climb at end
        wall(-yw, y, z1 - 0.4, yw, y + 3.4, z1, { climb: true });
        floor(-yw - 30, z1, yw + 30, z1 + 60, y - 6);
        out.landmarks.exit = { pos: new THREE.Vector3(0, y + 3.4, z1 - 0.2) };
        out.triggers.push({ name: 'escape', min: [-yw, y - 8, z1 + 1], max: [yw, y + 4, z1 + 60] });
        trig('seg:' + seg.id, z0, z1, y - 2, y + 10, { seg: rec, outdoor: true });
        out.outdoorZ = z0;
        break;
      }
    }
    if (seg.fire !== false && seg.type !== 'pod_room') fires(z0 + 1, z1 - 1, seg.type === 'climb_shaft' ? y - (seg.height || 8) : seg.type === 'ledge_grab' ? y - (seg.rise || 2.7) : y);
    z = z1;
    if (seg.id) out.landmarks[seg.id] = { pos: new THREE.Vector3(0, y, (z0 + z1) / 2), start: new THREE.Vector3(0, rec.y + 0.05, z0 + 1.2), end: new THREE.Vector3(0, y + 0.05, z1 - 1.5), z0, z1, y };
    yield out.segments.length / def.segments.length * 0.9;
  }
  out.length = z;
  out.bounds.z1 = z + 60;
  world.addStatic(b.build(), 'facility');
  yield 1;
}
