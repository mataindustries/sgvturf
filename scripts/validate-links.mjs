import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = new URL('../dist/', import.meta.url).pathname;
if (!existsSync(root)) throw new Error('dist/ does not exist; run the build first.');

const files = [];
const walk = (directory) => {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (extname(path) === '.html') files.push(path);
  }
};
walk(root);

const failures = [];
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const pathname = href.split(/[?#]/)[0];
    if (!pathname) continue;
    const target = pathname.endsWith('/') ? join(root, pathname, 'index.html') : join(root, pathname.slice(1));
    const alternate = join(root, pathname.slice(1), 'index.html');
    if (!existsSync(target) && !existsSync(alternate)) failures.push(`${relative(root, file)} -> ${href}`);
  }
}

if (failures.length) throw new Error(`Broken internal links:\n${failures.join('\n')}`);
console.log(`Validated ${files.length} HTML routes with no broken internal links.`);
