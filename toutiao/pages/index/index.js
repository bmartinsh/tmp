//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    stories: []
  },

  newPage(event) {
    let data = event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/new/new'
    })
  },

  showStory(event) {
    let data = event.currentTarget.dataset;
    let id = event.currentTarget.dataset.id;

    wx.navigateTo({
    
      url: `/pages/story/story?id=${id}`
    });
  },

  getRequestData: function (res) { 
    this.setData({ 
      stories: res.data.objects
    });
  },
  onLoad: function () {
    let tableName = 'stories'

    let Story = new wx.BaaS.TableObject('story');
    console.log(Story)
    
    // To uncomment to see all stories
    Story.find().then((res) => {
      console.log('res', res);
      this.setData({
        stories: res.data.objects

        // // Here to see one story with function GET
        // Story.get('5f16df23e1b0574b06eef6dc').then((res) => {
        //   console.log('res', res);
        //   this.setData({
        //     stories: res.data.objects

      })
    })
    
  // }),
    

      // let page = this;
      // const request = {
      //   url: `https://cloud.minapp.com//oserve/v1/table/84988/record/`, 
      //   method: 'GET',
      //   header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      //   success: page.getRequestData
      // }
      // wx.request(request);
  },

  })
