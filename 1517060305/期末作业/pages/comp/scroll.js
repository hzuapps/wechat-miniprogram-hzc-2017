// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: false,
    messages: [{
      image:"/pages/images/剑士.jpg",
      name: "剑士",
      last: "剑士的剑法变幻莫测，可以格挡或反制敌人的攻击，也能应付远距离的敌人，是可以应付所有情况的最佳职业。"
    }, {
        image: "/pages/images/刺客.jpg",
        name: "刺客",
        last: "刺客身手敏捷，技能种类繁多。可以使用短刀，展开快速攻击。可以隐身后偷偷接近敌人或者利用陷阱扰乱敌人。"
    }, {
        image: "/pages/images/气功.jpg",
        name: "气功",
        last: "气功师可以利用内力，施展招式华丽、威力强大的气功攻击。擅长对付远处的敌人，并可以同时控制多个对象。"
    }, {
        image: "/pages/images/灵剑.jpg",
        name: "灵剑",
        last: "灵族慢慢领悟到，单纯依靠内功是无法彻底抵御魔族的。在人族和天族的指引下，他们来到一处僻静的山林开始修炼剑士的武学。"
    }, {
        image: "/pages/images/拳师.jpg",
        name: "拳师",
        last: "拳师可以使用拳套，施展威力强大的连续攻击。擅长反击和压制敌人，可以有效地组织起反手反击攻势，需要自身快速的反应力来攻击敌人。"
    }, {
        image: "/pages/images/召唤.jpg",
        name: "召唤",
        last: "召唤师可以和召唤兽一起，展开各种攻击。召唤师可以用自然之力让敌人变得虚弱，召唤兽则可以趁机发动攻击，是一个体现相互合作的职业。"
    }, {
        image: "/pages/images/力士.jpg",
        name: "力士",
        last: "力士拥有出众的体力与坚韧的力量，在任何情况下都能持续战斗。可以使用巨大的斧头，开威力强大的近身攻击。可以把敌人举起来当作盾牌抵挡敌人的攻击。"
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