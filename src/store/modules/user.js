import {
  setToken,
  removeToken
} from '@/utils/auth'
// import {
//   loginByUsername,
//   getUserInfo
// } from '@/api/login/login'

const user = {
  state: {
    roles: [],
    userAvatar: '',
    userCode: '',
    userEmail: '',
    userId: '',
    userMobile: '',
    userName: '',
    userNickName: '',
    userStatus: ''
    // user: '',
    // token: '',
    // introduction: '',
    // setting: {
    //   articlePlatform: []
    // }
  },

  mutations: {
    SET_CODE: (state, userCode) => {
      state.userCode = userCode
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_ID: (state, userId) => {
      state.userId = userId
    },
    SET_NAME: (state, userName) => {
      state.userName = userName
    },
    SET_NICK_NAME: (state, userNickName) => {
      state.userNickName = userNickName
    },
    SET_STATUS: (state, userStatus) => {
      state.userStatus = userStatus
    },
    SET_AVATAR: (state, userAvatar) => {
      state.userAvatar = userAvatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_MOBILE: (state, userMobile) => {
      state.userMobile = userMobile
    },
    SET_EMAIL: (state, userEmail) => {
      state.userEmail = userEmail
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({
      commit
    }, userInfo) {
      const userName = userInfo.userName.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(userName, userInfo.userPassword)
          .then(response => {
            // 登录成功缓存token-> cookie
            setToken(response.data.token)
            // 登录成功缓存token-> store
            commit('SET_TOKEN', response.data.token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    // 获取用户信息
    GetUserInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token)
          .then(response => {
            if (!response.data) {
              // 由于mockjs 不支持自定义状态码只能这样hack
              reject('error')
            }
            const data = response.data
            const roles = []
            data.roles.forEach(element => {
              roles.push(element.roleKey)
            })
            commit('SET_ROLES', roles.join(','))
            commit('SET_NAME', data.userName)
            commit('SET_NICK_NAME', data.userNickName)
            commit('SET_AVATAR', data.userAvatar)
            commit('SET_STATUS', data.userStatus)
            commit('SET_ID', data.userId)
            commit('SET_MOBILE', data.userMobile)
            commit('SET_EMAIL', data.userEmail)
            commit('SET_CODE', data.userCode)
            commit('SET_AVATAR', data.userAvatar)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        // logout(state.token)
        //   .then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resolve()
        // })
        // .catch(error => {
        //   reject(error)
        // })
      })
    },

    // 前端 登出
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }

    // 动态修改权限
    // ChangeRoles({ commit }, role) {
    //   return new Promise(resolve => {
    //     commit('SET_TOKEN', role)
    //     setToken(role)
    //     getUserInfo(role).then(response => {
    //       const data = response.data
    //       commit('SET_ROLES', data.roles)
    //       commit('SET_NAME', data.name)
    //       commit('SET_AVATAR', data.avatar)
    //       commit('SET_INTRODUCTION', data.introduction)
    //       resolve()
    //     })
    //   })
    // }
  }
}

export default user
