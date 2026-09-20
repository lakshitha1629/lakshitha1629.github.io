export function applySeo(page) {
    if (typeof document === 'undefined' || !page) return;

    document.title = page.title;
    setMeta('name', 'description', page.description);
    setMeta('name', 'author', 'Lakshitha Perera');
    setMeta('name', 'robots', page.robots || 'index,follow');
    setMeta('property', 'og:type', page.ogType || 'profile');
    setMeta('property', 'og:title', page.title);
    setMeta('property', 'og:description', page.description);
    setMeta('property', 'og:url', page.url);
    setMeta('property', 'og:image', page.image);
    setMeta('property', 'og:image:alt', 'Lakshitha Perera, Associate Tech Lead and Full-Stack Engineer');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', page.title);
    setMeta('name', 'twitter:description', page.description);
    setMeta('name', 'twitter:image', page.image);
    setMeta('name', 'twitter:creator', '@lakshitha1629');
    setCanonical(page.url);
    setJsonLd(page.jsonLd);
}

function setMeta(attr, key, content) {
    const selector = `meta[${attr}="${key}"]`;
    if (!content) { document.head.querySelectorAll(selector).forEach(el => el.remove()); return; }
    let el = document.head.querySelector(selector);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setCanonical(href) {
    if (!href) { document.head.querySelectorAll('link[rel=canonical]').forEach(el => el.remove()); return; }
    let el = document.head.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

function setJsonLd(data) {
    if (!data) { document.head.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove()); return; }
    let el = document.head.querySelector('script[type="application/ld+json"]');
    if (!el) {
        el = document.createElement('script');
        el.type = 'application/ld+json';
        document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
}

export default applySeo;
