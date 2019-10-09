<template>
    <div class="absolute w-full h-screen splash">
        <logo text="About Me"/>
    </div>
</template>

<script>
    import Logo from "./components/Logo.vue";

    export default {
        name: "splash",
        components: {
            Logo
        },
    }
</script>

<style scoped>
    .splash {
        background-image: url('./assets/about.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>