(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[96407],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(n,{Z:function(){return a}})},69593:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a=t(17375),l=t(96156),r=(t(67294),t(3905));function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s,i=(s="CodeTab",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",p({},e))}),u={};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",p(p(p({},u),t),{},{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"\u65b0\u4eba\u793a\u4f8b"}),"\u65b0\u4eba\u793a\u4f8b"),(0,r.kt)("p",null,"\u4e00\u4f8b\u80dc\u5343\u8a00\u3002"),(0,r.kt)("p",null,"\u672c\u8282\u4e13\u95e8\u662f\u4e3a\u8bd5\u56fe\u5f04\u6e05\u4e00\u822c\u7684\u60ef\u7528\u5199\u6cd5\u4e0e\u7f16\u7801\u89c4\u8303\u7684\u65b0\u4eba\u51c6\u5907\u7684\u3002\u5982\u679c\u4f60\u662f\u4e00\u4e2a\u5bf9\u793a\u4f8b\u6709\u597d\u7684\u60f3\u6cd5\u7684\u521d\u5b66\u8005\uff0c\u8bf7\u63d0\u51fa\u4fee\u6539\u5efa\u8bae\uff01"),(0,r.kt)("h2",p({},{id:"\u4f7f\u7528-option-\u7c7b\u578b"}),"\u4f7f\u7528 ",(0,r.kt)("a",p({parentName:"h2"},{href:"null-undefined-option.md"}),(0,r.kt)("inlineCode",{parentName:"a"},"option")," \u7c7b\u578b")),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let possiblyNullValue1 = None\nlet possiblyNullValue2 = Some("Hello")\n\nswitch possiblyNullValue2 {\n| None => Js.log("Nothing to see here.")\n| Some(message) => Js.log(message)\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var possiblyNullValue1;\nvar possiblyNullValue2 = "Hello";\n\nif (possiblyNullValue2 !== undefined) {\n  console.log(possiblyNullValue2);\n} else {\n  console.log("Nothing to see here.");\n}\n\n'))),(0,r.kt)("h2",p({},{id:"\u521b\u5efa\u53c2\u6570\u5316\u7c7b\u578b"}),"\u521b\u5efa\u53c2\u6570\u5316\u7c7b\u578b"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"type universityStudent = {gpa: float}\n\ntype response<'studentType> = {\n  status: int,\n  student: 'studentType,\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),"// Empty output\n// \u6ca1\u6709\u8f93\u51fa\n"))),(0,r.kt)("h2",p({},{id:"\u521b\u5efa-js-\u5bf9\u8c61"}),"\u521b\u5efa JS \u5bf9\u8c61"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let student1 = {\n  "name": "John",\n  "age": 30,\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var student1 = {\n  name: "John",\n  age: 30,\n};\n'))),(0,r.kt)("p",null,"\u6216\u4f7f\u7528",(0,r.kt)("a",p({parentName:"p"},{href:"record.md"}),"\u8bb0\u5f55"),"\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type payload = {\n  name: string,\n  age: int,\n}\n\nlet student1 = {\n  name: "John",\n  age: 30,\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),'var student1 = {\n  name: "John",\n  age: 30,\n};\n'))),(0,r.kt)("h2",p({},{id:"\u4e3a\u5e26\u6709\u9ed8\u8ba4\u5bfc\u51fa\u7684-js-\u6a21\u5757\u5efa\u6a21"}),"\u4e3a\u5e26\u6709\u9ed8\u8ba4\u5bfc\u51fa\u7684 JS \u6a21\u5757\u5efa\u6a21"),(0,r.kt)("p",null,"\u89c1",(0,r.kt)("a",p({parentName:"p"},{href:"import-from-export-to-js.md#import-a-javascript-module-itself-es6-module-format"}),"\u6b64\u5904"),"\u3002"),(0,r.kt)("h2",p({},{id:"\u4f7f\u7528-option-\u68c0\u67e5-js-\u7684\u7a7a\u7c7b\u578b"}),"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h2"},"option")," \u68c0\u67e5 JS \u7684\u7a7a\u7c7b\u578b"),(0,r.kt)("p",null,"\u5982\u679c\u5c06\u4e00\u4e2a\u53ef\u80fd\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u7684 JavaScript \u503c\u4f20\u9012\u7ed9\u4e86\u51fd\u6570\u7684\u53c2\u6570\uff0c\u901a\u5e38\u5c06\u5176\u8f6c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"option"),"\u3002\u53ef\u4ee5\u901a\u8fc7 ReScript \u7684 ",(0,r.kt)("a",p({parentName:"p"},{href:"api/js/nullable#t"}),(0,r.kt)("inlineCode",{parentName:"a"},"Js.Nullable"))," \u6a21\u5757\u5b8c\u6210\u8f6c\u6362\u3002\u5728\u8fd9\u4e2a\u573a\u666f\u4e0b\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"toOption"),"\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let greetByName = (possiblyNullName) => {\n  let optionName = Js.Nullable.toOption(possiblyNullName)\n  switch optionName {\n  | None => "Hi"\n  | Some(name) => "Hello " ++ name\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-js"}),'function greetByName(possiblyNullName) {\n  if (possiblyNullName == null) {\n    return "Hi";\n  } else {\n    return "Hello " + possiblyNullName;\n  }\n}\n'))),(0,r.kt)("p",null,"\u8fd9\u4e2a\u68c0\u67e5\u5728 JS \u4e2d\u7f16\u8bd1\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"possiblyNullName == null"),"\uff0c\u6240\u4ee5\u53ef\u4ee5\u68c0\u67e5\u662f\u5426\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002"))}m.isMDXComponent=!0,m.frontmatter={title:"\u65b0\u4eba\u793a\u4f8b",description:"Quick examples for users new to ReScript",canonical:"/docs/manual/latest/newcomer-examples",__ghEditHref:"https://github.com/butterunderflow/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/newcomer-examples.mdx"}},65376:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/newcomer-examples",function(){return t(69593)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=65376,e(e.s=n);var n}));var n=e.O();_N_E=n}]);