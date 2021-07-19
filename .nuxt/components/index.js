export { default as About } from '../..\\components\\about.vue'
export { default as ContactForm } from '../..\\components\\ContactForm.vue'
export { default as BlogsBlog } from '../..\\components\\blogs\\blog.vue'
export { default as Blogs } from '../..\\components\\blogs\\Blogs.vue'
export { default as Brands } from '../..\\components\\brands\\Brands.vue'
export { default as Comments } from '../..\\components\\comments\\Comments.vue'
export { default as CommonFooter } from '../..\\components\\common\\Footer.vue'
export { default as CommonHeader } from '../..\\components\\common\\Header.vue'
export { default as CommonIndexHeader } from '../..\\components\\common\\indexHeader.vue'
export { default as PortfoliosPortfolio } from '../..\\components\\portfolios\\Portfolio.vue'

export const LazyAbout = import('../..\\components\\about.vue' /* webpackChunkName: "components/about" */).then(c => wrapFunctional(c.default || c))
export const LazyContactForm = import('../..\\components\\ContactForm.vue' /* webpackChunkName: "components/contact-form" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogsBlog = import('../..\\components\\blogs\\blog.vue' /* webpackChunkName: "components/blogs-blog" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogs = import('../..\\components\\blogs\\Blogs.vue' /* webpackChunkName: "components/blogs" */).then(c => wrapFunctional(c.default || c))
export const LazyBrands = import('../..\\components\\brands\\Brands.vue' /* webpackChunkName: "components/brands" */).then(c => wrapFunctional(c.default || c))
export const LazyComments = import('../..\\components\\comments\\Comments.vue' /* webpackChunkName: "components/comments" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonFooter = import('../..\\components\\common\\Footer.vue' /* webpackChunkName: "components/common-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonHeader = import('../..\\components\\common\\Header.vue' /* webpackChunkName: "components/common-header" */).then(c => wrapFunctional(c.default || c))
export const LazyCommonIndexHeader = import('../..\\components\\common\\indexHeader.vue' /* webpackChunkName: "components/common-index-header" */).then(c => wrapFunctional(c.default || c))
export const LazyPortfoliosPortfolio = import('../..\\components\\portfolios\\Portfolio.vue' /* webpackChunkName: "components/portfolios-portfolio" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
export function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
