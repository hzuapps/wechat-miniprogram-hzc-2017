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
      name: "达拉斯",
      last: "Dallas"
    }, {
        image: "/pages/image/t1.jpg",
        name: "沃尔夫",
        last: "Wolf"
    }, {
        image: "/pages/image/t2.jpg",
        name: "钱恩斯",
        last: "Chains"
    }, {
        image: "/pages/image/t3.jpg",
        name: "休斯顿",
        last: "Mage"
    }, {
        image: "/pages/image/t4.jpg",
        name: "约翰·威克",
        last: "John Wick"
    }, {
        image: "/pages/image/t5.jpg",
        name: "霍斯顿",
        last: "Hoxton"
    }, {
        image: "/pages/image/t6.jpg",
        name: "克洛芙",
        last: "Clover"
    }, {
      image: "/pages/image/t7.jpg",
      name: "德拉甘",
      last: "Dragan"
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