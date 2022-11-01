(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21970],{17375:function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return o}})},29666:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var o=t(17375),a=t(96156),r=(t(67294),t(3905));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var s=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",l({},n))}},p=s("Intro"),d=s("Info"),u=s("Warn"),k=s("UrlBox"),c=s("Cite"),m=s("CodeTab"),h={};function g(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",l(l(l({},h),t),{},{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",l({},{id:"markdown-guide"}),"Markdown Guide"),(0,r.kt)(p,{mdxType:"Intro"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rescript-lang.org")," defines a set of markdown components to be able to provide a nice\nlooking document when rendered to a webpage. This document gives an overview over\nall available components and demonstrates some use-cases.")),(0,r.kt)("h2",l({},{id:"how-does-it-work"}),"How does it work?"),(0,r.kt)("p",null,"We use a toolset called ",(0,r.kt)("a",l({parentName:"p"},{href:"https://mdxjs.com"}),"mdxjs")," to parse and interpret\n",(0,r.kt)("inlineCode",{parentName:"p"},".mdx")," files within the ",(0,r.kt)("inlineCode",{parentName:"p"},"pages/")," directory.  The default set for our markdown\ncomponents is defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Markdown.default")," binding. Each layout in our\ncodebase injects the components via the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mdx.Provider")," component, kinda like\nthis:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-re"}),"let components = Markdown.default;\n\n<Mdx.Provider components>\n  {/*...*/}\n</Mdx>\n")),(0,r.kt)("p",null,"So the ",(0,r.kt)("inlineCode",{parentName:"p"},"Mdx.Provider")," makes sure that our markdown document looks pretty. Make\nsure to make use of them!"),(0,r.kt)("h2",l({},{id:"markdown-jsx-basics"}),"Markdown JSX Basics"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"JSX")," notation inside every ",(0,r.kt)("inlineCode",{parentName:"p"},".md")," / ",(0,r.kt)("inlineCode",{parentName:"p"},".mdx")," file. We also inject some\nuseful components in there to give your document more visual appeal. There's two\nways on how you can pass in JSX children within the markdown syntax:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As a markdown string"),(0,r.kt)("li",{parentName:"ul"},"As a plain string")),(0,r.kt)("p",null,"Whenever you ",(0,r.kt)("strong",{parentName:"p"},"insert a newline")," after the beginning tag and before the closing tag,\nthe content will be interpreted as ",(0,r.kt)("strong",{parentName:"p"},"nested markdown"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),'<div>\n\nThis **thing** will be parsed as markdown, "thing" will therefore be bold\n\n</div>\n')),(0,r.kt)("p",null,"If you leave them out, the content will be a ",(0,r.kt)("strong",{parentName:"p"},"plain string")," without further formatting:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"<div>\n**this will not be bold**\n</div>\n")),(0,r.kt)("p",null,"Keep this in mind when editing content."),(0,r.kt)("h2",l({},{id:"text-components"}),"Text Components"),(0,r.kt)("h3",l({},{id:"info--blockquote"}),"Info / Blockquote"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Info/>")," component is useful for putting notes into a highlighted\nsection. You can use it via JSX syntax..."),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"<Info> This is a info box </Info>\n")),(0,r.kt)("p",null,"...or via blockquote syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"> This is\n> a info box\n")),(0,r.kt)(d,{mdxType:"Info"}," This is a info box "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Info")," component is also really useful if you want its children to be\nparsed as markdown. You can even pass in html elements."),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"<Info>\n\n**Note:** Some text\n\n</Info>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," If you want to use markdown content within a component, make sure to\nadd a newline between the content and the opening / closing JSX tag!")),(0,r.kt)("h3",l({},{id:"warn"}),"Warn"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"<Warn/>")," component is a useful tool to point out version issues and\nsimilar information."),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"<Warn>\n\n**Warning:** This might look dangerous\n\n</Warn>\n")),(0,r.kt)(u,{mdxType:"Warn"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," This might look dangerous")),(0,r.kt)("h3",l({},{id:"urlbox"}),"UrlBox"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),'<UrlBox href="/docs/manual/latest/introduction" text="Language Manual">\n\nThis is how you define a UrlBox\n\n</Url>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Examples:")),(0,r.kt)(k,{href:"https://rescript-lang.org",text:"rescript-lang.org",mdxType:"UrlBox"},"Check out the officially deployed version of this website (via absolute URL)"),(0,r.kt)(k,{href:"/md-kitchensink",text:"This is a link",mdxType:"UrlBox"},(0,r.kt)("p",null,"We also support markdown inside this component.\nRelative links will be handled by NextJS Links."),(0,r.kt)("p",null,"Try ",(0,r.kt)("strong",{parentName:"p"},"multiple paragraphs")," for instance!")),(0,r.kt)("h3",l({},{id:"cite"}),"Cite"),(0,r.kt)(c,{author:"No Designer Ever",mdxType:"Cite"},(0,r.kt)("p",null,'"Always, always make the logo bigger, no matter what."')),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),'<Cite author="No Designer Ever">\n\n"Always, always make the logo bigger, no matter what."\n\n</Cite>\n')),(0,r.kt)("h3",l({},{id:"intro--chapter-hero"}),"Intro / Chapter Hero"),(0,r.kt)("p",null,"This component is useful to ease the user into the topic.  Use it for the first\nparagraph and give a quick overview on what the document is about. "),(0,r.kt)(p,{mdxType:"Intro"},(0,r.kt)("p",null,"Hinter eines Baumes Rinde wohnt die Made mit dem Kinde, sie ist Witwe, denn der\nGatte, den sie hatte, viel vom Blatte. Diente so auf dieser Weise einer Ameise\nals Speise.")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"<Intro>\n\nYour hero text\n\n</Intro>\n")),(0,r.kt)("h2",l({},{id:"codeblocks"}),"Codeblocks"),(0,r.kt)("p",null,"Codeblocks are represented via ","`","`","`"," codefences.\nFollowing languages are available: ",(0,r.kt)("inlineCode",{parentName:"p"},"res"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"re"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"js"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ml"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"text"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sh")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res"}),'let a = "This is a Reason codeblock"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"The default language is set to `text` and will not provide any syntax\nhighlighting\n")),(0,r.kt)("h3",l({},{id:"highlighting-lines"}),"Highlighting lines"),(0,r.kt)("p",null,"To highlight codelines in your code snippet, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"{range}")," meta parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),"```res {1,4-5}\n\nlet a = 1\nlet b = 2\n\nswitch a => {\n| 1 => a + b\n| 2 => a - b\n| _ => b\n}\n```\n")),(0,r.kt)("p",null,"which will render:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res",metastring:"{1,4-5}","{1,4-5}":!0}),"let a = 1\nlet b = 2\n\nswitch a => {\n| 1 => a + b\n| 2 => a - b\n| _ => b\n}\n")),(0,r.kt)("h2",l({},{id:"codetabs"}),"CodeTabs"),(0,r.kt)("p",null,"For cases where you want to show a single codeblock with multiple syntaxes, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CodeToggle>")," component.\nMake sure to leave a newline between the ",(0,r.kt)("inlineCode",{parentName:"p"},"<CodeToggle>")," JSX tags, otherwise codeblock children won't be recognized!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{}),'<CodeTab labels={["ReScript", "JS Output"]}>\n\n```res\nlet a = "Some ReScript code"\n```\n\n```js {3}\nvar a = "Some JavaScript code";\n\nvar highlighted = "yep"\n```\n\n</CodeTab>\n')),(0,r.kt)("p",null,"Renders to following output:"),(0,r.kt)(m,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-res"}),'let a = "Some ReScript code"\nswitch myValue {\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-js",metastring:"{3}","{3}":!0}),'var a = "Some JavaScript code";\n\nvar highlighted = "Also supports highlighting ranges";\n'))))}g.isMDXComponent=!0,g.frontmatter={__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/markdown-guide.mdx"}},1335:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/markdown-guide",function(){return t(29666)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=1335,e(e.s=n);var n}));var n=e.O();_N_E=n}]);