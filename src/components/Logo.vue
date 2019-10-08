<template>
    <div id="logo">
        <transition name="slide-fade" appear>
            <div class="mt-64">
                <div class="justify-center mb-4">
                    <div v-if="text === '' || text == null">
                        <img class="mx-auto block" src="../assets/NLogo_White.png" width="650px">
                    </div>
                    <div v-else>
                        <span class="mx-auto block text-5xl font-bold leading-tight text-center text-white">{{text}}</span>
                    </div>
                    <!--<a class="mx-auto block" href="discord">
                        <i class="justify-center fab fa-discord"></i>
                    </a>-->
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'logo',
        props: {
            text: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .slide-fade-enter-active {
        transition: all 2s ease;
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }
</style>
