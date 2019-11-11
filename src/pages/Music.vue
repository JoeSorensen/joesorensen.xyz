<template>
    <div>
        <div class="h-screen relative">
            <navbar page="music"/>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Navbar from "@/components/util/Navbar.vue";

    @Component({
        name: 'music',
        components: {Navbar}
    })

    export default class Music extends Vue {
    }
</script>

<style scoped>

</style>