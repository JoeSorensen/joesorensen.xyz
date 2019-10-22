<template>
    <div>
        <carousel :per-page="3">
                <slide v-for="item in items">
                    <VuePureLightbox
                        :thumbnail="item.src"
                        :images="[item.src]"></VuePureLightbox>
                </slide>
        </carousel>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import VueCarousel from 'vue-carousel';
    import VuePureLightbox from 'vue-pure-lightbox';
    import Axios from "axios";

    @Component({
        name: "MyWork-Artist",
        components: {VueCarousel, VuePureLightbox}
    })

    export default class MyWork_Artist extends Vue {
        items: { src: string, thumbnail: string; }[] = [];

        async mounted () {
            let data: any;
            let result: { src: string, thumbnail: string; }[] = [];
            await Axios.get("https://api.imgur.com/3/album/ZjbGUpD/images", {
                headers: {
                    "Authorization": "Client-ID 09e666748be1334"
                }
            }).then(function (response: { data: any; }) {
                data = response.data.data;
            });
            if (data == null) return;
            data.forEach((img: any) => {
                result.push({
                    src: img.link,
                    thumbnail: ""
                })
            })

            this.items = result;
        }
    }
</script>