import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
 
Vue.use(Router)
  
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', 
      component: Index,
      children:[
        // 首页
        {
          path: '',
          name: 'index',
          component: () => import('./views/index/Index.vue')
        },
        // 分类
        {
          path: 'assort',
          name: 'assort',
          component: () => import('./views/index/Assort.vue')
        },
        // 购物车
        {
          path: 'shopcar',
          name: 'shopcar',
          component: () => import('./views/index/Shopcar.vue'),
          meta: {
            needLogin: true,
            title:'购物车'
          }
        },
        // 个人中心
        {
          path: 'self',
          name: 'self',
          component: () => import('./views/index/Self.vue'),
          meta: {
            needLogin: true,
          }
        },
      ]
    },
    // 注册
    {
      path: '/regist',
      name: 'regist',
      component: () => import('./views/Regist.vue')
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    // 专区列表
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/List.vue')
    },
    // 商品详情
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/Detail.vue')
    },
    // 商品结算页
    {
      path: '/buy',
      name: 'buy',
      component: () => import('./views/Buy.vue'),
      meta: {
        needLogin: true,
      }
    },
    // 添加地址
    {
      path: '/address',
      name: 'address',
      component: () => import('./views/Address.vue'),
      meta: {
        needLogin: true,
      }
    },
    // 全部订单
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order.vue'),
      meta: {
        needLogin: true,
      }
    },
    // 待发货 、 待付款 、 待收货 、 待评价
    {
      path: '/go-order',
      name: 'go-order',
      component: () => import('./views/Go-order.vue'),
      meta: {
        needLogin: true,
      }
    },
    // 我的资料
    {
      path: '/datum',
      name: 'datum',
      component: () => import('./views/Datum.vue'),
      meta: {
        needLogin: true,
      }
    },
    // 修改昵称
    {
      path: '/namechange',
      name: 'namechange',
      component: () => import('./views/Namechange.vue'),
      meta: {
        needLogin: true,
      }
    },
    // 我的收藏
    {
      path: '/mycollect',
      name: 'mycollect',
      component: () => import('./views/Mycollect.vue'),
      meta: {
        needLogin: true,
      }
    },
    // 我的积分
    {
      path: '/integral',
      name: 'integral',
      component: () => import('./views/Integral.vue'),
      meta: {
        needLogin: true,
      }
    },
    // 地址管理
    {
      path: '/addres',
      name: 'addres',
      component: () => import('./views/Addres.vue'),
      meta: {
        needLogin: true,
      }
    },
    // 我的分销
    {
      path: '/none',
      name: 'none',
      component: () => import('./views/None.vue'),
      meta: {
        needLogin: true,
      }
    },
  ]
})
