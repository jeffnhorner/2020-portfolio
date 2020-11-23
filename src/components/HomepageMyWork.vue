<template>
    <div v-bind:class="$style.container">
        <div v-bind:class="$style.myWorkText">
            <h2>Some of My Work</h2>
            <p>
                I stay pretty active when it comes to extra-curricular projects. Whether that
                means contributing to an open source project, working on my own passion
                project, or building a website/web app for a freelance client.
            </p>
        </div>
        <RecentWork v-bind:class="$style.recentWork" />
    </div>
</template>

<script>
    export default {
        components: {
            RecentWork: () => import('~/components/RecentWork'),
        },
    }
</script>

<style module>
    .container {
        display: flex;
        flex-direction: column;
        margin-top: 12rem;
    }

    .myWorkText {
        width: 100%;
        max-width: 45%;
    }

    .myWorkText > h2 {
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 2rem;
    }

    .myWorkText > p {
        line-height: 2.25rem;
        font-weight: 300;
        margin-bottom: 0;
    }

    .recentWork {
        margin-top: 5rem;
    }
</style>