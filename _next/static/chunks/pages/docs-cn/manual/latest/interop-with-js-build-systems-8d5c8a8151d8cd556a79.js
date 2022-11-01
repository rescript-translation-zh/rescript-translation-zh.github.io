(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76590],{17375:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return i}})},86085:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var i=n(96156),r=n(17375),o=(n(67294),n(3905));function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",s(s(s({},l),n),{},{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",s({},{id:"interop-with-js-build-systems"}),"Interop with JS Build Systems"),(0,o.kt)("p",null,"If you come from JS, chances are that you already have a build system in your existing project. Here's an overview of the role ",(0,o.kt)("inlineCode",{parentName:"p"},"rescript")," would play in your build pipeline, if you want to introduce some ReScript code."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Please")," try not to wrap ",(0,o.kt)("inlineCode",{parentName:"p"},"rescript")," into your own incremental build framework. ReScript's compilation is very hard to get right, and you'll inevitably run into stale or badly performing builds (therefore erasing much of our value proposition) if you create your own meta layer on top.")),(0,o.kt)("h2",s({},{id:"popular-js-build-systems"}),"Popular JS Build Systems"),(0,o.kt)("p",null,"The JS ecosystem uses a few build systems: ",(0,o.kt)("a",s({parentName:"p"},{href:"http://browserify.org/"}),"browserify"),", ",(0,o.kt)("a",s({parentName:"p"},{href:"https://github.com/rollup/rollup"}),"rollup"),", ",(0,o.kt)("a",s({parentName:"p"},{href:"https://webpack.js.org/"}),"webpack"),", etc. The latter's probably the most popular of the three (as of 2019 =P). These build systems do both the compilation and the linking (aka, bundling many files into one or few files)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rescript")," only take care of the compilation step; it maps one ",(0,o.kt)("inlineCode",{parentName:"p"},".res"),"/",(0,o.kt)("inlineCode",{parentName:"p"},".resi")," file into one JS output file. As such, in theory, no build system integration is needed from our side. From e.g. the webpack watcher's perspective, the JS files ReScript generates are almost equivalent to your hand-written JS files. We also recommend ",(0,o.kt)("strong",{parentName:"p"},"that you initially check in those ReScript-generated JS files"),", as this workflow means:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can introduce ReScript silently into your codebase without disturbing existing infra."),(0,o.kt)("li",{parentName:"ul"},"You have a ",(0,o.kt)("strong",{parentName:"li"},"visual")," diff of the performance & correctness of your JS file when you update the ",(0,o.kt)("inlineCode",{parentName:"li"},".res")," files and the JS artifacts change."),(0,o.kt)("li",{parentName:"ul"},"You can let teammates hot-patch the JS files in emergency situations, without needing to first start learning ReScript."),(0,o.kt)("li",{parentName:"ul"},"You can remove ReScript completely from your codebase and things will still work (in case your company decides to stop using us for whatever reason).")),(0,o.kt)("p",null,"For what it's worth, you can also turn ",(0,o.kt)("inlineCode",{parentName:"p"},"rescript")," into an automated step in your build pipeline, e.g. into a Webpack loader; but such approach is error-prone and therefore discouraged."),(0,o.kt)("h3",s({},{id:"tips--tricks"}),"Tips & Tricks"),(0,o.kt)("p",null,"You can make ReScript JS files look even more idiomatic through the in-source + bs suffix config in ",(0,o.kt)("inlineCode",{parentName:"p"},"bsconfig.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "package-specs": {\n    "module": "commonjs", // or whatever module system your project uses\n    "in-source": true\n  },\n  "suffix": ".bs.js"\n}\n')),(0,o.kt)("p",null,"This will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generate the JS files alongside your ReScript source files."),(0,o.kt)("li",{parentName:"ul"},"Use the file extension ",(0,o.kt)("inlineCode",{parentName:"li"},".bs.js"),", so that you can require these files on the JS side through ",(0,o.kt)("inlineCode",{parentName:"li"},"require('./MyFile.bs')"),", without needing a loader.")),(0,o.kt)("h2",s({},{id:"use-loaders-on-rescript-side"}),"Use Loaders on ReScript Side"),(0,o.kt)("p",null,'"What if my build system uses a CSS/png/whatever loader and I\'d like to use it in ReScript?"'),(0,o.kt)("p",null,"Loaders are indeed troublesome; in the meantime, please use e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"%raw(\"require('./myStyles.css')\")")," at the top of your file. This just uses ",(0,o.kt)("a",s({parentName:"p"},{href:"embed-raw-javascript.md"}),(0,o.kt)("inlineCode",{parentName:"a"},"raw"))," to compile the snippet into an actual JS require."),(0,o.kt)("h2",s({},{id:"getting-projects-dependencies"}),"Getting Project's Dependencies"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"rescript")," generates one ",(0,o.kt)("inlineCode",{parentName:"p"},"MyFile.d")," file per ",(0,o.kt)("inlineCode",{parentName:"p"},"MyFile")," source file; you'll find them in ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/bs"),". These are human readable, machine-friendly list of the dependencies of said ",(0,o.kt)("inlineCode",{parentName:"p"},"MyFile"),". You can read into them for your purpose (though mind the IO overhead). Use these files instead of creating your own dependency graph; we did the hard work of tracking the dependencies as best as possible (including inner modules, ",(0,o.kt)("inlineCode",{parentName:"p"},"open"),"s, module names overlap, etc)."),(0,o.kt)("h2",s({},{id:"run-script-per-file-built"}),"Run Script Per File Built"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",s({parentName:"p"},{href:"build-configuration#js-post-build"}),"js-post-build"),". Though please use it sparingly; if you hook up a node.js script after each file built, you'll incur the node startup time per file!"))}p.isMDXComponent=!0,p.frontmatter={title:"Interop with JS Build Systems",description:"Documentation on how to interact with existing JS build systems",canonical:"/docs/manual/latest/interop-with-js-build-systems",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/interop-with-js-build-systems.mdx"}},50293:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/interop-with-js-build-systems",function(){return n(86085)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=50293,e(e.s=t);var t}));var t=e.O();_N_E=t}]);