<template>
    <div>
        <div class="h-screen relative">
            <navbar page="music"/>
            <div class="h-screen"></div>
            <foot></foot>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Navbar from "@/components/util/Navbar.vue";
    import Foot from "@/components/util/Footer.vue";

    @Component({
        name: 'music',
        components: {Navbar, Foot}
    })

    export default class Music extends Vue {
    }
</script>

<style scoped>

</style>