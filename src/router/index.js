import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AdminHome from '@/views/AdminHome.vue';
import UserDashboard from '@/views/UserDashboard.vue';
import UserList from '@/views/admin/UserList.vue';
import SalesList from '@/views/admin/SalesList.vue';
import AdminDashboard from '@/views/admin/AdminDashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/admin-home',
    name: 'AdminHome',
    component: AdminHome,
    children: [
      {
        path: '/admin/users',
        name: 'UserList',
        component: UserList
      },
      {
        path: '/admin/sales',
        name: 'SalesList',
        component: SalesList
      },
      {
        path: '/admin/dashboard',
        name: 'AdminDashboard',
        component: AdminDashboard
      }
    ]
  },
  {
    path: '/user-dashboard',
    name: 'UserDashboard',
    component: UserDashboard,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;