<template>
    <div class="folio-hero" :class="{ 'is-in': inView, 'is-project': !!project }">
        <aside class="folio-card" aria-label="Profile">
            <transition name="folio-card-fade" mode="out-in">
                <div v-if="!project" key="default" class="folio-card-default">
                    <div class="folio-card-media">
                        <img :src="profile.photo" :alt="profile.photoAlt" />
                    </div>
                    <div class="folio-card-top">
                        <nav class="folio-card-nav" aria-label="Sections">
                            <a
                                v-for="(item, index) in navItems"
                                :key="item.id"
                                :href="'#' + item.id"
                                :class="{ 'is-active': active === item.id }"
                                :style="{ '--d': index }"
                                :aria-label="item.label"
                                @click.prevent="$emit('go', item.id)"
                            >
                                <i class="bx" :class="item.icon"></i>
                            </a>
                        </nav>
                        <div class="folio-card-socials">
                            <a
                                v-for="(item, index) in profile.socials"
                                :key="item.id"
                                :href="item.url"
                                :aria-label="item.title"
                                :style="{ '--d': index }"
                                target="_blank"
                                rel="noopener"
                            >
                                <i class="bx" :class="item.icon"></i>
                            </a>
                        </div>
                    </div>
                    <p class="folio-avail">
                        <span>Open to conversations</span>
                        <i></i>
                    </p>
                    <div class="folio-card-copy">
                        <h1>
                            Hey, I’m&nbsp;<span>{{ typed }}</span><span class="folio-caret" aria-hidden="true"></span>
                        </h1>
                        <p>{{ profile.headline }} Based in {{ profile.location }}.</p>
                        <div class="folio-card-rule" aria-hidden="true"></div>
                        <div class="folio-card-actions">
                            <button class="folio-btn folio-btn-round" type="button" aria-label="Explore" @click="$emit('explore')">
                                <i class="bx bx-right-arrow-alt"></i>
                            </button>
                            <button class="folio-btn folio-btn-lime" type="button" @click="$emit('talk')">Let’s talk</button>
                            <a class="folio-btn folio-btn-ghost" :href="profile.resume.local" download>
                                <i class="bx bx-download"></i> Download CV
                            </a>
                        </div>
                    </div>
                </div>
                <div v-else key="project" class="folio-card-project">
                    <div class="project-media">
                        <transition name="project-fade" mode="out-in">
                            <img :key="activeImage" :src="activeImage" :alt="project.title" />
                        </transition>
                        <template v-if="projectImages.length > 1">
                            <button class="project-slider-nav prev" type="button" aria-label="Previous screenshot" @click="prevSlide">
                                <i class="bx bx-chevron-left"></i>
                            </button>
                            <button class="project-slider-nav next" type="button" aria-label="Next screenshot" @click="nextSlide">
                                <i class="bx bx-chevron-right"></i>
                            </button>
                            <div class="project-slider-dots">
                                <button
                                    v-for="(img, index) in projectImages"
                                    :key="img"
                                    type="button"
                                    class="project-slider-dot"
                                    :class="{ 'is-on': index === slideIndex }"
                                    :aria-label="'Show screenshot ' + (index + 1)"
                                    @click="slideIndex = index"
                                ></button>
                            </div>
                        </template>
                    </div>
                    <div class="project-panel">
                        <button class="folio-card-close" type="button" aria-label="Back to profile" @click="$emit('close')">
                            <i class="bx bx-x"></i>
                        </button>
                        <p class="project-tag">{{ project.overline }}</p>
                        <h2 class="project-title">{{ project.title }}</h2>
                        <p class="project-copy">{{ project.solution }}</p>
                        <div class="project-chips">
                            <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
                        </div>
                        <div class="project-actions">
                            <a v-if="project.demo" class="folio-btn folio-btn-lime" :href="project.demo" target="_blank" rel="noopener">Live demo</a>
                            <a v-if="project.github" class="folio-btn folio-btn-ghost" :href="project.github" target="_blank" rel="noopener">
                                <i class="bx bxl-github"></i> Code
                            </a>
                            <button class="folio-btn folio-btn-ghost" type="button" @click="$emit('close')">Back to profile</button>
                        </div>
                    </div>
                </div>
            </transition>
        </aside>
    </div>
</template>

<script>
import profile from '@/data/profile';

export default {
    name: 'ProfileCard',
    props: {
        project: { type: Object, default: null },
        active: { type: String, default: 'home' },
    },
    emits: ['explore', 'talk', 'close', 'go'],
    data() {
        return {
            profile,
            typed: '',
            inView: false,
            timer: null,
            observer: null,
            slideIndex: 0,
            navItems: [
                { id: 'home', label: 'Home', icon: 'bx-home-alt' },
                { id: 'about', label: 'About', icon: 'bx-user' },
                { id: 'experience', label: 'Experience', icon: 'bx-briefcase' },
                { id: 'work', label: 'Work', icon: 'bx-grid-alt' },
                { id: 'skills', label: 'Skills', icon: 'bx-code-alt' },
                { id: 'education', label: 'Education', icon: 'bx-book' },
                { id: 'contact', label: 'Contact', icon: 'bx-envelope' },
            ],
        };
    },
    computed: {
        projectImages() {
            if (!this.project) return [];
            if (this.project.images && this.project.images.length) return this.project.images;
            return this.project.image ? [this.project.image] : [];
        },
        activeImage() {
            return this.projectImages[this.slideIndex] || this.project.image;
        },
    },
    watch: {
        project() {
            this.slideIndex = 0;
        },
    },
    mounted() {
        const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduce) {
            this.typed = profile.shortName;
            this.inView = true;
            return;
        }
        this.observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    this.inView = true;
                    this.tick();
                    this.observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        this.observer.observe(this.$el);
    },
    beforeUnmount() {
        clearTimeout(this.timer);
        if (this.observer) this.observer.disconnect();
    },
    methods: {
        tick() {
            const full = profile.shortName;
            if (this.typed.length >= full.length) {
                this.typed = full;
                return;
            }
            this.typed = full.slice(0, this.typed.length + 1);
            this.timer = setTimeout(this.tick, 72);
        },
        nextSlide() {
            if (!this.projectImages.length) return;
            this.slideIndex = (this.slideIndex + 1) % this.projectImages.length;
        },
        prevSlide() {
            if (!this.projectImages.length) return;
            this.slideIndex = (this.slideIndex - 1 + this.projectImages.length) % this.projectImages.length;
        },
    },
};
</script>
