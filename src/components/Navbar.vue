<template>
    <div class="absolute w-full splash">
        <nav class="gradient">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <a class="font-bold text-2xl lg:text-4xl" href="/" style="margin-bottom: 0.1rem; margin-top: 0.1rem">
                    <img src="../assets/img/NLogo_White.png" width="305">
                </a>
                <div class="block lg:hidden pr-4">
                    <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-200 hover:border-blue-200 appearance-none focus:outline-none"
                            id="nav-toggle">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>
                            Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                <div class="hidden lg:block" id="nav-content">
                    <ul class="inline-flex" v-if="page === 'about'">
                        <li><a class="px-4 text-white hover:text-blue-200" href="/">Home</a></li>
                        <li><a class="px-4 text-white font-bold" href="">About</a></li>
                        <li><a class="px-4 text-white hover:text-blue-200" href="/discord">Discord</a></li>
                    </ul>
                    <ul class="inline-flex" v-else>
                        <li><a class="px-4 text-white hover:text-blue-200" href="/">Home</a></li>
                        <li><a class="px-4 text-white hover:text-blue-200" href="/about">About</a></li>
                        <li><a class="px-4 text-white hover:text-blue-200" href="/discord">Discord</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: "navbar",
        props: {
            page: String
        },
        mounted: function () {
            const navMenuDiv = document.getElementById("nav-content");
            const navMenu = document.getElementById("nav-toggle");

            document.onclick = check;

            function check(e: { target: any; }) {
                let target = (e && e.target) || (event && event.srcElement);

                //Nav Menu
                if (!checkParent(target, navMenuDiv) && navMenuDiv != null) {
                    // click NOT on the menu
                    if (checkParent(target, navMenu)) {
                        // click on the link
                        if (navMenuDiv.classList.contains("hidden")) {
                            navMenuDiv.classList.remove("hidden");
                        } else {
                            navMenuDiv.classList.add("hidden");
                        }
                    } else if (navMenuDiv != null){
                        // click both outside link and outside menu, hide menu
                        navMenuDiv.classList.add("hidden");
                    }
                }

            }

            function checkParent(t: HTMLElement | null, elm: HTMLElement | null) {
                while (t != null && t.parentNode) {
                    if (t == elm) {
                        return true;
                    }
                    t = t.parentNode;
                }
                return false;
            }
        }
    })

    export default class Navbar extends Vue {
    }
</script>

<style scoped>
    .gradient {
        background: linear-gradient(90deg, rgba(2, 0, 36, 0) 0%, #0700b8 52%, #00ff88 100%);
    }

    .splash {
        background-image: url('../assets/img/splash.jpg');
        /* Center and scale the image nicely */
        background-repeat: no-repeat;
        background-size: cover;
        background-position-y: -250px;
        background-position: bottom;
    }
</style>