// pages/details/details.js

// var API = require("../../datas/moveDetails.js") // 本地链接

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
    console.log("传入的 id " + JSON.stringify(options.id));
    var that = this

    // 动态更新标题
    wx.setNavigationBarTitle({
      title: '详情页',
    })

    // 显示一个菊花按钮
    wx.showNavigationBarLoading()

    // 加载 api
    /*
    注意：由于项目使用的是测试的小程序账号，所以 请求的最后需要自己拼接参数，
    这里加载的数据为本地数据
    */ 
    var that = this;
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      wx.setNavigationBarTitle({
        title: '详情页',
      });
    },
      2000);

    // 网络请求
    wx.request({
      url: 'http://douban.uieee.com/v2/movie/subject/'+options.id,
      data:{},
      method: 'GET',
      header:{
        'content-type':'json'
      },
      success:function(res){
        // console.log("res  "+ JSON.stringify(res));
        that.setData({
          data:res.data
        })
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

  }
})