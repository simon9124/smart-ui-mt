import { Message } from 'element-ui'

export function customMessage(response) {
  // 数据获取成功，前端有传回文
  return Message({
    message: response.config.message,
    type: 'success',
    duration: 5 * 1000
  })
}

export function commonMessage(response) {
  // 数据获取成功，前端未传回文
  return Message({
    message: response.data.message,
    type: 'success',
    duration: 5 * 1000
  })
}

export function errorGetDataMessage(response) {
  // 数据获取失败
  return Message({
    message: response.data.message,
    type: 'warning'
  })
}

export function errorMsg(message) {
  // 数据获取失败
  return Message({
    message: message,
    type: 'error',
    duration: 5 * 1000
  })
}

export function errorTokenMessage(response) {
  // token错误
  return Message({
    message: response.data.message,
    type: 'error'
  })
}

export function errorConnectMessage(response) {
  // 连接失败
  return Message({
    message: response.data.message,
    type: 'error',
    duration: 5 * 1000
  })
}
