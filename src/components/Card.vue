<template>
    <div class="h-full flex content-center">
        <div class="max-w-sm mx-auto my-auto rounded bg-gray-800">
            <img :src="getURL(img)" class="w-full rounded-t"
                 v-if="img != null">
            <div class="px-6 py-4">
                <div class="font-bold text-xl text-white tracking-wide">{{title}}</div>
                <div class="text-gray-200 text-sm mb-3">{{sTitle}}</div>
                <p class="text-gray-300 text-base">
                    <slot></slot>
                </p>
            </div>
            <div class="mx-4 mt-2 mb-4">
                <a class="mb-2 tracking-wider uppercase font-bold text-glow_green hover:bg-glow_blue transition-bg rounded p-2 inline-block"
                   target="_blank"
                   v-bind:href="act1Url">{{act1}}</a>
                <a class="mb-2 tracking-wider uppercase font-bold text-glow_green hover:bg-glow_blue transition-bg rounded p-2 inline-block"
                   target="_blank"
                   v-bind:href="act2Url">{{act2Url}}</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: "card",
        props: {
            title: String,
            sTitle: String,
            img: String,
            act1: String,
            act2: String,
            act1Url: String,
            act2Url: String
        },
        methods: {
            getURL: function (img) {
                return require('../assets/img/' + img);
            }
        }
    })

    export default class Card extends Vue {
    }
</script>