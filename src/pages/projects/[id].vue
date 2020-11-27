<template>
    <Layout v-if="isReady">
        <div v-if="pageData">
            <h1 v-bind:class="$style.title">{{ pageData.title }}</h1>
            <p v-bind:class="$style.description">{{ pageData.longDescription }}</p>
            <ProjectHighlights
                v-bind:project-highlights="pageData"
                v-bind:class="$style.highlights"
            />
            <ProjectDetails
                v-bind:project-details="pageData"
            />
            <div v-bind:class="$style.lessons">
                <h2 v-bind:class="$style.subTitle">Problems and Lessons Learned</h2>
                <p v-bind:class="$style.description">{{ pageData.problemsAndLessons }}</p>
            </div>
        </div>
        <div v-else>There was no project found. Please return <g-link to="/">home</g-link></div>
    </Layout>
</template>

<script>
    export default {
        components: {
            ProjectHighlights: () => import('~/components/ProjectHighlights'),
            ProjectDetails: () => import('~/components/ProjectDetails'),
        },

        data: () => ({
            isReady: false,
        }),

        async created () {
            const { default: projectData } = await import('~/data/projects');

            this.projectData = projectData;
            this.isReady = true;
        },

        computed: {
            pageData () {
                return this.projectData.find(({ id }) => id === this.$route.params.id);
            },

            imageSource () {
                // This is required to fix a bug asssociated with dynamic g-image src prop binding.
                // see https://github.com/gridsome/gridsome/issues/292#issuecomment-583692119
                return require(`!!assets-loader!@images/${this.pageData.image}`);
            },
        },
    }
</script>

<style module>
    .title {
        font-size: 2.75rem;
        margin: 5rem 0 2rem;
    }

    .subTitle {
        font-size: 2.25rem;
        margin: 8rem 0 2rem;
    }

    .description {
        line-height: 2.25rem;
        font-weight: 300;
        margin: 0;
        max-width: 75%;
        width: 100%;
    }

    .highlights {
        margin-bottom: 4rem;
    }

    .lessons {
        text-align: center;
        margin-bottom: 8rem;
    }

    .lessons .description {
        margin: 0 auto;
    }
</style>