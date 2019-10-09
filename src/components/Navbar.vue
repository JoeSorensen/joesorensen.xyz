<template>
    <div class="absolute w-full splash">
        <nav class="gradient">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                <a class="font-bold text-2xl lg:text-4xl" href="heck">
                    <img src="../assets/NLogo_White.png" width="305" class="px-0">
                </a>
                <div class="block lg:hidden pr-4">
                    <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-blue-200 hover:border-blue-200 appearance-none focus:outline-none">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>

                <div v-if="page === 'about'" class="hidden lg:block" id="nav-content">
                    <ul class="inline-flex">
                        <li><a class="px-4 text-white hover:text-blue-200" href="/">Home</a></li>
                        <li><a class="px-4 text-white font-bold" href="">About</a></li>
                        <li><a class="px-4 text-white hover:text-blue-200" href="/discord">Discord</a></li>
                    </ul>
                </div>
                <div v-else class="hidden lg:block" id="nav-content">
                    <ul class="inline-flex">
                        <li><a class="px-4 text-white hover:text-blue-200" href="/">Home</a></li>
                        <li><a class="px-4 text-white hover:text-blue-200" href="/about">About</a></li>
                        <li><a class="px-4 text-white hover:text-blue-200" href="/discord">Discord</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "navbar",
        props: {
           page: String
        },
        mounted() {
            var navMenuDiv = document.getElementById("nav-content");
            var navMenu = document.getElementById("nav-toggle");

            document.onclick = check;

            function check(e) {
                var target = (e && e.target) || (event && event.srcElement);

                //Nav Menu
                if (!checkParent(target, navMenuDiv)) {
                    // click NOT on the menu
                    if (checkParent(target, navMenu)) {
                        // click on the link
                        if (navMenuDiv.classList.contains("hidden")) {
                            navMenuDiv.classList.remove("hidden");
                        } else {
                            navMenuDiv.classList.add("hidden");
                        }
                    } else {
                        // click both outside link and outside menu, hide menu
                        navMenuDiv.classList.add("hidden");
                    }
                }

            }

            function checkParent(t, elm) {
                while (t.parentNode) {
                    if (t == elm) {
                        return true;
                    }
                    t = t.parentNode;
                }
                return false;
            }
        }
    }
</script>

<style scoped>
    .gradient {
        background: linear-gradient(90deg, rgba(2,0,36,0) 0%, #0700b8 52%, #00ff88 100%);
    }

    .splash {
        background-image: url('../assets/splash.jpg');
       /* Center and scale the image nicely */
     background-repeat: no-repeat;
     background-size: cover;
      background-position-y: -250px;
      background-position: bottom;
    }
</style>