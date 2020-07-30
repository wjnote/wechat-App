// pages/index/index.js
import {getWeather,getTrafficControl } from '../../service/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
      time: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(getWeather)
    getWeather().then(response=>{
      // console.log('天气...',response)
    })
    // getTrafficControl().then(response=>{
    //   console.log('限行',response)
    // })
  },
  handleQuerypProgress:function(){
    console.log(111)
  }
})