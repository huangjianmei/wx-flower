// components/custom02/custom02.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
      label:{
        key:String,
        value:""
      }
    },

    /**
     * 组件的初始数据
     */
    data: {
      num:100,
      count:20,
      obj:{name:"hjm",age:18},

    },
    observers:{
      // num:function(newVal){
      //   console.log(newVal,"=====num")
      // },
      // count:function(newVal){
      //   console.log(newVal,"=====count")
      // },
      "num,count":function(newNum,newCount){
        console.log(newNum,newCount,"====newNum,newCount")
      },
      label:function(newVal){
        console.log(newVal,"====label")
      }

    },
    /**
     * 组件的方法列表
     */
    methods: {
      updateData(){
        this.setData({
          num:9,
          count:this.data.count+1,
          label:"最新的标题"
        })
      }
    }
})