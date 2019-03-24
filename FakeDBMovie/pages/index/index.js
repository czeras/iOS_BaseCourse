//index.js
//获取应用实例
const app = getApp()
var API = require("../../datas/move.js")             // 本地js链接
// var url = "http://api.douban.com/v2/movie/top250" // 这个api不知道为什么不行，用下面的可以
var url = "http://douban.uieee.com/v2/movie/top250"


Page({
  data: {
  },
  
  onLoad: function () {
    var that = this;

    // 显示一个加载状态
    wx.showToast({
      title: '加载中...',
      icon:'loading',
      duration:2000,
    })
    // 显示菊花按钮 
    wx.showNavigationBarLoading();
    
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      wx.setNavigationBarTitle({
        title: '豆瓣电影首页',
      });
    },
    2000);

    // 设置网络请求
    wx.request({
      url: url,
      data: {},
      method: 'GET',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        // console.log("获取接口成功" + JSON.stringify(res));

        that.setData({
          data:res.data
        })
      }
    })
  },

})
