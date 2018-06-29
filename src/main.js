import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/styles/fontIcon/iconfont.css'

// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import './permission' // permission control

Vue.config.productionTip = false
require('promise.prototype.finally').shim() // promise.prototype.finally


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
