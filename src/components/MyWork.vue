<template>
    <div>
        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full items-center sm:w-1/2 p-6 mt-6">
                <carousel :autoplay=true :autoplay-timeout="5000" :loop="true" :per-page="1" :speed="1500"
                          pagination-active-color="#00ff88" pagination-color="#ffffff">
                    <slide>
                        <card
                                act1="See it in action"
                                act1-url="/discord"
                                img="StarBot2_logo.png"
                                sTitle="A discord bot written in Java"
                                title="StarBot2"
                        >
                            Using DV8FromTheWorld's JDA and Jagrosh's JDA-Utilities, StarBot2 was written for my discord
                            server. Its features inclue XP, twitch announcements, and other random and fun things.
                        </card>
                    </slide>
                    <slide>
                        <card
                                act1="TRL's Soundcloud"
                                act1-url="https://soundcloud.com/therealmlabel"
                                sTitle="Another discord bot written in Java"
                                title="RealmBot"
                        >
                            RealmBot was also made with DV8FromTheWorld's JDA and Jagrosh's JDA-Utilities for The Realm
                            Label. This bot is no longer maintained.
                        </card>
                    </slide>
                    <slide>
                        <card
                                act1="Check out the source"
                                act1-url="https://github.com/joesorensen/joesorensen.xyz"
                                img="website_icon.png"
                                sTitle="Yep, this one."
                                title="This website!"
                        >
                            I think this one is kind of obvious. This website is hard-coded using VueJS 2 webpack and
                            tailwind css for styling!
                        </card>
                    </slide>
                    <slide>
                        <card
                                act1="My github"
                                act1-url="https://github.com/joesorensen/"
                                img="GitHub_Icon.png"
                                sTitle="The public stuff at least"
                                title="Check out the rest..."
                        >
                            Listed here are just a few of my dev projects, but you can check out all of my public work
                            on GitHub!<br/><br/>

                            Image by: <a class="hover:underline text-blue-200 mb-8"
                                         href="https://jackthevulture.tumblr.com"
                                         target="_blank">JackTheVulture</a>
                        </card>
                    </slide>
                </carousel>
            </div>
            <div class="w-5/6 my-auto sm:w-1/2 p-6">
                <div class="align-middle">
                    <h3 class="text-3xl text-white font-bold leading-none mb-3">My Work</h3>
                    <p class="text-gray-400 mb-8">Listed to the left is all my work as a developer. <br/><br/>

                    </p>
                </div>
                <!--For later: Scroll down a bit to
                        see all of my work as an artist.-->
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import Card from "./Card.vue";
    import VueCarousel from 'vue-carousel';
    import {Component, Vue} from "vue-property-decorator";

    Vue.use(VueCarousel);

    @Component({
        name: "MyWork",
        components: {Card}
    })

    export default class MyWork extends Vue {
    }
</script>