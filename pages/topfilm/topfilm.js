const url = 'https://api.douban.com/v2/movie/top250'

Page({
  data: {
    text: "Page coming_soon",
    filmlist: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log('onLoad');
    var that = this;
    fetch(url).then(function(response) {
      response.json().then(function (data) {
        that.setData({
          filmlist: data.subjects
        })
      })
    });
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  viewDetail: function(e) {
    var film = e.currentTarget;
    wx.navigateTo({
      url: '../detail/detail?id=' + film.id
    })
  }
})