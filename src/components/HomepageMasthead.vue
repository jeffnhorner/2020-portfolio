<template>
    <div v-bind:class="$style.container">
        <g-image
            src="~/../static/homepage-masthead.jpg"
            v-bind:class="$style.homepageMastheadImage"
        />
        <div v-bind:class="$style.mastheadText">
            <h1 v-bind:class="$style.mastheadTextWrapper">
                <span>Yo, I'm Jeff.</span>
                <span v-bind:class="[$style.highlightText, $style.primaryGreen]">Software Engineer</span>
                <span v-bind:class="$style.coffeeText">and coffee snob.</span>
            </h1>
            <p v-bind:class="$style.introText">
                <span v-bind:class="[$style.primaryGreen, $style.shortDescription]">TL;DR</span>
                &nbsp;I love Jesus, my wife, coding, coffee, fitness, and all things Harry Potter.
            </p>
            <p v-bind:class="$style.introText">
                I’m a self-taugh software engineer and made the transition from Finance to Tech roughly
                3.5 years ago. I’ve had the pleasure of working alongside some incredible engineers,
                designers, business analysts, and product owners. I’m extremly passionate about  code
                standards, ECMAScript, and reactive Javascript frameworks (Vue.js is my jam).
            </p>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style module>
    .container {
        display: flex;
        justify-content: space-between;
        margin-top: 6rem;
    }

    .homepageMastheadImage {
        align-self: flex-end;
        display: block;
        max-width: 45%;
        width: 100%;
    }

    .primaryGreen {
        color: #99D5B6;
    }

    .highlightText {
        font-weight: 700;
    }

    .shortDescription {
        font-weight: 400;
    }

    .mastheadText {
        display: flex;
        flex-direction: column;
        margin-left: 5rem;
        justify-content: flex-end;
        text-align: right;
        width: 100%;
        max-width: 50%;
    }

    .mastheadTextWrapper {
        font-weight: 600;
        font-size: 4vw;
        line-height: 120%;
        margin-bottom: 2.5rem;
        text-align: right;
    }

    .mastheadTextWrapper > span {
        display: block;
    }

    h1 {
        margin: 0;
    }

    .introText {
        line-height: 2.25rem;
        font-weight: 300;
        margin-bottom: 0;
    }

    .introText:first-of-type {
        margin-bottom: 1rem;
    }

    @media only screen and (min-width: 640px) {

    }

    @media only screen and (min-width: 768px) {

    }

    @media only screen and (min-width: 1024px) {

    }

    @media only screen and (min-width: 1200px) {
        .mastheadTextWrapper > .highlightText,
        .mastheadTextWrapper > .coffeeText {
            margin: 0;
        }
    }

    @media only screen and (min-width: 1440px) {
        .mastheadTextWrapper {
            font-size: 3.5rem;
        }
    }
</style>