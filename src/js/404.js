import Vue from 'vue'
import Navbar from "../components/Navbar.vue";
import _404 from "../pages/404.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(Navbar)
}).$mount("#nav");

new Vue({
    render: h => h(_404)
}).$mount("#_404");