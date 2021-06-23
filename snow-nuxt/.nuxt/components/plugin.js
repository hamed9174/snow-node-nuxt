import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  ContactForm: () => import('../..\\components\\ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c)),
  BlogsBlog: () => import('../..\\components\\blogs\\blog.vue' /* webpackChunkName: "components/blogs-blog" */).then(c => wrapFunctional(c.default || c)),
  Blogs: () => import('../..\\components\\blogs\\Blogs.vue' /* webpackChunkName: "components/blogs" */).then(c => wrapFunctional(c.default || c)),
  Brands: () => import('../..\\components\\brands\\Brands.vue' /* webpackChunkName: "components/brands" */).then(c => wrapFunctional(c.default || c)),
  Comments: () => import('../..\\components\\comments\\Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c)),
  CommonFooter: () => import('../..\\components\\common\\Footer.vue' /* webpackChunkName: "components/common-footer" */).then(c => wrapFunctional(c.default || c)),
  CommonHeader: () => import('../..\\components\\common\\Header.vue' /* webpackChunkName: "components/common-header" */).then(c => wrapFunctional(c.default || c)),
  CommonIndexHeader: () => import('../..\\components\\common\\indexHeader.vue' /* webpackChunkName: "components/common-index-header" */).then(c => wrapFunctional(c.default || c)),
  PortfoliosPortfolio: () => import('../..\\components\\portfolios\\Portfolio.vue' /* webpackChunkName: "components/portfolios-portfolio" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
