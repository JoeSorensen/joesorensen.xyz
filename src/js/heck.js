import Vue from 'vue';
import Navbar from "../components/Navbar.vue";
import Heck from "../Heck.vue";

new Vue({
    render: h => h(Navbar)
}).$mount("#nav");

new Vue({
    render: h => h(Heck)
}).$mount("#heck");