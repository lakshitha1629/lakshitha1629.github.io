<template>
    <div class="folio" :class="{ 'is-ready': ready }">
        <a class="folio-skip" href="#about">Skip to content</a>
        <div class="folio-grain" aria-hidden="true"></div>

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
                        :href="'#' + item.id"
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

            <ProfileCard :project="activeProject" @close="caseId = null" @talk="go('contact')" />

            <main id="main" class="folio-main">
                <section id="home" class="folio-cover">
                    <p class="hero-kicker reveal d1"><i class="hero-kicker-dot"></i> Full-Stack Engineer · Tech Lead · Problem Solver</p>

                    <h1 class="hero-title reveal d2">
                        I’m building
                        <em class="mark">software &amp; systems</em>
                        people remember
                    </h1>

                    <p class="hero-desc reveal d2">{{ profile.headline }} Passionate about solving real-world problems with technology.</p>

                    <div class="hero-stats reveal d3">
                        <template v-for="(stat, index) in profile.stats" :key="stat.label">
                            <div class="hero-stat">
                                <i class="bx hero-stat-icon" :class="stat.icon"></i>
                                <div class="hero-stat-text">
                                    <strong>{{ stat.value }}</strong>
                                    <span>{{ stat.label }}</span>
                                </div>
                            </div>
                            <span v-if="index < profile.stats.length - 1" class="hero-stat-sep" aria-hidden="true"></span>
                        </template>
                    </div>

                    <div class="hero-visual reveal d4" aria-hidden="true">
                        <svg class="hero-ribbon" viewBox="0 0 520 200" fill="none">
                            <path d="M8 142C72 28 148 176 236 78c70-78 118 86 196 18 52-46 62-8 78 22" />
                        </svg>
                        <div class="hero-visual-card">
                            <img :src="profile.avatar" alt="" />
                            <span>Let’s build something great!</span>
                        </div>
                    </div>

                    <div class="hero-techbar reveal d4">
                        <span class="hero-techbar-label">Tech I work with</span>
                        <div class="hero-techbar-pills">
                            <div class="hero-techbar-track">
                                <span v-for="(tech, index) in heroTechLoop" :key="index">{{ tech }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="hero-foot reveal d5">
                        <p class="hero-scroll"><i class="bx bx-mouse"></i> Scroll to explore</p>
                        <p class="hero-quote-mini">“Technology is more powerful when it brings people together.”</p>
                    </div>
                </section>

                <section id="about" class="folio-section">
                    <p class="folio-kicker">About</p>
                    <h2>Who I am, and how I work.</h2>
                    <p class="folio-lead">{{ profile.headline }} Based in {{ profile.location }}.</p>
                    <div class="folio-tabs" role="tablist" aria-label="About">
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
                    <p class="folio-about-copy">{{ profile.about[aboutTab] }}</p>
                    <div class="folio-chips">
                        <span v-for="item in profile.about.identity" :key="item">{{ item }}</span>
                    </div>
                    <div class="folio-services">
                        <article v-for="service in profile.services" :key="service.title">
                            <h3>{{ service.title }}</h3>
                            <p>{{ service.description }}</p>
                        </article>
                    </div>
                </section>

                <section id="experience" class="folio-section">
                    <p class="folio-kicker" data-rise>Education & Experience</p>
                    <h2 data-rise>Where the work got real.</h2>
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
                    <h2>Things I’ve built.</h2>
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
                        <button
                            v-for="project in visibleShowcase"
                            :key="project.id"
                            class="work-card"
                            type="button"
                            :class="{ 'is-active': caseId === project.id }"
                            @click="openProject(project.id)"
                        >
                            <div class="work-card-media">
                                <img :src="project.image" :alt="project.title" />
                            </div>
                            <div class="work-card-body">
                                <small>{{ project.overline }}</small>
                                <h3>{{ project.title }}</h3>
                                <p>{{ project.solution }}</p>
                                <span class="work-card-cta">View case study <i class="bx bx-right-arrow-alt"></i></span>
                            </div>
                        </button>
                    </div>
                    <p v-if="github" class="work-more">
                        <a :href="profile.github.profile" target="_blank" rel="noopener">@{{ profile.github.username }}</a>
                        · {{ github.publicRepos }} public repositories on GitHub
                        <i class="bx bx-up-arrow-alt"></i>
                    </p>
                </section>

                <section id="skills" class="folio-section">
                    <p class="folio-kicker">How I work</p>
                    <h2>Tools that have actually shown up in the work.</h2>
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
                    <h2>Education, competitions, community.</h2>
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
                    <h2>{{ profile.contact.heading }}</h2>
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
                    <div class="folio-legal">
                        <span>All rights reserved</span>
                        <span>© {{ year }} {{ profile.name }}</span>
                    </div>
                </section>
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
import emailjs, { init } from 'emailjs-com';
import ProfileCard from '@/components/folio/ProfileCard.vue';

init('user_zdO7SqNAzUeW1bl8KtMhn');

const SECTION_ROUTES = {
    AboutMe: 'home',
    About: 'about',
    Experience: 'experience',
    Project: 'work',
    Skills: 'skills',
    Education: 'education',
    Contact: 'contact',
    Ai: 'work',
    Devops: 'skills',
};

const ROUTE_BY_SECTION = {
    home: '/home',
    about: '/about',
    experience: '/experience',
    work: '/Project',
    skills: '/skills',
    education: '/education',
    contact: '/contact',
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
            ready: false,
            isLight: false,
            activeId: 'home',
            aboutTab: 'who',
            projectFilter: 'All',
            caseId: null,
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
                { id: 'skills', label: 'Skills', icon: 'bx-code-alt' },
                { id: 'education', label: 'Education', icon: 'bx-book' },
                { id: 'contact', label: 'Contact', icon: 'bx-envelope' },
            ],
            heroTech: ['C# / .NET', 'Angular', 'React', 'Python', 'AI / ML', 'Oracle PL/SQL', 'Fintech', 'System Design'],
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
        showcaseFilters() {
            const categories = new Set(this.showcaseProjects.map((p) => p.category));
            return ['All', ...categories];
        },
        visibleShowcase() {
            return this.showcaseProjects.filter((p) => this.projectFilter === 'All' || p.category === this.projectFilter);
        },
        activeProject() {
            return this.caseId ? projects.find((p) => p.id === this.caseId) : null;
        },
    },
    watch: {
        '$route.name'() {
            this.scrollFromRoute(true);
        },
    },
    mounted() {
        document.title = profile.seoTitle;
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this.isLight = localStorage.getItem('folio-theme') === 'light';
        document.documentElement.classList.toggle('theme-light', this.isLight);
        this.bindSpy();
        this.bindRise();
        this.bindTimeline();
        this.scrollFromRoute(false);
        this.loadGithub();
        window.addEventListener('keydown', this.onKey);
        this.loaderTimer = setTimeout(() => {
            this.ready = true;
            this.$nextTick(() => {
                this.scrollFromRoute(false);
                this.updateTimeline();
            });
        }, reduce ? 0 : 640);
    },
    beforeUnmount() {
        clearTimeout(this.loaderTimer);
        cancelAnimationFrame(this.timelineRaf);
        this.observers.forEach((obs) => obs.disconnect());
        window.removeEventListener('keydown', this.onKey);
        window.removeEventListener('scroll', this.onTimelineScroll);
        window.removeEventListener('resize', this.onTimelineScroll);
    },
    methods: {
        toggleTheme() {
            this.isLight = !this.isLight;
            document.documentElement.classList.toggle('theme-light', this.isLight);
            localStorage.setItem('folio-theme', this.isLight ? 'light' : 'dark');
        },
        go(id) {
            this.activeId = id;
            this.spyLock = true;
            this.scrollToSection(id, true);
            const path = ROUTE_BY_SECTION[id];
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
            const ids = ['home', 'about', 'experience', 'work', 'skills', 'education', 'contact'];
            const obs = new IntersectionObserver(
                (entries) => {
                    if (this.spyLock) return;
                    const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                    if (!visible) return;
                    const id = visible.target.id;
                    if (id && id !== this.activeId) {
                        this.activeId = id;
                        const path = ROUTE_BY_SECTION[id];
                        if (path && this.$route.path !== path) this.$router.replace(path).catch(() => {});
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
        openProject(id) {
            this.caseId = id;
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
        onKey(e) {
            if (e.key === 'Escape') this.caseId = null;
        },
        async loadGithub() {
            this.github = { publicRepos: profile.github.fallbackPublicRepos };
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
