// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: false,
    messages: [ {
      image:"/pages/example/images/tea1.png",
      name: "绿茶",
      last: "绿茶种类",
    }, {
      image:"/pages/example/images/tea2.png",
      name: "白茶",
      last: "白茶种类",
    }, {
      image: "/pages/example/images/tea3.png",
      name: "普洱茶",
      last: "普洱茶种类"
    }, {
      image: "/pages/example/images/tea4.png",
      name: "功夫茶",
      last: "功夫茶种类"
    }, {
      image: "/pages/example/images/tea5.png",
      name: "红茶",
      last: "红茶种类"
    }, {
      image: "/pages/example/images/tea6.png",
      name: "花茶",
      last: "花茶种类！"
    } ,{
      image: "/pages/example/images/tea7.png",
      name: "乌龙茶",
      last: "乌龙茶种类！"
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