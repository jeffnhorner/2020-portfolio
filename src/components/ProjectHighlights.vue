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
                <template v-for="(attribute, index) in hasLongAttributeList && !isShowingFullAttributeList ? truncatedAttributeList : fullAttributeList">
                    <p
                        v-bind:key="index"
                        v-bind:class="$style.highlightContentAttribute"
                    >
                        {{ attribute }}
                    </p>
                </template>
                <span
                    v-if="hasLongAttributeList"
                    v-on:click="toggleFullAttributeList"
                    v-bind:class="$style.showMoreText"
                >
                    Show {{ hasLongAttributeList && !isShowingFullAttributeList ? 'More' : 'Less' }}
                </span>
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

        data: () => ({
            isShowingFullAttributeList: false,
            hasLongAttributeList: false,
            fullAttributeList: [],
        }),

        created () {
            this.fullAttributeList = this.projectHighlights?.highlights.find(({ content }) => Array.isArray(content))?.content || [];
            this.hasLongAttributeList = this.fullAttributeList.length > 8;
        },

        computed: {
            imageSource () {
                // This is required to fix a bug asssociated with dynamic g-image src prop binding.
                // see https://github.com/gridsome/gridsome/issues/292#issuecomment-583692119
                return require(`!!assets-loader!@images/${this.projectHighlights.image}`);
            },

            truncatedAttributeList () {
                return (this.fullAttributeList || []).slice(0, 6);
            }
        },

        methods: {
            toggleFullAttributeList () {
                this.isShowingFullAttributeList = !this.isShowingFullAttributeList;
            }
        }
    }
</script>

<style module>
    .container {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        padding: 3rem 0;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .highlightContent {
        line-height: 2.25rem;
        font-weight: 300;
        margin: 0;
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

    .showMoreText {
        cursor: pointer;
        text-decoration: underline;
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
        max-height: 37rem;
        margin-bottom: 4rem;
        width: 100%;
    }

    @media only screen and (min-width: 768px) {
        .container {
            flex-direction: row;
            justify-content: center;
            padding: 5rem 0;
        }

        .wrapper {
            flex-wrap: nowrap;
            flex-direction: column;
        }

        .wrapper > div {
            width: initial;
        }

        .highlightContent {
            max-width: 75%;
        }

        .image {
            max-width: 70%;
            margin-bottom: 0;
        }
    }
</style>