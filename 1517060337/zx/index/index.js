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
      image: "../../images/7.jpg",
      name: "苍蝇",
      last: "昆虫"
    }, {
        image: "../../images/5.png",
      name: "蚊子",
      last: "昆虫"
    }, {
        image: "../../images/9.jpg",
      name: "蜥蜴",
      last: "昆虫"
    }, {
        image: "../../images/2.jpg",
      name: "蟑螂",
      last: "昆虫"
    }, {
        image: "../../images/0.jpg",
      name: "蝴蝶",
      last: "昆虫"
    }, {
        image: "../../images/01.jpg",
      name: "蜜蜂",
      last: "昆虫！"
    }, {
        image: "../../images/02.jpg",
      name: "蜻蜓",
      last: "昆虫"
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

