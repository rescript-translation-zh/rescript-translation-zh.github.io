(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31069],{17375:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}a.d(t,{Z:function(){return n}})},17244:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(96156),r=a(17375),i=(a(67294),a(3905));function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var p={};function m(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",l(l(l({},p),a),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",l({},{id:"mutablemapint"}),"MutableMapInt"),(0,i.kt)("h2",l({},{id:"key"}),"key"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type key = int\n")),(0,i.kt)("h2",l({},{id:"t"}),"t"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type t<'a>\n")),(0,i.kt)("h2",l({},{id:"make"}),"make"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let make: unit => t<'a>\n")),(0,i.kt)("h2",l({},{id:"clear"}),"clear"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let clear: t<'a> => unit\n")),(0,i.kt)("h2",l({},{id:"isempty"}),"isEmpty"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let isEmpty: t<'a> => bool\n")),(0,i.kt)("h2",l({},{id:"has"}),"has"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let has: (t<'a>, key) => bool\n")),(0,i.kt)("h2",l({},{id:"cmpu"}),"cmpU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmpU: (t<'a>, t<'a>, (. 'a, 'a) => int) => int\n")),(0,i.kt)("h2",l({},{id:"cmp"}),"cmp"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let cmp: (t<'a>, t<'a>, ('a, 'a) => int) => int\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"cmp(m1, m2, cmp)")," First compare by size, if size is the same, compare by key, value pair."),(0,i.kt)("h2",l({},{id:"equ"}),"eqU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eqU: (t<'a>, t<'a>, (. 'a, 'a) => bool) => bool\n")),(0,i.kt)("h2",l({},{id:"eq"}),"eq"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let eq: (t<'a>, t<'a>, ('a, 'a) => bool) => bool\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eq(m1, m2, cmp)")),(0,i.kt)("h2",l({},{id:"foreachu"}),"forEachU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachU: (t<'a>, (. key, 'a) => unit) => unit\n")),(0,i.kt)("h2",l({},{id:"foreach"}),"forEach"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: (t<'a>, (key, 'a) => unit) => unit\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"forEach(m, f)")," applies ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," to all bindings in map ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," receives the key as first argument, and the associated value as second argument. The application order of ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," is in increasing order."),(0,i.kt)("h2",l({},{id:"reduceu"}),"reduceU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceU: (t<'a>, 'b, (. 'b, key, 'a) => 'b) => 'b\n")),(0,i.kt)("h2",l({},{id:"reduce"}),"reduce"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: (t<'a>, 'b, ('b, key, 'a) => 'b) => 'b\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"reduce(m, a, f), computes"),"(f(kN, dN) ... (f(k1, d1, a))...)",(0,i.kt)("inlineCode",{parentName:"p"},", where"),"k1 ... kN",(0,i.kt)("inlineCode",{parentName:"p"},"are the keys of all bindings in"),"m",(0,i.kt)("inlineCode",{parentName:"p"},"(in increasing order), and"),"d1 ... dN` are the associated data."),(0,i.kt)("h2",l({},{id:"everyu"}),"everyU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyU: (t<'a>, (. key, 'a) => bool) => bool\n")),(0,i.kt)("h2",l({},{id:"every"}),"every"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: (t<'a>, (key, 'a) => bool) => bool\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"every(m, p)")," checks if all the bindings of the map satisfy the predicate ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),". The application order of ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is unspecified."),(0,i.kt)("h2",l({},{id:"someu"}),"someU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let someU: (t<'a>, (. key, 'a) => bool) => bool\n")),(0,i.kt)("h2",l({},{id:"some"}),"some"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: (t<'a>, (key, 'a) => bool) => bool\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"some(m, p)")," checks if at least one binding of the map satisfy the predicate ",(0,i.kt)("inlineCode",{parentName:"p"},"p"),". The application order of ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," is unspecified."),(0,i.kt)("h2",l({},{id:"size"}),"size"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let size: t<'a> => int\n")),(0,i.kt)("h2",l({},{id:"tolist"}),"toList"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toList: t<'a> => list<(key, 'a)>\n")),(0,i.kt)("p",null,"In increasing order"),(0,i.kt)("h2",l({},{id:"toarray"}),"toArray"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toArray: t<'a> => array<(key, 'a)>\n")),(0,i.kt)("h2",l({},{id:"fromarray"}),"fromArray"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fromArray: array<(key, 'a)> => t<'a>\n")),(0,i.kt)("h2",l({},{id:"keystoarray"}),"keysToArray"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let keysToArray: t<'a> => array<key>\n")),(0,i.kt)("h2",l({},{id:"valuestoarray"}),"valuesToArray"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let valuesToArray: t<'a> => array<'a>\n")),(0,i.kt)("h2",l({},{id:"minkey"}),"minKey"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKey: t<'a> => option<key>\n")),(0,i.kt)("h2",l({},{id:"minkeyundefined"}),"minKeyUndefined"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minKeyUndefined: t<'a> => Js.undefined<key>\n")),(0,i.kt)("h2",l({},{id:"maxkey"}),"maxKey"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKey: t<'a> => option<key>\n")),(0,i.kt)("h2",l({},{id:"maxkeyundefined"}),"maxKeyUndefined"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxKeyUndefined: t<'a> => Js.undefined<key>\n")),(0,i.kt)("h2",l({},{id:"minimum"}),"minimum"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minimum: t<'a> => option<(key, 'a)>\n")),(0,i.kt)("h2",l({},{id:"minundefined"}),"minUndefined"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let minUndefined: t<'a> => Js.undefined<(key, 'a)>\n")),(0,i.kt)("h2",l({},{id:"maximum"}),"maximum"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maximum: t<'a> => option<(key, 'a)>\n")),(0,i.kt)("h2",l({},{id:"maxundefined"}),"maxUndefined"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let maxUndefined: t<'a> => Js.undefined<(key, 'a)>\n")),(0,i.kt)("h2",l({},{id:"get"}),"get"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let get: (t<'a>, key) => option<'a>\n")),(0,i.kt)("h2",l({},{id:"getundefined"}),"getUndefined"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getUndefined: (t<'a>, key) => Js.undefined<'a>\n")),(0,i.kt)("h2",l({},{id:"getwithdefault"}),"getWithDefault"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getWithDefault: (t<'a>, key, 'a) => 'a\n")),(0,i.kt)("h2",l({},{id:"getexn"}),"getExn"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let getExn: (t<'a>, key) => 'a\n")),(0,i.kt)("h2",l({},{id:"checkinvariantinternal"}),"checkInvariantInternal"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let checkInvariantInternal: t<'a> => unit\n")),(0,i.kt)("p",null,"Raise when invariant is not held."),(0,i.kt)("h2",l({},{id:"remove"}),"remove"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let remove: (t<'a>, key) => unit\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"remove(m, x)")," do the in-place modification."),(0,i.kt)("h2",l({},{id:"removemany"}),"removeMany"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let removeMany: (t<'a>, array<key>) => unit\n")),(0,i.kt)("h2",l({},{id:"set"}),"set"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let set: (t<'a>, key, 'a) => unit\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"set(m, x, y)")," do the in-place modification, return ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," for chaining. If ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," was already bound in ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),", its previous binding disappears."),(0,i.kt)("h2",l({},{id:"updateu"}),"updateU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let updateU: (t<'a>, key, (. option<'a>) => option<'a>) => unit\n")),(0,i.kt)("h2",l({},{id:"update"}),"update"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let update: (t<'a>, key, option<'a> => option<'a>) => unit\n")),(0,i.kt)("h2",l({},{id:"mapu"}),"mapU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapU: (t<'a>, (. 'a) => 'b) => t<'b>\n")),(0,i.kt)("h2",l({},{id:"map"}),"map"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: (t<'a>, 'a => 'b) => t<'b>\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"map(m, f)")," returns a map with same domain as ",(0,i.kt)("inlineCode",{parentName:"p"},"m"),", where the associated value a of all bindings of ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," has been replaced by the result of the application of ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"a"),". The bindings are passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"f")," in increasing order with respect to the ordering over the type of the keys."),(0,i.kt)("h2",l({},{id:"mapwithkeyu"}),"mapWithKeyU"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKeyU: (t<'a>, (. key, 'a) => 'b) => t<'b>\n")),(0,i.kt)("h2",l({},{id:"mapwithkey"}),"mapWithKey"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapWithKey: (t<'a>, (key, 'a) => 'b) => t<'b>\n")))}m.isMDXComponent=!0,m.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/api/belt/mutable-map-int.mdx"}},52191:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/belt/mutable-map-int",function(){return a(17244)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=52191,e(e.s=t);var t}));var t=e.O();_N_E=t}]);