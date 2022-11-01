(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[63354],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},71831:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(96156),r=n(17375),i=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",o(o(o({},s),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",o({},{id:"int"}),"Int"),(0,i.kt)("p",null,"This module includes convenience methods for handling ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," types."),(0,i.kt)("h2",o({},{id:"tofloat"}),"toFloat"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toFloat: int => float\n")),(0,i.kt)("p",null,"Converts a given ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"float"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Js.log(Belt.Int.toFloat(1) === 1.0) /* true */\n")),(0,i.kt)("h2",o({},{id:"fromfloat"}),"fromFloat"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromFloat: float => int\n")),(0,i.kt)("p",null,"Converts a given ",(0,i.kt)("inlineCode",{parentName:"p"},"float")," to an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Js.log(Belt.Int.fromFloat(1.0) === 1) /* true */\n")),(0,i.kt)("h2",o({},{id:"fromstring"}),"fromString"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromString: string => option<int>\n")),(0,i.kt)("p",null,"Converts a given ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," to an ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),". Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"Some(int)")," when the input is a number, ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," otherwise."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'Js.log(Belt.Int.fromString("1") === Some(1)) /* true */\n')),(0,i.kt)("h2",o({},{id:"tostring"}),"toString"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toString: int => string\n")),(0,i.kt)("p",null,"Converts a given ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," to a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),". Uses the JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," constructor under the hood."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'Js.log(Belt.Int.toString(1) === "1") /* true */\n')),(0,i.kt)("h2",o({},{id:""}),"+"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let (+): (int, int) => int\n")),(0,i.kt)("p",null,"Addition of two ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," values. Same as the addition from ",(0,i.kt)("inlineCode",{parentName:"p"},"Pervasives"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"open Belt.Int\nJs.log(2 + 2 === 4) /* true */\n")),(0,i.kt)("h2",o({},{id:"-"}),"-"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let (-): (int, int) => int\n")),(0,i.kt)("p",null,"Subtraction of two ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," values. Same as the subtraction from ",(0,i.kt)("inlineCode",{parentName:"p"},"Pervasives"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"open Belt.Int\nJs.log(2 - 1 === 1) /* true */\n")),(0,i.kt)("h2",o({},{id:"-1"}),"*"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let (*): (int, int) => int\n")),(0,i.kt)("p",null,"Multiplication of two ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," values. Same as the multiplication from ",(0,i.kt)("inlineCode",{parentName:"p"},"Pervasives"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"open Belt.Int\nJs.log(2 * 2 === 4) /* true */\n")),(0,i.kt)("h2",o({},{id:"-2"}),"/"),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-re",metastring:"sig",sig:!0}),"let (/): (int, int) => int\n")),(0,i.kt)("p",null,"Division of two ",(0,i.kt)("inlineCode",{parentName:"p"},"int")," values. Same as the division from ",(0,i.kt)("inlineCode",{parentName:"p"},"Pervasives"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"open Belt.Int\nJs.log(4 / 2 === 2); /* true */\n")))}p.isMDXComponent=!0,p.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/api/belt/int.mdx"}},72823:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/belt/int",function(){return n(71831)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=72823,e(e.s=t);var t}));var t=e.O();_N_E=t}]);