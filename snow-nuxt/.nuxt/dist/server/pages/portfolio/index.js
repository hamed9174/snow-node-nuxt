exports.ids = [6];
exports.modules = {

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9cad9de6", content, true, context)
};

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0aea3a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0aea3a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0aea3a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0aea3a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0aea3a3b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".categories-enter[data-v-0aea3a3b],.categories-leave-to[data-v-0aea3a3b]{opacity:0;transform:translateY(-60px)}.categories-enter-active[data-v-0aea3a3b],.categories-leave-active[data-v-0aea3a3b]{transition:all .5s ease}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/index.vue?vue&type=template&id=0aea3a3b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"portfolio row pt-5"},[_vm._ssrNode("<div class=\"container\" data-v-0aea3a3b>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,['mb-5' , 'toggle-menu' , 'text-center' ,{ 'toggle-menu-black' : _vm.menuActive}]))+" data-v-0aea3a3b><i class=\"fas fa-th-large\" data-v-0aea3a3b></i></div> "),_c('transition',{attrs:{"name":"categories"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.menuActive),expression:"menuActive"}],staticClass:"blog-menu mt-3",staticStyle:{"transition":"1s 1s"}},[_c('ul',[_c('li',{staticClass:"active",on:{"click":function($event){return _vm.MenuActive($event , 'all')}}},[_vm._v("ALL")]),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.MenuActive($event , 'print')}}},[_vm._v("PRINT")]),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.MenuActive($event , 'photography')}}},[_vm._v("PHOTOGRAPHY")]),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.MenuActive($event , 'branding')}}},[_vm._v("BRANDING")]),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.MenuActive($event , 'design')}}},[_vm._v("DESIGN")]),_vm._v(" "),_c('li',{on:{"click":function($event){return _vm.MenuActive($event , 'mockup')}}},[_vm._v("MOCKUP")])])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"portfolios-content mt-4\" data-v-0aea3a3b>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-0aea3a3b>","</div>",[_vm._ssrNode("<div class=\"col-12 row\" data-v-0aea3a3b>","</div>",_vm._l((_vm.portfolios),function(portfolio){return _vm._ssrNode("<div class=\"portfolio-content col-md-6 col-lg-4\" data-v-0aea3a3b>","</div>",[_c('Portfolio',{attrs:{"portfolio":portfolio}})],1)}),0)])])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/portfolio/index.vue?vue&type=template&id=0aea3a3b&scoped=true&

// EXTERNAL MODULE: ./components/portfolios/Portfolio.vue + 4 modules
var Portfolio = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/portfolio/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var portfoliovue_type_script_lang_js_ = ({
  name: "Portfolios",
  head: {
    title: 'Portfolio'
  },
  components: {
    Portfolio: Portfolio["default"]
  },

  data() {
    return {
      menuActive: false,
      portfolio: [],
      portfolios: []
    };
  },

  async asyncData({
    $api
  }) {
    const portfolios = await $api.$get('portfolios');
    return {
      portfolios: portfolios
    };
  },

  methods: {
    MenuActive(event, portfolios) {
      event.target.parentNode.getElementsByTagName('li').forEach(item => {
        item.classList.remove('active');
      });
      event.target.classList.add('active');
      this.PortfoliosUpdate(portfolios);
    },

    PortfoliosUpdate(portfolios) {
      if (portfolios === 'all') {
        this.portfolios = this.portfolio;
      } else {
        let portfolioCategory = this.portfolio.filter(item => item.category == portfolios);
        this.portfolios = portfolioCategory;
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/portfolio/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_portfoliovue_type_script_lang_js_ = (portfoliovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/portfolio/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(92)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_portfoliovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0aea3a3b",
  "643d8442"
  
)

/* harmony default export */ var portfolio = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map