(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41803],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})},18127:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(17375),l=n(96156),r=(n(67294),n(3905));function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i,c=(i="Intro",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",s({},e))}),u={};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",s(s(s({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"global"}),"Global"),(0,r.kt)(c,{mdxType:"Intro"},(0,r.kt)("p",null,"Provide bindings to JS global functions in global namespace.")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type intervalId\n")),(0,r.kt)("p",null,"Identify an interval started by ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.setInterval"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type timeoutId\n")),(0,r.kt)("p",null,"Identify timeout started by ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.setTimeout"),"."),(0,r.kt)("h2",s({},{id:"clearinterval"}),"clearInterval"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let clearInterval: intervalId => unit\n")),(0,r.kt)("p",null,"Clear an interval started by ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.setInterval")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'/* API for a somewhat aggressive snoozing alarm clock */\n\nlet punchSleepyGuy = () => Js.log("Punch")\n\nlet interval = ref(Js.Nullable.null)\n\nlet remind = () => {\n  Js.log("Wake Up!")\n  punchSleepyGuy()\n}\n\nlet snooze = mins =>\n  interval := Js.Nullable.return(Js.Global.setInterval(remind, mins * 60 * 1000))\n\nlet cancel = () =>\n  Js.Nullable.iter(interval.contents, (. intervalId) => Js.Global.clearInterval(intervalId))\n')),(0,r.kt)("h2",s({},{id:"cleartimeout"}),"clearTimeout"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let clearTimeout: timeoutId => unit\n")),(0,r.kt)("p",null,"Clear a timeout started by ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.setTimeout"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'/* A simple model of a code monkey\'s brain */\n\nlet closeHackerNewsTab = () => Js.log("close")\n\nlet timer = ref(Js.Nullable.null)\n\nlet work = () => closeHackerNewsTab()\n\nlet procrastinate = mins => {\n  Js.Nullable.iter(timer.contents, (. timer) => Js.Global.clearTimeout(timer))\n  timer := Js.Nullable.return(Js.Global.setTimeout(work, mins * 60 * 1000))\n}\n')),(0,r.kt)("h2",s({},{id:"setinterval"}),"setInterval"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let setInterval: (unit => unit, int) => intervalId\n")),(0,r.kt)("p",null,"Repeatedly executes a callback with a specified interval (in milliseconds) between calls.\nReturns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.intervalId")," that can be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.clearInterval")," to cancel the timeout."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"/* Will count up and print the count to the console every second */\n\nlet count = ref(0)\n\nlet tick = () => {\n  count := count.contents + 1\n  Js.log(Belt.Int.toString(count.contents))\n}\n\nJs.Global.setInterval(tick, 1000)\n")),(0,r.kt)("h2",s({},{id:"setintervalfloat"}),"setIntervalFloat"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let setIntervalFloat: (unit => unit, float) => intervalId\n")),(0,r.kt)("p",null,"Repeatedly executes a callback with a specified interval (in milliseconds) between calls.\nReturns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.intervalId")," that can be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.clearInterval")," to cancel the timeout."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"/* Will count up and print the count to the console every second */\n\nlet count = ref(0)\n\nlet tick = () => {\n  count := count.contents + 1\n  Js.log(Belt.Int.toString(count.contents))\n}\n\nJs.Global.setIntervalFloat(tick, 1000.0)\n")),(0,r.kt)("h2",s({},{id:"settimeout"}),"setTimeout"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let setTimeout: (unit => unit, int) => timeoutId\n")),(0,r.kt)("p",null,"Execute a callback after a specified delay (in milliseconds).\nReturns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.timeoutId")," that can be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.clearTimeout")," to cancel the timeout."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'/* Prints "Timed out!" in the console after one second */\n\nlet message = "Timed out!"\n\nJs.Global.setTimeout(() => Js.log(message), 1000)\n')),(0,r.kt)("h2",s({},{id:"settimeoutfloat"}),"setTimeoutFloat"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let setTimeoutFloat: (unit => unit, float) => timeoutId\n")),(0,r.kt)("p",null,"Execute a callback after a specified delay (in milliseconds).\nReturns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.timeoutId")," that can be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Js.Global.clearTimeout")," to cancel the timeout."),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'/* Prints "Timed out!" in the console after one second */\n\nlet message = "Timed out!"\n\nJs.Global.setTimeoutFloat(() => Js.log(message), 1000.0)\n')),(0,r.kt)("h2",s({},{id:"encodeuri"}),"encodeURI"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let encodeURI: string => string\n")),(0,r.kt)("p",null,"URL-encodes a string."),(0,r.kt)("h2",s({},{id:"decodeuri"}),"decodeURI"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let decodeURI: string => string\n")),(0,r.kt)("p",null,"Decodes a URL-enmcoded string produced by encodeURI."),(0,r.kt)("h2",s({},{id:"encodeuricomponent"}),"encodeURIComponent"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let encodeURIComponent: string => string\n")),(0,r.kt)("p",null,"URL-encodes a string, including characters with special meaning in a URI."),(0,r.kt)("h2",s({},{id:"decodeuricomponent"}),"decodeURIComponent"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let decodeURIComponent: string => string\n")),(0,r.kt)("p",null,"Decodes a URL-enmcoded string produced by encodeURIComponent"))}p.isMDXComponent=!0,p.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/api/js/global.mdx"}},16649:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/js/global",function(){return n(18127)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=16649,e(e.s=t);var t}));var t=e.O();_N_E=t}]);