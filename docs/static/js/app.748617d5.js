(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-0db12001":"c8d85fcf","chunk-2c649d8d":"61aee43c","chunk-2d0e8e32":"1c3d328c"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0db12001":1,"chunk-2c649d8d":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-0db12001":"5481e95a","chunk-2c649d8d":"56c5efc9","chunk-2d0e8e32":"31d6cfe0"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03bf":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view")},a=[],o={name:"BlankLayout"},i=o,c=n("2877"),u=Object(c["a"])(i,r,a,!1,null,null,null);t["default"]=u.exports},"2c93":function(e,t,n){},3831:function(e,t,n){"use strict";n.r(t),t["default"]={path:"one",name:"one",component:function(){return n.e("chunk-0db12001").then(n.bind(null,"30f8"))},meta:{title:"示例页面1",icon:"iconfont iconirregular-risk"}}},4848:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),a=n("bd86"),o=(n("a481"),n("bc3a")),i=n.n(o),c=n("5c96"),u=n("a18c"),s=!1,l=null,d="",f=function(){s||(s=!0,l=c["Loading"].service({text:"正在努力加载中....",fullscreen:!1,background:"transparent"}))},h=function(){s&&l&&(s=!1,l.close())},m=i.a.create({timeout:6e4,withCredentials:!0});m.interceptors.request.use((function(e){f();var t=e.url,n=e.method,r=/^\/api\//;return r.test(t)&&(e.url=t.replace("/api/","".concat(d,"/"))),"get"===n&&(e.params=e.data,e.data={}),e}),(function(e){return Promise.reject(e)})),m.interceptors.response.use((function(e){h();var t=e.data;if(t.success)return t.data;var n=t.message;return c["Message"].error({message:n}),401===t.code&&u["a"].push({name:"login"}),Promise.reject(t)}),(function(e){if(h(),!e.response)return Promise.reject(e);var t=e.response,n=t.data.error?t.data.error.message:"请求错误";return 401===t.status?(c["Message"].error({message:n}),location.replace(t.data.error.detail)):(c["Message"].error({message:n}),Promise.reject(e))}));var p=m;function v(e){return p("/api/test",{method:"GET",data:e})}var b="UPDATE_STATE";t["default"]={namespaced:!0,state:{},mutations:Object(a["a"])({},b,(function(e,t){var n=t.payload,r=t.statePropertyToAlter;e[r]=n})),actions:{getSomething:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v(n);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}}},"4b47":function(e,t,n){},"4cc2":function(e,t,n){"use strict";n("4b47")},5404:function(e,t,n){var r={"./One/store/index.js":"4848"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="5404"},"543f":function(e,t,n){"use strict";n("2c93")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i=n("2877"),c={},u=Object(i["a"])(c,a,o,!1,null,null,null),s=u.exports,l=n("a18c"),d=(n("f5df"),n("5c96")),f=n.n(d);n("0fae"),n("8c1f");r["default"].use(f.a);n("a2f0");var h=n("2f62"),m=n("bd86"),p="UPDATE_STATE",v={namespaced:!0,state:{info:{userInfo:{userId:null,name:"",mobile:"",type:null},enterpriseInfo:{id:null,name:""}}},mutations:Object(m["a"])({},p,(function(e,t){var n=t.payload,r=t.statePropertyToAlter;e[r]=n})),actions:{getUserInfo:function(e,t){var n=e.commit;n({type:p,statePropertyToAlter:"userInfo",payload:{}})}}},b=(n("7f7f"),n("ac6a"),n("5404")),g={};b.keys().forEach((function(e){var t=b(e).default&&b(e).default.name;t&&(g[t]=b(e).default)}));var y={namespaced:!0,modules:g};r["default"].use(h["a"]);var w=new h["a"].Store({modules:{global:v,Demo:y}}),_=n("30a4"),O=n("c4df"),j=Object(O["a"])({vue:r["default"],dsn:"https://test.com",beforeDataReport:function(e){return!1},maxBreadcrumbs:100},[_["a"]]);window._MITO_=j,new r["default"]({router:l["a"],store:w,render:function(e){return e(s)}}).$mount("#app")},"8c1f":function(e,t,n){},"8e73":function(e,t,n){"use strict";n("b2c5")},"970a":function(e,t,n){"use strict";(function(e){n("7f7f"),n("ac6a");var r=n("d87f"),a=[];r.keys().forEach((function(e){a.push(r(e).default)})),t["a"]={path:"/demo",name:"demo",component:e,meta:{title:"mitojs-示例",hideMenuLayout:!1},redirect:{name:a[0].name},children:a}}).call(this,n("03bf")["default"])},a18c:function(e,t,n){"use strict";n("7f7f");var r=n("2b0e"),a=n("8c4f"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{staticClass:"base--container"},[n("el-header",{staticClass:"base--header",attrs:{height:"56px"}},[n("GlobalHeader")],1),n("el-container",{staticClass:"base--content"},[n("ContentLayout")],1)],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"global--header"},[n("Logo")],1)},u=[],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("div",{staticClass:"title"},[e._v("mitojs-vue2.6-demo")])])}],d={name:"Logo",data:function(){return{}},methods:{}},f=d,h=(n("b123"),n("2877")),m=Object(h["a"])(f,s,l,!1,null,"18edb57e",null),p=m.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dropdown",{staticClass:"user-info",on:{command:e.handleCommand}},[n("div",{staticClass:"user-info__title"},[n("i",{staticClass:"iconfont iconcircle-avatar",staticStyle:{"font-size":"18px",position:"relative",top:"1px"}}),e._v("用户名"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"info"}},[e._v("账户信息")]),n("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出登录")])],1)],1)},b=[],g={name:"UserInfo",data:function(){return{}},methods:{handleCommand:function(e){switch(e){case"info":console.log(e);break;case"logout":console.log("logout");break}}}},y=g,w=Object(h["a"])(y,v,b,!1,null,"54ac1818",null),_=w.exports,O={name:"GlobalHeader",components:{Logo:p,UserInfo:_},data:function(){return{}},methods:{}},j=O,k=(n("4cc2"),Object(h["a"])(j,c,u,!1,null,"956d5918",null)),E=k.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menuLayout--wrapp"},[n("BaseSiderMenu",{staticClass:"menuLayout--wrapp__sider"}),n("div",{staticClass:"menuLayout--wrapp__router"},[n("router-view",{staticClass:"content"}),n("div",{staticClass:"iframe"},[n("iframe",{ref:"iframe",staticClass:"rf",attrs:{src:"https://mitojs.github.io/mito-admin-demo/#/breadcrumbDemo"}})])],1)],1)},C=[],M=(n("ac6a"),n("28a5"),n("6762"),n("2fdb"),n("970a"));function P(e){e.children&&e.children.forEach((function(t){if(t.path&&!t.path.includes("/")&&(t.path="".concat(e.path,"/").concat(t.path)),t.children)return P(t)}))}P(M["a"]);var S,D,L={name:"BaseSiderMenu",data:function(){return{path:this.$route.path,menuData:[]}},computed:{isSinglePage:function(){var e=this.$route.path.split("/");return"".concat(e[1]).concat(e[2])}},watch:{$route:function(e){this.findPath(e.path)},isSinglePage:function(){this.init()},menuData:function(){this.findPath(this.$route.path)}},created:function(){this.init()},methods:{upFindRouterObject:function(){for(var e=this.$route.matched,t=e.length,n=t-1;n>0;n--)if(newMapRouter[e[n].name])return newMapRouter[e[n].name];return[]},init:function(){var e=this.$route.path,t=M["a"];this.menuData=JSON.parse(JSON.stringify(t.children)),this.filterMenuData(this.menuData),this.findPath(e)},findPath:function(e){var t=e.split("/"),n=this.recursionBackPaths(this.menuData);while(!n[t.join("/")]&&t.length>1)t.pop();this.path=t.join("/")},filterMenuData:function(e){var t=this;if(!Array.isArray(e))return{};e.forEach((function(n,r){return n.meta&&n.meta.hideInMenu?(e.splice(r,1),t.filterMenuData(e)):n.children?t.filterMenuData(n.children):void 0}))},recursionBackPaths:function(e){var t=this,n={};return Array.isArray(e)?(e.forEach((function(e){e.children?(e.path&&(n[e.path]=!0),Object.assign(n,t.recursionBackPaths(e.children))):e.path&&(n[e.path]=!0)})),n):{}},renderMenu:function(e){var t=this,n=this.$createElement,r=[];return e.forEach((function(e){e.children&&0!==e.children.length&&e.meta&&e.meta.icon?r.push(n("el-submenu",{key:e.path,attrs:{index:e.path}},[n("template",{slot:"title"},[n("i",{class:e.meta.icon,style:"margin-right: 8px"}),n("span",[e.meta.title]),n("i",{class:"el-submenu__icon-arrow el-icon-caret-bottom"})]),t.renderMenu(e.children)])):r.push(n("el-menu-item",{key:e.path,attrs:{index:e.path}},[n("i",{class:e.meta.icon||"",style:"margin-right: 8px"}),n("span",{slot:"title"},[e.meta.title])]))})),r}},render:function(){var e=arguments[0];return e("el-menu",{attrs:{"default-active":this.path,router:!0}},[this.renderMenu(this.menuData)])}},T=L,$=Object(h["a"])(T,S,D,!1,null,null,null),A=$.exports,N={name:"MenuLayout",components:{BaseSiderMenu:A},data:function(){return{}},mounted:function(){var e=this.$refs.iframe,t=window._MITO_.breadcrumb,n=-1;setInterval((function(){var r=t.getStack().length;r!==n&&(n=r,e.contentWindow&&e.contentWindow.postMessage({type:"breadcrumb",data:JSON.parse(JSON.stringify(t.getStack()))},"https://mitojs.github.io/mito-admin-demo/#/breadcrumbDemo"))}),1e3)},methods:{}},B=N,I=(n("543f"),Object(h["a"])(B,x,C,!1,null,"3481dcb0",null)),U=I.exports,J=n("03bf"),R={name:"BaseLayout",components:{GlobalHeader:E,ContentLayout:{render:function(){var e=arguments[0],t=this.$route.meta.hideMenuLayout,n=void 0!==t&&t;return e(n?J["default"]:U)}}},created:function(){}},F=R,q=(n("8e73"),Object(h["a"])(F,o,i,!1,null,"8108adf6",null)),G=q.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("404")])},W=[],z={name:"NotFoundComponent",data:function(){return{}},methods:{}},K=z,Q=Object(h["a"])(K,H,W,!1,null,"72cadf4a",null),V=Q.exports,X={path:"/login",name:"login",component:function(){return n.e("chunk-2d0e8e32").then(n.bind(null,"8ad7"))}};r["default"].use(a["a"]);t["a"]=new a["a"]({routes:[{path:"/",name:"BaseLayout",component:G,redirect:{name:M["a"].name},children:[M["a"]]},X,{path:"*",component:V}]})},a2f0:function(e,t,n){},a493:function(e,t,n){"use strict";n.r(t),t["default"]={path:"two",name:"two",component:function(){return n.e("chunk-2c649d8d").then(n.bind(null,"09d0"))},meta:{title:"示例页面2",icon:"iconfont iconsquare-account"}}},b123:function(e,t,n){"use strict";n("b566")},b2c5:function(e,t,n){},b566:function(e,t,n){},d87f:function(e,t,n){var r={"./One/routes/index.js":"3831","./Two/routes/index.js":"a493"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="d87f"}});
//# sourceMappingURL=app.748617d5.js.map