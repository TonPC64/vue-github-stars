import Vue from 'vue'
import App from './App.vue'

Vue.filter('numberWithCommas', (value) => {
  if (!value) return ''
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
})

new Vue({
  el: '#app',
  render: h => h(App)
})
