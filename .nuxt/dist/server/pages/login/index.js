exports.ids = [5];
exports.modules = {

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=b9a61cc0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login row"},[_vm._ssrNode("<div class=\"col-md-6 col-8 col-lg-3\" data-v-b9a61cc0>","</div>",[_vm._ssrNode("<h1 class=\"text-center p-3\" data-v-b9a61cc0><ins data-v-b9a61cc0>Login</ins></h1> "),_c('b-form',{staticClass:"p-3",on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit($event)}}},[_c('b-form-group',[_c('b-form-input',{attrs:{"type":"text","placeholder":"Enter username","required":""},model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}})],1),_vm._v(" "),_c('b-form-group',[_c('b-form-input',{attrs:{"type":"password","placeholder":"Enter password","required":""},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}})],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-4"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var ariaDescribedby = ref.ariaDescribedby;
return [_c('b-form-checkbox',{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[_vm._v("Remember me")])]}}])}),_vm._v(" "),_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("login")])],1),_vm._ssrNode(" "),_vm._ssrNode("<h6 class=\"mt-3 p-3\" data-v-b9a61cc0>","</h6>",[_vm._ssrNode("Do not have an account? "),_c('router-link',{attrs:{"to":"/register"}},[_vm._v("sing up")])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=b9a61cc0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "Login",

  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },

  methods: {
    async onSubmit() {
      await this.$auth.loginWith('local', {
        data: {
          username: this.form.username,
          password: this.form.password
        }
      });
      this.form = {
        username: '',
        password: ''
      };
      this.$router.push({
        path: '/'
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b9a61cc0",
  "5b9d8f23"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map