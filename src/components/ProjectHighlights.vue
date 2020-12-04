<template>
<div v-bind:class="$style.container">
    <div v-bind:class="$style.wrapper">
        <div
            v-for="highlight in projectHighlights.highlights"
            v-bind:key="highlight.type"
        >
            <p v-bind:class="$style.highlightTitle">{{ highlight.title }}</p>
            <div
                v-if="Array.isArray(highlight.content)"
                v-bind:class="$style.highlightContent"
            >
                <template v-for="(attribute, index) in highlight.content">
                    <p
                        v-bind:key="index"
                        v-bind:class="$style.highlightContentAttribute"
                    >
                        {{ attribute }}
                    </p>
                </template>
            </div>
            <g-link
                v-else-if="highlight.isLink"
                v-bind:to="highlight.content"
                v-bind:class="$style.link"
            >
                <span v-if="highlight.content.includes('github')">
                    Repository
                </span>
                <span v-else>Link</span>
            </g-link>
            <p
                v-else-if="highlight.isPrivate"
                v-bind:class="$style.highlightContent"
            >
                Available upon request (private repo).
            </p>
            <p
                v-else
                v-bind:class="$style.highlightContent"
            >
                {{ highlight.content }}
            </p>
        </div>
    </div>
    <g-image
        v-bind:src="imageSource"
        v-bind:class="$style.image"
    />
</div>
</template>

<script>
    export default {
        props: {
            projectHighlights: {
                type: Object,
                required: true,
            },
        },

        computed: {
            imageSource () {
                // This is required to fix a bug asssociated with dynamic g-image src prop binding.
                // see https://github.com/gridsome/gridsome/issues/292#issuecomment-583692119
                return require(`!!assets-loader!@images/${this.projectHighlights.image}`);
            },
        },
    }
</script>

<style module>
    .container {
        display: flex;
        justify-content: space-between;
        padding: 5rem 0;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    .highlightContent {
        line-height: 2.25rem;
        font-weight: 300;
        margin: 0;
        max-width: 75%;
        width: 100%;
    }

    .wrapper > div {
        margin-bottom: 2rem;
    }

    .wrapper > div:last-of-type {
        margin-bottom: 0;
    }

    .highlightTitle {
        font-weight: 600;
        margin-bottom: .5rem;
    }

    .link,
    .link:visited,
    .link:active {
        color: #262626;
        display: block;
        font-weight: 900;
        width: auto;
    }

    .image {
        border-radius: 5px;
        box-shadow: 0px 0px 10px #bbb;
        height: 100%;
        max-width: 70%;
        max-height: 37rem;
        width: 100%;
    }
</style>