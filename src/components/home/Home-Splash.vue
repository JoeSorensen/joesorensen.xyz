<template>
    <div class="h-screen relative splash">
        <nav class="gradient">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <a class="font-bold text-2xl lg:text-4xl" href="heck">
                    <img src="../../assets/img/Logo_White.png" style="opacity: 0" width="50">
                </a>
                <div class="block lg:hidden pr-4">
                    <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-200 hover:border-blue-200 appearance-none focus:outline-none"
                            v-on:click="toggleNav">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                            Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:block" id="nav-content">
                    <ul class="inline-flex">
                        <li><a class="px-4 text-white font-bold" href="/">Home</a></li>
                        <li><a class="px-4 text-white hover:text-blue-200" href="/about">About</a></li>
                        <li><a class="px-4 text-white hover:text-blue-200" href="/discord">Discord</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <logo/>

        <div class="absolute bottom-0 w-full -mt-12 lg:-mt-24">
            <svg version="1.1" viewBox="0 0 1428 174" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
                <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <g fill="#0700b8" fill-rule="nonzero" transform="translate(-2.000000, 44.000000)">
                        <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                              opacity="0.500000001"></path>
                        <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                              fill="#00ff88" opacity="0.300000001"></path>
                        <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                              id="Path-4" opacity="0.600000003"></path>
                    </g>
                    <g fill="#000000" fill-rule="nonzero" transform="translate(-4.000000, 76.000000)">
                        <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                    </g>
                </g>
            </svg>
        </div>
    </div>
</template>

<script lang="ts">
    import Logo from "@/components/util/Logo.vue"
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'home-splash',
        components: {
            Logo
        },
        methods: {
            toggleNav: function () {
                const navMenuDiv = document.getElementById("nav-content");

                if (navMenuDiv != null) {
                    if (navMenuDiv.classList.contains("hidden"))
                        navMenuDiv.classList.remove("hidden");
                    else
                        navMenuDiv.classList.add("hidden");
                }
            }
        }
    })

    export default class HomeSplash extends Vue {
    }
</script>

<style scoped>
    .splash {
        background-image: url('../../assets/img/splash.jpg');

        /* Center and scale the image nicely */
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

    }

    .gradient {
        background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 222, 118, 1) 50%, rgba(7, 0, 184, 1) 100%);
    }
</style>
