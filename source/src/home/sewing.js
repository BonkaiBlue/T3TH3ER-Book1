// Sewing Station: design your own suits on the live 3D model (orbit showcase camera), pick a suit mod,
// save as many as you like. Custom suits are stored in the save and registered as a skin pack at boot.
const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const SWATCH = ['#2a9d9a', '#5fe0c8', '#2a6fd4', '#2a3f8a', '#1e2a52', '#6b3fa0', '#a24bd6', '#ff2fb3', '#ff8ab0', '#c0362c', '#e4573d', '#d97a3a',
  '#f2c14e', '#ffe066', '#f6f1df', '#ffffff', '#c9c9c0', '#8a8a8a', '#3a3a40', '#1a1a1e', '#2e7a4a', '#4fb84a', '#9fe0a0', '#8a5a3a'];
const SLOTS = [['primary', 'BODY'], ['secondary', 'TRIM'], ['accent', 'EMBLEM'], ['eyes', 'LENSES'], ['gloves', 'GLOVES'], ['boots', 'BOOTS']];
const OPTS = {
  pattern: ['sides', 'stripes', 'lattice', 'chevron', 'split', 'none'],
  emblem: ['knot', 'tether', 'star', 'bolt', 'eye', 'none'],
  lens: ['classic', 'big', 'round', 'slit'],
};

export class Sewing {
  constructor(game, home) { this.game = game; this.home = home; }
  open() {
    const g = this.game, S = g.save.data;
    const cur = g.registry.get('skins', g.activeSkin) || {};
    this.editingId = cur._pack === 'custom-suits' ? cur.id : null;
    this.pal = { primary: '#2a9d9a', secondary: '#e4573d', accent: '#f2c14e', eyes: '#ffffff', pattern: 'sides', emblem: 'knot', lens: 'classic', crest: true, ...(cur.palette || {}) };
    if (cur.style && cur.style !== 'hero') this.pal = { primary: '#2a9d9a', secondary: '#e4573d', accent: '#f2c14e', eyes: '#ffffff', pattern: 'sides', emblem: 'knot', lens: 'classic', crest: true };
    this.mod = cur.mod || 'none'; this.name = this.editingId ? cur.name : 'My Suit ' + ((S.customSkins || []).length + 1);
    this.slot = 'primary';
    // stand at the mannequin & orbit the camera
    const m = g.world.data.mannequin; if (m) { g.player.pos.copy(m); g.player.vel.set(0, 0, 0); }
    this.home.showcase = { spin: true, dist: 3.4 };
    this.prevSkin = g.activeSkin;
    this.render(); this.preview();
  }
  close() { const g = this.game; if (this.prevSkin && g.activeSkin === '__preview') g.setSkin(this.prevSkin, true); this.home.showcase = null; }
  preview() {
    // rebuild the hero with the working palette (temp skin, not saved)
    const g = this.game; g.registry.data.skins.set('__preview', { id: '__preview', name: 'preview', style: 'hero', palette: { ...this.pal }, mod: this.mod, _pack: 'custom-suits' });
    g.setSkin('__preview', true, true);
  }
  render() {
    const g = this.game, S = g.save.data; const p = this.home.panel('SEWING STATION', 'sewing');
    const wrap = h('div', 'sew');
    // color slots
    const slots = h('div', 'sewslots');
    for (const [k, label] of SLOTS) {
      const b = h('button', 'slot' + (this.slot === k ? ' sel' : ''), `<i style="background:${this.pal[k] || this.pal.secondary}"></i>${label}`);
      b.addEventListener('click', () => { this.slot = k; this.render(); }); slots.appendChild(b);
    }
    wrap.appendChild(slots);
    const sw = h('div', 'swatches');
    for (const c of SWATCH) { const b = h('button', 'sw'); b.style.background = c; b.addEventListener('click', () => { this.pal[this.slot] = c; g.audio.play('blip'); this.render(); this.preview(); }); sw.appendChild(b); }
    wrap.appendChild(sw);
    // style options
    const opt = h('div', 'sewopts');
    for (const key of Object.keys(OPTS)) {
      const b = h('button', 'cbtn', `${key.toUpperCase()}: <b>${String(this.pal[key] || OPTS[key][0]).toUpperCase()}</b>`);
      b.addEventListener('click', () => { const L = OPTS[key]; const i = L.indexOf(this.pal[key] || L[0]); this.pal[key] = L[(i + 1) % L.length]; g.audio.play('ui_click'); this.render(); this.preview(); });
      opt.appendChild(b);
    }
    const tog = (key, label, val) => { const b = h('button', 'cbtn' + (this.pal[key] ? ' sel' : ''), label); b.addEventListener('click', () => { this.pal[key] = this.pal[key] ? (key === 'crest' ? false : null) : val; g.audio.play('ui_click'); this.render(); this.preview(); }); opt.appendChild(b); };
    tog('crest', 'HEAD CREST', true); tog('goggles', 'GOGGLES', true); tog('scarf', 'SCARF (uses TRIM)', this.pal.secondary); tog('shoulders', 'SHOULDER PADS', true);
    wrap.appendChild(opt);
    // suit mod
    const owned = S.suitModsOwned || (S.suitModsOwned = ['none']);
    const mods = h('div', 'sewmods'); mods.appendChild(h('div', 'lbl', 'SUIT MOD (one per suit):'));
    for (const m of g.registry.list('suitMods')) {
      const have = owned.includes(m.id);
      const b = h('button', 'cbtn' + (this.mod === m.id ? ' sel' : ''), `${m.name}<small>${m.desc}${have ? '' : ` · sew for ⚙${m.cost}`}</small>`);
      b.addEventListener('click', () => {
        if (!have) { if (!this.home.spend(m.cost)) return; owned.push(m.id); g.save.write(); }
        this.mod = m.id; this.render(); this.preview();
      });
      mods.appendChild(b);
    }
    wrap.appendChild(mods);
    // name + save
    const nm = document.createElement('input'); nm.className = 'sewname'; nm.value = this.name; nm.maxLength = 24; nm.addEventListener('input', () => (this.name = nm.value));
    wrap.appendChild(nm);
    const row = h('div', 'sewrow');
    row.appendChild(this.home.btn(this.editingId ? '💾 UPDATE THIS SUIT' : '💾 SAVE NEW SUIT', () => this.saveSuit(false), 'big'));
    if (this.editingId) row.appendChild(this.home.btn('SAVE AS COPY', () => this.saveSuit(true)));
    row.appendChild(this.home.btn('⟲ SPIN', () => { this.home.showcase.spin = !this.home.showcase.spin; }));
    row.appendChild(this.home.btn('CANCEL', () => this.home.close()));
    wrap.appendChild(row);
    p.appendChild(wrap);
  }
  saveSuit(copy) {
    const g = this.game, S = g.save.data; S.customSkins = S.customSkins || [];
    let id = this.editingId && !copy ? this.editingId : 'sewn_' + Date.now().toString(36);
    const rec = { id, name: (this.name || 'My Suit').slice(0, 24), desc: 'Sewn at home.' + (this.mod !== 'none' ? ' Mod: ' + ((g.registry.get('suitMods', this.mod) || {}).name || this.mod) : ''), palette: { ...this.pal }, mod: this.mod };
    const i = S.customSkins.findIndex((c) => c.id === id); if (i >= 0) S.customSkins[i] = rec; else S.customSkins.push(rec);
    if (!S.unlockedSkins.includes(id)) S.unlockedSkins.push(id);
    this.home.registerCustomSuits();
    this.prevSkin = id; g.setSkin(id); this.home.applyUpgrades(); g.save.write();
    g.audio.play('ui_ok'); g.hud.toast(`"${rec.name}" sewn and equipped!`, 2);
    this.home.close(true);
  }
}
