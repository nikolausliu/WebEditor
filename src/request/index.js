import qs from 'qs'
import axios from 'axios'

const isDev = process.env.NODE_ENV !== 'production'
const localUrl = 'http://192.168.31.116:3000'
const aliyunUrl = 'http://47.102.149.181:3001'
axios.defaults.baseURL = isDev ? aliyunUrl : aliyunUrl

axios.interceptors.request.use(
  config => {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  res => {
    const { data, status } = res
    if (status !== 200) {
      return Promise.reject(data)
    }
    return data
  },
  error => {
    return Promise.reject(error)
  }
)

export default {
  baseUrl: axios.defaults.baseURL,
  uploadUrl: 'http://47.102.149.181:3002/api/qiniu/upload',
  get(url, params = {}, options = {}) {
    const temp = Object.assign({}, { params: params }, options)
    return axios.get(url, temp)
  },
  post(url, data = {}, options = {}) {
    return axios.post(
      url,
      qs.stringify(data),
      Object.assign(
        {},
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
        options || {}
      )
    )
  },
  axios(data = {}) {
    return axios(data)
  },
}
