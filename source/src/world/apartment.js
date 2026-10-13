// Okafor's walk-up apartment: the home hub (GTA-style safehouse). Hand-placed low-poly room with
// stations the Home UI hooks into: workstation, kitchen (+fridge), BRASS-64 PC, sewing station,
// bed, TV, clippings wall, trophy shelf and the window back out to Kettle's Row.
import * as THREE from 'three';
import { GeoBuilder, C } from '../render/geo.js';
import { TILE } from '../render/materials.js';

export function* generateApartment(def, world) {
  const col = world.collision; const b = new GeoBuilder();
  const out = world.data = {
    def, interior: true, apartment: true, bounds: { x0: -8, z0: -6, x1: 8, z1: 6 }, zipPoints: [], roofs: [], sidewalks: [], lanes: [], landmarks: {},
    crimeSpots: [], collectibleSpots: [], perches: [], blocks: [], parks: [], spawn: new THREE.Vector3(0, 0.02, 1.5), stations: [], exits: [], vents: [], cacheSpots: [], lakes: [], landRects: [],
  };
  col.floorFn = () => 0;
  const X0 = -7, X1 = 7, Z0 = -5, Z1 = 5, H = 3.3;
  const W = C('#ffffff'), wood = C('#b98a5a'), dark = C('#3a2a20'), teal = C('#2a9d9a'), coral = C('#e4573d'), gold = C('#f2c14e'), ink = C('#1d1712');
  // floor: wood boards + kitchen tiles + rug
  b.ground(X0, Z0, X1, Z1, 0, TILE.wood, W, 2);
  b.ground(X0, Z0, -3, Z1, 0.005, TILE.kitchen, W, 1.2);
  b.ground(-1.8, -1.2, 2.2, 2.2, 0.01, TILE.rug, W, 4);
  col.add(X0 - 1, -1, Z0 - 1, X1 + 1, 0, Z1 + 1, {});
  // walls (wallpaper inside) + ceiling
  const wall = (x0, z0, x1, z1) => { b.box(x0, 0, z0, x1, H, z1, { color: W, side: TILE.wallpaper, unit: 2.2, unitV: H }); col.add(x0, 0, z0, x1, H, z1, { climb: false }); };
  wall(X0 - 0.3, Z0 - 0.3, X1 + 0.3, Z0); wall(X0 - 0.3, Z1, X1 + 0.3, Z1 + 0.3); wall(X0 - 0.3, Z0, X0, Z1); wall(X1, Z0, X1 + 0.3, Z1);
  b.box(X0, H, Z0, X1, H + 0.2, Z1, { color: C('#e8dcc0') }); col.add(X0, H, Z0, X1, H + 0.2, Z1, {});
  b.cbox(0, H - 0.05, 0, 0.6, 0.1, 0.6, C('#fff2b0'));
  // windows on the north wall: night skyline glow + the exit window
  for (const wx of [-1.6, 1.6, 4.6]) {
    b.box(wx - 0.8, 1.0, Z0 + 0.01, wx + 0.8, 2.6, Z0 + 0.03, { color: W, side: TILE.nightglass, unit: 1.6, unitV: 1.6 });
    b.box(wx - 0.9, 0.95, Z0 + 0.02, wx + 0.9, 1.05, Z0 + 0.25, { color: dark });
  }
  b.cbox(-1.6, 1.1, Z0 + 0.3, 0.5, 0.2, 0.3, C('#9ab0c8')); b.cbox(-1.5, 1.28, Z0 + 0.3, 0.2, 0.18, 0.2, C('#9ab0c8')); // Steve the pigeon on the sill
  // ---- kitchen (west)
  b.box(X0, 0, Z0 + 0.6, X0 + 0.9, 0.95, Z1 - 1.5, { color: C('#e8e0d0') }); col.add(X0, 0, Z0 + 0.6, X0 + 0.9, 0.95, Z1 - 1.5, {});
  b.box(X0, 0.95, Z0 + 0.6, X0 + 0.95, 1.0, Z1 - 1.5, { color: teal });
  b.box(X0 + 0.05, 1.0, -1.6, X0 + 0.85, 1.05, -0.4, { color: ink }); // stove top
  for (const z of [-1.3, -0.7]) b.cyl(X0 + 0.45, 1.05, z, 0.18, 0.02, coral, 8);
  b.cbox(X0 + 0.45, 1.12, -1.3, 0.3, 0.12, 0.3, C('#8a8a8a')); // pan
  b.box(X0, 1.6, Z0 + 0.6, X0 + 0.5, 2.6, Z1 - 1.5, { color: C('#c9b893') }); // cabinets
  b.box(X0, 0, Z1 - 1.4, X0 + 1.0, 2.1, Z1 - 0.2, { color: C('#f2f0e6') }); col.add(X0, 0, Z1 - 1.4, X0 + 1.0, 2.1, Z1 - 0.2, {}); // fridge
  b.cbox(X0 + 1.02, 1.3, Z1 - 0.5, 0.05, 0.5, 0.06, C('#8a8a8a'));
  b.box(-4.4, 0, -0.6, -3.2, 0.95, 1.4, { color: wood }); col.add(-4.4, 0, -0.6, -3.2, 0.95, 1.4, {}); // island
  b.cbox(-3.8, 1.0, 0.4, 0.3, 0.1, 0.3, gold);
  // ---- workstation (east, north end): bench, vice with gauntlet, cartridge rack, lamp
  b.box(X1 - 1.0, 0, Z0 + 0.4, X1, 0.95, Z0 + 3.2, { color: C('#6b5a48') }); col.add(X1 - 1.0, 0, Z0 + 0.4, X1, 0.95, Z0 + 3.2, {});
  b.box(X1 - 1.05, 0.95, Z0 + 0.35, X1, 1.02, Z0 + 3.25, { color: C('#8f887a'), side: TILE.grate, top: TILE.grate, unit: 0.6 });
  b.cbox(X1 - 0.5, 1.15, Z0 + 1.2, 0.3, 0.25, 0.3, C('#4a4c4f')); b.cbox(X1 - 0.5, 1.33, Z0 + 1.2, 0.18, 0.12, 0.42, teal); b.cbox(X1 - 0.5, 1.37, Z0 + 1.0, 0.1, 0.06, 0.12, gold); // gauntlet in a vice
  for (let k = 0; k < 6; k++) b.cbox(X1 - 0.15, 1.7 + Math.floor(k / 3) * 0.35, Z0 + 1.9 + (k % 3) * 0.35, 0.12, 0.25, 0.25, k % 2 ? teal : C('#5fe0c8'));
  b.box(X1 - 0.25, 1.5, Z0 + 1.7, X1, 1.55, Z0 + 3.0, { color: wood }); b.box(X1 - 0.25, 1.85, Z0 + 1.7, X1, 1.9, Z0 + 3.0, { color: wood });
  b.cbox(X1 - 0.8, 1.35, Z0 + 2.7, 0.05, 0.7, 0.05, ink); b.cbox(X1 - 0.75, 1.7, Z0 + 2.6, 0.25, 0.12, 0.2, gold);
  b.box(X1 - 0.02, 1.2, Z0 + 0.4, X1, 2.6, Z0 + 3.2, { color: C('#c9a86a') }); // pegboard
  for (let k = 0; k < 5; k++) b.cbox(X1 - 0.06, 1.5 + (k % 2) * 0.5, Z0 + 0.7 + k * 0.5, 0.05, 0.3, 0.06, C('#4a4c4f'));
  // ---- BRASS-64 computer desk (north wall, right of the windows)
  b.box(2.6, 0.75, Z0 + 0.2, 3.8, 0.8, Z0 + 1.1, { color: wood }); b.box(2.65, 0, Z0 + 0.25, 2.75, 0.75, Z0 + 1.05, { color: wood }); b.box(3.65, 0, Z0 + 0.25, 3.75, 0.75, Z0 + 1.05, { color: wood });
  col.add(2.6, 0, Z0 + 0.2, 3.8, 0.8, Z0 + 1.1, {});
  b.cbox(3.2, 0.9, Z0 + 0.6, 0.8, 0.18, 0.5, C('#d8cdb2'));  // case
  b.cbox(3.2, 1.25, Z0 + 0.55, 0.62, 0.5, 0.5, C('#d8cdb2')); // CRT
  b.cbox(3.2, 1.27, Z0 + 0.81, 0.48, 0.36, 0.02, C('#2fd36b')); // green screen
  b.cbox(3.2, 0.83, Z0 + 0.98, 0.7, 0.04, 0.2, C('#bfb39b')); // keyboard
  b.cbox(2.9, 0.84, Z0 + 0.98, 0.05, 0.02, 0.05, coral);
  // ---- sewing station (south wall) + mannequin spot
  b.box(-1.8, 0.75, Z1 - 1.0, 0.2, 0.8, Z1 - 0.2, { color: wood }); b.box(-1.75, 0, Z1 - 0.95, -1.65, 0.75, Z1 - 0.25, { color: wood }); b.box(0.05, 0, Z1 - 0.95, 0.15, 0.75, Z1 - 0.25, { color: wood });
  col.add(-1.8, 0, Z1 - 1.0, 0.2, 0.8, Z1 - 0.2, {});
  b.cbox(-0.8, 0.95, Z1 - 0.6, 0.5, 0.3, 0.25, C('#2a2a30')); b.cbox(-1.0, 1.15, Z1 - 0.6, 0.12, 0.25, 0.2, C('#2a2a30')); b.cbox(-0.6, 1.25, Z1 - 0.6, 0.6, 0.08, 0.2, C('#2a2a30'));
  for (let k = 0; k < 5; k++) b.cbox(-1.6 + k * 0.12, 0.84, Z1 - 0.35, 0.08, 0.08, 0.08, [coral, teal, gold, C('#6b3fa0'), W][k]); // spools
  b.box(-3.0, 0, Z1 - 1.2, -2.0, 0.05, Z1 - 0.2, { color: dark }); // mannequin base
  out.mannequin = new THREE.Vector3(-2.5, 0.05, Z1 - 0.7);
  // ---- bed + nightstand (east, south end), TV opposite the couch
  b.box(X1 - 2.2, 0, Z1 - 2.4, X1, 0.5, Z1, { color: wood }); col.add(X1 - 2.2, 0, Z1 - 2.4, X1, 0.5, Z1, {});
  b.box(X1 - 2.1, 0.5, Z1 - 2.3, X1 - 0.1, 0.7, Z1 - 0.1, { color: C('#e8e0d0') });
  b.box(X1 - 2.1, 0.7, Z1 - 1.8, X1 - 0.1, 0.78, Z1 - 0.1, { color: coral }); b.cbox(X1 - 1.1, 0.8, Z1 - 2.0, 1.4, 0.15, 0.4, W);
  b.box(X1 - 2.2, 0.5, Z1 - 0.15, X1, 1.3, Z1, { color: dark });
  b.box(X1 - 3.0, 0, Z1 - 0.8, X1 - 2.4, 0.6, Z1 - 0.2, { color: wood }); b.cbox(X1 - 2.7, 0.75, Z1 - 0.5, 0.2, 0.3, 0.2, gold);
  // couch + TV
  b.box(-1.2, 0, 2.6, 1.8, 0.45, 3.4, { color: C('#6b3fa0') }); b.box(-1.2, 0.45, 3.2, 1.8, 1.0, 3.5, { color: C('#5a3488') });
  b.box(-1.4, 0, 2.6, -1.2, 0.7, 3.5, { color: C('#5a3488') }); b.box(1.8, 0, 2.6, 2.0, 0.7, 3.5, { color: C('#5a3488') });
  col.add(-1.4, 0, 2.6, 2.0, 0.6, 3.5, {});
  b.box(-0.6, 0, -1.4, 1.2, 0.55, -0.9, { color: dark }); col.add(-0.6, 0, -1.4, 1.2, 0.55, -0.9, {});
  b.cbox(0.3, 0.85, -1.15, 1.1, 0.6, 0.5, C('#3a3a40')); b.cbox(0.3, 0.87, -0.89, 0.85, 0.45, 0.02, C('#6fb3b8'));
  b.cbox(0.6, 1.3, -1.15, 0.03, 0.4, 0.03, ink); b.cbox(0.1, 1.3, -1.15, 0.03, 0.4, 0.03, ink);
  // clippings corkboard + trophy shelf (south wall)
  b.box(1.0, 1.3, Z1 - 0.05, 3.4, 2.5, Z1, { color: C('#b5874f') });
  for (let k = 0; k < 6; k++) b.cbox(1.3 + (k % 3) * 0.8, 1.6 + Math.floor(k / 3) * 0.55, Z1 - 0.07, 0.6, 0.4, 0.02, k % 2 ? C('#fff4dc') : C('#e8e0c8'));
  b.box(-6.6, 1.8, Z1 - 0.35, -4.4, 1.86, Z1, { color: wood });
  out.trophyShelf = new THREE.Vector3(-5.5, 1.86, Z1 - 0.2);
  // poster
  b.box(-6.98, 1.3, -1.2, -6.96, 2.5, 0.2, { color: C('#f2c14e') }); b.box(-6.97, 1.5, -1.0, -6.95, 2.3, 0.0, { color: C('#c0362c') });
  world.addStatic(b.build(), 'apartment');
  // ---- stations (the Home UI binds these to ■ prompts)
  const st = (id, label, x, z, radius = 1.6) => out.stations.push({ id, label, pos: new THREE.Vector3(x, 0, z), radius });
  st('workstation', 'WORKSTATION', X1 - 1.6, Z0 + 1.8);
  st('kitchen', 'COOK', -3.6, -1.0);
  st('fridge', 'SNACK', X0 + 1.7, Z1 - 0.8, 1.3);
  st('pc', 'BRASS-64', 3.2, Z0 + 1.9);
  st('sewing', 'SEWING', -0.8, Z1 - 1.5);
  st('bed', 'SLEEP', X1 - 2.8, Z1 - 1.8, 1.4);
  st('tv', 'WATCH TV', 0.3, 1.5, 1.4);
  st('clippings', 'CLIPPINGS', 2.2, Z1 - 1.0, 1.3);
  st('window', 'GO OUT', -1.6, Z0 + 1.0, 1.4);
  out.landmarks.door = { pos: new THREE.Vector3(-1.6, 0, Z0 + 1.2) };
  yield 1;
}
