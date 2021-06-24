import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Contact from '../views/Contact.vue';
import Blog from '../views/Blog.vue';
import Portfolio from '../views/Portfolio.vue';
import SingleBlog from '../views/SingleBlog'
import SinglePortfolio from '../views/SinglePortfolio';
import Logout from "../views/Logout";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/blog',
        name: 'Blog',
        component: Blog
    },
    {
        path: '/single-blog/:id',
        name: 'SingleBlog',
        component: SingleBlog
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/single-portfolio/:id',
        name: 'SinglePortfolio',
        component: SinglePortfolio
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router