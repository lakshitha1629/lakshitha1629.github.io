import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from './../views/Portfolio.vue';

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'AboutMe',
        component: Portfolio,
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Portfolio,
    },
    {
        path: '/Project',
        name: 'Project',
        component: Portfolio,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Portfolio,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: () => import('./../views/PageNotFound'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (!savedPosition) {
            return { left: 0, top: 0 };
        } else {
            return savedPosition;
        }
    },
});

export default router;
