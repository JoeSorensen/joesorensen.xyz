<template>
    <div class="absolute flex items-center w-full h-full">
        <transition appear name="slide-fade">
            <div class="w-full">
                <div class="-my-48" v-if="text === '' || text == null">
                    <img class="mx-auto block" src="../../assets/img/NLogo_White.png" width="650px">
                </div>
                <div class="-my-32" v-else>
                    <span class="mx-auto block text-6xl font-bold leading-tight text-center text-white">{{text}}</span>
                </div>
                <!--<a class="mx-auto block" href="discord">
                    <i class="justify-center fab fa-discord"></i>
                </a>-->
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'logo',
        props: {
            text: String
        }
    })

    export default class Logo extends Vue {
    }
</script>

<style scoped>
    .slide-fade-enter-active {
        transition: all 2s ease;
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(20px);
        opacity: 0;
    }
</style>
