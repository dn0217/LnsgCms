import axios from 'axios'
import config from './config'

// Request 拦截器
axios.interceptors.request.use(
  reConfig => {
    return reConfig
  },
  error => {
    return Promise.reject(error)
  }
)

// Response 拦截器
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return error
  }
)

export default {
    //验证登录
    postLogin(param) {
      return axios.post('/users', param)
    },

    addActicle(param){
      return axios.post('/acticle/addActicle', param)
    }

}

