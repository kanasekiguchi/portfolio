import Vue from 'vue'
import App from './App.vue'

import './assets/css/reset.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
