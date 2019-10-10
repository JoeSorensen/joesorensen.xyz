<template>
    <div class="absolute flex items-center w-full h-full">
        <transition name="slide-fade" appear>
                <div class="w-full">
                    <div v-if="text === '' || text == null" class="-my-48">
                        <img class="mx-auto block" src="../assets/NLogo_White.png" width="650px">
                    </div>
                    <div v-else class="-my-32">
                        <span class="mx-auto block text-6xl font-bold leading-tight text-center text-white">{{text}}</span>
                    </div>
                    <!--<a class="mx-auto block" href="discord">
                        <i class="justify-center fab fa-discord"></i>
                    </a>-->
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
