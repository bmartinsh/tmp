// pages/profile/index.js
Page({

  onRegister: function(event) {
    let page = this
    
    wx.BaaS.auth.register({
      username: username,
      password: password
    }).then(page.getRequestData).catch(function(err) {
      // HError
    })
  },

  /**
   * Page initial data
   */
  data: {
    currentUser: null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {


    
  },
userInfoHandler(data) {
  wx.BaaS.auth.loginWithWechat(data).then(user => {
    console.log(user);
    // user 包含用户完整信息，详见下方描述
  }, err => {
    // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
  })
},
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})