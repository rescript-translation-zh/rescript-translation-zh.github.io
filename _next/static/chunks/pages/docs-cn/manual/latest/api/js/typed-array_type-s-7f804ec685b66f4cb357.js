(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88054],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},89894:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(17375),r=n(96156),i=(n(67294),n(3905));function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g,o=(g="Intro",function(e){return console.warn("Component "+g+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",l({},e))}),p={};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",l(l(l({},p),n),{},{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",l({},{id:"typedarray-type-s"}),"TypedArray type S"),(0,i.kt)(o,{mdxType:"Intro"},(0,i.kt)("p",null,"TODO")),(0,i.kt)("h2",l({},{id:"t"}),"t"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type elt\ntype typed_array<'a>\ntype t = typed_array<elt>\n")),(0,i.kt)("h2",l({},{id:"unsafe_get"}),"unsafe_get"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let unsafe_get: (t, int) => elt\n")),(0,i.kt)("h2",l({},{id:"unsafe_set"}),"unsafe_set"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let unsafe_set: (t, int, elt) => unit\n")),(0,i.kt)("h2",l({},{id:"buffer"}),"buffer"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let buffer: t => Js_typed_array.array_buffer\n")),(0,i.kt)("h2",l({},{id:"bytelength"}),"byteLength"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let byteLength: t => int\n")),(0,i.kt)("h2",l({},{id:"byteoffset"}),"byteOffset"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let byteOffset: t => int\n")),(0,i.kt)("h2",l({},{id:"setarray"}),"setArray"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let setArray: (array<elt>, t) => unit\n")),(0,i.kt)("h2",l({},{id:"setarrayoffset"}),"setArrayOffset"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let setArrayOffset: (array<elt>, int, t) => unit\n")),(0,i.kt)("h2",l({},{id:"length"}),"length"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let length: t => int\n")),(0,i.kt)("h2",l({},{id:"copywithin"}),"copyWithin"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copyWithin: (~to_: int, t) => t\n")),(0,i.kt)("h2",l({},{id:"copywithinfrom"}),"copyWithinFrom"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copyWithinFrom: (~to_: int, ~from: int, t) => t\n")),(0,i.kt)("h2",l({},{id:"copywithinfromrange"}),"copyWithinFromRange"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copyWithinFromRange: (~to_: int, ~start: int, ~end_: int, t) => t\n")),(0,i.kt)("h2",l({},{id:"fillinplace"}),"fillInPlace"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fillInPlace: (elt, t) => t\n")),(0,i.kt)("h2",l({},{id:"fillfrominplace"}),"fillFromInPlace"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fillFromInPlace: (elt, ~from: int, t) => t\n")),(0,i.kt)("h2",l({},{id:"fillrangeinplace"}),"fillRangeInPlace"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let fillRangeInPlace: (elt, ~start: int, ~end_: int, t) => t\n")),(0,i.kt)("h2",l({},{id:"reverseinplace"}),"reverseInPlace"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reverseInPlace: t => t\n")),(0,i.kt)("h2",l({},{id:"sortinplace"}),"sortInPlace"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let sortInPlace: t => t\n")),(0,i.kt)("h2",l({},{id:"sortinplacewith"}),"sortInPlaceWith"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let sortInPlaceWith: ((. elt, elt) => int, t) => t\n")),(0,i.kt)("h2",l({},{id:"includes"}),"includes"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let includes: (elt, t) => bool\n")),(0,i.kt)("h2",l({},{id:"indexof"}),"indexOf"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let indexOf: (elt, t) => int\n")),(0,i.kt)("h2",l({},{id:"indexoffrom"}),"indexOfFrom"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let indexOfFrom: (elt, ~from: int, t) => int\n")),(0,i.kt)("h2",l({},{id:"join"}),"join"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let join: t => string\n")),(0,i.kt)("h2",l({},{id:"joinwith"}),"joinWith"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let joinWith: (string, t) => string\n")),(0,i.kt)("h2",l({},{id:"lastindexof"}),"lastIndexOf"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let lastIndexOf: (elt, t) => int\n")),(0,i.kt)("h2",l({},{id:"lastindexoffrom"}),"lastIndexOfFrom"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let lastIndexOfFrom: (elt, ~from: int, t) => int\n")),(0,i.kt)("h2",l({},{id:"slice"}),"slice"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let slice: (~start: int, ~end_: int, t) => t\n")),(0,i.kt)("h2",l({},{id:"copy"}),"copy"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let copy: t => t\n")),(0,i.kt)("h2",l({},{id:"slicefrom"}),"sliceFrom"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let sliceFrom: (int, t) => t\n")),(0,i.kt)("h2",l({},{id:"subarray"}),"subarray"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let subarray: (~start: int, ~end_: int, t) => t\n")),(0,i.kt)("h2",l({},{id:"subarrayfrom"}),"subarrayFrom"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let subarrayFrom: (int, t) => t\n")),(0,i.kt)("h2",l({},{id:"tostring"}),"toString"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toString: t => string\n")),(0,i.kt)("h2",l({},{id:"tolocalestring"}),"toLocaleString"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let toLocaleString: t => string\n")),(0,i.kt)("h2",l({},{id:"every"}),"every"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let every: ((. elt) => bool, t) => bool\n")),(0,i.kt)("h2",l({},{id:"everyi"}),"everyi"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let everyi: ((. elt, int) => bool, t) => bool\n")),(0,i.kt)("h2",l({},{id:"filter"}),"filter"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let filter: ((. elt) => bool, t) => t\n")),(0,i.kt)("h2",l({},{id:"filteri"}),"filteri"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let filteri: ((. elt, int) => bool, t) => t\n")),(0,i.kt)("h2",l({},{id:"find"}),"find"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let find: ((. elt) => bool, t) => Js.undefined<elt>\n")),(0,i.kt)("h2",l({},{id:"findi"}),"findi"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findi: ((. elt, int) => bool, t) => Js.undefined<elt>\n")),(0,i.kt)("h2",l({},{id:"findindex"}),"findIndex"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findIndex: ((. elt) => bool, t) => int\n")),(0,i.kt)("h2",l({},{id:"findindexi"}),"findIndexi"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let findIndexi: ((. elt, int) => bool, t) => int\n")),(0,i.kt)("h2",l({},{id:"foreach"}),"forEach"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEach: ((. elt) => unit, t) => unit\n")),(0,i.kt)("h2",l({},{id:"foreachi"}),"forEachi"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let forEachi: ((. elt, int) => unit, t) => unit\n")),(0,i.kt)("h2",l({},{id:"map"}),"map"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let map: ((. elt) => 'b, t) => typed_array<'b>\n")),(0,i.kt)("h2",l({},{id:"mapi"}),"mapi"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let mapi: ((. elt, int) => 'b, t) => typed_array<'b>\n")),(0,i.kt)("h2",l({},{id:"reduce"}),"reduce"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduce: ((. 'b, elt) => 'b, 'b, t) => 'b\n")),(0,i.kt)("h2",l({},{id:"reducei"}),"reducei"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reducei: ((. 'b, elt, int) => 'b, 'b, t) => 'b\n")),(0,i.kt)("h2",l({},{id:"reduceright"}),"reduceRight"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceRight: ((. 'b, elt) => 'b, 'b, t) => 'b\n")),(0,i.kt)("h2",l({},{id:"reducerighti"}),"reduceRighti"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let reduceRighti: ((. 'b, elt, int) => 'b, 'b, t) => 'b\n")),(0,i.kt)("h2",l({},{id:"some"}),"some"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let some: ((. elt) => bool, t) => bool\n")),(0,i.kt)("h2",l({},{id:"somei"}),"somei"),(0,i.kt)("pre",null,(0,i.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"sig",sig:!0}),"let somei: ((. elt, int) => bool, t) => bool\n")))}c.isMDXComponent=!0,c.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/api/js/typed-array_type-s.mdx"}},33582:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/api/js/typed-array_type-s",function(){return n(89894)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=33582,e(e.s=t);var t}));var t=e.O();_N_E=t}]);