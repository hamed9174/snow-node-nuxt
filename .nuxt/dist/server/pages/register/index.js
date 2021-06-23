exports.ids = [7];
exports.modules = {

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register/index.vue?vue&type=template&id=62900160&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login row"},[_vm._ssrNode("<div class=\"col-md-6 col-8 col-lg-3\" data-v-62900160>","</div>",[_vm._ssrNode("<h1 class=\"text-center p-3\" data-v-62900160><ins data-v-62900160>Register</ins></h1> "),_c('validation-observer',{ref:"observer",staticClass:"form-validate",scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('b-form',{staticClass:"p-3",on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.Register)}}},[_c('b-form-group',[_c('ValidationProvider',{attrs:{"rules":"required|alpha_num|alpha_spaces|min:4"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('b-form-input',{attrs:{"id":"input-2","placeholder":"Enter name"},model:{value:(_vm.form.username),callback:function ($$v) {_vm.$set(_vm.form, "username", $$v)},expression:"form.username"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(errors[0]))])]}}],null,true)})],1),_vm._v(" "),_c('b-form-group',{attrs:{"placeholder":"Enter email"}},[_c('ValidationProvider',{attrs:{"rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('b-form-input',{attrs:{"id":"input-1","type":"email","placeholder":"Enter email"},model:{value:(_vm.form.email),callback:function ($$v) {_vm.$set(_vm.form, "email", $$v)},expression:"form.email"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(errors[0]))])]}}],null,true)})],1),_vm._v(" "),_c('b-form-group',[_c('ValidationProvider',{attrs:{"rules":"required|min:6"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('b-form-input',{attrs:{"type":"password","placeholder":"Enter password"},model:{value:(_vm.form.password),callback:function ($$v) {_vm.$set(_vm.form, "password", $$v)},expression:"form.password"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(errors[0]))])]}}],null,true)})],1),_vm._v(" "),_c('b-form-group',{attrs:{"id":"input-group-4"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var ariaDescribedby = ref.ariaDescribedby;
return [_c('b-form-checkbox',{staticClass:"mb-2 mr-sm-2 mb-sm-0",model:{value:(_vm.rememberMe),callback:function ($$v) {_vm.rememberMe=$$v},expression:"rememberMe"}},[_vm._v("Remember me")])]}}],null,true)}),_vm._v(" "),_c('b-button',{attrs:{"type":"submit","variant":"primary"}},[_vm._v("create")])],1)]}}])}),_vm._ssrNode(" "),_vm._ssrNode("<h6 class=\"mt-3 p-3\" data-v-62900160>","</h6>",[_vm._ssrNode(" have an account? "),_c('router-link',{attrs:{"to":"/login"}},[_vm._v("sing in")])],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register/index.vue?vue&type=template&id=62900160&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var registervue_type_script_lang_js_ = ({
  name: "Login",

  data() {
    return {
      rememberMe: false,
      form: {
        username: '',
        email: '',
        password: ''
      }
    };
  },

  methods: {
    async Register() {
      await this.$api.post('register', this.form).catch(err => console.log(err));
      await this.$auth.loginWith('local', {
        data: {
          username: this.form.username,
          password: this.form.password
        }
      });
      this.form = {
        username: '',
        password: '',
        email: ''
      };
      this.$router.push({
        path: '/'
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/register/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/register/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "62900160",
  "7f21fb85"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map