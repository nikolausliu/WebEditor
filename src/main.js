import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// styles
import '@/styles/index.less'
import '@/assets/font/iconfont.css'

// element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// request
import request from '@/request/index'
Vue.prototype._request = request

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
