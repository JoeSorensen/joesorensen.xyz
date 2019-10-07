<template>
    <div id="logo">
        <transition name="slide-fade" appear>
            <div class="mt-64">
                <div class="justify-center mb-4">
                    <img class="mx-auto block" src="../assets/NLogo_White.png" width="650px">
                    <a class="mx-auto block" href="discord">
                        <i class="justify-center fab fa-discord"></i>
                    </a>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'logo'
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
