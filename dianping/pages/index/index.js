const app = getApp()
// Getting the data from App.json with the globalData Storage
console.log('userData', app.globalData.userInfo);


Page({
  data: {
    restaurants: []
  },
  
  onLoad: function () {
    const restaurants = new wx.BaaS.TableObject('ben_restaurants');

    restaurants.find().then((res) => {
      console.log('res', res); 
      this.setData({
        restaurants: res.data.objects
      })
    })
  },

  showResto: function(e) {
    console.log('e', e);
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/restaurant/detail?id=${id}` 
    })
  },
  
})
