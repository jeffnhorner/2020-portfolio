<template>
    <header v-bind:class="$style.header">
        <div v-bind:class='$style.topHeaderWrapper'>
            <Logo />
            <SocialMediaIcons
                v-if="!isHomepage"
                v-bind:alignment="'right'"
            />
        </div>
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
        margin-top: 4rem;
    }

    .topHeaderWrapper,
    .bottomHeaderWrapper {
        display: flex;
    }

    .topHeaderWrapper {
        justify-content: space-between;
        width: 100%;
    }

    .bottomHeaderWrapper {
        align-items: center;
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

    @media only screen and (min-width: 768px) {
        .header {
            margin-top: 8rem;
        }
    }
</style>