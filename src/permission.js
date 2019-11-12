import router from './router'
import store from './store'
import {
  Message
} from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import {
  getToken
} from '@/utils/auth' // getToken from cookie

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

// permissiom judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login', '/authredirect', '/'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  if (getToken()) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
      NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      if (store.getters.roles.length === 0) {
        // 用户登录成功，生成token后获取用户信息及用户角色
        store
          .dispatch('GetUserInfo')
          .then(result => {
            // 拉取user_info
            const user = result.data
            const roles = []
            user.roles.forEach(element => {
              roles.push(element.roleKey)
            })
            store.dispatch('GenerateRoutes', roles).then(() => {
              // 根据roles权限生成可访问的路由表
              router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
              next({
                ...to,
                replace: true
              }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            })
          })
          .catch(() => {
            store.dispatch('FedLogOut').then(() => {
              // Message.error('无法获取用户信息，请重新登录')
              Toast({
                message: '无法获取用户信息，请重新登录',
                position: 'middle',
                duration: 5000
              })
              next({
                path: '/login'
              })
            })
          })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next() //
        } else {
          next({
            path: '/401',
            replace: true,
            query: {
              noGoBack: true
            }
          })
        }
        // 可删 ↑
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
