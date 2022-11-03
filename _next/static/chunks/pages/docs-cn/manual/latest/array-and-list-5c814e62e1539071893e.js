(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[82299],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},90975:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(17375),r=a(96156),l=(a(67294),a(3905));function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p,o=(p="CodeTab",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",s({},e))}),u={};function m(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",s(s(s({},u),a),{},{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",s({},{id:"array-and-list--\u6570\u7ec4\u548c\u5217\u8868"}),"Array and List | \u6570\u7ec4\u548c\u5217\u8868"),(0,l.kt)("h2",s({},{id:"array--\u6570\u7ec4"}),"Array | \u6570\u7ec4"),(0,l.kt)("p",null,"Arrays are our main ordered data structure. They work the same way as JavaScript arrays: they can be randomly accessed, dynamically resized, updated, etc."),(0,l.kt)("p",null,"\u6570\u7ec4\u662fReScript\u4e2d\u4e3b\u8981\u7684\u987a\u5e8f\u6570\u636e\u7ed3\u6784\u3002\u5b83\u4eec\u548cJavaScript\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e00\u6837\uff1a\u5b83\u4eec\u53ef\u4ee5\u88ab\u968f\u673a\u8bbf\u95ee\uff0c\u52a8\u6001\u5730\u8c03\u6574\u5927\u5c0f\uff0c\u66f4\u65b0\u7b49\u3002"),(0,l.kt)(o,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let myArray = ["hello", "world", "how are you"]\n')),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var myArray = ["hello", "world", "how are you"];\n'))),(0,l.kt)("p",null,"ReScript arrays' items must have the same type, i.e. homogeneous."),(0,l.kt)("p",null,"ReScript\u6570\u7ec4\u7684\u5143\u7d20\u5fc5\u987b\u5177\u6709\u76f8\u540c\u7684\u7c7b\u578b\uff0c\u5373\u540c\u8d28\u6027(homogeneous)."),(0,l.kt)("h3",s({},{id:"usage--\u7528\u6cd5"}),"Usage | \u7528\u6cd5"),(0,l.kt)("p",null,"See the ",(0,l.kt)("a",s({parentName:"p"},{href:"api/js/array"}),"Js.Array")," API."),(0,l.kt)("p",null,"\u67e5\u770b",(0,l.kt)("a",s({parentName:"p"},{href:"api/js/array"}),"Js.Array"),"\u6a21\u5757\u7684API\u6587\u6863"),(0,l.kt)("p",null,"Access & update an array item like so:"),(0,l.kt)("p",null,"\u8bbf\u95ee & \u66f4\u65b0\u4e00\u4e2a\u6570\u7ec4\u5143\u7d20\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"),(0,l.kt)(o,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let myArray = ["hello", "world", "how are you"]\n\nlet firstItem = myArray[0] // "hello"\n\nmyArray[0] = "hey" // now ["hey", "world", "how are you"]\n\nlet pushedValue = Js.Array2.push(myArray, "bye")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var myArray = ["hello", "world", "how are you"];\n\nvar firstItem = myArray[0];\n\nmyArray[0] = "hey";\n\nvar pushedValue = myArray.push("bye");\n'))),(0,l.kt)("h2",s({},{id:"list--\u5217\u8868"}),"List | \u5217\u8868"),(0,l.kt)("p",null,"ReScript provides a singly linked list too. Lists are:"),(0,l.kt)("p",null,"ReScript\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5355\u94fe\u8868\u3002\u5217\u8868\u662f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"immutable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"fast at prepending items")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"fast at getting the head")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"slow at everything else")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u53ef\u53d8")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5feb\u901f\u7684\u524d\u7f6e\u5143\u7d20")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5feb\u901f\u7684\u83b7\u53d6\u5934\u90e8\u5143\u7d20")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5176\u4ed6\u64cd\u4f5c\u90fd\u5f88\u6162"))),(0,l.kt)(o,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let myList = list{1, 2, 3}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var myList = {\n  hd: 1,\n  tl: {\n    hd: 2,\n    tl: {\n      hd: 3,\n      tl: 0\n    }\n  }\n};\n"))),(0,l.kt)("p",null,"Like arrays, lists' items need to be of the same type."),(0,l.kt)("p",null,"\u50cf\u6570\u7ec4\u4e00\u6837\uff0c\u5217\u8868\u7684\u5143\u7d20\u9700\u8981\u662f\u76f8\u540c\u7684\u7c7b\u578b\u3002"),(0,l.kt)("h3",s({},{id:"usage--\u7528\u6cd5-1"}),"Usage | \u7528\u6cd5"),(0,l.kt)("p",null,"You'd use list for its resizability, its fast prepend (adding at the head), and its fast split, all of which are immutable and relatively efficient."),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5217\u8868\u6765\u8c03\u6574\u5b83\u7684\u5927\u5c0f\uff0c\u5b83\u7684\u5feb\u901f\u524d\u7f6e(\u5728\u5934\u90e8\u6dfb\u52a0), \u5b83\u7684\u5feb\u901f\u62c6\u5206\uff0c\u6240\u6709\u8fd9\u4e9b\u90fd\u662f\u4e0d\u53ef\u53d8\u7684\u548c\u76f8\u5bf9\u9ad8\u6548\u7684\u3002"),(0,l.kt)("p",null,"Do ",(0,l.kt)("strong",{parentName:"p"},"not")," use list if you need to randomly access an item or insert at non-head position. Your code would end up obtuse and/or slow."),(0,l.kt)("p",null,"The standard lib provides a ",(0,l.kt)("a",s({parentName:"p"},{href:"api/belt/list"}),"List module"),"."),(0,l.kt)("h4",s({},{id:"immutable-prepend--\u4e0d\u53ef\u53d8\u524d\u7f6e"}),"Immutable Prepend | \u4e0d\u53ef\u53d8\u524d\u7f6e"),(0,l.kt)("p",null,"Use the spread syntax:"),(0,l.kt)("p",null,"\u4f7f\u7528\u5c55\u5f00(spread)\u8bed\u6cd5\uff1a"),(0,l.kt)(o,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"let myList = list{1, 2, 3}\nlet anotherList = list{0, ...myList}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),"var myList = {\n  hd: 1,\n  tl: {\n    hd: 2,\n    tl: {\n      hd: 3,\n      tl: 0\n    }\n  }\n};\n\nvar anotherList = {\n  hd: 0,\n  tl: myList\n};\n"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"myList")," didn't mutate. ",(0,l.kt)("inlineCode",{parentName:"p"},"anotherList")," is now ",(0,l.kt)("inlineCode",{parentName:"p"},"list{0, 1, 2, 3}"),". This is efficient (constant time, not linear). ",(0,l.kt)("inlineCode",{parentName:"p"},"anotherList"),"'s last 3 elements are shared with ",(0,l.kt)("inlineCode",{parentName:"p"},"myList"),"!"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"myList"),"\u662f\u4e0d\u4f1a\u53d8\u7684\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"anotherList"),"\u73b0\u5728\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"list{0, 1, 2, 3}"),"\u4e86\u3002\u8fd9\u662f\u5341\u5206\u9ad8\u6548\u7684(\u5e38\u6570\u65f6\u95f4\u800c\u4e0d\u662f\u7ebf\u6027\u65f6\u95f4), \u56e0\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"anotherList"),"\u7684\u6700\u540e3\u4e2a\u5143\u7d20\u662f\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"myList"),"\u5171\u4eab\u7684!"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note that ",(0,l.kt)("inlineCode",{parentName:"strong"},"list{a, ...b, ...c}")," is a syntax error"),". We don't support multiple spread for a list. That'd be an accidental linear operation (",(0,l.kt)("inlineCode",{parentName:"p"},"O(b)"),"), since each item of b would be one-by-one added to the head of ",(0,l.kt)("inlineCode",{parentName:"p"},"c"),". You can use ",(0,l.kt)("inlineCode",{parentName:"p"},"List.concat")," for this, but we highly discourage it."),(0,l.kt)("p",null,"Updating an arbitrary item in the middle of a list is also discouraged, since its performance and allocation overhead would be linear (",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)"),")."),(0,l.kt)("p",null,"\u968f\u673a\u7684\u66f4\u65b0\u5217\u8868\u4e2d\u95f4\u7684\u5143\u7d20\u662f\u4e0d\u88ab\u9f13\u52b1\u7684\uff0c\u56e0\u4e3a\u5b83\u7684\u6027\u80fd\u548c\u5206\u914d\u5f00\u9500\u4f1a\u662f\u7ebf\u6027\u7684\u590d\u6742\u5ea6(",(0,l.kt)("inlineCode",{parentName:"p"},"O(n)"),")"),(0,l.kt)("h4",s({},{id:"access--\u8bbf\u95ee"}),"Access | \u8bbf\u95ee"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"switch")," (described in the ",(0,l.kt)("a",s({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"pattern matching section"),") is usually used to access list items:"),(0,l.kt)("p",null,"\u901a\u5e38\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"switch"),"\u8868\u8fbe\u5f0f(\u8be6\u89c1",(0,l.kt)("a",s({parentName:"p"},{href:"pattern-matching-destructuring.md"}),"\u6a21\u5f0f\u5339\u914d"),")\u6765\u8bbf\u95ee\u5217\u8868\u5143\u7d20\uff1a"),(0,l.kt)(o,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let message =\n  switch myList {\n  | list{} => "This list is empty"\n  | list{a, ...rest} => "The head of the list is the string " ++ Js.Int.toString(a)\n  }\n')),(0,l.kt)("pre",null,(0,l.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var message = myList\n  ? "The head of the list is the string " + (1).toString()\n  : "This list is empty";\n'))))}m.isMDXComponent=!0,m.frontmatter={title:"\u6570\u7ec4 & \u5217\u8868",description:"Arrays and List data structures",canonical:"/docs/manual/latest/array-and-list",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/array-and-list.mdx"}},7689:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/array-and-list",function(){return a(90975)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=7689,e(e.s=t);var t}));var t=e.O();_N_E=t}]);