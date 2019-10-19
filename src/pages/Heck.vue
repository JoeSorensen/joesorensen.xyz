<template>
    <div>
        <navbar/>
        <div class="heck"></div>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar";

    export default {
        name: 'heck',
        components: {Navbar}
    }
</script>

<style scoped>
    .heck {
        width: 100%;
        position: absolute;
        min-height: 100%;
        margin: auto;
        padding: 0;
        background-image: url('../assets/img/heck.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        bottom: 0px;
        top: 120px;
    }
</style>

<style src="../assets/css/tailwind.css"></style>