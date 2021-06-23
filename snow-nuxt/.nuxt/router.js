import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0455d6d9 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _2afa3cec = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _32acd566 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _4afb6d06 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _59aaf43e = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _0d66714b = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _f887854a = () => interopDefault(import('..\\pages\\single-blog\\_id\\index.vue' /* webpackChunkName: "pages/single-blog/_id/index" */))
const _c1094be2 = () => interopDefault(import('..\\pages\\single-portfolio\\_id\\index.vue' /* webpackChunkName: "pages/single-portfolio/_id/index" */))
const _95138764 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0455d6d9,
    name: "about"
  }, {
    path: "/blog",
    component: _2afa3cec,
    name: "blog"
  }, {
    path: "/contact",
    component: _32acd566,
    name: "contact"
  }, {
    path: "/login",
    component: _4afb6d06,
    name: "login"
  }, {
    path: "/portfolio",
    component: _59aaf43e,
    name: "portfolio"
  }, {
    path: "/register",
    component: _0d66714b,
    name: "register"
  }, {
    path: "/single-blog/:id",
    component: _f887854a,
    name: "single-blog-id"
  }, {
    path: "/single-portfolio/:id",
    component: _c1094be2,
    name: "single-portfolio-id"
  }, {
    path: "/",
    component: _95138764,
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
