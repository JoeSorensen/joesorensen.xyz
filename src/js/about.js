import Vue from 'vue'
import Navbar from "../components/Navbar.vue";
import About from "../About.vue"

Vue.config.productionTip = false;

new Vue({
    render: h => h(Navbar)
}).$mount('#nav');

new Vue({
    render: h => h(About)
}).$mount('#splash')