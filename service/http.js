let token = wx.getStorageSync('token');

export default function (options) {
  const header = {token: token, ...options.header};
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      header: header,
      data: options.data || {},
      success: function (response) {
        resolve(response)
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function (callback) {
  var Promise = this.constructor;
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(
        function () {
          return value;
        }
      );
    },
    function (reason) {
      Promise.resolve(callback()).then(
        function () {
          throw reason;
        }
      );
    }
  );
}
