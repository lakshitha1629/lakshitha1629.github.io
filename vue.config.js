module.exports = {
    publicPath: '/',
    pwa: {
        name: 'Lakshitha Perera',
        description:
            'Associate Tech Lead and full-stack software engineer with 6+ years shipping enterprise applications across fintech, SaaS, streaming, e-commerce and AI/ML.',
        themeColor: '#c6f431',
        msTileColor: '#0b0b0b',
        workboxOptions: {
            skipWaiting: true,
            exclude: [/_redirects/],
        },
        iconPaths: {
            favicon32: 'img/icons/favicon-32x32.png',
            favicon16: 'img/icons/favicon-16x16.png',
            appleTouchIcon: 'img/icons/apple-touch-icon-180x180.png',
            maskIcon: null,
            msTileImage: 'img/icons/android-chrome-192x192.png',
        },
    },
};
