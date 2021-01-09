import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/detection',
  },
  {
    path: '/detection',
    name: 'Detection',
    component: () => import(/* webpackChunkName: "detection" */ '../views/detection/index.vue'),
  },
  {
    path: '/historyData',
    name: 'HistoryData',
    component: () => import(/* webpackChunkName: "historyData" */ '../views/history-data/index.vue'),
  },
  {
    path: '/dataAnalysis',
    name: 'DataAnalysis',
    component: () => import(/* webpackChunkName: "dataAnalysis" */ '../views/data-analysis/index.vue'),
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: "setting" */ '../views/setting/index.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
