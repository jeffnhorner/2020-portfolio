<template>
    <div v-bind:class="$style.homepageContainer">
        <Navigation />
        <slot/>
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
        },
    }
</script>

<style module>
    body {
        background: #fff;
        background-color: #fff;
        color: #262626;
        font-family: 'Muli',-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
        margin:0;
        padding:0;
        line-height: 1.5;
    }

    .homepageContainer {
        max-width: 90rem;
        margin: 0 auto;
        padding: 0 4rem;
    }
</style>
