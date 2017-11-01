//app.js
App({
  Session:null,

  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var that=this;
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success:function(res){
        if(res.code){
          //发起网络请求
          wx.request({
            url: 'https://infoaas.com/data/hzc.json', 
            data:{
              code:res.code
            },
            success:function(json){
              //本地缓存session
              wx.setStorage({
                key:"session",
                data:json.data.session
              }); 
              wx.getStorage({
                key: 'session',
                success: function(res) {
                    that.Session = res.data
                } 
              })

              wx.getUserInfo({
                success: function(res) {
                  var userInfo = res.userInfo
                  var nickName = userInfo.nickName
                  var avatarUrl = userInfo.avatarUrl
                  var gender = userInfo.gender //性别 0：未知、1：男、2：女 
                  var province = userInfo.province
                  var city = userInfo.city
                  var country = userInfo.country
                  console.log(res.userInfo)
                  //把用户信息给后台发送过去
                  wx.request({
                    url:'https://infoaas.com/data/hzc.json',
                  
                    method:'get',
                    data: {
                     nick_name:nickName ,
                     gender: gender,
                     head_img:avatarUrl,
                     country:country,
                     province:province,
                     city:city
                    },
                    header: {
                        'content-type': 'application/json'
                    },
                    success: function(res) {
                      console.log(res.data)
                    }
                  })
                }
              })
            }
          })
        }else{
          console.log("获取用户登录态失败！" + res.errMsg);
        }
      }
    });  
  },
  getUserInfo:function(cb){
    var that = this;
   
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo);

              

            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})

