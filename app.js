//app.js
App({
  onLaunch: function () {
    // wx.login({
    //   success: function (res) {
    //     // code只有五分钟有效期  发送 res.code 到后台换取 openId, sessionKey, unionId
    //     let code = res.code;
    //   }
    // });
    /**
     * 保存在项目中的token值，如果是已经登陆的状态则不用登陆直接跳转
     */
    let token = wx.getStorageSync('token');
    if (token) {
      // wx.switchTab({
      //   url: '/pages/index/index'
      // })
    }

    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})