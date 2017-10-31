// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "我的作业"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'formData',
      success: function (res) {
        console.log(res.data)
        that.setData({
          text: res.data.text,
          paragh: res.data.paragh
        });
      }
    })
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

  doSubmit: function (e) {
    console.dir(e)
    var that = this;
    var text = e.detail.value.text;
    var paragh = e.detail.value.paragh;

    wx.setStorage({
      key: "formData",
      data: {
        text: text,
        paragh: paragh
      }
    })
  }
})