exports.ids = [8];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/single-blog/_id/index.vue?vue&type=template&id=78751498&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.blog)?_c('div',{staticClass:"single-blog"},[_vm._ssrNode("<div class=\"single-blogs\" data-v-78751498>","</div>",[_vm._ssrNode("<div class=\"blog-img\" data-v-78751498><img"+(_vm._ssrAttr("src",(_vm.webUrl + "/assets/images/" + (_vm.blog.img))))+" alt data-v-78751498></div> <div class=\"blog-content\" data-v-78751498><h1 data-v-78751498>"+_vm._ssrEscape(_vm._s(_vm.blog.title))+"</h1> <h4 data-v-78751498><span class=\"mx-3\" data-v-78751498>"+_vm._ssrEscape(_vm._s(_vm.blog.create_at.month)+" "+_vm._s(_vm.blog.create_at.day)+", "+_vm._s(_vm.blog.create_at.year))+"</span> <span class=\"category mx-3\" data-v-78751498>"+_vm._ssrEscape(_vm._s(_vm.blog.category)+",")+"</span> <span class=\"mx-3\" data-v-78751498>2 COMMENTS</span></h4> <p data-v-78751498>"+_vm._ssrEscape(_vm._s(_vm.blog.content))+"</p></div> "),_vm._ssrNode("<div class=\"my-comments row pt-5\" data-v-78751498>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-78751498>","</div>",[_c('b-card',{attrs:{"bg-variant":"dark","text-variant":"white"}},[_c('b-card-title',[_vm._v("\n            Comments ("+_vm._s(_vm.blog.comments.length)+")\n          ")]),_vm._v(" "),_c('div',{staticClass:"add-comment py-3"},[_c('ValidationObserver',{ref:"add",staticClass:"form-validate row",scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('b-form',{staticClass:"form-row col-12",attrs:{"enctype":"application/json"},on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.AddComment)}}},[_c('div',{staticClass:"col-8 py-3"},[_c('b-form-group',{attrs:{"id":"input-group-1"}},[_c('ValidationProvider',{attrs:{"name":"Comment"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('b-form-input',{attrs:{"type":"text","placeholder":"Add Comment"},model:{value:(_vm.comment),callback:function ($$v) {_vm.comment=$$v},expression:"comment"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(errors[0]))])]}}],null,true)})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-4 py-3"},[_c('b-button',{attrs:{"type":"submit"}},[_vm._v("send comment")])],1)])]}}],null,false,3302616076)})],1),_vm._v(" "),_c('b-modal',{attrs:{"size":"xl","title":_vm.formTitle,"hide-footer":true},model:{value:(_vm.addReplyComment),callback:function ($$v) {_vm.addReplyComment=$$v},expression:"addReplyComment"}},[_c('div',{staticClass:"add-comment py-3"},[_c('ValidationObserver',{ref:"reply",staticClass:"form-validate row",scopedSlots:_vm._u([{key:"default",fn:function(ref){
var handleSubmit = ref.handleSubmit;
return [_c('b-form',{staticClass:"form-row col-12",attrs:{"enctype":"application/json"},on:{"submit":function($event){$event.preventDefault();return handleSubmit(_vm.ChangeComment)}}},[_c('div',{staticClass:"col-8 py-3"},[_c('b-form-group',{attrs:{"id":"input-group-1"}},[_c('ValidationProvider',{attrs:{"name":"Last-Name","rules":"required|min:20"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('b-form-input',{attrs:{"type":"text","placeholder":"Add Reply Comment"},model:{value:(_vm.replyComment),callback:function ($$v) {_vm.replyComment=$$v},expression:"replyComment"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(errors[0]))])]}}],null,true)})],1)],1),_vm._v(" "),_c('div',{staticClass:"col-4 py-3"},[_c('b-button',{attrs:{"type":"submit"}},[_vm._v("send comment")])],1)])]}}],null,false,2825059380)})],1)]),_vm._v(" "),(_vm.blog.comments.length)?_c('div',{staticClass:"comments"},_vm._l((_vm.blog.comments),function(comment,index){return _c('div',{staticClass:"comment py-3"},[_c('b-card',{attrs:{"bg-variant":"white","text-variant":"dark"}},[_c('h3',[_vm._v(_vm._s(comment.message))]),_vm._v(" "),_c('div',{staticClass:"comment-options"},[_c('span',{on:{"click":function($event){return _vm.ShowReplyComment(index)}}},[_vm._v("Reply")]),_vm._v(" "),_c('span',{on:{"click":function($event){return _vm.EditComment(index)}}},[_vm._v("Edit")]),_vm._v(" "),_c('span',{on:{"click":function($event){return _vm.DeleteComment(index)}}},[_vm._v("Delete")])]),_vm._v(" "),(comment.replies.length)?_c('div',{staticClass:"replies mt-3"},[_c('b-card',_vm._l((comment.replies),function(reply){return _c('div',[_c('h2',[_vm._v(_vm._s(reply.writer))]),_vm._v(" "),_c('h3',[_vm._v(_vm._s(reply.message))])])}),0)],1):_vm._e()])],1)}),0):_vm._e()],1)],1)])],2)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/single-blog/_id/index.vue?vue&type=template&id=78751498&scoped=true&

// EXTERNAL MODULE: ./services/xhr.js
var xhr = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/single-blog/_id/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: "SingleBlog",
  head: {
    title: 'Single Blog'
  },

  data() {
    return {
      webUrl: xhr["b" /* webUrl */],
      formTitle: '',
      method: '',
      addReplyComment: false,
      comment: '',
      replyComment: '',
      orgComment: {},
      comment_id: '',
      comments: [],
      blog: null,
      id: null,
      index: null
    };
  },

  async asyncData({
    $api,
    params
  }) {
    const blog = await $api.$get(`blogs/single-blog/${params.id}`);
    return {
      blog: blog
    };
  },

  methods: {
    EditComment(index) {
      this.addReplyComment = !this.addReplyComment;
      this.index = index;
      this.replyComment = this.blog.comments[index].message;
      this.method = 'edit';
      this.formTitle = 'Edit Comment';
    },

    async AddComment() {
      let comment = {
        message: this.comment,
        writer: this.$auth.user.username,
        replies: []
      };
      this.blog.comments.push(comment);
      await this.$api.put(`blogs/comment`, this.blog).then(res => {
        this.blog = res.data;
      }).catch(err => console.log(err));
      this.comment = '';
      this.$refs.add.reset();
    },

    ShowReplyComment(index) {
      this.index = index;
      this.addReplyComment = !this.addReplyComment;
      this.method = 'reply';
      this.formTitle = 'Reply Comment';
      this.replyComment = '';
    },

    async ChangeComment() {
      if (this.method === 'reply') {
        let reply = {
          message: this.replyComment,
          writer: this.$auth.user.username
        };
        this.blog.comments[this.index].replies.push(reply);
        await this.$api.put(`blogs/comment`, this.blog).then(res => {
          this.blog = res.data;
        }).catch(err => console.log(err));
      } else {
        this.blog.comments[this.index].message = this.replyComment;
        await this.$api.put(`blogs/comment`, this.blog).then(res => {
          this.blog = res.data;
        }).catch(err => console.log(err));
      }

      this.replyComment = '';
      this.addReplyComment = !this.addReplyComment;
      this.$refs.reply.reset();
    },

    async DeleteComment(index) {
      this.replyComment = this.blog.comments[index].message;
      let comments = this.blog.comments.filter(comment => comment.message !== this.replyComment);
      this.blog.comments = comments;
      await this.$api.put(`blogs/comment`, this.blog).then(res => {
        this.blog = res.data;
      }).catch(err => console.log(err));
    }

  }
});
// CONCATENATED MODULE: ./pages/single-blog/_id/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var single_blog_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/single-blog/_id/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  single_blog_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "78751498",
  "556b3fc2"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map