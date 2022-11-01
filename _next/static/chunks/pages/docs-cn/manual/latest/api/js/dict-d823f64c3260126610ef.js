(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3968],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},90820:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return c}});var n=a(17375),r=a(96156),s=(a(67294),a(3905));function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p,o=(p="Intro",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",l({},e))}),u={};function c(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",l(l(l({},u),a),{},{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",l({},{id:"dict"}),"Dict"),(0,s.kt)(o,{mdxType:"Intro"},(0,s.kt)("p",null,"Provide utilities for JS dictionary object."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," This module's examples will assume this predeclared dictionary:"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),'let ages = Js.Dict.fromList(list{("Maria", 30), ("Vinh", 22), ("Fred", 49)})\n'))),(0,s.kt)("h2",l({},{id:"t"}),"t"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'a>\n")),(0,s.kt)("p",null,"Dictionary type (ie an '{ }' JS object). However it is restricted to hold a single type; therefore values must have the same type.\nThis Dictionary type is mostly used with the Js_json.t type."),(0,s.kt)("h2",l({},{id:"key"}),"key"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type key = string\n")),(0,s.kt)("p",null,"The type for dictionary keys. This means that dictionaries ",(0,s.kt)("em",{parentName:"p"},"must")," use ",(0,s.kt)("inlineCode",{parentName:"p"},"string"),"s as their keys."),(0,s.kt)("h2",l({},{id:"get"}),"get"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'a>, key) => option<'a>\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Js.Dict.get(key)")," returns ",(0,s.kt)("inlineCode",{parentName:"p"},"None")," if the key is not found in the dictionary, ",(0,s.kt)("inlineCode",{parentName:"p"},"Some(value)")," otherwise."),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'Js.Dict.get(ages, "Vinh") == Some(22)\nJs.Dict.get(ages, "Paul") == None\n')),(0,s.kt)("h2",l({},{id:"unsafeget"}),"unsafeGet"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let unsafeGet: (t<'a>, key) => 'a\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Js.Dict.unsafeGet(key)")," returns the value if the key exists, otherwise an ",(0,s.kt)("inlineCode",{parentName:"p"},"undefined")," value is returned. Use this only when you are sure the key exists (i.e. when having used the ",(0,s.kt)("inlineCode",{parentName:"p"},"keys()")," function to check that the key is valid)."),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'Js.Dict.unsafeGet(ages, "Fred") == 49\nJs.Dict.unsafeGet(ages, "Paul") // returns undefined\n')),(0,s.kt)("h2",l({},{id:"set"}),"set"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let set: (t<'a>, key, 'a) => unit\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"Js.Dict.set(dict, key, value)")," sets the key/value in the dictionary ",(0,s.kt)("inlineCode",{parentName:"p"},"dict"),". If the key does not exist, and entry will be created for it. ",(0,s.kt)("em",{parentName:"p"},"This function modifies the original dictionary.")),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'Js.Dict.set(ages, "Maria", 31)\nJs.log(ages == Js.Dict.fromList(list{("Maria", 31), ("Vinh", 22), ("Fred", 49)}))\n\nJs.Dict.set(ages, "David", 66)\nJs.log(ages == Js.Dict.fromList(list{("Maria", 31), ("Vinh", 22), ("Fred", 49), ("David", 66)}))\n')),(0,s.kt)("h2",l({},{id:"keys"}),"keys"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keys: t<'a> => array<string>\n")),(0,s.kt)("p",null,"Returns all the keys in the dictionary ",(0,s.kt)("inlineCode",{parentName:"p"},"dict"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'Js.Dict.keys(ages) == ["Maria", "Vinh", "Fred"]\n')),(0,s.kt)("h2",l({},{id:"empty"}),"empty"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let empty: unit => t<'a>\n")),(0,s.kt)("p",null,"Returns an empty dictionary."),(0,s.kt)("h2",l({},{id:"unsafedeletekey"}),"unsafeDeleteKey"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let unsafeDeleteKey: (. t<string>, string) => unit\n")),(0,s.kt)("p",null,"Experimental internal function"),(0,s.kt)("h2",l({},{id:"entries"}),"entries"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let entries: t<'a> => array<(key, 'a)>\n")),(0,s.kt)("p",null,"Returns an array of key/value pairs in the given dictionary (ES2017)."),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'Js.Dict.entries(ages) == [("Maria", 30), ("Vinh", 22), ("Fred", 49)]\n')),(0,s.kt)("h2",l({},{id:"values"}),"values"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let values: t<'a> => array<'a>\n")),(0,s.kt)("p",null,"Returns the values in the given dictionary (ES2017)."),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"Js.Dict.values(ages) == [30, 22, 49]\n")),(0,s.kt)("h2",l({},{id:"fromlist"}),"fromList"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromList: list<(key, 'a)> => t<'a>\n")),(0,s.kt)("p",null,"Creates a new dictionary containing each (key, value) pair in its list argument."),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let capitals = Js.Dict.fromList(list{("Japan", "Tokyo"), ("France", "Paris"), ("Egypt", "Cairo")})\n')),(0,s.kt)("h2",l({},{id:"fromarray"}),"fromArray"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: array<(key, 'a)> => t<'a>\n")),(0,s.kt)("p",null,"Creates a new dictionary containing each (key, value) pair in its array argument."),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let capitals2 = Js.Dict.fromArray([("Germany", "Berlin"), ("Burkina Faso", "Ouagadougou")])\n')),(0,s.kt)("h2",l({},{id:"map"}),"map"),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: ((. 'a) => 'b, t<'a>) => t<'b>\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"map(f, dict)")," maps ",(0,s.kt)("inlineCode",{parentName:"p"},"dict")," to a new dictionary with the same keys, using the function ",(0,s.kt)("inlineCode",{parentName:"p"},"f")," to map each value."),(0,s.kt)("pre",null,(0,s.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let prices = Js.Dict.fromList(list{("pen", 1.00), ("book", 5.00), ("stapler", 7.00)})\n\nlet discount = (. price) => price *. 0.90\nlet salePrices = Js.Dict.map(discount, prices)\n\nsalePrices == Js.Dict.fromList(list{("pen", 0.90), ("book", 4.50), ("stapler", 6.30)})\n')))}c.isMDXComponent=!0,c.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/api/js/dict.mdx"}},35361:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/js/dict",function(){return a(90820)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=35361,e(e.s=t);var t}));var t=e.O();_N_E=t}]);