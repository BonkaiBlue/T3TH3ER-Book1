/* Example SKIN PACK — "Pulp Heroes". Drop-in suits; no code. Toggle it in Title → Mods & Packs.
 * A skin is just a palette + a body style. Fields: primary, secondary, accent, eyes, bg (portrait backdrop). */
TetherMod.register({
  id: 'skins-pulp', name: 'Pulp Heroes Suit Pack', version: '1.0.0', author: 'Blackfeather Studios', priority: 10,
  description: 'Three bonus suits inspired by dime-store pulp covers.',
  skins: [
    { id: 'crimson_comet', name: 'Crimson Comet', desc: 'Rocket-age red with a chrome stripe.', style: 'hero', unlocked: true,
      palette: { primary: '#b0242a', secondary: '#d8d8d0', accent: '#ffd35a', eyes: '#fff4dc', bg: '#ff8a6a' } },
    { id: 'jade_jumper', name: 'Jade Jumper', desc: 'Emerald silk for jungle rooftops.', style: 'hero', unlocked: true,
      palette: { primary: '#2e7a4a', secondary: '#f2c14e', accent: '#1d1712', eyes: '#f2ead0', bg: '#9fe0a0' } },
    { id: 'midnight_mail', name: 'Midnight Mail', desc: 'Delivers justice after hours.', style: 'hero', unlocked: true,
      palette: { primary: '#1e2a52', secondary: '#c0462e', accent: '#e8e0d0', eyes: '#ffe066', bg: '#7fa8ff' } },
  ],
  tips: ['Skin packs live in /packs/skins — copy one, change the colors, list it in packs.manifest.js.'],
});
