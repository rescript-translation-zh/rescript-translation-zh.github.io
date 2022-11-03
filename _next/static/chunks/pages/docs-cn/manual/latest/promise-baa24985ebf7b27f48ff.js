(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68419],{17375:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,{Z:function(){return n}})},3149:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(17375),a=r(96156),i=(r(67294),r(3905));function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p,l=(p="CodeTab",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",s({},e))}),m={};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",s(s(s({},m),r),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",s({},{id:"async--promise--\u5f02\u6b65--\u627f\u8bfa"}),"Async & Promise | \u5f02\u6b65 & \u627f\u8bfa"),(0,i.kt)("p",null,"ReScript's primary mechanism for async programming is the same as JavaScript's (callbacks and promises), since we compile cleanly to JavaScript and would like to avoid dragging in a heavy custom runtime."),(0,i.kt)("p",null,"ReScript\u7684\u5f02\u6b65\u7f16\u7a0b\u7684\u4e3b\u8981\u673a\u5236\u4e0e JavaScript \u7684\u76f8\u540c (\u56de\u8c03\u548c\u627f\u8bfa) , \u56e0\u4e3a\u6211\u4eec\u53ef\u4ee5\u5e72\u51c0\u5730\u7f16\u8bd1\u4e3aJavaScript, \u5e76\u5e0c\u671b\u907f\u514d\u62d6\u5165\u4e00\u4e2a\u6c89\u91cd\u7684\u81ea\u5b9a\u4e49\u8fd0\u884c\u65f6\u3002"),(0,i.kt)("p",null,"There is currently no support for ",(0,i.kt)("inlineCode",{parentName:"p"},"async")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"await")," keywords in ReScript; though our new Promise API bindings revamp + ",(0,i.kt)("a",s({parentName:"p"},{href:"pipe"}),"pipe")," will make your async code already look better than otherwise."),(0,i.kt)("p",null,"\u76ee\u524d ReScript \u4e0d\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"async"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"await"),"\u5173\u952e\u5b57\uff1b\u5c3d\u7ba1\u6211\u4eec\u65b0\u7684Promise API\u7ed1\u5b9a\u6539\u9020+",(0,i.kt)("a",s({parentName:"p"},{href:"pipe"}),"pipe"),"\u5c06\u4f7f\u4f60\u7684\u5f02\u6b65\u4ee3\u7801\u5df2\u7ecf\u6bd4\u5176\u4ed6\u65b9\u5f0f\u770b\u8d77\u6765\u66f4\u597d\u3002"),(0,i.kt)("h2",s({},{id:"promise-new--promise-\u65b0\u7248\u672c"}),"Promise (new) | Promise (\u65b0\u7248\u672c)"),(0,i.kt)("p",null,"Our up to date Promise bindings are currently not part of the the standard library. For now, please install them separately:"),(0,i.kt)("p",null,"\u76ee\u524d\uff0c\u6211\u4eec\u6700\u65b0\u7684 Promise \u7ed1\u5b9a\u76ee\u524d\u8fd8\u4e0d\u662f\u6807\u51c6\u5e93\u7684\u4e00\u90e8\u5206\uff0c\u8bf7\u5355\u72ec\u5b89\u88c5\u5b83\u4eec\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-sh"}),"npm install @ryyppy/rescript-promise --save\n")),(0,i.kt)("p",null,"In your ",(0,i.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "bs-dependencies": ["@ryyppy/rescript-promise"]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Alternatively you may vendor the ",(0,i.kt)("a",s({parentName:"em"},{href:"https://github.com/ryyppy/rescript-promise/tree/master/src"}),(0,i.kt)("inlineCode",{parentName:"a"},"Promise.res")," / ",(0,i.kt)("inlineCode",{parentName:"a"},"Promise.resi")," files")," files in your app codebase if you want to have more control.")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u6709\u66f4\u591a\u7684\u63a7\u5236\u6743\uff0c\u4f60\u53ef\u4ee5\u5728\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u5e93\u4e2d\u5f00\u653e","[",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.res"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"Promise.resi"),"\u6587\u4ef6]"," (",(0,i.kt)("a",s({parentName:"p"},{href:"https://github.com/ryyppy/rescript-promise/tree/master/src"}),"https://github.com/ryyppy/rescript-promise/tree/master/src"),") \u6587\u4ef6\u3002"),(0,i.kt)("p",null,"You can find the APIs and full usage examples ",(0,i.kt)("a",s({parentName:"p"},{href:"https://github.com/ryyppy/rescript-promise#usage"}),"here"),"."),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230 API \u6587\u6863\u548c\u5b8c\u6574\u7684\u4f7f\u7528\u4f8b\u5b50](",(0,i.kt)("a",s({parentName:"p"},{href:"https://github.com/ryyppy/rescript-promise#usage"}),"https://github.com/ryyppy/rescript-promise#usage"),"). "),(0,i.kt)("h2",s({},{id:"promise-legacy--promise-\u65e7\u7248\u672c"}),"Promise (legacy) | Promise (\u65e7\u7248\u672c)"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.Promise")," bindings are following the outdated data-last convention from a few years ago. We kept those APIs for backwards compatibility, so for now please use ",(0,i.kt)("a",s({parentName:"p"},{href:"https://github.com/ryyppy/rescript-promise"}),(0,i.kt)("inlineCode",{parentName:"a"},"rescript-promise"))," until we upstream the new bindings to our standard library.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Js.Promise")," \u7ed1\u5b9a\u9075\u5faa\u51e0\u5e74\u524d\u8fc7\u65f6\u7684 data-last \u7ea6\u5b9a\u3002\u6211\u4eec\u4fdd\u7559\u8fd9\u4e9b API \u662f\u4e3a\u4e86\u5411\u540e\u517c\u5bb9\uff0c\u6240\u4ee5\u73b0\u5728\u8bf7\u4f7f\u7528 ",(0,i.kt)("a",s({parentName:"p"},{href:"https://github.com/ryyppy/rescript-promise"}),(0,i.kt)("inlineCode",{parentName:"a"},"rescript-promise"))," \u76f4\u5230\u6211\u4eec\u5c06\u65b0\u7ed1\u5b9a\u4e0a\u4f20\u5230\u6211\u4eec\u7684\u6807\u51c6\u5e93\u3002")),(0,i.kt)("p",null,"ReScript has built-in support for ",(0,i.kt)("a",s({parentName:"p"},{href:"api/js/promise"}),"JavaScript promises"),". The 3 functions you generally need are:"),(0,i.kt)("p",null,"ReScript \u5185\u7f6e\u4e86\u5bf9 ",(0,i.kt)("a",s({parentName:"p"},{href:"api/js/promise"}),"JavaScript promises")," \u7684\u652f\u6301\u3002 \u60a8\u901a\u5e38\u9700\u8981\u7684 3 \u4e2a\u529f\u80fd\u662f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Js.Promise.resolve: 'a => Js.Promise.t('a)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Js.Promise.then_: ('a => Js.Promise.t('b), Js.Promise.t('a)) => Js.Promise.t('b)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Js.Promise.catch: (Js.Promise.error => Js.Promise.t('a), Js.Promise.t('a)) => Js.Promise.t('a)"))),(0,i.kt)("p",null,"Additionally, here's the type signature for creating a promise on the ReScript side:"),(0,i.kt)("p",null,"\u6b64\u5916\uff0c\u8fd9\u91cc\u662f\u5728 ReScript \u7aef\u521b\u5efa Promise \u7684\u7c7b\u578b\u7b7e\u540d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-res"}),"Js.Promise.make: (\n  (\n    ~resolve: (. 'a) => unit,\n    ~reject: (. exn) => unit\n  ) => unit\n) => Js.Promise.t<'a>\n")),(0,i.kt)("p",null,"This type signature means that ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," takes a callback that takes 2 named arguments, ",(0,i.kt)("inlineCode",{parentName:"p"},"resolve")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reject"),". Both arguments are themselves ",(0,i.kt)("a",s({parentName:"p"},{href:"function.md#uncurried-function"}),"uncurried callbacks")," (with a dot). ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," returns the created promise."),(0,i.kt)("p",null,"\u8fd9\u79cd\u7c7b\u578b\u7b7e\u540d\u610f\u5473\u7740 ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," \u63a5\u53d7\u4e00\u4e2a\u56de\u8c03\uff0c\u8be5\u56de\u8c03\u63a5\u53d7 2 \u4e2a\u547d\u540d\u53c2\u6570\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"resolve")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"reject"),".  \u4e24\u4e2a\u53c2\u6570\u672c\u8eab\u90fd\u662f ",(0,i.kt)("a",s({parentName:"p"},{href:"function.md#uncurried-function"}),"\u53bb\u67ef\u91cc\u5316\u7684\u56de\u8c03"),"  (\u5e26\u70b9) .  ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," \u8fd4\u56de\u521b\u5efa\u7684promise. "),(0,i.kt)("h3",s({},{id:"usage--\u7528\u6cd5"}),"Usage | \u7528\u6cd5"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("a",s({parentName:"p"},{href:"pipe.md"}),"pipe operator"),":"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("a",s({parentName:"p"},{href:"pipe.md"}),"\u7ba1\u9053\u8fd0\u7b97\u7b26"),":"),(0,i.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let myPromise = Js.Promise.make((~resolve, ~reject) => resolve(. 2))\n\nmyPromise->Js.Promise.then_(value => {\n  Js.log(value)\n  Js.Promise.resolve(value + 2)\n}, _)->Js.Promise.then_(value => {\n  Js.log(value)\n  Js.Promise.resolve(value + 3)\n}, _)->Js.Promise.catch(err => {\n  Js.log2("Failure!!", err)\n  Js.Promise.resolve(-2)\n}, _)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var myPromise = new Promise(function (resolve, reject) {\n  return resolve(2);\n});\n\nmyPromise\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 2) | 0);\n  })\n  .then(function (value) {\n    console.log(value);\n    return Promise.resolve((value + 3) | 0);\n  })\n  .catch(function (err) {\n    console.log("Failure!!", err);\n    return Promise.resolve(-2);\n  });\n'))))}c.isMDXComponent=!0,c.frontmatter={title:"\u5f02\u6b65 & \u627f\u8bfa",description:"JS Promise handling in ReScript",canonical:"/docs/manual/latest/promise",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/promise.mdx"}},85700:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/promise",function(){return r(3149)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=85700,e(e.s=t);var t}));var t=e.O();_N_E=t}]);