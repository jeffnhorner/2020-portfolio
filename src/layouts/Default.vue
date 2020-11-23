<template>
    <div>
        <transition name="fade" appear>
            <!-- wrapper element required for <transition> element to work properly -->
            <main class="layoutContainer">
                <Navigation />
                <slot/>
            </main>
        </transition>
        <Footer />
    </div>
</template>

<static-query>
    query {
        metadata {
            siteName
        }
    }
</static-query>

<script>
    export default {
        components: {
            Navigation: () => import('~/components/Navigation'),
            Footer: () => import('~/components/Footer'),
        },
    }
</script>

<style>
    body {
        background: #fff;
        background-color: #fff;
        color: #262626;
        font-family: 'Muli',-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        margin:0;
        padding:0;
        line-height: 1.5;
    }

    .layoutContainer {
        max-width: 90rem;
        margin: 0 auto;
        padding: 0 4rem;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 1s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
</style>
