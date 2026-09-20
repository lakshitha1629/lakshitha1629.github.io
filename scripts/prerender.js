const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { serve } = require('./static-server');

async function main() {
    const dist = path.resolve(__dirname, '../dist');
    const shell = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
    const { server, origin } = await serve(shell);
    let browser;
    try {
        browser = await chromium.launch({ headless: true });
        const context = await browser.newContext({ reducedMotion: 'reduce', serviceWorkers: 'block' });
        await context.addInitScript(() => { window.__PRERENDER__ = true; });
        await context.route('**/*', route => new URL(route.request().url()).origin === origin ? route.continue() : route.abort());
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.goto(origin);
        await page.waitForFunction(() => window.__INDEXABLE_PATHS__);
        const paths = await page.evaluate(() => window.__INDEXABLE_PATHS__);
        const aliases = await page.evaluate(() => window.__LEGACY_ROUTES__);
        const output = [];
        for (const route of [...paths, '/__not-found__/']) {
            await page.goto(origin + route, { waitUntil: 'load' });
            const missing = route === '/__not-found__/';
            await page.waitForSelector(missing ? '.page-not-found' : '.folio.is-ready');
            if (!missing) await page.waitForFunction(() => document.querySelector('link[rel=canonical]').href.endsWith(location.pathname));
            await page.evaluate(() => {
                document.querySelectorAll('[data-rise], .folio-hero').forEach(el => el.classList.add('is-in'));
                document.querySelectorAll('img').forEach(img => {
                    if (img.naturalWidth) { img.setAttribute('width', img.naturalWidth); img.setAttribute('height', img.naturalHeight); }
                });
                document.querySelectorAll('link[rel=prefetch]').forEach(el => el.remove());
            });
            output.push([missing ? '404.html' : route.slice(1) + 'index.html', await page.content()]);
        }
        if (errors.length) throw new Error(errors.join('\n'));
        for (const [file, html] of output) {
            const target = path.join(dist, file);
            fs.mkdirSync(path.dirname(target), { recursive: true });
            fs.writeFileSync(target, '<!DOCTYPE html>\n' + html.replace(/^<!DOCTYPE html>/i, ''));
        }
        // Preserve old bookmarks without putting redirect pages in the sitemap.
        for (const alias of aliases) {
            const folder = path.join(dist, alias.path);
            fs.mkdirSync(folder, { recursive: true });
            fs.writeFileSync(path.join(folder, 'index.html'), `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Page moved | Lakshitha Perera</title><meta name="robots" content="noindex,follow"><link rel="canonical" href="https://lakshitha1629.github.io${alias.target}"><meta http-equiv="refresh" content="0;url=${alias.target}"></head><body><p>This page has moved. <a href="${alias.target}">Continue to the portfolio</a>.</p></body></html>`);
        }
        fs.writeFileSync(path.join(dist, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + paths.map(p => `  <url><loc>https://lakshitha1629.github.io${p}</loc></url>`).join('\n') + '\n</urlset>\n');
        console.log(`Prerendered ${paths.length} Vue pages and a genuine 404 page.`);
    } finally {
        if (browser) await browser.close();
        await new Promise(resolve => server.close(resolve));
    }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
