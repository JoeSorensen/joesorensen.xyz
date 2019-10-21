<template>
    <div class="flex flex-wrap">
        <div class="w-5/6 my-auto sm:w-1/2 p-6">
            <h3 class="text-3xl text-white font-bold leading-none mb-3">I'm Soren!</h3>
            <p class="text-gray-400 mb-8">My name is Joe Sorensen (heh, get it?), but I'm more commonly known as Soren.
                I work part time as a software developer, and make music and art in my spare time.<br/><br/>

                Image by: <a class="hover:underline text-blue-200 mb-8" href="https://www.instagram.com/the_most_floof/"
                             target="_blank">@the_most_floof</a></p>
        </div>

        <div class="w-full sm:w-1/2 p-6" v-if="$browserDetect.isChrome">
            <img class="w-full mx-auto" src="../assets/img/wave.webp">
        </div>
        <div class="w-full sm:w-1/2 p-6" v-else>
            <img class="w-full mx-auto" src="../assets/img/wave.png">
        </div>
    </div>
</template>

<script lang="ts">
    import browserDetect from "vue-browser-detect-plugin";
    import {Component, Vue} from "vue-property-decorator";

    Vue.use(browserDetect);

    @Component ({
        name: 'introduction'
    })

    export default class Introduction extends Vue {}
</script>
