import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vConsole from 'vconsole'
import './until/rem.js'

Vue.config.productionTip = false

// 开发环境开启手机调试器
if (process.env.NODE_ENV === 'development') {
  // new vConsole()
}

// router.beforeEach((to, from, next) => {
//   if(to.meta.title) {
//     document.title = to.meta.title
//   }
//   if(to.meta.keywords){
//     console.log(to.meta.keywords)
//     let head = document.getElementsByTagName('head');
//     let meta = document.createElement('meta');
//     meta.content = to.meta.keywords;
//     head[0].appendChild(meta)
//    }
//   next()
// })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

