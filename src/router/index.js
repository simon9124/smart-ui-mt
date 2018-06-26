import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})

// import Vue from 'vue'
// import Router from 'vue-router'
// const _import = require('./_import_' + process.env.NODE_ENV)

// Vue.use(Router)
// import Layout from '../views/layout/Layout'

export const constantRouterMap = []

// export default new Router({
//   // mode: 'history', // require service support
//   scrollBehavior: () => ({
//     y: 0
//   }),
//   routes: constantRouterMap
// })

export const asyncRouterMap = []
