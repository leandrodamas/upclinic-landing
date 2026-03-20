import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const clientDir = path.join(root, '.svelte-kit', 'output', 'client');
const prerenderedDir = path.join(root, '.svelte-kit', 'output', 'prerendered', 'pages');
const outDir = path.join(root, 'build');

function copyRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const ent of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, ent.name);
    const d = path.join(dest, ent.name);
    if (ent.isDirectory()) copyRecursive(s, d);
    else fs.copyFileSync(s, d);
  }
}

if (!fs.existsSync(clientDir)) {
  console.error('Missing .svelte-kit/output/client — run vite build first.');
  process.exit(1);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });
copyRecursive(clientDir, outDir);

if (fs.existsSync(prerenderedDir)) {
  for (const f of fs.readdirSync(prerenderedDir)) {
    if (f.endsWith('.html')) {
      fs.copyFileSync(path.join(prerenderedDir, f), path.join(outDir, f));
    }
  }
}

console.log('Prepared landing-page-upclinic/build for Firebase Hosting.');
