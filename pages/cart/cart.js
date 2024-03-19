// pages/cart/cart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      numList:[1,2,3],
      obj:{},
      num:1
    },

    handlerDel(){
      this.setData({num:this.data.num+1})
    },
    getChild(){
      const res=this.selectComponent(".child")
      console.log(res,"===getChild")
      console.log(res.updateData,"===getChild")
      res.updateData()
    },
    handlerGetData(data){
      console.log(data.detail,"====获取的数据"),
      this.setData({
        obj:data.detail
      })
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
      console.log("监听用户下拉动作")
      this.setData({
        numList:this.data.numList.slice(0,3)
      })
      if(this.data.numList.length===3){
        wx.stopPullDownRefresh()
      }
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
      wx.showLoading({
        title: '数据加载中...',
      })
      setTimeout(()=>{
        console.log("======++页面上拉触底加载更多")
        const lastNum=this.data.numList[this.data.numList.length-1];
        const lastArr=[lastNum+1,lastNum+2,lastNum+3];
        this.setData({
          numList:[...this.data.numList,...lastArr]
        })
        wx.hideLoading()
      },1000)
     
    },
    handler(){
      wx.navigateTo({
        url: '/pages/list/list'
      })
    },
    handler1(){
      wx.redirectTo({
        url: '/pages/list/list'
      })
    },
    handler(){
      wx.navigateTo({
        url: '/pages/list/list'
      })
    },
    onLoad(){
      console.log("🥈小程序页面 cart --- onLoad")
    },
    onReady(){
      console.log("🥈小程序页面 cart --- onReady")
    },
    onShow(){
      console.log("🥈小程序页面 cart --- onShow")
    },
    onHide(){
      console.log("🥈小程序页面 cart --- onHide")
    },
    onUnload(){
      console.log("🥈小程序页面 cart --- onUnload")
    }
})