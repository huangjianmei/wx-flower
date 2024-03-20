// components/costom05/custom05.js
import behavior from "./behavior"

Component({
  behaviors:[behavior],
  properties:{
    label:{
      key:String,
      value:"匿名提交"
    }
  },
  data:{
    name:"hhh",
    obj:{
      // name:"jj",
      age:20
    }
  },
  methods:{
    updateName(){
      this.setData({
        name:"yy"
      })
      console.log("我是组件内的方法")
    }
  },
  lifetimes:{
    attached(){
      console.log("我是组件内部调用的生命周期函数")
    }
  }
    
})