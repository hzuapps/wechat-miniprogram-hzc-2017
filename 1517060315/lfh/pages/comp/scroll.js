// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: true,
    messages: [{
      image:"/pages/image/t0.jpg",
      name: "Giotto",
      last: "一代"
    }, {
        image: "/pages/image/t1.jpg",
        name: "Sivnora",
        last: "二代"
    }, {
        image: "/pages/image/t2.jpg",
        name: "维多  ",
        last: "三代"
    }, {
        image: "/pages/image/t3.jpg",
        name: "不详",
        last: "四代"
    }, {
        image: "/pages/image/t4.jpg",
        name: "不详",
        last: "五代"
    }, {
        image: "/pages/image/t5.jpg",
        name: "Simora",
        last: "六代"
    }, {
      image: "/pages/image/t6.jpg",
      name: "Fabio",
      last: "七代"
    }, {
      image: "/pages/image/t7.jpg",
      name: "Daniela",
      last: "八代"
    }, {
      image: "/pages/image/t8.jpg",
      name: "Timoteo",
      last: "九代"
    }, {
        image: "/pages/image/t9.jpg",
        name: "沢田纲吉",
        last: "十代"
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