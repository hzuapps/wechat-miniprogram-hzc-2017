// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: false,
    messages: [{
      name: "玩家:杰西卡",
      last: "排名:No1",
      tupian: "../images/1.jpg"
    }, {
        name: "玩家:莫妮卡",
        last: "排名:No2",
        tupian: "../images/5.jpg"
    }, {
        name: "玩家:阿比盖尔",
        last: "排名:No3",
        tupian: "../images/2.jpg"
    }, {
        name: "玩家:艾达",
        last: "排名:No4",
        tupian: "../images/3.jpg"
    }, {
        name: "玩家:阿德莱德",
        last: "排名:No5",
        tupian: "../images/4.jpg"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.dir(getApp())
    if (getApp().globalData.logincg==0){
      wx.redirectTo({
        url: '../login/login'
      })
    }
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