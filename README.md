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
| Android APK | Planned: an automatic APK build via GitHub Actions. |
| Gamepad | Any standard Bluetooth/USB pad works (PS/Xbox layout). |

Portrait and landscape are both supported — rotate any time; the controller overlay re-lays itself out.

## Controls (touch overlay mirrors a PlayStation pad)

- **Left stick** move (push fully to run) · **drag anywhere else** to look
- **✕** jump / vault / mantle / swing-jump · **○** crouch / slide / drop / dodge
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

- **v1.0** (2026-10-12) — Book One, Chapters 1–4, Free Roam, side jobs, mod packs. Published to GitHub and GitHub Pages.
