<template>
    <div v-bind:class="$style.container">
        <template
            v-for="(icon, index) in socialMediaIcons"
        >
            <g-link
                v-bind:key="icon.url"
                v-bind:to="icon.url"
                v-bind:class="$style.socialMediaIconLink"
                v-on:mouseover="isHoverIndex = index"
                v-on:mouseleave="isHoverIndex = null"
            >
                <AppIcon
                    v-bind:name="icon.fontawesomeName"
                    v-bind:color="index === isHoverIndex ? icon.color : defaultIconColor"
                    v-bind:class="$style.socialMediaIcon"
                />
            </g-link>
        </template>
    </div>
</template>

<script>
    export default {
        components: {
            AppIcon: () => import('~/components/AppIcon'),
        },

        data: () => ({
            isHoverIndex: null,
        }),

        created () {
            this.socialMediaIcons = [
                {
                    color: '#C13584',
                    fontawesomeName: ['fab', 'instagram'],
                    url: 'https://instagram.com/jeffnhorner',
                },
                {
                    color: '#0077b5',
                    fontawesomeName: ['fab', 'linkedin'],
                    url: 'https://www.linkedin.com/in/jeff-horner/',
                },
                {
                    color: '#FF0000',
                    fontawesomeName: ['fab', 'youtube'],
                    url: 'https://www.youtube.com/channel/UCQA2BYYROrN1WvvUqaB13zA/',
                },
                {
                    color: '#262626',
                    fontawesomeName: ['fab', 'github'],
                    url: 'https://github.com/jeffnhorner',
                },
                {
                    color: '#1DA1F2',
                    fontawesomeName: ['fab', 'twitter'],
                    url: 'https://twitter.com/jeffnhorner',
                },
            ];

            this.defaultIconColor = '#d4d4d4';
        }
    }
</script>

<style module>
    .container {
        display: flex;
        width: 100%;
        max-width: 30rem;
    }

    .socialMediaIconLink {
        margin-right: 1.75rem;
        position: relative;
    }

    .socialMediaIcon {
        font-size: 1.5rem;
    }
</style>