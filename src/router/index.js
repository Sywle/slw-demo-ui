import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mdform',
    name: 'mdform',
    component: () => import('@/views/mdinputView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dayjs',
    name: 'dayjs',
    component: () => import(/* webpackChunkName: "about" */ '../views/dayjsView.vue')
  },
  {
    path: '/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "about" */ '../views/uploadView.vue')
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import(/* webpackChunkName: "about" */ '@/views/treeView')
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import(/* webpackChunkName: "about" */ '@/views/checkboxView')
  },
  {
    path: '/slide',
    name: 'slide',
    component: () => import(/* webpackChunkName: "about" */ '@/views/slideView')
  },
  {
    path: '/gaode',
    name: 'gaode',
    component: () => import(/* webpackChunkName: "about" */ '@/views/gaodeView')
  },
  {
    path: '/gaode',
    name: 'gaode',
    component: () => import(/* webpackChunkName: "about" */ '@/views/gaodeView')
  },
  {
    path: '/dongtai',
    name: 'dongtai',
    component: () => import(/* webpackChunkName: "about" */ '@/views/dongtaiClass')
  },
  {
    path: '/baidu',
    name: 'baidu',
    component: () => import(/* webpackChunkName: "about" */ '@/views/baiduMap')
  },
  {
    path: '/map3d',
    name: 'map3d',
    component: () => import(/* webpackChunkName: "about" */ '@/views/map3dView')
  },
]

const router = new VueRouter({
  routes
})

export default router
