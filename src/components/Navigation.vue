<template>
    <header v-bind:class="$style.header">
        <Logo />
        <div
            v-if="isHomepage"
            v-bind:class="$style.bottomHeaderWrapper"
        >
            <SocialMediaIcons />
            <hr
                v-bind:class="$style.designLine"
            />
        </div>
    </header>
</template>

<script>
    export default {
        components: {
            Logo: () => import('~/components/Logo'),
            SocialMediaIcons: () => import('~/components/SocialMediaIcons'),
        },

        computed: {
            isHomepage () {
                return this.$route.path === '/';
            }
        }
    }
</script>

<style module>
    .header {
        margin-top: 8rem;
    }

    .bottomHeaderWrapper {
        align-items: center;
        display: flex;
        margin-top: 6rem;
        justify-content: space-between;
    }

    .designLine {
        height: .05rem;
        background: #d4d4d4;
        border: none;
        max-width: 20rem;
        margin-right: 0;
        width: 100%;
    }
</style>