import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
// 重复触发了同一个路由报错
const original = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return original.call(this,location).catch( err=> err)
}
// history
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
