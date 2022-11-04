(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[70448],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},58587:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(17375),r=n(96156),l=(n(67294),n(3905));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o,u=(o="CodeTab",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",p({},e))}),s={};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",p(p(p({},s),n),{},{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",p({},{id:"embed-raw-javascript--\u76f4\u63a5\u5d4c\u5165-javascript-\u4ee3\u7801"}),"Embed Raw JavaScript | \u76f4\u63a5\u5d4c\u5165 JavaScript \u4ee3\u7801"),(0,l.kt)("h2",p({},{id:"paste-raw-js-code--\u7c98\u8d34\u539f\u59cb-js-\u4ee3\u7801"}),"Paste Raw JS Code | \u7c98\u8d34\u539f\u59cb JS \u4ee3\u7801"),(0,l.kt)("p",null,"First thing first. If you're ever stuck learning ReScript, remember that you can always just paste raw JavaScript code into our source file:"),(0,l.kt)("p",null,"\u8bf7\u7262\u8bb0\uff0c\u4e00\u65e6\u4f60\u53d1\u73b0\u81ea\u5df1\u5728\u5b66\u4e60 ReScript \u7684\u65f6\u5019\u4e0d\u77e5\u5982\u4f55\u7ee7\u7eed\uff0c\u4f60\u51e0\u4e4e\u603b\u662f\u53ef\u4ee5\u5728\u4f60\u7684\u6e90\u6587\u4ef6\u4e2d\u7c98\u8d34\u539f\u59cb\u7684 JavaScript \u4ee3\u7801\uff1a"),(0,l.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'%%raw(`\n// look ma, regular JavaScript!\nvar message = "hello";\nfunction greet(m) {\n  console.log(m)\n}\n`)\n')),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),'// look ma, regular JavaScript!\nvar message = "hello";\nfunction greet(m) {\n  console.log(m)\n}\n'))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"%%raw")," special ReScript call takes your code string and pastes it as-is into the output. ",(0,l.kt)("strong",{parentName:"p"},"You've now technically written your first ReScript file!")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"%%raw")," \u8fd9\u4e2a\u7279\u6b8a\u7684 ReScript \u8c03\u7528\u4f1a\u5c06\u4f60\u7684\u4ee3\u7801\u5b57\u7b26\u4e32\u539f\u5c01\u4e0d\u52a8\u7684\u663e\u793a\u5230\u8f93\u51fa\u7ed3\u679c\u4e2d\u3002",(0,l.kt)("strong",{parentName:"p"},"\u4ece\u6280\u672f\u7684\u89d2\u5ea6\u800c\u8a00\uff0c\u4f60\u5df2\u7ecf\u5728\u5199\u4f60\u7684\u7b2c\u4e00\u6bb5 ReScript \u6587\u4ef6\u4e86\uff01")),(0,l.kt)("p",null,"(The back tick syntax is a multiline string, similar to JavaScript's. Except for us, no escaping is needed inside the string. More on string in a later section.)"),(0,l.kt)("p",null,"\uff08\u53cd\u5f15\u53f7\u8bed\u6cd5\u8868\u793a\u591a\u884c\u5b57\u7b26\u4e32\uff0c\u8fd9\u4e2a\u548c JavaScript \u4e2d\u7684\u6a21\u677f\u5b57\u7b26\u4e32\u7c7b\u4f3c\u3002\u4e0d\u8fc7\u5bf9\u6211\u4eec\u800c\u8a00\uff0c\u5728\u5b57\u7b26\u4e32\u4e2d\u4e0d\u9700\u8981\u4efb\u4f55\u8f6c\u4e49\u3002\u5173\u4e8e\u5b57\u7b26\u4e32\uff0c\u540e\u9762\u7684\u7ae0\u8282\u4e2d\u4f1a\u6709\u66f4\u591a\u7684\u5185\u5bb9\uff09"),(0,l.kt)("p",null,"While ",(0,l.kt)("inlineCode",{parentName:"p"},"%%raw")," lets you embed top-level raw JS code, ",(0,l.kt)("inlineCode",{parentName:"p"},"%raw")," lets you embed expression-level JS code:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"%%raw")," \u65e2\u53ef\u4ee5\u5141\u8bb8\u4f60\u5d4c\u5165\u9876\u7ea7\u7684 JS \u539f\u59cb\u4ee3\u7801\uff0c\u5b83\u4e5f\u53ef\u4ee5\u5141\u8bb8\u4f60\u5d4c\u5165\u8868\u8fbe\u5f0f\u7ea7\u522b\u7684 JS \u4ee3\u7801\uff1a"),(0,l.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let add = %raw(`\n  function(a, b) {\n    console.log("hello from raw JavaScript!");\n    return a + b\n  }\n`)\n\nJs.log(add(1, 2))\n')),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var add = function(a, b) {\n  console.log("hello from raw JavaScript!");\n  return a + b\n};\n\nconsole.log(add(1, 2));\n'))),(0,l.kt)("p",null,"The above code:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"declared a ReScript variable ",(0,l.kt)("inlineCode",{parentName:"li"},"add"),","),(0,l.kt)("li",{parentName:"ul"},"with the raw JavaScript value of a function declaration,"),(0,l.kt)("li",{parentName:"ul"},"then called that function in ReScript.")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7533\u660e\u4e00\u4e2a ReScript \u53d8\u91cf ",(0,l.kt)("inlineCode",{parentName:"li"},"add"),"\uff0c"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u5176\u8d4b\u503c\u4e3a\u4e00\u6bb5\u539f\u59cb\u7684 JavaScript \u51fd\u6570\u58f0\u660e\uff0c"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u7740\u5728 ReScript \u4e2d\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u3002")),(0,l.kt)("p",null,"If your boss is ever worried that your teammates can't adopt ReScript, just let them keep writing JavaScript inside ReScript files =)."),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u4eec\u7684\u8001\u677f\u603b\u662f\u62c5\u5fc3\u4f60\u4eec\u7684\u56e2\u961f\u6210\u5458\u4e0d\u6539\u7528 ReScript \u7684\u8bdd\uff0c\u6ca1\u5173\u7cfb\uff0c\u5c31\u8ba9\u4ed6\u4eec\u7ee7\u7eed\u5728 ReScript \u6587\u4ef6\u4e2d\u4e66\u5199 JavaScript \u5427 =)\u3002"),(0,l.kt)("h2",p({},{id:"debugger--\u8c03\u8bd5"}),"Debugger | \u8c03\u8bd5"),(0,l.kt)("p",null,"You can also drop a ",(0,l.kt)("inlineCode",{parentName:"p"},"%debugger")," expression in a body:"),(0,l.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u653e\u7f6e\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"%debugger")," \u8868\u8fbe\u5f0f\uff1a"),(0,l.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let f = (x, y) => {\n  %debugger\n  x + y\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),"function f(x, y) {\n  debugger;\n  return x + y | 0;\n}\n"))),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),"function f(x, y) {\n  debugger; // JavaScript \u5f00\u53d1\u8005\u5de5\u5177\u4f1a\u5728\u8fd9\u91cc\u8bbe\u7f6e\u4e00\u4e2a\u65ad\u70b9\u5e76\u5728\u8fd9\u91cc\u505c\u6b62\u8fd0\u884c\n  x + y;\n}\n")),(0,l.kt)("h2",p({},{id:"tips--tricks"}),"Tips & Tricks"),(0,l.kt)("p",null,"Embedding raw JS snippets isn't the best way to experience ReScript, though it's also highly useful if you're just starting out. As a matter of fact, the first few ReScript projects were converted through:"),(0,l.kt)("p",null,"\u5d4c\u5165\u539f\u59cb JS \u4ee3\u7801\u6bb5\u5e76\u4e0d\u662f\u4f53\u9a8c ReScript \u7684\u6700\u4f73\u65b9\u5f0f\uff0c\u5c3d\u7ba1\u8fd9\u79cd\u65b9\u5f0f\u5728\u4f60\u521a\u5f00\u59cb\u7684\u65f6\u5019\u975e\u5e38\u6709\u7528\u3002\u5b9e\u9645\u4e0a\uff0c\u6700\u5f00\u59cb\u7684\u4e00\u4e9b ReScript \u9879\u76ee\u90fd\u662f\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u8f6c\u6362\u7684\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"pasting raw JS snippets inside a file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"examining the JS output (identical to the old hand-written JS)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"gradually extract a few values and functions and making sure the output still looks OK")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c06\u539f\u59cb JS \u4ee3\u7801\u6bb5\u7c98\u8d34\u5230\u6587\u4ef6\u4e2d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u68c0\u67e5 JS \u8f93\u51fa\u7ed3\u679c\uff08\u662f\u5426\u4e0e\u539f\u6765\u7684\u624b\u5199 JS \u8f93\u51fa\u7ed3\u679c\u4e00\u81f4\uff09")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9010\u6b65\u5730\u62bd\u53d6\u51fa\u4e00\u4e9b\u503c\u548c\u51fd\u6570\uff0c\u5e76\u4e14\u4fdd\u8bc1\u8f93\u51fa\u7ed3\u679c\u4f9d\u7136\u6b63\u786e"))),(0,l.kt)("p",null,"At the end, we get a fully safe, converted ReScript file whose JS output is clean enough that we can confidently assert that no new bug has been introduced during the conversion process."),(0,l.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u4f1a\u83b7\u5f97\u4e00\u4e2a\u5b8c\u6574\u800c\u5b89\u5168\u7684\u8f6c\u5316\u540e\u7684 ReScript \u6587\u4ef6\uff0c\u5b83\u7684\u8f93\u51fa\u7ed3\u679c\u8db3\u591f\u5e72\u51c0\uff0c\u8fd9\u6837\u6211\u4eec\u5c31\u53ef\u4ee5\u81ea\u4fe1\u5730\u8bf4\u8f6c\u6362\u8fc7\u7a0b\u6ca1\u6709\u5f15\u5165\u4efb\u4f55\u65b0\u7684 bug\u3002"),(0,l.kt)("p",null,"We have a small guide on this iteration ",(0,l.kt)("a",p({parentName:"p"},{href:"converting-from-js.md"}),"here"),". Feel free to peruse it later."),(0,l.kt)("p",null,"\u6211\u4eec\u5728",(0,l.kt)("a",p({parentName:"p"},{href:"converting-from-js.md"}),"\u8fd9\u91cc"),"\u6709\u4e00\u4e2a\u5173\u4e8e\u8fd9\u79cd\u9010\u6b65\u8f6c\u6362\u7684\u5c0f\u6307\u5357\u3002\u6b22\u8fce\u4e4b\u540e\u518d\u6765\u968f\u610f\u9605\u8bfb\u3002"))}c.isMDXComponent=!0,c.frontmatter={title:"\u76f4\u63a5\u5d4c\u5165 JavaScript \u4ee3\u7801",description:"Utility syntax to for raw JS usage in ReScript",canonical:"/docs/manual/latest/embed-raw-javascript",__ghEditHref:"https://github.com/butterunderflow/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/embed-raw-javascript.mdx"}},22155:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/embed-raw-javascript",function(){return n(58587)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=22155,e(e.s=t);var t}));var t=e.O();_N_E=t}]);