<template>
    <footer class="bg-black">
        <div class="container mx-auto  px-8">

            <div class="w-full flex flex-col md:flex-row py-6">

                <div class="flex-1 mb-5 mr-12">
                    <img src="../../assets/img/NLogo.png" style="filter: invert(100%); margin-right: 100px">
                </div>


                <div class="flex-1">
                    <p class="uppercase text-gray-500 md:mb-6">Links</p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline hover:underline text-gray-200 hover:text-glow_green"
                               href="home">Home</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline hover:underline text-gray-200 hover:text-glow_green"
                               href="discord">Join My Discord</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline"
                               href="42474edac4ebfce470ab7261ae9965f8">?</a>
                        </li>
                    </ul>
                </div>
                <div class="flex-1" style="opacity: 0;">
                    <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline hover:underline text-gray-200 hover:text-glow_green"
                               href="#">Terms</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline hover:underline text-gray-200 hover:text-glow_green"
                               href="#">Privacy</a>
                        </li>
                    </ul>
                </div>
                <div class="flex-1" style="opacity: 0;">
                    <p class="uppercase text-gray-500 md:mb-6">Social</p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline hover:underline text-gray-200 hover:text-glow_green" href="#">Facebook</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline hover:underline text-gray-200 hover:text-glow_green" href="#">Linkedin</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline hover:underline text-gray-200 hover:text-glow_green"
                               href="#">Twitter</a>
                        </li>
                    </ul>
                </div>
                <div class="flex-1" style="opacity: 0;">
                    <p class="uppercase text-gray-500 md:mb-6">Company</p>
                    <ul class="list-reset mb-6">
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline hover:underline text-gray-200 hover:text-glow_green" href="#">Official
                                Blog</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline hover:underline text-gray-200 hover:text-glow_green" href="#">About
                                Us</a>
                        </li>
                        <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                            <a class="no-underline hover:underline text-gray-200 hover:text-glow_green"
                               href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <p class="block text-center text-gray-500 m-2" v-if="credit !== undefined">Splash image by {{credit}}. Please
            keep in mind that currently this
            website is under active development.</p>
        <p class="block text-center text-gray-500 m-2" v-else>Please keep in mind that currently this
            website is under active development.</p>

    </footer>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        name: 'foot',
        props: {
            credit: String
        }
    })

    export default class Foot extends Vue {
    }
</script>