import { createRouter, createWebHistory } from 'vue-router';
import Folio from './../views/Folio.vue';

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'AboutMe',
        component: Folio,
    },
    {
        path: '/about',
        name: 'About',
        component: Folio,
    },
    {
        path: '/experience',
        name: 'Experience',
        component: Folio,
    },
    {
        path: '/Project',
        name: 'Project',
        component: Folio,
    },
    {
        path: '/work',
        redirect: '/Project',
    },
    {
        path: '/projects',
        redirect: '/Project',
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Folio,
    },
    {
        path: '/skills',
        name: 'Skills',
        component: Folio,
    },
    {
        path: '/ai',
        name: 'Ai',
        component: Folio,
    },
    {
        path: '/engineering',
        name: 'Devops',
        component: Folio,
    },
    {
        path: '/education',
        name: 'Education',
        component: Folio,
    },
    {
        path: '/future',
        redirect: '/about',
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
    scrollBehavior() {
        return false;
    },
});

export default router;
