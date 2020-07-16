// pages/stories/stories.js

const app = getApp();

Page({
  setStories: function (data) {
    // Save reference to page
    let page = this;

	// Take the stories from data passed in
    const stories = data.stories;

    // Update local stories data
    page.setData({
      stories: stories
    });
  },

  getRequestData: function (res) {
    console.log(res);

    const data = res.data;
    page.setStories(data);
  },

  /**
   * Page initial data
   */
  data: {
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
      // Save reference to page
      let page = this;
      //...
      const request = {
        url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
        method: 'GET', // If no method, default is GET
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