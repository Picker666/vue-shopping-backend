import Vue from 'vue';
import VueRouter from 'vue-router';

import Layout from '../views/layout';
import Login from '../views/login';
import Home from '../views/home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', name: 'layout', component: Layout, children: [
      {
        path: '/', name: 'home', component: Home
      },{
        path: '/product', name: 'product', component: () => import('@/views/product'),
        children: [
          {
            path: 'list', name: 'product-list', component: () => import('@/views/product/list')
          },{
            path: 'category', name: 'category', component: () => import('@/views/product/category')
          }
        ]
      },{
        path: '/order', name: 'order', component: () => import('@/views/order'),
        children: [
          {
            path: 'list', name: 'order-list', component: () => import('@/views/order/list')
          },{
            path: 'collect', name: 'collect', component: () => import('@/views/order/collect')
          },{
            path: 'verify', name: 'verify', component: () => import('@/views/order/verify')
          }
        ]
      },{
        path: '/advertise', name: 'advertise', component: () => import('@/views/advertise'),
        children: [
          {
            path: 'list', name: 'advertise-list', component: () => import('@/views/advertise/list')
          }
        ]
      },
    ]
  },
  { path: '/login', name: 'login', component: Login },
];

const router = new VueRouter({
  routes,
  // base: process.env.BASE_URL,
  // mode: 'history'
});

// 全局路由异常处理
router.onError((err) => {
  console.log('err: ', err);
});

export default router;
