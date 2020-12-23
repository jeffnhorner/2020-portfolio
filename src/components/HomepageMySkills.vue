<template>
    <div v-bind:class="$style.container">
        <div v-bind:class="$style.mySkillsText">
            <h2>My Skills</h2>
            <p>
                From the beginning days of when I first got into software development up
                until now, I’ve learned and gained a solid understanding of web development
                standards, the importance of reusability/scalability
                in large enterprise applications, and how user expereince means everything.
            </p>
        </div>
        <div v-bind:class="$style.mySkillsItems">
            <template
                v-for="skill in mySkills"
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
    </div>
</template>

<script>
    export default {
        created () {
            this.mySkills = [
                'Javascript ES6+',
                'Vue',
                'Vuex',
                'Nuxt',
                'Gridsome',
                'React',
                'Apollo',
                'GraphQL',
                'Git',
                'Git Flow',
                'markup',
                'css',
                'scss',
                'sass',
                'CSS Modules',
                'Tailwinds',
                'Node',
                'PHP',
                'SQL',
                'mySql',
                'Laravel',
                'Magento',
                'Jest',
                'UI Design',
                'User Experience',
                'Webpack',
                'Google Analytics',
                'Enhanced Ecommerce GA',
                'Google Tag Manager',
            ];
        }
    }
</script>

<style module>
    .container {
        align-items: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 8rem;
    }

    .mySkillsText,
    .mySkillsItems {
        width: 100%;
    }

    .mySkillsItems {
        margin-top: 3rem;
        margin-right: .375rem;
    }

    .mySkillsText > h2 {
        font-size: 2.5rem;
        font-weight: 500;
        margin-bottom: 2rem;
    }

    .mySkillsText > p {
        line-height: 2.25rem;
        font-weight: 300;
        margin-bottom: 0;
    }

    .skill {
        margin: .375rem;
    }

    @media only screen and (min-width: 768px) {
        .container {
            flex-direction: row;
            margin-top: 12rem;
        }

        .mySkillsText,
        .mySkillsItems {
            width: 100%;
            max-width: 45%;
        }

        .mySkillsItems {
            text-align: right;
            margin-left: 0;
        }
    }
</style>