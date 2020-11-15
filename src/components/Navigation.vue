<template>
    <header v-bind:class="$style.header">
        <g-link
            v-bind:class="$style.logo"
            to="/"
        >
            jeff<span v-bind:class="$style.primaryGreen">n</span>horner
        </g-link>
        <div v-bind:class="$style.bottomHeaderWrapper">
            <SocialMediaIcons v-bind:class="$style.socialMediaIcons" />
            <hr v-bind:class="$style.designLine" />
        </div>
    </header>
</template>

<script>
    export default {
        components: {
            SocialMediaIcons: () => import('~/components/SocialMediaIcons'),
        },
    }
</script>

<style module>
    .header {
        margin-top: 8rem;
    }

    .primaryGreen {
        color: #99D5B6;
    }

    .logo {
        color: #262626;
        font-weight: 700;
        letter-spacing: .025rem;
        text-decoration: none;
    }

    .bottomHeaderWrapper {
        align-items: center;
        display: flex;
        margin-top: 6rem;
        justify-content: space-between;
    }

    .designLine {
        height: 2px;
        background: #808080;
        border: none;
        max-width: 20rem;
        margin-right: 0;
        width: 100%;
    }
</style>