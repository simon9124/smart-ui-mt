// debug log
export function debug(method, message) {
  if (process.env.ENV_CONFIG === 'dev') {
    console.debug('========================')
    if (method) {
      console.debug('%cDebug: method', 'font-size:20px;color:blue;', method)
    }
    if (message) {
      console.debug('%cDebug: message', 'font-size:20px;color:blue;', '', message)
    }
    console.debug('========================')
  }
}

// error log
export function error(method, message) {
  console.error('========================')
  if (method) {
    console.error('%cError: method', 'font-size:20px;color:red;', method)
  }
  if (message) {
    console.error('%cError: message', 'font-size:20px;color:red;', '', message)
  }
  console.error('========================')
}
