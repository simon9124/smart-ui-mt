import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 静态路由（无需权限）
export const constantRouterMap = [{
    path: '/login',
    component: () =>
      import ('@/views/login/login'),
    hidden: true
  },
  {
    path: '/',
    component: () =>
      import ('@/views/layout/dashboard'),
    name: 'dashboard',
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
