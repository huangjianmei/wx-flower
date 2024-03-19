// pages/list/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    handler(){
      // 关闭当前页面，返回上一页面或多级页面
      wx.navigateBack()
    },
    onLoad(options){
      console.log("🥈小程序页面 list --- onLoad")
    },
    onReady(){
      console.log("🥈小程序页面 list --- onReady")
    },
    onShow() {
      console.log("🥈小程序页面 list --- onReady")
    },
    onHide(){
      console.log("🥈小程序页面 list --- onHide")
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
      console.log("🥈小程序页面 list --- onUnload")
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})