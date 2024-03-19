// components/custom-checkbox/custom-checkbox.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
      // label:String,
      // position:String,
      label:{
        type:String,
        value:""
      },
      position:{
        type:String,
        value:"right"
      }
    },

    /**
     * 组件的初始数据
     */
    data: {
      isChecked:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
      updateCheck(){
        this.setData({
          isChecked:!this.data.isChecked
        })
        console.log(this.properties.label,"======")
      }
    }
})