// pages/story/story.js

let app = getApp()

Page({
  
  deVoteComment(event) {
    let page = this

    let data = event.currentTarget.dataset;
    let votes = data.votes;
    let new_votes = { votes: votes - 1 }

    // make a PUT request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'PUT',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above
      data: new_votes,

      success(res) {
        // new comment from response
        let new_comment = res.data
      
        // all the page comments
        let comments = page.data.comments
      
        // find the comment from page comments to update based on unique id
        let comment = comments.find(comment => comment._id == new_comment.id)
      
        // update comment
        comment.votes = new_comment.votes
      
        // update the page comments
        page.setData({comments: comments})
      }
    });
  },

  voteComment(event) {
    let page = this

    let data = event.currentTarget.dataset;
    let votes = data.votes;
    let new_votes = { votes: votes + 1 }

    // make a PUT request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'PUT',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above
      data: new_votes,

      success(res) {
        // new comment from response
        let new_comment = res.data
      
        // all the page comments
        let comments = page.data.comments
      
        // find the comment from page comments to update based on unique id
        let comment = comments.find(comment => comment._id == new_comment.id)
      
        // update comment
        comment.votes = new_comment.votes
      
        // update the page comments
        page.setData({comments: comments})
      }
    });
  },

  deleteComment(event) {
    let page = this;
    let data = event.currentTarget.dataset;

    // make a DELETE request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'DELETE',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above

      success() {
        // no need for response data
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  },
  /**
   * Page initial data
   */
  data: {
    // Array linked to the getRequestData
    story: {},
    // Array linked to getRequestData 2
    comments: []
  },

  getRequestData: function (res) { 
    this.setData({ 
      // we get now from Data not Object anymore (comparing to index.js)
      story: res.data
    });
  },
  getRequestData2: function (res) { 
    this.setData({ 
      // We get array from Comments Table deeper with objects attributes
      comments: res.data.objects
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
      url: `https://cloud.minapp.com//oserve/v1/table/84988/record/${id}`, 
      method: 'GET',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      success: page.getRequestData
    }
    wx.request(request);
    
    //  A new request to collect commnets linked to the ID of the story 
     let comrequest = {
       // We are now calling with the ID for comments
       url: `https://cloud.minapp.com/oserve/v1/table/85188/record/`, 
       method: 'GET',
       data: {
          where: { // filtering comments for a specific story
            "story_id": { "$eq": id } // story id
          }
        },
       header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
       // Success will push data using the function get RequestData2
       success: page.getRequestData2
     }
    wx.request(comrequest);

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