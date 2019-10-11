import Vue from 'vue'
import Landing from '../Landing.vue';
import Introduction from '../components/Home-Introduction.vue'
import Footer from "../components/Footer";

Vue.config.productionTip = false;

new Vue({
    render: h => h(Landing),
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
