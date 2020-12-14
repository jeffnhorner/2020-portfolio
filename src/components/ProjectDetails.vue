<template>
    <div v-bind:class="$style.container">
        <template v-if="projectDetails.theSpaDescription">
            <h2 v-bind:class="$style.title">The SPA Era</h2>
            <p v-bind:class="$style.description" v-html="projectDetails.theSpaDescription" />
            <h2 v-bind:class="[$style.title, $style.techTitle]">My Notable Contributions</h2>
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
                <div v-bind:class="$style.notableWorkContainer">
                    <p v-bind:class="$style.description" v-html="projectDetails.notableWork" />
                </div>
            </div>
        </template>
        <template v-else>
            <h2 v-bind:class="$style.title">The Need</h2>
            <p v-bind:class="$style.description">{{ projectDetails.theNeed }}</p>
            <h2 v-bind:class="[$style.title, $style.techTitle]">Choosing the Tech Stack</h2>
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
                <div v-bind:class="$style.techStackTextContainer">
                    <p v-bind:class="$style.description">{{ projectDetails.theStack }}</p>
                </div>
            </div>
        </template>
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
        }
    }
</script>

<style module>
    .container {
        display: flex;
        flex-direction: column;
    }
    .title {
        font-size: 2.25rem;
        margin: 5rem 0 2rem;
    }

    .techTitle {
        text-align: right;
    }

    .description {
        line-height: 2.25rem;
        font-weight: 300;
        margin: 0;
        max-width: 75%;
        width: 100%;
    }

    .techStackWrapper {
        align-items: flex-start;
        display: flex;
        justify-content: space-between;
    }

    .techStackChips {
        max-width: 40%;
        width: 100%;
    }

    .techStackTextContainer,
    .notableWorkContainer {
        text-align: right;
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
        justify-content: space-between;
        margin-top: 8rem;
    }

    .image {
        box-shadow: 0px 0px 10px #bbb;
        border-radius: 5px;
        max-width: 48.5%;
        width: 100%;
    }

    a,
    a:visited {
        color: #262626;
        font-weight: 900;
    }
</style>