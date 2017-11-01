var app = getApp();
var sp='';
var tem='';
var ajax=[];
var speakarr=[
        {name:"me",   say:"今天一起去看电影吧",path:'',model:''},
        {name:"other",say:"不要",path:'',model:''}
 ];

//专为闹闹钟确定设计的变量
var alertData={
    remind_date:'',
    remind_time:'',
    remind_content:''
};

//为闹钟计算存在的全局变量
var alertJs={
    id_notice:'',
    prior_notice:'',
    repeat_notice:''
};

Page({
  //页面初始化数据
  data: { 
      prior_notice: ['不提醒','5分钟', '10分钟', '15分钟'],
      prior_notice_index:0,
      Repeat_notice: [ '不重复','2次', '3次'],
      Repeat_notice_index:0,
      head_other: 'http://v1.qzone.cc/avatar/201407/01/12/53/53b23ebb14c27312.jpg%21200x200.jpg',
      head_me: 'http://p1.gexing.com/G1/M00/C7/73/rBACE1IgR_PBIieMAAAfAWtb1fA891_200x200_3.jpg',
      speak:speakarr,
      sendicon:'icon-audio',
      ipt:true,
      clear:'',
      scrollTop:'10000',
      alert:'http://p1.bqimg.com/580164/ad0d89583b4c13d3t.jpg',
      select:'http://p1.bqimg.com/580164/a8bd6a89f2cc98aat.jpg',
      clockSave:"确定"
  },
//提前时间下拉框
  bindNoticeChange: function(e) {
    alertJs.prior_notice=e.detail.value;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      prior_notice_index: e.detail.value
    })
  },

  //重复次数下拉框
  bindRepeatChange: function(e) {
    alertJs.repeat_notice=e.detail.value;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
     Repeat_notice_index: e.detail.value
    })
  },

  //调用自己微信头像
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
      })
    })
  },


//语音与输入切换
  changeico:function(){
    if(this.data.sendicon=='icon-audio'){
        this.setData({
          sendicon:'icon-jianpan',
          ipt:false
        })
    }else{
        this.setData({
          sendicon:'icon-audio',
          ipt:true
        })
    }
  },

//输入文字时，将文字取出，放置全局变量中
  speakchange:function(e){
    sp = e.detail.value;
  },

//点击发送，推入new的data中的speakarr中，并且setData
  dosend:function(){
    var _that=this;
    if(sp!=""){
        var count = speakarr.length;
        var newsp={name:'me',   say:sp,  path:''};
        speakarr.push(newsp);
        this.setData({clear:'  ',scrollTop:'1000000'});//如果不改变clearclear，那么下边clear他不会执行
        this.setData({speak:speakarr, clear:' '});
        this.setData({scrollTop:'10000000'});
       


        wx.request({
          url:  'https://infoaas.com/data/hzc.json',
          method:'get',
          data: {
            content: sp,
            session:app.Session

          },
          header: {
              'content-type': 'application/json'
          },
          success: function(res) {
              var str='';
              var says='';
              if(res.data.status!=0){
                console.log(res.data.info)
                  alertJs.id_notice=res.data.info.id;
                  alertData.remind_date=res.data.info.remind_date;
                  alertData.remind_time=res.data.info.remind_time;  
                  alertData.remind_content= res.data.info.remind_content;              
                  str="知道了！";
                  says={name:"other",say:str,path:'',model:'ok'};
              }else{
                str="你说啥？";
                says={name:"other",say:str,path:'',model:''};
              }
            
             var newrsp=says;
             speakarr.push(newrsp);
             sp='';
             _that.setData({speak:speakarr});
             _that.setData({scrollTop:'100000000'});
          }
        })

        



    }else{
      this.setData({ clear:' '});
       wx.showToast({
        title: '请输入文字',
        icon: 'success',
        duration: 1500
      });
    }
    
  },
  
  formSubmit: function(e) {
    //console.log('form数据为：', e.detail.value)
    var _that =this;
    

    if(_that.data.clockSave!="已完成"){
          wx.request({
          
            url: 'https://infoaas.com/data/hzc.json',
              method:'get',
              data: {
                        session:app.Session,
                        "touser": "",  
                        "template_id": "jbCnftdaCc58ngsi9-FMqgfkPWecZ2jL_9uSHiCH4Ts", 
                        "page": "",          
                        "form_id": e.detail.formId,         
                        "data": {
                            "keyword1": {
                                "value": "339208499", 
                                "color": "#173177"
                            }, 
                            "keyword2": {
                                "value": "2017年11月11日 12:30", 
                                "color": "#173177"
                            }, 
                            "keyword3": {
                                "value": "惠州经济职业技术学院", 
                                "color": "#173177"
                            } , 
                            "keyword4": {
                                "value": "惠州市惠城区马安镇", 
                                "color": "#173177"
                            } 
                        },

                      
              },
              header: {
                  'content-type': 'application/json'
              },
              success: function(res) {
                console.log(res);
              //下边代码为：发给后台，并出现完成的闹钟框
                //传给后台
                  var priorArr=[
                    {key:'',value:0},
                    {key:0,value:0},
                    {key:1,value:5},
                    {key:2,value:10},
                    {key:3,value:15}
                  ];
                  var repeatArr=[
                    {key:'',value:0},
                    {key:0,value:0},
                    {key:1,value:2},
                    {key:2,value:3}
                  ];

                  var prior='';
                  var repeat='';

                  for(var i=0; i<priorArr.length; i++){
                      if(alertJs.prior_notice==priorArr[i].key){
                          prior=priorArr[i].value;
                      }
                  }

                  for(var i=0; i<repeatArr.length; i++){
                      if(alertJs.prior_notice==repeatArr[i].key){
                          repeat=repeatArr[i].value;
                      }
                  }

                  console.log("您提前的时间是："+prior+"您重复的次数是："+repeat);
                  

                  console.log("给后台传的数据："+
                      "----闹钟id:"+alertJs.id_notice+
                      "，session:"+app.Session+
                        "，重复次数:"+repeat+
                        "，延迟时间："+prior
                  
                  );

                  wx.request({
                    url:'https://infoaas.com/data/hzc.json', 
                    method:'get',
                    data: {
                      id: alertJs.id_notice,
                      session:app.Session,
                      remind_repeat:repeat,
                      advance_notice:prior
                    },
                    header: {
                        'content-type': 'application/json'
                    },
                    success: function(res) {
                      console.log("发给后台闹钟，返回的是:"+res.data)
                    }
                  })

                  //出现闹钟框
                  var str={
                    remind_date:alertData.remind_date,
                    remind_time:alertData.remind_time,
                    remind_content:alertData.remind_content
                  };
                  var newrsp={name:"other",say:str,path:'',model:'alert'};
                  speakarr.push(newrsp);
                  _that.setData({speak:speakarr});
                  _that.setData({scrollTop:'10000000000'});
                  _that.setData({clockSave:'已完成'});
              }
          })
    }else{
         wx.showToast({
            title: '闹钟已设好',
            icon: 'success',
            duration: 1500
          });
    }
     
  },

  //录音开始
  audiostart:function(){
    wx.showToast({
       title: '正在录音...',
       icon: 'loading',
       duration: 10000
    });
    //微信录音开始接口
    var that = this;
    wx.startRecord({
      success: function(res) {
        tem = res.tempFilePath ;
        wx.saveFile({
          tempFilePath: tem,
          success: function(res) {
            var savedFilePath = res.savedFilePath;
            tem = savedFilePath;
            console.log(tem);
            var length = speakarr.length;
            speakarr[length-1] = {name:'me',   say:"(((　　　", path:tem, model:''};
            console.log(speakarr);
            that.setData({scrollTop:'1000000'});
            that.setData({speak:speakarr});
            that.setData({scrollTop:'10000000'});
          }
        })
      }
    })

  },
  

  //录音结束
  audioend:function(){
    //弹窗消失
    wx.hideToast({
      title: '正在录音...',
      icon: 'loading'
    });
    wx.stopRecord();
   //用于对话框显示
    var newsp={name:'me',   say:"(((",path:''};
    speakarr.push(newsp);
    
  },


  //点击录音
  play:function(e){
     var path=e.currentTarget.dataset.path;
     if(path!=""){
         wx.playVoice({
            filePath: path
          })
     }
    
  }
  
})


