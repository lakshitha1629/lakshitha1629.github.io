<template>
    <div class="folio" :class="{ 'is-ready': ready }">
        <a class="folio-skip" href="#main">Skip to content</a>
        <div class="folio-grain" aria-hidden="true"></div>
        <div class="folio-glow" aria-hidden="true"></div>
        <div ref="terrain" class="folio-terrain" aria-hidden="true">
            <img src="/media/hero-terrain.png" alt="" />
        </div>

        <div class="folio-loader" :class="{ 'is-done': ready }" role="status" aria-live="polite">
            <div class="folio-loader-inner">
                <img :src="profile.avatar" alt="" />
                <p>{{ profile.name }}</p>
            </div>
        </div>

        <div class="folio-shell">
            <nav class="folio-nav-rail reveal" aria-label="Sections">
                <div class="folio-nav-rail-links">
                    <a
                        v-for="item in navItems"
                        :key="item.id"
                        :href="sectionHref(item.id)"
                        :class="{ 'is-active': activeId === item.id }"
                        :aria-label="item.label"
                        @click.prevent="go(item.id)"
                    >
                        <i class="bx" :class="item.icon"></i>
                        <span class="rail-tip">{{ item.label }}</span>
                    </a>
                </div>
                <button class="folio-nav-rail-theme" type="button" aria-label="Toggle light / dark theme" @click="toggleTheme">
                    <i class="bx" :class="isLight ? 'bx-moon' : 'bx-sun'"></i>
                    <span class="rail-tip">{{ isLight ? 'Dark mode' : 'Light mode' }}</span>
                </button>
            </nav>

            <ProfileCard :name-tag="profileNameTag" @talk="go('contact')" />

            <main id="main" class="folio-main">
                <article v-if="routeProject" class="folio-section project-article">
                    <router-link class="project-back" to="/projects/"><i class="bx bx-left-arrow-alt"></i> Selected work</router-link>
                    <p class="folio-kicker">{{ routeProject.overline }}</p>
                    <h1>{{ routeProject.title }}</h1>
                    <p class="folio-lead">
                        A project by Lakshitha Perera, Associate Tech Lead, Full-Stack Engineer and AI Developer based in Sri
                        Lanka.
                    </p>
                    <img
                        v-if="routeProject.image"
                        class="project-article-media"
                        :src="routeProject.image"
                        :alt="routeProject.title + ' by Lakshitha Perera'"
                    />
                    <h2>The problem</h2>
                    <p>{{ routeProject.problem }}</p>
                    <h2>The work</h2>
                    <p>{{ routeProject.solution }}</p>
                    <p v-if="routeProject.role"><strong>Role.</strong> {{ routeProject.role }}</p>
                    <p v-if="routeProject.architecture"><strong>Architecture.</strong> {{ routeProject.architecture }}</p>
                    <div v-if="routeProject.technologies.length" class="folio-chips">
                        <span v-for="tech in routeProject.technologies" :key="tech">{{ tech }}</span>
                    </div>
                    <div class="project-article-links">
                        <a v-for="link in routeProject.links" :key="link.url" :href="link.url" target="_blank" rel="noopener">{{
                            link.label
                        }}</a>
                    </div>
                </article>

                <article v-else-if="routePublication" class="folio-section project-article">
                    <router-link class="project-back" to="/publications/"><i class="bx bx-left-arrow-alt"></i> Publications</router-link>
                    <p class="folio-kicker">{{ routePublication.type }} · {{ routePublication.year }}</p>
                    <h1>{{ routePublication.title }}</h1>
                    <p class="folio-lead">Author: {{ routePublication.authors.join(', ') }}</p>
                    <p>{{ routePublication.description }}</p>
                    <p v-if="routePublication.venue"><strong>Venue.</strong> {{ routePublication.venue }}</p>
                    <p>
                        <a v-if="routePublication.url" :href="routePublication.url" target="_blank" rel="noopener">External reference</a>
                        <router-link v-if="routePublication.relatedProject" :to="'/projects/' + routePublication.relatedProject + '/'">
                            Related project
                        </router-link>
                    </p>
                </article>

                <article v-else-if="$route.name === 'ProjectDetail' || $route.name === 'PublicationDetail'" class="folio-section project-article">
                    <h1>This page isn’t here.</h1>
                    <p class="folio-lead">That project or publication is not in Lakshitha Perera’s portfolio.</p>
                    <router-link class="project-back" to="/">Back home</router-link>
                </article>

                <template v-else>
                <section id="home" class="folio-cover">
                    <p class="hero-kicker reveal d1"><i class="hero-kicker-dot"></i> FULL-STACK ENGINEER · TECH LEAD · AI DEVELOPER</p>
                    <p class="hero-lede reveal d1">
                        Building scalable software, intelligent systems, and digital products.
                    </p>

                    <p class="hero-title">
                        <span class="hero-title-line reveal d1">I turn complex ideas into</span>
                        <em class="mark reveal d2">software that works.</em>
                    </p>

                    <p class="hero-desc reveal d3">Associate Tech Lead with experience building full-stack solutions across fintech, SaaS, streaming, and AI. Focused on creating reliable, scalable products that solve real-world problems.</p>

                    <div class="hero-stats reveal d4">
                        <template v-for="(stat, index) in profile.stats" :key="stat.label">
                            <div class="hero-stat">
                                <span class="hero-stat-icon-wrap" aria-hidden="true">
                                    <i class="bx" :class="stat.icon"></i>
                                </span>
                                <div class="hero-stat-text">
                                    <strong>{{ stat.value }}</strong>
                                    <span>{{ stat.label }}</span>
                                </div>
                            </div>
                            <span v-if="index < profile.stats.length - 1" class="hero-stat-sep" aria-hidden="true"></span>
                        </template>
                    </div>

                    <div class="hero-visual" aria-hidden="true">
                        <div class="hero-orbit reveal d4">
                            <svg class="hero-orbit-ring" viewBox="0 0 220 220" fill="none">
                                <circle cx="110" cy="110" r="96" />
                            </svg>
                            <p class="hero-orbit-copy">
                                <span>Ideas</span>
                                <span>→ Software</span>
                                <span>→ Impact</span>
                            </p>
                        </div>
                        <div class="hero-visual-card reveal d5">
                            <img :src="profile.avatar" alt="" />
                            <span>Let's build<br />something great!</span>
                            <span class="hero-visual-spark"></span>
                        </div>
                    </div>

                    <div class="hero-bottom">
                        <div class="hero-techbar reveal d5">
                            <span class="hero-techbar-label">Tech I work with</span>
                            <div class="hero-techbar-pills">
                                <div class="hero-techbar-track">
                                    <span v-for="(tech, index) in heroTechLoop" :key="index">{{ tech }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="hero-foot reveal d5">
                            <button class="hero-scroll" type="button" @click="go('about')">
                                <i class="bx bx-mouse"></i> Scroll to explore
                            </button>
                            <p class="hero-quote-mini">“Technology is more powerful when it brings people together.”</p>
                        </div>
                    </div>
                </section>

                <section id="about" class="folio-section">
                    <p class="folio-kicker" data-rise>About</p>
                    <component :is="sectionTag('About')" data-rise>{{
                        sectionHeading('About', 'About Lakshitha Perera', 'Who I am, and how I work.')
                    }}</component>
                    <p class="folio-lead" data-rise>{{ profile.headline }} Based in {{ profile.location }}.</p>
                    <div class="folio-tabs" role="tablist" aria-label="About" data-rise>
                        <button
                            v-for="tab in aboutTabs"
                            :key="tab.id"
                            type="button"
                            :class="{ 'is-on': aboutTab === tab.id }"
                            @click="aboutTab = tab.id"
                        >
                            {{ tab.label }}
                        </button>
                    </div>
                    <p class="folio-about-copy" data-rise>{{ profile.about[aboutTab] }}</p>
                    <div class="folio-chips" data-rise>
                        <span v-for="item in profile.about.identity" :key="item">{{ item }}</span>
                    </div>
                    <div class="folio-services" data-rise>
                        <article v-for="service in profile.services" :key="service.title">
                            <h3>{{ service.title }}</h3>
                            <p>{{ service.description }}</p>
                        </article>
                    </div>
                </section>

                <section id="experience" class="folio-section">
                    <p class="folio-kicker" data-rise>Education & Experience</p>
                    <component :is="sectionTag('Experience')" data-rise>{{
                        sectionHeading('Experience', 'Experience — Lakshitha Perera', 'Where the work got real.')
                    }}</component>
                    <div class="folio-timeline" ref="timeline">
                        <ol>
                            <li
                                v-for="(role, index) in experience"
                                :key="role.id"
                                class="folio-timeline-item"
                                :class="{ 'is-now': role.current }"
                                data-rise
                                :style="{ '--d': index }"
                            >
                                <span class="folio-when">
                                    {{ role.period }}
                                    <b v-if="role.current">Now</b>
                                </span>
                                <span class="folio-timeline-dot" aria-hidden="true"></span>
                                <article class="folio-timeline-card">
                                    <h3>{{ role.role }}</h3>
                                    <p class="company">
                                        <a v-if="role.url" :href="role.url" target="_blank" rel="noopener">{{ role.company }}</a>
                                        <span v-else>{{ role.company }}</span>
                                        <span v-if="role.location"> · {{ role.location }}</span>
                                    </p>
                                    <p>{{ role.summary }}</p>
                                    <ul class="folio-timeline-points">
                                        <li v-for="item in role.responsibilities" :key="item">{{ item }}</li>
                                    </ul>
                                    <div v-if="role.projects.length" class="role-projects">
                                        <p v-for="project in role.projects" :key="project.name">
                                            <strong>{{ project.name }}.</strong> {{ project.detail }}
                                            <em> {{ project.technologies.join(', ') }}</em>
                                        </p>
                                    </div>
                                    <div class="folio-chips">
                                        <span v-for="tech in role.technologies" :key="tech">{{ tech }}</span>
                                    </div>
                                </article>
                            </li>
                        </ol>
                    </div>
                </section>

                <section id="work" class="folio-section">
                    <p class="folio-kicker">Selected work</p>
                    <component :is="sectionTag('Project')">{{
                        sectionHeading('Project', 'Projects by Lakshitha Perera', 'Things I’ve built.')
                    }}</component>
                    <div class="folio-filters" role="tablist" aria-label="Project filters">
                        <button
                            v-for="filter in showcaseFilters"
                            :key="filter"
                            type="button"
                            :class="{ 'is-on': projectFilter === filter }"
                            @click="projectFilter = filter"
                        >
                            {{ filter }}
                        </button>
                    </div>
                    <div class="work-grid">
                        <router-link
                            v-for="project in visibleShowcase"
                            :key="project.id"
                            class="work-card"
                            :to="'/projects/' + project.id + '/'"
                        >
                            <div class="work-card-media">
                                <img loading="lazy" decoding="async" :src="project.image" :alt="project.title + ' by Lakshitha Perera'" />
                            </div>
                            <div class="work-card-body">
                                <small>{{ project.overline }}</small>
                                <h3>{{ project.title }}</h3>
                                <p>{{ project.solution }}</p>
                                <span class="work-card-cta">View case study <i class="bx bx-right-arrow-alt"></i></span>
                            </div>
                        </router-link>
                    </div>
                    <details v-if="otherProjects.length">
                        <summary>More projects</summary>
                        <p v-for="project in otherProjects" :key="project.id"><router-link :to="'/projects/' + project.id + '/'">{{ project.title }}</router-link></p>
                    </details>
                    <p v-if="github" class="work-more">
                        <a :href="profile.github.profile" target="_blank" rel="noopener">@{{ profile.github.username }}</a>
                        · {{ github.publicRepos }} public repositories on GitHub
                        <i class="bx bx-up-arrow-alt"></i>
                    </p>
                </section>

                <section id="publications" class="folio-section">
                    <p class="folio-kicker">Publications & Technical Writing</p>
                    <component :is="sectionTag('Publications')">{{
                        sectionHeading(
                            'Publications',
                            'Publications & Technical Writing',
                            'Research, books and writing.'
                        )
                    }}</component>
                    <p class="folio-lead">
                        Research publication, a programming book, and ongoing technical writing by Lakshitha Perera.
                    </p>
                    <div class="edu-grid">
                        <router-link
                            v-for="item in publications"
                            :key="item.id"
                            class="edu-card pub-card"
                            :to="'/publications/' + item.id + '/'"
                        >
                            <span class="folio-when">{{ item.year }} · {{ item.type }}</span>
                            <h3>{{ item.title }}</h3>
                            <p v-if="item.authors && item.authors.length">Author: {{ item.authors.join(', ') }}</p>
                            <p>{{ item.description }}</p>
                            <p v-if="item.venue">{{ item.venue }}</p>
                        </router-link>
                    </div>
                </section>

                <section id="skills" class="folio-section">
                    <p class="folio-kicker">How I work</p>
                    <component :is="sectionTag('Skills')">{{
                        sectionHeading('Skills', 'Skills — Lakshitha Perera', 'Tools that have actually shown up in the work.')
                    }}</component>
                    <div class="skill-bands">
                        <div v-for="band in skillMountains" :key="band.id" class="skill-band">
                            <h3>{{ band.label }}</h3>
                            <ul>
                                <li v-for="item in band.items" :key="item.name">
                                    <span>{{ item.name }}</span>
                                    <em>{{ item.level }}</em>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="education" class="folio-section">
                    <p class="folio-kicker">Knowledge campus</p>
                    <component :is="sectionTag('Education')">{{
                        sectionHeading('Education', 'Education — Lakshitha Perera', 'Education, competitions, community.')
                    }}</component>
                    <div class="edu-grid">
                        <article v-for="entry in education" :key="entry.id" class="edu-card">
                            <span class="folio-when">{{ entry.period }}</span>
                            <h3>{{ entry.program }}</h3>
                            <p>{{ entry.level }} · {{ entry.institution }}</p>
                            <p>{{ entry.detail }}</p>
                            <div class="folio-chips" style="margin-top: 12px">
                                <span v-for="tag in entry.tags" :key="tag">{{ tag }}</span>
                            </div>
                        </article>
                    </div>
                    <h3 style="margin: 32px 0 12px">Competitions</h3>
                    <div class="award-grid">
                        <article v-for="award in awards" :key="award.id" class="award-card">
                            <h3>{{ award.title }}</h3>
                            <p>{{ award.detail }}</p>
                            <span class="folio-when">{{ award.meta }}</span>
                        </article>
                    </div>
                    <h3 style="margin: 32px 0 12px">Leadership & community</h3>
                    <div class="award-grid">
                        <article v-for="item in activities" :key="item.id" class="award-card">
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.detail }}</p>
                            <span class="folio-when">{{ item.meta }}</span>
                        </article>
                    </div>
                </section>

                <section id="contact" class="folio-section">
                    <p class="folio-kicker">Contact</p>
                    <component :is="sectionTag('Contact')">{{
                        sectionHeading('Contact', 'Contact Lakshitha Perera', profile.contact.heading)
                    }}</component>
                    <p class="folio-lead">{{ profile.contact.body }} {{ profile.contact.invite }}</p>
                    <div class="folio-row">
                        <button class="folio-btn folio-btn-lime" type="button" @click="focusForm">Send Message</button>
                        <a class="folio-kicker" :href="'mailto:' + profile.email">{{ profile.email }}</a>
                    </div>
                    <form class="folio-form" @submit.prevent="send">
                        <div class="folio-form-row">
                            <label>Name<input ref="nameInput" v-model="form.name" type="text" name="name" required /></label>
                            <label>Email<input v-model="form.email" type="email" name="email" required /></label>
                        </div>
                        <label>Subject<input v-model="form.subject" type="text" name="subject" required /></label>
                        <label>Message<textarea v-model="form.message" name="message" rows="6" required></textarea></label>
                        <p v-if="formStatus" class="form-status" :class="formStatus.type">{{ formStatus.text }}</p>
                        <button class="folio-btn folio-btn-lime" type="submit" :disabled="sending">
                            {{ sending ? 'Sending…' : 'Send message' }}
                        </button>
                    </form>
                    <div class="contact-channels">
                        <a v-for="item in profile.socials" :key="item.id" :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
                    </div>
                    <nav class="folio-sitelinks" aria-label="Portfolio pages">
                        <router-link to="/">Home</router-link>
                        <router-link to="/about/">About</router-link>
                        <router-link to="/experience/">Experience</router-link>
                        <router-link to="/projects/">Projects</router-link>
                        <router-link to="/skills/">Skills</router-link>
                        <router-link to="/publications/">Publications</router-link>
                        <router-link to="/education/">Education</router-link>
                        <router-link to="/contact/">Contact</router-link>
                    </nav>
                    <footer class="folio-legal">
                        <span>All rights reserved</span>
                        <span>© {{ year }} {{ profile.name }}</span>
                    </footer>
                </section>
                </template>
            </main>
        </div>
    </div>
</template>

<script>
import profile from '@/data/profile';
import experience from '@/data/experience';
import { education, awards, activities } from '@/data/education';
import skillMountains from '@/data/skills';
import { projects, showcaseOrder } from '@/data/projects';
import publications from '@/data/publications';
import { resolveSeo } from '@/data/seo';
import { applySeo } from '@/seo/apply';
import emailjs, { init } from 'emailjs-com';
import ProfileCard from '@/components/folio/ProfileCard.vue';

init('user_zdO7SqNAzUeW1bl8KtMhn');

const SECTION_ROUTES = {
    Home: 'home',
    About: 'about',
    Experience: 'experience',
    Project: 'work',
    Publications: 'publications',
    Skills: 'skills',
    Education: 'education',
    Contact: 'contact',
};

const ROUTE_BY_SECTION = {
    home: '/',
    about: '/about/',
    experience: '/experience/',
    work: '/projects/',
    publications: '/publications/',
    skills: '/skills/',
    education: '/education/',
    contact: '/contact/',
};

export default {
    name: 'Folio',
    components: { ProfileCard },
    data() {
        return {
            profile,
            experience,
            education,
            awards,
            activities,
            skillMountains,
            publications,
            ready: false,
            isLight: false,
            activeId: 'home',
            aboutTab: 'who',
            projectFilter: 'All',
            github: null,
            sending: false,
            formStatus: null,
            form: { name: '', email: '', subject: '', message: '' },
            spyLock: false,
            observers: [],
            loaderTimer: null,
            timelineRaf: 0,
            navItems: [
                { id: 'home', label: 'Home', icon: 'bx-home-alt' },
                { id: 'about', label: 'About', icon: 'bx-user' },
                { id: 'experience', label: 'Experience', icon: 'bx-briefcase' },
                { id: 'work', label: 'Work', icon: 'bx-grid-alt' },
                { id: 'publications', label: 'Writing', icon: 'bx-book-open' },
                { id: 'skills', label: 'Skills', icon: 'bx-code-alt' },
                { id: 'education', label: 'Education', icon: 'bx-book' },
                { id: 'contact', label: 'Contact', icon: 'bx-envelope' },
            ],
            heroTech: ['C# / .NET', 'Angular', 'React', 'Python', 'AI / ML', 'Oracle PL/SQL', 'Fintech', 'System Design'],
            terrainRaf: 0,
        };
    },
    computed: {
        year() {
            return new Date().getFullYear();
        },
        heroTechLoop() {
            return [...this.heroTech, ...this.heroTech];
        },
        aboutTabs() {
            return [
                { id: 'who', label: 'Who I am' },
                { id: 'what', label: 'What I do' },
                { id: 'think', label: 'How I think' },
                { id: 'exploring', label: 'Exploring' },
            ];
        },
        // Only real, photographed work makes it into the showcase — no placeholder cards.
        showcaseProjects() {
            return showcaseOrder.map((id) => projects.find((p) => p.id === id)).filter(Boolean);
        },
        otherProjects() { return projects.filter(p => !showcaseOrder.includes(p.id)); },
        showcaseFilters() {
            const categories = new Set(this.showcaseProjects.map((p) => p.category));
            return ['All', ...categories];
        },
        visibleShowcase() {
            return this.showcaseProjects.filter((p) => this.projectFilter === 'All' || p.category === this.projectFilter);
        },
        routeProject() {
            if (this.$route.name !== 'ProjectDetail') return null;
            return projects.find((item) => item.id === this.$route.params.id) || null;
        },
        routePublication() {
            if (this.$route.name !== 'PublicationDetail') return null;
            return publications.find((item) => item.id === this.$route.params.id) || null;
        },
        profileNameTag() {
            return this.$route.name === 'Home' ? 'h1' : 'p';
        },
        isDetailRoute() {
            return this.$route.name === 'ProjectDetail' || this.$route.name === 'PublicationDetail';
        },
    },
    watch: {
        $route() {
            this.applyPageSeo();
            this.scrollFromRoute(true);
        },
        isDetailRoute(now, was) {
            if (was && !now) {
                this.$nextTick(() => {
                    this.observers.forEach((obs) => obs.disconnect());
                    this.observers = [];
                    this.bindSpy();
                    this.bindRise();
                });
            }
        },
    },
    mounted() {
        this.applyPageSeo();
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.isLight = localStorage.getItem('folio-theme') === 'light';
        document.documentElement.classList.toggle('theme-light', this.isLight);
        this.bindSpy();
        this.bindRise();
        this.bindTimeline();
        this.bindTerrain();
        this.scrollFromRoute(false);
        this.loadGithub();
        this.loaderTimer = setTimeout(() => {
            this.ready = true;
            this.$nextTick(() => {
                this.scrollFromRoute(false);
                this.updateTimeline();
                document.dispatchEvent(new Event('folio-rendered'));
            });
        }, reduce ? 0 : 640);
    },
    beforeUnmount() {
        clearTimeout(this.loaderTimer);
        cancelAnimationFrame(this.timelineRaf);
        cancelAnimationFrame(this.terrainRaf);
        this.observers.forEach((obs) => obs.disconnect());
        window.removeEventListener('scroll', this.onTimelineScroll);
        window.removeEventListener('resize', this.onTimelineScroll);
        window.removeEventListener('scroll', this.onTerrainScroll);
    },
    methods: {
        sectionHref(id) { return ROUTE_BY_SECTION[id] || '/'; },
        toggleTheme() {
            this.isLight = !this.isLight;
            document.documentElement.classList.toggle('theme-light', this.isLight);
            localStorage.setItem('folio-theme', this.isLight ? 'light' : 'dark');
        },
        applyPageSeo() {
            applySeo(resolveSeo(this.$route));
        },
        sectionTag(name) {
            return this.$route.name === name ? 'h1' : 'h2';
        },
        sectionHeading(name, pageText, defaultText) {
            return this.$route.name === name ? pageText : defaultText;
        },
        go(id) {
            this.activeId = id;
            this.spyLock = true;
            const path = ROUTE_BY_SECTION[id];
            if (this.isDetailRoute && path) {
                this.$router.push(path);
                setTimeout(() => {
                    this.spyLock = false;
                }, 700);
                return;
            }
            this.scrollToSection(id, true);
            if (path && this.$route.path !== path) this.$router.replace(path);
            setTimeout(() => {
                this.spyLock = false;
            }, 700);
            if (id === 'contact') this.$nextTick(this.focusForm);
        },
        scrollToSection(id, smooth) {
            const behavior = smooth ? 'smooth' : 'auto';
            if (id === 'home') {
                window.scrollTo({ top: 0, behavior });
                return;
            }
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior, block: 'start' });
        },
        scrollFromRoute(smooth) {
            if (this.$route.name === 'ProjectDetail') {
                this.activeId = 'work';
                window.scrollTo({ top: 0, behavior: 'auto' });
                return;
            }
            if (this.$route.name === 'PublicationDetail') {
                this.activeId = 'publications';
                window.scrollTo({ top: 0, behavior: 'auto' });
                return;
            }
            const id = SECTION_ROUTES[this.$route.name] || 'home';
            this.activeId = id;
            this.$nextTick(() => this.scrollToSection(id, smooth));
        },
        bindRise() {
            const nodes = this.$el.querySelectorAll('[data-rise]');
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reduce) {
                nodes.forEach((el) => el.classList.add('is-in'));
                return;
            }
            const obs = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;
                        entry.target.classList.add('is-in');
                        obs.unobserve(entry.target);
                    });
                },
                { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
            );
            nodes.forEach((el) => obs.observe(el));
            this.observers.push(obs);
        },
        onTimelineScroll() {
            if (this.timelineRaf) return;
            this.timelineRaf = requestAnimationFrame(() => {
                this.timelineRaf = 0;
                this.updateTimeline();
            });
        },
        updateTimeline() {
            const el = this.$refs.timeline;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const pivot = window.innerHeight * 0.42;
            const progress = Math.min(1, Math.max(0, (pivot - rect.top) / Math.max(rect.height, 1)));
            el.style.setProperty('--timeline-progress', progress.toFixed(4));
        },
        bindTerrain() {
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reduce) return;
            this.onTerrainScroll();
            window.addEventListener('scroll', this.onTerrainScroll, { passive: true });
        },
        onTerrainScroll() {
            if (this.terrainRaf) return;
            this.terrainRaf = requestAnimationFrame(() => {
                this.terrainRaf = 0;
                const el = this.$refs.terrain;
                if (!el) return;
                const y = Math.min(window.scrollY, 520);
                el.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
                el.style.opacity = String(Math.max(0, 1 - y / 680));
            });
        },
        bindTimeline() {
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (reduce) {
                this.$nextTick(() => {
                    if (this.$refs.timeline) this.$refs.timeline.style.setProperty('--timeline-progress', '1');
                });
                return;
            }
            this.$nextTick(this.updateTimeline);
            window.addEventListener('scroll', this.onTimelineScroll, { passive: true });
            window.addEventListener('resize', this.onTimelineScroll);
        },
        bindSpy() {
            if (window.__PRERENDER__) return;
            const ids = ['home', 'about', 'experience', 'work', 'publications', 'skills', 'education', 'contact'];
            const obs = new IntersectionObserver(
                (entries) => {
                    if (this.spyLock) return;
                    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                    if (!visible) return;
                    const id = visible.target.id;
                    if (id && id !== this.activeId) {
                        this.activeId = id;
                        // Scrolling updates the rail; navigation alone changes the URL.
                    }
                },
                { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.25, 0.5] }
            );
            ids.forEach((id) => {
                const el = document.getElementById(id);
                if (el) obs.observe(el);
            });
            this.observers.push(obs);
        },
        focusForm() {
            const input = this.$refs.nameInput;
            if (input) input.focus();
        },
        async send() {
            this.sending = true;
            this.formStatus = null;
            try {
                await emailjs.send('service_88wvqn9', 'template_nulphu2', this.form);
                this.form = { name: '', email: '', subject: '', message: '' };
                this.formStatus = { type: 'ok', text: 'Message sent. I’ll read it when I’m next online.' };
            } catch (e) {
                this.formStatus = {
                    type: 'err',
                    text: 'The message did not send. You can email lakshitha1629@gmail.com directly.',
                };
            }
            this.sending = false;
        },
        async loadGithub() {
            this.github = { publicRepos: profile.github.fallbackPublicRepos };
            if (window.__PRERENDER__) return;
            try {
                const res = await fetch('https://api.github.com/users/lakshitha1629');
                if (!res.ok) return;
                const user = await res.json();
                this.github.publicRepos = user.public_repos || profile.github.fallbackPublicRepos;
            } catch (e) {
                /* keep fallback */
            }
        },
    },
};
</script>
