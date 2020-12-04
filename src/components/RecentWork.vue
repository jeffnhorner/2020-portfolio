<template>
    <div v-if="isReady">
        <h3 v-bind:class="$style.header">Most Recent Client Work</h3>
        <div v-bind:class="$style.topRowProjectCards">
            <template v-for="project in determineProjectCardsToDisplay(0, 2)">
                <ProjectCard
                    v-bind:key="project.title"
                    v-bind:project="project"
                />
            </template>
        </div>
        <div v-bind:class="$style.fullWidthProjectCards">
            <template v-for="project in determineProjectCardsToDisplay(2)">
                <ProjectCard
                    v-bind:key="project.title"
                    v-bind:project="project"
                    v-bind:image="project.homepageImage"
                />
            </template>
        </div>
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
    .header {
        font-size: 1.35rem;
        font-weight: 900;
    }

    .topRowProjectCards {
        margin-top: 3rem;
        display: flex;
    }

    .topRowProjectCards div:nth-of-type(1) {
        margin-right: 1rem;
    }

    .topRowProjectCards div:nth-of-type(2) {
        margin-left: 1rem;
    }
</style>