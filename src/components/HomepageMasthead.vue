<template>
    <div v-bind:class="$style.container">
        <g-image
            src="~/../static/homepage-masthead.jpg"
            v-bind:class="[
                $style.homepageMastheadImage,
                {
                    [$style.homepageMastheadImageAnimate] : isAnimating,
                },
            ]"
        />
        <div v-bind:class="$style.mastheadText">
            <h1 v-bind:class="[
                $style.mastheadTextWrapper,
                {
                    [$style.mastheadTextWrapperAnimate] : isAnimating,
                },
            ]">
                <span>Yo, I'm Jeff.</span>
                <span v-bind:class="[$style.highlightText, $style.primaryBlack]">Sr. Software Engineer</span>
                <span v-bind:class="$style.coffeeText">and coffee lover.</span>
            </h1>
            <p v-bind:class="[
                $style.introText,
                {
                    [$style.introTextAnimate] : isAnimating,
                },
            ]">
                <span v-bind:class="[$style.primaryBlack, $style.shortDescription]">TL;DR</span>
                &nbsp;I love Jesus, my family, coding, coffee, fitness, traveling, and all things Harry Potter.
            </p>
            <p v-bind:class="[
                $style.introText,
                {
                    [$style.introTextAnimate] : isAnimating,
                },
            ]">
                I’m a self-taught Software Engineer and made the transition from my previous career to tech in 2017. I’ve had the pleasure of working alongside some incredible engineers,
                designers, business analysts, and product owners. I’m passionate about code
                standards, ECMAScript, and reactive Javascript frameworks (Vue.js is my jam).
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            isAnimating: false,
        }),

        mounted () {
            setTimeout(() => this.isAnimating = true, 200);
        }
    }
</script>

<style module>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 2.5rem;
        height: 100%;
        overflow: hidden;
    }

    .homepageMastheadImage {
        align-self: flex-end;
        border-radius: 5px;
        display: block;
        transition: transform .6s ease;
        transform: translateY(2.5rem);
        width: 100%;
    }

    .primaryBlack {
        color: #262626;
    }

    .highlightText {
        font-weight: 700;
    }

    .shortDescription {
        font-weight: 600;
    }

    .mastheadText {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        margin-top: 3rem;
        width: 100%;
    }

    .mastheadTextWrapper {
        font-weight: 300;
        font-size: 2rem;
        line-height: 130%;
        margin: 2.5rem 0;
    }

    .mastheadTextWrapper span:nth-of-type(1) {
        transition: transform .5s ease;
        transform: translateY(2rem);
    }

    .mastheadTextWrapper span:nth-of-type(2) {
        transition: transform .65s ease;
        transform: translateY(1.6rem);
    }

    .mastheadTextWrapper span:nth-of-type(3) {
        transition: transform .8s ease;
        transform: translateY(1.5rem);
    }

    .introText {
        line-height: 2.25rem;
        font-weight: 300;
        margin-bottom: 0;
        transition: transform .85s ease;
        transform: translateY(1.5rem);
    }

    .introText:first-of-type {
        margin-bottom: 1rem;
    }

    .homepageMastheadImageAnimate,
    .introTextAnimate,
    .mastheadTextWrapperAnimate span:nth-of-type(1),
    .mastheadTextWrapperAnimate span:nth-of-type(2),
    .mastheadTextWrapperAnimate span:nth-of-type(3) {
        transform: translateY(0);
    }

    .mastheadTextWrapper > span {
        display: block;
    }

    h1 {
        margin: 0;
    }

    @media only screen and (min-width: 768px) {
        .container {
            flex-direction: row;
            margin-top: 6rem;
            max-height: 44rem;
        }

        .homepageMastheadImage {
            max-width: 45%;
        }

        .mastheadText {
            max-width: 50%;
            margin-left: 3rem;
            text-align: right;
        }

        .mastheadTextWrapper {
            line-height: 120%;
            font-size: 3.5vw;
            margin-top: 0;
        }
    }

    @media only screen and (min-width: 1200px) {
        .mastheadTextWrapper > .highlightText,
        .mastheadTextWrapper > .coffeeText {
            margin: 0;
        }

        .mastheadText {
            max-width: 50%;
            margin-left: 5rem;
            text-align: right;
        }
    }

    @media only screen and (min-width: 1440px) {
        .mastheadTextWrapper {
            font-size: 3.5rem;
        }
    }
</style>