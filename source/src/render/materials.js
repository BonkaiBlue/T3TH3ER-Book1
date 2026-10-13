// "Comic" material: one shared shader for the whole world (atlas + vertex colors + toon bands
// + fog + optional PS1 vertex snapping). One material => merged chunks => very few draw calls.
import * as THREE from 'three';

export const shared = {
  atlas: { value: null },
  sunDir: { value: new THREE.Vector3(-0.5, 0.75, 0.35).normalize() },
  sunColor: { value: new THREE.Color('#fff1c8') },
  skyColor: { value: new THREE.Color('#e8b45a') },
  groundColor: { value: new THREE.Color('#5a4a3a') },
  fogColor: { value: new THREE.Color('#e3ad4f') },
  fogNear: { value: 60 }, fogFar: { value: 260 },
  snapRes: { value: new THREE.Vector2(320, 240) },
  snapOn: { value: 1 },
  time: { value: 0 },
};

const vert = /* glsl */`
attribute vec4 tile;
#include <skinning_pars_vertex>
varying vec3 vCol; varying vec2 vUv; varying vec4 vTile; varying float vFog; varying float vLight; varying vec3 vN;
uniform vec3 sunDir; uniform float fogNear; uniform float fogFar; uniform vec2 snapRes; uniform float snapOn; uniform float time;
uniform float wobble;
void main(){
  mat4 m = modelMatrix;
  #ifdef USE_INSTANCING
    m = modelMatrix * instanceMatrix;
  #endif
  vec3 transformed = position; vec3 objectNormal = normal;
  #ifdef USE_SKINNING
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <skinning_vertex>
  #endif
  vec4 wp = m * vec4(transformed, 1.0);
  vec3 n = normalize(mat3(m) * objectNormal);
  vN = n;
  float d = dot(n, sunDir);
  vLight = d;
  vec4 mv = viewMatrix * wp;
  vec4 cp = projectionMatrix * mv;
  if (snapOn > 0.5) { cp.xy = floor(cp.xy / cp.w * snapRes + 0.5) / snapRes * cp.w; }
  gl_Position = cp;
  vFog = smoothstep(fogNear, fogFar, -mv.z);
  vCol = vec3(1.0);
  #ifdef USE_COLOR
    vCol = color;
  #endif
  #ifdef USE_INSTANCING_COLOR
    vCol *= instanceColor;
  #endif
  vUv = uv; vTile = tile;
}`;
const frag = /* glsl */`
uniform sampler2D atlas; uniform vec3 sunColor; uniform vec3 skyColor; uniform vec3 groundColor; uniform vec3 fogColor;
uniform vec3 tint; uniform float tintAmt; uniform float opacity; uniform float emissive; uniform float useAtlas;
varying vec3 vCol; varying vec2 vUv; varying vec4 vTile; varying float vFog; varying float vLight; varying vec3 vN;
void main(){
  vec3 base = vCol;
  if (useAtlas > 0.5 && vTile.z > 0.0) {
    vec2 uv = vTile.xy + fract(vUv) * vTile.zw;
    base *= texture2D(atlas, uv).rgb;
  }
  // 3-band toon light like flat comic coloring
  float l = vLight;
  float band = l > 0.45 ? 1.0 : (l > 0.0 ? 0.78 : 0.58);
  vec3 amb = mix(groundColor, skyColor, vN.y * 0.5 + 0.5) * 0.35;
  vec3 c = base * (sunColor * band * 0.8 + amb);
  c = mix(c, base * 1.15, emissive);
  c = mix(c, tint, tintAmt);
  c = mix(c, fogColor, vFog);
  gl_FragColor = vec4(c, opacity);
}`;

export function comicMaterial(opts = {}) {
  const m = new THREE.ShaderMaterial({
    uniforms: {
      ...shared,
      tint: { value: new THREE.Color(opts.tint || '#ffffff') }, tintAmt: { value: 0 },
      opacity: { value: opts.opacity ?? 1 }, emissive: { value: opts.emissive ?? 0 },
      useAtlas: { value: opts.atlas === false ? 0 : 1 }, wobble: { value: 0 },
    },
    vertexShader: vert, fragmentShader: frag,
    vertexColors: true, transparent: !!opts.transparent, side: opts.side ?? THREE.FrontSide,
    depthWrite: opts.depthWrite ?? true,
  });
  return m;
}

// ---------------- Texture atlas (procedural, 4x4 tiles of 128px) ----------------
export const TILE = {
  brick: 0, deco: 1, glass: 2, office: 3, warehouse: 4, brownstone: 5, roof: 6, road: 7,
  sidewalk: 8, labwall: 9, labfloor: 10, grate: 11, grass: 12, water: 13, wood: 14, plain: 15,
  tenement: 16, lantern: 17, nightglass: 18, stone: 19, wallpaper: 20, kitchen: 21, rug: 22, marquee: 23, brickdark: 24, cobble: 25,
};
export const ATLAS_ROWS = 8;
export function tileRect(i) { const x = i % 4, y = Math.floor(i / 4); return [x / 4 + 0.002, 1 - (y + 1) / ATLAS_ROWS + 0.001, 0.25 - 0.004, 1 / ATLAS_ROWS - 0.002]; }

export function buildAtlas() {
  const S = 128, cv = document.createElement('canvas'); cv.width = S * 4; cv.height = S * ATLAS_ROWS;
  const g = cv.getContext('2d');
  const at = (i, fn) => { g.save(); g.translate((i % 4) * S, Math.floor(i / 4) * S); g.beginPath(); g.rect(0, 0, S, S); g.clip(); fn(g); g.restore(); };
  const ink = '#1d1712';
  const win = (x, y, w, h, lit) => {
    g.fillStyle = ink; g.fillRect(x - 3, y - 3, w + 6, h + 6);
    g.fillStyle = lit ? '#ffe9a0' : '#5b7f86'; g.fillRect(x, y, w, h);
    g.fillStyle = lit ? '#fff7d8' : '#86b1b3'; g.fillRect(x + 3, y + 3, w * 0.35, h * 0.3);
    g.fillStyle = ink; g.fillRect(x + w / 2 - 1.5, y, 3, h);
  };
  // brick
  at(TILE.brick, () => {
    g.fillStyle = '#c9775a'; g.fillRect(0, 0, S, S);
    g.strokeStyle = 'rgba(80,30,20,0.45)'; g.lineWidth = 2;
    for (let y = 0; y < S; y += 10) { g.beginPath(); g.moveTo(0, y); g.lineTo(S, y); g.stroke(); for (let x = (y / 10) % 2 ? 0 : 12; x < S; x += 24) { g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + 10); g.stroke(); } }
    win(34, 30, 60, 70, false);
    g.fillStyle = '#e2d4b0'; g.fillRect(26, 100, 76, 8);
  });
  at(TILE.deco, () => {
    g.fillStyle = '#d9c9a0'; g.fillRect(0, 0, S, S);
    g.fillStyle = '#b9a67c'; g.fillRect(0, 0, 14, S); g.fillRect(S - 14, 0, 14, S);
    win(30, 22, 68, 78, true);
    g.fillStyle = ink; g.fillRect(0, 112, S, 4);
    g.fillStyle = '#8f7a50'; for (let i = 0; i < 5; i++) g.fillRect(18 + i * 20, 116, 10, 12);
  });
  at(TILE.glass, () => {
    const gr = g.createLinearGradient(0, 0, S, S); gr.addColorStop(0, '#6fb3b8'); gr.addColorStop(1, '#3d7a85');
    g.fillStyle = gr; g.fillRect(0, 0, S, S);
    g.fillStyle = 'rgba(255,255,230,0.35)'; g.beginPath(); g.moveTo(10, 0); g.lineTo(50, 0); g.lineTo(0, 50); g.lineTo(0, 10); g.fill();
    g.fillStyle = ink; g.fillRect(0, 0, S, 5); g.fillRect(0, 0, 5, S); g.fillRect(S / 2 - 2, 0, 4, S);
  });
  at(TILE.office, () => {
    g.fillStyle = '#a3a08e'; g.fillRect(0, 0, S, S);
    win(14, 26, 44, 60, false); win(72, 26, 44, 60, true);
    g.fillStyle = '#7b7866'; g.fillRect(0, 100, S, 10);
  });
  at(TILE.warehouse, () => {
    g.fillStyle = '#7a8a7e'; g.fillRect(0, 0, S, S);
    g.fillStyle = 'rgba(0,0,0,0.25)'; for (let x = 0; x < S; x += 12) g.fillRect(x, 0, 4, S);
    g.fillStyle = '#c96a3a'; g.fillRect(0, 0, S, 6);
  });
  at(TILE.brownstone, () => {
    g.fillStyle = '#8a5a44'; g.fillRect(0, 0, S, S);
    win(24, 22, 34, 72, true); win(72, 22, 34, 72, false);
    g.fillStyle = '#d8c6a0'; g.fillRect(16, 12, 96, 8); g.fillRect(16, 98, 96, 6);
  });
  at(TILE.roof, () => {
    g.fillStyle = '#857a6c'; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 400; i++) { g.fillStyle = Math.random() < 0.5 ? '#766b5d' : '#958a7b'; g.fillRect(Math.random() * S, Math.random() * S, 3, 3); }
  });
  at(TILE.road, () => {
    g.fillStyle = '#4b4743'; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 300; i++) { g.fillStyle = 'rgba(0,0,0,0.15)'; g.fillRect(Math.random() * S, Math.random() * S, 2, 2); }
    g.fillStyle = '#f2c94c'; g.fillRect(S / 2 - 3, 10, 6, 46); g.fillRect(S / 2 - 3, 74, 6, 46);
  });
  at(TILE.sidewalk, () => {
    g.fillStyle = '#b8ad98'; g.fillRect(0, 0, S, S);
    g.strokeStyle = '#8c826f'; g.lineWidth = 3; g.strokeRect(1, 1, S / 2 - 2, S / 2 - 2); g.strokeRect(S / 2 + 1, 1, S / 2 - 2, S / 2 - 2);
    g.strokeRect(1, S / 2 + 1, S / 2 - 2, S / 2 - 2); g.strokeRect(S / 2 + 1, S / 2 + 1, S / 2 - 2, S / 2 - 2);
  });
  at(TILE.labwall, () => {
    g.fillStyle = '#c9cfc7'; g.fillRect(0, 0, S, S);
    g.strokeStyle = '#7d877f'; g.lineWidth = 3; g.strokeRect(4, 4, S - 8, S - 8);
    g.fillStyle = '#e0e6dc'; g.fillRect(10, 10, S - 20, 20);
    g.fillStyle = '#d6a12e'; for (let x = -S; x < S; x += 22) { g.save(); g.beginPath(); g.rect(0, S - 16, S, 12); g.clip(); g.fillRect(x, S - 16, 11, 12); g.restore(); }
    g.fillStyle = ink; g.fillRect(0, S - 18, S, 2);
  });
  at(TILE.labfloor, () => {
    g.fillStyle = '#8f9a96'; g.fillRect(0, 0, S, S);
    g.fillStyle = '#7c8783'; g.fillRect(0, 0, S / 2, S / 2); g.fillRect(S / 2, S / 2, S / 2, S / 2);
  });
  at(TILE.grate, () => {
    g.fillStyle = '#4a4c4f'; g.fillRect(0, 0, S, S);
    g.strokeStyle = '#2a2b2d'; g.lineWidth = 4; for (let i = 0; i < S; i += 16) { g.beginPath(); g.moveTo(i, 0); g.lineTo(i, S); g.stroke(); g.beginPath(); g.moveTo(0, i); g.lineTo(S, i); g.stroke(); }
  });
  at(TILE.grass, () => {
    g.fillStyle = '#6f9a45'; g.fillRect(0, 0, S, S);
    for (let i = 0; i < 250; i++) { g.fillStyle = Math.random() < 0.5 ? '#5f8a39' : '#83ad55'; g.fillRect(Math.random() * S, Math.random() * S, 2, 5); }
  });
  at(TILE.water, () => {
    g.fillStyle = '#4f8d93'; g.fillRect(0, 0, S, S);
    g.strokeStyle = '#8cc3c2'; g.lineWidth = 3;
    for (let y = 10; y < S; y += 24) { g.beginPath(); for (let x = 0; x <= S; x += 8) g.lineTo(x, y + Math.sin(x * 0.2 + y) * 3); g.stroke(); }
  });
  at(TILE.wood, () => {
    g.fillStyle = '#9a6a3c'; g.fillRect(0, 0, S, S);
    g.fillStyle = '#7d5430'; for (let y = 0; y < S; y += 16) g.fillRect(0, y, S, 2);
  });
  at(TILE.plain, () => { g.fillStyle = '#ffffff'; g.fillRect(0, 0, S, S); });
  at(TILE.tenement, () => {
    g.fillStyle = '#b5543a'; g.fillRect(0, 0, S, S);
    g.strokeStyle = 'rgba(70,25,15,0.4)'; g.lineWidth = 2; for (let y = 0; y < S; y += 9) { g.beginPath(); g.moveTo(0, y); g.lineTo(S, y); g.stroke(); }
    win(18, 26, 30, 62, false); win(80, 26, 30, 62, true);
    g.fillStyle = '#e2d4b0'; g.fillRect(12, 16, 42, 6); g.fillRect(74, 16, 42, 6);
  });
  at(TILE.lantern, () => {
    g.fillStyle = '#c0362c'; g.fillRect(0, 0, S, S);
    g.fillStyle = '#f2c14e'; g.fillRect(0, 0, S, 10); g.fillRect(0, S - 10, S, 10);
    win(14, 26, 44, 56, true); win(70, 26, 44, 56, false);
    g.fillStyle = '#1e7a4a'; g.fillRect(10, 92, 108, 18); g.fillStyle = '#f2c14e'; g.font = 'bold 14px sans-serif'; g.fillText('福 · 龍 · 茶', 22, 106);
  });
  at(TILE.nightglass, () => {
    g.fillStyle = '#1f3550'; g.fillRect(0, 0, S, S);
    for (let y = 6; y < S; y += 21) for (let x = 6; x < S; x += 21) { g.fillStyle = Math.random() < 0.45 ? '#ffe9a0' : '#2c4a6a'; g.fillRect(x, y, 15, 15); }
    g.fillStyle = '#0d1a28'; g.fillRect(0, 0, S, 3); g.fillRect(0, 0, 3, S);
  });
  at(TILE.stone, () => {
    g.fillStyle = '#b7b0a2'; g.fillRect(0, 0, S, S);
    g.strokeStyle = 'rgba(60,55,45,0.35)'; g.lineWidth = 2; for (let y = 0; y < S; y += 16) { g.beginPath(); g.moveTo(0, y); g.lineTo(S, y); g.stroke(); }
    win(36, 24, 56, 70, false); g.fillStyle = '#8f887a'; g.beginPath(); g.moveTo(30, 24); g.lineTo(64, 6); g.lineTo(98, 24); g.closePath(); g.fill();
  });
  at(TILE.wallpaper, () => {
    g.fillStyle = '#d9c38a'; g.fillRect(0, 0, S, S);
    g.fillStyle = '#c4a96c'; for (let x = 0; x < S; x += 16) g.fillRect(x, 0, 6, S);
    g.fillStyle = '#9a5a3a'; for (let y = 8; y < S; y += 32) for (let x = 11; x < S; x += 32) { g.beginPath(); g.arc(x, y, 3, 0, 6.28); g.fill(); }
    g.fillStyle = '#6b4a2e'; g.fillRect(0, S - 14, S, 14);
  });
  at(TILE.kitchen, () => {
    g.fillStyle = '#f2f0e6'; g.fillRect(0, 0, S, S);
    for (let y = 0; y < S; y += 16) for (let x = 0; x < S; x += 16) if (((x + y) / 16) % 2 === 0) { g.fillStyle = '#2a9d9a'; g.fillRect(x, y, 16, 16); }
  });
  at(TILE.rug, () => {
    g.fillStyle = '#8a2a2a'; g.fillRect(0, 0, S, S); g.strokeStyle = '#f2c14e'; g.lineWidth = 6; g.strokeRect(10, 10, S - 20, S - 20);
    g.strokeStyle = '#2a6f8a'; g.lineWidth = 4; g.strokeRect(26, 26, S - 52, S - 52); g.fillStyle = '#f2c14e'; g.beginPath(); g.moveTo(64, 40); g.lineTo(88, 64); g.lineTo(64, 88); g.lineTo(40, 64); g.fill();
  });
  at(TILE.marquee, () => {
    g.fillStyle = '#1d1712'; g.fillRect(0, 0, S, S); g.fillStyle = '#f2c14e'; g.fillRect(6, 6, S - 12, S - 12); g.fillStyle = '#c0362c'; g.fillRect(12, 12, S - 24, S - 24);
    g.fillStyle = '#fff4dc'; g.font = 'bold 22px Impact, sans-serif'; g.fillText('CROWN', 26, 56); g.fillText('TONITE', 22, 86);
    g.fillStyle = '#ffe9a0'; for (let x = 10; x < S; x += 12) { g.fillRect(x, 4, 4, 4); g.fillRect(x, S - 8, 4, 4); }
  });
  at(TILE.brickdark, () => {
    g.fillStyle = '#6e3a30'; g.fillRect(0, 0, S, S);
    g.strokeStyle = 'rgba(30,10,8,0.5)'; g.lineWidth = 2;
    for (let y = 0; y < S; y += 10) { g.beginPath(); g.moveTo(0, y); g.lineTo(S, y); g.stroke(); }
    win(20, 30, 32, 58, true); win(76, 30, 32, 58, false);
  });
  at(TILE.cobble, () => {
    g.fillStyle = '#8c8578'; g.fillRect(0, 0, S, S);
    for (let y = 0; y < S; y += 14) for (let x = (y / 14) % 2 ? 0 : 9; x < S; x += 18) { g.fillStyle = Math.random() < 0.5 ? '#9a9386' : '#7d766a'; g.fillRect(x + 1, y + 1, 16, 12); }
  });
  const tex = new THREE.CanvasTexture(cv);
  tex.magFilter = THREE.NearestFilter; tex.minFilter = THREE.NearestFilter; tex.generateMipmaps = false;
  tex.colorSpace = THREE.NoColorSpace;
  shared.atlas.value = tex;
  return tex;
}
