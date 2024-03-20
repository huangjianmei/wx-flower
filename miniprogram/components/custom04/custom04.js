// components/custom04/custom04.js
Component({
  pageLifetimes:{
    show(){
      console.log("组件所在的页面被展示")
    },
    hide(){
      console.log("组件所在的页面被隐藏")
    },
  },
  lifetimes:{
    created(){
      console.log("🥉小程序组件 --- created")
    },
    attached(){
      console.log("🥉小程序组件 --- attached")
    },
    ready(){
      console.log("🥉小程序组件 --- ready")
    },
    detached(){
      console.log("🥉小程序组件 --- detached")
    },
  }
})