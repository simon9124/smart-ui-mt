import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/layout/home'

Vue.use(Router)

// 静态路由（无需权限）
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/login'),
    hidden: true
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '*',
    redirect: '/',
    component: Home
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
export const asyncRouterMap = [
  {
    path: '/settings',
    name: 'dict',
    component: () => import('@/views/settings/dict'),
    meta: {
      title: 'settings',
      roles: ['admin']
    }
  },
  {
    path: '/userManager',
    name: 'user',
    component: () => import('@/views/userManager/user'),
    meta: {
      title: 'userManager',
      roles: ['admin']
    }
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import('@/views/tree/tree'),
    meta: {
      title: 'tree',
      roles: ['admin']
    }
  }
]
