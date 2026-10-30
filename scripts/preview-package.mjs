import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

// Produces an ordinary static site with same-origin media; no R2 credentials needed.
const manifest = JSON.parse(await fs.readFile('src/config/assets.json', 'utf8'));
const args = process.argv.slice(2);
const option = name => { const i = args.indexOf(name); return i < 0 ? undefined : args[i + 1]; };
const source = option('--assets');
const cache = path.resolve('.preview-media');
const fallback = 'https://github.com/hiiD4vd/promptedsite-template-02/releases/download/media-' + manifest.release + '/coconut-experience-assets.zip';
await fs.mkdir(cache, { recursive: true });
async function verify(file, data) {
  const expected = manifest.files[file];
  if (data.length !== expected.bytes || createHash('sha256').update(data).digest('hex') !== expected.sha256)
    throw new Error('Asset checksum mismatch: ' + file);
}
try {
  for (const file of Object.keys(manifest.files)) {
    let data;
    if (source) data = await fs.readFile(path.join(source, file));
    else {
      try { data = await fs.readFile(path.join(cache, file)); await verify(file, data); }
      catch {
        const response = await fetch(manifest.baseUrl + '/' + file, { signal: AbortSignal.timeout(30000) });
        if (!response.ok) throw new Error('Media HTTP ' + response.status);
        data = Buffer.from(await response.arrayBuffer());
      }
    }
    await verify(file, data);
    await fs.mkdir(path.dirname(path.join(cache, file)), { recursive: true });
    await fs.writeFile(path.join(cache, file), data);
  }
} catch (error) {
  if (source) throw error;
  console.log('Canonical media unavailable; downloading the pinned GitHub release.');
  const response = await fetch(fallback, { signal: AbortSignal.timeout(120000) });
  if (!response.ok) throw new Error('Neither media source is reachable. GitHub HTTP ' + response.status, { cause: error });
  const archive = path.join(cache, 'fallback.zip');
  await fs.writeFile(archive, Buffer.from(await response.arrayBuffer()));
  execFileSync('unzip', ['-oq', archive, '-d', cache]);
  await fs.unlink(archive);
}
for (const file of Object.keys(manifest.files)) await verify(file, await fs.readFile(path.join(cache, file)));
execFileSync('npm', ['run', 'build'], { stdio: 'inherit', env: { ...process.env, VITE_MEDIA_BASE: '/media' } });
for (const file of Object.keys(manifest.files)) {
  const destination = path.join('dist/media', file);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.copyFile(path.join(cache, file), destination);
}
await fs.copyFile('scripts/serve-preview.py', 'dist/serve-preview.py');
await fs.writeFile('dist/PREVIEW.txt', 'Coconut Experience portable preview\n\nRequires Python 3 and a WebGL-capable browser.\nRun: python3 serve-preview.py\nOpen: http://127.0.0.1:3145\n\nOr publish this directory at an HTTP origin root with SPA fallback.\nAll 30 media files are local; no R2 credentials or CDN access required.\nRemote AI sandboxes must expose the server through their supported preview tools.\n');
console.log('Ready: dist/ contains the app and all 30 verified media files. Serve with python3 dist/serve-preview.py or a host with SPA fallback.');
