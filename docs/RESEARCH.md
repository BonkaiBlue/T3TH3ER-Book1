# Research notes → what made it into the engine

## RollerCoaster Tycoon (1999) — "optimize the design, not just the code"
Chris Sawyer wrote RCT almost entirely in x86 **assembly** (not ARM). The useful lessons are mostly
design-level ([Lars Tofus](https://www.larstofus.com/the-gold-standard-of-optimization-a-look-under-the-hood-of-rollercoaster-tycoon)):
right-sized data, power-of-two math via shifts, **hard caps on searches** (guest pathfinding gives up after a few junctions),
**no crowd collision**, and turning limits into gameplay. Applied here:

- Raycasts (swing anchors, AI sight, camera) walk a spatial hash with a hard step cap (256 cells).
- Ambient pedestrians are one InstancedMesh with **no collision or pathfinding** — they walk sidewalk loops and only "panic" by speeding up.
- Melee goons share **attack tokens** (max 2 swing at once) instead of expensive coordination.
- AI beyond 140 m is skipped entirely; body-discovery checks run at 2 Hz, the minimap at 8 Hz.
- Writing assembly isn't possible (or sensible) in a browser; WebAssembly would only help heavy math, and the per-frame game logic here costs ~0.1–0.2 ms on desktop.

## Mobile WebGL / three.js
- Whole city blocks are **merged into one mesh each** with one shared material + one procedural **texture atlas** (16 tiles) → ~25–30 draw calls for a full skyline, ~20k triangles.
- Per-chunk **frustum + distance culling**, fog hides the far plane.
- Cars, pedestrians, fire and particles are **InstancedMesh** (one call each); projectiles, ropes, POW! words and particles are **pooled** (no GC spikes).
- **Dynamic resolution**: internal render scale 0.35–0.85 adapts to frame time; nearest-neighbour upscale doubles as the PS1/PS2 look.
- The whole post stack is **one** full-screen pass (ink edges from depth + halftone + posterize + vignette).

## PS1 → PS2/GameCube look
Low internal resolution, nearest-filtered 128-px textures without mipmaps, flat-shaded low-poly boxes, and optional
**vertex snapping** to a coarse screen grid ("PS1 wobble", toggle in Settings). Toon lighting is 3 flat bands.

## Golden/Silver-age comics
Halftone dot screens in shadows (rotated 45° like CMYK screens), black ink outlines from depth discontinuities,
four-color palettes, Ben-Day dotted skies like the reference skyline, onomatopoeia (POW!/ZZIP!/KAYO!) as pooled DOM text,
narration boxes ("MEANWHILE…") and speech-panel dialogue with procedurally drawn portraits.

## Swinging
Built as a **distance constraint** (pendulum) rather than a physics joint: integrate gravity + "pump" toward the look
direction, then project back onto the rope sphere and delete the outward radial velocity. Anchors are found by fanning
~25 rays up-and-ahead and scoring hits by height, forward distance and angle; holding R2 re-attaches automatically
after each release so swings chain. Release adds a small forward/up boost; ✕ is a swing-jump. Common hobbyist approaches
(e.g. [GameDev.net UE5 swing](https://gamedev.net/blogs/entry/2277849-spider-man-swing-unreal-engine-5), [Roblox pendulum thread](https://devforum.roblox.com/t/how-can-i-make-a-spider-web-sling-with-pendulum-arc/4729710)) moved from engine joints to hand-rolled constraint math for the same reason: joints fight player control.

## Parkour / free-run (Assassin's Creed–style "hold to free-run")
Holding L1 turns obstacles into context actions resolved by short probes: knee/hip probe → vault (land on top or clear thin
walls), chest+head probes → climb & auto-mantle, side probes at speed → wall-run (time-limited, jump off), head-height miss +
chest hit → ledge hang/shimmy. Slides snap the collider low so they actually pass under things.

## Stealth (Hitman-style)
Vision cones with LOS raycasts, a **suspicion meter** (slower when you crouch or are high above — goons rarely look up),
hearing for footsteps/landings/decoys, investigate → search → return states, body discovery, perch & behind takedowns,
and the Decoy Chirp for distraction.

## Sims 3–style travel
Districts are separate generated levels chosen from a stylized map with info cards and a loading screen with tips —
keeps memory bounded on phones instead of streaming one giant world.

## About decomps / recomps / remakes
I deliberately did **not** copy code or assets from decompilations or recompilations of commercial games (Spider-Man,
Assassin's Creed, Hitman, RCT etc. are all still under copyright); everything here is original code built on documented
techniques and MIT-licensed three.js. Fonts are SIL-OFL (Bangers, Bebas Neue). All sounds are synthesized at runtime.

## v1.1 additions
- **One-draw-call characters:** each character is a single `SkinnedMesh` with 16 rigidly-weighted joints (the PS1/PS2 "segmented body" trick) instead of separate meshes per limb — better poses (elbows, knees, feet) for fewer draw calls. Poses are procedural functions blended with exponential smoothing; flips rotate a pivot at the centre of mass.
- **Rope:** a 12-segment crossed-ribbon line rebuilt each frame in one buffer — it travels out from the hand (~80 ms), wobbles on impact with a decaying wave and sags when slack.
- **Seamless-feeling districts without a monolithic world:** each district still loads on its own (memory stays bounded on phones), but its land edges are lined with a real, collidable strip of the neighbouring skyline, and crossing the edge loads the neighbour at the matching edge, keeping your momentum.
- **BASIC interpreter:** time-sliced (a few thousand statements per frame) so BRASS-64 programs run inside the game loop; `WAIT` counts frames, `KEY`/`INKEY$` read a small key buffer fed by the on-screen pad, a hardware keyboard or Android's soft keyboard.
