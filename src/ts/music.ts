import Vue from 'vue'
import Music from "@/pages/Music.vue";
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false;

new Vue({
    render: h => h(Music)
}).$mount("#vue");