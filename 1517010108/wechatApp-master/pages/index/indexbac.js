var app = getApp();
var luyin=[];
var sp='';
var tem='';
var speakarr=[
        {i:0,name:"me",   say:"今天一起去看电影吧", stime:'2016'},
        {i:1,name:"other",say:"不要" ,             stime:'2017'},
        {i:2,name:"me",   say:"我请你呢",           stime:'2018'},
        {i:3,name:"other",say:"还是我请你吧" ,             stime:'2019'},
 ];


Page({
  //页面初始化数据
  data: { 
      head_other: 'http://v1.qzone.cc/avatar/201407/01/12/53/53b23ebb14c27312.jpg%21200x200.jpg',
      head_me: 'http://p1.gexing.com/G1/M00/C7/73/rBACE1IgR_PBIieMAAAfAWtb1fA891_200x200_3.jpg',
      speak:speakarr,
      sendicon:'icon-audio',
      ipt:true
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
    sp= e.detail.value;
  },

//点击发送，推入new的data中的speakarr中，并且setData

  dosend:function(){
    if(sp!=""){
        var count = speakarr.length;
        var newsp={i:count,name:'me',   say:sp,           stime:'2018'};
        speakarr.push(newsp);
        this.setData({speak:speakarr});
    }else{
       wx.showToast({
        title: '请输入文字',
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

    //开始录音
    wx.startRecord({
      success: function(res) {
        //临时录音文件
        var tempFilePath = res.tempFilePath;
        console.log("我是最开始的临时文件："+tempFilePath) ;
        tem=tempFilePath;
        
        //保存录音文件
        wx.saveFile({
          tempFilePath: tempFilePath,
          success: function(res) {
            var savedFilePath = res.savedFilePath
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
    var count = speakarr.length;
   
    //用于对话框显示
    var newsp={i:count,name:'me',   say:"(((　　　　　　",       stime:'2019'};
    speakarr.push(newsp);
    
    
    
    //用于对话框与录音绑定
    wx.getSavedFileList({
      success: function(res) {

      var arr=res.fileList;
      for(var i=0; i<arr.length; i++){//i为5,7,9,1,3
          for (var j=i+1; j<arr.length; j++) {//j为7,9,1,3
              if(arr[i]['createTime']>arr[j]['createTime']){//开始判断：
                  /*下边的作用是互换位置：小的挪到前边，大的挪到后边*/
                  var temp=arr[i];//a-先将大（即i）的存储在临时变量（即temp）里
                  arr[i]=arr[j];//b-将小的（即j）的值赋予上一个变量（即i）
                  arr[j]=temp;//c-将大的值（此时是临时变量temp）赋予小的
              }
          }
      }
      luyin[count-1] =  arr[arr.length-1].filePath;
      }
    })
    

    this.setData({speak:speakarr});

    
  },


  //点击录音
  play:function(e){
    
    var count = speakarr.length;
    var isSpeak=e.currentTarget.dataset.play;
    var index=Number(e.currentTarget.dataset.index);
    


 


    if(isSpeak=="(((　　　　　　"&&count!=index+1){
      console.log("进入历史录音播放器:"+luyin[index])
        //播放录音
        wx.playVoice({
          filePath: luyin[index],
          complete: function(){
            
          }
        })
    }else if(isSpeak=="(((　　　　　　"&&count==index+1){
       console.log("进入临时录音播放器:"+tem)
        //播放录音
        wx.playVoice({
          filePath: tem
        })
    }



  }
  
})


