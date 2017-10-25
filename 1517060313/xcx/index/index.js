//index.js
//获取应用实例
// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: true,
    messages: [{
    image:"../../images/2.jpg",
    name: "新华社评论员：深刻把握“分两步走”的新目标",
      last: "新闻"
    }, {
        image: "../../images/0.jpg",
        name: "中国计划未来继续扩大南海军力部署？外交部回应",
        last: "新闻"
    }, {
        image: "../../images/1.jpg",
        name: "C919圆国人“大飞机梦”：打造航空产业发展集群",
        last: "新闻"
    }, {
        image: "../../images/4.jpg",
        name: "海底“植树造林”中国科学家在南海种珊瑚",
        last: "新闻"
    }, {
        image: "../../images/5.jpg",
        name: "重大突破 我国物联网技术TRAIS-X成国际标准",
        last: "新闻"
    }, {
        image: "../../images/6.jpg",
        name: "中国打通世界最高海拔高速路隧道",
        last: "新闻"
    }, {
        image: "../../images/7.jpg",
        name: "西沙守岛水兵突发重病 南海舰队“神操作”转运",
        last: "新闻"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onEnd: function () {
    console.log("onEnd")
    var that = this;
    var data = that.data;
    that.setData({
      isEnd: true /*,
      messages: data.messages.concat([{
        name: "Tom",
        last: "Hello!"
      }, {
        name: "john",
        last: "yes."
      }]) */
    });

  }
})

