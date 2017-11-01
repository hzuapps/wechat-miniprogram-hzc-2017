// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: true,
    messages: [{
      image:"/pages/image/t0.png",
      name: "鬼剑士",
      last: "GhostKnight"
    }, {
        image: "/pages/image/t1.png",
        name: "神枪手",
        last: "Gunner"
    }, {
        image: "/pages/image/t2.png",
        name: "格斗家",
        last: "Fighter"
    }, {
        image: "/pages/image/t3.png",
        name: "魔法师",
        last: "Mage"
    }, {
        image: "/pages/image/t4.png",
        name: "圣职者",
        last: "Priest"
    }, {
        image: "/pages/image/t5.png",
        name: "暗夜使者",
        last: "Night elf angel"
    }, {
        image: "/pages/image/t6.png",
        name: "守护者",
        last: "Knight"
    }, {
      image: "/pages/image/t7.png",
      name: "魔枪士",
      last: "Lancer"
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