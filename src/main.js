import Vue from 'vue'
import store from '@/store.js'

console.log(store.state.count) // -> 0
// incrementをコミットする
store.commit('increment')
// もう一度アクセスしてみるとカウントが増えている
console.log(store.state.count) // -> 1


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

