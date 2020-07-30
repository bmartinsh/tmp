// pages/restaurant/detail.js
const app=getApp()

Page({
  data: {
    currentUser: {},
    restaurant: {},
    reviews: [],
    ratings: [1, 2, 3, 4, 5],
    rating: 'None',
    meals: [],
    points: [],
  },


  onLoad: function (options) {
    this.setData({
      currentUser: app.globalData.userInfo,
    });

    const restaurants = new wx.BaaS.TableObject('ben_restaurants');
    const reviews = new wx.BaaS.TableObject('ben_reviews');
    const meals = new wx.BaaS.TableObject('ben_meals');

    restaurants.get(options.id).then((res) => {
      this.setData({
        restaurant: res.data,
      })
    });

    let query = new wx.BaaS.Query();
    query.compare('restaurant_id', '=', options.id);
    reviews.setQuery(query).find().then((res) =>{
      this.setData({
        reviews: res.data.objects,
      })
    })
    // we don't need to create another query, because the
    // one above already works for us
    meals.setQuery(query).find().then((res) => {
      this.setData({
        meals: res.data.objects,
      })
    });
  },
  createOrder: function(e) {

    const mealPoints = e.currentTarget.dataset.points;
    const mealId = e.currentTarget.dataset.id;
    let Orders = new wx.BaaS.TableObject('ben_orders');

    let newOrder = Orders.create();

    const orderData = {
      quantity: 1,
      meal_id: mealId, 
      points: mealPoints
    };

    newOrder.set(orderData);

    newOrder.save().then((res) => {
      wx.showToast({
        title: 'Order Sent!',
        icon: 'success',
        duration: 2000,
        mask: true,
      });
      let currentUser = this.data.currentUser;
      
    })
  },
  createReview: function(e) {
    console.log('create review', e);
    const content = e.detail.value.content;

    let reviews = new wx.BaaS.TableObject('ben_reviews');

    let newReview = reviews.create();

    const data = {
      restaurant_id: this.data.restaurant.id,
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