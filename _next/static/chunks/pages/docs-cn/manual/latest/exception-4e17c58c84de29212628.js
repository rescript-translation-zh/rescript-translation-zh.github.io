(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[66030],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return a}})},27782:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var a=t(17375),r=t(96156),o=(t(67294),t(3905));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p,l=(p="CodeTab",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",s({},e))}),c={};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",s(s(s({},c),t),{},{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",s({},{id:"exception--\u5f02\u5e38"}),"Exception | \u5f02\u5e38"),(0,o.kt)("p",null,"Exceptions are just a special kind of variant, thrown in ",(0,o.kt)("strong",{parentName:"p"},"exceptional")," cases (don't abuse them!)."),(0,o.kt)("p",null,"\u5f02\u5e38\u53ea\u662f\u4e00\u79cd\u7279\u6b8a\u7684\u53d8\u4f53\uff0c\u5728",(0,o.kt)("strong",{parentName:"p"},"\u5f02\u5e38"),"\u60c5\u51b5\u4e0b\u629b\u51fa (\u4e0d\u8981\u6ee5\u7528\u5b83\u4eec!)."),(0,o.kt)("h2",s({},{id:"usage--\u7528\u6cd5"}),"Usage | \u7528\u6cd5"),(0,o.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res"}),"let getItem = (items) =>\n  if callSomeFunctionThatThrows() {\n    // return the found item here\n    1\n  } else {\n    raise(Not_found)\n  }\n\nlet result =\n  try {\n    getItem([1, 2, 3])\n  } catch {\n  | Not_found => 0 // Default value if getItem throws\n  }\n")),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'function getItem(items) {\n  if (callSomeFunctionThatThrows()) {\n    return 1;\n  }\n  throw {\n    RE_EXN_ID: "Not_found",\n    Error: new Error()\n  };\n}\n\nvar result;\n\ntry {\n  result = getItem([1, 2, 3]);\n} catch (raw_exn) {\n  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);\n  if (exn.RE_EXN_ID === "Not_found") {\n    result = 0;\n  } else {\n    throw exn;\n  }\n}\n'))),(0,o.kt)("p",null,"Note that the above is just for demonstration purposes; in reality, you'd return an ",(0,o.kt)("inlineCode",{parentName:"p"},"option<int>")," directly from ",(0,o.kt)("inlineCode",{parentName:"p"},"getItem")," and avoid the ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," altogether."),(0,o.kt)("p",null,"\u6ce8\u610f\uff0c\u4ee5\u4e0a\u53ea\u662f\u4e3a\u4e86\u6f14\u793a\uff1b\u5728\u73b0\u5b9e\u4e2d\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"getItem"),"\u8fd4\u56de\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"option<int>"),", \u800c\u5b8c\u5168\u907f\u514d",(0,o.kt)("inlineCode",{parentName:"p"},"try"),"."),(0,o.kt)("p",null,"You can directly match on exceptions ",(0,o.kt)("em",{parentName:"p"},"while")," getting another return value from a function:"),(0,o.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res"}),'switch List.find(i => i === theItem, myItems) {\n| item => Js.log(item)\n| exception Not_found => Js.log("No such item found!")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var exit = 0;\n\nvar item;\n\ntry {\n  item = List.find(function(i) {\n    return i === theItem;\n  }, myItems);\n  exit = 1;\n}\ncatch (raw_exn){\n  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);\n  if (exn.RE_EXN_ID === "Not_found") {\n    console.log("No such item found!");\n  } else {\n    throw exn;\n  }\n}\n\nif (exit === 1) {\n  console.log(item);\n}\n'))),(0,o.kt)("p",null,"You can also make your own exceptions like you'd make a variant (exceptions need to be capitalized too)."),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u50cf\u5236\u9020\u53d8\u4f53\u4e00\u6837\u5236\u9020\u4f60\u81ea\u5df1\u7684\u5f02\u5e38(\u5f02\u5e38\u4e5f\u9700\u8981\u9996\u5b57\u6bcd\u5927\u5199)"),(0,o.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'exception InputClosed(string)\n// later on\nraise(InputClosed("The stream has closed!"))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Caml_exceptions = require("./stdlib/caml_exceptions.js");\n\nvar InputClosed = Caml_exceptions.create("MyFile.InputClosed");\n\nthrow {\n  RE_EXN_ID: InputClosed,\n  _1: "The stream has closed!",\n  Error: new Error()\n};\n'))),(0,o.kt)("h2",s({},{id:"catching-js-exceptions--\u6355\u83b7js\u5f02\u5e38"}),"Catching JS Exceptions | \u6355\u83b7JS\u5f02\u5e38"),(0,o.kt)("p",null,"To distinguish between JavaScript exceptions and ReScript exceptions, ReScript namespaces JS exceptions under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Exn.Error(payload)")," variant. To catch an exception thrown from the JS side:"),(0,o.kt)("p",null,"\u4e3a\u4e86\u533a\u5206 JavaScript \u5f02\u5e38\u548c ReScript \u5f02\u5e38\uff0cReScript \u5c06 JS \u5f02\u5e38\u547d\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Exn.Error(payload)")," \u53d8\u4f53\u3002\u4e3a\u4e86\u6355\u6349\u4e00\u4e2a\u4eceJS\u7aef\u629b\u51fa\u7684\u5f02\u5e38\uff1a"),(0,o.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res"}),'try {\n  someJSFunctionThatThrows()\n} catch {\n| Js.Exn.Error(obj) =>\n  switch Js.Exn.message(obj) {\n  | Some(m) => Js.log("Caught a JS exception! Message: " ++ m)\n  | None => ()\n  }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Js_exn = require("./stdlib/js_exn.js");\nvar Caml_js_exceptions = require("./stdlib/caml_js_exceptions.js");\n\ntry {\n  someJSFunctionThatThrows();\n} catch (raw_obj) {\n  var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);\n  if (obj.RE_EXN_ID === Js_exn.$$Error) {\n    var m = obj._1.message;\n    if (m !== undefined) {\n      console.log("Caught a JS exception! Message: " + m);\n    }\n  } else {\n    throw obj;\n  }\n}\n'))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," here is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Exn.t"),", intentionally opaque to disallow illegal operations. To operate on ",(0,o.kt)("inlineCode",{parentName:"p"},"obj"),", do like the code above by using the standard library's ",(0,o.kt)("a",s({parentName:"p"},{href:"api/js/exn"}),(0,o.kt)("inlineCode",{parentName:"a"},"Js.Exn"))," module's helpers."),(0,o.kt)("p",null,"\u8fd9\u91cc\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"obj"),"\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Exn.t"),"\u7c7b\u578b\uff0c\u6545\u610f\u8ba9\u5176\u4e0d\u900f\u660e\uff0c\u4e0d\u5141\u8bb8\u975e\u6cd5\u64cd\u4f5c\u3002\u8981\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"obj"),"\u8fdb\u884c\u64cd\u4f5c\uff0c\u53ef\u4ee5\u50cf\u4e0a\u9762\u7684\u4ee3\u7801\u4e00\u6837\uff0c\u4f7f\u7528\u6807\u51c6\u5e93\u7684",(0,o.kt)("a",s({parentName:"p"},{href:"api/js/exn"}),(0,o.kt)("inlineCode",{parentName:"a"},"Js.Exn")),"\u6a21\u5757\u7684\u5e2e\u52a9\u51fd\u6570\u3002"),(0,o.kt)("h2",s({},{id:"raise-a-js-exception--\u629b\u51fa\u4e00\u4e2ajs\u5f02\u5e38"}),"Raise a JS Exception | \u629b\u51fa\u4e00\u4e2aJS\u5f02\u5e38"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"raise(MyException)")," raises a ReScript exception. To raise a JavaScript exception (whatever your purpose is), use ",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Exn.raiseError"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"raise(MyException)"),"\u5f15\u53d1\u4e00\u4e2aReScript\u5f02\u5e38\u3002\u5982\u679c\u8981\u5f15\u53d1\u4e00\u4e2aJavaScript\u5f02\u5e38(\u4e0d\u7ba1\u4f60\u7684\u76ee\u7684\u662f\u4ec0\u4e48), \u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Js.Exn.raiseError"),"."),(0,o.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let myTest = () => {\n  Js.Exn.raiseError("Hello!")\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Js_exn = require("./stdlib/js_exn.js");\n\nfunction myTest() {\n  return Js_exn.raiseError("Hello!");\n}\n'))),(0,o.kt)("p",null,"Then you can catch it from the JS side:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'// after importing `myTest`...\ntry {\n  myTest()\n} catch (e) {\n  console.log(e.message) // "Hello!"\n}\n')),(0,o.kt)("h2",s({},{id:"catch-rescript-exceptions-from-js--\u4ecejs\u6355\u83b7rescript\u629b\u51fa\u7684\u5f02\u5e38"}),"Catch ReScript Exceptions from JS | \u4eceJS\u6355\u83b7ReScript\u629b\u51fa\u7684\u5f02\u5e38"),(0,o.kt)("p",null,"The previous section is less useful than you think; to let your JS code work with your exception-throwing ReScript code, the latter doesn't actually need to throw a JS exception. ReScript exceptions can be used by JS code!"),(0,o.kt)("p",null,"\u524d\u9762\u7684\u90e8\u5206\u6ca1\u6709\u4f60\u60f3\u8c61\u7684\u90a3\u4e48\u6709\u7528\uff1b\u4e3a\u4e86\u8ba9\u4f60\u7684JS\u4ee3\u7801\u4e0e\u629b\u51fa\u5f02\u5e38\u7684ReScript\u4ee3\u7801\u4e00\u8d77\u5de5\u4f5c\uff0c\u540e\u8005\u5b9e\u9645\u4e0a\u4e0d\u9700\u8981\u629b\u51fa\u4e00\u4e2aJS\u5f02\u5e38\u3002ReScript\u7684\u5f02\u5e38\u53ef\u4ee5\u88abJS\u4ee3\u7801\u6240\u4f7f\u7528!"),(0,o.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'exception BadArgument({myMessage: string})\n\nlet myTest = () => {\n  raise(BadArgument({myMessage: "Oops!"}))\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Caml_exceptions = require("./stdlib/caml_exceptions.js");\n\nvar BadArgument = Caml_exceptions.create("Playground.BadArgument");\n\nfunction myTest() {\n  throw {\n    RE_EXN_ID: BadArgument,\n    myMessage: "Oops!",\n    Error: new Error()\n  };\n}\n'))),(0,o.kt)("p",null,"Then, in your JS:"),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'// after importing `myTest`...\ntry {\n  myTest()\n} catch (e) {\n  console.log(e.myMessage) // "Oops!"\n  console.log(e.Error.stack) // the stack trace\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: ",(0,o.kt)("inlineCode",{parentName:"p"},"RE_EXN_ID")," is an internal field for bookkeeping purposes. Don't use it on the JS side. Use the other fields.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"RE_EXN_ID"),"\u662f\u4e00\u4e2a\u7528\u4e8e\u8bb0\u8d26\u7684\u5185\u90e8\u5b57\u6bb5\u3002\u4e0d\u8981\u5728JS\u65b9\u9762\u4f7f\u7528\u5b83\u3002\u4f7f\u7528\u5176\u4ed6\u7684\u5b57\u6bb5\u3002")),(0,o.kt)("p",null,"The above ",(0,o.kt)("inlineCode",{parentName:"p"},"BadArgument")," exception takes an inline record type. We special-case compile the exception as ",(0,o.kt)("inlineCode",{parentName:"p"},"{RE_EXN_ID, myMessage, Error}")," for good ergonomics. If the exception instead took ordinary positional arguments, l like the standard library's ",(0,o.kt)("inlineCode",{parentName:"p"},'Invalid_argument("Oops!")'),", which takes a single argument, the argument is compiled to JS as the field ",(0,o.kt)("inlineCode",{parentName:"p"},"_1")," instead. A second positional argument would compile to ",(0,o.kt)("inlineCode",{parentName:"p"},"_2"),", etc."),(0,o.kt)("p",null,"\u4e0a\u9762\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"BadArgument"),"\u5f02\u5e38\u9700\u8981\u4e00\u4e2a\u5185\u8054\u8bb0\u5f55\u7c7b\u578b\u3002\u4e3a\u4e86\u7b26\u5408\u4eba\u4f53\u5de5\u7a0b\u5b66\uff0c\u6211\u4eec\u5c06\u8be5\u5f02\u5e38\u7279\u4f8b\u7f16\u8bd1\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"{RE_EXN_ID, myMessage, Error}"),". \u5982\u679c\u8fd9\u4e2a\u5f02\u5e38\u4f7f\u7528\u666e\u901a\u7684\u4f4d\u7f6e\u53c2\u6570\uff0c\u6bd4\u5982\u6807\u51c6\u5e93\u7684",(0,o.kt)("inlineCode",{parentName:"p"},'Invalid_argument("Oops!")'),", \u5b83\u53ea\u4f7f\u7528\u4e00\u4e2a\u53c2\u6570\uff0c\u90a3\u4e48\u8fd9\u4e2a\u53c2\u6570\u5c06\u88ab\u7f16\u8bd1\u4e3aJS\u7684\u5b57\u6bb5",(0,o.kt)("inlineCode",{parentName:"p"},"_1"),". \u7b2c\u4e8c\u4e2a\u4f4d\u7f6e\u53c2\u6570\u5c06\u7f16\u8bd1\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"_2"),", \u7b49\u7b49\u3002"),(0,o.kt)("h2",s({},{id:"tips--tricks--\u6280\u5de7--\u8bc0\u7a8d"}),"Tips & Tricks | \u6280\u5de7 & \u8bc0\u7a8d"),(0,o.kt)("p",null,"When you have ordinary variants, you often don't ",(0,o.kt)("strong",{parentName:"p"},"need")," exceptions. For example, instead of throwing when ",(0,o.kt)("inlineCode",{parentName:"p"},"item")," can't be found in a collection, try to return an ",(0,o.kt)("inlineCode",{parentName:"p"},"option<item>")," (",(0,o.kt)("inlineCode",{parentName:"p"},"None")," in this case) instead."),(0,o.kt)("p",null,"\u5f53\u4f60\u6709\u666e\u901a\u7684\u53d8\u4f53\u65f6\uff0c\u4f60\u5f80\u5f80",(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u9700\u8981"),"\u5f02\u5e38\u3002\u4f8b\u5982\uff0c\u5f53",(0,o.kt)("inlineCode",{parentName:"p"},"item"),"\u5728\u4e00\u4e2a\u96c6\u5408\u4e2d\u627e\u4e0d\u5230\u65f6\uff0c\u4e0d\u8981\u629b\u51fa\uff0c\u800c\u662f\u5c1d\u8bd5\u8fd4\u56de\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"option<item>"),"(\u672c\u4f8b\u4e2d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"None"),"). "),(0,o.kt)("h3",s({},{id:"catch-both-rescript-and-js-exceptions-in-the-same-catch-clause--\u5728\u4e00\u4e2a-catch-\u5b50\u53e5\u4e2d\u540c\u65f6\u6355\u83b7rescript\u548cjs\u7684\u5f02\u5e38"}),"Catch Both ReScript and JS Exceptions in the Same ",(0,o.kt)("inlineCode",{parentName:"h3"},"catch")," Clause | \u5728\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"h3"},"catch")," \u5b50\u53e5\u4e2d\u540c\u65f6\u6355\u83b7ReScript\u548cJS\u7684\u5f02\u5e38"),(0,o.kt)(l,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-res"}),"try {\n  someOtherJSFunctionThatThrows()\n} catch {\n| Not_found => ... // catch a ReScript exception\n| Invalid_argument(_) => ... // catch a second ReScript exception\n| Js.Exn.Error(obj) => ... // catch the JS exception\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",s({parentName:"pre"},{className:"language-js"}),'var Js_exn = require("./stdlib/js_exn.js");\nvar Caml_js_exceptions = require("./stdlib/caml_js_exceptions.js");\n\ntry {\n  someOtherJSFunctionThatThrows();\n} catch (raw_obj) {\n  var obj = Caml_js_exceptions.internalToOCamlException(raw_obj);\n  if (\n    obj.RE_EXN_ID !== "Not_found" &&\n    obj.RE_EXN_ID !== "Invalid_argument" &&\n    obj.RE_EXN_ID !== Js_exn.$$Error\n  ) {\n    throw obj;\n  }\n}\n'))),(0,o.kt)("p",null,"This technically works, but hopefully you don't ever have to work with such code..."),(0,o.kt)("p",null,"\u8fd9\u5728\u6280\u672f\u4e0a\u662f\u53ef\u884c\u7684\uff0c\u4f46\u5e0c\u671b\u4f60\u4e0d\u7528\u5904\u7406\u8fd9\u6837\u7684\u4ee3\u7801\u3002....."))}u.isMDXComponent=!0,u.frontmatter={title:"\u5f02\u5e38",description:"Exceptions and exception handling in ReScript",canonical:"/docs/manual/latest/exception",__ghEditHref:"https://github.com/reason-association/rescript-lang.org/blob/master/pages/docs-cn/manual/latest/exception.mdx"}},5476:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/exception",function(){return t(27782)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=5476,e(e.s=n);var n}));var n=e.O();_N_E=n}]);