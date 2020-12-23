<template>
    <div>
        <transition name="fade" appear>
            <!-- wrapper element required for <transition> element to work properly -->
            <main class="layoutContainer">
                <Header />
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
            Header: () => import('~/components/Header'),
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
        padding: 0 1.5rem;
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

    @media only screen and (min-width: 768px) {
        .layoutContainer {
            padding: 0 2.5rem;
        }
    }

    @media only screen and (min-width: 1200px) {
        .layoutContainer {
            padding: 0 4rem;
        }
    }
</style>
