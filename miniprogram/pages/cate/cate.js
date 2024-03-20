// pages/cate/cate.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      name:"hjm",
      id:1,
      isChecked:false,
      isCheck:true,
      num:5,
      list:[],
    },
    onShow(){
      this.getList()
    },
    getList(){
      wx.request({
        url: 'https://gmall-prod.atguigu.cn/mall-api/index/findBanner',
        methods:"GET",
        data:{},
        success:(res)=>{
          console.log(res.data.data,"=====成功")
          this.setData({list:res.data.data})
        },
        fail:(err)=>{
          console.log(err,"=====失败")
        },
        complete:()=>{

        }
      })
    },
    deleteDate(){
      wx.showModal({
        title: '',
        content: '是否删除',
        complete: (res) => {
          if (res.cancel) {
            wx.showToast({
              title: '已取消',
            })
          }
      
          if (res.confirm) {
            wx.showToast({
              title: '删除成功',
            })
          }
        }
      })
    },

    // 同步API
    // setStorage(){
    //   wx.setStorageSync("person",{'name':"hjm","age":18})
    //   wx.setStorageSync("number",23242)
    // },
    // getStorage(){
    //   let person=wx.getStorageSync('person')
    //   console.log(person,"==person")
    // },
    // removeStorage(){
    //   wx.removeStorageSync('number')
    // },
    // clearStorage(){
    //   wx.clearStorageSync()
    // },

     // 异步API
    setStorage(){
      wx.setStorage({key:"name",data:"hjm"})
      wx.setStorage({key:"person",data:{name:"hjm",age:18}})
    },
    async getStorage(){
      let {data}=await wx.getStorage({key:'person'})
      console.log(data,"==person异步")
    },
    removeStorage(){
      wx.removeStorage({key:'name'})
    },
    clearStorage(){
      wx.clearStorage()
    },
    handler1(){
      // 保留当前页面，跳转到应用内某个页面，但是不能跳到tabbar页面
      wx.navigateTo({
        url: '/pages/list/list?code=1'
      })
    },
    handler2(){
      // 关闭当前页面，跳转到应用内某个页面，但是不能跳到tabbar页面
      wx.redirectTo({
        url: '/pages/list/list?haha=12231'
      })
    },
    handler3(){
      // 跳转到tabbar页面，路径后不能带参数
      wx.switchTab({
        url: '/pages/cart/cart?name=hjm'
      })
    },
    handler4(){
      // 保留所有页面，打开到应用内某个页面
      wx.reLaunch({
        url: '/pages/detail/detail?name=hjm&age=18'
      })
    }
   
})