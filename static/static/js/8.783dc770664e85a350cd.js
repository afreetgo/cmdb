webpackJsonp([8],{"9GxW":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),i=n("gyMJ"),r={name:"user-mgmt",data:function(){return{users:[],add_location:{right:(window.innerWidth-1200)/2>20?Math.round((window.innerWidth-1200)/2):20,top:window.innerHeight-140},page_size:10,total:0,current_page:1,search:null}},mounted:function(){this.get_data()},methods:{on_change:function(t){var e=new(a.default.component("ChangeUser"))({propsData:{is_create:!1,data:t}});e.$mount(),this.$el.appendChild(e.$el)},on_delete:function(t){var e=this;this.$confirm("确认删除用户?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.b.delete("mgmt/user/"+t.id).then(function(n){e.$message.success("删除成功"),e.users.splice(e.users.indexOf(t),1)}).catch(function(t){})})},on_add_user:function(){var t=new(a.default.component("ChangeUser"))({propsData:{is_create:!0,data:null}});t.$mount(),this.$el.appendChild(t.$el)},get_data:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n={page_size:this.page_size,page:this.current_page};null!=e&&(n.search=e),console.log("params:",n),i.b.get("mgmt/user",{params:n}).then(function(n){t.users=n.data.results,t.total=n.data.count,e&&(t.current_page=1)}).catch(function(t){})},on_current_change:function(t){this.current_page=t,this.get_data()},on_search:function(){this.get_data(this.search)}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{width:"1200px",margin:"0px auto"}},[n("div",{staticStyle:{"z-index":"9999",position:"fixed"},style:{right:t.add_location.right+"px",top:t.add_location.top+"px"},attrs:{id:"dg"}},[n("el-button",{attrs:{round:""},on:{click:t.on_add_user}},[n("span",{staticStyle:{"font-size":"50px"}},[t._v("+")])])],1),t._v(" "),n("div",[n("el-input",{staticStyle:{width:"240px"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.on_search}},[t._v("搜索")])],1),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.users}},[n("el-table-column",{attrs:{type:"index",width:"50"}}),t._v(" "),n("el-table-column",{attrs:{label:"用户名",prop:"username"}}),t._v(" "),n("el-table-column",{attrs:{label:"管理员"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.is_staff?"是":"否"))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),t._v(" "),n("el-table-column",{attrs:{label:"添加时间",prop:"date_joined"}}),t._v(" "),n("el-table-column",{attrs:{label:"最后登录时间",prop:"last_login"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticStyle:{padding:"4px"},attrs:{size:"mini",type:"warning"},on:{click:function(n){t.on_change(e.row)}}},[t._v("修改")]),t._v(" "),n("el-button",{staticStyle:{padding:"4px"},attrs:{size:"mini",type:"danger"},on:{click:function(n){t.on_delete(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("el-pagination",{staticStyle:{float:"right"},attrs:{background:"","current-page":t.current_page,"page-size":t.page_size,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.on_current_change,"update:currentPage":function(e){t.current_page=e}}})],1)},staticRenderFns:[]};var l=n("VU/8")(r,o,!1,function(t){n("ZdZp")},"data-v-5c814335",null);e.default=l.exports},ZdZp:function(t,e){}});
//# sourceMappingURL=8.783dc770664e85a350cd.js.map