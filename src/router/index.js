import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import Register from '@/components/Register';
import Login from '@/components/Login';
import UserTable from '@/components/UserTable';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },

    {
      path: '/register',
      name: 'Register',
      component: Register,
    },

    {
      path: '/login',
      name: 'Login',
      component: Login,
    },

    {
      path: '/usertable',
      name: 'UserTable',
      component: UserTable,
    },
  ],
});
