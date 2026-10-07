import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { routes, render } = await import(pathToFileURL(path.join(root, '.ssr/entry-server.js')));
const origin = 'https://ardittiproduction.com';
const all = Object.values(routes).flatMap(locale => Object.values(locale));
const read = file => fs.readFileSync(path.join(root, 'dist', file), 'utf8');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(m => [m[1].toLowerCase(), m[2]]));
const tags = html => [...html.matchAll(/<(?:link|meta)\b[^>]*>/gi)].map(m => attrs(m[0]));
const hashes = new Set();
for (const route of all) {
  const html = read(route.path === '/' ? 'index.html' : `${route.path.slice(1)}/index.html`);
  const head = html.split('</head>')[0];
  const metadata = tags(head);
  assert.equal((html.match(/<title>/g) || []).length, 1, `${route.path}: title`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route.path}: h1`);
  assert.ok(html.includes(`<html lang="${route.locale}">`), `${route.path}: language`);
  assert.deepEqual(metadata.filter(t => t.rel === 'canonical').map(t => t.href), [origin + route.path], `${route.path}: canonical`);
  assert.deepEqual(metadata.filter(t => t.name === 'robots').map(t => t.content), [route.isIndexable ? 'index,follow' : 'noindex,nofollow']);
  const other = all.find(r => r.path === route.alternatePath);
  assert.ok(other && other.alternatePath === route.path, `${route.path}: reciprocal alternate`);
  const expected = { [route.locale]: origin + route.path, [other.locale]: origin + other.path, 'x-default': origin + (route.locale === 'fr' ? route.path : other.path) };
  const alternates = metadata.filter(t => t.rel === 'alternate');
  assert.equal(alternates.length, 3);
  assert.deepEqual(Object.fromEntries(alternates.map(t => [t.hreflang, t.href])), expected);
  const main = html.match(/<main>(.*?)<\/main>/s)?.[1];
  assert.ok(main?.length > 100, `${route.path}: prerendered content`);
  const hash = createHash('sha256').update(main).digest('hex');
  assert.ok(!hashes.has(hash), `${route.path}: duplicate main HTML`);
  hashes.add(hash);
  for (const [, href] of html.matchAll(/<a\b[^>]*href="([^"]*)"/g)) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const url = new URL(href.replaceAll('&amp;', '&'), origin);
    if (url.pathname.startsWith('/assets/')) continue;
    assert.ok(all.some(r => r.path === url.pathname), `${route.path}: noncanonical/broken internal link ${href}`);
    if (route.locale === 'en') assert.ok(url.pathname.startsWith('/en'), `${route.path}: French internal link ${href}`);
  }
  if (route.path === '/' || route.path === '/en') {
    const dynamic = render(route.path + '?offer=Test%20offer').html;
    assert.ok(!dynamic.includes('name="offer"'), `${route.path}: query must wait until hydration`);
  }
}
const sitemap = read('sitemap.xml');
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.deepEqual(locations.sort(), all.filter(r => r.isIndexable).map(r => origin + r.path).sort());
assert.equal(new Set(locations).size, 16);
const notFound = tags(read('404.html'));
assert.deepEqual(notFound.filter(t => t.name === 'robots').map(t => t.content), ['noindex,nofollow']);
assert.equal(notFound.filter(t => t.rel === 'canonical' || t.rel === 'alternate').length, 0);
assert.ok(read('robots.txt').includes(`Sitemap: ${origin}/sitemap.xml`));
console.log('SEO OK: 18 distinct prerendered pages, 16 canonical sitemap URLs, reciprocal alternates, localized internal links, preserved noindex and 404.');
