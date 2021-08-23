(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6d8469e"],{"0e8f":function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return l}));a("99af");var r=a("b775"),n="",s=function(){return Object(r["c"])("".concat(n,"/api-user/department/findAll"))},i=function(e){return Object(r["b"])("".concat(n,"/api-user/department/").concat(e))};function o(e){return Object(r["a"])({url:"".concat(n,"/api-user/department/saveOrUpdate"),method:"post",isJson:!0,data:JSON.stringify(e)})}var l=function(e){return Object(r["c"])("".concat(n,"/api-user/department/editName"),e)}},3183:function(e,t,a){},"5f24":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("section",{staticClass:"search-container"},[a("el-form",{staticClass:"search-form-wrap",attrs:{size:"small","label-width":"80px","label-position":"right",model:e.searchForm}},[a("el-row",[a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"用户名"}},[a("el-input",{attrs:{placeholder:"用户名"},model:{value:e.searchForm.username,callback:function(t){e.$set(e.searchForm,"username",t)},expression:"searchForm.username"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"显示名称"}},[a("el-input",{attrs:{placeholder:"显示名称"},model:{value:e.searchForm.nickname,callback:function(t){e.$set(e.searchForm,"nickname",t)},expression:"searchForm.nickname"}})],1)],1),a("el-col",{attrs:{span:6}},[a("el-form-item",{attrs:{label:"所属部门"}},[a("org-tree",{ref:"orgTreeDom",staticStyle:{width:"100%"},attrs:{"corp-id":e.corpId},model:{value:e.searchForm.departmentId,callback:function(t){e.$set(e.searchForm,"departmentId",t)},expression:"searchForm.departmentId"}})],1)],1),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"search-form_btn"},[a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-search"},on:{click:e.fnSearch}},[e._v("搜索")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary"},on:{click:e.resetData}},[e._v("重置")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary",icon:"el-icon-plus"},on:{click:e.addUser}},[e._v("添加用户")])],1)])],1)],1)],1),a("div",{staticClass:"divide-line"}),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"username",label:"用户名",width:"120"}}),a("el-table-column",{attrs:{prop:"nickname",label:"显示名称"}}),a("el-table-column",{attrs:{prop:"mobile",label:"手机",width:"120"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),a("el-table-column",{attrs:{prop:"roles",label:"项目角色"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.roles,(function(t){return a("span",{key:t.id,staticClass:"span-roles"},[e._v(e._s(t.name))])}))}}])}),a("el-table-column",{attrs:{label:"操作",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"user-info-btn",on:{click:function(a){return e.seeUserInfo(t.row)}}},[e._v("用户详情")]),a("span",{staticClass:"remove-user-btn",on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("移除")])]}}])})],1),a("div",{staticClass:"mt"},[a("el-pagination",{attrs:{"page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{attrs:{title:"用户详情",visible:e.dialogShow,width:"30%",center:""},on:{"update:visible":function(t){e.dialogShow=t}}},[a("el-form",{attrs:{"label-position":"left","label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名："}},[a("span",{staticClass:"gray-color"},[e._v(" "+e._s(e.userInfo.username)+" ")])]),a("el-form-item",{attrs:{label:"显示名称："}},[a("span",{staticClass:"gray-color"},[e._v(" "+e._s(e.userInfo.nickname)+" ")])]),a("el-form-item",{attrs:{label:"性别："}},[a("span",{staticClass:"gray-color"},[e._v(" "+e._s("1"==e.userInfo.sex?"男":"女")+" ")])]),a("el-form-item",{attrs:{label:"手机："}},[a("span",{staticClass:"gray-color"},[e._v(" "+e._s(e.userInfo.mobile)+" ")])]),a("el-form-item",{attrs:{label:"邮箱："}},[a("span",{staticClass:"gray-color"},[e._v(" "+e._s(e.userInfo.email)+" ")])]),a("el-form-item",{attrs:{label:"系统角色："}},e._l(e.userInfo.roles,(function(t){return a("span",{key:t.id,staticClass:"gray-color"},[e._v(e._s(t.name)+" ")])})),0),a("el-form-item",{attrs:{label:"部门："}},[a("el-tooltip",{attrs:{content:e.userInfo.department,placement:"top"}},[a("span",{staticClass:"gray-color"},[e._v(e._s(e.userInfo.department)),a("i",{staticClass:"el-icon-info"})])])],1),a("el-form-item",{attrs:{label:"创建时间："}},[a("span",{staticClass:"gray-color"},[e._v(e._s(e._f("formateDate")(e.userInfo.createTime)))])])],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogShow=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogShow=!1}}},[e._v("确 定")])],1)],1),a("el-dialog",{attrs:{title:"添加用户",visible:e.dialogVisable,width:"30%",center:""},on:{"update:visible":function(t){e.dialogVisable=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-position":"right","label-width":"70px"}},[a("el-form-item",{attrs:{label:"用户名："}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:!0,clearable:"",placeholder:"用户名"},on:{change:e.fnChangeUser},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}},[e.userList.length>0?e._l(e.userList,(function(t){return a("el-option",{key:t.id,attrs:{value:t.username}},[e._v(" "+e._s(t.username)+" ")])})):e._e()],2)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisable=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.fnComfirm}},[e._v("确 定")])],1)],1)],1)},n=[],s=(a("7db0"),a("7bbf")),i=a("c24f"),o=a("b775"),l="",c=function(e){return Object(o["c"])("".concat(l,"/api-user/users/findUsersOnPro"),e)},u=function(e){return Object(o["c"])("".concat(l,"/api-project/project/delProMenber"),e)},d=function(e){return Object(o["c"])("".concat(l,"/api-project/project/addProMenber"),e)},f={name:"ProjectUserList",components:{OrgTree:s["a"]},data:function(){return{corpId:1,searchForm:{username:"",nickname:"",departmentId:""},tableData:[],loading:!0,count:0,limit:10,page:1,dialogShow:!1,userInfo:{},dialogVisable:!1,form:{username:""},userList:[],curProId:null,curUserId:null}},mounted:function(){this.curProId=this.$store.getters.currentProjectId||2,this.getDataList(),this.getUserList(),this.$refs["orgTreeDom"].fnClear()},methods:{getUserList:function(){var e=this;Object(i["j"])({username:""}).then((function(t){e.userList=t})).catch((function(e){}))},getDataList:function(){var e=this;this.loading=!0,c({limit:this.limit,page:this.page,proId:this.curProId,username:this.searchForm.username,nickname:this.searchForm.nickname,departmentId:this.searchForm.departmentId}).then((function(t){var a=t.data,r=t.count;e.tableData=a,e.count=r,e.loading=!1}))},fnSearch:function(){this.page=1,this.getDataList()},resetData:function(){var e=this;this.page=1,this.searchForm.username="",this.searchForm.nickname="",this.searchForm.departmentId="",this.$nextTick((function(){e.corpId=0,e.$refs["orgTreeDom"].fnClear()})),this.getDataList()},handleSizeChange:function(e){this.limit=e,this.getDataList()},handleCurrentChange:function(e){this.page=e,this.getDataList()},seeUserInfo:function(e){this.userInfo=e,this.dialogShow=!0},addUser:function(){this.dialogVisable=!0},fnChangeUser:function(e){this.form.username=e;var t=this.userList.find((function(t){return t.username===e}));this.curUserId=t&&t.id},fnComfirm:function(){var e=this;d({proId:this.curProId,userId:this.curUserId}).then((function(t){0===t.resp_code&&(e.$message({type:"success",message:"添加成功!"}),e.limit=10,e.page=1,e.getDataList(),e.dialogVisable=!1)})).catch((function(){}))},handleDelete:function(e){var t=this;this.$confirm("是否移除该用户？","提示",{cancelButtonText:"取消",confirmButtonText:"确认",type:"warning"}).then((function(){var a=e.id;u({userId:a}).then((function(e){0===e.resp_code&&(t.$message({type:"success",message:"删除成功!"}),t.limit=10,t.page=1,t.getDataList())})).catch((function(e){}))})).catch((function(){}))}}},m=f,h=(a("bfd4"),a("2877")),p=Object(h["a"])(m,r,n,!1,null,"e1ddb468",null);t["default"]=p.exports},"7bbf":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-tree-select",{ref:"treeSelect",attrs:{loading:e.loading,clearable:e.clearable,"only-child":e.onlyChild,"tree-data":e.treeData},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}})},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-select",{ref:"select",attrs:{value:e.currentValuet,loading:e.loading,clearable:e.clearable},on:{clear:e.clearData}},[a("el-option",{staticClass:"dropdown__tree",attrs:{value:0,label:e.currentLabel}},[a("el-tree",{ref:"tree",attrs:{data:e.treeData,props:e.defaultProps,"node-key":"id","highlight-current":"",accordion:"","default-expanded-keys":[e.pid]},on:{"node-click":e.handleNodeClick}})],1)],1)},i=[],o=(a("b0c0"),{components:{},name:"vTreeSelect",props:{value:{required:!0},loading:{type:Boolean},clearable:{type:Boolean},treeData:{required:!0,type:Array},onlyChild:{type:Boolean,default:!1}},data:function(){return{currentLabel:void 0,pid:void 0,defaultProps:{children:"subs",label:"name"}}},computed:{currentValuet:function(){if(this.pid="",null!==this.value&&void 0!==this.value){var e=this.currentNode(this.treeData,this.value);return this.pid=!0===e||void 0===e?"":e,0}this.pid=""}},methods:{currentNode:function(e,t){for(var a in e){if(e[a].id===t)return this.selectNode(e[a]),!0;if(e[a].subs&&e[a].subs.length>0){var r=this.currentNode(e[a].subs,t);if(void 0!==r)return!0===r?e[a].id:r}}},handleNodeClick:function(e){return(!this.onlyChild||(!e.subs||0===e.subs.length))&&this.$emit("input",parseInt(e.id))},selectNode:function(e){var t=this;this.$nextTick((function(){t.$refs["tree"].setCurrentKey(e.id)})),this.$refs["select"]&&(this.$refs["select"].visible=!1),this.currentLabel=e.name},clearData:function(){this.$emit("input",void 0)}}}),l=o,c=(a("80ad"),a("2877")),u=Object(c["a"])(l,s,i,!1,null,null,null),d=u.exports,f=a("0e8f"),m={name:"OrgTree",components:{vTreeSelect:d},props:{value:{required:!0},corpId:{required:!1},clearable:{type:Boolean},onlyChild:{type:Boolean}},computed:{currentValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},data:function(){return{loading:!1,treeData:[]}},methods:{refresh:function(){var e=this;this.loading=!0,Object(f["c"])().then((function(t){e.loading=!1,e.treeData=[{subs:t,id:0,name:"部门"}]}))},fnClear:function(){this.$refs["treeSelect"].clearData()}},created:function(){this.refresh()},mounted:function(){var e=this;this.$refs["treeSelect"].$on("nodeClick",(function(t){e.$emit("nodeClick",t)}))}},h=m,p=Object(c["a"])(h,r,n,!1,null,null,null);t["a"]=p.exports},"7f05":function(e,t,a){},"80ad":function(e,t,a){"use strict";a("3183")},bfd4:function(e,t,a){"use strict";a("7f05")}}]);