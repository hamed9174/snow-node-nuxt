import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3f19be60 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _63a05815 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7c9f7d9d = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _b31b042e = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _92c0d918 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _1cd72a96 = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _01c8cff4 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _0fe439f8 = () => interopDefault(import('..\\pages\\single-blog\\_id\\index.vue' /* webpackChunkName: "pages/single-blog/_id/index" */))
const _346853f4 = () => interopDefault(import('..\\pages\\single-portfolio\\_id\\index.vue' /* webpackChunkName: "pages/single-portfolio/_id/index" */))
const _0213ab92 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3f19be60,
    name: "about"
  }, {
    path: "/blog",
    component: _63a05815,
    name: "blog"
  }, {
    path: "/contact",
    component: _7c9f7d9d,
    name: "contact"
  }, {
    path: "/dashboard",
    component: _b31b042e,
    name: "dashboard"
  }, {
    path: "/login",
    component: _92c0d918,
    name: "login"
  }, {
    path: "/portfolio",
    component: _1cd72a96,
    name: "portfolio"
  }, {
    path: "/register",
    component: _01c8cff4,
    name: "register"
  }, {
    path: "/single-blog/:id",
    component: _0fe439f8,
    name: "single-blog-id"
  }, {
    path: "/single-portfolio/:id",
    component: _346853f4,
    name: "single-portfolio-id"
  }, {
    path: "/",
    component: _0213ab92,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
