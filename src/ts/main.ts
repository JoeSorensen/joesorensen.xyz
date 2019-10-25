import Vue from 'vue'
import Home from '@/pages/Home.vue';
import '@/assets/css/tailwind.css'
import hal from "@/ts/hal";

Vue.config.productionTip = false;

new Vue({
    render: h => h(Home)
}).$mount("#vue");

// @ts-ignore
window.HAL = new hal();