import Vue from 'vue'

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue'
import router from './router'
import store from './store'

// css 样式
import '@/assets/base.css';
import '@/assets/style.css';
import 'we-vue/lib/style.css';

// 轮播图
import { Swipe, SwipeItem } from 'we-vue'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 加载
import { Loadmore } from 'we-vue'
Vue.component(Loadmore.name, Loadmore)

// 无限滚动
import { InfiniteScroll } from 'we-vue'
Vue.use(InfiniteScroll)

// 数字输入框
import { NumberSpinner } from 'we-vue'
Vue.component(NumberSpinner.name, NumberSpinner)

// 判断是否登录
import { Toast  } from 'we-vue'
router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    let ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
    if(ACCESS_TOKEN){
      next()
    }else {
      Toast.fail({
        duration: 2000,
        message: '此项必须要登录~~'
    })
    }
  }else {
    next()
  }
})



// 设置接口 端口号
Vue.use(VueAxios,axios)
Vue.axios.defaults.baseURL = 'http://127.0.0.1:8001/api'
Vue.config.productionTip = false


// 为 axios 设置一个拦截器
Vue.axios.interceptors.request.use(function(config){
  // 在发送请求前自动执行
  let token = localStorage.getItem('ACCESS_TOKEN')
  if(token){
    // 设置请求头
    config.headers['Authorization'] = 'Bearer'+ token
  }
  return config
},function(error){
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
 