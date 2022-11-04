(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53348],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},18555:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var a=t(17375),r=t(96156),l=(t(67294),t(3905));function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var i,s=(i="CodeTab",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",p({},e))}),u={};function c(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",p(p(p({},u),t),{},{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",p({},{id:"if-else--\u5faa\u73af"}),"If-Else & \u5faa\u73af"),(0,l.kt)("p",null,"ReScript\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"if"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"else"),", \u4e09\u76ee\u8fd0\u7b97\u7b26(",(0,l.kt)("inlineCode",{parentName:"p"},"a ? b : c"),"), , ",(0,l.kt)("inlineCode",{parentName:"p"},"for")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"while"),"."),(0,l.kt)("p",null,"ReScript\u8fd8\u652f\u6301\u5341\u5206\u5f3a\u5927\u7684\u6a21\u5f0f\u5339\u914d\uff0c\u5c06\u7528\u4e00\u4e2a",(0,l.kt)("a",p({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"\u4e13\u95e8\u7684\u7ae0\u8282"),"\u4ecb\u7ecd\u5b83\u3002"),(0,l.kt)("h2",p({},{id:"if-else--\u4e09\u76ee\u8fd0\u7b97\u7b26"}),"If-Else & \u4e09\u76ee\u8fd0\u7b97\u7b26"),(0,l.kt)("p",null,"\u4e0e\u5b83\u7684 JavaScript \u5bf9\u5e94\u7269\u4e0d\u540c\uff0cReScript\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," \u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f; \u5b83\u4eec\u7684\u503c\u53d6\u51b3\u4e8e\u5176 body \u7684\u5185\u5bb9\u7684\u6c42\u503c\u7ed3\u679c\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res"}),'let message = if isMorning {\n  "Good morning!"\n} else {\n  "Hello!"\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var message = isMorning ? "Good morning!" : "Hello!";\n'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u4f1a\u4e3a\u4e00\u4e2a\u6ca1\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"else")," \u5206\u652f\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"if-else")," \u8868\u8fbe\u5f0f\u9690\u5f0f\u7684\u8865\u5145\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"()"),"(\u4e5f\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"unit")," \u7c7b\u578b). \u6240\u4ee5\uff1a"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res"}),"if showMenu {\n  displayMenu()\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),"if (showMenu) {\n  displayMenu();\n}\n"))),(0,l.kt)("p",null,"\u57fa\u672c\u4e0a\u548c\u4ee5\u4e0b\u4ee3\u7801\u76f8\u540c\uff1a"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res"}),"if showMenu {\n  displayMenu()\n} else {\n  ()\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),"if (showMenu) {\n  displayMenu()\n}\n"))),(0,l.kt)("p",null,"\u53ef\u4ee5\u4ece\u53e6\u4e00\u4e2a\u89d2\u5ea6\u770b\u8fd9\u4e2a\u7279\u6027\uff0c\u5982\u4e0b\u4ee3\u7801\u662f\u9519\u8bef\u7684\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res"}),"let result = if showMenu {\n  1 + 2\n}\n")),(0,l.kt)("p",null,"\u5b83\u4f1a\u629b\u51fa\u4e00\u4e2a\u7c7b\u578b\u9519\u8bef\uff0c\u57fa\u672c\u662f\u4e0a\u8bf4\u9690\u542b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"else")," \u5206\u652f\u7684\u7c7b\u578b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"unit"),", \u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"if")," \u5206\u652f\u7684\u7c7b\u578b\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),"\u3002 \u4ece\u76f4\u89c9\u4e0a\u6765\u770b\u8fd9\u662f\u6709\u9053\u7406\u7684\uff1a\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"showMenu")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),", \u90a3 ",(0,l.kt)("inlineCode",{parentName:"p"},"result")," \u7684\u503c\u53c8\u5e94\u8be5\u662f\u4ec0\u4e48\u5462?"),(0,l.kt)("p",null,"\u6211\u4eec\u4e5f\u6709\u4e09\u76ee\u8fd0\u7b97\u7b26\u7684\u8bed\u6cd5\u7cd6\uff0c\u4f46\u662f",(0,l.kt)("strong",{parentName:"p"},"\u6211\u4eec\u9f13\u52b1\u4f60\u4f18\u5148\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"strong"},"if-else")," \u8868\u8fbe\u5f0f"),"."),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res"}),'let message = isMorning ? "Good morning!" : "Hello!"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var message = isMorning ? "Good morning!" : "Hello!";\n'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"if-else")," \u548c\u4e09\u76ee\u8fd0\u7b97\u7b26\u5728 ReScript \u4e2d\u7684\u4f7f\u7528\u6bd4\u5176\u4ed6\u8bed\u8a00\u5c11\u5f97\u591a"),"\uff1b",(0,l.kt)("a",p({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"\u6a21\u5f0f\u5339\u914d"),"\u6d88\u706d\u4e86\u4e00\u5927\u7c7b\u4ee5\u524d\u9700\u8981\u6761\u4ef6\u8868\u8fbe\u5f0f\u7684\u4ee3\u7801\u3002"),(0,l.kt)("h2",p({},{id:"for\u5faa\u73af"}),"For\u5faa\u73af"),(0,l.kt)("p",null,"For\u5faa\u73af\u4ece\u4e00\u4e2a\u8d77\u59cb\u503c\u4e00\u76f4\u5230(\u5305\u62ec)\u7ec8\u6b62\u503c\u8fdb\u884c\u8fed\u4ee3\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res"}),"for i in startValueInclusive to endValueInclusive {\n  Js.log(i)\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),"for(var i = startValueInclusive; i <= endValueInclusive; ++i){\n  console.log(i);\n}\n"))),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"// \u6253\u5370\uff1a1 2 3, \u6bcf\u4e2a\u6570\u5b57\u5404\u5360\u4e00\u884c\nfor x in 1 to 3 {\n  Js.log(x)\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),"for(var x = 1; x <= 3; ++x){\n  console.log(x);\n}\n"))),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"downto")," \u8ba9 ",(0,l.kt)("inlineCode",{parentName:"p"},"for")," \u4ece\u53cd\u65b9\u5411\u5f00\u59cb\u5faa\u73af\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res"}),"for i in startValueInclusive downto endValueInclusive {\n  Js.log(i)\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),"for(var i = startValueInclusive; i >= endValueInclusive; --i){\n  console.log(i);\n}\n"))),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"// prints: 3 2 1, one per line\nfor x in 3 downto 1 {\n  Js.log(x)\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),"for(var x = 3; x >= 1; --x){\n  console.log(x);\n}\n"))),(0,l.kt)("h2",p({},{id:"while\u5faa\u73af"}),"While\u5faa\u73af"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"while")," \u5faa\u73af\u5728\u5176\u6761\u4ef6\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\u6267\u884c\u5176 body \u4ee3\u7801\u5757\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res"}),"while testCondition {\n  // body here\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),"while (testCondition) {\n  // body here\n}\n"))),(0,l.kt)("h3",p({},{id:"\u6280\u5de7-\uff06-\u8bc0\u7a8d"}),"\u6280\u5de7 \uff06 \u8bc0\u7a8d"),(0,l.kt)("p",null,"\u5728 ReScript \u4e2d\u6ca1\u6709\u7528\u4e8e\u8df3\u51fa\u5faa\u73af\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"break")," \u5173\u952e\u5b57(\u4e5f\u6ca1\u6709\u4ece\u51fd\u6570\u4e2d\u63d0\u524d\u8fd4\u56de\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"return"),")\u3002 \u7136\u800c\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,l.kt)("a",p({parentName:"p"},{href:"mutation.md"}),"\u7ed1\u5b9a\u4e00\u4e2a\u53ef\u53d8\u503c"),"\u8f7b\u677e\u5730\u8131\u79bb while \u5faa\u73af\u3002"),(0,l.kt)(s,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let break = ref(false)\n\nwhile !break.contents {\n  if Js.Math.random() > 0.3 {\n    break := true\n  } else {\n    Js.log("Still running")\n  }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var $$break = {\n  contents: false\n};\n\nwhile(!$$break.contents) {\n  if (Math.random() > 0.3) {\n    $$break.contents = true;\n  } else {\n    console.log("Still running");\n  }\n};\n'))))}c.isMDXComponent=!0,c.frontmatter={title:"If-Else & \u5faa\u73af",description:"If, else, ternary, for, and while",canonical:"/docs/manual/latest/control-flow",__ghEditHref:"https://github.com/butterunderflow/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/control-flow.mdx"}},11116:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/control-flow",function(){return t(18555)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=11116,e(e.s=n);var n}));var n=e.O();_N_E=n}]);