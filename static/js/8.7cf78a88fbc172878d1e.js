webpackJsonp([8],{PuW3:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"Follow",data:function(){return{users:[]}},methods:{followFunc:function(t){this.users[t].status=!this.users[t].status;var s=this.users[t].status,a=this.$store.state.userMsg._id,e=this.users[t]._id;this.$ajax.post("/admin/follow",{action:s,uid:a,authorId:e}).then(function(t){})}},created:function(){var t=this;this.$ajax.post("/admin/myfollow",{id:this.$store.state.userMsg._id}).then(function(s){var a=s.data.doc;a&&(a.map(function(t){return t.status=!0}),t.users=a)})},components:{Heads:a("X5Fx").a}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"follow"},[a("div",{staticClass:"head-wrap"},[a("Heads",{attrs:{title:"我的关注"}})],1),t._v(" "),a("div",{staticClass:"follow-body"},[a("div",t._l(t.users,function(s,e){return a("li",{staticClass:"list-item"},[a("div",{staticClass:"avatar-wrap"},[a("img",{staticClass:"user-avatar",attrs:{src:s.headimgSrc}})]),t._v(" "),a("div",{staticClass:"user-desc"},[a("div",{staticClass:"user-name"},[t._v(t._s(s.userName))]),t._v(" "),a("div",{staticClass:"user-motto"},[t._v(t._s(s.gxqm))])]),t._v(" "),a("button",{staticClass:"follow-btn",domProps:{textContent:t._s(s.status?"已关注":"+关注")},on:{click:function(s){t.followFunc(e)}}})])}))]),t._v(" "),a("div",{staticClass:"footer",domProps:{textContent:t._s(t.users.length?"--end--":"暂无内容")}})])},staticRenderFns:[]};var n=a("VU/8")(e,i,!1,function(t){a("kIhP")},"data-v-73b1a787",null);s.default=n.exports},kIhP:function(t,s){}});
//# sourceMappingURL=8.7cf78a88fbc172878d1e.js.map