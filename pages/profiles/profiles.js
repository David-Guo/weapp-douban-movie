var app = getApp()
Page({
  data: {
    text: "Page profiles",
    infoList: [{
      text: "我的电影票"
    }, {
        text: "我的兑奖券"
      }, {
        text: "我的优惠券"
      }, {
        text: "兑换优惠券"
      }, {
        text: "想看、看过的电影"
      }],
    other: [{
      text: "豆瓣电影Top250"
    }, {
        text: "猜你会喜欢的电影"
      }],
    userInfo: {}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    });
    console.log(that.data.userInfo)
  },
  bindViewTap: function (e) {
    var film = e.currentTarget;
    wx.navigateTo({
      url: '../topfilm/topfilm'
    })
  }
})