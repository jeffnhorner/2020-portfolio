<template>
    <div v-bind:class="$style.container">
        <h2 v-bind:class="$style.title">The Need</h2>
        <p v-bind:class="$style.description">{{ projectDetails.theNeed }}</p>
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
                <h2 v-bind:class="$style.title">Choosing the Tech Stack</h2>
                <p v-bind:class="$style.description">{{ projectDetails.theStack }}</p>
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
                return this.projectDetails.highlights.find(({ title }) => title === 'Stack')?.content;
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

    .description {
        line-height: 2.25rem;
        font-weight: 300;
        margin: 0;
        max-width: 75%;
        width: 100%;
    }

    .techStackWrapper {
        align-items: flex-end;
        display: flex;
        justify-content: space-between;
        margin-top: 3rem;
    }

    .techStackChips {
        width: 100%;
        margin-bottom: 1rem;
        max-width: 45%;
    }

    .techStackTextContainer {
        text-align: right;
    }

    .techStackTextContainer .description {
        float: right;
        max-width: 90%;
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
</style>