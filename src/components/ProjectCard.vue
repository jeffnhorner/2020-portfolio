<template>
    <div
        v-bind:class="[
            $style.container,
            {
                [$style.containerAnimation] : componentIsVisible,
                [$style.shadowAnimation] : isHovering,
            },
        ]"
        v-on:mouseover="isHovering = true"
        v-on:mouseleave="isHovering = false"
    >
        <g-link
            v-bind:to="'/projects/' + project.id"
            v-bind:class="[
                $style.imageWrapper,
                {
                    [$style.fullWidthImage] : isFullWidth,
                },
            ]"
        >
            <g-image
                v-bind:class="[
                    $style.image,
                    {
                        [$style.paddingTop] : project.title.includes('CPAP'),
                    },
                ]"
                v-bind:src="imageSource"
            />
        </g-link>
        <p v-bind:class="$style.title">{{ project.title }}</p>
        <p v-bind:class="$style.description">{{ project.description }}</p>
        <VBtn
            v-bind:to="'/projects/' + project.id"
            color="#f5f5f5"
            depressed
        >
            {{ project.callToActionText || 'View Project'}}
            <AppIcon
                v-bind:class="[
                    $style.icon,
                    {
                        [$style.iconHover] : isHovering,
                    },
                ]"
                v-bind:name="['fa', 'long-arrow-alt-right']"
                v-bind:color="'#262626'"
            />
        </VBtn>
    </div>
</template>

<script>
    export default {
        components: {
            AppIcon: () => import('~/components/AppIcon'),
        },

        props: {
            project: {
                type: Object,
                required: true,
            },
            image: {
                type: String,
                default: '',
            },
            isFullWidth: {
                type: Boolean,
                default: false,
            },
        },

        data: () => ({
            isHovering: false,
            componentIsVisible: false,
        }),

        computed: {
            imageSource () {
                // This is required to fix a bug asssociated with dynamic g-image src prop binding.
                // see https://github.com/gridsome/gridsome/issues/292#issuecomment-583692119
                return require(`!!assets-loader!@images/${this.image || this.project.image}`);
            },
        },

        mounted () {
            window.addEventListener('scroll', this.checkComponentVisibility);
        },

        beforeDestroy () {
            window.removeEventListener('scroll', this.checkComponentVisibility);
        },

        methods: {
            async checkComponentVisibility () {
                const { isElementVisible } = await import('~/utilities/isElementVisible');

                this.componentIsVisible = isElementVisible(this.$el, 100, -100);
            }
        }
    }
</script>

<style module>
    .container {
        width: 100%;
        margin-bottom: 6rem;
        opacity: 0;
        transition: opacity .5s ease-in-out;
    }

    .containerAnimation {
        opacity: 1;
    }

    .fullWidthImage {
        display: block;
        overflow: hidden;
        height: 100%;
        max-height: 33rem;
    }

    .imageWrapper {
        border: .025rem solid #eee;
    }

    .image {
        border-radius: 5px;
        display: block;
        max-width: 100%;
    }

    .title {
        font-weight: 700;
        font-size: 1.35rem;
        margin-top: 2rem;
    }

    .description {
        line-height: 2rem;
        font-weight: 300;
        margin: 1rem 0 1.35rem;
    }

    .icon {
        font-size: 1.15rem;
        margin-left: .5rem;
        transition: transform .3s ease;
        transform: translateX(0);
    }

    .iconHover {
        transform: translateX(.4rem);
    }

    .paddingTop {
        padding-top: 1rem;
    }
</style>