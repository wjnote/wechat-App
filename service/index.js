import request from './http.js';
import config from './config'
import  { formatTime } from '../utils/utils'

// 查询天气
export function getWeather(data) {
  return request({
    url: `${config.baseUrl}/chapp/api/business/homePageAction!weatherQuery.do`,
    data: data || {}
  })
};


// 查询今日限行 默认为当前日期
export function getTrafficControl(data){
  let newTime =formatTime(new Date(), 'yyyy-MM-dd');
  let prams = {time: newTime, ...data};
  return request({
    url:`${config.baseUrl}/chapp/api/business/homePageAction!todaysLimit.do`,
    data:prams
  })
}