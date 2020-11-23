<template>
    <div v-bind:class="$style.container">
        <div v-bind:class="$style.wrapper">
            <div v-bind:class="$style.topContainer">
                <p v-bind:class="$style.title">Have an Idea? Let's Build it.</p>
                <p v-bind:class="$style.footerIntro">
                    Feel free to reach out if you’re in need of a Developer. Whether that means
                    you need a website, web app, or you’re looking to fill a full-time position.
                    I’m always open to a conversation.
                </p>
            </div>
            <a
                v-bind:class="$style.emailLink"
                href="mailto:jeffnhorner@outlook.com"
            >
                jeffnhorner@outlook.com
            </a>
            <Logo v-bind:class="$style.logo" />
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            Logo: () => import('~/components/Logo'),
        },
    }
</script>

<style module>
    .container {
        background: #fafafa;
    }

    .wrapper {
        display: flex;
        flex-direction: column;
        max-width: 90rem;
        margin: 0 auto;
        padding: 10rem 4rem 8rem;
        width: 100%;
    }

    .topContainer {
        margin-bottom: 5rem;
    }

    .title {
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 2rem;
    }

    .footerIntro {
        line-height: 2.25rem;
        font-weight: 300;
        margin-bottom: 0;
        max-width: 40rem;
        width: 100%;
    }

    .emailLink,
    .emailLink:visited {
        color: #262626;
        font-weight: 600;
        font-size: 1.15rem;
    }

    .logo {
        margin-top: 5rem;
    }
</style>