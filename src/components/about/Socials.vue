<template>
    <div>
        <font-awesome-icon :icon="['fab', 'twitter']" class="text-white"></font-awesome-icon>
    </div>
</template>

<script lang="ts">
    import {library} from "@fortawesome/fontawesome-svg-core";
    import {faTwitter} from '@fortawesome/free-brands-svg-icons'
    import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
    import {Component, Vue} from "vue-property-decorator";

    library.add(faTwitter);

    @Component({
        name: 'socials',
        components: {
            FontAwesomeIcon
        }
    })

    export default class Socials extends Vue {
    }
</script>

<style scoped></style>