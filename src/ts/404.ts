import Vue from 'vue'
import _404 from "../pages/404.vue";
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

new Vue({
    render: h => h(_404)
}).$mount("#vue");