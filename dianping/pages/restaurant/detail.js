// pages/restaurant/detail.js
let app=getApp()

Page({
  data: {
    reviews: [],
    resto: {}
  },
  onLoad: function (options) {
    console.log('options', options);
    const id = options.id;

    const restaurants = new wx.BaaS.TableObject('ben_restaurants');
    const reviews = new wx.BaaS.TableObject('ben_reviews');

    restaurants.get(id).then((res) => {
      console.log('detail res', res);
      this.setData({
        resto: res.data,
      })
    });

    let query = new wx.BaaS.Query();

    query.compare('restaurant_id', '=', id);

    reviews.setQuery(query).find().then((res) => {
      console.log('reviews res', res);
      this.setData({
        reviews: res.data.objects,
      })
    });
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


})