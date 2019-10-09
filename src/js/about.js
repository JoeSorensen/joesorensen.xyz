import Vue from 'vue'
import Navbar from "../components/Navbar.vue";
import About from "../About-Splash.vue"
import Footer from "../components/Footer.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(Navbar, {
        props: {
            page: "about"
        }
    })
}).$mount('#nav');

new Vue({
    render: h => h(About)
}).$mount('#splash');

new Vue({
    render: h => h(Footer, {
        props: {
            credit: "Vvlili"
        }
    })
}).$mount('#foot');