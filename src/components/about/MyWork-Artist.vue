<template>
    <div>
        <carousel :per-page="3">
            <slide v-for="item in items" :key="item">
                <img :src="item.src">
                <p class="text-white">{{item.caption}}</p>
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
        items: { src: string, caption: string; }[] = [];

        async mounted() {
            let data: any;
            let result: { src: string, caption: string; }[] = [];
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
                    caption: img.description
                })
            });

            this.items = result;
        }
    }
</script>