(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[20438],{17375:function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return o}})},17960:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var o=t(17375),r=t(96156),i=(t(67294),t(3905));function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p,s=(p="CodeTab",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",l({},e))}),c={};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",l(l(l({},c),t),{},{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",l({},{id:"inlining-constants--\u5185\u8054\u5e38\u91cf"}),"Inlining Constants | \u5185\u8054\u5e38\u91cf"),(0,i.kt)("p",null,"Sometime, in the JavaScript output, you might want a certain value to be forcefully inlined. For example:"),(0,i.kt)("p",null,"\u6709\u65f6\uff0c\u5728\u8f93\u51fa\u7684JavaScript\u4e2d\uff0c\u4f60\u53ef\u80fd\u60f3\u8981\u5c06\u7279\u5b9a\u7684\u503c\u5f3a\u5236\u5185\u8054\u3002\u4f8b\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-js"}),"if (process.env.mode === 'development') {\n  console.log(\"Dev-only code here!\")\n}\n")),(0,i.kt)("p",null,"The reason is that your JavaScript bundler (e.g. Webpack) might turn that into:"),(0,i.kt)("p",null,"\u539f\u56e0\u662f\u4f60\u7684JavaScript\u6253\u5305\u5668 (\u4f8b\u5982 Webpack) \u53ef\u80fd\u4f1a\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-js"}),"if ('production' === 'development') {\n  console.log(\"Dev-only code here!\")\n}\n")),(0,i.kt)("p",null,"Then your subsequent Uglifyjs optimization would remove that entire ",(0,i.kt)("inlineCode",{parentName:"p"},"if")," block. This is how projects like ReactJS provide a development mode code with plenty of dev warnings, while ensuring that the uglified (minified) production code is free of those expensive blocks."),(0,i.kt)("p",null,"\u4e4b\u540e\u7684Uglifyjs\u4f18\u5316\u8fc7\u7a0b\u4f1a\u5c06\u6574\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"if"),"\u5757\u79fb\u9664\u3002\u8fd9\u5c31\u662f\u50cfReactJS\u8fd9\u6837\u7684\u9879\u76ee\u5982\u4f55\u63d0\u4f9b\u5e26\u6709\u5927\u91cfdev\u8b66\u544a\u7684\u5f00\u53d1\u6a21\u5f0f\u4ee3\u7801\uff0c\u540c\u65f6\u786e\u4fdd\u538b\u7f29 (\u7cbe\u7b80) \u540e\u7684\u751f\u4ea7\u4ee3\u7801\u53bb\u9664\u6389\u8fd9\u4e9b\u6602\u8d35\u7684\u4ee3\u7801\u3002"),(0,i.kt)("p",null,"So, in ReScript, producing that example ",(0,i.kt)("inlineCode",{parentName:"p"},"if (process.env.mode === 'development')")," output is important. This first try doesn't work:"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u5728ReScript\u4e2d\uff0c\u751f\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"if (process.env.mode === 'development')"),"\u7684\u8f93\u51fa\u975e\u5e38\u91cd\u8981\u3002\u4ee5\u4e0b\u7684\u5c1d\u8bd5\u6ca1\u6709\u6548\u679c\uff1a"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val external process: \'a = "process"\n\nlet mode = "development"\n\nif (process["env"]["mode"] === mode) {\n  Js.log("Dev-only code here!")\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-js"}),'var mode = "development";\n\nif (process.env.mode === mode) {\n  console.log("Dev-only code here!");\n}\n'))),(0,i.kt)("p",null,"The JS output shows ",(0,i.kt)("inlineCode",{parentName:"p"},"if (process.env.mode === mode)"),", which isn't what we wanted. To inline ",(0,i.kt)("inlineCode",{parentName:"p"},"mode"),"'s value, use ",(0,i.kt)("inlineCode",{parentName:"p"},"@inline"),":"),(0,i.kt)("p",null,"JS\u8f93\u51fa\u663e\u793a",(0,i.kt)("inlineCode",{parentName:"p"},"if (process.env.mode === mode)"),", \u8fd9\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\u7ed3\u679c\u3002\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"@inline"),"\u5185\u8054",(0,i.kt)("inlineCode",{parentName:"p"},"mode"),"\u7684\u503c\uff1a"),(0,i.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@val external process: \'a = "process"\n\n@inline\nlet mode = "development"\n\nif (process["env"]["mode"] === mode) {\n  Js.log("Dev-only code here!")\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-js"}),'if (process.env.mode === "development") {\n  console.log("Dev-only code here!");\n}\n'))),(0,i.kt)("p",null,"Now your resulting JS code can pass through Webpack and Uglifyjs like the rest of your JavaScript code, and that whole ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log")," can be removed."),(0,i.kt)("p",null,"\u73b0\u5728\u751f\u6210\u7684JS\u4ee3\u7801\u53ef\u4ee5\u50cf\u5176\u4ed6\u7684JS\u4ee3\u7801\u4e00\u6837\u901a\u8fc7Webpack\u548cUglifyjs, \u5e76\u4e14",(0,i.kt)("inlineCode",{parentName:"p"},"console.log"),"\u4ee3\u7801\u5757\u80fd\u88ab\u53bb\u9664\u3002"),(0,i.kt)("p",null,"The inlining currently only works for ",(0,i.kt)("strong",{parentName:"p"},"string, float and boolean"),"."),(0,i.kt)("p",null,"\u5185\u8054\u76ee\u524d\u53ea\u9002\u7528\u4e8e",(0,i.kt)("strong",{parentName:"p"},"string, float\u548cboolean")),(0,i.kt)("h2",l({},{id:"tips--tricks--\u63d0\u793a\u6280\u5de7"}),"Tips & Tricks | \u63d0\u793a&\u6280\u5de7"),(0,i.kt)("p",null,"This is ",(0,i.kt)("strong",{parentName:"p"},"not")," an optimization. This is an edge-case feature for folks who absolutely need particular values inlined for a JavaScript post-processing step, like conditional compilation. Beside the difference in code that the conditional compilation might end up outputting, there's no performance difference between inlining and not inlining simple values in the eyes of a JavaScript engine."),(0,i.kt)("p",null,"\u8fd9",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u662f"),"\u4f18\u5316\u3002\u8fd9\u662f\u4e00\u4e2a\u8fb9\u7f18\u7279\u6027\uff0c\u63d0\u4f9b\u7ed9\u9700\u8981\u4e3aJavaScript\u540e\u5904\u7406\u6b65\u9aa4 (\u4f8b\u5982\u6761\u4ef6\u7f16\u8bd1) \u5185\u8054\u7279\u5b9a\u503c\u7684\u4eba\u4eec\u3002\u9664\u4e86\u6761\u4ef6\u7f16\u8bd1\u8f93\u51fa\u7684\u4ee3\u7801\u53ef\u80fd\u6709\u6240\u4e0d\u540c\u4e4b\u5916\uff0c\u5185\u8054\u548c\u4e0d\u5185\u8054\u7b80\u5355\u503c\u5bf9\u4e8eJavaScript\u5f15\u64ce\u6765\u8bf4\u6ca1\u6709\u6027\u80fd\u5dee\u5f02\u3002"))}u.isMDXComponent=!0,u.frontmatter={title:"\u5185\u8054\u5e38\u91cf",description:"\u5185\u8054\u5e38\u91cf",canonical:"/docs/manual/latest/inlining-constants",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/inlining-constants.mdx"}},23987:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/inlining-constants",function(){return t(17960)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=23987,e(e.s=n);var n}));var n=e.O();_N_E=n}]);