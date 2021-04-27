// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    todoName:'',
    todoList:['吃饭','睡觉','打豆豆']
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // canIUseGetUserProfile: false,
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  todoInput:function (e){
    this.setData({
      todoName:e.detail.value,
    })
  },
  handleSubmit:function (){
    if (this.data.todoName === ""){
      wx.showToast({
        title: '事件名不能为空',
        icon: 'error',
        duration:500
      })
      return
    }
    this.setData({
      todoList:this.data.todoList.push(this.data.todoName)
    })
    console.log(this.data.todoList)

  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
  },
})
