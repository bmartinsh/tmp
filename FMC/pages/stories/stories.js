// pages/stories/stories.js

Page({


  /**
   * Page initial data
   */
  data: {
    stories: [
      { content: "Building 1 MP is fun!!! FMC.", name: "Yinghui" },
      { content: "Building 2 MP is fun!!! FMC.", name: "Craig" },
      { content: "Building a MP is fun!!! FMC.", name: "Denis" },
      { content: "Building a MP is fun!!! FMC.", name: "Ana" },
      { content: "Building a MP is fun!!! FMC.", name: "Alex" },
  
    ]
  },

  clickMe: function () {
    this.setData({ text: "Hello World" })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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