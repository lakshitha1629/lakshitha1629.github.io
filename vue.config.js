module.exports = {
    publicPath: '/',
    chainWebpack(config) {
        config.plugin('html').tap((args) => {
            if (process.env.NODE_ENV === 'production') {
                args[0].minify = {
                    collapseWhitespace: true,
                    removeComments: false,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                };
            }
            return args;
        });
    },
    pwa: {
        name: 'Lakshitha Perera',
        description:
            'Lakshitha Perera is an Associate Tech Lead and Full-Stack Engineer from Sri Lanka specializing in AI, scalable web applications, cloud systems and software engineering.',
        themeColor: '#c6f431',
        msTileColor: '#0b0b0b',
        workboxOptions: {
            skipWaiting: true,
            // HTML is generated after webpack. Never cache an obsolete app shell.
            exclude: [/\.html$/, /\.(?:png|jpe?g|webp|pdf)$/i, /sitemap\.xml$/],
            navigateFallback: undefined,
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
