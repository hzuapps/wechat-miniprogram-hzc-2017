//index.js
//获取应用实例
// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: false,
    messages: [{
      image:"../../images/1.jpg",
      name: "苹果",
      last: "123456789"
    }, {
        image: "../../images/4.jpg",
      name: "香蕉",
      last: "18745745452"
    }, {
        image: "../../images/2.jpg",
      name: "雪梨",
      last: "19245774565"
    }, {
        image: "../../images/3.jpg",
      name: "荔枝",
      last: "17454457744！"
    }, {
        image: "../../images/5.jpg",
      name: "龙眼",
      last: "17724546584"
    }, {
        image: "../../images/7.jpg",
      name: "榴莲",
      last: "18897974454！"
    }, {
        image: "../../images/6.jpg",
      name: "石榴",
      last: "15474574745"
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

