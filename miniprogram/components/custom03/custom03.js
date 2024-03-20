// components/custom03/custom03.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
      num:100,
      obj:{
        name:"hjm",
        age:18,
        like:["打羽毛球"]
      },
      isGood:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
      // 将数据传递给父组件
      sendData(){
        this.triggerEvent("myEvent",this.data.obj)
      }
    }
})