import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _716bf9d1 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _dcd04a18 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _9a73cb44 = () => interopDefault(import('..\\pages\\contact\\index.vue' /* webpackChunkName: "pages/contact/index" */))
const _47986c75 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _3886db36 = () => interopDefault(import('..\\pages\\portfolio\\index.vue' /* webpackChunkName: "pages/portfolio/index" */))
const _df14695a = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _38f50f63 = () => interopDefault(import('..\\pages\\single-blog\\_id\\index.vue' /* webpackChunkName: "pages/single-blog/_id/index" */))
const _56c6e5f2 = () => interopDefault(import('..\\pages\\single-portfolio\\_id\\index.vue' /* webpackChunkName: "pages/single-portfolio/_id/index" */))
const _52050056 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _716bf9d1,
    name: "about"
  }, {
    path: "/blog",
    component: _dcd04a18,
    name: "blog"
  }, {
    path: "/contact",
    component: _9a73cb44,
    name: "contact"
  }, {
    path: "/login",
    component: _47986c75,
    name: "login"
  }, {
    path: "/portfolio",
    component: _3886db36,
    name: "portfolio"
  }, {
    path: "/register",
    component: _df14695a,
    name: "register"
  }, {
    path: "/single-blog/:id",
    component: _38f50f63,
    name: "single-blog-id"
  }, {
    path: "/single-portfolio/:id",
    component: _56c6e5f2,
    name: "single-portfolio-id"
  }, {
    path: "/",
    component: _52050056,
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
