import Vue from 'vue';
import About from "../pages/About.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(About)
}).$mount('#vue');
