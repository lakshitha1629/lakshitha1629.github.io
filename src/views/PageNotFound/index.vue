<template>
    <div class="page-not-found">
        <p class="kicker">404</p>
        <h1>This page isn’t here.</h1>
        <p>The path you’re looking for doesn’t exist in Lakshitha’s portfolio.</p>
        <router-link class="folio-btn folio-btn-lime" to="/">Back home</router-link>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound',
    mounted() {
        document.title = 'Page not found | Lakshitha Perera';
        const robots = document.head.querySelector('meta[name="robots"]');
        if (robots) robots.setAttribute('content', 'noindex,follow');
    },
};
</script>

<style scoped>
.page-not-found {
    min-height: 100vh;
    display: grid;
    place-content: center;
    text-align: center;
    gap: 0.8rem;
    padding: 2rem;
    background: #0b0b0b;
    color: #f4f4f4;
}
.page-not-found h1 {
    margin: 0;
    font-family: 'Instrument Sans', Inter, sans-serif;
    font-weight: 700;
    letter-spacing: -0.04em;
}
.page-not-found p {
    color: #8f8f8f;
}
.kicker {
    color: #c8f431;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-size: 12px;
}
.folio-btn {
    justify-self: center;
    margin-top: 0.8rem;
}
</style>
