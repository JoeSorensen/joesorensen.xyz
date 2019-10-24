<template>
    <div>
        <navbar/>
        <div class="heck"></div>
    </div>
</template>

<script lang="ts">
    import Navbar from "@/components/util/Navbar.vue";
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'heck',
        components: {Navbar}
    })

    export default class Heck extends Vue {
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