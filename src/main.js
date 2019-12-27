import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vConsole from 'vconsole'


Vue.config.productionTip = false

// 开发环境开启手机调试器
if (process.env.NODE_ENV === 'development') {
  new vConsole()
}


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

