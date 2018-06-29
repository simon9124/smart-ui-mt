import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Layout from '../views/layout/Layout'

// 静态路由（无需权限）
export const constantRouterMap = [{
    path: '/',
    component: () =>
      import ('@/components/HelloWorld')
    // hidden: true
  },
  {
    path: '/login',
    component: () =>
      import ('@/views/login/login'),
    hidden: true
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

// 动态路由（权限判断）
export const asyncRouterMap = []
