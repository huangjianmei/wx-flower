const behavior=Behavior({
  /**
     * 组件的属性列表
     */
    properties: {
      label:{
        key:String,
        value:"我已同意该协议"
      }
    },

    /**
     * 组件的初始数据
     */
    data: {
      name:"mary",
      obj:{
        name:"hjm",
        // age:18
      }
    },

    /**
     * 组件的方法列表
     */
    methods: {
      updateName(){
        this.setData({
          name:"jerry"
        })
        console.log("我是 behavior 内额方法")
      }
    },
    lifetimes:{
      attached(){
        console.log("我是 behavior 的声明周期函数 attached ----")
      }
    }
})

export default behavior;