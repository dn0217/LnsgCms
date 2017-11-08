import Vue from 'vue'
import App from './App'
import router from './router'

//关闭生产模式 提示
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
