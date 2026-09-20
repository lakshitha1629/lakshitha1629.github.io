# Static rendering and SEO

The project uses Vue 3, Vue Router and Vue CLI 4/Webpack, not Vite. The existing components, styles, animations, responsive layout and contact integration are retained.

## Build and deployment

Use Node 22 and npm (the authoritative lockfile is `package-lock.json`):

```sh
npm install
npx playwright install chromium
npm run build
npm run lint -- --no-fix
```

Linux CI installs Chromium system dependencies with `npx playwright install --with-deps chromium`. The workflow uses `npm ci`, runs the full build and validation, then publishes `dist` to `gh-pages` on pushes to `master` or manual workflow dispatch. The former deploy script referenced a missing `dist.ps1`; deployment is now handled by the existing GitHub Actions workflow.

The build converts profile/project PNGs to lossless WebP (original assets remain intact), compiles Vue, and opens each actual Vue route in headless Chromium. It saves the rendered DOM, including head metadata and the original styled page content, to `dist/<route>/index.html`. Vue remounts on the client for normal interactivity. Static content is present and readable even when JavaScript is disabled. This is build-time prerendering, not bot-specific rendering.

Routes come from `src/data/seo.js`, `projects.js` and `publications.js`, so added content automatically enters both prerendering and the sitemap. There are 35 indexable routes: 8 sections, 24 projects and 3 publications. No duplicated hand-maintained HTML content remains. The temporary build server's shell fallback is never deployed; the verifier uses a strict file server with real 404 responses.

`dist/404.html` renders the existing not-found component with `noindex,follow` and no canonical. Unknown project/publication IDs also resolve to this component. Legacy aliases (such as `/home/` and `/work/`) have small static redirect pages, excluded from the sitemap. They do not serve normal routes. GitHub Pages cannot configure arbitrary server-side redirects; directory URLs without a trailing slash are normalized by the host, and `/index.html` duplicates are consolidated by canonical tags.

Service-worker precaching excludes HTML to avoid retaining the old homepage shell or stale route metadata. Original font loading uses `display=swap` and preconnect; it is preserved. Below-the-fold project images are lazy-loaded, the profile image has high fetch priority, existing image containers reserve space, and prerendered loaded images include intrinsic dimensions.

## Validation

Completed locally: `npm install`, `npm run build`, `npm run lint -- --no-fix`, and `git diff --check`. All 35 routes passed the automated checks. Desktop and mobile static screenshots were inspected after the existing entrance animations completed, with JavaScript disabled. Generated PNG replacements total 5,420,610 bytes versus 8,877,359 bytes for their originals (about 39% smaller).

`npm run build` runs `scripts/verify-seo.js` automatically. `npm run test:seo` repeats it against an existing build. It checks all sitemap routes without JavaScript for HTTP 200, reload behavior, exactly one H1, visible text, unique titles/descriptions, self-canonicals, social tags, JSON-LD parsing and key types, crawlable internal links and robots directives. It checks unknown URLs for HTTP 404 and noindex, plus desktop/mobile Vue navigation, refresh, theme behavior and horizontal overflow. These are local static-host checks; live GitHub Pages must be checked after deployment. JSON-LD checks are structural, not a claim of Google rich-result eligibility.

## Google Search Console: exact setup

1. Open https://search.google.com/search-console and choose **Add property → URL prefix**. Enter `https://lakshitha1629.github.io/`. Use URL prefix because you do not control DNS for `github.io`.
2. Choose **HTML tag** verification. Copy only the value inside the tag's `content="..."` attribute.
3. In this GitHub repository, open **Settings → Secrets and variables → Actions → Variables → New repository variable**. Name it `GOOGLE_SITE_VERIFICATION` and paste the real value. The workflow maps it to `VUE_APP_GOOGLE_SITE_VERIFICATION`. For a local build, copy `.env.example` to `.env.local` and set the latter variable. No verification token has been invented.
4. Commit/push the changes to `master`, or manually run **Actions → Deploy to GitHub Pages → Run workflow** after the changes are on GitHub. In **Settings → Pages**, select **Deploy from a branch**, branch **gh-pages**, folder **/(root)**. Wait for deployment to complete.
5. Open the live homepage's page source. Confirm `google-site-verification` contains your value. Return to Search Console and click **Verify**. Keep the tag in subsequent builds.
6. Under **Sitemaps**, submit `sitemap.xml`. Confirm that Google can read it and that the submitted URLs use trailing slashes.
7. In **URL inspection**, paste each priority URL below. Choose **Test live URL**, check crawl permission, successful fetch, rendered content and declared canonical, then **Request indexing**.
8. Review **Page indexing**, **Sitemaps**, **Manual actions**, and **Security issues**. Inspect representative project/publication pages again after Google recrawls. Validate the live markup with https://validator.schema.org/ and https://search.google.com/test/rich-results (not every valid schema type has a rich result).

Priority URLs:

1. https://lakshitha1629.github.io/
2. https://lakshitha1629.github.io/about/
3. https://lakshitha1629.github.io/experience/
4. https://lakshitha1629.github.io/projects/
5. https://lakshitha1629.github.io/skills/
6. https://lakshitha1629.github.io/publications/
7. https://lakshitha1629.github.io/projects/toolgenie/
8. https://lakshitha1629.github.io/publications/currency-vision-ircuwu-2020/

The sitemap covers education, contact, and the remaining detail pages. Request indexing for the strongest pages first rather than repeatedly submitting every URL.

## Remaining considerations

- These changes must be deployed before live responses change. GitHub settings, verification and indexing requests require the owner's account. No deployment or Search Console submission was performed by this implementation.
- Section URLs retain the existing long portfolio layout and highlight/scroll to their sections. Much of their body text overlaps; Google may select a different canonical or choose not to index every section despite unique metadata. Distinct detail pages provide more differentiated content. Changing that layout would conflict with the instruction to preserve the site.
- The DirectFN role is commented out in `experience.js`, although the existing introduction and metadata mention current employment there. It was not restored or invented; confirm whether you want that existing role made visible.
- Vue CLI 4 and several dependencies are old. The build reports Browserslist/Sass deprecation and asset-size warnings. Large images and the existing Boxicons font remain; lossless compression reduces payload without redesigning assets. No field Core Web Vitals or ranking improvement is claimed.
- Existing external services (Google Fonts, GitHub counters, EmailJS and external project links) depend on their providers. Tests do not send real contact messages.
- Google decides whether/when to index. A sitemap and indexing request do not guarantee indexing or rankings. Review exclusions in Search Console after deployment.

References: [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics), [Search Console verification](https://support.google.com/webmasters/answer/9008080), [Request a recrawl](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [GitHub Pages 404 handling](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site).

## File inventory

Modified:

- `.github/workflows/deploy.yml`
- `.gitignore`
- `README.md`
- `package.json`
- `public/index.html`
- `src/assets/styles/folio.scss`
- `src/components/folio/ProfileCard.vue`
- `src/data/profile.js`
- `src/data/projects.js`
- `src/data/seo.js`
- `src/main.js`
- `src/registerServiceWorker.js`
- `src/router/index.js`
- `src/seo/apply.js`
- `src/views/Folio.vue`
- `vue.config.js`

Created:

- `.env.example`
- `SEO.md`
- `package-lock.json`
- `scripts/optimize-images.js`
- `scripts/prerender.js`
- `scripts/static-server.js`
- `scripts/verify-seo.js`
- `src/data/image.js`

Removed/replaced:

- `pnpm-lock.yaml`
- `pnpm-workspace.yaml`
- `public/404.html`
- `public/_redirects`
- `public/robot.txt`
- `public/sitemap.xml`
- `scripts/generate-seo-pages.js`
- `scripts/sync-spa-fallback.js`
- `yarn.lock`

Generated (ignored by Git): `dist/` contains 35 indexable HTML files, the real `404.html`, legacy redirect pages, sitemap, robots, and assets. `public/optimized/` contains generated lossless image variants.
