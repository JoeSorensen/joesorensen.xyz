import Vue from 'vue'
import Home_Splash from '../components/Home-Splash.vue';
import Home from '../pages/Home.vue';
import Footer from "../components/Footer";
import browserDetect from "vue-browser-detect-plugin";

Vue.use(browserDetect);
Vue.config.productionTip = false;

new Vue({
    render: h => h(Home_Splash),
}).$mount('#landing');

new Vue({
    render: h => h(Home)
}).$mount("#home");

new Vue({
    render: h => h(Footer, {
        props: {
            credit: "TchuMimi"
        }
    }),
}).$mount('#foot');
