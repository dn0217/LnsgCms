import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import ServerIndex from '@/components/ServerIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/ServerIndex',
      name: 'ServerIndex',
      component: ServerIndex
    }
  ]
})
