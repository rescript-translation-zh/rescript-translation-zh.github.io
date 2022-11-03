(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[28528],{17375:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return a}})},95117:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var a=n(96156),r=n(17375),p=(n(67294),n(3905));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={};function l(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",o(o(o({},s),n),{},{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",o({},{id:"installation"}),"Installation"),(0,p.kt)("h2",o({},{id:"prerequisites"}),"Prerequisites"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",o({parentName:"p"},{href:"https://nodejs.org/"}),"Node.js")," version >= 10")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",o({parentName:"p"},{href:"https://docs.npmjs.com/cli/"}),"npm")," (which comes with Node.js) or ",(0,p.kt)("a",o({parentName:"p"},{href:"https://yarnpkg.com/"}),"Yarn"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",o({parentName:"p"},{href:"https://nodejs.org/"}),"Node.js")," version >= 10")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("a",o({parentName:"p"},{href:"https://docs.npmjs.com/cli/"}),"npm")," \uff08Node.js \u9644\u5e26\uff09\u6216 ",(0,p.kt)("a",o({parentName:"p"},{href:"https://yarnpkg.com/"}),"Yarn")))),(0,p.kt)("h2",o({},{id:"new-project"}),"New Project"),(0,p.kt)("pre",null,(0,p.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"git clone https://github.com/rescript-lang/rescript-project-template\ncd rescript-project-template\nnpm install\nnpm run build\nnode src/Demo.bs.js\n")),(0,p.kt)("p",null,"That compiles your ReScript into JavaScript, then uses Node.js to run said JavaScript. ",(0,p.kt)("strong",{parentName:"p"},"We recommend you use our unique workflow of keeping a tab open for the generated ",(0,p.kt)("inlineCode",{parentName:"strong"},".bs.js")," file"),", so that you can learn how ReScript transforms into JavaScript. Not many languages output clean JavaScript code you can inspect and learn from!"),(0,p.kt)("p",null,"\u4e0a\u9762\u7684\u547d\u4ee4\u5c06 ReScript \u7f16\u8bd1\u5230 JavaScript \u5e76\u4f7f\u7528 Node.js \u8fd0\u884c\u5f97\u5230\u7684 JavaScript\u3002",(0,p.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5efa\u8bae\u4f60\u5728\u7f16\u8f91\u5668\u4e2d\u4e3a\u751f\u6210\u7684",(0,p.kt)("inlineCode",{parentName:"strong"},".bs.bs"),"\u6587\u4ef6\u7559\u4e00\u4e2a\u6807\u7b7e\u9875\uff08\u65b9\u4fbf\u5bf9\u6bd4\uff09"),"\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u4e86\u89e3 ReScript \u662f\u600e\u4e48\u53d8\u6362\u5230 JavaScript \u7684\u3002\u80fd\u505a\u5230\u751f\u6210\u53ef\u4f9b\u68c0\u67e5\u548c\u5b66\u4e60\u7684\u7b80\u6d01 Javascript \u4ee3\u7801\u7684\u8bed\u8a00\u53ef\u4e0d\u591a\uff01"),(0,p.kt)("p",null,"During development, instead of running ",(0,p.kt)("inlineCode",{parentName:"p"},"npm run build")," each time to compile, use ",(0,p.kt)("inlineCode",{parentName:"p"},"npm run start")," to start a watcher that recompiles automatically after file changes."),(0,p.kt)("p",null,"\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5efa\u8bae\u4e0d\u8981\u6bcf\u6b21\u90fd\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"npm run build"),"\u6765\u7f16\u8bd1\uff0c\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"npm run start")," \u53ef\u4ee5\u542f\u52a8\u4e00\u4e2a\u76d1\u89c6\u5668\u6765\u81ea\u52a8\u7f16\u8bd1\u6709\u4fee\u6539\u7684\u6587\u4ef6\u3002"),(0,p.kt)("h2",o({},{id:"integrate-into-an-existing-js-project"}),"Integrate Into an Existing JS Project"),(0,p.kt)("p",null,"If you already have a JavaScript project into which you'd like to add ReScript:"),(0,p.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a JavaScript \u9879\u76ee\uff0c\u5e76\u4e14\u60f3\u5728\u5176\u4e2d\u52a0\u5165 ReScript\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Install ReScript locally as a ",(0,p.kt)("a",o({parentName:"p"},{href:"https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file"}),"devDependency"),":"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"npm install rescript --save-dev\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Create a ReScript build configuration at the root:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "name": "your-project-name",\n  "sources": [\n    {\n      "dir": "src", // update this to wherever you\'re putting ReScript files\n      "subdirs": true\n    }\n  ],\n  "package-specs": [\n    {\n      "module": "es6",\n      "in-source": true\n    }\n  ],\n  "suffix": ".bs.js",\n  "bs-dependencies": []\n}\n')),(0,p.kt)("p",{parentName:"li"},"See ",(0,p.kt)("a",o({parentName:"p"},{href:"build-configuration"}),"\u6784\u5efa\u914d\u7f6e")," for more details on ",(0,p.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Add convenience ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," scripts to ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",o({parentName:"pre"},{className:"language-json"}),'"scripts": {\n  "res:build": "rescript",\n  "res:start": "rescript build -w"\n}\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5728\u5c40\u90e8\u901a\u8fc7 ",(0,p.kt)("a",o({parentName:"p"},{href:"https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file"}),"devDependency")," \u5b89\u88c5ReScript:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",o({parentName:"pre"},{className:"language-sh"}),"npm install rescript --save-dev\n"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5728\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ReScript \u6784\u5efa\u914d\u7f6e"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "name": "your-project-name",\n  "sources": [\n    {\n      "dir": "src", // update this to wherever you\'re putting ReScript files\n      "subdirs": true\n    }\n  ],\n  "package-specs": [\n    {\n      "module": "es6",\n      "in-source": true\n    }\n  ],\n  "suffix": ".bs.js",\n  "bs-dependencies": []\n}\n')),(0,p.kt)("p",{parentName:"li"},"\u5173\u4e8e ",(0,p.kt)("inlineCode",{parentName:"p"},"bsconfig.json")," \u7684\u66f4\u591a\u7ec6\u8282\u8bf7\u67e5\u770b",(0,p.kt)("a",o({parentName:"p"},{href:"build-configuration"}),"\u6784\u5efa\u914d\u7f6e"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u52a0\u4e0a\u65b9\u4fbf\u7684 ",(0,p.kt)("inlineCode",{parentName:"p"},"npm")," \u811a\u672c:"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",o({parentName:"pre"},{className:"language-json"}),'"scripts": {\n  "res:build": "rescript",\n  "res:start": "rescript build -w"\n}\n')))),(0,p.kt)("p",null,"Since ReScript compiles to clean readable JS files, the rest of your existing toolchain (e.g. Babel and Webpack) should just work!"),(0,p.kt)("p",null,"\u56e0\u4e3a ReScript \u6587\u4ef6\u53ef\u4ee5\u7f16\u8bd1\u5230\u7b80\u6d01\u53ef\u8bfb\u7684 JS \u6587\u4ef6\uff0c\u5176\u4ed6\u7684\u5df2\u6709\u5de5\u5177\u94fe\uff08\u6bd4\u5982 Babel \u548c Webpack\uff09\u5e94\u8be5\u662f\u76f4\u63a5\u53ef\u7528\u7684\u3002"),(0,p.kt)("p",null,"Helpful guides:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",o({parentName:"li"},{href:"converting-from-js"}),"Converting from JS"),"."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",o({parentName:"li"},{href:"shared-data-types"}),"Shared Data Types"),"."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",o({parentName:"li"},{href:"import-from-export-to-js"}),"Import from/Export to JS"),".")),(0,p.kt)("p",null,"\u5176\u4ed6\u6307\u5357:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",o({parentName:"li"},{href:"converting-from-js"}),"\u4eceJS\u8fc1\u79fb\u5230ReScript"),"."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",o({parentName:"li"},{href:"shared-data-types"}),"\u5171\u4eab\u6570\u636e\u7c7b\u578b"),"."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",o({parentName:"li"},{href:"import-from-export-to-js"}),"Import from/Export to JS"),".")),(0,p.kt)("h3",o({},{id:"integrate-with-a-reactjs-project"}),"Integrate with a ReactJS Project"),(0,p.kt)("p",null,"To start a ",(0,p.kt)("a",o({parentName:"p"},{href:"/docs/react/latest/introduction"}),"rescript-react")," app, or to integrate ReScript into an existing ReactJS app, follow the instructions ",(0,p.kt)("a",o({parentName:"p"},{href:"/docs/react/latest/installation"}),"here"),"."),(0,p.kt)("p",null,"\u5982\u679c\u9700\u8981\u521b\u5efa\u4e00\u4e2a ",(0,p.kt)("a",o({parentName:"p"},{href:"/docs/react/latest/introduction"}),"rescript-react")," app \u6216\u5728\u73b0\u6709\u7684 ReactJS app \u4e2d\u96c6\u6210 ReScript\uff0c\u8bf7\u9605\u8bfb ",(0,p.kt)("a",o({parentName:"p"},{href:"/docs/react/latest/installation"}),"\u8fd9\u91cc")," \u7684\u6307\u5357"))}l.isMDXComponent=!0,l.frontmatter={title:"\u5b89\u88c5",description:"ReScript installation and setup instructions",canonical:"/docs/manual/latest/installation",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/installation.mdx"}},72221:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/installation",function(){return n(95117)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=72221,e(e.s=t);var t}));var t=e.O();_N_E=t}]);