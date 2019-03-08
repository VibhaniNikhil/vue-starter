import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer');

// Views
const Dashboard = () => import('@/views/Dashboard');

// // Views - Pages
const Page404 = () => import('@/views/pages/Page404');
const Login = () => import('@/views/pages/Login');

Vue.use(Router);

const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard,
        },
      ],
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404,
    },
    { path: '*', redirect: '/' },
  ],
});

router.beforeEach((to, from , next) => {  
  if (!store.getters.isAuth && to.path != '/login') {
    next('/login')
  } else {
    next()
  }
});

export default router;
