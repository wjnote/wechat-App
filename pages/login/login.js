// pages/login/login.js
import {
  login
} from '../../service/login'

Page({
  data: {
    loginid: '',
    password: '',
    registrationId: 1
  },
  // 点击登陆状态
  handleLogin() {
    let axiosData = Object.assign({}, this.data);
    wx.login({
      success: function (res) {
        // code只有五分钟有效期  发送 res.code 到后台换取 openId, sessionKey, unionId
        let code = res.code;
        axiosData.code = code;
        login(axiosData).then(response => {
          let status = response.data.isSuccess;
          let token = response.data.token;
          if (status) {
            wx.setStorageSync('token', token)
            wx.switchTab({
              url: '/pages/index/index'
            })
          } else {
            wx.showToast({
              title: response.data.errmsg,
              icon: 'none',
              duration: 2000,
              mask: true
            });
          }
        });
      }
    });
   
  },
  handleChangeval(e) {
    this.setData({
      loginid: e.detail.value
    })
  },
  handleChangepsw(e) {
    this.setData({
      password: e.detail.value
    })
  }
})