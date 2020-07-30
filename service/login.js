import request from './http.js';
import config from './config'

export function login(data) {
  return request({
    url: `${config.baseUrl}/login`,
    data: data
  })
}