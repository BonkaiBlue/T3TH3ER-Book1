// Renderer: low internal resolution (PS1/PS2 feel + mobile fill-rate savings), dynamic resolution
// scaling from measured frame time, and a single comic post pass (ink edges from depth + halftone).
import * as THREE from 'three';
import { shared } from './materials.js';

THREE.ColorManagement.enabled = false;

const POST_VS = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }';
const POST_FS = /* glsl */`
uniform sampler2D tColor; uniform sampler2D tDepth; uniform vec2 res; uniform float near; uniform float far;
uniform float dotSize; uniform float inkAmt; uniform float vignette; uniform vec3 paper; uniform float flash; uniform vec3 flashCol; uniform float senseAmt;
varying vec2 vUv;
float lin(float d){ float z = d * 2.0 - 1.0; return (2.0 * near * far) / (far + near - z * (far - near)); }
void main(){
  vec3 c = texture2D(tColor, vUv).rgb;
  vec2 px = 1.0 / res;
  float d0 = lin(texture2D(tDepth, vUv).r);
  float d1 = lin(texture2D(tDepth, vUv + vec2(px.x, 0.0)).r);
  float d2 = lin(texture2D(tDepth, vUv + vec2(0.0, px.y)).r);
  float d3 = lin(texture2D(tDepth, vUv - vec2(px.x, 0.0)).r);
  float d4 = lin(texture2D(tDepth, vUv - vec2(0.0, px.y)).r);
  float e = abs(d1 + d2 + d3 + d4 - 4.0 * d0) / max(d0, 0.5);
  float ink = smoothstep(0.08, 0.2, e) * (1.0 - smoothstep(120.0, 260.0, d0));
  // posterize slightly
  c = floor(c * 12.0 + 0.5) / 12.0;
  // halftone in shadows: dot grid rotated 45deg
  float lum = dot(c, vec3(0.299, 0.587, 0.114));
  vec2 g = gl_FragCoord.xy / dotSize; g = mat2(0.7071, -0.7071, 0.7071, 0.7071) * g;
  vec2 f = fract(g) - 0.5; float r = length(f);
  float rad = clamp((0.62 - lum) * 0.95, 0.0, 0.55);
  float dots = 1.0 - smoothstep(rad - 0.08, rad + 0.04, r);
  c *= 1.0 - dots * 0.28;
  // light dots in bright sky too (like the reference sky)
  float hi = smoothstep(0.55, 0.85, lum) * (1.0 - smoothstep(0.12, 0.2, r)) * 0.07; c += hi;
  c = mix(c, vec3(0.08, 0.06, 0.05), ink * inkAmt);
  c *= paper;
  vec2 v = vUv - 0.5; c *= 1.0 - dot(v, v) * vignette;
  c = mix(c, flashCol, flash);
  // "Tether-sense" desaturate + pulse ring
  float gl = dot(c, vec3(0.333)); c = mix(c, vec3(gl) * vec3(0.8, 0.95, 1.05), senseAmt * 0.6);
  gl_FragColor = vec4(c, 1.0);
}`;

export class Renderer {
  constructor(canvas, settings) {
    this.settings = settings;
    this.gl = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false, alpha: false });
    this.gl.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.gl.setClearColor(0xe3ad4f, 1);
    this.camera = new THREE.PerspectiveCamera(settings.fov || 80, 1, 0.08, 900);
    this.scale = 0.6; this.minScale = 0.35; this.maxScale = 0.85;
    this.frameTimes = []; this._accum = 0;
    this.postScene = new THREE.Scene(); this.postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.postMat = new THREE.ShaderMaterial({
      uniforms: { tColor: { value: null }, tDepth: { value: null }, res: { value: new THREE.Vector2() }, near: { value: 0.08 }, far: { value: 900 },
        dotSize: { value: 3.0 }, inkAmt: { value: 0.9 }, vignette: { value: 0.9 }, paper: { value: new THREE.Color(1.0, 0.98, 0.92) },
        flash: { value: 0 }, flashCol: { value: new THREE.Color('#ffffff') }, senseAmt: { value: 0 } },
      vertexShader: POST_VS, fragmentShader: POST_FS, depthTest: false, depthWrite: false,
    });
    this.postScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.postMat));
    this.rt = null; this.postOK = true;
    this.applyQuality();
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }
  applyQuality() {
    const q = this.settings.quality;
    if (q === 'low') { this.minScale = 0.3; this.maxScale = 0.45; this.scale = 0.4; }
    else if (q === 'high') { this.minScale = 0.55; this.maxScale = 1.0; this.scale = 0.8; }
    else { this.minScale = 0.35; this.maxScale = 0.8; }
    shared.snapOn.value = this.settings.ps1Wobble ? 1 : 0;
    this.resize();
  }
  resize() {
    const W = window.innerWidth, H = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    const s = this.scale * dpr;
    const w = Math.max(160, Math.round(W * s)), h = Math.max(120, Math.round(H * s));
    this.gl.setPixelRatio(1);
    this.gl.setSize(w, h, false);
    this.gl.domElement.style.width = W + 'px'; this.gl.domElement.style.height = H + 'px';
    this.camera.aspect = W / H; this.camera.updateProjectionMatrix();
    this.w = w; this.h = h;
    // PS1 snap grid resolution tied to internal res (coarser = more wobble)
    shared.snapRes.value.set(w / 2.2, h / 2.2);
    if (this.rt) { this.rt.dispose(); this.rt.depthTexture.dispose(); }
    try {
      const dt = new THREE.DepthTexture(w, h); dt.type = THREE.UnsignedIntType;
      this.rt = new THREE.WebGLRenderTarget(w, h, { minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthTexture: dt, depthBuffer: true });
      this.postMat.uniforms.tColor.value = this.rt.texture; this.postMat.uniforms.tDepth.value = dt;
      this.postMat.uniforms.res.value.set(w, h);
      this.postMat.uniforms.dotSize.value = Math.max(2.5, h / 140);
    } catch (e) { console.warn('post disabled', e); this.postOK = false; }
  }
  render(scene, extraScene, extraCam) {
    const ec = extraCam || this.camera;
    const useFX = this.settings.comicFX && this.postOK;
    const gl = this.gl;
    if (useFX) {
      gl.setRenderTarget(this.rt); gl.clear();
      gl.render(scene, this.camera);
      if (extraScene) { gl.autoClear = false; gl.clearDepth(); gl.render(extraScene, ec); gl.autoClear = true; }
      gl.setRenderTarget(null);
      this.postMat.uniforms.near.value = this.camera.near; this.postMat.uniforms.far.value = this.camera.far;
      gl.render(this.postScene, this.postCam);
    } else {
      gl.setRenderTarget(null); gl.autoClear = true;
      gl.render(scene, this.camera);
      if (extraScene) { gl.autoClear = false; gl.clearDepth(); gl.render(extraScene, ec); gl.autoClear = true; }
    }
  }
  // Dynamic resolution: keep frame time near target by nudging internal scale.
  adapt(dt) {
    if (this.settings.quality !== 'auto') return;
    this.frameTimes.push(dt); if (this.frameTimes.length > 45) this.frameTimes.shift();
    this._accum += dt; if (this._accum < 1.5) return; this._accum = 0;
    const avg = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    let s = this.scale;
    if (avg > 1 / 40) s -= 0.08; else if (avg < 1 / 57) s += 0.04;
    s = Math.min(this.maxScale, Math.max(this.minScale, s));
    if (Math.abs(s - this.scale) > 0.01) { this.scale = s; this.resize(); }
  }
  get info() { return this.gl.info.render; }
}
