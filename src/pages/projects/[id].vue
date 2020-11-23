<template>
    <Layout>
        {{ $route.params.id }}
    </Layout>
</template>

<script>
    export default {
        async created () {
            const { default: projectData } = await import('~/data/projects');

            console.log(projectData);
        }
    }
</script>

<style module>

</style>