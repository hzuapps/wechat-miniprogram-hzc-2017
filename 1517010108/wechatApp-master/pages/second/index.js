
Page({
  data: {
    array: ['5分钟', '10分钟', '15分钟', '20分钟'],
    index:0
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
})