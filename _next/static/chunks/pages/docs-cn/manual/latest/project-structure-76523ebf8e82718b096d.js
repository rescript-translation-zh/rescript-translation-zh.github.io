(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[80374],{17375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},75525:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(96156),o=n(17375),a=(n(67294),n(3905));function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",s(s(s({},l),n),{},{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"project-structure"}),"Project Structure"),(0,a.kt)("p",null,"These are the existing, non-codified community practices that are currently propagated through informal agreement. We might remove some of them at one point, and enforce some others. Right now, they're just recommendations for ease of newcomers."),(0,a.kt)("h2",s({},{id:"file-casing"}),"File Casing"),(0,a.kt)("p",null,"Capitalized file names (aka first letter upper-cased)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Justification"),": Module names can only be capitalized. Newcomers often ask how a file maps to a module, and why ",(0,a.kt)("inlineCode",{parentName:"p"},"draw.res")," maps to the module ",(0,a.kt)("inlineCode",{parentName:"p"},"Draw"),", and sometimes try to refer to a module through uncapitalized identifiers. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Draw.res")," makes this mapping more straightforward. It also helps certain file names that'd be awkward in uncapitalized form: ",(0,a.kt)("inlineCode",{parentName:"p"},"uRI.res"),"."),(0,a.kt)("h2",s({},{id:"ignore-merlin-file"}),"Ignore ",(0,a.kt)("inlineCode",{parentName:"h2"},".merlin")," File"),(0,a.kt)("p",null,"This is generated by the build system and you should not have to manually edit it. Don't check it into the repo."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Justification"),": ",(0,a.kt)("inlineCode",{parentName:"p"},".merlin")," is for editor tooling. The file contains absolute paths, which are also not cross-platform (e.g. Windows paths are different)."),(0,a.kt)("h2",s({},{id:"folders"}),"Folders"),(0,a.kt)("p",null,"Try not to have too many nested folders. Keep your project flat, and have fewer files (reminder: you can use nested modules)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Justification"),": The file system is a ",(0,a.kt)("em",{parentName:"p"},"tree"),", but your code's dependencies are a ",(0,a.kt)("em",{parentName:"p"},"graph"),". Because of that, any file & folder organization is usually imperfect. While it's still valuable to group related files together in a folder, the time wasted debating & getting decision paralysis over these far outweight their benefits. We'll always recommend you to Get Work Done instead of debating about these issues."),(0,a.kt)("h2",s({},{id:"third-party-dependencies"}),"Third-party Dependencies"),(0,a.kt)("p",null,"Keep them to a minimum."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Justification"),": A compiled, statically typed language cannot model its dependencies easily by muddling along like in a dynamic language, especially when we're still piggy-backing on NPM/Yarn (to reduce learning overhead in the medium-term). Keeping dependencies simple & lean helps reduce possibility of conflicts (e.g. two diamond dependencies, or clashing interfaces)."),(0,a.kt)("h2",s({},{id:"documentation"}),"Documentation"),(0,a.kt)("p",null,"Have them. Spend more effort making them great (examples, pitfalls) and professional rather than ",(0,a.kt)("em",{parentName:"p"},"just")," fancy-looking. Do use examples, and avoid using names such as ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bar"),". There's always more concrete names (it's an example, no need to be abstract/generalized just yet. The API docs will do this plentily). For blog posts, don't repeat the docs themselves, describe the ",(0,a.kt)("em",{parentName:"p"},"transition"),' from old to new, and why (e.g. "it was a component, now it\'s a function, because ...").'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Justification"),": It's hard for newcomers to distinguish between a simple/decent library and one that's fancy-looking. For the sake of the community, don't try too hard to one-up each other's libraries. Do spread the words, but use your judgement too."),(0,a.kt)("h2",s({},{id:"ppx--other-meta-tools"}),"PPX & Other Meta-tools"),(0,a.kt)("p",null,"Keep them to a minimum. PPX, unless used in renown cases (printer, accessors and serializer/deserializer generation), can cause big learning churn for newcomers; on top of the syntax, semantics, types, build tool & FFI that they already have to learn, learning per-library custom transformations of the code is an extra step. More invasive macros makes the code itself less semantically meaningful too, since the essence would be hiding somewhere else."),(0,a.kt)("h2",s({},{id:"paradigm"}),"Paradigm"),(0,a.kt)("p",null,"Don't abuse overly fancy features. Do leave some breathing room for future APIs but don't over-architect things."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Justification"),": Simple code helps newcomers understand and potentially contribute to your code. Contributing is the best way for them to learn. The extra help you receive might also surpass the gain of using a slightly more clever language trick. But do try new language tricks in some of more casual projects! You might discover new ways of architecting code."),(0,a.kt)("h2",s({},{id:"publishing"}),"Publishing"),(0,a.kt)("p",null,"If it's a wrapper for a JS library, don't publish the JS artifacts. If it's a legit library, publish the artifacts in lib/js if you think JS consumers might use it. This is especially the case when you gradually convert a JS lib to ReScript while not breaking existing JS consumers."),(0,a.kt)("p",null,"Do put the keywords ",(0,a.kt)("inlineCode",{parentName:"p"},'"rescript"')," in your package.json ",(0,a.kt)("inlineCode",{parentName:"p"},"keywords")," field. This allows us to find the library much more easily for future purposes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Justification"),": Be nice to JS consumers of your library. They're your future ReScripters."))}u.isMDXComponent=!0,u.frontmatter={title:"Project Structure",description:"Notes on project structure and other rough ReScript guidelines",canonical:"/docs/manual/latest/project-structure",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/project-structure.mdx"}},97637:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/project-structure",function(){return n(75525)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return t=97637,e(e.s=t);var t}));var t=e.O();_N_E=t}]);