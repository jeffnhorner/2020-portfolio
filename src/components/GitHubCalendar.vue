<template>
    <div v-show="isReady">
        <div id="githubCalendar" v-bind:class="[
            'gitHubContainer',
            {
                ['gitHubContainerAnimation'] : componentIsVisible,
            },
        ]" />
    </div>
</template>

<script>
    export default {
        data: () => ({
            isReady: false,
            componentIsVisible: false,
            isElementVisible: null,
        }),

        async created() {
            const [
                { default: GitHubCalendar },
                { isElementVisible },
            ] = await Promise.all([
                import('github-calendar'),
                import('~/utilities/isElementVisible'),
            ]);

            this.isElementVisible = isElementVisible;

            await this.addGithubCalendarStylesheet();

            GitHubCalendar("#githubCalendar", "jeffnhorner", {
                responsive: true,
                tooltips: true,
            });

            this.isReady = true;
        },

        mounted () {
            window.addEventListener('scroll', this.checkComponentVisibility);
        },

        beforeDestroy () {
            window.removeEventListener('scroll', this.checkComponentVisibility);
        },

        methods: {
            async addGithubCalendarStylesheet() {
                const link = document.createElement('link');

                link.setAttribute('rel', 'stylesheet');
                link.setAttribute('href', 'https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css');

                document.head.appendChild(link);
            },

            async checkComponentVisibility () {
                this.componentIsVisible = this.isElementVisible(this.$el, 100, -100);
            },
        }
    }
</script>

<style>
    /* NOTE: In order to override the GitHubCalendar library styles, we cannot use CSS Modules. */

    .gitHubContainer {
        opacity: 0;
        transition: opacity .5s ease-in-out;
        width: 100%;
        max-width: 60rem;
        margin: 0 auto;
    }

    .gitHubContainerAnimation {
        opacity: 1;
    }

    #githubCalendar .Link--muted,
    #githubCalendar .width-full > .float-right {
        display: none;
    }
</style>