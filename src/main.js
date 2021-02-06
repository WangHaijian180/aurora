import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { gsap } from "gsap"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(gsap);

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
