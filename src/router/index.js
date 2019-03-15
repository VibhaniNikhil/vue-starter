import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import NProgress from 'nprogress'; // progress bar

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer');

// Views
const Dashboard = () => import('@/views/Dashboard');

// // Views - Pages
const Page404 = () => import('@/views/pages/Page404');
const Login = () => import('@/views/pages/Login');
const ForgotePassword = () => import('@/views/pages/ForgotePassword');
const Users = () => import('@/views/users/Users');
const AddUser = () => import('@/views/users/AddUser');

Vue.use(Router);

const router = new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
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
        {
          path: 'users',
          redirect: '/users/expert',
          name: 'Users',
          component: {
            render(c) {
              return c('router-view');
            },
          },
          children: [
            {
              path: 'expert',
              name: 'Expert',
              redirect: '/users/expert/list',
              component: {
                render(c) {
                  return c('router-view');
                },
              },
              children: [
                {
                  path: 'list',
                  name: 'List',
                  component: Users,
                },
                {
                  path: 'add',
                  name: 'Add',
                  component: AddUser,
                },
                {
                  path: 'edit-expert/:id',
                  name: 'Edit',
                  component: AddUser,
                },
              ],
            },
            {
              path: 'listener',
              name: 'Listener',
              redirect: '/users/listener/list',
              component: {
                render(c) {
                  return c('router-view');
                },
              },
              children: [
                {
                  path: 'list',
                  name: 'List',
                  component: Users,
                },
                {
                  path: 'add',
                  name: 'Add',
                  component: AddUser,
                },
                {
                  path: 'edit-listener/:id',
                  name: 'Edit',
                  component: AddUser,
                },
              ],
            },
          ],
        }
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/forgotpassword',
      name: 'ForgotePassword',
      component: ForgotePassword,
    },
    {
      path: '/404',
      name: 'Page404',
      component: Page404,
    },
    { path: '*', redirect: '/' },
  ],
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (!store.getters.isAuth && to.path != '/login' && to.path != '/forgotpassword') {
    next('/login');
  } else if (store.getters.isAuth && (to.path == '/forgotpassword' || to.path == '/login')) {
    next('/dashobard');
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
