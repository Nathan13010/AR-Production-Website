import fs from 'node:fs';
import { createHash } from 'node:crypto';

const origin = 'https://ardittiproduction.com';
const folder = '.audit/public';
fs.mkdirSync(folder, { recursive: true });
const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
fs.writeFileSync(`${folder}/sitemap.xml`, sitemap);
const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => new URL(m[1]).pathname);
const variants = ['/', '/en', '/en/', '/partnership', '/en/partnership', '/index.html', '/en/index.html', '/viewer/index.html', '/viewer.html', '/en/viewer/index.html', '/seo-audit-missing-20261007', '/en/seo-audit-missing-20261007', '/robots.txt', '/?offer=Viewer%203D', '/en/?offer=3D%20Viewer'];
for (const p of paths) if (p !== '/') variants.push(p.replace(/\/$/, '') + '/');
const urls = [...new Set([...paths, ...variants].map(p => origin + p).concat(['http://ardittiproduction.com/viewer?offer=test', 'https://www.ardittiproduction.com/en/?offer=test', 'http://www.ardittiproduction.com/viewer/']))];
for (const p of [...paths, '/partnership', '/en/partnership']) {
  for (const host of ['http://ardittiproduction.com', 'http://www.ardittiproduction.com', 'https://www.ardittiproduction.com']) urls.push(host + p);
  if (p !== '/') {
    urls.push(origin + p.replace(/\/$/, '') + '/index.html?offer=test');
    urls.push(origin + p.replace(/\/$/, '') + '/?offer=test');
  }
}
const results = [];
for (let i = 0; i < urls.length; i += 6) {
  results.push(...await Promise.all(urls.slice(i, i + 6).map(async url => {
    const chain = []; let current = url; let body = ''; let response;
    for (let n = 0; n < 8; n++) {
      response = await fetch(current, { redirect: 'manual' });
      body = await response.text();
      chain.push({ url: current, status: response.status, location: response.headers.get('location'), robots: response.headers.get('x-robots-tag') });
      if (!response.headers.get('location') || response.status < 300 || response.status >= 400) break;
      current = new URL(response.headers.get('location'), current).href;
    }
    const file = createHash('sha256').update(url).digest('hex').slice(0, 12) + '.html';
    fs.writeFileSync(`${folder}/${file}`, body);
    const tags = [...body.matchAll(/<(?:link|meta)\b[^>]*>/gi)].map(m => m[0]);
    return { url, chain, file, lang: body.match(/<html[^>]*lang="([^"]+)"/)?.[1], canonical: tags.filter(t => /rel="canonical"/i.test(t)), robots: tags.filter(t => /name="robots"/i.test(t)), alternates: tags.filter(t => /hreflang=/i.test(t)), h1: [...body.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gs)].map(m => m[1].replace(/<[^>]+>/g, '')), mainHash: createHash('sha256').update(body.match(/<main>(.*?)<\/main>/s)?.[1] || '').digest('hex'), headers: Object.fromEntries(response.headers) };
  })));
}
fs.writeFileSync(`${folder}/results.json`, JSON.stringify({ checkedAt: new Date().toISOString(), results }, null, 2));
for (const r of results) console.log(JSON.stringify({ url: r.url, chain: r.chain.map(x => [x.status, x.location]), lang: r.lang, canonical: r.canonical, robots: r.robots, h1: r.h1 }));
