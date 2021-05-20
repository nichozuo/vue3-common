import { createRouter, createWebHashHistory } from 'vue-router';
import Welcome from '../pages/welcome';
import Index from '../pages/index';

const routes = [
  {
    path: '/welcome',
    name: 'welcome',
    meta: { title: 'Welcome', icon: 'SmileOutlined' },
    component: Welcome,
  },
];

export const router = createRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: { title: 'home' },
      redirect: '/welcome',
      component: Index,
      children: routes,
    },
  ],
  history: createWebHashHistory(),
});
