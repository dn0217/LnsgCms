import Vue from 'vue'
import App from './App'
import router from './router'
import api from "./api/api"
import store from "./vuex/store"

import'../static/Ueditor/ueditor.config.js'
import'../static/Ueditor/ueditor.all.min.js'
import'../static/Ueditor/lang/zh-cn/zh-cn.js'


//关闭生产模式 提示
Vue.config.productionTip = false
let type = 'dev' 
Vue.prototype.log = msg =>  'dev' == 'dev' ? console.log(msg) : void 0;
Vue.prototype.api = api

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
