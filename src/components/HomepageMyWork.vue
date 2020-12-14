<template>
    <div
        v-if="isReady"
        v-bind:class="$style.container"
    >
        <div v-bind:class="$style.myWorkText">
            <h2>Some of My Work</h2>
            <p>
                I stay pretty active when it comes to extra-curricular projects. Whether that
                means contributing to an open source project, working on my own passion
                project, or building a website/web app for a freelance client.
            </p>
        </div>
        <h3 v-bind:class="$style.header">Most Recent Client Work</h3>
        <div v-bind:class="$style.topRowProjectCards">
            <template v-for="project in determineProjectCardsToDisplay(0, 2)">
                <ProjectCard
                    v-bind:key="project.title"
                    v-bind:project="project"
                />
            </template>
        </div>
        <h3 v-bind:class="$style.header">Full Time Work</h3>
        <div v-bind:class="$style.fullWidthProjectCards">
            <template v-for="project in determineProjectCardsToDisplay(2)">
                <ProjectCard
                    v-bind:key="project.title"
                    v-bind:project="project"
                    v-bind:image="project.homepageImage"
                />
            </template>
        </div>
        <h3 v-bind:class="$style.header">Coming Soon</h3>
        <p>Github highlights and my Shopify App!</p>
    </div>
</template>

<script>
    export default {
        components: {
            ProjectCard: () => import('~/components/ProjectCard'),
        },

        data: () => ({
            isReady: false,
        }),

        async created () {
            const { default: projects } = await import('~/data/projects');

            this.projects = projects;
            this.isReady = true;
        },

        methods: {
            /**
             * Determines what projects we want to display.
             *
             * @param   {Number}  startIndex  The beginning index of the array.
             * @param   {Number}  endIndex    The optional ending index of the array.
             *
             * @return  {Array}              The array of projects.
             */
            determineProjectCardsToDisplay (startIndex, endIndex) {
                return this.projects.slice(startIndex, endIndex);
            }
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

    .header {
        font-size: 1.35rem;
        font-weight: 900;
    }

    .topRowProjectCards {
        display: flex;
    }

    .topRowProjectCards,
    .fullWidthProjectCards {
        margin-top: 3rem;
        margin-bottom: 1rem;
    }

    .topRowProjectCards div:nth-of-type(1) {
        margin-right: 1rem;
    }

    .topRowProjectCards div:nth-of-type(2) {
        margin-left: 1rem;
    }
</style>