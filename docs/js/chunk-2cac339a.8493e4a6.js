(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cac339a"],{"26f5":function(t,n,e){},5891:function(t,n,e){},"6ee4":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{on:{click:t.onClick}},[t._t("default")],2)},a=[],i=e("2b0e"),s=i["a"].extend({methods:{onClick:function(){this.$emit("click")}}}),c=s,r=(e("af2c"),e("2877")),u=Object(r["a"])(c,o,a,!1,null,"1116f9fe",null);n["a"]=u.exports},"8b1b":function(t,n,e){"use strict";var o=e("26f5"),a=e.n(o);a.a},a55b:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("This is an login page")]),e("login-form",{on:{submit:t.login}})],1)},a=[],i=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("text-input",{attrs:{placeholder:"ID"},on:{change:t.onChangeId}}),e("text-input",{attrs:{placeholder:"Password"},on:{change:t.onChangePassword}}),e("my-button",{on:{click:t.onSubmit}},[t._v("Login")])],1)},c=[],r=e("6ee4"),u=e("d7d0"),l=i["a"].extend({components:{MyButton:r["a"],TextInput:u["a"]},data:function(){return{id:"",password:""}},methods:{onChangeId:function(t){this.id=t},onChangePassword:function(t){this.password=t},onSubmit:function(){var t={id:this.id,password:this.password};this.$emit("submit",t)}}}),d=l,h=e("2877"),p=Object(h["a"])(d,s,c,!1,null,null,null),f=p.exports,m=i["a"].extend({components:{LoginForm:f},data:function(){return{id:"",password:""}},methods:{login:function(t){var n=this,e=t.id,o=t.password;this.$store.dispatch("context/login",{id:e,password:o}).then((function(){n.$router.push({name:"user"})})).catch((function(t){alert(t.message)}))}}}),g=m,v=Object(h["a"])(g,o,a,!1,null,null,null);n["default"]=v.exports},af2c:function(t,n,e){"use strict";var o=e("5891"),a=e.n(o);a.a},d7d0:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.text},on:{input:[function(n){n.target.composing||(t.text=n.target.value)},t.onChange]}})},a=[],i=e("2b0e"),s=i["a"].extend({data:function(){return{text:""}},props:{value:{type:String,default:""},placeholder:{type:String}},mounted:function(){this.text=this.value},methods:{onChange:function(){this.$emit("change",this.text)}}}),c=s,r=(e("8b1b"),e("2877")),u=Object(r["a"])(c,o,a,!1,null,"7c2084e0",null);n["a"]=u.exports}}]);
//# sourceMappingURL=chunk-2cac339a.8493e4a6.js.map