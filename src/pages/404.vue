<template>
    <div class="relative">
        <navbar/>
        <div class="bg-black h-screen">
            <img class="heck" src="../assets/img/heck.png">
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Error 404. The page you were
                looking for wasn't found. Sorry.</h1>
            <div class="w-full mb-4">
                <div class="h-1 mx-auto gradient w-64 opacity-55 my-0 py-0 rounded-t"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Navbar from "@/components/util/Navbar.vue";
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: '404',
        components: {Navbar}
    })

    export default class _404 extends Vue {
    }
</script>

<style scoped>
    .heck {
        display: block;
        margin-top: auto;
        margin-left: auto;
        margin-right: auto
    }

    .gradient {
        background: linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, #0700b8 52%, #00ff88 100%);
    }
</style>