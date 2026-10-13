// Game: top-level state machine (boot → title → loading → play ⇄ pause) and the frame loop.
// Systems communicate through the event bus; content comes from the registry (packs).
import * as THREE from 'three';
import { bus } from './core/events.js';
import { registry, installModAPI } from './core/registry.js';
import { save } from './core/save.js';
import { input } from './ui/input.js';
import { TouchOverlay } from './ui/overlay.js';
import { Renderer } from './render/renderer.js';
import { buildAtlas } from './render/materials.js';
import { buildCharacter, animateCharacter, buildViewModel, buildRide } from './render/models.js';
import { FX } from './render/fx.js';
import { World } from './world/world.js';
import { Player } from './player/player.js';
import { CameraRig } from './player/camera.js';
import { NPCManager } from './npc/npc.js';
import { Boss } from './npc/boss.js';
import { Combat } from './gameplay/combat.js';
import { MissionRunner } from './gameplay/missions.js';
import { Activities } from './gameplay/activities.js';
import { Dialogue } from './ui/dialogue.js';
import { HUD } from './ui/hud.js';
import { Menus, camName } from './ui/menus.js';
import { Audio } from './audio/sfx.js';
import { Home } from './home/home.js';
import { clamp, damp, dampAngle } from './core/util.js';
const _hv = new THREE.Vector3();

export class Game {
  constructor() {
    this.version = '1.1.0';
    this.registry = registry; this.save = save; this.bus = bus; this.input = input;
    this.mod = installModAPI(this);
    registry.setDisabled(save.data.mods.disabled);
    this.state = 'boot'; this.time = 0; this.hitstop = 0; this.storyMode = false; this.freeRoam = false;
    this.audio = new Audio(save.settings);
    this.renderer = new Renderer(document.getElementById('gl'), save.settings);
    buildAtlas();
    this.overlay = new TouchOverlay(document.getElementById('ctrl'), save.settings);
    this.overlay.setVisible(false);
    this.world = new World(this.renderer);
    this.fx = new FX(this.world.scene); this.world.fx = this.fx;
    this.player = new Player(this);
    this.rig = new CameraRig(this.renderer.camera, save.settings);
    this.npcs = new NPCManager(this); this.npcs.attach(this.world.scene);
    this.combat = new Combat(this); this.combat.attach(this.world.scene);
    this.missions = new MissionRunner(this);
    this.activities = new Activities(this);
    this.dialogue = new Dialogue(this);
    this.hud = new HUD(this);
    this.menus = new Menus(this);
    this.vmScene = new THREE.Scene();
    this.vmCam = new THREE.PerspectiveCamera(60, 1, 0.01, 10); // viewmodel camera: fixed horizontal FOV so hands fit any aspect
    this.home = new Home(this);
    this.setSkin(save.data.skin, true);
    this.home.applyUpgrades();
    this.world.onFlock = () => this.audio.play('whoosh', { vol: 0.25, rate: 1.8, minGap: 0.5 });
    this._wire();
    registry.runHook('onBoot', this);
    this.last = performance.now();
    requestAnimationFrame((t) => this.frame(t));
  }

  // ---------------------------------------------------------------- setup helpers
  setSkin(id, silent, temp) {
    const s = registry.get('skins', id) || registry.get('skins', 'tether_classic') || registry.list('skins')[0];
    if (!s) return;
    if (!temp) { this.save.data.skin = s.id; if (!silent) this.save.write(); }
    this.activeSkin = s.id;
    if (this.heroModel) this.world.scene.remove(this.heroModel.root);
    this.heroModel = buildCharacter({ ...s.palette, style: s.style || 'hero' }, { hero: true });
    if (this.vm) this.vmScene.remove(this.vm.group);
    this.vm = buildViewModel(s.palette); this.vmScene.add(this.vm.group);
    this.vm.kickT = { L: 0, R: 0 };
    this.vm.kick = (side) => (this.vm.kickT[side] = 0.18);
    this.viewmodel = this.vm;
    if (this.world.scene) this.world.scene.add(this.heroModel.root);
    if (this.home && id !== '__preview') this.home.applyUpgrades();
    bus.emit('skin:changed', s);
  }
  applySettings() {
    const S = save.settings;
    this.renderer.applyQuality(); this.audio.applyVolumes(); this.overlay.layout();
    if (this.rig.mode !== S.camera) this.rig.mode = S.camera;
  }
  cycleCamera() { const m = this.rig.cycle(); save.write(); this.hud.toast('Camera: ' + camName(m), 1.2); bus.emit('camera:mode', m); }

  _wire() {
    const A = this.audio, p = this.player;
    bus.on('player:thwip', () => { A.play('thwip'); this.vm && this.vm.kick('R'); });
    bus.on('player:release', (e) => A.play(e && e.jump ? 'whoosh' : 'release', { vol: 0.6 }));
    bus.on('player:zip', () => A.play('zip'));
    bus.on('player:ziparrive', () => A.play('whoosh', { vol: 0.5 }));
    bus.on('player:jump', () => A.play('jump', { vol: 0.6 }));
    bus.on('player:land', (e) => { A.play('land', { vol: clamp(e.impact * 1.4, 0.2, 1) }); if (e.impact > 0.6) this.rig.addShake(e.impact * 0.5); });
    bus.on('player:step', (e) => A.play('step', { vol: e.crouch ? 0.15 : 0.35 + Math.min(0.3, e.speed * 0.03), rate: 0.9 + Math.random() * 0.2 }));
    bus.on('player:vault', () => A.play('whiff', { vol: 0.5 }));
    bus.on('player:mantle', () => A.play('whiff', { vol: 0.4, rate: 0.8 }));
    bus.on('player:grab', () => A.play('step', { vol: 0.6, rate: 0.7 }));
    bus.on('player:slide', () => A.play('whoosh', { vol: 0.5, rate: 0.7 }));
    bus.on('player:wallrun', () => A.play('whoosh', { vol: 0.4, rate: 1.2 }));
    bus.on('player:noanchor', () => { this.hud.toast('Nothing tall enough to anchor to!', 1.2); A.play('ui_back', { vol: 0.4 }); });
    bus.on('player:ride', (r) => { A.play('ride'); this.hud.toast(r ? (registry.get('rides', r) || {}).name || r : 'On foot', 1); this.updateRideMesh(); });
    bus.on('player:bail', () => { A.play('land'); this.hud.toast('BAIL!', 1); });
    bus.on('player:splash', () => { A.play('whoosh', { rate: 0.5 }); this.hud.toast('Splash! Back to the rooftops.', 1.6); });
    bus.on('player:hurt', () => A.play('hurt', { vol: 0.5, minGap: 0.25 }));
    bus.on('player:dead', () => this.onDeath());
    bus.on('npc:suspicious', () => A.play('suspicious', { vol: 0.5, minGap: 0.6 }));
    bus.on('npc:alert', () => A.play('alert', { minGap: 0.8 }));
    bus.on('npc:telegraph', (e) => this.combat.telegraph(e.npc));
    bus.on('npc:defeated', () => {});
    bus.on('noise', (n) => this.npcs.onNoise(n));
    bus.on('ui:inventory', () => this.openInventory());
    bus.on('ui:map', () => { if (this.state === 'play' && !this.world.data.interior) { this.pause(); this.menus.go(() => this.menus.worldMap(true)); } });
    bus.on('mission:complete', (def) => this.onMissionComplete(def));
    bus.on('boss:defeated', () => { this.hud.toast('THE JESTER IS DOWN!', 3); });
    bus.on('player:style', (e) => this.hud.stylePop(e));
    bus.on('player:perfect', () => { this.hud.stylePop({ label: 'PERFECT RELEASE', style: this.player.style, combo: this.player.combo }); A.play('collect', { vol: 0.35, rate: 1.5 }); });
    bus.on('player:trick', () => A.play('whoosh', { vol: 0.45, rate: 1.4 }));
    bus.on('player:bailstyle', () => this.hud.stylePop(null));
    bus.on('player:roll', () => A.play('step', { vol: 0.5, rate: 0.6 }));
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'play') this.pause(); });
    // desktop: click canvas to capture mouse
    document.getElementById('ctrl').addEventListener('click', () => {
      if (this.state === 'play' && input.lastDevice === 'kbm' && !matchMedia('(pointer:coarse)').matches) document.body.requestPointerLock && document.body.requestPointerLock();
    });
    // unlock audio on first gesture
    const unlock = () => { this.audio.unlock(); };
    window.addEventListener('pointerdown', unlock, { once: false }); window.addEventListener('keydown', unlock, { once: true });
  }
  updateRideMesh() {
    if (this.rideMesh) { this.world.dynamic.remove(this.rideMesh); this.rideMesh = null; }
    if (this.player.ride) { this.rideMesh = buildRide(this.player.ride); this.world.dynamic.add(this.rideMesh); }
  }

  // ---------------------------------------------------------------- flow
  boot() {
    this.state = 'menu';
    document.getElementById('bootsplash').classList.add('hide');
    this.menus.title();
    // attract-mode background: load city behind title
    this.travel(save.data.lastCity || 'midtown', { attract: true });
  }
  toTitle() {
    this.home.close(true);
    this.missions.stop(false); this.activities.clear(); this.npcs.clear(); this.despawnBoss();
    this.storyMode = false; this.freeRoam = false; this.state = 'menu'; this.overlay.setVisible(false); this.hud.show(false);
    document.exitPointerLock && document.exitPointerLock();
    this.menus.title(); save.write();
  }
  pause() {
    if (this.state !== 'play') return;
    this.state = 'pause'; this.overlay.setVisible(false); input.clearTouch();
    document.exitPointerLock && document.exitPointerLock();
    this.menus.pause(); bus.emit('game:pause');
  }
  // Browsers only let a page close itself in a few cases (installed app / script-opened tab), so try the
  // native routes first and otherwise show a "safe to close" screen.
  quit() {
    save.write(); this.audio.play('ui_back');
    try { const cap = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.App; if (cap && cap.exitApp) { cap.exitApp(); return; } } catch (e) { /* not native */ }
    try { if (navigator.app && navigator.app.exitApp) { navigator.app.exitApp(); return; } } catch (e) { /* not cordova */ }
    try { if (document.fullscreenElement) document.exitFullscreen(); } catch (e) { /* ignore */ }
    window.close();
    setTimeout(() => { this.state = 'quit'; this.menus.quitScreen(); }, 250);
  }
  resume() { this.menus.hide(); this.state = 'play'; this.overlay.setVisible(!this.dialogue.open); bus.emit('game:resume'); }
  openInventory() { if (this.state !== 'play') return; this.state = 'pause'; this.overlay.setVisible(false); input.clearTouch(); this.menus.inventory(); }

  async travel(cityId, opts = {}) {
    const def = registry.get('cities', cityId) || registry.list('cities')[0];
    if (!def) { console.error('No cities registered'); return; }
    const palId = opts.palette || (opts.freeRoam && def.kind === 'city' && save.data.tod) || def.palette;
    const palette = registry.get('palettes', palId) || registry.get('palettes', def.palette) || registry.list('palettes')[0];
    this.home.close(true);
    this.state = opts.attract ? 'menu' : 'loading';
    this.overlay.setVisible(false); this.hud.show(false);
    if (!opts.keepMission) this.missions.stop(false);
    this.activities.clear(); this.npcs.clear(); this.despawnBoss(); this.combat.reset();
    this.world.panic = null; this.dialogue.clearCaptions();
    const tips = registry.tips; const tip = tips.length ? tips[(Math.random() * tips.length) | 0] : '';
    if (!opts.attract) this.menus.loading(def, tip);
    // streamed generation within a frame budget (keeps Android watchdog + UI responsive)
    const token = this.loadToken = (this.loadToken || 0) + 1;
    const gen = this.world.load(def, palette);
    const ok = await new Promise((resolve) => {
      const step = () => {
        if (token !== this.loadToken) { resolve(false); return; } // superseded by a newer travel
        const t0 = performance.now(); let r;
        do { r = gen.next(); if (!r.done && !opts.attract) this.menus.loadingProgress(r.value); } while (!r.done && performance.now() - t0 < 14);
        if (r.done) resolve(true); else requestAnimationFrame(step);
      };
      step();
    });
    if (!ok) return false;
    this.cityId = def.id; this.cityName = def.name; this.cityDef = def;
    this.world.scene.add(this.heroModel.root);
    this.fireOn = false;
    if (!def.hidden && !opts.attract) save.data.lastCity = def.id;
    let sp = opts.spawn ? this.missions.loc(opts.spawn) : this.world.data.spawn.clone(); let yaw = opts.yaw ?? def.spawnYaw ?? 0;
    const es = opts.edge && this.world.data.edgeSpawns && this.world.data.edgeSpawns[opts.edge];
    if (es) { sp = new THREE.Vector3(es[0], es[1], es[2]); yaw = es[3]; }
    this.player.spawn(sp, yaw);
    if (es && opts.carry) { const f = this.player.fwd(); this.player.vel.set(f.x * opts.carry, 2, f.z * opts.carry); }
    this.checkpoint = { pos: sp.clone(), yaw: this.player.yaw };
    registry.runHook('onCityLoaded', this, def);
    if (opts.attract) { this.attract = true; return true; }
    this.attract = false;
    // minimal wait so the tip can be read + shaders compile
    this.renderer.gl.compile(this.world.scene, this.renderer.camera);
    await wait(450);
    if (token !== this.loadToken) return false;
    this.menus.loadingDone(); this.menus.hide();
    this.state = 'play'; this.overlay.setVisible(true); this.hud.show(true);
    this.freeRoam = !!opts.freeRoam;
    if (this.freeRoam || opts.activities) this.activities.setup(def.id);
    if (def.arrivalThought && this.freeRoam) this.dialogue.thought(def.arrivalThought);
    save.write();
    bus.emit('city:loaded', def);
    return true;
  }
  startFreeRoam(cityId, opts = {}) {
    if (this.activeSkin !== save.data.skin) this.setSkin(save.data.skin, true);
    this.storyMode = false; this.player.abilities = { swing: true, zip: true, gadgets: true, ride: true, wallrun: true, climb: true };
    return this.travel(cityId, { freeRoam: true, ...opts });
  }
  async startStory(chId, resume) {
    const ch = registry.get('chapters', chId) || registry.get('chapters', 'ch1');
    this.storyMode = true; save.data.story.chapter = ch.id; if (!resume) save.data.story.step = 0;
    if (ch.forceSkin) this.setSkin(ch.forceSkin, true, true); else if (this.activeSkin !== save.data.skin) this.setSkin(save.data.skin, true);
    this.player.abilities = { swing: true, zip: true, gadgets: true, ride: true, wallrun: true, climb: true, ...(ch.abilities || {}) };
    const ok = await this.travel(ch.city, { spawn: ch.spawn, yaw: ch.spawnYaw, keepMission: false, activities: ch.freeRoamDuring, palette: ch.palette });
    if (!ok) return;
    this.freeRoam = !!ch.freeRoamDuring;
    let startAt = 0;
    if (resume && save.data.story.step > 0) {
      // resume from the last checkpoint step at/before the saved step; re-apply persistent effects
      const target = Math.min(save.data.story.step, ch.steps.length - 1);
      for (let i = 0; i <= target; i++) if (ch.steps[i].checkpoint) startAt = i;
      for (let i = 0; i < startAt; i++) {
        const st = ch.steps[i];
        if (st.type === 'setAbility') Object.assign(this.player.abilities, st.abilities);
        if (st.type === 'fire') { this.fireOn = true; this.fireRate = st.rate || 2.2; }
      }
      const cp = ch.steps[startAt];
      if (cp && cp.at) { const pp = this.missions.loc(cp.at); if (pp) { this.player.spawn(pp, cp.yaw ?? this.player.yaw); this.checkpoint = { pos: pp.clone(), yaw: this.player.yaw }; } }
      if (this.fireOn && this.world.fire) this.world.fire.front = this.player.pos.z - 16;
    }
    this.missions.start(ch, { story: true, startAt });
  }
  onMissionComplete(def) {
    if (!this.storyMode || def.side || !registry.get('chapters', def.id)) return;
    const s = save.data.story; if (!s.completed.includes(def.id)) s.completed.push(def.id);
    const next = def.next ? registry.get('chapters', def.next) : null;
    s.chapter = next ? next.id : def.id; s.step = 0; save.write();
    this.state = 'pause'; this.overlay.setVisible(false);
    setTimeout(() => this.menus.chapterComplete(def, next, (choice) => {
      if (choice === 'next' && next) this.startStory(next.id, false);
      else if (choice === 'roam') this.startFreeRoam(def.roamCity || (this.cityDef && !this.cityDef.hidden ? this.cityId : 'midtown'));
      else this.toTitle();
    }), 400);
  }
  restartStep() {
    const m = this.missions; if (!m.active) { this.resume(); return; }
    this.despawnBoss();
    m.cleanupSpawns();
    const st = m.step;
    const at = (st && st.at && m.loc(st.at)) || this.checkpoint.pos;
    this.player.spawn(at, this.checkpoint.yaw);
    m.stepIdx--; m.ctx = null; m.step = null; m.impl = null; m.next();
    this.resume();
  }
  onDeath() {
    this.hud.toast('DOWN… but not out.', 2);
    this.audio.play('ui_back');
    if (this.world.fire) this.world.fire.front = Math.min(this.world.fire.front, this.player.pos.z - 14);
    setTimeout(() => {
      if (this.missions.active) {
        const st = this.missions.step; const at = (st && st.at && this.missions.loc(st.at)) || this.player.lastSafe;
        if (this.boss) { /* boss keeps its HP: forgiving */ }
        this.player.spawn(at, this.player.yaw);
      } else this.player.spawn(this.player.lastSafe, this.player.yaw);
      this.player.health = this.player.maxHealth;
    }, 700);
  }
  spawnBoss(id, arena) {
    this.despawnBoss();
    const def = registry.get('npcTypes', id); this.boss = new Boss(this, def, arena); return this.boss;
  }
  despawnBoss() { if (this.boss) { this.boss.dispose(); this.boss = null; } }

  // ---------------------------------------------------------------- frame loop
  frame(now) {
    requestAnimationFrame((t) => this.frame(t));
    let dt = Math.min(0.05, (now - this.last) / 1000); this.last = now;
    this.renderer.adapt(dt);
    if (this.hitstop > 0) { this.hitstop -= dt; dt *= 0.08; }
    this.time += dt;
    input.poll(dt, save.settings);
    const playing = this.state === 'play';
    if (playing) {
      if (input.pressed('start')) { this.pause(); }
      else if (input.pressed('select') && !this.world.data.interior) { this.pause(); this.menus.go(() => this.menus.worldMap(true)); }
      if (input.pressed('r3')) this.cycleCamera();
      if (input.pressed('up')) { const wp = this.hud.waypoint; this.hud.toast(wp ? `Objective: ${Math.round(wp.distanceTo(this.player.pos))}m` : 'No objective — explore!', 1.4); this.audio.play('ui_click'); }
      if (!this.dialogue.open) this.combat.update(dt);
      this.player.update(dt);
      this.missions.update(dt);
      this.activities.update(dt);
      this.npcs.update(dt, this.player);
      if (this.boss) this.boss.update(dt);
      this.updateFire(dt);
      this.checkTriggers();
      this.dialogue.update(dt);
      this.updateHints();
    } else if (this.state === 'home') {
      this.dialogue.update(dt);
    } else if (this.state === 'pause' || this.state === 'menu') {
      if (input.pressed('start') && this.state === 'pause') this.resume();
      if (this.attract && this.state === 'menu') this.attractCam(dt);
    }
    this.home.update(dt);
    if (playing) this.checkExits(dt);
    if (this.world.data) {
      if (this.home.showcase) this.home.showcaseCam(dt);
      else if (playing || this.state === 'pause' || this.state === 'home') this.rig.update(playing ? dt : 0, this.player, this.world);
      this.renderer.camera.updateMatrixWorld();
      this.world.update(playing ? dt : dt * 0.3, this.renderer.camera, this.player);
      this.updateHero(dt);
      this.updateViewModel(dt);
      this.fx.update(dt);
      if (playing) this.hud.update(dt);
      this.updateAudioLoops();
      const showVM = this.rig.mode === 'fp' && !this.home.showcase && (playing || this.state === 'pause' || this.state === 'home');
      this.renderer.render(this.world.scene, showVM ? this.vmScene : null, this.vmCam);
    }
    this.overlay.draw();
  }
  attractCam(dt) {
    const c = this.renderer.camera; const t = this.time * 0.05; const sp = this.world.data.spawn;
    c.position.set(sp.x + Math.cos(t) * 90, 70, sp.z + Math.sin(t) * 90); c.lookAt(sp.x, 30, sp.z);
  }
  updateHero(dt) {
    const p = this.player, m = this.heroModel; const fp = this.rig.mode === 'fp' && !this.home.showcase;
    m.root.visible = !fp && !!this.world.data && this.state !== 'menu' && !this.world.data.hideHero;
    if (this.rideMesh) { this.rideMesh.position.copy(p.pos); this.rideMesh.rotation.y = Math.atan2(-p.vel.x, -p.vel.z) + Math.PI; this.rideMesh.visible = this.state !== 'menu'; }
    if (!m.root.visible) return;
    m.root.position.copy(p.pos); if (this.rideMesh) m.root.position.y += p.ride === 'bicycle' ? 0.35 : 0.15;
    // facing: travel direction while moving fast / airborne, wall-normal while climbing, else camera yaw
    let face = p.yaw + Math.PI;
    if (p.fsm.is('swing', 'air', 'zip', 'ride', 'wallrun') && p.speed > 2) face = Math.atan2(p.vel.x, p.vel.z);
    else if (p.fsm.is('ground', 'slide') && p.speed > 1.5) face = Math.atan2(p.vel.x, p.vel.z);
    if (p.fsm.is('climb', 'hang')) face = Math.atan2(-p.wallN.x, -p.wallN.z);
    if (this.home.showcase) { const c = this.renderer.camera.position; face = Math.atan2(c.x - p.pos.x, c.z - p.pos.z) + Math.sin(this.time * 0.7) * 0.5; }
    m.faceY = m.faceY === undefined ? face : dampAngle(m.faceY, face, 14, dt);
    m.root.rotation.y = m.faceY;
    const ex = this._heroEx || (this._heroEx = {});
    ex.hero = true; ex.side = p.swingSide < 0 ? 'L' : 'R'; ex.sp = p.swingPhase; ex.wallSide = p.wallSide; ex.trick = p.trick || p.groundTrick; ex.k = undefined; ex.snap = 16;
    ex.ropePitch = 0; ex.ropeRoll = 0;
    if (p.ropeActive) {
      const fx = Math.sin(m.faceY), fz = Math.cos(m.faceY);
      const d = _hv.subVectors(p.anchor, p.pos).normalize();
      ex.ropePitch = clamp(Math.atan2(d.x * fx + d.z * fz, d.y), -1.3, 1.3);
      ex.ropeRoll = clamp(-Math.atan2(d.x * fz - d.z * fx, d.y), -1.0, 1.0);
      if (p.fsm.is('zip')) ex.ropePitch = clamp(ex.ropePitch, 0.2, 1.4);
    }
    let pose = p.pose;
    if (p.fsm.is('locked')) { pose = p.lockPose === 'takedown' ? 'takedown' : p.lockPose; ex.k = 1 - p.lockTimer / (p.lockDur || 0.3); ex.snap = 26; }
    if (p.ride) pose = p.ride === 'bicycle' ? 'bike' : p.ride === 'skates' ? 'skate' : 'ride';
    if (p.landSquash) { m.anim.landT = 0.25; p.landSquash = false; }
    animateCharacter(m, pose, p.speed, dt, ex);
  }
  updateViewModel(dt) {
    const vm = this.vm; if (!vm) return; const cam = this.renderer.camera, p = this.player;
    vm.group.visible = this.rig.mode === 'fp' && this.state !== 'menu' && !this.home.showcase;
    if (!vm.group.visible) return;
    // Hands are placed in screen space (NDC) so they sit in the lower corners on any aspect ratio.
    const vc = this.vmCam; vc.aspect = cam.aspect;
    vc.fov = clamp(cam.fov, 50, 100); vc.updateProjectionMatrix();
    const tVc = Math.tan(vc.fov * Math.PI / 360), tH = tVc * cam.aspect;
    vc.rotation.z = this.rig.roll * 0.5;
    const D = 0.5; const sc = clamp(tH * D / 0.55, 0.3, 1.0); // hand size follows screen WIDTH
    vm.group.scale.setScalar(sc);
    const t = this.time; const sway = p.fsm.is('ground') ? Math.min(1, p.speed / 7) : 0;
    for (const s of ['L', 'R']) {
      const hnd = vm.hands[s]; const sg = s === 'L' ? -1 : 1;
      vm.kickT[s] = Math.max(0, vm.kickT[s] - dt);
      let nx = sg * 0.6, ny = -0.78 + Math.sin(t * 9 + (s === 'L' ? 0 : Math.PI)) * 0.04 * sway, dz = 0, rx = 0.12;
      const swingHand = p.swingSide < 0 ? 'L' : 'R';
      if (p.fsm.is('swing') && s === swingHand) { const port = cam.aspect < 1; nx = sg * (port ? 0.62 : 0.42); ny = port ? -0.05 : 0.18; rx = port ? 0.95 : 1.3; }
      if (p.fsm.is('zip')) { nx = sg * 0.3; ny = 0.05; rx = 1.2; }
      if ((p.trick || p.groundTrick) && !p.fsm.is('swing')) { nx = sg * 0.35; ny = -0.5; rx = 0.8; }
      if (p.fsm.is('climb', 'hang')) { nx = sg * 0.45; ny = -0.25 + Math.sin(t * 8 + (s === 'L' ? 0 : 3)) * 0.12 * Math.abs(input.move.y); rx = 1.3; }
      const punchHand = p.lockPose === 'cross' ? 'L' : 'R';
      if (p.fsm.is('locked') && ['punch', 'jab', 'cross', 'hook', 'uppercut', 'takedown'].includes(p.lockPose) && s === punchHand) { const k = 1 - p.lockTimer / (p.lockDur || 0.3); const ext = k < 0.25 ? -0.3 : k < 0.6 ? 1 : 0.4; nx = sg * 0.12; ny = -0.35 + (p.lockPose === 'uppercut' ? 0.3 * ext : 0); dz = -0.16 * ext; rx = 0.0; }
      if (p.fsm.is('locked') && (p.lockPose === 'kick' || p.lockPose === 'spinkick')) ny = -1.4;
      if (p.fsm.is('vault')) { ny = -0.95; rx = -0.4; }
      if (p.fsm.is('wallrun') && ((p.wallSide < 0 && s === 'L') || (p.wallSide > 0 && s === 'R'))) { nx = sg * 0.85; ny = -0.2; rx = 0.6; }
      if (p.fsm.is('slide')) { ny = -0.65; nx = sg * 0.7; }
      if (this.combat.aiming && s === 'R') { nx = 0.25; ny = -0.45; }
      if (vm.kickT[s] > 0) dz += 0.08 * (vm.kickT[s] / 0.18);
      if (this.dialogue.open) ny = -1.6;
      const tz = -D + dz;
      const tx = nx * tH * D / sc, ty = ny * tVc * D / sc;
      hnd.position.x = damp(hnd.position.x, tx, 16, dt); hnd.position.y = damp(hnd.position.y, ty, 16, dt); hnd.position.z = damp(hnd.position.z, tz / sc, 16, dt);
      hnd.rotation.x = damp(hnd.rotation.x, rx, 14, dt);
    }
  }
  updateAudioLoops() {
    const A = this.audio; if (!A.ready) return;
    const p = this.player; const playing = this.state === 'play';
    const sp = p.vel.length();
    A.setLoop('wind', playing && !p.ground ? clamp((sp - 6) / 30, 0, 0.5) : 0, 300 + sp * 40);
    A.setLoop('roll', playing && p.ride && p.ground ? clamp((p.rideSpeed || 0) / 20, 0, 0.35) : 0, 120 + (p.rideSpeed || 0) * 12);
    const fireNear = this.fireOn && this.world.fire ? clamp(1 - Math.abs(this.world.fire.front - p.pos.z) / 30, 0, 1) : 0;
    A.setLoop('fire', playing ? fireNear * 0.6 : 0, 500 + fireNear * 600);
    A.setLoop('city', playing && this.world.data && !this.world.data.interior ? 0.08 : 0);
    const fight = this.npcs.list.some((n) => n.hostile && n.fsm.is('combat')) || (this.boss && this.boss.alive);
    A.intensity = damp(A.intensity || 0, fight ? 1 : 0, 0.8, 1 / 60);
    A.musicOn = this.state !== 'loading';
  }
  updateFire(dt) {
    if (!this.fireOn || !this.world.fire) return;
    const f = this.world.fire, p = this.player;
    // rubber-band: fire chases you but never quite catches a player who keeps moving
    const gap = p.pos.z - f.front; const rate = gap > 22 ? 4.2 : gap > 10 ? (this.fireRate || 2.2) : 1.0;
    f.front += rate * dt;
    if (this.world.data.outdoorZ && f.front > this.world.data.outdoorZ) f.front = this.world.data.outdoorZ;
    if (gap < 1.5) p.hurt(30 * dt, 'fire');
    this.renderer.postMat.uniforms.flash.value = clamp((6 - gap) / 20, 0, 0.25); this.renderer.postMat.uniforms.flashCol.value.set('#ff5a1a');
  }
  checkTriggers() {
    const trs = this.world.data.triggers; if (!trs) return;
    const p = this.player.pos;
    for (const t of trs) {
      const inside = p.x >= t.min[0] && p.x <= t.max[0] && p.y >= t.min[1] && p.y <= t.max[1] && p.z >= t.min[2] && p.z <= t.max[2];
      if (inside && !t._in) {
        t._in = true; bus.emit('trigger:enter', t);
        if (t.pit) { this.hud.toast('Careful! Wall-run across (hold L1, run at the side wall).', 2.5); this.player.spawn(new THREE.Vector3(0, t.respawnY + 0.1, t.respawnZ), Math.PI); this.player.yaw = Math.PI; }
        if (t.seg && t.seg.shutter && !t.seg.shutter.closing) this.closeShutter(t.seg.shutter);
      } else if (!inside && t._in) t._in = false;
    }
  }
  // Walking/swinging off a district edge crosses into the neighbouring district (free roam only).
  checkExits(dt) {
    const ex = this.world.data && this.world.data.exits; if (!ex || !ex.length || this.travelling) return;
    const p = this.player.pos; this._exitWarn = Math.max(0, (this._exitWarn || 0) - dt);
    for (const e of ex) {
      if (p.x < e.min[0] || p.x > e.max[0] || p.z < e.min[2] || p.z > e.max[2]) continue;
      if (this.missions.active || !registry.get('cities', e.to)) {
        // push back toward the district
        const n = { x0: [1, 0], x1: [-1, 0], z0: [0, 1], z1: [0, -1] }[e.side]; this.player.vel.x = n[0] * 9; this.player.vel.z = n[1] * 9;
        if (this._exitWarn <= 0) { this._exitWarn = 2; this.hud.toast(this.missions.active ? 'Stay in the area — you\'re on a job!' : 'That way is closed for now.', 1.6); }
        return;
      }
      const opp = { x0: 'x1', x1: 'x0', z0: 'z1', z1: 'z0' }[e.side];
      const carry = Math.min(14, Math.hypot(this.player.vel.x, this.player.vel.z));
      this.travelling = true; this.hud.toast('Heading to ' + (e.label || e.to) + '…', 1.4);
      this.startFreeRoam(e.to, { edge: opp, carry }).finally(() => { this.travelling = false; });
      return;
    }
  }
  closeShutter(sh) {
    // facility slide-door: lowers over ~1.6s, leaving a slide-gap until it shuts
    sh.closing = true;
    const geo = new THREE.BoxGeometry(sh.x1 - sh.x0, sh.h, 0.4); geo.translate(0, sh.h / 2, 0);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xd6a12e })); m.position.set(0, sh.y + sh.h, sh.z); this.world.dynamic.add(m);
    const box = this.world.collision.add(sh.x0, sh.y + sh.h, sh.z - 0.2, sh.x1, sh.y + sh.h * 2, sh.z + 0.2, {});
    this.audio.play('clang'); this.hud.toast('The shutter is closing — SLIDE under! (run + ○)', 2.2);
    let t = 0; const dur = 2.2;
    const tick = () => {
      t += 1 / 60; const k = Math.min(1, t / dur); const bottom = sh.y + sh.h - k * (sh.h - 0.0);
      // keep a slide-able gap of ~1m until the very end
      const y = Math.max(sh.y + (k < 0.97 ? 1.0 : 0), bottom);
      m.position.y = y; box.min[1] = y; box.max[1] = y + sh.h; // grid is XZ-keyed: vertical moves are free
      if (k < 1) requestAnimationFrame(tick); else this.audio.play('clang', { rate: 0.8 });
    };
    requestAnimationFrame(tick);
  }
  updateHints() {
    const p = this.player, o = this.overlay;
    o.setHint('cross', p.fsm.is('swing') ? 'SWING-JUMP' : p.fsm.is('climb', 'wallrun') ? 'WALL-JUMP' : p.fsm.is('hang') ? 'CLIMB UP' : p.fsm.is('air') && p.airTime > 0.1 ? 'TRICK' : p.fsm.is('zip') ? 'LAUNCH' : 'JUMP');
    o.setHint('circle', this.combat.dangerT > 0 ? 'DODGE!' : p.fsm.is('hang', 'climb') ? 'DROP' : p.fsm.is('air') ? 'DIVE' : p.speed > 5.8 && p.fsm.is('ground') ? 'SLIDE' : 'CROUCH');
    o.setHint('r2', p.abilities.swing ? (p.aimZipPoint ? 'LAUNCH' : 'SWING') : '—');
    o.setHint('l1', 'FREE-RUN'); o.setHint('l2', 'AIM'); o.setHint('r1', p.abilities.gadgets ? 'GADGET' : '—');
    o.setHint('triangle', p.abilities.gadgets ? 'GEAR' : '—');
    o.setHint('l3', 'SENSE'); o.setHint('r3', 'CAM'); o.setHint('down', p.abilities.ride ? (p.ride ? 'RIDE ▸' : 'RIDE') : null);
  }
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
