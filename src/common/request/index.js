const axios = require('axios')
const Cookies = require('js-cookie')
const Config = require('../config')

// 实例化 ajax请求对象
const ajaxinstance = axios.create({
  baseURL: Config.apiBaseURL,
  timeout: 10000,
  headers: {
    responseType: 'json',
    'Content-Type': 'application/json; charset=utf-8'
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 添加拦截器，处理 公用请求参数，和通用请求头部
ajaxinstance
  .interceptors
  .request
  .use((config) => {
    // TODO
    let tp = Cookies.get('access_key')

    if (tp) {
      config['headers']['topsession'] = tp
    }
    
    if (config.data) {
      //console.log(JSON.stringify(config.data))
    }

    return config
  }, (error) => {
    Promise.reject(error)
  })

// 请求响应拦截器
ajaxinstance
  .interceptors
  .response
  .use((response) => {
    // TODO
    let {
      data
    } = response
    if (data.status == 'error') {
      if (data.result.error_code == 6001) { // 登录过期
        Cookies.remove('access_key')
        window.location.reload()
      }
    }
    //console.log(JSON.stringify(data))
    return data
  }, (error) => {
    return Promise.reject(error)
  })

module.exports = ajaxinstance 
