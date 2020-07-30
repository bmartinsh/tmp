//app.js
App({
  onLaunch: function() {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    let clientID = 'a0cae729d2cc3f2f52e1'  // 应用名称: [[app_name]]
    wx.BaaS.init(clientID);

    wx.BaaS.auth.loginWithWechat().then(user => {
      this.globalData.userInfo = user;
      wx.setStorageSync('userInfo', user);
      console.log('logged in from app.js', user);
    }, err => {
      console.log('failed to login');
    })
  },
  globalData: {
    userInfo: wx.getStorageSync('userInfo') || null,
  }
})

// wx9974524d2ed37a13

// Alex ClientID a0cae729d2cc3f2f52e1  Ben Client ID 41fd7c463bf678098b55