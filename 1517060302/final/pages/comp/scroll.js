// pages/comp/scroll.js
var base64 = require("../example/images/base64");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isEnd: false,
    messages: [{
      
      image:"/pages/example/images/gaoda01.jpg",
      name: "高达SEED",
      last: "简介：《机动战士高达SEED》是高达系列在2002年至2003年度放映的动画。续作为《机动战士高达SEED DESTINY》在2004年播放。因各具魅力的角色，明星云集的声优阵容和精彩激烈的战斗场面深受广大动漫迷们的喜爱。与以往注重战争心理描写不同，本剧使用大量剧情描述几位主角间的情感纠葛，因而吸引一批从未看过高达的同好，引发高达系列的剧烈变化。"
    }, {
      image: "/pages/example/images/fate01.jpg",
      name: "FATE系列",
      last: "简介：《Fate/stay night》是由TYPE-MOON于2004年1月30日发售的PC平台文字冒险游戏，也是TYPE-MOON商业化后初次亮相的作品。2006年1月播放动画版。"
    }, {
      image: "/pages/example/images/xlt01.jpg",
      name: "Charlotte",
      last: "简介：《Charlotte（夏洛特）》是一部由游戏制作公司Key与ANIPLEX联合企划、P.A.WORKS制作的日本原创动画，也是麻枝准自2010年的《Angel Beats!》以来时隔五年再次参与剧本创作的动画。放送之前特番《Charlotte～新的“命运”的开始～》于2015年6月20日放送，在6月29日则放送有纪念特番。电视动画于2015年7月4日首播，全13话，另有TV未放送的特别篇授予BD&DVD第7卷中。"
    }, {
      image: "/pages/example/images/bg01.jpg",
      name: "冰菓",
      last: "简介：电视动画《冰菓》改编自日本推理小说家米泽穗信原作的《古典部系列》小说，以该系列的第1部《冰菓》为标题。2011年11月29日，在京都动画官方网站内，宣布了《冰菓》TV动画化的决定"
    }, {
      image: "/pages/example/images/fplj01.jpg",
      name: "来自风平浪静的明天",
      last: "简介：《来自风平浪静的明天》是由动画制作公司P.A.WORKS与漫画杂志《电击大王》合作的跨媒体企划，以陆地上与大海中进行着交流的世界为舞台，描写五位中学生和两个小学生在成长过程中经历恋爱、友情、亲情等的治愈故事。"
    }, {
        image: "/pages/example/images/blzc01.jpg",
        name: "玻璃之唇",
        last: "简介：《玻璃之唇》由动画制作公司P.A.WORKS推出原创动画。于2014年7月3日首播，全13话。标题来自于“玻璃”和“唇”的组合词。该作的舞台设立在了福井县坂井市三国町。"
    }, {
      image: "/pages/example/images/air01.jpg",
      name: "AIR",
      last: "简介：故事的主题是“希望与传承”，讲述了一个跨越千年的翼人传说。一位懂“法术”的、以表演人偶为生的青年国崎往人，一天来到一个海边小镇，遇上了神尾观铃。国崎往人和他的祖先们一直都在寻找一位在天空中有翼的女孩子，而在和观铃一路相处之下，发现观铃可能就是他要寻找的女孩子……"
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