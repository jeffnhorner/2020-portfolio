<template>
    <Layout>
        <HomepageMasthead
            v-bind:class="[
                $style.masthead,
                {
                    [$style.mastheadFadeIn] : mastheadIsVisible,
                },
            ]"
            ref="masthead"
        />
        <HomepageMySkills
            v-bind:class="[
                $style.mySkills,
                {
                    [$style.mySkillsFadeIn] : mySkillsIsVisible,
                },
            ]"
            ref="mySkills"
        />
        <HomepageMyWork
            v-bind:class="[
                $style.myWork,
                {
                    [$style.myWorkFadeIn] : myWorkIsVisible,
                },
            ]"
            ref="myWork"
        />
    </Layout>
</template>

<script>
    export default {
        metaInfo: {
            title: 'Hello, world!'
        },

        components: {
            HomepageMasthead: () => import('~/components/HomepageMasthead'),
            HomepageMySkills: () => import('~/components/HomepageMySkills'),
            HomepageMyWork: () => import('~/components/HomepageMyWork'),
        },

        data: () => ({
            mastheadIsVisible: false,
            mySkillsIsVisible: false,
            myWorkIsVisible: false,
        }),

        mounted () {
            setTimeout(() => this.mastheadIsVisible = true, 250);

            window.addEventListener('scroll', this.checkComponentVisibility);
        },

        beforeDestroy () {
            window.removeEventListener('scroll', this.checkComponentVisibility);
        },

        methods: {
            async checkComponentVisibility () {
                const { isElementVisible } = await import('~/utilities/isElementVisible');

                // Iterate over all refs and determine if they're visible
                Object.entries(this.$refs)
                    .forEach(component => this[`${component[0]}IsVisible`] = isElementVisible(component[1].$el, 150));
            }
        },

        metaInfo: {
            title: `Jeff Horner | Developer, Designer, & Creator`,
            // Removes the '- Gridsome' from the page title
            titleTemplate: '%s'
        },
    }
</script>

<style module>
    .masthead,
    .mySkills,
    .myWork {
        width: 100%;
        opacity: 0;
        transition: opacity .5s ease-in-out;
    }

    .mastheadFadeIn,
    .mySkillsFadeIn,
    .myWorkFadeIn {
        opacity: 1;
    }

    .test {
        background: #262626;
        color: #e7e7e;
        position: absolute;
        width: 100%;
        text-align: center;
        margin: 0 auto;
    }

    .stickyBanner {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>
