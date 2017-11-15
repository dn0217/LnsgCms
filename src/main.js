import Vue from 'vue'
import App from './App'
import router from './router'

import'../static/Ueditor/ueditor.config.js'
import'../static/Ueditor/ueditor.all.min.js'
import'../static/Ueditor/lang/zh-cn/zh-cn.js'


//关闭生产模式 提示
//Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
