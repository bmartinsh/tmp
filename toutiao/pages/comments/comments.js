// pages/story/story.js

let app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    story: []
  },

  getRequestData: function (res) { 
    this.setData({ 
      // we get now from Data not Object anymore (comparing to index.js)
      story: res.data
    });
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;
    let id = options.id
    let request = {
      // We are now calling with the ID
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${id}`, 
      method: 'GET',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      success: page.getRequestData
    }
    wx.request(request);

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