<template>
    <div
        v-if="isReady"
        v-bind:class="$style.container"
    >
        <div v-bind:class="$style.myWorkText">
            <h2>Some of My Work</h2>
            <p>
                I stay pretty active when it comes to extra-curricular projects. Whether that
                means contributing to an open source project, working on a passion
                project, or building a website/web app for a freelance client.
            </p>
        </div>
        <h3 v-bind:class="$style.header">Full Time Work</h3>
        <div v-bind:class="$style.fullWidthProjectCards">
            <div v-for="project in determineProjectCardsToDisplay(projects.length - 1)" v-bind:key="project.title">
                <ProjectCard
                    v-bind:project="project"
                    v-bind:image="isTabletOrMobile ? project.bannerImage : project.homepageImage"
                    isFullWidth
                />
            </div>
        </div>
        <h3 v-bind:class="$style.header">Volunteer Work</h3>
        <div v-bind:class="$style.fullWidthProjectCards">
            <div v-for="project in determineProjectCardsToDisplay(4)" v-bind:key="project.title">
                <ProjectCard
                    v-bind:project="project"
                    v-bind:image="isTabletOrMobile ? project.bannerImage : project.homepageImage"
                    isFullWidth
                />
            </div>
        </div>
        <h3 v-bind:class="$style.header">Most Recent Contract Work</h3>
        <div v-bind:class="$style.topRowProjectCards">
            <div v-for="project in determineProjectCardsToDisplay(0, 2)" v-bind:key="project.title">
                <ProjectCard
                    v-bind:project="project"
                />
            </div>
        </div>
        <h3 v-bind:class="$style.header">Previous Full Time Work</h3>
        <div v-bind:class="$style.fullWidthProjectCards">
            <div v-for="project in determineProjectCardsToDisplay(2, 4)" v-bind:key="project.title">
                <ProjectCard
                    v-bind:project="project"
                    v-bind:image="isTabletOrMobile ? project.bannerImage : project.homepageImage"
                    isFullWidth
                />
            </div>
        </div>
        <h3 v-bind:class="$style.header">Github Activity</h3>
        <div v-bind:class="$style.externalProjectCards">
            <GitHubCalendar />
        </div>
        <h3 v-bind:class="$style.header">Coming Soon</h3>
        <div v-bind:class="$style.externalProjectCards">
            <p>Details on the Shopify App I'm building.</p>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            ProjectCard: () => import('~/components/ProjectCard'),
            GitHubCalendar: () => import('~/components/GitHubCalendar')
        },

        data: () => ({
            isReady: false,
        }),

        async created () {
            const { default: projects } = await import('~/data/projects');

            this.projects = projects;
            this.isReady = true;

            // Non-reactive property to determine on page load if we're on a tablet or mobile.
            this.isTabletOrMobile = window.innerWidth <= 768;
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
        margin-top: 8rem;
    }

    .myWorkText,
    .externalProjectCards > p {
        width: 100%;
    }

    .myWorkText {
        margin-bottom: 5rem;
    }

    .myWorkText > h2 {
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 2rem;
    }

    .myWorkText > p,
    .externalProjectCards > p {
        line-height: 2.25rem;
        font-weight: 300;
        margin-bottom: 0;
    }

    .header {
        font-size: 1.35rem;
        font-weight: 900;
    }

    .topRowProjectCards {
        display: flex;
        flex-direction: column;
    }

    .topRowProjectCards,
    .fullWidthProjectCards,
    .externalProjectCards {
        margin-top: 1.5rem;
    }

    .externalProjectCards {
        margin-bottom: 8rem;
    }


    @media only screen and (min-width: 768px) {
        .container {
            margin-top: 12rem;
        }

        .myWorkText {
            max-width: 45%;
        }

        .topRowProjectCards {
            flex-direction: row;
        }

        .topRowProjectCards,
        .fullWidthProjectCards {
            margin-top: 1.5rem;
            margin-bottom: 1rem;
        }

        .externalProjectCards {
            margin-top: 3rem;
        }

        .topRowProjectCards div:nth-of-type(1) {
            margin-right: 1rem;
        }

        .topRowProjectCards div:nth-of-type(2) {
            margin-left: 1rem;
        }
    }
</style>