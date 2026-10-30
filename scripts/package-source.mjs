import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';

// An explicit allowlist prevents Git history, credentials and build caches from
// becoming part of the product source archive.
const output = path.resolve(process.argv[2] || 'artifacts/coconut-experience-source.zip');
const staging = await fs.mkdtemp(path.join(os.tmpdir(), 'coconut-source-'));
const entries = ['src', 'scripts', 'docs', 'README.md', 'AI_START_HERE.md',
  'package.json', 'package-lock.json', 'tsconfig.json', 'vite.config.ts',
  'index.html', '.gitignore', '.eslintrc.cjs'];
try {
  for (const entry of entries) await fs.cp(entry, path.join(staging, entry), { recursive: true });
  const inspect = async directory => {
    for (const entry of await fs.readdir(directory, { withFileTypes: true })) {
      if (entry.name === '.git' || entry.name.startsWith('.env') || entry.name === 'node_modules')
        throw new Error('Excluded content found: ' + entry.name);
      if (entry.isSymbolicLink()) throw new Error('Source archive must not contain symlinks');
      if (entry.isDirectory()) await inspect(path.join(directory, entry.name));
    }
  };
  await inspect(staging);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.rm(output, { force: true });
  execFileSync('zip', ['-qr', output, ...entries], { cwd: staging });
  console.log('Source archive:', output);
} finally {
  await fs.rm(staging, { recursive: true, force: true });
}
