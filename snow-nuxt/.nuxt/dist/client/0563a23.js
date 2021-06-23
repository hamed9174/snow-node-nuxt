(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{373:function(t,e,o){"use strict";o.r(e);var n=o(32),r=(o(9),o(75),o(119)),l={name:"SinglePortfolio",head:{title:"Single Portfolio"},data:function(){return{webUrl:r.b,formTitle:"",method:"",addReplyComment:!1,comment:"",replyComment:"",orgComment:{},comments:[],portfolio:null,id:null,index:null}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$api,n=t.params,e.next=3,o.$get("portfolios/single-portfolio/".concat(n.id));case 3:return r=e.sent,e.abrupt("return",{portfolio:r});case 5:case"end":return e.stop()}}),e)})))()},watch:{addReplyComment:function(t){t||(this.replyComment="")}},methods:{EditComment:function(t){this.addReplyComment=!this.addReplyComment,this.index=t,this.replyComment=this.portfolio.comments[t].message,this.method="edit",this.formTitle="Edit Comment"},AddComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={message:t.comment,writer:t.$auth.user.username,replies:[]},t.portfolio.comments.push(o),e.next=4,t.$api.put("portfolios/comment",t.portfolio).then((function(e){t.portfolio=e.data})).catch((function(t){return console.log(t)}));case 4:t.comment="",t.$refs.add.reset();case 6:case"end":return e.stop()}}),e)})))()},ShowReplyComment:function(t){this.index=t,this.addReplyComment=!this.addReplyComment,this.method="reply",this.formTitle="Reply Comment"},ChangeComment:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("reply"!==t.method){e.next=7;break}return o={message:t.replyComment,writer:t.$auth.user.username},t.portfolio.comments[t.index].replies.push(o),e.next=5,t.$api.put("portfolios/comment",t.portfolio).then((function(e){t.portfolio=e.data})).catch((function(t){return console.log(t)}));case 5:e.next=10;break;case 7:return t.portfolio.comments[t.index].message=t.replyComment,e.next=10,t.$api.put("portfolios/comment",t.portfolio).then((function(e){t.portfolio=e.data})).catch((function(t){return console.log(t)}));case 10:t.replyComment="",t.addReplyComment=!t.addReplyComment,t.$refs.reply.reset();case 13:case"end":return e.stop()}}),e)})))()},DeleteComment:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e.replyComment=e.portfolio.comments[t].message,n=e.portfolio.comments.filter((function(t){return t.message!==e.replyComment})),e.portfolio.comments=n,o.next=5,e.$api.put("portfolios/comment",e.portfolio).then((function(t){e.portfolio=t.data})).catch((function(t){return console.log(t)}));case 5:case"end":return o.stop()}}),o)})))()}}},m=o(31),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio row"},[o("div",{staticClass:"container"},[o("div",{staticClass:"portfolios-content mt-4"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-8"},[o("div",[o("h1",{staticClass:"pb-4"},[t._v(t._s(t.portfolio.title))]),t._v(" "),o("p",[t._v("\n              "+t._s(t.portfolio.description)+"\n            ")])])]),t._v(" "),o("div",{staticClass:"col-md-4 portfolio-info mt-5"},[o("p",[o("span",{staticClass:"portfolio-info-title"},[t._v("Client")]),t._v(" : "),o("span",[t._v("\t"+t._s(t.portfolio.client))])]),t._v(" "),o("p",[o("span",{staticClass:"portfolio-info-title"},[t._v("Date")]),t._v(" : "),o("span",[t._v(t._s(t.portfolio.create_at.month)+"."+t._s(t.portfolio.create_at.day)+"."+t._s(t.portfolio.create_at.year))])]),t._v(" "),t._m(0)])])])]),t._v(" "),o("div",{staticClass:"col-12 portfolio-img"},[o("img",{attrs:{src:t.webUrl+"/assets/images/"+t.portfolio.img,alt:""}})]),t._v(" "),o("div",{staticClass:"my-comments col-12 row pt-5"},[o("div",{staticClass:"container"},[o("b-card",{attrs:{"bg-variant":"dark","text-variant":"white"}},[o("b-card-title",[t._v("\n          Comments ("+t._s(t.portfolio.comments.length)+")\n        ")]),t._v(" "),o("div",{staticClass:"add-comment py-3"},[o("ValidationObserver",{ref:"add",staticClass:"form-validate row",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[o("b-form",{staticClass:"form-row col-12",attrs:{enctype:"application/json"},on:{submit:function(e){return e.preventDefault(),n(t.AddComment)}}},[o("div",{staticClass:"col-8 py-3"},[o("b-form-group",{attrs:{id:"input-group-1"}},[o("ValidationProvider",{attrs:{name:"Comment"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("b-form-input",{attrs:{type:"text",placeholder:"Add Comment"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}}),t._v(" "),o("span",[t._v(t._s(n[0]))])]}}],null,!0)})],1)],1),t._v(" "),o("div",{staticClass:"col-4 py-3"},[o("b-button",{attrs:{type:"submit"}},[t._v("send comment")])],1)])]}}])})],1),t._v(" "),o("b-modal",{attrs:{size:"xl",title:t.formTitle,"hide-footer":!0},model:{value:t.addReplyComment,callback:function(e){t.addReplyComment=e},expression:"addReplyComment"}},[o("div",{staticClass:"add-comment py-3"},[o("ValidationObserver",{ref:"reply",staticClass:"form-validate row",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.handleSubmit;return[o("b-form",{staticClass:"form-row col-12",attrs:{enctype:"application/json"},on:{submit:function(e){return e.preventDefault(),n(t.ChangeComment)}}},[o("div",{staticClass:"col-8 py-3"},[o("b-form-group",{attrs:{id:"input-group-1"}},[o("ValidationProvider",{attrs:{name:"Last-Name",rules:"required|min:20"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[o("b-form-input",{attrs:{type:"text",placeholder:"Add Reply Comment"},model:{value:t.replyComment,callback:function(e){t.replyComment=e},expression:"replyComment"}}),t._v(" "),o("span",[t._v(t._s(n[0]))])]}}],null,!0)})],1)],1),t._v(" "),o("div",{staticClass:"col-4 py-3"},[o("b-button",{attrs:{type:"submit"}},[t._v("send comment")])],1)])]}}])})],1)]),t._v(" "),t.portfolio.comments.length?o("div",{staticClass:"comments"},t._l(t.portfolio.comments,(function(e,n){return o("div",{staticClass:"comment py-3"},[o("b-card",{attrs:{"bg-variant":"white","text-variant":"dark"}},[o("h3",[t._v(t._s(e.message))]),t._v(" "),o("div",{staticClass:"comment-options"},[o("span",{on:{click:function(e){return t.ShowReplyComment(n)}}},[t._v("Reply")]),t._v(" "),o("span",{on:{click:function(e){return t.EditComment(n)}}},[t._v("Edit")]),t._v(" "),o("span",{on:{click:function(e){return t.DeleteComment(n)}}},[t._v("Delete")])]),t._v(" "),e.replies.length?o("div",{staticClass:"replies mt-3"},[o("b-card",t._l(e.replies,(function(e){return o("div",[o("h2",[t._v(t._s(e.writer))]),t._v(" "),o("h3",[t._v(t._s(e.message))])])})),0)],1):t._e()])],1)})),0):t._e()],1)],1)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("span",{staticClass:"portfolio-info-title"},[t._v("Share")]),t._v(" : "),o("span",[t._v("\tFacebook, Twitter, Pinterest")])])}],!1,null,"26783bd8",null);e.default=component.exports}}]);