import Vue from 'vue';
import Heck from "@/pages/Heck.vue";
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

new Vue({
    render: h => h(Heck)
}).$mount("#vue");