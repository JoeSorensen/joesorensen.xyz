<template>
    <div>
        <div class="h-screen relative">
            <about-splash/>
            <navbar page="about"/>
        </div>
        <section class="bg-black border-b py-8">
            <div class="container max-w-5xl mx-auto m-8">
                <h1 class="w-full my-4 text-5xl font-bold leading-tight text-center text-white">More about me</h1>
                <div class="w-full mb-4">
                    <div class="h-1 mx-auto gradient w-64 opacity-55 my-0 py-0 rounded-t"></div>
                </div>
                <div>
                    <div class="flex flex-wrap">
                        <div class="w-5/6 my-auto sm:w-1/2 p-6">
                            <h3 class="text-3xl text-white font-bold leading-none mb-3">As I said on the
                                homepage...</h3>
                            <p class="text-gray-400 mb-8">I'm Joe, but please call me Soren. I'm a high school student
                                in
                                the STEM
                                School Highlands Ranch class of 2021.<br/><br/>

                                Image by: <a class="hover:underline text-blue-200 mb-8"
                                             href="https://www.instagram.com/the_most_floof/"
                                             target="_blank">@the_most_floof</a></p>
                        </div>

                        <div class="w-full sm:w-1/2 p-6" v-if="$browserDetect.isChrome">
                            <img class="w-full mx-auto" src="../assets/img/wave.webp">
                        </div>
                        <div class="w-full sm:w-1/2 p-6" v-else>
                            <img class="w-full mx-auto" src="../assets/img/wave.png">
                        </div>
                    </div>

                    <MyWork></MyWork>
                </div>
            </div>
        </section>
        <foot credit="Vvlili"/>
    </div>
</template>

<script lang="ts">
    import MyWork from "@/components/about/MyWork.vue";
    import browserDetect from "vue-browser-detect-plugin";
    import VueLazyload from "vue-lazyload";
    import AboutSplash from "@/components/about/About-Splash.vue";
    import Navbar from "@/components/util/Navbar.vue";
    import Foot from "@/components/util/Footer.vue"
    import {Component, Vue} from "vue-property-decorator";
    import MyWorkArtist from "@/components/about/MyWork-Artist.vue";
    import Socials from "@/components/about/Socials.vue";

    Vue.use(browserDetect);
    Vue.use(VueLazyload);

    @Component({
        name: 'about',
        components: {Socials, MyWorkArtist, Navbar, AboutSplash, MyWork, Foot}
    })

    export default class About extends Vue {
    }
</script>

<style scoped>
    .gradient {
        background: linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, #0700b8 52%, #00ff88 100%);
    }
</style>