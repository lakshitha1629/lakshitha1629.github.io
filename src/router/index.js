import { createRouter, createWebHistory } from 'vue-router';
import Folio from './../views/Folio.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Folio,
    },
    {
        path: '/home',
        redirect: '/',
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
        path: '/projects',
        name: 'Project',
        component: Folio,
    },
    {
        path: '/projects/:id',
        name: 'ProjectDetail',
        component: Folio,
    },
    {
        path: '/Project',
        redirect: '/projects',
    },
    {
        path: '/work',
        redirect: '/projects',
    },
    {
        path: '/publications',
        name: 'Publications',
        component: Folio,
    },
    {
        path: '/publications/:id',
        name: 'PublicationDetail',
        component: Folio,
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
        path: '/education',
        name: 'Education',
        component: Folio,
    },
    {
        path: '/ai',
        redirect: '/projects',
    },
    {
        path: '/engineering',
        redirect: '/skills',
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
