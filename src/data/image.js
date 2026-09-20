export function imageUrl(url) {
    return process.env.NODE_ENV === 'production' && /^\/(profile|work)\/.+\.(png)$/i.test(url)
        ? '/optimized' + url.replace(/\.[^.]+$/, '.webp')
        : url;
}
