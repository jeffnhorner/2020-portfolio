<template>
    <div v-bind:class="$style.container">
            <h2 v-bind:class="$style.title">{{ isFullTimeProject ? 'Details' : 'The Need' }}</h2>
            <p
                v-if="isFullTimeProject"
                v-bind:class="$style.description"
                v-html="projectDetails.mainDescription"
            />
            <p
                v-else-if="!isFullTimeProject"
                v-bind:class="$style.description"
            >
                {{ projectDetails.theNeed }}
            </p>
            <h2 v-bind:class="[$style.title, $style.techTitle]">
                {{ isFullTimeProject ? 'My Notable Contributions' : 'Choosing the Tech Stack' }}
            </h2>
            <div v-bind:class="$style.techStackWrapper">
                <div v-bind:class="$style.techStackChips">
                    <template
                        v-for="skill in techStackItems"
                    >
                        <VChip
                            v-bind:key="skill"
                            v-bind:class="$style.skill"
                            label
                            color="#f7f7f7"
                        >
                            {{ skill }}
                        </VChip>
                    </template>
                </div>
                <div v-bind:class="[
                        {
                            [$style.notableWorkContainer] : isFullTimeProject,
                            [$style.techStackTextContainer] : !isFullTimeProject,
                        }
                    ]"
                >
                    <p
                        v-if="isFullTimeProject"
                        v-bind:class="$style.description"
                        v-html="projectDetails.notableWork"
                    />
                    <p
                        v-else
                        v-bind:class="$style.description"
                    >
                        {{ projectDetails.theStack }}
                    </p>
                </div>
            </div>
        <div v-bind:class="$style.imageContainer">
            <template v-for="image in projectDetails.projectImages">
                <g-image
                    v-bind:src="require(`!!assets-loader!@images/${image}`)"
                    v-bind:class="$style.image"
                />
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            projectDetails: {
                type: Object,
                required: true,
            },
        },

        computed: {
            techStackItems () {
                return this.projectDetails.highlights.find(({ title }) => title.includes('Tech'))?.content;
            },

            isFullTimeProject () {
                return Boolean(this.projectDetails.mainDescription);
            }
        }
    }
</script>

<style module>
    .container {
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 1.5rem;
        margin: 5rem 0 2rem;
    }

    .description {
        line-height: 2.25rem;
        font-weight: 300;
        margin: 0;
        width: 100%;
    }

    .techStackWrapper {
        align-items: flex-start;
        display: flex;
        flex-direction: column-reverse;
    }

    .techStackChips {
        margin-top: 3rem;
        margin-left: -.375rem;
        width: 100%;
    }

    .techStackTextContainer,
    .notableWorkContainer {
        width: 100%;
    }

    .techStackTextContainer .description,
    .notableWorkContainer .description {
        float: right;
        max-width: 100%;
    }

    .skill {
        margin: .375rem;
    }

    .imageContainer {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 4rem;
    }

    .image {
        box-shadow: 0px 0px 10px #bbb;
        border-radius: 5px;
        margin: 1rem 0;
        width: 100%;
    }

    a,
    a:visited {
        color: #262626;
        font-weight: 900;
    }

    @media only screen and (min-width: 1200px) {
        .title {
            font-size: 2.25rem;
        }

        .description {
            max-width: 75%;
        }

        .techTitle {
            text-align: right;
        }

        .techStackChips {
            max-width: 40%;
            margin-top: 0;
            margin-left: 0;
            margin-right: 1.5rem;
        }

        .techStackTextContainer,
        .notableWorkContainer {
            text-align: right;
        }

        .techStackWrapper {
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
        }

        .imageContainer {
            flex-direction: row;
            margin: 8rem 0 0;
        }

        .image {
            max-width: 48.5%;
        }
    }
</style>