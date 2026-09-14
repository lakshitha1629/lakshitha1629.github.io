const fs = require('fs');
const path = require('path');

const DIST = path.join(__dirname, '..', 'dist');
const SITE = 'https://lakshitha1629.github.io';
const LASTMOD = '2026-09-14';

const PROFILE_JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${SITE}/#profile`,
    url: `${SITE}/`,
    name: 'Lakshitha Perera',
    mainEntity: {
        '@type': 'Person',
        '@id': `${SITE}/#lakshitha-perera`,
        name: 'Lakshitha Perera',
        url: `${SITE}/`,
        image: `${SITE}/profile/lakshitha.png`,
        jobTitle: 'Associate Tech Lead',
        description: 'Associate Tech Lead, Full-Stack Engineer and AI Developer from Sri Lanka.',
        email: 'mailto:lakshitha1629@gmail.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Nugegoda', addressCountry: 'LK' },
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'Uva Wellassa University of Sri Lanka' },
        worksFor: { '@type': 'Organization', name: 'DirectFN', url: 'https://www.directfn.com/' },
        knowsAbout: [
            'Full-Stack Engineering',
            'Artificial Intelligence',
            'Cloud Systems',
            'Software Engineering',
            'Fintech',
        ],
        sameAs: [
            'https://www.linkedin.com/in/lakshitha1629/',
            'https://github.com/lakshitha1629',
            'https://medium.com/@lakshitha1629',
            'https://twitter.com/lakshitha1629',
        ],
    },
};

const IDENTITY = `
<p>Associate Tech Lead, Full-Stack Engineer and AI Developer based in Sri Lanka.</p>
<p>Lakshitha Perera is an Associate Tech Lead and Full-Stack Engineer from Sri Lanka specializing in AI, scalable web applications, cloud systems and software engineering. He currently works at DirectFN and studied Industrial Information Technology at Uva Wellassa University of Sri Lanka.</p>
`;

const PROJECTS = [
    {
        id: 'toolgenie',
        title: 'ToolGenie',
        overline: 'AI Creator Platform · Tech Lead',
        solution:
            'An AI-powered creator platform and Chrome extension for YouTube ideation, SEO, metadata and workflow automation.',
        problem: 'Creators need faster ways to ideate, package and publish YouTube work.',
        role: 'Tech lead',
    },
    {
        id: 'ayozat',
        title: 'AYOZAT Stream',
        overline: 'Streaming & VOD Platform',
        solution:
            'A multi-surface streaming experience spanning live TV, VOD, monetization, personalization and mobile delivery.',
        problem: 'Streaming products need to work across live TV, VOD, monetization and mobile.',
        role: 'Product engineering',
    },
    {
        id: 'zatlive',
        title: 'ZATLIVE',
        overline: 'Video & Broadband Platform · Tech Lead',
        solution:
            'Built the ZATLIVE platform for immersive, customizable and interactive video services — VOD, live streaming, advanced playout and ad monetization.',
        problem: 'Video and broadband providers need one platform for VOD, live streaming and ad monetization.',
        role: 'Full Stack Developer & Tech Lead',
    },
    {
        id: 'rightsmint',
        title: 'RightsMint',
        overline: 'Web3 Royalty Marketplace',
        solution: 'A platform exploring fractional intellectual-property ownership with Solana smart contracts and secure APIs.',
        problem: 'Intellectual-property ownership is difficult to split and transact.',
        role: 'Full stack',
    },
    {
        id: 'delivery-route',
        title: 'Smart Delivery Routing',
        overline: 'Route Optimization Engine · Python',
        solution: 'A cost-effective engine for vehicle routing optimization, using maps, OR-Tools and real-time messaging.',
        problem: 'Find the nearest and fastest route for delivery drivers to deliver customer orders.',
        role: 'Full stack developer',
    },
    {
        id: 'shrimp',
        title: 'Shrimp Counter',
        overline: 'Computer Vision App · BevyLabs',
        solution: 'A computer-vision proof of concept that detects shrimp and shrimp clusters in the browser.',
        problem: 'Count shrimp and shrimp clusters through a magnifier or microscope without doing it by hand.',
        role: 'Developer and Designer',
    },
    {
        id: 'robo-arm',
        title: 'Robot Arm (MindWave & Kinect)',
        overline: 'Robotics · Full Stack Developer',
        solution:
            'An automatic robotic hand that tracks and replicates the motions performed by the user’s own hand, built on MindWave and Kinect motion capture.',
        problem: 'Control a robotic hand remotely by capturing and replicating a person’s own hand motions.',
        role: 'Full Stack Developer',
    },
    {
        id: 'python-sinhala',
        title: 'Python Sinhala',
        overline: 'Learn-to-Code App · BevyLabs',
        solution: 'A Python interpreter on Android so practice can happen anytime, anywhere.',
        problem: 'People who want to learn Python do not always have a computer nearby.',
        role: 'Developer',
    },
    {
        id: 'pascal-sinhala',
        title: 'Pascal Sinhala',
        overline: 'Learn-to-Code App · BevyLabs',
        solution: 'A mobile tutorial app that teaches Pascal programming in Sinhala, with structured lessons and runnable examples.',
        problem: 'Sinhala-speaking beginners need a native-language way to learn Pascal.',
        role: 'Developer',
    },
    {
        id: 'weddings',
        title: 'Weddings by Shanaka',
        overline: 'Photography Studio Website',
        solution: 'A straightforward wedding photography website for a client.',
        problem: 'A wedding photographer needed a simple personal site.',
        role: 'Developer',
    },
    {
        id: 'phishnet',
        title: 'PhishNet',
        overline: 'Machine learning · Research',
        solution: 'A deep-learning project for phishing detection.',
        problem: 'Phishing remains a practical security problem that can be approached with applied machine learning.',
        role: 'Machine learning · Research',
    },
];

const PUBLICATIONS = [
    {
        id: 'phishnet',
        title: 'PhishNet: Deep Learning for Phishing Detection',
        year: '2020',
        type: 'Research project',
        description:
            'A deep-learning research project by Lakshitha Perera applying neural networks to phishing detection.',
        venue: 'Independent research · Uva Wellassa University of Sri Lanka',
        url: 'https://github.com/lakshitha1629/PhishNet_Deep_Learning_for_Phishing_Detection',
    },
    {
        id: 'python-sinhala',
        title: 'Python Sinhala',
        year: '2020',
        type: 'Educational resource',
        description:
            'A Sinhala-language Python learning resource by Lakshitha Perera, with a companion Android interpreter so beginners can study and practise without a computer.',
        venue: 'BevyLabs · Google Play',
        url: 'https://play.google.com/store/apps/details?id=bevylabs.buddhika.pythonsinhala&hl=en_US&gl=US',
    },
];

function wrap(h1, extra) {
    return `
<nav>
  <a href="${SITE}/">Home</a>
  <a href="${SITE}/about">About</a>
  <a href="${SITE}/experience">Experience</a>
  <a href="${SITE}/projects">Projects</a>
  <a href="${SITE}/publications">Publications</a>
  <a href="${SITE}/education">Education</a>
  <a href="${SITE}/contact">Contact</a>
</nav>
<h1>${h1}</h1>
${IDENTITY}
${extra || ''}
<p>
  <a href="${SITE}/about">About Lakshitha Perera</a> ·
  <a href="${SITE}/projects">Projects</a> ·
  <a href="${SITE}/publications">Publications</a> ·
  <a href="https://www.linkedin.com/in/lakshitha1629/">LinkedIn</a> ·
  <a href="https://github.com/lakshitha1629">GitHub</a>
</p>`;
}

function projectListHtml() {
    return `<h2>Selected projects</h2><ul>${PROJECTS.map(
        (p) => `<li><a href="${SITE}/projects/${p.id}">${p.title}</a> — ${p.solution}</li>`
    ).join('')}</ul>`;
}

function publicationListHtml() {
    return `<h2>Publications</h2><ul>${PUBLICATIONS.map(
        (p) => `<li><a href="${SITE}/publications/${p.id}">${p.title}</a> (${p.year}) — ${p.description}</li>`
    ).join('')}</ul>`;
}

const SECTION_PAGES = [
    {
        path: '/',
        title: 'Lakshitha Perera | Associate Tech Lead & Full-Stack Engineer',
        description:
            'Lakshitha Perera is an Associate Tech Lead and Full-Stack Engineer from Sri Lanka specializing in AI, scalable web applications, cloud systems and software engineering.',
        ogType: 'profile',
        h1: 'Lakshitha Perera',
        body: wrap(
            'Lakshitha Perera',
            `
<h2>About</h2>
<p>I’m Lakshitha, an Associate Tech Lead and full-stack software engineer based in Nugegoda, Sri Lanka. I’ve spent 6+ years delivering enterprise applications across fintech, SaaS, streaming, e-commerce and AI/ML.</p>
<h2>Experience</h2>
<p><strong>Full Stack Developer — ProjectXSpace</strong> (Aug 2020 — Apr 2022). E-commerce, vehicle-routing and recommendation products.</p>
<p><strong>Software Engineer — BevyLabs</strong> (Mar 2020 — Sep 2020). Web, mobile and computer-vision products.</p>
<p><strong>Software Engineer Intern — Mobitel</strong> (Sep 2019 — Feb 2020).</p>
${projectListHtml()}
${publicationListHtml()}
<h2>Education</h2>
<p>Bachelor of Science (Honours), Industrial Information Technology — Uva Wellassa University of Sri Lanka (2016–2020).</p>
<h2>Contact</h2>
<p><a href="mailto:lakshitha1629@gmail.com">lakshitha1629@gmail.com</a></p>
`
        ),
        jsonLd: PROFILE_JSON_LD,
        priority: '1.0',
    },
    {
        path: '/about',
        title: 'About Lakshitha Perera | Associate Tech Lead & Full-Stack Engineer',
        description:
            'About Lakshitha Perera — Associate Tech Lead, Full-Stack Engineer and AI Developer from Sri Lanka, working on fintech, SaaS, streaming and applied AI.',
        ogType: 'profile',
        h1: 'About Lakshitha Perera',
        body: wrap(
            'About Lakshitha Perera',
            `<p>I’m Lakshitha, an Associate Tech Lead and full-stack software engineer based in Nugegoda, Sri Lanka. I work across the stack with C#/.NET, Angular, TypeScript, Oracle PL/SQL, Python and REST APIs, including AI-powered creator products, streaming platforms and computer-vision builds.</p>`
        ),
        jsonLd: PROFILE_JSON_LD,
        priority: '0.9',
    },
    {
        path: '/experience',
        title: 'Experience | Lakshitha Perera, Associate Tech Lead',
        description:
            'Work experience of Lakshitha Perera: Associate Tech Lead at DirectFN, previously Full Stack Developer at ProjectXSpace, Software Engineer at BevyLabs, and intern at Mobitel.',
        ogType: 'profile',
        h1: 'Experience — Lakshitha Perera',
        body: wrap(
            'Experience — Lakshitha Perera',
            `
<h2>DirectFN — Associate Tech Lead / Software Engineer</h2>
<p>Jul 2022 — Present · Malabe, Sri Lanka. Enterprise fintech applications and client-specific solutions with C#/.NET and Oracle PL/SQL.</p>
<h2>ProjectXSpace — Full Stack Developer</h2>
<p>Aug 2020 — Apr 2022 · Rosanna, Victoria, Australia (Remote). E-commerce, vehicle-routing and recommendation products.</p>
<h2>BevyLabs — Software Engineer</h2>
<p>Mar 2020 — Sep 2020 · Katugastota, Sri Lanka.</p>
<h2>Mobitel — Software Engineer Intern</h2>
<p>Sep 2019 — Feb 2020 · Colombo, Sri Lanka.</p>
`
        ),
        jsonLd: PROFILE_JSON_LD,
        priority: '0.8',
    },
    {
        path: '/projects',
        title: 'Projects | Lakshitha Perera — AI, Full-Stack and Cloud',
        description:
            'Selected software projects by Lakshitha Perera, including ToolGenie, AYOZAT Stream, ZATLIVE, RightsMint and applied AI systems.',
        ogType: 'website',
        h1: 'Projects by Lakshitha Perera',
        body: wrap('Projects by Lakshitha Perera', projectListHtml()),
        jsonLd: PROFILE_JSON_LD,
        priority: '0.9',
    },
    {
        path: '/publications',
        title: 'Publications | Lakshitha Perera',
        description:
            'Research and educational work by Lakshitha Perera, including PhishNet deep-learning research and the Python Sinhala learning resource.',
        ogType: 'website',
        h1: 'Publications by Lakshitha Perera',
        body: wrap('Publications by Lakshitha Perera', publicationListHtml()),
        jsonLd: PROFILE_JSON_LD,
        priority: '0.8',
    },
    {
        path: '/education',
        title: 'Education | Lakshitha Perera — Uva Wellassa University',
        description:
            'Lakshitha Perera studied Industrial Information Technology at Uva Wellassa University of Sri Lanka, with competitions and community leadership alongside the degree.',
        ogType: 'profile',
        h1: 'Education — Lakshitha Perera',
        body: wrap(
            'Education — Lakshitha Perera',
            `<p>Bachelor of Science (Honours) in Industrial Information Technology at Uva Wellassa University of Sri Lanka, March 2016 to March 2020. Earlier education at Nalanda College, Colombo.</p>`
        ),
        jsonLd: PROFILE_JSON_LD,
        priority: '0.7',
    },
    {
        path: '/skills',
        title: 'Skills | Lakshitha Perera — Full-Stack, AI and Cloud',
        description:
            'Technical skills of Lakshitha Perera: C#/.NET, Angular, Python, Oracle PL/SQL, AI/ML, cloud systems and software engineering.',
        ogType: 'website',
        h1: 'Skills — Lakshitha Perera',
        body: wrap(
            'Skills — Lakshitha Perera',
            `<p>C# / .NET, Angular, TypeScript, React, Python, Oracle PL/SQL, REST APIs, machine learning, computer vision, Azure, and software engineering for fintech and SaaS products.</p>`
        ),
        jsonLd: PROFILE_JSON_LD,
        priority: '0.7',
    },
    {
        path: '/contact',
        title: 'Contact Lakshitha Perera | Associate Tech Lead',
        description:
            'Contact Lakshitha Perera — Associate Tech Lead and Full-Stack Engineer based in Sri Lanka. Open to conversations about software engineering, AI and product work.',
        ogType: 'profile',
        h1: 'Contact Lakshitha Perera',
        body: wrap(
            'Contact Lakshitha Perera',
            `<p><a href="mailto:lakshitha1629@gmail.com">lakshitha1629@gmail.com</a></p>
<p><a href="https://www.linkedin.com/in/lakshitha1629/">LinkedIn</a> · <a href="https://github.com/lakshitha1629">GitHub</a></p>`
        ),
        jsonLd: PROFILE_JSON_LD,
        priority: '0.8',
    },
];

function projectPages() {
    return PROJECTS.map((project) => {
        const urlPath = `/projects/${project.id}`;
        const url = `${SITE}${urlPath}`;
        return {
            path: urlPath,
            title: `${project.title} | Lakshitha Perera`,
            description: `${project.solution} Built by Lakshitha Perera, Associate Tech Lead and Full-Stack Engineer from Sri Lanka.`,
            ogType: 'article',
            h1: project.title,
            body: wrap(
                project.title,
                `
<p>${project.overline}</p>
<p>A project by Lakshitha Perera, Associate Tech Lead, Full-Stack Engineer and AI Developer based in Sri Lanka.</p>
<h2>The problem</h2>
<p>${project.problem}</p>
<h2>The work</h2>
<p>${project.solution}</p>
<p><strong>Role.</strong> ${project.role}</p>
<p><a href="${SITE}/projects">All projects</a></p>
`
            ),
            jsonLd: {
                '@context': 'https://schema.org',
                '@graph': [
                    PROFILE_JSON_LD,
                    {
                        '@type': 'CreativeWork',
                        '@id': `${url}#work`,
                        name: project.title,
                        description: project.solution,
                        url,
                        author: { '@id': `${SITE}/#lakshitha-perera` },
                        creator: { '@id': `${SITE}/#lakshitha-perera` },
                    },
                ],
            },
            priority: '0.6',
        };
    });
}

function publicationPages() {
    return PUBLICATIONS.map((item) => {
        const urlPath = `/publications/${item.id}`;
        return {
            path: urlPath,
            title: `${item.title} | Lakshitha Perera`,
            description: item.description,
            ogType: 'article',
            h1: item.title,
            body: wrap(
                item.title,
                `
<p>${item.type} · ${item.year}</p>
<p>Author: Lakshitha Perera</p>
<p>${item.description}</p>
<p><strong>Venue.</strong> ${item.venue}</p>
<p><a href="${item.url}">External reference</a></p>
`
            ),
            jsonLd: {
                '@context': 'https://schema.org',
                '@graph': [
                    PROFILE_JSON_LD,
                    {
                        '@type': 'CreativeWork',
                        '@id': `${SITE}${urlPath}#publication`,
                        name: item.title,
                        description: item.description,
                        datePublished: item.year,
                        url: item.url,
                        author: { '@id': `${SITE}/#lakshitha-perera` },
                    },
                ],
            },
            priority: '0.7',
        };
    });
}

function escapeAttr(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;');
}

function replaceMeta(html, attr, key, value) {
    const re = new RegExp(`<meta ${attr}="${key}" content="[^"]*"`);
    if (!re.test(html)) return html;
    return html.replace(re, `<meta ${attr}="${key}" content="${escapeAttr(value)}"`);
}

function applyPage(template, page) {
    const url = page.path === '/' ? `${SITE}/` : `${SITE}${page.path}`;
    let html = template;
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
    html = replaceMeta(html, 'name', 'description', page.description);
    html = replaceMeta(html, 'property', 'og:title', page.title);
    html = replaceMeta(html, 'property', 'og:description', page.description);
    html = replaceMeta(html, 'property', 'og:url', url);
    html = replaceMeta(html, 'property', 'og:type', page.ogType);
    html = replaceMeta(html, 'name', 'twitter:title', page.title);
    html = replaceMeta(html, 'name', 'twitter:description', page.description);
    html = html.replace(/<link[^>]*rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}">`);
    html = html.replace(
        /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
        `<script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>`
    );
    html = html.replace(
        /<div id="seo-fallback"[^>]*>[\s\S]*?<\/div>/,
        `<div id="seo-fallback" class="seo-fallback">${page.body}</div>`
    );
    html = html.replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript>${page.body}</noscript>`);
    return html;
}

function writePage(template, page) {
    const html = applyPage(template, page);
    if (page.path === '/') {
        fs.writeFileSync(path.join(DIST, 'index.html'), html);
        return;
    }
    const dir = path.join(DIST, page.path.replace(/^\//, ''));
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
}

function writeSitemap(pages) {
    const urls = pages
        .map((page) => {
            const loc = page.path === '/' ? `${SITE}/` : `${SITE}${page.path}`;
            return `    <url>
        <loc>${loc}</loc>
        <lastmod>${LASTMOD}</lastmod>
        <priority>${page.priority || '0.5'}</priority>
    </url>`;
        })
        .join('\n');
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
    fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml);
    fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), xml);
}

function main() {
    const indexPath = path.join(DIST, 'index.html');
    if (!fs.existsSync(indexPath)) {
        throw new Error('dist/index.html is missing. Run the Vue build first.');
    }
    const template = fs.readFileSync(indexPath, 'utf8');
    const pages = [...SECTION_PAGES, ...projectPages(), ...publicationPages()];
    pages.forEach((page) => writePage(template, page));
    writeSitemap(pages);
    console.log(`Generated crawler HTML for ${pages.length} URLs.`);
}

main();
