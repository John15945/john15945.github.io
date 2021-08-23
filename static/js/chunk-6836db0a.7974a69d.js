(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6836db0a"],{"03b3":function(e,a,t){},"3f5e":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var s=t("b775"),r="";function o(e){return Object(s["a"])({url:"".concat(r,"/api-file/files-anon"),method:"post",isFile:!0,data:e})}},"8ef0":function(e,a,t){"use strict";t("03b3")},bcf0:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[t("el-row",[t("el-col",{attrs:{span:8}},[t("div",{staticClass:"user-center"},[t("p",{staticClass:"header-title"},[e._v("用户信息")]),t("div",{staticClass:"avatar-wrapper u-align-center"},[t("el-upload",{ref:"upload",staticClass:"upload-capacity",attrs:{action:"","show-file-list":!1,"file-list":e.fileList,accept:"image/jpeg, image/png, image/jpeg","before-upload":e.beforeFileUpload,"http-request":e.fnCustomRequest}},[e.uploadSuccess?t("img",{staticClass:"user-avatar",attrs:{src:e.uploadImgUrl,alt:"头像"}}):t("img",{staticClass:"user-avatar",attrs:{src:e.userInfo.headImgUrl}})])],1),t("p",{staticClass:"cell mt-40"},[t("span",{staticClass:"label"},[e._v("用户名：")]),t("span",{staticClass:"value"},[e._v(e._s(e.userInfo.username||"--"))])]),t("p",{staticClass:"cell mt-24"},[t("span",{staticClass:"label"},[e._v("显示名称：")]),t("span",{staticClass:"value"},[e._v(e._s(e.userInfo.nickname))])]),t("p",{staticClass:"cell mt-24"},[t("span",{staticClass:"label"},[e._v("性别：")]),t("span",{staticClass:"value"},[e._v(e._s(0===e.userInfo.sex?"女":"男"))])]),t("p",{staticClass:"cell mt-24"},[t("span",{staticClass:"label"},[e._v("手机：")]),t("span",{staticClass:"value"},[e._v(e._s(e.userInfo.mobile))])]),t("p",{staticClass:"cell mt-24"},[t("span",{staticClass:"label"},[e._v("邮箱：")]),t("span",{staticClass:"value"},[e._v(e._s(e.userInfo.email))])]),t("p",{staticClass:"cell mt-24"},[t("span",{staticClass:"label"},[e._v("所属部门：")]),t("span",{staticClass:"value"},[e._v(e._s(e.userInfo.department))])]),t("p",{staticClass:"cell mt-24"},[t("span",{staticClass:"label"},[e._v("创建时间：")]),t("span",{staticClass:"value"},[e._v(e._s(e.userInfo.createTime))])]),t("div",{staticClass:"edit-btn mt-24",on:{click:e.updateUserInfo}},[t("i",{staticClass:"el-icon-edit-outline"}),t("span",[e._v("编辑")])]),t("div",{staticClass:"edit-btn mt-24",on:{click:e.fnUpdatePassword}},[t("i",{staticClass:"el-icon-edit-outline"}),t("span",[e._v("修改密码")])])])])],1),t("el-dialog",{attrs:{title:"编辑用户",visible:e.editInfoShow,width:"30%",center:"","destroy-on-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(a){e.editInfoShow=a}}},[t("el-form",{ref:"userInfoForm",attrs:{size:"small",model:e.dataForm,rules:e.dataFormRules,"label-width":"120px","label-position":"left"}},[t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{attrs:{maxlength:20,disabled:""},model:{value:e.dataForm.username,callback:function(a){e.$set(e.dataForm,"username",a)},expression:"dataForm.username"}})],1),t("el-form-item",{attrs:{label:"显示名称",prop:"nickname"}},[t("el-input",{attrs:{maxlength:20},model:{value:e.dataForm.nickname,callback:function(a){e.$set(e.dataForm,"nickname",a)},expression:"dataForm.nickname"}})],1),t("el-form-item",{attrs:{label:"性别"}},[t("el-radio-group",{attrs:{disabled:""},model:{value:e.dataForm.sex,callback:function(a){e.$set(e.dataForm,"sex",a)},expression:"dataForm.sex"}},[t("el-radio",{attrs:{label:0}},[e._v("女")]),t("el-radio",{attrs:{label:1}},[e._v("男")])],1)],1),t("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[t("el-input",{attrs:{maxlength:11},model:{value:e.dataForm.mobile,callback:function(a){e.$set(e.dataForm,"mobile",a)},expression:"dataForm.mobile"}})],1),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{maxlength:20},model:{value:e.dataForm.email,callback:function(a){e.$set(e.dataForm,"email",a)},expression:"dataForm.email"}})],1),t("el-form-item",{attrs:{label:"系统角色"}},[t("el-select",{staticStyle:{width:"100%"},attrs:{disabled:"",clearable:""},on:{change:e.fnChangeRole},model:{value:e.dataForm.role,callback:function(a){e.$set(e.dataForm,"role",a)},expression:"dataForm.role"}},[e.roleList.length>0?e._l(e.roleList,(function(a){return t("el-option",{key:a.id,attrs:{value:a.name}},[e._v(" "+e._s(a.name)+" ")])})):e._e()],2)],1),t("el-form-item",{attrs:{label:"所属部门"}},[t("el-input",{attrs:{maxlength:20,disabled:""},model:{value:e.dataForm.department,callback:function(a){e.$set(e.dataForm,"department",a)},expression:"dataForm.department"}})],1)],1),t("div",{staticClass:"dialog_footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small"},on:{click:function(a){return a.stopPropagation(),e.cancelClick(a)}}},[e._v("取消")]),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),e.confirmClick(a)}}},[e._v("确定")])],1)],1),t("el-dialog",{attrs:{title:"修改密码",visible:e.passwordShow,width:"30%",center:"","destroy-on-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(a){e.passwordShow=a}}},[t("el-form",{ref:"pwdInfoForm",attrs:{size:"small",model:e.pwdForm,rules:e.pwdFormRules,"label-width":"120px","label-position":"left"}},[t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{attrs:{disabled:""},model:{value:e.pwdForm.username,callback:function(a){e.$set(e.pwdForm,"username",a)},expression:"pwdForm.username"}})],1),t("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[t("el-input",{attrs:{type:"password",maxlength:20},model:{value:e.pwdForm.oldPassword,callback:function(a){e.$set(e.pwdForm,"oldPassword",a)},expression:"pwdForm.oldPassword"}})],1),t("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[t("el-input",{attrs:{type:"password",maxlength:20},model:{value:e.pwdForm.newPassword,callback:function(a){e.$set(e.pwdForm,"newPassword",a)},expression:"pwdForm.newPassword"}})],1),t("el-form-item",{attrs:{label:"确认密码",prop:"comfirmPassword"}},[t("el-input",{attrs:{type:"password",maxlength:20},model:{value:e.pwdForm.comfirmPassword,callback:function(a){e.$set(e.pwdForm,"comfirmPassword",a)},expression:"pwdForm.comfirmPassword"}})],1)],1),t("span",{staticClass:"dialog_footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"small"},on:{click:function(a){return a.stopPropagation(),e.fnCancel(a)}}},[e._v("取消")]),t("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),e.fnConfirm(a)}}},[e._v("确定")])],1)],1)],1)},r=[],o=t("1da1"),l=(t("96cf"),t("caad"),t("7db0"),t("b0c0"),t("c24f")),n=t("3f5e"),i={name:"UserCenter",data:function(){var e=this,a=function(a,t,s){""===t?s(new Error("请输入新密码")):(""!==e.pwdForm.comfirmPassword&&e.$refs.pwdInfoForm.validateField("comfirmPassword"),s())},t=function(a,t,s){""===t?s(new Error("请输入确认密码")):t!==e.pwdForm.newPassword?s(new Error("确认密码与新密码不一致!")):s()};return{uploadSuccess:!1,uploadImgUrl:"",fileList:[],dataList:[],userInfo:{},editInfoShow:!1,roleList:[],dataForm:{username:"",nickname:"",sex:null,mobile:"",email:"",role:null,department:"",departmentId:null},dataFormRules:{nickname:[{required:!0,message:"请输入显示名称",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{max:11,min:11,message:"手机号11位长度"},{validator:this.handleTelCheck}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:this.handleEmailCheck}]},passwordShow:!1,pwdForm:{username:"",oldPassword:"",newPassword:"",comfirmPassword:""},pwdFormRules:{oldPassword:[{required:!0,message:"请输入旧密码",trigger:"blur"}],newPassword:[{required:!0,validator:a,trigger:"blur"}],comfirmPassword:[{required:!0,validator:t,trigger:"blur"}]}}},created:function(){this.initUserInfo()},methods:{handleTelCheck:function(e,a,t){var s=/(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}/;s.test(a)||t("请输入符合规范的手机号"),t()},handleEmailCheck:function(e,a,t){var s=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;s.test(a)||t("请输入符合规范的邮箱账号"),t()},initUserInfo:function(){var e=this;Object(l["b"])().then((function(a){e.userInfo=a&&a.datas||{}})).catch((function(){}))},changeHeadImg:function(e){var a=this;Object(l["h"])({headImgUrl:e}).then((function(e){0===(null===e||void 0===e?void 0:e.resp_code)&&a.$message.success("上传成功!")})).catch((function(){}))},beforeFileUpload:function(e){return!!["image/jpeg","image/png","image/jpeg"].includes(null===e||void 0===e?void 0:e.type)||(this.$message.error("文件格式错误，请重新选择"),!1)},fnCustomRequest:function(e){var a=this;this.uploadSuccess=!1;var t=new FormData;t.append("file",e.file),Object(n["a"])(t).then((function(e){a.uploadImgUrl=null===e||void 0===e?void 0:e.url,a.uploadSuccess=!0,e&&e.url&&(a.$store.dispatch("user/changeAvatar",{img:e.url}),a.changeHeadImg(a.uploadImgUrl))})).catch((function(){a.uploadSuccess=!1}))},fnChangeRole:function(e){this.dataForm.role=e;var a=this.roleList.find((function(a){return a.name===e}));this.curRoleId=a&&a.id},updateUserInfo:function(){var e=Object.assign({},this.userInfo);this.roleList=e.roles,this.dataForm={id:e.id,username:e.username,nickname:e.nickname,sex:e.sex,mobile:e.mobile,email:e.email,role:e.role,department:e.departmentId},this.editInfoShow=!0},cancelClick:function(){this.$refs["userInfoForm"].resetFields(),this.editInfoShow=!1},confirmClick:function(){var e=this;this.$refs["userInfoForm"].validate((function(a){if(a){var t={id:e.dataForm.id,nickname:e.dataForm.nickname,mobile:e.dataForm.mobile,email:e.dataForm.email};Object(l["f"])(t).then((function(a){0===a.resp_code&&(e.cancelClick(),e.initUserInfo(),e.$store.dispatch("user/modifyNickName",{nickname:t.nickname}),e.$message({type:"success",message:"修改成功!"}))})).catch((function(){}))}}))},fnUpdatePassword:function(){var e=Object.assign({},this.userInfo);this.pwdForm={id:e.id,username:e.username,oldPassword:"",newPassword:"",comfirmPassword:""},this.passwordShow=!0},fnCancel:function(){this.$refs["pwdInfoForm"].resetFields(),this.passwordShow=!1},fnConfirm:function(){var e=this;this.$refs["pwdInfoForm"].validate((function(a){if(a){var t=Object.assign({},e.pwdForm);Object(l["i"])(t).then((function(a){0===a.resp_code?(e.$message({type:"success",message:"修改成功!"}),e.fnCancel(),e.fnLogout()):e.$message({type:"error",message:a.resp_msg})})).catch((function(){}))}}))},fnLogout:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$store.dispatch("user/logout");case 2:e.$router.push("/login?redirect=".concat(e.$route.fullPath));case 3:case"end":return a.stop()}}),a)})))()}}},c=i,d=(t("8ef0"),t("2877")),m=Object(d["a"])(c,s,r,!1,null,"ff2f4434",null);a["default"]=m.exports}}]);