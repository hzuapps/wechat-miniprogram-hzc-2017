// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "Hello"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /*
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
    */
    wx.request({
      url: 'https://infoaas.com/data/hzc.json', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          text: res.data.name,
          paragh: "任课老师是：" + res.data.teacher + " 2017" 
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

    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
})