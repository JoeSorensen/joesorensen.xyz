<template>
    <div class="flex flex-wrap">
        <div class="w-5/6 my-auto sm:w-1/2 p-6">
            <h3 class="text-3xl text-white font-bold leading-none mb-3">As I said on the homepage...</h3>
            <p class="text-gray-400 mb-8">I'm Joe, but please call me Soren. I'm a high school student in the STEM
                School Highlands Ranch class of 2021.<br/><br/>

                Image by: <a class="hover:underline text-blue-200 mb-8" href="https://www.instagram.com/the_most_floof/"
                             target="_blank">@the_most_floof</a></p>
        </div>

        <div class="w-full sm:w-1/2 p-6" v-if="$browserDetect.isChrome">
            <img class="w-full mx-auto" src="../assets/wave.webp">
        </div>
        <div class="w-full sm:w-1/2 p-6" v-else>
            <img class="w-full mx-auto" src="../assets/wave.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'about-introduction'
    }
</script>