/* TETHER — Base Pack: World (cities, palettes, NPC archetypes, gadgets, rides, suits, tips, strings)
 * Everything here is plain data. Copy this file as a template for your own packs (docs/MODDING.md). */
TetherMod.register({
  id: 'base-world', name: 'Base Game — World', version: '1.0.0', author: 'Blackfeather Studios', core: true, priority: 0,
  description: 'Cities of Greater Brasshaven, suits, gadgets, rides and NPC archetypes.',

  strings: {
    gameTitle: 'TETHER', gameSubtitle: 'BOOK ONE · THE CLONE OF BRASSHAVEN', heroName: 'Tether', regionName: 'GREATER BRASSHAVEN',
    credits: '<p><b>TETHER — Book One</b><br>Story, design & direction: Raven Krystal / Blackfeather Studios.<br>Engine & code: Bonkai Xengetsu (David J. Brown) with Claude.</p>' +
      '<p>Built on <b>three.js</b> (MIT). Fonts: <b>Bangers</b> & <b>Bebas Neue</b> (SIL Open Font License). All sounds are synthesized at runtime — no audio files are required (WAV exports ship in /assets/sfx).</p>' +
      '<p>All characters, places and the TETHER name are original to this project. Art direction pays homage to the four-color comics of the golden & silver ages and the PS1 → PS2/GameCube eras of 3D.</p>',
  },

  palettes: [
    { id: 'sunset', sun: '#fff0c8', sky: '#f4c062', ground: '#6a543c', fog: '#e3ad4f', skyTop: '#d99a3a', skyMid: '#eeb64e', sunDisc: '#ffd35a', cloud: '#f8dfa8', fogNear: 80, fogFar: 300, sunDir: [-0.55, 0.45, 0.6] },
    { id: 'dusk', sun: '#ffc9a0', sky: '#c0809a', ground: '#4a3a4a', fog: '#b9768a', skyTop: '#4a3a7a', skyMid: '#d98a7a', sunDisc: '#ffb45a', cloud: '#e8a8a0', fogNear: 70, fogFar: 270, sunDir: [-0.6, 0.25, 0.5] },
    { id: 'night', sun: '#8aa0d8', sky: '#3a4a7a', ground: '#1a1a2a', fog: '#1e2440', skyTop: '#0e1228', skyMid: '#2a3260', sunDisc: '#f2ead0', sunSize: 0.03, cloud: '#3a4470', fogNear: 55, fogFar: 230, sunDir: [0.4, 0.6, -0.3] },
    { id: 'foundry', sun: '#ffb070', sky: '#a06050', ground: '#2a1a14', fog: '#3a2018', skyTop: '#1a0e0a', skyMid: '#5a2a1a', sunDisc: '#ff7a2a', cloud: '#5a3020', fogNear: 18, fogFar: 70, sunDir: [-0.3, 0.8, 0.4] },
  ],

  cities: [
    { id: 'midtown', name: 'Brasshaven — Midtown', short: 'MIDTOWN', kind: 'city', seed: 1938, palette: 'sunset', color: '#e4573d', map: [46, 42],
      blocks: [7, 7], blockSize: 44, street: 14, heights: { min: 10, max: 88, centerBias: 1.3 },
      styles: [['deco', 3], ['brick', 3], ['office', 2], ['glass', 1.5], ['brownstone', 2]], parks: 0.07, plazas: 0.05, traffic: 18, peds: 36,
      landmarks: [
        { id: 'clocktower', type: 'clocktower', block: [3, 3], name: 'Meridian Clock Tower', height: 78 },
        { id: 'rooftopGarden', type: 'rooftopGarden', block: [1, 4], name: 'Albright Rooftop Garden', height: 24 },
        { id: 'pawnshop', type: 'pawnshop', block: [4, 2], name: "Gus's Corner Pawn" },
        { id: 'bank', type: 'bank', block: [2, 1], name: 'First Brass Savings' },
        { id: 'klaxon', type: 'tower', block: [5, 4], name: 'Evening Klaxon Building', height: 112 },
        { id: 'foundersPark', type: 'park', block: [2, 5], name: "Founders' Park" },
      ],
      bridge: { x: 0, length: 240, name: 'Brass Bay Bridge' },
      description: 'The beating brass heart of the city: art-deco spires, the Meridian Clock Tower, and the Brass Bay Bridge. Tall, dense and perfect for swinging.',
      skyline: 'Tall & dense', crime: 'Moderate', bestFor: 'Swinging, story', arrivalThought: 'Midtown. Every rooftop is a handhold.' },
    { id: 'docks', name: 'Ironworks Docks', short: 'DOCKS', kind: 'city', seed: 4412, palette: 'dusk', color: '#2a6f8a', map: [24, 70],
      blocks: [6, 5], blockSize: 46, street: 16, heights: { min: 8, max: 34, centerBias: 0.6 },
      styles: [['warehouse', 5], ['brick', 3], ['office', 1]], parks: 0.02, plazas: 0.0, traffic: 12, peds: 16,
      landmarks: [
        { id: 'yard1', type: 'warehouseYard', block: [1, 1], name: 'Pier 9 Yard' },
        { id: 'yard2', type: 'warehouseYard', block: [4, 3], name: 'Cutter & Sons Freight' },
        { id: 'gasworks', type: 'tower', block: [3, 2], name: 'Old Gasworks Stack', height: 64 },
      ],
      description: 'Low warehouses, container stacks and cranes. Fewer swing points — free-running, riding and stealth rule here.',
      skyline: 'Low & sprawling', crime: 'High', bestFor: 'Stealth, rides, parkour', arrivalThought: 'The Docks. Fewer anchors. Keep your feet quick.' },
    { id: 'gilded', name: 'Gilded Heights', short: 'GILDED HTS', kind: 'city', seed: 7020, palette: 'night', color: '#c9a23a', map: [72, 26],
      blocks: [6, 6], blockSize: 40, street: 14, heights: { min: 24, max: 120, centerBias: 1.0 },
      styles: [['deco', 4], ['glass', 3], ['office', 1]], parks: 0.04, plazas: 0.12, traffic: 14, peds: 24,
      landmarks: [
        { id: 'spire', type: 'tower', block: [3, 2], name: 'Aurelian Spire', height: 140 },
        { id: 'museum', type: 'museum', block: [1, 3], name: 'Brasshaven Museum of Wonders' },
      ],
      description: 'Old money and new glass after dark. The tallest skyline in the region — long, dizzying swings.',
      skyline: 'Skyscrapers', crime: 'Low (but rich)', bestFor: 'Big swings, sightseeing', arrivalThought: 'Gilded Heights. Long falls, longer swings.' },
    { id: 'foundry', name: 'The Foundry', kind: 'facility', hidden: true, seed: 9, palette: 'foundry',
      segments: [
        { id: 'pods', type: 'pod_room', len: 15 },
        { id: 'hall1', type: 'corridor', len: 18 },
        { id: 'pipes', type: 'pipes_crouch', len: 12 },
        { id: 'debris', type: 'debris_vault', len: 16 },
        { id: 'shaft', type: 'climb_shaft', len: 14, height: 8 },
        { id: 'gap', type: 'gap_wallrun', len: 18 },
        { id: 'ledge', type: 'ledge_grab', len: 12, rise: 2.7 },
        { id: 'shutter', type: 'slide_door', len: 14 },
        { id: 'hall2', type: 'exit_hall', len: 12 },
        { id: 'yard', type: 'exit_yard', len: 44, fire: false },
      ],
      description: 'Baron Ferrous\'s secret works.' },
  ],

  npcTypes: [
    { id: 'thug', name: 'Goon', hostile: true, hp: 3, speed: 4.6, weapon: 'melee', damage: 11, vision: { range: 22, fov: 75 }, hearing: 1, bindHits: 2,
      palette: { style: 'civ', primary: '#3a4a5a', secondary: '#e8e0d0', stripes: true, pants: '#2a2a3a', skin: '#c99a76', hat: 'beanie', mask: true } },
    { id: 'thug_gun', name: 'Gunsel', hostile: true, hp: 2, speed: 3.8, weapon: 'gun', damage: 9, vision: { range: 30, fov: 65 }, hearing: 1.1, bindHits: 2,
      palette: { style: 'civ', primary: '#5a3a2a', secondary: '#c0462e', pants: '#2a2a2a', skin: '#b98a66', hat: 'fedora', hair: '#2a2018' } },
    { id: 'foundry_guard', name: 'Foundry Guard', hostile: true, hp: 3, speed: 4.4, weapon: 'melee', damage: 10, vision: { range: 18, fov: 70 }, hearing: 1.2, bindHits: 2,
      palette: { style: 'civ', primary: '#5a5f6a', secondary: '#d6a12e', pants: '#3a3f4a', skin: '#c99a76', hat: 'cap', badge: true, belt: '#d6a12e' } },
    { id: 'jester_goon', name: "Jester's Joker", hostile: true, hp: 3, speed: 5.0, weapon: 'melee', damage: 12, vision: { range: 24, fov: 80 }, bindHits: 2,
      palette: { style: 'civ', primary: '#6b3fa0', secondary: '#f2c14e', stripes: true, pants: '#2a1a3a', skin: '#f6f1df', hat: 'beanie', mask: true } },
    { id: 'jester_gunner', name: 'Jester Gunner', hostile: true, hp: 2, speed: 4, weapon: 'gun', damage: 10, vision: { range: 32, fov: 70 }, bindHits: 2,
      palette: { style: 'civ', primary: '#3a2a6a', secondary: '#f2c14e', pants: '#1a1a2a', skin: '#f6f1df', hat: 'fedora', hair: '#6b3fa0' } },
    { id: 'civilian', name: 'Citizen', hostile: false, hp: 2, palette: { style: 'civ', primary: '#c0462e', pants: '#3a3a48', skin: '#d9a27a', hair: '#3a2a20' } },
    { id: 'hostage', name: 'Hostage', hostile: false, hp: 2, palette: { style: 'civ', primary: '#e8e0d0', pants: '#556070', skin: '#c99a76', hair: '#6b4a2e' } },
    { id: 'okafor', name: 'Dr. Okafor', hostile: false, palette: { style: 'civ', primary: '#f2f2ea', sleeves: '#f2f2ea', pants: '#3a3f4a', skin: '#8a5a3a', hair: '#1a1410', belt: '#3a3f4a' } },
    { id: 'pip', name: 'Pip', hostile: false, scale: 0.78, palette: { style: 'civ', primary: '#2a9d9a', pants: '#6b4a2e', skin: '#e8b48a', hair: '#c96a2a', hat: 'cap', secondary: '#e4573d' } },
    { id: 'reyes', name: 'Officer Reyes', hostile: false, palette: { style: 'civ', primary: '#2a3f6a', pants: '#1a2440', skin: '#b98a66', hat: 'cap', badge: true, accent: '#f2c14e', belt: '#1a1410' } },
    { id: 'gus', name: 'Gus', hostile: false, palette: { style: 'civ', primary: '#8a6a3a', pants: '#3a3a3a', skin: '#d9a27a', hair: '#9a9a9a' } },
    { id: 'augie', name: 'Augie', hostile: false, palette: { style: 'civ', primary: '#e8e0d0', pants: '#4a3a2a', skin: '#e0b08a', hat: 'fedora', hair: '#4a3a2a' } },
    { id: 'courier', name: 'Dash', hostile: false, palette: { style: 'civ', primary: '#f2c14e', pants: '#2a2a3a', skin: '#6a4a3a', hat: 'cap', secondary: '#2a9d9a' } },
    { id: 'violet_jester', name: 'The Violet Jester', boss: true, hp: 9,
      palette: { style: 'jester', primary: '#6b3fa0', secondary: '#f2c14e', accent: '#f2c14e', eyes: '#f6f1df' } },
  ],

  gadgets: [
    { id: 'line', name: 'TETHER LINE', desc: 'Binds a goon (2 hits). Yanks fliers.', effect: 'bind', bind: 1, cost: 1, speed: 58, life: 0.9, color: '#e8f6f0', sound: 'thwip' },
    { id: 'pod', name: 'IMPACT POD', desc: 'Bursts into a sticky net. Area bind.', effect: 'aoe', bind: 2, radius: 3, cost: 2, speed: 34, gravity: 7, life: 1.6, color: '#5fe0c8', size: 1.6, sound: 'thwip' },
    { id: 'chirp', name: 'DECOY CHIRP', desc: 'Lands with a noise. Lures guards.', effect: 'noise', radius: 22, cost: 1, speed: 26, gravity: 14, life: 2.5, color: '#f2c14e', size: 1.2, sound: 'whiff' },
  ],

  rides: [
    { id: 'skateboard', name: 'SKATEBOARD', desc: 'Pip\'s old deck. Coasts forever. ✕ to ollie.' },
    { id: 'skates', name: 'ROLLER SKATES', desc: 'Snappy acceleration, tight turns.' },
    { id: 'bicycle', name: 'BICYCLE', desc: 'Fastest on the flat. No tricks.' },
  ],

  skins: [
    { id: 'tether_classic', name: 'Tether (Classic)', desc: 'Teal & coral, Okafor\'s design.', style: 'hero', unlocked: true,
      palette: { primary: '#2a9d9a', secondary: '#e4573d', accent: '#f2c14e', eyes: '#ffffff' } },
    { id: 'pod_suit', name: 'Specimen 9', desc: 'The hospital whites you woke up in.', style: 'pod', unlocked: true,
      palette: { primary: '#e8ece6', secondary: '#9aa3ad', accent: '#5fe0c8', skin: '#d9a27a', hair: '#3a2a20', bg: '#9fe0d8' } },
    { id: 'golden_age', name: 'Golden Age', desc: 'Navy & sunshine, straight off a 10¢ cover.', style: 'hero', unlockText: 'Finish Chapter 3',
      palette: { primary: '#2a3f8a', secondary: '#f2c14e', accent: '#e4573d', eyes: '#fff4dc' } },
    { id: 'noir', name: 'Brasshaven Noir', desc: 'For rainy nights and bad decisions.', style: 'hero', unlockText: 'Finish Chapter 4',
      palette: { primary: '#3a3a40', secondary: '#1a1a1e', accent: '#c9c9c0', eyes: '#f2ead0', bg: '#9a9a90' } },
    { id: 'snare_echo', name: 'Snare Echo', desc: 'Your template\'s colors. Wear them better than he did.', style: 'hero', unlockText: 'Find 15 Golden Age Pages', unlockPages: 15,
      palette: { primary: '#5a1a1a', secondary: '#1a1a1a', accent: '#d6a12e', eyes: '#ff3b3b', bg: '#c96a5a' } },
  ],

  collectibles: [{ id: 'pages', name: 'Golden Age Pages', perCity: 20 }],

  tips: [
    'Hold R2 while airborne to swing. Keep holding to chain swings automatically.',
    'Release a swing at the bottom of the arc for maximum speed. Press ✕ while swinging for a swing-jump.',
    'Hold L1 to free-run: you\'ll vault rails, run up walls and wall-run automatically.',
    'Hold L2 to spot point-launch ledges (yellow diamond), then press R2 to zip to them.',
    'Goons rarely look up. Perch on a ledge and press ■ for a Perch Takedown.',
    'A Decoy Chirp pulls guards away from their friends. Isolate, then take them down.',
    'Downed goons found by their buddies raise the alarm. Tether them out of sight… or be quick.',
    'Tether-Sense (L3) shows enemies through walls for a few seconds.',
    'When the screen edges flash pink, press ○ to dodge.',
    'D-pad ▼ cycles rides: skateboard, roller skates, bicycle. Great for the low Docks.',
    'R3 cycles the camera: first-person, third-person, and left/right shoulder.',
    'Hold ■ (with nothing to interact with) to reload gadget cartridges.',
    'Golden Age Pages float on rooftops all over the region. Collect them to unlock a suit.',
    'Tap the minimap to open the World Map and travel between districts.',
    'Swinging needs something tall to anchor to — parks and the Docks have fewer anchors.',
    'Performance tip: Settings → Quality "Low" or turn off Comic FX on older phones.',
  ],
});
