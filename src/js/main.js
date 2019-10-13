import Vue from 'vue'
import Home from '../pages/Home.vue';
import Introduction from '../components/Home-Introduction.vue'
import Footer from "../components/Footer";
import browserDetect from "vue-browser-detect-plugin";

Vue.use(browserDetect);
Vue.config.productionTip = false;

new Vue({
    render: h => h(Home),
}).$mount('#landing');

new Vue({
    render: h => h(Introduction)
}).$mount("#introduction");

new Vue({
    render: h => h(Footer, {
        props: {
            credit: "TchuMimi"
        }
    }),
}).$mount('#foot');
