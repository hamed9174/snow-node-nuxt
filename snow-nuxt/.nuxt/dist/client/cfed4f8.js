(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{371:function(e,r,t){"use strict";t.r(r);var n=t(32),o=(t(75),{name:"Login",data:function(){return{rememberMe:!1,form:{username:"",email:"",password:""}}},methods:{Register:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$api.post("register",e.form).catch((function(e){return console.log(e)}));case 2:return r.next=4,e.$auth.loginWith("local",{data:{username:e.form.username,password:e.form.password}});case 4:e.form={username:"",password:"",email:""},e.$router.push({path:"/"});case 6:case"end":return r.stop()}}),r)})))()}}}),l=t(31),component=Object(l.a)(o,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"login row"},[t("div",{staticClass:"col-md-6 col-8 col-lg-3"},[e._m(0),e._v(" "),t("validation-observer",{ref:"observer",staticClass:"form-validate",scopedSlots:e._u([{key:"default",fn:function(r){var n=r.handleSubmit;return[t("b-form",{staticClass:"p-3",on:{submit:function(r){return r.preventDefault(),n(e.Register)}}},[t("b-form-group",[t("ValidationProvider",{attrs:{rules:"required|alpha_num|alpha_spaces|min:4"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("b-form-input",{attrs:{id:"input-2",placeholder:"Enter name"},model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}}),e._v(" "),t("span",[e._v(e._s(n[0]))])]}}],null,!0)})],1),e._v(" "),t("b-form-group",{attrs:{placeholder:"Enter email"}},[t("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Enter email"},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}}),e._v(" "),t("span",[e._v(e._s(n[0]))])]}}],null,!0)})],1),e._v(" "),t("b-form-group",[t("ValidationProvider",{attrs:{rules:"required|min:6"},scopedSlots:e._u([{key:"default",fn:function(r){var n=r.errors;return[t("b-form-input",{attrs:{type:"password",placeholder:"Enter password"},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}}),e._v(" "),t("span",[e._v(e._s(n[0]))])]}}],null,!0)})],1),e._v(" "),t("b-form-group",{attrs:{id:"input-group-4"},scopedSlots:e._u([{key:"default",fn:function(r){r.ariaDescribedby;return[t("b-form-checkbox",{staticClass:"mb-2 mr-sm-2 mb-sm-0",model:{value:e.rememberMe,callback:function(r){e.rememberMe=r},expression:"rememberMe"}},[e._v("Remember me")])]}}],null,!0)}),e._v(" "),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("create")])],1)]}}])}),e._v(" "),t("h6",{staticClass:"mt-3 p-3"},[e._v(" have an account? "),t("router-link",{attrs:{to:"/login"}},[e._v("sing in")])],1)],1)])}),[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("h1",{staticClass:"text-center p-3"},[t("ins",[e._v("Register")])])}],!1,null,"62900160",null);r.default=component.exports}}]);