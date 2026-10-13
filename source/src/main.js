// Entry point. Boot.html loads packs first (they queue into window.TetherMod), then this bundle.
import { Game } from './game.js';

function start() {
  let game;
  try { game = new Game(); window.TETHER = game; }
  catch (e) { console.error(e); document.getElementById('bootmsg').textContent = 'Failed to start: ' + e.message; return; }
  const splash = document.getElementById('bootsplash');
  splash.classList.add('ready');
  const go = async () => {
    splash.removeEventListener('pointerup', go); window.removeEventListener('keydown', go);
    game.audio.unlock();
    // best-effort immersive mode on Android
    try { if (matchMedia('(pointer:coarse)').matches && document.documentElement.requestFullscreen) await document.documentElement.requestFullscreen({ navigationUI: 'hide' }); } catch (e) { /* not allowed */ }
    try { if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock(); } catch (e) { /* ignore */ }
    game.boot();
  };
  splash.addEventListener('pointerup', go); window.addEventListener('keydown', go);
}
const fontReady = document.fonts && document.fonts.load ? Promise.race([document.fonts.load('32px Bangers'), new Promise((r) => setTimeout(r, 1500))]) : Promise.resolve();
fontReady.then(start, start);
