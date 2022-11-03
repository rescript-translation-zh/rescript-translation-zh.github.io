(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78955],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(n,{Z:function(){return a}})},35134:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var a=t(17375),l=t(96156),o=(t(67294),t(3905));function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var r,u=(r="CodeTab",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",i({},e))}),d={};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",i(i(i({},d),t),{},{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"null-undefined-\u548c-option"}),"Null, Undefined \u548c Option"),(0,o.kt)("p",null,"ReScript itself doesn't have the notion of ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". This is a ",(0,o.kt)("em",{parentName:"p"},"great")," thing, as it wipes out an entire category of bugs. No more ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined is not a function"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"cannot access someAttribute of undefined"),"!"),(0,o.kt)("p",null,"ReScript\u8bed\u8a00\u662f\u6ca1\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\u7684\u3002\u8fd9\u662f\u4ef6 ",(0,o.kt)("em",{parentName:"p"},"\u597d\u4e8b"),", \u56e0\u4e3a\u8fd9\u62b9\u9664\u4e86\u4e00\u6574\u7c7bbug. \u4e0d\u4f1a\u518d\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined is not a function")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"cannot access someAttribute of undefined")," \u8fd9\u79cd\u9519\u8bef\u4e86!"),(0,o.kt)("p",null,"However, the ",(0,o.kt)("strong",{parentName:"p"},"concept")," of a potentially nonexistent value is still useful, and safely exists in our language."),(0,o.kt)("p",null,"\u7136\u800c\uff0c\u53ef\u80fd\u4e0d\u5b58\u5728\u7684",(0,o.kt)("strong",{parentName:"p"},"\u6982\u5ff5"),"\u4ecd\u7136\u662f\u6709\u7528\u7684\uff0c\u5e76\u4e14\u5728ReScript\u4e2d\u662f\u5b89\u5168\u7684\u5b58\u5728\u7684\u3002"),(0,o.kt)("p",null,"We represent the existence and nonexistence of a value by wrapping it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type. Here's its definition from the standard library:"),(0,o.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u5728\u7c7b\u578b\u5916\u5305\u88f9\u4e00\u5c42",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u7c7b\u578b\u6765\u8868\u793a\u53ef\u80fd\u5b58\u5728\u6216\u4e0d\u5b58\u5728\u7684\u503c\u3002\u8fd9\u662f\u6807\u51c6\u5e93\u4e2d\u7684\u5b9a\u4e49\uff1a"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"type option<'a> = None | Some('a)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)("p",null,'It means "a value of type option is either None (representing nothing) or that actual value wrapped in a Some".'),(0,o.kt)("p",null,'\u8fd9\u610f\u5473\u7740\uff1a"option\u7c7b\u578b\u7684\u503c\u53ef\u4ee5\u662fNone(\u8868\u793a\u4ec0\u4e48\u4e5f\u6ca1\u6709)\u6216\u8005\u88abSome\u5305\u88f9\u7684\u4e00\u4e2a\u771f\u5b9e\u7684\u503c". '),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," how the ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type is just a regular ",(0,o.kt)("a",i({parentName:"p"},{href:"variant.md"}),"variant"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," ",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u7c7b\u578b\u53ea\u662f\u4e00\u4e2a\u5e38\u89c4\u7684",(0,o.kt)("a",i({parentName:"p"},{href:"variant.md"}),"\u53d8\u4f53"),"."),(0,o.kt)("h2",i({},{id:"\u4f8b\u5b50"}),"\u4f8b\u5b50"),(0,o.kt)("p",null,"Here's a normal value:"),(0,o.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u666e\u901a\u7684\u503c\uff1a"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let licenseNumber = 5\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"var licenseNumber = 5;\n"))),(0,o.kt)("p",null,'To represent the concept of "maybe null", you\'d turn this into an ',(0,o.kt)("inlineCode",{parentName:"p"},"option")," type by wrapping it. For the sake of a more illustrative example, we'll put a condition around it:"),(0,o.kt)("p",null,'\u4e3a\u4e86\u8868\u793a"\u53ef\u80fd\u4e3a\u7a7a"\u7684\u6982\u5ff5\uff0c\u4f60\u9700\u8981\u5728\u5b83\u5916\u9762\u5305\u88f9\u4e00\u5c42',(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u628a\u5b83\u53d8\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u7c7b\u578b\u3002\u4e3a\u4e86\u66f4\u6709\u6548\u7684\u5c55\u793a\u4f7f\u7528\u65b9\u5f0f\uff0c\u6211\u4eec\u5199\u4e00\u4e2a\u5173\u4e8e\u8fd9\u70b9\u7684\u6761\u4ef6\u8868\u8fbe\u5f0f\uff1a"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),"let licenseNumber =\n  if personHasACar {\n    Some(5)\n  } else {\n    None\n  }\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"var licenseNumber = personHasACar ? 5 : undefined;\n"))),(0,o.kt)("p",null,"Later on, when another piece of code receives such value, it'd be forced to handle both cases through ",(0,o.kt)("a",i({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"pattern matching"),":"),(0,o.kt)("p",null,"\u7a0d\u540e\uff0c\u6211\u4eec\u4f1a\u770b\u5230\u53e6\u4e00\u4e9b\u4f7f\u7528\u8fd9\u6837\u7684\u503c\u7684\u4ee3\u7801\uff0c\u5b83\u4f1a\u901a\u8fc7",(0,o.kt)("a",i({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"\u6a21\u5f0f\u5339\u914d"),"\u5f3a\u5236\u5904\u7406\u4e24\u79cd\u5206\u652f\u60c5\u51b5\u3002"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res"}),'switch licenseNumber {\n| None =>\n  Js.log("The person doesn\'t have a car")\n| Some(number) =>\n  Js.log("The person\'s license number is " ++ Js.Int.toString(number))\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var number = licenseNumber;\n\nif (number !== undefined) {\n  console.log("The person\'s license number is " + number.toString());\n} else {\n  console.log("The person doesn\'t have a car");\n}\n'))),(0,o.kt)("p",null,"By turning your ordinary number into an ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type, and by forcing you to handle the ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," case, the language effectively removed the possibility for you to mishandle, or forget to handle, a conceptual ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," value! ",(0,o.kt)("strong",{parentName:"p"},"A pure ReScript program doesn't have null errors"),"."),(0,o.kt)("p",null,"\u901a\u8fc7\u628a\u5e38\u89c4\u7684\u6570\u5b57\u7c7b\u578b\u8f6c\u6362\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u7c7b\u578b\uff0c\u5e76\u4e14\u5f3a\u5236\u4f60\u5904\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"\u5206\u652f\uff0cReScript\u6709\u6548\u7684\u79fb\u9664\u4e86\u6240\u6709 \u8bef\u5904\u7406 \u6216\u8005 \u5fd8\u8bb0\u5904\u7406 \u4e00\u4e2a\u6982\u5ff5\u4e0a\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\u7684\u503c\u7684\u53ef\u80fd\u6027! ",(0,o.kt)("strong",{parentName:"p"},"\u7eafReScript\u7a0b\u5e8f\u4e0d\u4f1a\u6709null\u9519\u8bef"),"."),(0,o.kt)("h2",i({},{id:"interoperate-with-javascript-undefined-and-null--\u4e0ejavascript\u7684undefined\u548cnull\u4e92\u64cd\u4f5c"}),"Interoperate with JavaScript ",(0,o.kt)("inlineCode",{parentName:"h2"},"undefined")," and ",(0,o.kt)("inlineCode",{parentName:"h2"},"null")," | \u4e0eJavaScript\u7684",(0,o.kt)("inlineCode",{parentName:"h2"},"undefined"),"\u548c",(0,o.kt)("inlineCode",{parentName:"h2"},"null"),"\u4e92\u64cd\u4f5c"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type is common enough that we special-case it when compiling to JavaScript:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u7c7b\u578b\u5f88\u5e38\u89c1\uff0c\u6240\u4ee5\u6211\u4eec\u5728\u7f16\u8bd1\u6210JavaScript\u65f6\u4f1a\u5bf9\u5176\u8fdb\u884c\u7279\u6b8a\u5904\u7406\uff1a"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let x = Some(5)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"var x = 5;\n"))),(0,o.kt)("p",null,"simply compiles down to ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),", and"),(0,o.kt)("p",null,"\u4f1a\u7b80\u6d01\u7684\u7f16\u8bd1\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"5"),", \u5e76\u4e14"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let x = None\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"var x;\n"))),(0,o.kt)("p",null,"compiles to ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"! If you've got e.g. a string in JavaScript that you know might be ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", type it as ",(0,o.kt)("inlineCode",{parentName:"p"},"option<string>")," and you're done! Likewise, you can send a ",(0,o.kt)("inlineCode",{parentName:"p"},"Some(5)")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," to the JS side and expect it to be interpreted correctly =)"),(0,o.kt)("p",null,"\u4f1a\u7f16\u8bd1\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),'! \u5982\u679c\u4f60\u5728JavaScript\u4e2d\u6709\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u4f60\u77e5\u9053\u5b83\u53ef\u80fd\u662f "\u672a\u5b9a\u4e49\u7684", \u628a\u5b83\u4f5c\u4e3a ',(0,o.kt)("inlineCode",{parentName:"p"},"option<string>"),"\u8f93\u5165\u5c31\u53ef\u4ee5\u4e86\u3002\u540c\u6837\uff0c\u4f60\u53ef\u4ee5\u5411JS\u7aef\u53d1\u9001\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"Some(5)"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", \u5b83\u4e5f\u80fd\u88ab\u6b63\u786e\u89e3\u91ca =)"),(0,o.kt)("h3",i({},{id:"caveat-1--\u8b66\u544a-1"}),"Caveat 1 | \u8b66\u544a 1"),(0,o.kt)("p",null,"The option-to-undefined translation isn't perfect, because on our side, ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," values can be composed:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\u7684\u7f16\u8bd1\u5e76\u4e0d\u5b8c\u7f8e\uff0c\u56e0\u4e3a\u5728ReScript\u4e2d\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u503c\u662f\u53ef\u4ee5\u7ec4\u5408\u7684\uff1a"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let x = Some(Some(Some(5)))\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"var x = 5;\n"))),(0,o.kt)("p",null,"This still compiles to ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),", but this gets troublesome:"),(0,o.kt)("p",null,"\u8fd9\u4ecd\u7136\u4f1a\u7f16\u8bd1\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"5"),", \u4f46\u662f\u5e26\u6765\u4e86\u4e00\u4e9b\u56f0\u6270\uff1a"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let x = Some(None)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var Caml_option = require("./stdlib/caml_option.js");\n\nvar x = Caml_option.some(undefined);\n')),(0,o.kt)("p",null,"(See output tab).")),(0,o.kt)("p",null,"What's this ",(0,o.kt)("inlineCode",{parentName:"p"},"Caml_option.some")," thing? Why can't this compile to ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"? Long story short, when dealing with a polymorphic ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type (aka ",(0,o.kt)("inlineCode",{parentName:"p"},"option<'a>"),", for any ",(0,o.kt)("inlineCode",{parentName:"p"},"'a"),"), many operations become tricky if we don't mark the value with some special annotation. If this doesn't make sense, don't worry; just remember the following rule:"),(0,o.kt)("p",null,"\u8fd9\u91cc\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Caml_option.some"),"\u662f\u4ec0\u4e48? \u4e3a\u4ec0\u4e48\u4e0d\u997f\u80fd\u76f4\u63a5\u7f16\u8bd1\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"? \u957f\u8bdd\u77ed\u8bf4\uff0c\u5f53\u5904\u7406\u591a\u6001\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u7c7b\u578b\u65f6(\u4e5f\u5c31\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"option<'a>"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'a"),"\u4e3a\u4efb\u610f\u7684\u7c7b\u578b), \u5f88\u591a\u64cd\u4f5c\u5982\u679c\u6211\u4eec\u4e0d\u4e3a\u503c\u52a0\u4e0a\u7279\u6b8a\u7684\u7b7e\u540d\u90fd\u4f1a\u53d8\u5f97\u68d8\u624b\u3002\u5982\u679c\u8fd9\u4e0d\u591f\u6709\u8bf4\u670d\u529b\uff0c\u522b\u62c5\u5fc3; \u8bb0\u4f4f\u4e0b\u9762\u7684\u89c4\u5219\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Never, EVER, pass a nested ",(0,o.kt)("inlineCode",{parentName:"strong"},"option")," value (e.g. ",(0,o.kt)("inlineCode",{parentName:"strong"},"Some(Some(Some(5)))"),") into the JS side."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Never, EVER, annotate a value coming from JS as ",(0,o.kt)("inlineCode",{parentName:"strong"},"option<'a>"),". Always give the concrete, non-polymorphic type."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6c38\u8fdc\u4e0d\u8981\u4f20\u9012\u4e00\u4e2a\u5d4c\u5957\u7684",(0,o.kt)("inlineCode",{parentName:"strong"},"option"),"\u503c(\u6bd4\u5982\u8bf4\uff1a",(0,o.kt)("inlineCode",{parentName:"strong"},"Some(Some(Some(5)))"),")\u5230JS"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"\u6c38\u8fdc\u4e0d\u8981\u6807\u6ce8\u4e00\u4e2a\u6765\u81ea\u4e8eJS\u7684\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"strong"},"option<'a>"),"\u7c7b\u578b\u3002\u6bcf\u6b21\u90fd\u628a\u5177\u4f53\u7684\u975e\u591a\u6001\u7684\u7c7b\u578b\u52a0\u4e0a\u3002")))),(0,o.kt)("h3",i({},{id:"caveat-2--\u8b66\u544a-2"}),"Caveat 2 | \u8b66\u544a 2"),(0,o.kt)("p",null,"Unfortunately, lots of times, your JavaScript value might be ",(0,o.kt)("em",{parentName:"p"},"both")," ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". In that case, you unfortunately can't type such value as e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"option<int>"),", since our ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type only checks for ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," and not ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," when dealing with a ",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,o.kt)("p",null,"\u4e0d\u5e78\u7684\u662f\uff0c\u5927\u90e8\u5206\u7684\u65f6\u95f4\uff0c\u4f60\u7684JavaScript\u503c\u53ef\u80fd ",(0,o.kt)("em",{parentName:"p"},"\u540c\u65f6")," \u662f",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". \u5f88\u4e0d\u5e78\uff0c\u5728\u90a3\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e0d\u80fd\u628a\u90a3\u4e2a\u503c\u5f53\u4f5c",(0,o.kt)("inlineCode",{parentName:"p"},"option<int>"),"\u7c7b\u578b\uff0c\u56e0\u4e3a\u5f53\u5904\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"\u7684\u65f6\u5019\uff0c\u6211\u4eec\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u7c7b\u578b\u53ea\u4f1a\u68c0\u67e5",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\u800c\u4e0d\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("h4",i({},{id:"solution-more-sophisticated-undefined--null-interop--\u89e3\u51b3\u65b9\u6cd5\uff1a\u66f4\u52a0\u590d\u6742\u7684undefined\u548cnull\u4e92\u64cd\u4f5c"}),"Solution: More Sophisticated ",(0,o.kt)("inlineCode",{parentName:"h4"},"undefined")," & ",(0,o.kt)("inlineCode",{parentName:"h4"},"null")," Interop | \u89e3\u51b3\u65b9\u6cd5\uff1a\u66f4\u52a0\u590d\u6742\u7684",(0,o.kt)("inlineCode",{parentName:"h4"},"undefined"),"\u548c",(0,o.kt)("inlineCode",{parentName:"h4"},"null"),"\u4e92\u64cd\u4f5c"),(0,o.kt)("p",null,"To solve this, we provide access to more elaborate ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," helpers through the ",(0,o.kt)("a",i({parentName:"p"},{href:"api/js/nullable"}),(0,o.kt)("inlineCode",{parentName:"a"},"Js.Nullable"))," module. This somewhat works like an ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," type, but is different from it."),(0,o.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u901a\u8fc7",(0,o.kt)("a",i({parentName:"p"},{href:"api/js/nullable"}),(0,o.kt)("inlineCode",{parentName:"a"},"Js.Nullable")),"\u6a21\u5757\u63d0\u4f9b\u5bf9\u66f4\u590d\u6742\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\u7684\u5e2e\u52a9\u51fd\u6570\u3002\u8fd9\u6709\u70b9\u50cf",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u7c7b\u578b\uff0c\u4f46\u53c8\u4e0e\u4e4b\u4e0d\u540c\u3002"),(0,o.kt)("h4",i({},{id:"examples--\u4f8b\u5b50"}),"Examples | \u4f8b\u5b50"),(0,o.kt)("p",null,"To create a JS ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", use the value ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.null"),". To create a JS ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", use ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.undefined")," (you can naturally use ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," too, but that's not the point here; the ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.*")," helpers wouldn't work with it)."),(0,o.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2aJS\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"null"),", \u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.null"),". \u8981\u521b\u5efa\u4e00\u4e2aJS",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", \u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.undefined")," (\u4f60\u81ea\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"None"),", \u4f46\u8fd9\u4e0d\u662f\u8fd9\u91cc\u7684\u91cd\u70b9; ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.*"),"\u91cc\u7684\u5e2e\u52a9\u51fd\u6570\u4e0d\u4f1a\u5bf9\u5b83\u8d77\u4f5c\u7528)."),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("MyConstant") external myId: Js.Nullable.t<string> = "myId"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,o.kt)("p",null,"To create such a nullable string from our side (presumably to pass it to the JS side, for interop purpose), do:"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u4eceRsScript\u8fd9\u8fb9\u521b\u5efa\u8fd9\u6837\u4e00\u4e2a\u53ef\u7a7a(nullable)\u7684\u5b57\u7b26\u4e32(\u5148\u5047\u5b9a\u662f\u4e3a\u4e86\u628a\u5b83\u4f20\u9012\u7ed9JS\u90a3\u8fb9\uff0c\u4ee5\u8fbe\u5230\u4e92\u64cd\u4f5c\u7684\u76ee\u7684)\u53ef\u4ee5\u8fd9\u4e48\u505a\uff1a"),(0,o.kt)(u,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'@module("MyIdValidator") external validate: Js.Nullable.t<string> => bool = "validate"\nlet personId: Js.Nullable.t<string> = Js.Nullable.return("abc123")\n\nlet result = validate(personId)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var MyIdValidator = require("MyIdValidator");\nvar personId = "abc123";\nvar result = MyIdValidator.validate(personId);\n'))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"return"),' part "wraps" a string into a nullable string, to make the type system understand and track the fact that, as you pass this value around, it\'s not just a string, but a string that can be ',(0,o.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"return"),'\u7684\u90a3\u90e8\u5206\u662f\u5c06\u4e00\u4e2a\u5b57\u7b26\u4e32"\u5305\u88f9"\u6210\u4e00\u4e2a\u53ef\u7a7a\u7684\u5b57\u7b26\u4e32\uff0c\u4ee5\u4f7f\u7c7b\u578b\u7cfb\u7edf\u7406\u89e3\u5e76\u8ddf\u8e2a\u8fd9\u6837\u4e00\u4e2a\u4e8b\u5b9e\uff0c\u5373\u5f53\u4f60\u4f20\u9012\u8fd9\u4e2a\u503c\u65f6\uff0c\u5b83\u4e0d\u4ec5\u4ec5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u800c\u662f\u4e00\u4e2a\u53ef\u4ee5\u662f',(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\u7684\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("h4",i({},{id:"convert-tofrom-option--\u4e0eoption\u503c\u4e92\u76f8\u8f6c\u6362"}),"Convert to/from ",(0,o.kt)("inlineCode",{parentName:"h4"},"option")," | \u4e0e",(0,o.kt)("inlineCode",{parentName:"h4"},"option"),"\u503c\u4e92\u76f8\u8f6c\u6362"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.fromOption")," converts from a ",(0,o.kt)("inlineCode",{parentName:"p"},"option")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.t"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.toOption")," does the opposite.\n",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.fromOption"),"\u5c06\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"option"),"\u8f6c\u6362\u5230",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.t"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Nullable.toOption"),"\u505a\u53cd\u5411\u7684\u8f6c\u6362\u3002"))}s.isMDXComponent=!0,s.frontmatter={title:"Null, Undefined \u548c Option",description:"JS interop with nullable and optional values in ReScript",canonical:"/docs/manual/latest/null-undefined-option",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/null-undefined-option.mdx"}},16685:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/null-undefined-option",function(){return t(35134)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=16685,e(e.s=n);var n}));var n=e.O();_N_E=n}]);