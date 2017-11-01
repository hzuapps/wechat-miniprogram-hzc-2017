// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: true,
    messages: [{
      image:"/pages/image/2.jpg",
      name: "卡萨丁"
      
    }, {
        image: "/pages/image/3.jpg",
        name: "金克斯",
    }, {
        image: "/pages/image/4.jpg",
        name: "薇恩",
    }, {
        image: "/pages/image/6.jpg",
        name: "格雷弗斯",
    }, {
        image: "/pages/image/5.jpg",
        name: "戴安娜",
    }, {
        image: "/pages/image/7.jpg",
        name: "阿狸",
    }, {
        image: "/pages/image/8.jpg",
        name: "布里兹",
        
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
        last: "おはよ!"
      }, {
        name: "john",
        last: "yes."
      }]) */
    });

  }
})