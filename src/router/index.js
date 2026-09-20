import { createRouter, createWebHistory } from 'vue-router';
import { projects } from '../data/projects';
import { publications } from '../data/publications';
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
        path: '/about/',
        name: 'About',
        component: Folio,
    },
    {
        path: '/experience/',
        name: 'Experience',
        component: Folio,
    },
    {
        path: '/projects/',
        name: 'Project',
        component: Folio,
    },
    {
        path: `/projects/:id(${projects.map(p => p.id).join('|')})/`,
        name: 'ProjectDetail',
        component: Folio,
    },
    {
        path: '/Project',
        redirect: '/projects/',
    },
    {
        path: '/work',
        redirect: '/projects/',
    },
    {
        path: '/publications/',
        name: 'Publications',
        component: Folio,
    },
    {
        path: `/publications/:id(${publications.map(p => p.id).join('|')})/`,
        name: 'PublicationDetail',
        component: Folio,
    },
    {
        path: '/contact/',
        name: 'Contact',
        component: Folio,
    },
    {
        path: '/skills/',
        name: 'Skills',
        component: Folio,
    },
    {
        path: '/education/',
        name: 'Education',
        component: Folio,
    },
    {
        path: '/ai',
        redirect: '/projects/',
    },
    {
        path: '/engineering',
        redirect: '/skills/',
    },
    {
        path: '/future',
        redirect: '/about/',
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

router.beforeEach(to => {
    if (to.name !== 'PageNotFound' && to.path !== '/' && !to.path.endsWith('/')) return { path: to.path + '/', query: to.query, hash: to.hash, replace: true };
});

export default router;
