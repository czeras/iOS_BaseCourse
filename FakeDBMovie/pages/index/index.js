//index.js
//获取应用实例
const app = getApp()
var API = require("../../datas/move.js")

Page({
  data: {
    list:[],
    title:"",
  },
  
  onLoad: function () {
    // 显示一个加载状态
    wx.showToast({
      title: '加载中...',
      icon:'loading',
      duration:2000,
    })
    // 显示菊花按钮 
    wx.showNavigationBarLoading();
    
    var that = this;
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      wx.setNavigationBarTitle({
        title: '豆瓣电影首页',
      });

      // 设置数据
      that.setData({
        list: API.moveJsonList["subjects"],
        title:"豆瓣电影Top250"
      });
    },
    2000);




    // console.log(JSON.stringify(API.moveJsonList["subjects"]));



    /* 由于网络的限制这里就不做处理了 ，数据直接放在 list中 注意数据取得是 subjects 数组
    wx.showToast({
      title: '加载中...',
    });
    wx.request({
      url: API,
      data:{},
      method:'GET',
      header:{
        'content-type':'json'
      },
      success:function(res){
        console.log("获取接口成功" + JSON.stringify(res));
      }
    })
    */
  },

})
