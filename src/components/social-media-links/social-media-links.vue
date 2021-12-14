<template>
    <div class="social-network">
        <div class="social-media social-media-orientation social-media-placement">
            <ul v-scrollanimation class="social-media-list">
                <li>
                    <div @click="openSite('https://medium.com/@lakshitha1629')" class="a-link">
                        <div class="text-size-25px"><i class="bx bxl-medium"></i></div>
                        <span>Medium</span>
                    </div>
                </li>
                <!-- <li>
                    <div @click="openSite('https://www.youtube.com/')" class="a-link">
                        <div class="text-size-25px"><i class="bx bxl-youtube"></i></div>
                        <span>Youtube</span>
                    </div>
                </li> -->
                <li>
                    <div @click="openSite('https://www.linkedin.com/in/lakshitha1629/')" class="a-link">
                        <div class="text-size-25px"><i class="bx bxl-linkedin"></i></div>
                        <span>LinkedIn</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://github.com/lakshitha1629')" class="a-link">
                        <div class="text-size-25px"><i class="bx bxl-github"></i></div>
                        <span>GitHub</span>
                    </div>
                </li>
                <li>
                    <div @click="openSite('https://twitter.com/lakshitha1629')" class="a-link">
                        <div class="text-size-25px"><i class="bx bxl-twitter"></i></div>
                        <span>Twitter</span>
                    </div>
                </li>
            </ul>
        </div>
        <div v-scrollanimation class="email-media social-media-orientation social-media-placement">
            <div class="email-media-link">
                <div class="mail-link"><a href="mailto:lakshitha1629@gmail.com">lakshitha1629@gmail.com</a></div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity';
export default {
    name: 'SocialMediaLinks',
    setup() {
        return {
            show: ref(true),
            openSite(site) {
                window.open(site, '_blank');
            },
        };
    },
};
</script>
