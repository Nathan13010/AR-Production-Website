import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, '..', p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render, routes } = await import(pathToFileURL(toAbsolute('.ssr/entry-server.js')).href);

(async () => {
  const routesToPrerender = [];
  for (const locale in routes) {
    for (const key in routes[locale]) {
      routesToPrerender.push(routes[locale][key].path);
    }
  }

  // Also add 404
  routesToPrerender.push('/404');

  for (const url of routesToPrerender) {
    let { html, helmet } = render(url);

    // React 19 + Helmet hoist tags to the start of the renderToString output.
    // The actual app body starts at <div class="site-shell"> or similar.
    const splitIndex = html.indexOf('<div class="site-shell">');
    let extractedHead = '';
    if (splitIndex !== -1 && splitIndex > 0) {
      extractedHead = html.substring(0, splitIndex);
      html = html.substring(splitIndex); // Remove hoisted tags from body
    }

    const helmetHead = (helmet ? `
      ${helmet.title.toString()}
      ${helmet.priority.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
      ${helmet.script.toString()}
    ` : '') + extractedHead;

    const htmlContent = template
      .replace('</head>', `${helmetHead}</head>`)
      .replace('<!--app-html-->', html)
      .replace('lang="fr"', `lang="${url.startsWith('/en') ? 'en' : 'fr'}"`);

    const filePath = url === '/' || url === '/en'
      ? `${url === '/' ? '/index.html' : '/en/index.html'}`
      : url === '/404'
      ? '/404.html'
      : `${url}/index.html`;

    const absoluteFilePath = toAbsolute(`dist${filePath}`);
    fs.mkdirSync(path.dirname(absoluteFilePath), { recursive: true });
    fs.writeFileSync(absoluteFilePath, htmlContent);
    console.log(`pre-rendered: ${filePath}`);
  }

  // Generate sitemap.xml
  const domain = 'https://ardittiproduction.com';
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  for (const locale in routes) {
    for (const key in routes[locale]) {
      const route = routes[locale][key];
      if (route.isIndexable) {
        const url = `${domain}${route.path}`;
        sitemapContent += `  <url>\n    <loc>${url}</loc>\n`;
        sitemapContent += `    <xhtml:link rel="alternate" hreflang="${locale}" href="${url}" />\n`;
        if (route.alternatePath) {
          const alternateLang = locale === 'fr' ? 'en' : 'fr';
          sitemapContent += `    <xhtml:link rel="alternate" hreflang="${alternateLang}" href="${domain}${route.alternatePath}" />\n`;
        }
        if (locale === 'fr') {
           sitemapContent += `    <xhtml:link rel="alternate" hreflang="x-default" href="${url}" />\n`;
        } else if (route.alternatePath) {
           sitemapContent += `    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}${route.alternatePath}" />\n`;
        }
        sitemapContent += `  </url>\n`;
      }
    }
  }
  sitemapContent += `</urlset>`;
  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemapContent);
  console.log('pre-rendered: sitemap.xml');
})();
