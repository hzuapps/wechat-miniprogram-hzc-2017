// pages/open3/open3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;

    wx.request({
      url: 'https://infoaas.com/data/sprite/json/' + id + '.json', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          message: res.data
        });
      }
    })
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  }
})

