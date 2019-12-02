import axios from "axios"
import Qs from "qs"

const $axios = axios.create({
  // baseURL: 'http://casa.herogame.com',
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 30000,
  transformRequest: [function (data) {
    return Qs.stringify(data)
  }]
})

// request拦截器
$axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  })

// respone拦截器
$axios.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default $axios 