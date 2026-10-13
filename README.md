# TETHER — Book One

A low-poly, comic-book first-person traversal / stealth / brawler for mobile browsers.
Swing, free-run, climb, wall-run, skate, bike — then take down goons Hitman-style from the rooftops.

## ▶ Play now

**https://bonkaiblue.github.io/T3TH3ER-Book1/** — opens in any phone or desktop browser.
On Android: open it in Chrome, then ⋮ → **Add to Home screen** for a full-screen app icon.

## Running it

| Where | How |
|---|---|
| Any browser | Use the **Play now** link above (hosted free on GitHub Pages from this repo). |
| Desktop, offline | Download the repo (**Code → Download ZIP**), unzip, double-click `Boot.html`. Click the game once to capture the mouse. |
| Android, offline | In **Termux** (`pkg install python` once): `cd` into the game folder, run `python -m http.server 8080`, then open `http://localhost:8080/Boot.html` in Chrome. (Android Chrome won't open local `file://` pages directly.) |
| Android APK | Planned: an automatic APK build via GitHub Actions (the in-game Quit button will close the app there). |
| Gamepad | Any standard Bluetooth/USB pad works (PS/Xbox layout). |

Portrait and landscape are both supported — rotate any time; the controller overlay re-lays itself out.

## Controls (touch overlay mirrors a PlayStation pad)

- **Left stick** move (push fully to run) · **drag anywhere else** to look
- **✕** jump / vault / mantle / swing-jump · **in the air: tricks** (stick: front/back flip, corkscrew, side spin) · **○** crouch / slide / drop / dodge · hold in the air: dive
- **■** interact / talk / strike / takedown (hold: reload) · **▲** next gadget (hold: gear menu)
- **R2** hold to swing (keep holding to chain) · **L2** aim (+R2 = point-launch) · **R1** fire gadget
- **L1** hold to free-run (auto vault/climb/wall-run) · **L3** Tether-Sense · **R3** camera (FP → 3rd → shoulder R → shoulder L)
- **D-pad** ▼ ride (board → skates → bike) · ◀ ▶ gadget · ▲ objective ping · **START** pause · **SELECT** world map

Keyboard: WASD, mouse, Space, C, E, Q, F (swing), Z (aim), R/LMB (gadget), Shift (free-run), Tab (sense), V (camera), arrows, Esc, M.

## What's in Book One

1. **Spark** — wake in a burning lab; movement tutorial (crouch, vault, climb, wall-run, ledge-grab, slide) and your first stealth takedowns.
2. **Line & Self** — learn to swing and point-launch while learning whose face you have. Meet Pip.
3. **Hero Work** — gadgets, Tether-Sense, a stealth robbery, a mugging and a getaway van. Meet Officer Reyes.
4. **The Violet Jester** — hostages on the bridge, bombs on the rooftops, and a boss on a jet-kite.

The story is optional: **Free Roam** gives you every district, random crimes from the police scanner, side jobs (Pigeon Post, Rooftop Relay, Skate Courier, Night Watch, Front Page) and 20 Golden Age Pages per district.

### Greater Brasshaven (v1.1)

A fictional island city in the classic comic-book big-city mould, south → north:
**Ledger District** (glass canyons, Lady Brass statue) · **Lantern Quarter** (lanterns, night markets) · **Midtown** (Clock Tower, Klaxon, Brass Bay Bridge) · **Kettle's Row** (tenements, fire escapes — your home) · **Founders' Green** (the big park) · **Gilded Heights** · **Crownsend** (brownstones, the Crown Theater) — plus the **Ironworks Docks** across the Ironside Channel and the example **Sunset Pier** mod.
Neighbouring districts are visible past each edge: walk or swing off the edge to cross over. Green subway stairs are fast travel.

### Home (v1.1)

Okafor's walk-up in Kettle's Row (teal rooftop hatch, or **⌂ GO HOME** from the pause menu / map):
- **Workstation** — refill line fluid for free, buy upgrades with ⚙ parts (swing power, launch range, armor, health, fluid tank, magazine, sense) and unlock the Spark Line and Snare Mine gadgets.
- **Kitchen** — five recipes, each a quick timing minigame (chop / flip / stir / heat); better cooking = stronger, longer buff. The fridge has a snack.
- **BRASS-64** — an 80s computer running a real BASIC interpreter. Play SNAKE, ROOFRUN, GUESS or LANDER, read Okafor's encrypted journal, or write and SAVE your own programs (the ✎ EDIT button gives a full-screen editor on phones).
- **Sewing Station** — design suits on a live, rotating model: six colour slots, patterns, emblems, lens shapes, crest, goggles, scarf, shoulder pads, plus one suit mod (padding, aero seams, soft soles, deep pockets).
- **Bed** (pick the time of day: morning, golden hour, dusk, night), **TV** (Evening Klaxon news), **Clippings wall** (your story and stats), **Window** (back out).

**Parts ⚙** come from landing clean trick combos, stopping crimes, takedowns, side jobs, pages and chapters. **Line fluid** reloads your gadget cartridges (hold ■); refill at home or at teal supply caches on rooftops.

## Folder layout

```
Boot.html                 ← launcher (loads packs, then the engine)
index.html                ← redirect for web hosts
game/tether.js            ← engine bundle (three.js r170 included)
game/style.css, fonts/    ← UI theme + OFL fonts
packs/packs.manifest.js   ← which content packs load, in order
packs/base/*.pack.js      ← the base game as data (world + story)
packs/skins/…             ← example skin pack
packs/mods/…              ← example DLC district
assets/sfx/*.wav          ← every synthesized sound exported as WAV (thwip.wav!)
source/src/home/          ← apartment stations: workstation, kitchen, BRASS-64 terminal, sewing
docs/                     ← MODDING, RESEARCH, STORY notes
source/                   ← full engine source + build script
```

## Rebuilding the engine

```
cd source && npm install && node build.mjs      # writes ../game/tether.js
```

See `docs/MODDING.md` to add suits, districts, gadgets, crimes, side jobs, chapters and dialogue without touching engine code.

## Updating the live game (from Termux)

GitHub Pages republishes automatically about a minute after every push to `main`:

```
cd ~/projects/T3TH3ER-Book1
git add .
git commit -m "describe what changed"
git push
```

## Changelog

- **v1.1** (2026-10-13) — New skinned character rig with segmented limbs and ~40 hand-tuned poses (run/sprint cycles, swing that leans along the rope, wall-run, climb, combat combo, landing roll). Air tricks with a style → parts economy. Swinging rebuilt: smarter anchor picking (ahead and above, favouring building edges off to the side), rope that shoots out and wobbles, ground-safe arcs, perfect-release boost, chain bonus. Eight-district island city (Ledger, Lantern Quarter, Midtown, Kettle's Row, Founders' Green, Gilded Heights, Crownsend, Docks) with edge crossings, subway fast travel, fire escapes, steam vents, pigeons. Home apartment with workstation upgrades, cooking minigame, BRASS-64 BASIC computer, sewing station, bed (time of day), TV and clippings. Line fluid + supply caches, two new gadgets, meal buffs, suit mods. Quit Game button. Fixes: stale arrival captions, mission steps skipping ahead, boss yank reliability (homing assist), supply caches outside the district.
- **v1.0** (2026-10-12) — Book One, Chapters 1–4, Free Roam, side jobs, mod packs. Published to GitHub and GitHub Pages.
