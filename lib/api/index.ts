import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { config } from '@/config'
const axiosConfig: AxiosRequestConfig = {
  baseURL: config.BASE_URL,
  //timeout: 5 * 1000, // 请求超时时间设置
  // crossDomain: true,
  // withCredentials: true, // Check cross-site Access-Control
  // 定义可获得的http响应状态码
  // return true、设置为null或者undefined，promise将resolved,否则将rejected
  // validateStatus(status) {
  //   return status >= 200 && status < 510
  // },
}

const _axios: AxiosInstance = axios.create(axiosConfig)

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url: string, data = {}, params = {}) {
  return _axios({
    method: 'post',
    url,
    data,
    params,
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url: string, params = {}) {
  return _axios({
    method: 'get',
    url,
    params,
  })
}
