import Vue from 'vue'
import Router from 'vue-router'
import ServerIndex from '../components/ServerIndex'
import SidebarNav from '../components/SidebarNav'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ServerIndex',
      component: ServerIndex
    },
    {
      path: '/',
      name: 'SidebarNav',
      component: SidebarNav
    }
  ]
})
