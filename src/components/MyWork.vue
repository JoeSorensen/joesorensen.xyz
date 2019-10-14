<template>
    <div>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full items-center sm:w-1/2 p-6 mt-6">
                <carousel :autoplay="true" :autoplay-timeout="3000" :loop="true" :per-page="1">
                    <slide>
                        <card></card>
                    </slide>
                </carousel>
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
                <div class="align-middle">
                    <h3 class="text-3xl text-white font-bold leading-none mb-3">My Work</h3>
                    <p class="text-gray-400 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                        at ipsum eu nunc commodo posuere et sit amet ligula.<br/><br/>

                    </p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Card from "./Card";

    export default {
        name: "MyWork",
        components: {Card}
    }
</script>

<style scoped>

</style>