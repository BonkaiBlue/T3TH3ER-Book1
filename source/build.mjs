// Bundles src/ into ../game/tether.js as a classic IIFE script (works from file:// — no ES-module CORS issues).
import * as esbuild from 'esbuild';
const dev = process.argv.includes('--dev');
await esbuild.build({ entryPoints: ['src/main.js'], bundle: true, format: 'iife', target: 'es2020', minify: !dev, sourcemap: dev, outfile: '../game/tether.js', legalComments: 'eof', logLevel: 'info' });
