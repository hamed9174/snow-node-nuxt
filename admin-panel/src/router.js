import Vue from 'vue'
import Router from 'vue-router'
import Blogs from './views/dashboard/pages/Blogs'
import About from "./views/dashboard/pages/About";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Pages
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        {
          name: 'Blogs',
          path: 'blogs',
          component: Blogs
        },

        {
          name: 'Portfolios',
          path: 'portfolios',
          component: () => import('@/views/dashboard/pages/Portfolios'),
        },
        {
          name: 'Comments',
          path: 'comments',
          component: () => import('@/views/dashboard/pages/Comments'),
        },
        {
          name: 'Media',
          path: 'media',
          component: () => import('@/views/dashboard/pages/Media'),
        },
        {
          name: 'About',
          path: 'about',
          component: About
        },
        {
          name: 'User Profile',
          path: 'pages/user',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
        {
          name: 'Notifications',
          path: 'components/notifications',
          component: () => import('@/views/dashboard/component/Notifications'),
        }
      ],
    },
  ],
})
