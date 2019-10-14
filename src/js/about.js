import Vue from 'vue/dist/vue.js';
import Navbar from "../components/Navbar.vue";
import Splash from "../components/About-Splash.vue";
import About from "../pages/About.vue";
import Footer from "../components/Footer.vue";
import browserDetect from "vue-browser-detect-plugin";
import VueCarousel from 'vue-carousel';

Vue.use(browserDetect);
Vue.use(VueCarousel);
Vue.config.productionTip = false;

new Vue({
    render: h => h(Navbar, {
        props: {
            page: "about"
        }
    })
}).$mount('#nav');

new Vue({
    render: h => h(Splash)
}).$mount('#splash');

new Vue({
    render: h => h(About)
}).$mount('#about');

new Vue({
    render: h => h(Footer, {
        props: {
            credit: "Vvlili"
        }
    })
}).$mount('#foot');