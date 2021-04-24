import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 
import { gsap } from "gsap"
Vue.use(gsap);
// ui框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import 'element-ui/lib/theme-chalk/base.css';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(ElementUI);
// 动画
import animate from 'animate.css'
Vue.use(animate);
import wow from 'wowjs'
Vue.prototype.$wow = wow
// 请求
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)


Vue.config.productionTip = false

// 判断是否登陆
// router.beforeEach((to,from,next) => {
//       console.log(from);
//     if(to.meta == true){
//       next({ path: '/' })
//       console.log('检查页面是否需要登陆')
//       // 检查页面是否需要登陆
//     }
   
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
