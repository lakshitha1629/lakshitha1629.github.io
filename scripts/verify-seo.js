const fs = require('fs');
const assert = require('assert');
const { chromium } = require('playwright');
const { serve } = require('./static-server');

async function main() {
    const urls = [...fs.readFileSync('dist/sitemap.xml', 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
    assert.equal(new Set(urls).size, urls.length, 'Duplicate sitemap URLs');
    const robots = fs.readFileSync('dist/robots.txt', 'utf8');
    assert(!/^Disallow:\s*\/\s*$/m.test(robots));
    assert(robots.includes('Sitemap: https://lakshitha1629.github.io/sitemap.xml'));
    const { server, origin } = await serve();
    let browser;
    try {
        browser = await chromium.launch();
        const context = await browser.newContext({ javaScriptEnabled: false, serviceWorkers: 'block' });
        await context.route('**/*', r => new URL(r.request().url()).origin === origin ? r.continue() : r.abort());
        const page = await context.newPage();
        const titles = new Set(), descriptions = new Set(), links = new Set();
        for (const url of urls) {
            const pathname = new URL(url).pathname;
            assert(pathname.endsWith('/'));
            const response = await page.goto(origin + pathname);
            assert.equal(response.status(), 200, pathname);
            const data = await page.evaluate(() => ({
                title: document.title,
                description: document.querySelector('meta[name=description]').content,
                canonical: [...document.querySelectorAll('link[rel=canonical]')].map(e => e.href),
                robots: document.querySelector('meta[name=robots]').content,
                h1: [...document.querySelectorAll('h1')].map(e => e.textContent),
                text: document.querySelector('#app').innerText,
                tags: ['og:title', 'og:description', 'og:url', 'og:type', 'og:image'].map(k => document.querySelector(`meta[property="${k}"]`)?.content),
                twitter: ['card', 'title', 'description', 'image'].map(k => document.querySelector(`meta[name="twitter:${k}"]`)?.content),
                schema: [...document.querySelectorAll('script[type="application/ld+json"]')].map(e => JSON.parse(e.textContent)),
                links: [...document.querySelectorAll('a[href^="/"]')].map(e => e.getAttribute('href')),
            }));
            assert(!titles.has(data.title), `Duplicate title: ${pathname}`); titles.add(data.title);
            assert(!descriptions.has(data.description), `Duplicate description: ${pathname}`); descriptions.add(data.description);
            assert.deepEqual(data.canonical, [url]);
            assert(!data.robots.includes('noindex'));
            assert.equal(data.h1.length, 1, `H1: ${pathname}`);
            assert(data.text.length > 200 && data.text.includes('Lakshitha'));
            assert(data.tags.every(Boolean) && data.twitter.every(Boolean));
            assert.equal(data.tags[2], url);
            assert.equal(data.schema.length, 1);
            assert.equal(data.schema[0]['@context'], 'https://schema.org');
            const schemaText = JSON.stringify(data.schema);
            assert(!schemaText.includes('"datePublished":"Ongoing"'));
            if (pathname === '/') for (const type of ['Person', 'WebSite', 'ProfilePage']) assert(schemaText.includes(`"@type":"${type}"`));
            for (const link of data.links) links.add(link);
            assert.equal((await page.reload()).status(), 200);
        }
        console.log(`Static checks passed for ${urls.length} pages.`);
        for (const url of urls) assert(links.has(new URL(url).pathname), `Orphaned page: ${url}`);
        for (const route of ['/missing-page/', '/projects/not-real/', '/publications/not-real/']) {
            assert.equal((await page.goto(origin + route)).status(), 404);
            assert.equal(await page.locator('meta[name=robots]').getAttribute('content'), 'noindex,follow');
            assert.equal(await page.locator('link[rel=canonical]').count(), 0);
        }
        await context.close();
        const live = await browser.newContext({ serviceWorkers: 'block' });
        await live.route('**/*', r => new URL(r.request().url()).origin === origin ? r.continue() : r.abort());
        const client = await live.newPage();
        const errors = [];
        client.on('pageerror', e => errors.push(e.message));
        for (const width of [1440, 390]) {
            await client.setViewportSize({ width, height: 900 });
            await client.goto(origin + '/');
            await client.waitForSelector('.folio.is-ready');
            await client.locator(width > 1000 ? '.folio-nav-rail a[href="/projects/"]' : '.folio-sitelinks a[href="/projects/"]').click();
            await client.waitForURL('**/projects/');
            await client.waitForFunction(() => document.querySelector('link[rel=canonical]').href.endsWith('/projects/'));
            await client.locator('.work-card').first().click();
            await client.waitForSelector('.project-article');
            assert.equal((await client.reload()).status(), 200);
            await client.waitForSelector('.folio.is-ready');
            assert.equal(await client.locator('h1').count(), 1);
            assert(await client.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `Horizontal overflow at ${width}`);
            if (width > 1000) {
                await client.locator('.folio-nav-rail-theme').click();
                assert(await client.locator('html').evaluate(el => el.classList.contains('theme-light')));
                await client.locator('.folio-nav-rail-theme').click();
            }
        }
        assert.deepEqual(errors, []);
        console.log(`Verified ${urls.length} HTTP 200 pages without JavaScript: refresh, unique SEO, schema, H1, content, links; genuine 404s; desktop/mobile Vue navigation and theme.`);
    } finally {
        if (browser) await browser.close();
        await new Promise(resolve => server.close(resolve));
    }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
