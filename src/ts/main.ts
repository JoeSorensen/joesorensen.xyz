import Vue from 'vue'
import Home from '../pages/Home.vue';
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

new Vue({
    render: h => h(Home)
}).$mount("#vue");
