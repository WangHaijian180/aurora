import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/about',
    name: 'About',
    meta:true,
    component: () => import('@/views/about')
  }
]
// history
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
