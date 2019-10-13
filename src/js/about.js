import Vue from 'vue';
import Navbar from "../components/Navbar.vue";
import About from "../components/About-Splash.vue";
import Introduction from "../components/About-Introduction.vue";
import Footer from "../components/Footer.vue";
import browserDetect from "vue-browser-detect-plugin";

Vue.use(browserDetect);
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
    render: h => h(Introduction)
}).$mount('#introduction');

new Vue({
    render: h => h(Footer, {
        props: {
            credit: "Vvlili"
        }
    })
}).$mount('#foot');