import Vue from 'vue';
import About from "../pages/About.vue";
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

new Vue({
    render: h => h(About)
}).$mount('#vue');
