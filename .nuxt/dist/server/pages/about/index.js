exports.ids = [1];
exports.modules = {

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=template&id=0cf8a5e4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_c('About',{attrs:{"about":_vm.about}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=template&id=0cf8a5e4&

// EXTERNAL MODULE: ./services/xhr.js
var xhr = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about/index.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({name:"about",data(){return{webUrl: xhr["b" /* webUrl */],about:null};},async asyncData({$api}){const about=await $api.$get('about');return{about:about};}});
// CONCATENATED MODULE: ./pages/about/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/about/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "63aac94e"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {About: __webpack_require__(24).default})


/***/ })

};;
//# sourceMappingURL=index.js.map