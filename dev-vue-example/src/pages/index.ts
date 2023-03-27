import { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./layout.vue'),
    children: [
      {
        path: '/all_orders',
        alias: '/',
        component: () => import('./all-orders-page/index.vue'),
      },
      {
        path: '/order',
        alias: '/',
        component: () => import('./order-page/index.vue'),
      },
    ],
  },

  {
    name: 'Login',
    path: '/login',
    component: () => import('./auth-page/index.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('./error-page/index.vue'),
  },
];

export default routes;
