# Modding TETHER — packs, DLC, skin packs

The engine (`game/tether.js`) contains **no content**. Everything you play — districts, suits, gadgets,
rides, goons, crimes, side jobs, chapters, dialogue, loading tips — is plain data in **packs**.

A pack is a `.js` file that calls `TetherMod.register({...})`. Packs are loaded with classic `<script>`
tags (listed in `packs/packs.manifest.js`), so they work from `file://`, on any web host, and offline.

```js
TetherMod.register({
  id: 'my-pack', name: 'My Pack', version: '1.0.0', author: 'me', priority: 30,
  description: 'Shown in Title → Mods & Packs',
  skins: [ ... ], cities: [ ... ], gadgets: [ ... ], /* any category below */
});
```

Then add `'mods/my-pack.js'` to `packs/packs.manifest.js`. Done.

## Rules of the registry

- Every item has an `id`. Items are merged **by id**, packs sorted by `priority` (low → high).
  A later pack with the same id **replaces** the item; add `patch: true` to deep-merge instead
  (e.g. `{ id: 'thug', patch: true, hp: 6 }` makes goons tougher without restating the whole archetype).
- `core: true` packs can't be disabled in-game. Everything else gets an on/off toggle (saved).
- Saves never store content, only ids + progress, so updates and packs can't corrupt progress.

## Categories

| Category | Key fields |
|---|---|
| `skins` | `name, desc, style: 'hero'|'pod', unlocked, unlockText, unlockPages, palette: {primary, secondary, accent, eyes, bg}` |
| `cities` | `name, short, kind: 'city'|'facility', seed, palette, map:[x%,y%], blocks:[nx,nz], blockSize, street, heights:{min,max,centerBias}, styles:[[style,weight]…], parks, plazas, traffic, peds, landmarks:[…], bridge, description, skyline, crime, bestFor, arrivalThought, hidden` |
| `palettes` | `sun, sky, ground, fog, skyTop, skyMid, sunDisc, sunSize, cloud, fogNear, fogFar, sunDir:[x,y,z]` |
| `npcTypes` | `name, hostile, hp, speed, weapon:'melee'|'gun', damage, vision:{range,fov}, hearing, alertness, bindHits, scale, palette:{style:'civ'|'jester', primary, secondary, pants, skin, hair, hat:'beanie'|'cap'|'fedora', stripes, mask, badge}` |
| `gadgets` | `name, desc, effect:'bind'|'aoe'|'noise', bind, radius, cost, speed, gravity, life, color, size, sound` |
| `rides` | `name, desc` (physics presets: skateboard / skates / bicycle) |
| `crimes` | `name, spot:[…], enemies:[[npcType,count]…], civilians:[{npc}], kind:'van', hitsToStop, rep, scanner, thanks:[…], city, requiresFlag, storyOnly` |
| `sideQuests` | `name, city, requires (flag), repeatable, giver:{npc, name, at, dialogue}, steps:[…], reward, outro` |
| `chapters` | `order, number, title, city, palette, spawn, spawnYaw, forceSkin, abilities, requires, next, blurb, outroText, reward, steps:[…]` |
| `dialogues` | `{ id: { lines: [ … ] } }` (see below) |
| `speakers` | `{ id: { name, color, pitch, radio, portrait:{…} } }` |
| `upgrades` | `name, desc, icon, costs:[⚙ per level], stat: swingPower|zipRange|armor|maxHealth|fluidCap|mag|sense, per` or `gadget` (unlocks a gadget id) |
| `suitMods` | `name, desc, cost, armor, swing, quiet, mag` (Sewing Station, one per suit) |
| `recipes` | `name, desc, color, steps:[chop|flip|stir|heat], buff:{type: regen|armor|swing|quiet|maxhp, amount, time(s)}` |
| `news` | `text` + one of `any:true`, `requires:'flag'`, `minRep:n` (TV headlines) |
| `mapArt` | `{ land:[[[x%,y%]…]…], lines:[…], labels:[{text, at, rot, water}], home:'cityId' }` (world map drawing) |
| `strings` | UI text overrides (`gameTitle`, `heroName`, `credits`, …) |
| `tips` | loading-screen tips (array of strings) |
| `hooks` | `onBoot(game)`, `onCityLoaded(game, city)` |

### City layout fields (v1.1)
`edges: { x0|x1|z0|z1: 'water' | { to: 'cityId', label } }` — land edges show the neighbour's skyline and let players cross over (spawning on the matching edge of the destination).
`megaPark: [i0, j0, i1, j1]` — merge a block range into one big park with lakes. `statue: { pos:[x,z], name }` — harbour statue. `bridge: { side:'x1', length, name }`.
`subway` (chance per block of a fast-travel stair), `steam` (vent chance), `lanternStrings: true`, `caches` (supply caches), `traffic`, `peds`, `parks`, `plazas`.

### City styles & landmarks
Building styles: `deco, brick, glass, office, brownstone, warehouse, tenement, lantern, nightglass, stone, brickdark` (brick-ish styles grow fire escapes).
Landmark types: `clocktower, rooftopGarden, bank, pawnshop, gallery, museum, warehouseYard, docks, tower (+style, tiers), park, exchange, theater, gate, diner, church, home` (`home` = the apartment entrance hatch).
Each landmark gets a `pos` and usually `top` (roof) or `door` (street) you can target from steps:
`{ landmark: 'clocktower', key: 'top', offset: [x, y, z], ground: true }`.
Facility (`kind: 'facility'`) segments: `pod_room, corridor, pipes_crouch, debris_vault, climb_shaft, gap_wallrun, ledge_grab, slide_door, exit_hall, exit_yard` — each gets `start` / `end` keys.

## Mission steps

Chapters and side jobs are lists of steps. Any step accepts `text`, `sub`, `thought` (narration caption),
`checkpoint: true` and `at` (respawn point).

| type | fields |
|---|---|
| `title` | `title, subtitle` — comic splash card |
| `dialogue` | `id` |
| `thought` | `text, time` |
| `wait` | `time` |
| `reach` | `target, radius, hint:{button:'LABEL'}` |
| `action` | `action: jump|crouch|slide|vault|climb|mantle|wallrun|swing|zip|ride|sense|gadget|grab|release|camera|dodge|decoy, count` |
| `swingDistance` | `meters` |
| `airtime` | `time` |
| `rings` | `count` or `points`, `timeLimit` |
| `defeat` | `spawn:[{npc, at, count, spread, state, patrol, id}], civilians, stealthFail` |
| `talk` | `npc, dialogue, spawn, after` |
| `interact` | `target, label, dialogue` |
| `collect` | `count, near, radius, color, word` |
| `boss` | `id (npcType with boss:true), name, arena` |
| `ride` | `target, timeLimit, requireRide` |
| `crime` | `crime (id)` |
| `travel` | `city, spawn` |
| `setAbility` | `abilities:{swing, zip, gadgets, ride, wallrun, climb}` |
| `teleport`, `emit`, `fire`, `trigger` | utility steps |

New step types from code: `TetherMod.game.missions.registerStep('myStep', { start(s, ctx){}, update(s, ctx, dt){}, end(s, ctx){} })` — call `this.done()` when finished.

## Dialogue

```js
dialogues: {
  my_talk: { lines: [
    { s: 'pip', t: 'Hi {hero}! Welcome to {city}.' },
    { s: 'tether', t: 'Choose:', choices: [
        { t: 'Sure!', go: 'yes', set: { likesPip: true } },
        { t: 'No.', result: 'decline', end: true } ] },
    { id: 'yes', s: 'pip', t: 'Yay!', sfx: 'collect', emit: 'my:event', end: true },
  ] },
}
```
`s` = speaker id, `t` = text, `go` = jump to line `id`, `set` = save flags, `result` = value passed to the
caller (side-job givers start the job unless the result is `'decline'`), `emit` = bus event, `sfx` = sound.

Skin palette extras (hero style): `gloves, boots, pattern: sides|stripes|lattice|chevron|split|none, emblem: knot|tether|star|bolt|eye|none, lens: classic|big|round|slit, crest:false, goggles, scarf:'#hex', shoulders, mod:'suitModId'`.

Portrait styles: `face, mask, jester, helmet, kid` + options `skin, hair, long, glasses, hat, hatColor, mask, mustache, iron, smile, stern, static, primary, collar, accent, emblem, bg`.

## Sounds
All SFX are synthesized. Add your own recipe:
```js
hooks: { onBoot(game) { game.audio.addRecipe('honk', { dur: 0.4, build(ctx, out) {
  const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = 330; o.connect(out); o.start(0); o.stop(0.35);
} }); } }
```

## Events (`TetherMod.bus.on(name, fn)`)
`player:thwip, player:trick, player:style, player:perfect, player:stylecash, home:station, player:jump, player:land, player:vault, player:wallrun, player:climb, player:zip, player:ride, player:hurt, player:dead,
npc:alert, npc:suspicious, npc:defeated, npc:takedown, npc:talk, boss:hit, boss:defeated, mission:start, mission:complete,
crime:stopped, collectible, city:loaded, dialogue:start, dialogue:end, skin:changed, camera:mode`.
