<template>
    <g-link
        v-bind:class="$style.logo"
        to="/"
    >
        jeff<span v-bind:class="$style.seperatorColor">n</span>horner
    </g-link>
</template>

<style module>
    .seperatorColor {
        font-weight: 400;
    }

    .logo {
        color: #262626;
        font-weight: 900;
        letter-spacing: .025rem;
        text-decoration: none;
    }
</style>