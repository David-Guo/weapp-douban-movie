const url = "https://api.douban.com/v2/movie/subject/"
var sample = {
  rating: {
    max: 10,
    average: 8.5,
    stars: "45",
    min: 0
  },
  reviews_count: 140,
  wish_count: 10325,
  douban_site: "",
  year: "1991",
  images: {
    small: "https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p1910909085.jpg",
    large: "https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910909085.jpg",
    medium: "https://img3.doubanio.com/view/movie_poster_cover/spst/public/p1910909085.jpg"
  },
  alt: "https://movie.douban.com/subject/1291844/",
  id: "1291844",
  mobile_url: "https://movie.douban.com/subject/1291844/mobile",
  title: "终结者2：审判日",
  do_count: null,
  share_url: "https://m.douban.com/movie/subject/1291844",
  seasons_count: null,
  schedule_url: "",
  episodes_count: null,
  countries: [
    "美国",
    "法国"
  ],
  genres: [
    "动作",
    "科幻"
  ],
  collect_count: 167051,
  casts: [
    {
      alt: "https://movie.douban.com/celebrity/1035643/",
      avatars: {
        small: "https://img1.doubanio.com/img/celebrity/small/989.jpg",
        large: "https://img1.doubanio.com/img/celebrity/large/989.jpg",
        medium: "https://img1.doubanio.com/img/celebrity/medium/989.jpg"
      },
      name: "阿诺·施瓦辛格",
      id: "1035643"
    },
    {
      alt: "https://movie.douban.com/celebrity/1027821/",
      avatars: {
        small: "https://img1.doubanio.com/img/celebrity/small/45249.jpg",
        large: "https://img1.doubanio.com/img/celebrity/large/45249.jpg",
        medium: "https://img1.doubanio.com/img/celebrity/medium/45249.jpg"
      },
      name: "琳达·汉密尔顿",
      id: "1027821"
    },
    {
      alt: "https://movie.douban.com/celebrity/1022600/",
      avatars: {
        small: "https://img3.doubanio.com/img/celebrity/small/20874.jpg",
        large: "https://img3.doubanio.com/img/celebrity/large/20874.jpg",
        medium: "https://img3.doubanio.com/img/celebrity/medium/20874.jpg"
      },
      name: "爱德华·福隆",
      id: "1022600"
    },
    {
      alt: "https://movie.douban.com/celebrity/1041135/",
      avatars: {
        small: "https://img3.doubanio.com/img/celebrity/small/57821.jpg",
        large: "https://img3.doubanio.com/img/celebrity/large/57821.jpg",
        medium: "https://img3.doubanio.com/img/celebrity/medium/57821.jpg"
      },
      name: "罗伯特·帕特里克",
      id: "1041135"
    }
  ],
  current_season: null,
  original_title: "Terminator 2: Judgment Day",
  summary: "上一部中，超级电脑“天网”阻止人类抵抗领袖约翰·康纳诞生的行动失败，时隔13年后，在“审判日”到来之前，“天网”派出了更加先进的生化机器人T-1000（罗伯特·帕特里克 饰）从公元前2029年回到洛杉矶追杀已经长大的约翰，与此同 时，约翰也派出了机器人T-800（阿诺· 施瓦辛格 饰）回去保护年幼的自己。 此时，萨拉·康纳（琳达·汉密尔顿 饰）因为怪异的言行而住进了精神疗养院，约翰则和养父母住在一起，行为叛逆。T-800找到他们，在逃避T-1000追杀过程中，获得了二人的信任。 为了改变未来的历史，挽救人类的命运，萨拉、约翰和T-800 Model 101找到了“天网”之父，迈尔斯·戴森（乔·莫顿 饰），说服他销毁一切有关“天网”的资料，此时，警察和T-1000同时赶来，他们陷入了多方争斗中。©豆瓣",
  subtype: "movie",
  directors: [
    {
      alt: "https://movie.douban.com/celebrity/1022571/",
      avatars: {
        small: "https://img3.doubanio.com/img/celebrity/small/33715.jpg",
        large: "https://img3.doubanio.com/img/celebrity/large/33715.jpg",
        medium: "https://img3.doubanio.com/img/celebrity/medium/33715.jpg"
      },
      name: "詹姆斯·卡梅隆",
      id: "1022571"
    }
  ],
  comments_count: 13857,
  ratings_count: 119596,
  aka: [
    "终结者2",
    "终结者2：末日审判",
    "终结者续集：世界末日",
    "魔鬼终结者2",
    "未来战士2",
    "T2"
  ]
};

Page({
  data: {
    text: "Page detail",
    film: sample
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options);
    var that = this;
    fetch(url + options.id).then(function (response) {
      response.json().then(function (data) {
        that.setData({
          film: data
        })
      })
    })
  },
  onReady: function () {
    // 页面渲染完成
    var that = this
    wx.setNavigationBarTitle({
      title: that.data.film.title
    })
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})