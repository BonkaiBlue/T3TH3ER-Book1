/* Example DLC / ASSET PACK — "Sunset Pier". Shows how a mod adds a brand-new district, a crime type,
 * a side job with its own dialogue, a palette, an NPC archetype and a gadget — without touching engine code.
 * Disable it from Title → Mods & Packs. */
TetherMod.register({
  id: 'dlc-sunset-pier', name: 'Sunset Pier (Example DLC)', version: '0.9.0', author: 'You?', priority: 20,
  description: 'A small seaside district, a "Boardwalk Bandits" crime, a new gadget and a side job.',

  palettes: [
    { id: 'peach', sun: '#fff0d8', sky: '#ffb08a', ground: '#6a4a4a', fog: '#f0a080', skyTop: '#e07a7a', skyMid: '#ffb08a', sunDisc: '#fff0a0', cloud: '#ffd0b0', fogNear: 70, fogFar: 260, sunDir: [0.6, 0.3, -0.5] },
  ],
  cities: [
    { id: 'pier', name: 'Sunset Pier', short: 'PIER', kind: 'city', seed: 1957, palette: 'peach', color: '#ff6a8a', map: [88, 90],
      blocks: [5, 4], blockSize: 40, street: 14, heights: { min: 8, max: 46, centerBias: 0.9 },
      styles: [['brownstone', 3], ['brick', 2], ['deco', 1]], parks: 0.15, plazas: 0.2, traffic: 8, peds: 30,
      landmarks: [{ id: 'arcade', type: 'gallery', block: [2, 1], name: 'Fun-O-Rama Arcade' }],
      description: 'Boardwalk arcades and saltwater taffy. Added by an example mod pack.',
      skyline: 'Low & breezy', crime: 'Pickpockets', bestFor: 'Testing mods', arrivalThought: 'Smells like taffy and trouble.' },
  ],
  npcTypes: [
    { id: 'bandit', name: 'Boardwalk Bandit', hostile: true, hp: 2, speed: 5.5, weapon: 'melee', damage: 8, vision: { range: 20, fov: 80 },
      palette: { style: 'civ', primary: '#ff6a8a', secondary: '#fff4dc', stripes: true, pants: '#2a2a3a', skin: '#e0b08a', hat: 'cap', mask: true } },
  ],
  gadgets: [
    { id: 'taffy', name: 'TAFFY BOMB', desc: 'Sticky, sweet, area bind. (Example DLC gadget)', effect: 'aoe', bind: 2, radius: 4, cost: 3, speed: 30, gravity: 9, life: 1.8, color: '#ff8ab0', size: 1.8, sound: 'pod' },
  ],
  crimes: [
    { id: 'bandits', name: 'Boardwalk Bandits', city: 'pier', spot: ['plaza', 'store', 'park'], enemies: [['bandit', 3]], civilians: [{ npc: 'civilian' }], rep: 9, scanner: 'Pickpocket gang on the boardwalk!', thanks: ['My taffy money!'] },
  ],
  sideQuests: [
    { id: 'taffy_run', name: 'Taffy Run', city: 'pier',
      giver: { npc: 'courier', name: 'Dash', at: { landmark: 'arcade', key: 'door' }, dialogue: 'dlc_taffy' },
      reward: { rep: 5 },
      steps: [{ type: 'rings', count: 5, timeLimit: 60, text: 'Taffy Run: hit every ring' }] },
  ],
  dialogues: {
    dlc_taffy: { lines: [
      { s: 'dash', t: 'Welcome to the Pier! This whole district is a mod, did you know that? Wild.' },
      { s: 'dash', t: 'Five rings, sixty seconds, free taffy.', choices: [{ t: 'Deal.', result: 'accept' }, { t: 'No thanks.', result: 'decline' }] },
    ] },
  },
  hooks: {
    // Example lifecycle hooks — packs may react to engine events.
    onCityLoaded(game, city) {
      if (city.id === 'pier' && !game.save.data.inventory.gadgets.includes('taffy')) { game.save.data.inventory.gadgets.push('taffy'); game.hud.toast('DLC gadget unlocked: Taffy Bomb!', 3); }
    },
  },
  tips: ['Mods can add whole districts. Check out Sunset Pier on the World Map!'],
});
