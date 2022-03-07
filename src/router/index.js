import Vue from 'vue'
import VueRouter from 'vue-router'
// 首页一般使用同步的方式引入
import Index from '@/views/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/home1',
    name: 'Home1',
    component: () => { 
      return import( /*webpackChunkName:"home"*/ '../views/home1.vue')  
    }
  },
  {
    path: '/home2',
    name: 'Home2',
    component: () => { 
      return import( /*webpackChunkName:"home"*/ '../views/home2.vue') 
    }
  },
  {
    path: '/home3',
    name: 'Home3',
    component: () => { 
      return import( /*webpackChunkName:"home"*/ '../views/home3.vue') 
    }
  }
]

// 创建路由的实例 然后导出
const router = new VueRouter({
  routes
})

export default router