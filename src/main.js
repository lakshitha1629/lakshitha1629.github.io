import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.scss';
import './assets/styles/folio.scss';
import './registerServiceWorker';
import { indexablePaths, resolveSeo } from './data/seo';
import { applySeo } from './seo/apply';
import 'boxicons/css/boxicons.min.css';

router.afterEach(to => applySeo(resolveSeo(to)));
const app = createApp(App).use(router);
router.isReady().then(() => {
    app.mount('#app');
    if (window.__PRERENDER__) {
        window.__INDEXABLE_PATHS__ = indexablePaths;
        window.__LEGACY_ROUTES__ = router.getRoutes().filter(route => typeof route.redirect === 'string')
            .map(route => ({ path: route.path, target: route.redirect }));
    }
});
