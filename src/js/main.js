import Vue from 'vue'
import App from '../Landing.vue'
import Footer from "@/components/Footer";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#landing')

new Vue({
  render: h => h(Footer),
}).$mount("#foot")
