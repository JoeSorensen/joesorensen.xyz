<template>
    <div>
        <home-splash/>
        <section class="bg-black border-b py-8">
            <div class="container max-w-5xl mx-auto m-8">
                <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Hi!</h1>
                <div class="w-full mb-4">
                    <div class="h-1 mx-auto gradient w-64 opacity-55 my-0 py-0 rounded-t"></div>
                </div>
                <introduction/>
            </div>
        </section>
        <foot credit="TchuMimi"></foot>
    </div>
</template>

<script lang="ts">
    import Introduction from "../components/Home-Introduction.vue";
    import HomeSplash from "../components/Home-Splash.vue";
    import Foot from "../components/Footer.vue";
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: "home",
        components: {Foot, HomeSplash, Introduction}
    })

    export default class Home extends Vue {
    }
</script>

<style scoped>
    .gradient {
        background: linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, #0700b8 52%, #00ff88 100%);
    }
</style>