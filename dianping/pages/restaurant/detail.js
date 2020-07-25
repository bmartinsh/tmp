// pages/restaurant/detail.js
let app=getApp()

Page({
  data: {
    currentUser: {},
    restaurant: {},
    reviews: [],
    ratings: [1, 2, 3, 4, 5],
    rating: 'None',
    meals: [],
  },

  createReview: function(e) {
    console.log('create review', e);
    const content = e.detail.value.content;

    let Reviews = new wx.BaaS.TableObject('ben_reviews');

    let newReview = Reviews.create();

    const data = {
      restaurant_id: this.data.resto.id,
      rating: this.data.rating,
      content: content,
    }

    newReview.set(data);

    newReview.save().then((res) => {
      console.log('save res', res);

      // since you can't push to an array in the
      // page data, we have to save the array
      // and then push the new item and re-set
      // the data.
      const newReviews = this.data.reviews;

      newReviews.push(res.data);

      this.setData({
        reviews: newReviews,
      })
    })
  },
  onRate: function(e) {
    console.log('change rating', e);
    const index = e.detail.value;
    this.setData({
      rating: this.data.ratings[index],
    })
  },

  userInfoHandler(data) {
    wx.BaaS.auth.loginWithWechat(data).then(user => {
        app.globalData.userInfo = user;
        this.setData({
          currentUser: user,
        })
      }, err => {

    })
  },
  onLoad: function (options) {
    this.setData({
      currentUser: app.globalData.userInfo,
    });
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