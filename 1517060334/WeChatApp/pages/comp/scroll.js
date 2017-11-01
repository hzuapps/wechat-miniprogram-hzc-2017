// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: true,
    messages: [{
      image:"/pages/image/a1.jpg",
      name: "艾斯",
      
    }, {
        image: "/pages/image/a2.jpg",
        name: "索罗",
       
    }, {
        image: "/pages/image/a3.jpg",
        name: "汉库克",
        
    }, {
        image: "/pages/image/a4.jpg",
        name: "路飞",
       
    }, {
        image: "/pages/image/a5.jpg",
        name: "布鲁克",
        
    }, {
        image: "/pages/image/a6.jpg",
        name: "娜美",
       
    }, {
        image: "/pages/image/a7.jpg",
        name: "妮可罗宾",
       
    }, {
      image: "/pages/image/a8.jpg",
      name: "乌索普",
     
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