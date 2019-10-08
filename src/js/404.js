import Vue from 'vue'
import Navbar from "../components/Navbar.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(Navbar)
}).$mount("#nav");