(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80699],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},25418:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(17375),r=n(96156),o=(n(67294),n(3905));function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p,s=(p="CodeTab",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",i({},e))}),u={};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",i(i(i({},u),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",i({},{id:"import-fromexport-to-js"}),"Import from/Export to JS"),(0,o.kt)("p",null,"You've seen how ReScript's idiomatic ",(0,o.kt)("a",i({parentName:"p"},{href:"import-export.md"}),"Import & Export")," works. This section describes how we work with importing stuff from JavaScript and exporting stuff for JavaScript consumption."),(0,o.kt)("h2",i({},{id:"import-from-javascript"}),"Import From JavaScript"),(0,o.kt)("h3",i({},{id:"import-a-javascript-modules-content"}),"Import a JavaScript Module's Content"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"bs.module")," ",(0,o.kt)("a",i({parentName:"p"},{href:"external.md"}),"external"),":"),(0,o.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),'// Import nodejs\' path.dirname\n[@bs.module "path"] external dirname: string => string = "dirname";\nlet root = dirname("/User/github"); // returns "User"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),'(* Import nodejs\' path.dirname *)\nexternal dirname: string -> string = "dirname" [@@bs.module "path"]\nlet root = dirname "/User/github" (* returns "User" *)\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var Path = require("path");\nvar root = Path.dirname("/User/github");\n'))),(0,o.kt)("p",null,"Here's what the ",(0,o.kt)("inlineCode",{parentName:"p"},"external")," does:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'[@bs.module "path"]'),": pass the name of the JS module as a string; in this case, ",(0,o.kt)("inlineCode",{parentName:"li"},'"path"'),". The string can be anything: ",(0,o.kt)("inlineCode",{parentName:"li"},'"./src/myJsFile"'),", ",(0,o.kt)("inlineCode",{parentName:"li"},'"@myNpmNamespace/myLib"'),", etc."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"external"),": the general keyword for declaring a value that exists on the JS side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dirname"),": the binding name you'll use on the ReScript side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"string => string"),": the type signature of ",(0,o.kt)("inlineCode",{parentName:"li"},"dirname"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'= "dirname"'),": the name of the variable inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," JS module. There's repetition in writing the first and second ",(0,o.kt)("inlineCode",{parentName:"li"},"dirname"),", because sometime the binding name you want to use on the ReScript side is different than the variable name the JS module exported.")),(0,o.kt)("h3",i({},{id:"import-a-javascript-module-itself-commonjs"}),"Import a JavaScript Module Itself (CommonJS)"),(0,o.kt)("p",null,"By omitting the string argument to ",(0,o.kt)("inlineCode",{parentName:"p"},"bs.module"),", you bind to the whole JS module:"),(0,o.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),'[@bs.module] external leftPad: string => int => string = "./leftPad";\nlet paddedResult = leftPad("hi", 5);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),'external leftPad: string -> int -> string = "./leftPad" [@@bs.module]\nlet paddedResult = leftPad "hi" 5\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var LeftPad = require("./leftPad");\nvar paddedResult = LeftPad("hi", 5);\n'))),(0,o.kt)("h3",i({},{id:"import-a-javascript-module-itself-es6-module-format"}),"Import a JavaScript Module Itself (ES6 Module Format)"),(0,o.kt)("p",null,"If your JS project is using ES6, you're likely using Babel to compile it to regular JavaScript. Babel's ES6 default export actually exports the default value under the name ",(0,o.kt)("inlineCode",{parentName:"p"},"default"),". You'd bind to it like this:"),(0,o.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),'[@bs.module "./student"] external studentName: string = "default";\nJs.log(studentName);\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-ml"}),'external studentName: string = "default" [@@bs.module "./student"]\nlet () = Js.log studentName\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var Student = require("./student");\nconsole.log(Student.default);\n'))),(0,o.kt)("h2",i({},{id:"export-to-javascript"}),"Export To JavaScript"),(0,o.kt)("p",null,"As mentioned in ReScript's idiomatic ",(0,o.kt)("a",i({parentName:"p"},{href:"import-export.md"}),"Import & Export"),", every let binding and module is exported by default to other ReScript modules. If you open up the compiled JS file, you'll see that these values can also directly be used by another ",(0,o.kt)("em",{parentName:"p"},"JavaScript")," file too."),(0,o.kt)("p",null,"We support 2 JS export formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CommonJS (usable from JS as ",(0,o.kt)("inlineCode",{parentName:"li"},"require('myFile')"),")."),(0,o.kt)("li",{parentName:"ul"},"ES6 modules (usable from JS as ",(0,o.kt)("inlineCode",{parentName:"li"},"import * from 'myFile'"),").")),(0,o.kt)("p",null,"The output format is ",(0,o.kt)("a",i({parentName:"p"},{href:"build-configuration.md#package-specs"}),"configurable in bsb"),"."),(0,o.kt)("h3",i({},{id:"export-an-es6-default-value"}),"Export an ES6 default value"),(0,o.kt)("p",null,"If your JS project is using ES6 modules, you're likely exporting & importing some default values:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'// student.js\nexport default name = "Al";\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// teacher.js\nimport studentName from 'student.js';\n")),(0,o.kt)("p",null,"Technically, since a ReScript file maps to a module, there's no such thing as \"default\" export, only named ones. However, we've made an exception to support default module when you do the following:"),(0,o.kt)(s,{labels:["Reason (Old Syntax)","ML (Older Syntax)","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),'/* FavoriteStudent.re */\nlet default = "Bob";\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-re"}),'(* FavoriteStudent.re *)\nlet default = "Bob"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),'var $$default = "Bob";\n\nexports.$$default = $$default;\nexports.default = $$default;\nexports.__esModule = true;\n'))),(0,o.kt)("p",null,"You can then require the default as normal JS side:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"// teacher2.js\nimport studentName from 'FavoriteStudent.js';\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": the above JS snippet ",(0,o.kt)("em",{parentName:"p"},"only")," works if you're using that ES6 import/export syntax in JS. If you're still using ",(0,o.kt)("inlineCode",{parentName:"p"},"require"),", you'd need to do:"),(0,o.kt)("pre",null,(0,o.kt)("code",i({parentName:"pre"},{className:"language-js"}),"let studentName = require('FavoriteStudent').default;\n")))}d.isMDXComponent=!0,d.frontmatter={title:"Import from / Export to JS",description:"Importing / exporting JS module content in ReScript",canonical:"/docs/manual/latest/import-from-export-to-js",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs/manual/v8.0.0/import-from-export-to-js.mdx"}},26626:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/manual/v8.0.0/import-from-export-to-js",function(){return n(25418)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=26626,e(e.s=t);var t}));var t=e.O();_N_E=t}]);