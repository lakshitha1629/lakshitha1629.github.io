<template>
    <section v-scrollanimation class="about-me mx-auto">
        <div class="about-me-inner flex flex-row items-center gap-[50px] relative">
            <div class="about-me-text">
                <div class="about-me-text-info text-right max-w-500px">
                    <div>
                        <div class="text-size-16px font-500 text-[var(--primary)] opacity-60">Machine Learning & Software Engineer</div>
                        <div class="lg:text-size-52px md:text-size-44px text-size-36px font-600 text-[var(--primary)] tracking-tight mt-10px">
                            Hi there, I’m Lakshitha
                        </div>
                        <div class="text-size-48px md:text-size-38px text-size-30px font-600 text-[var(--lightestSlate)] tracking-tight">I create apps and websites</div>
                    </div>
                    <div class="mt-30px">
                        <router-link to="/contact" class="bg-[var(--primary)] px-25px py-10px rounded-md text-[var(--background)] font-600 opacity-90 hover:opacity-100">
                            Get In Touch
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="about-me-photo z-50">
                <div class="wrapper">
                    <div class="photo" style="position: relative; overflow: hidden">
                        <div class="photo-front"></div>
                        <img
                            class="max-w-300px w-[100%] w-[300px]"
                            loading="lazy"
                            src="https://avatars.githubusercontent.com/u/39919610"
                            alt="Lakshitha Perera - Profile Picture"
                        />
                    </div>
                </div>
            </div>
            <SvgDecoration classNames="absolute md:visible invisible left-[-50px] bottom-[-40px] transform rotate-[-180deg] fill-[var(--primary)] opacity-50" :type="1" />
            <SvgDecoration classNames="absolute md:right-[-56px] md:visible invisible z-20 fill-[var(--primary)] opacity-50" :type="2" />
        </div>
        <div class="md:text-size-20px text-size-18px text-justify md:px-10px w-[100%] max-w-[770px] pt-100px md:leading-relaxed leading-relaxed relative">
            <div class="mb-30px">
                My name is Lakshitha Perera. I’m a passionate individual and a technophiles obsessed with the latest technologies. I‘ve always been a great problem solver
                and creative.
            </div>
            <div class="mb-30px">
                I prefer to find new solutions using the latest approaches and systems. I am both driven and self-motivated, and I am constantly experimenting with new
                technologies and techniques.
            </div>
            <div class="mb-30px">
                Over the past {{ yearCount() }} years, I’ve gained experience across some aspects of the application lifecycle, including frontend, backend, and dev-ops.
                It allows me to take full ownership of a project from design to implementation and deployment.
            </div>
            <SvgDecoration classNames="absolute right-[-150px] top-90 md:block hidden z-20 fill-[var(--primary)] opacity-50" :type="3" />
        </div>
    </section>
</template>
<script>
import SvgDecoration from './../SvgDecoration/SvgDecoration.vue';
export default {
    components: { SvgDecoration },
    setup() {
        return {
            yearCount: () => {
                return new Date().getFullYear() - 2019;
            },
        };
    },
};
</script>
<style lang="postcss">
.about-me {
    @apply flex flex-col items-center min-h-[100vh] max-w-[900px] visible opacity-100 z-10 px-10px lg:mt-130px;
    &.a-before-enter {
        @apply opacity-0 transform translate-y-[20px] duration-[0.3s] ease-in;
    }

    &.a-enter {
        @apply opacity-100 transform translate-y-0;
    }

    .about-me-photo {
        position: relative;

        .wrapper {
            @apply overflow-hidden rounded-lg;
        }
    }
}

@media only screen and (max-width: 856px) {
    .about-me {
        .about-me-text-info {
            @apply text-center;
        }

        .about-me-inner {
            @apply flex flex-col gap-[50px];

            .about-me-photo {
                @apply order-1 self-center;
            }
            .about-me-text {
                @apply order-2 self-center;
            }
        }
    }
}
</style>
