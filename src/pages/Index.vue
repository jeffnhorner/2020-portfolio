<template>
    <Layout>
        <HomepageMasthead />
        <HomepageMySkills />
        <HomepageMyWork />
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
    }
</script>
