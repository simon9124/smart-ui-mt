import axios from 'axios'
import {
  Message
} from 'element-ui'
import {
  getToken
} from '@/utils/auth'
import {
  customMessage,
  commonMessage,
  errorGetDataMessage,
  errorTokenMessage,
  errorConnectMessage
} from '@/utils/message'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API + process.env.PREFIX, // api的base_url
  timeout: 50000, // request timeout
  // withCredentials: true
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (getToken()) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['token-header'] = getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
  }
)

// const service = axios.create({
//   baseURL: process.env.BASE_API + process.env.PREFIX,
//   timeout: 10000, // request timeout
//   headers: {
//     'token-header': 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJjeW91cmFpIiwiand0X3VzZXJpZCI6ImJhMzQ4OTMyLTZmNDItMTFlOC04MzgwLTAwMTYzZTAwNGY3OSIsImp3dF9uYW1lIjoiIiwiZXhwIjoxNTMwODA1OTgyfQ.XGQFOjb4pjE_5Vl38-BDuton1NE4AbzWbU5X33D_eCCQ2N8ghXoPHFvokPEbDRJqM6MmvhY8yLmC5OieVbK_VYOkUzitly1EhYgKBX2f5Ge77wp49TZeYAhrgLfMmclPie-JgyWAoIcBvezb39tafPtZVzUCHODRp94ASZBsDfM'
//   }
// })

/**
 * 回文拦截：
 * response.status = 200 请求到达 根据response.data.status 判断 success/waring
 * 其他为error
 */

service.interceptors.response.use(
  // response -> 业务正确
  response => {
    // response.status === 200 -> 服务器连接成功
    if (response.status === 200) {
      // 200开头 -> 数据获取成功
      if (response.config.message && response.config.message !== '') {
        // 如果前端有传回文 -> 用前端回文response.config.message
        customMessage(response)
      } else if (
        response.data.status &&
        response.data.status.toString().indexOf('200') === 0
      ) {
        // 如果前端未传回文 -> 用通用回文response.data.message
        if (response.data.message && response.data.message !== '') {
          commonMessage(response)
        }
        // 300开头 -> 数据获取失败
        if (response.data.status.toString().indexOf('300') === 0) {
          errorGetDataMessage(response)
        }
        // 900开头 -> token错误或过期 -> 跳转到登录页 todo 910前端错频
        if (response.data.status.toString().indexOf('900') === 0) {
          errorTokenMessage(response)
          window.location.href = '/#/logout'
        }
      }
    } else if (response.status !== 200) {
      // response.status !== 200 -> 服务器连接失败
      errorConnectMessage(response)
    }
    return Promise.resolve(response)
  },
  // error -> 业务报错
  error => {
    console.error('err' + error)
    const response = error.response
    let message = error.message
    if (response.data && response.data.message) {
      message = response.data.message
    }
    Message({
      message: message,
      type: 'error',
      duration: 5 * 1000
    })
    console.error(message)
    return Promise.reject(error)
  }
)

export {
  service as request
}
