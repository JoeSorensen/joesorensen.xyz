<template>
    <div class="relative">
        <div class="absolute w-full h-screen">
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">👌 gottem.</h1>
        </div>
    </div>
</template>

<script lang="ts">
    import Navbar from "../components/Navbar.vue";
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'gottem',
        components: {Navbar}
    })

    export default class Gottem extends Vue {}
</script>

<style scoped>

</style>