(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e4dd145"],{"08f1":function(n,t,e){"use strict";e("8226")},"30f8":function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"risk-assessment"},[e("div",{staticStyle:{"font-size":"26px",color:"#c6c6c6"}},[n._v("请打开控制台查看mitojs的调式结果，当你操作页面时，控制台会打印你的行为。在控制台输入「MitoInstance」查看当前mito实例")]),e("div",{staticStyle:{"font-size":"26px",color:"#c6c6c6","margin-top":"20px"}},[n._v("右边页面会实时打印的你操作行为")]),e("div",{staticStyle:{"font-size":"26px",padding:"20px 0 20px 0"}},[n._v("count: "+n._s(n.count))]),e("div",{staticClass:"container"},[e("el-button",{staticClass:"add",on:{click:function(t){n.count++}}},[n._v("+")]),e("el-button",{staticClass:"sub",on:{click:function(t){n.count--}}},[n._v("-")]),e("el-button",{on:{click:function(t){return n.$router.push({name:"two"})}}},[n._v("跳到账户信息页面")]),e("el-button",{on:{click:n.onClickUnhandlerejection}},[n._v("触发unhandledrejection")]),e("el-button",{on:{click:n.onClickCodeError}},[n._v("触发代码错误")]),e("el-button",{on:{click:n.onClickGoodRequest}},[n._v("触发正常ajax")]),e("el-button",{on:{click:n.onClickBadRequest}},[n._v("触发异常ajax")]),e("el-button",{on:{click:n.onClickShowCount}},[n._v("console当前count")]),e("el-button",{on:{click:n.onClickFetch}},[n._v("fetch")])],1)])},c=[],i=(e("96cf"),e("3b8d")),r=(e("28a5"),e("bc3a")),s=e.n(r),a={name:"OneList",data:function(){return{count:0,obj:{}}},methods:{onClickCodeError:function(){this.obj.split("")},onClickShowCount:function(){console.log("count is:".concat(this.count))},onClickUnhandlerejection:function(){var n=function(){return new Promise((function(n,t){return t("this is promise reject")}))};n().then((function(n){console.log(n)}))},onClickGoodRequest:function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s.a.get("https://api.apiopen.top/api/sentences");case 2:t=n.sent,console.log("接口返回值：",t.data.message);case 4:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),onClickBadRequest:function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s.a.get("https://notexit.interface/info2",{withCredentials:!0}).then((function(n){console.log(n)})).catch((function(n){}));case 1:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),onClickFetch:function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.apiopen.top/api/sentences",{headers:{"Content-Type":"application/json"}}).then((function(n){return n.json()}));case 2:t=n.sent,console.log(t);case 4:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}()}},u=a,l=(e("08f1"),e("2877")),p=Object(l["a"])(u,o,c,!1,null,"529bf253",null);t["default"]=p.exports},8226:function(n,t,e){}}]);
//# sourceMappingURL=chunk-6e4dd145.9a922ae1.js.map