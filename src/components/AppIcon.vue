<template>
    <font-awesome-icon
        v-bind:icon="name"
        v-bind:style="{
            color
        }"
    ></font-awesome-icon>
</template>

<script>
    import Vue from 'vue';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import {
        faBars,
        faTimes,
        faLongArrowAltRight,
    } from '@fortawesome/free-solid-svg-icons';
    import {
        faInstagram,
        faGithub,
        faYoutube,
        faTwitter,
        faLinkedin,
    } from '@fortawesome/free-brands-svg-icons';

    library.add(
        faBars,
        faTimes,
        faLongArrowAltRight,
        faInstagram,
        faLinkedin,
        faGithub,
        faYoutube,
        faTwitter,
    );

    Vue.component('font-awesome-icon', FontAwesomeIcon);

    export default {
        props: {
            name: {
                type: [
                    Array,
                    String,
                ],
                required: true,
            },
            color: {
                type: String,
                default: '#808080',
            },
        },
    }
</script>