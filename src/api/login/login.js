import { request } from '@/utils/request'

export function loginByUsername(userName, userPassword) {
  const param = new URLSearchParams()
  param.append('userName', userName)
  param.append('userPassword', userPassword)
  return request({
    url: '../login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: param
  })
}

export function logout() {
  return request({
    url: '../logout?logout',
    method: 'get'
  })
}

export function getUserInfo() {
  return request({
    url: '/user/getUserInfo/',
    method: 'get'
  })
}
