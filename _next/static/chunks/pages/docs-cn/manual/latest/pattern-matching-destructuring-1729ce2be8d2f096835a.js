(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[37181],{17375:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(n,{Z:function(){return a}})},64470:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var a=t(17375),l=t(96156),r=(t(67294),t(3905));function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p,i=(p="CodeTab",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",o({},e))}),u={};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",o(o(o({},u),t),{},{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",o({},{id:"\u6a21\u5f0f\u5339\u914d--\u6790\u6784"}),"\u6a21\u5f0f\u5339\u914d / \u6790\u6784"),(0,r.kt)("p",null,"ReScript ",(0,r.kt)("strong",{parentName:"p"},"\u6700\u68d2"),"\u7684\u7279\u6027\u4e4b\u4e00\u5c31\u662f\u6a21\u5f0f\u5339\u914d\u4e86\u3002\u6a21\u5f0f\u5339\u914d\u5c063\u4e2a\u5de7\u5999\u7684\u7279\u6027\u6574\u5408\u5230\u4e86\u4e00\u8d77\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6790\u6784"),(0,r.kt)("li",{parentName:"ul"},"\u4f9d\u636e\u6570\u636e\u7684 \u201c\u5f62\u72b6\u201d \u8fdb\u884c",(0,r.kt)("inlineCode",{parentName:"li"},"switch")),(0,r.kt)("li",{parentName:"ul"},"\u7a77\u4e3e\u6027\u68c0\u67e5")),(0,r.kt)("p",null,"\u6211\u4eec\u63a5\u4e0b\u6765\u6df1\u5165\u5b66\u4e60\u4e00\u4e0b\u8fd9\u4e09\u4e2a\u7279\u6027\u3002"),(0,r.kt)("h2",o({},{id:"\u6790\u6784"}),"\u6790\u6784"),(0,r.kt)("p",null,'\u751a\u81f3 JavaScript \u4e5f\u6709\u6790\u6784\u529f\u80fd\uff0c\u4e5f\u5c31\u662f"\u6253\u5f00"\u4e00\u4e2a\u6570\u636e\u7ed3\u6784\uff0c\u63d0\u53d6\u6211\u4eec\u60f3\u8981\u7684\u90e8\u5206\uff0c\u5e76\u4e3a\u5176\u5206\u914d\u5230\u76f8\u5e94\u7684\u53d8\u91cf\u540d\u3002'),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let coordinates = (10, 20, 30)\nlet (x, _, _) = coordinates\nJs.log(x) // 10\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var coordinates = [10, 20, 30];\nvar x = 10;\nconsole.log(10);\n"))),(0,r.kt)("p",null,"\u5927\u90e8\u5206\u5185\u7f6e\u6570\u636e\u6790\u6784\u90fd\u662f\u53ef\u4ee5\u88ab\u6790\u6784\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'// Record\ntype student = {name: string, age: int}\nlet student1 = {name: "John", age: 10}\nlet {name} = student1 // "John" assigned to `name`\n\n// Variant\ntype result =\n  | Success(string)\nlet myResult = Success("You did it!")\nlet Success(message) = myResult // "You did it!" assigned to `message`\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var student1 = {\n  name: "John",\n  age: 10\n};\nvar name = "John";\n\nvar myResult = /* Success */{\n  _0: "You did it!"\n};\nvar message = "You did it!"\n\nvar myArray = [1, 2, 3];\nif (myArray.length !== 2) {\n  throw {\n    RE_EXN_ID: "Match_failure",\n    _1: [\n      "playground.res",\n      14,\n      4\n    ],\n    Error: new Error()\n  };\n}\nvar item1 = myArray[0];\nvar item2 = myArray[1];\n\nvar myList = {\n  hd: 1,\n  tl: {\n    hd: 2,\n    tl: {\n      hd: 3,\n      tl: /* [] */0\n    }\n  }\n};\n// ...\n'))),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u521b\u5efa\u7ed1\u5b9a\u7684\u5730\u65b9\u4f7f\u7528\u6790\u6784\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'type result =\n  | Success(string)\nlet displayMessage = (Success(m)) => {\n  // we\'ve directly extracted the success message\n  // string by destructuring the parameter\n  Js.log(m)\n}\ndisplayMessage(Success("You did it!"))\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'function displayMessage(m) {\n  console.log(m._0);\n}\n\ndisplayMessage(/* Success */{\n  _0: "You did it!"\n});\n'))),(0,r.kt)("p",null,"\u5bf9\u4e8e\u8bb0\u5f55\uff0c\u4f60\u53ef\u4ee5\u5728\u6790\u6784\u65f6\u91cd\u547d\u540d\u5b57\u6bb5\u3002"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'let {name: n} = student1 // "John" assigned to `n`\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var n = "John";\n'))),(0,r.kt)("p",null,"\u7406\u8bba\u4e0a\u4f60\u4e5f ",(0,r.kt)("em",{parentName:"p"},"\u53ef\u4ee5")," \u5728\u9876\u5c42\u6790\u6784\u6570\u7ec4\u548c\u5217\u8868\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),"let myArray = [1, 2, 3]\nlet [item1, item2, _] = myArray\n// 1 assigned to `item1`, 2 assigned to `item2`, 3rd item ignored\n\nlet myList = list{1, 2, 3}\nlet list{head, ...tail} = myList\n// 1 assigned to `head`, `list{2, 3}` assigned to tail\n")),(0,r.kt)("p",null,"\u4f46\u662f\u6790\u6784\u6570\u7ec4\u7684\u662f",(0,r.kt)("strong",{parentName:"p"},"\u9ad8\u5ea6\u4e0d\u63a8\u8350\u7684"),"\uff08\u8fd9\u79cd\u60c5\u51b5\u6700\u597d\u7528\u5143\u7ec4\u4ee3\u66ff\uff09\uff0c\u56e0\u4e3a\u7a77\u4e3e\u6027\u7684\u539f\u56e0\uff0c\u5217\u8868\u7684\u4f8b\u5b50\u4f1a\u4e3a\u4f60\u62a5\u9519\u3002\u4f60\u5373\u5c06\u5728\u540e\u9762\u770b\u5230\uff0c\u6790\u6784\u6570\u7ec4\u548c\u5217\u8868\u7684\u6b63\u786e\u65b9\u6cd5\u662f\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"switch"),"\u3002 "),(0,r.kt)("h2",o({},{id:"\u57fa\u4e8e\u6570\u636e\u7684\u5f62\u72b6switch"}),"\u57fa\u4e8e\u6570\u636e\u7684\u5f62\u72b6",(0,r.kt)("inlineCode",{parentName:"h2"},"switch")),(0,r.kt)("p",null,"\u867d\u7136\u6a21\u5f0f\u5339\u914d\u7684\u6790\u6784\u5f88\u597d\uff0c\u4f46\u5b83\u5e76\u6ca1\u6709\u771f\u6b63\u6539\u53d8\u4f60\u7406\u89e3\u7ed3\u6784\u5316\u4ee3\u7801\u7684\u65b9\u5f0f\u3002\u4e00\u4e2a\u6539\u53d8\u4f60\u7684\u4ee3\u7801\u601d\u7ef4\u6a21\u5f0f\u7684\u65b9\u6cd5\u662f\u6839\u636e\u6570\u636e\u7684\u5f62\u72b6\u6765\u6267\u884c\u4e00\u4e9b\u4ee3\u7801\u3002"),(0,r.kt)("p",null,"\u8003\u8651\u5982\u4e0b\u53d8\u4f53\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type payload =\n  | BadResult(int)\n  | GoodResult(string)\n  | NoResult\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,r.kt)("p",null,"\u6211\u4eec\u60f3\u8981\u5904\u7406\u4e09\u79cd\u4e0d\u540c\u7684\u60c5\u51b5\u3002\u6bd4\u5982\u8bf4\uff0c\u5982\u679c\u503c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"GoodResult(...)"),", \u6253\u5370\u4e00\u6761\u4fe1\u606f\u8868\u793a\u6210\u529f\uff0c\u5982\u679c\u503c\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"NoResult"),"\u90a3\u5c31\u505a\u4e00\u4e9b\u5176\u4ed6\u4e8b\u60c5\uff0c\u8bf8\u5982\u6b64\u7c7b\u3002"),(0,r.kt)("p",null,"\u5728\u5176\u4ed6\u8bed\u8a00\u4e2d\uff0c\u4f60\u53ef\u80fd\u4f1a\u7528\u4e00\u7cfb\u5217",(0,r.kt)("inlineCode",{parentName:"p"},"if-else"),"\u6765\u5b9e\u73b0\u4e0a\u8ff0\u529f\u80fd\uff0c\u53ef\u8bfb\u6027\u4e0d\u597d\u5e76\u4e14\u5f88\u5bb9\u6613\u51fa\u9519\u3002\u5728 ReScrit \u4e2d\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5f3a\u5927\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"switch"),"\u7684\u6a21\u5f0f\u5339\u914d\u529f\u80fd\u6790\u6784\u503c\uff0c\u7136\u540e\u57fa\u4e8e\u6790\u6784\u7684\u7ed3\u679c\u8c03\u7528\u9700\u8981\u7684\u4ee3\u7801\u5757\u3002"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let data = GoodResult("Product shipped!")\nswitch data {\n| GoodResult(theMessage) =>\n  Js.log("Success! " ++ theMessage)\n| BadResult(errorCode) =>\n  Js.log("Something\'s wrong. The error code is: " ++ Js.Int.toString(errorCode))\n| NoResult =>\n  Js.log("Bah.")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var data = {\n  TAG: /* GoodResult */1,\n  _0: "Product shipped!"\n};\n\nif (typeof data === "number") {\n  console.log("Bah.");\n} else if (data.TAG === /* BadResult */ 0) {\n  console.log("Something\'s wrong. The error code is: " + "Product shipped!".toString());\n} else {\n  console.log("Success! Product shipped!");\n}\n'))),(0,r.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"message"),"\u7684\u503c\u4f1a\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},'"Success! Product shipped!"'),". "),(0,r.kt)("p",null,"\u7a81\u7136\uff0c\u6df7\u4e71\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"if-else"),"\u5224\u65ad\u8f6c\u53d8\u4e3a\u4e86\u7b80\u6d01\u4e14\u7ecf\u8fc7\u7f16\u8bd1\u5668\u9a8c\u8bc1\u8fc7\u7684\u7531\u4ee3\u7801\u7ec4\u6210\u7684\u7ebf\u6027\u5217\u8868\uff0c\u5e76\u4e14\u4f1a\u6839\u636e\u503c\u7684\u5f62\u72b6\u6267\u884c\u76f8\u5173\u7684\u4ee3\u7801\u7247\u6bb5\u3002"),(0,r.kt)("h3",o({},{id:"\u4e00\u4e9b\u590d\u6742\u7684\u4f8b\u5b50"}),"\u4e00\u4e9b\u590d\u6742\u7684\u4f8b\u5b50"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u6bb5\u771f\u5b9e\u573a\u666f\u7684\u4ee3\u7801\uff0c\u5728\u522b\u7684\u8bed\u8a00\u4e2d\u8868\u8fbe\u76f8\u540c\u7684\u529f\u80fd\u662f\u5f88\u5934\u75bc\u7684\u3002\u6bd4\u5982\u8bf4\u5bf9\u4e8e\u8fd9\u4e2a\u6570\u636e\u7ed3\u6784\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),"type status = Vacations(int) | Sabbatical(int) | Sick | Present\ntype reportCard = {passing: bool, gpa: float}\ntype person =\n  | Teacher({\n    name: string,\n    age: int,\n  })\n  | Student({\n    name: string,\n    status: status,\n    reportCard: reportCard,\n  })\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"// Empty output\n"))),(0,r.kt)("p",null,"\u5047\u5982\u6709\u4ee5\u4e0b\u9700\u6c42\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'\u5982\u679c\u4e00\u4e2a\u4eba\u662f\u4e00\u540d\u8001\u5e08\uff0c\u4e14\u5b83\u7684\u540d\u5b57\u662f"Marry"\u6216"Joe"\u7684\u8bdd\uff0c\u548c\u4ed6/\u5979\u975e\u6b63\u5f0f\u7684\u6253\u58f0\u62db\u547c\u3002'),(0,r.kt)("li",{parentName:"ul"},"\u6b63\u5f0f\u7684\u548c\u522b\u7684\u8001\u5e08\u6253\u62db\u547c\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e00\u4e2a\u4eba\u662f\u4e2a\u5b66\u751f\uff0c\u5e76\u4e14\u4ed6\u4eec\u901a\u8fc7\u4e86\u8fd9\u4e2a\u5b66\u671f\uff0c\u795d\u8d3a\u4ed6/\u5979\u7684\u5206\u6570\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8be5\u5b66\u751f\u7684 gpa \u4e3a0, \u5e76\u4e14\u6b63\u5728\u4f11\u5047\u6216\u516c\u4f11\uff0c\u5219\u663e\u793a\u4e00\u4e2a\u4e0d\u540c\u7684\u4fe1\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e00\u4e2a\u5b66\u751f\u663e\u5f0f\u4e00\u6761\u901a\u7528\u7684\u4fe1\u606f\u3002")),(0,r.kt)("p",null,"ReScript can do this easily!"),(0,r.kt)("p",null,"ReScript\u53ef\u4ee5\u5f88\u8f7b\u6613\u7684\u505a\u5230\u8fd9\u4e00\u70b9!"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),'let person1 = Teacher({name: "Jane", age: 35})\n\nlet message = switch person1 {\n| Teacher({name: "Mary" | "Joe"}) =>\n  `Hey, still going to the party on Saturday?`\n| Teacher({name}) =>\n  // this is matched only if `name` isn\'t "Mary" or "Joe"\n  `Hello ${name}.`\n| Student({name, reportCard: {passing: true, gpa}}) =>\n  `Congrats ${name}, nice GPA of ${Js.Float.toString(gpa)} you got there!`\n| Student({\n    reportCard: {gpa: 0.0},\n    status: Vacations(daysLeft) | Sabbatical(daysLeft)\n  }) =>\n  `Come back in ${Js.Int.toString(daysLeft)} days!`\n| Student({status: Sick}) =>\n  `How are you feeling?`\n| Student({name}) =>\n  `Good luck next semester ${name}!`\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var person1 = {\n  TAG: /* Teacher */0,\n  name: "Jane",\n  age: 35\n};\n\nvar message;\n\nif (person1.TAG) {\n  var match$1 = person1.status;\n  var name = person1.name;\n  var match$2 = person1.reportCard;\n  message = match$2.passing\n    ? "Congrats " +\n      name +\n      ", nice GPA of " +\n      match$2.gpa.toString() +\n      " you got there!"\n    : typeof match$1 === "number"\n    ? match$1 !== 0\n      ? "Good luck next semester " + name + "!"\n      : "How are you feeling?"\n    : person1.reportCard.gpa !== 0.0\n    ? "Good luck next semester " + name + "!"\n    : "Come back in " + match$1._0.toString() + " days!";\n} else {\n  var name$1 = person1.name;\n  switch (name$1) {\n    case "Joe":\n    case "Mary":\n      message = "Hey, still going to the party on Saturday?";\n      break;\n    default:\n      message = "Hello " + name$1 + ".";\n  }\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \u6211\u4eec\u662f\u5982\u4f55\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b80\u6d01\u7684\u6df1\u5165\u68c0\u67e5\u503c\u7684\u5185\u90e8"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,r.kt)("strong",{parentName:"li"},"\u5d4c\u5957\u7684\u6a21\u5f0f\u68c0\u67e5")," ",(0,r.kt)("inlineCode",{parentName:"li"},'"Mary" | "Joe"')," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"Vacations | Sabbatical")),(0,r.kt)("li",{parentName:"ul"},"\u5728\u540e\u9762\u7684\u5206\u652f\u4e2d\u628a",(0,r.kt)("inlineCode",{parentName:"li"},"dayLeft"),"\u503c\u62bd\u51fa\u6765\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u6700\u540e\u628a\u6253\u62db\u547c\u7684\u4fe1\u606f\u8d4b\u7ed9",(0,r.kt)("inlineCode",{parentName:"li"},"message"),"\u7ed1\u5b9a\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u53e6\u4e00\u4e2a\u6a21\u5f0f\u5339\u914d\u7684\u4f8b\u5b50\uff0c\u8fd9\u6b21\u662f\u5728\u5185\u8054\u5143\u7ec4\u4e0a\u7684\u4f7f\u7528\u3002"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),"type animal = Dog | Cat | Bird\nlet categoryId = switch (isBig, myAnimal) {\n| (true, Dog) => 1\n| (true, Cat) => 2\n| (true, Bird) => 3\n| (false, Dog | Cat) => 4\n| (false, Bird) => 5\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var categoryId = isBig ? (myAnimal + 1) | 0 : myAnimal >= 2 ? 5 : 4;\n"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," how pattern matching on a tuple is equivalent to a 2D table:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \u5728\u5143\u7ec4\u4e0a\u7684\u6a21\u5f0f\u5339\u914d\u7b49\u4ef7\u4e8e\u4e8c\u7ef4\u8868\u7684\u67e5\u627e\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:null}),"isBig \\ myAnimal"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Dog"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Cat"),(0,r.kt)("th",o({parentName:"tr"},{align:null}),"Bird"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"true"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"1"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:null}),"false"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"4"),(0,r.kt)("td",o({parentName:"tr"},{align:null}),"5")))),(0,r.kt)("h3",o({},{id:"fall-through-patterns"}),"Fall-Through Patterns"),(0,r.kt)("p",null,"\u5728\u524d\u9762\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"person"),"\u7684\u4f8b\u5b50\u4e2d\u5c55\u793a\u7684\u5d4c\u5957\u6a21\u5f0f\u68c0\u67e5\uff0c\u4e5f\u53ef\u4ee5\u7528\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"switch"),"\u7684\u9876\u5c42\u3002"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"prelude",prelude:!0}),'let myStatus = Vacations(10)\n\nswitch myStatus {\n| Vacations(days)\n| Sabbatical(days) => Js.log(`Come back in ${Js.Int.toString(days)} days!`)\n| Sick\n| Present => Js.log("Hey! How are you?")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var myStatus = {\n  TAG: /* Vacations */0,\n  _0: 10\n};\n\nif (typeof myStatus === "number") {\n  console.log("Hey! How are you?");\n} else {\n  console.log("Come back in " + (10).toString() + " days!");\n}\n'))),(0,r.kt)("p",null,"\u8ba9\u591a\u4e2a\u672c\u8d28\u653e\u5728\u4e00\u8d77\u5904\u7406\uff0c\u53ef\u4ee5\u8ba9\u67d0\u4e9b\u7c7b\u578b\u7684\u903b\u8f91\u66f4\u52a0\u6e05\u6670\u3002"),(0,r.kt)("h3",o({},{id:"\u5ffd\u7565\u67d0\u90e8\u5206\u7684\u503c"}),"\u5ffd\u7565\u67d0\u90e8\u5206\u7684\u503c"),(0,r.kt)("p",null,"If you have a value like ",(0,r.kt)("inlineCode",{parentName:"p"},"Teacher(payload)")," where you just want to pattern match on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Teacher")," part and ignore the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," completely, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," wildcard like this:"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4e2a\u50cf",(0,r.kt)("inlineCode",{parentName:"p"},"Teacher(payload)"),"\u7684\u503c\uff0c\u4f60\u53ef\u80fd\u53ea\u60f3\u5339\u914d",(0,r.kt)("inlineCode",{parentName:"p"},"Teacher"),"\u90e8\u5206\u800c\u5b8c\u5168\u5ffd\u7565",(0,r.kt)("inlineCode",{parentName:"p"},"payload"),"\u90e8\u5206\uff0c\u8fd9\u79cd\u60c5\u51b5\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e0b\u5212\u7ebf",(0,r.kt)("inlineCode",{parentName:"p"},"_"),", \u50cf\u8fd9\u6837\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'switch person1 {\n| Teacher(_) => Js.log("Hi teacher")\n| Student(_) => Js.log("Hey student")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'if (person1.TAG) {\n  console.log("Hey student");\n} else {\n  console.log("Hi teacher");\n}\n'))),(0,r.kt)("p",null,"\u4e0b\u5212\u7ebf\u4e5f\u53ef\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"_"),"\u7528\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"switch"),"\u7684\u9876\u5c42\uff0c\u5f53\u4f5c\u4e00\u4e2a\u9ed8\u8ba4\u5206\u652f\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'switch myStatus {\n| Vacations(_) => Js.log("Have fun!")\n| _ => Js.log("Ok.")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'if (typeof myStatus === "number" || myStatus.TAG) {\n  console.log("Ok.");\n} else {\n  console.log("Have fun!");\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e0d\u8981"),"\u8fc7\u5ea6\u4f7f\u7528\u9ed8\u8ba4\u5206\u652f\uff0c\u6700\u597d\u5199\u4e0b\u6bcf\u79cd\u60c5\u51b5\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'switch myStatus {\n| Vacations(_) => Js.log("Have fun!")\n| Sabbatical(_) | Sick | Present => Js.log("Ok.")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'if (typeof myStatus === "number" || myStatus.TAG) {\n  console.log("Ok.");\n} else {\n  console.log("Have fun!");\n}\n'))),(0,r.kt)("p",null,"\u7a0d\u5fae\u6709\u4e9b\u5570\u55e6\uff0c\u4f46\u53ea\u662f\u4e00\u6b21\u6027\u7684\u7f16\u5199\u5de5\u4f5c\u3002\u5f53\u4f60\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"status"),"\u7c7b\u578b\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u53d8\u4f53\uff0c\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"Quarantined"),", \u5e76\u9700\u8981\u66f4\u65b0\u6a21\u5f0f\u5339\u914d\u7684\u5730\u65b9\u65f6\uff0c\u8fd9\u6837\u505a\u5c06\u6709\u6240\u5e2e\u52a9\u3002\u8fd9\u91cc\u7684\u9876\u5c42\u901a\u914d\u7b26\u4f1a\u610f\u5916\u5730\u9ed8\u9ed8\u5730\u7ee7\u7eed\u5de5\u4f5c\uff0c\u7136\u540e\u4ea7\u751fbug."),(0,r.kt)("h3",o({},{id:"if-\u5b50\u53e5"}),"If \u5b50\u53e5"),(0,r.kt)("p",null,"\u6709\u7684\u65f6\u5019\u4f60\u53ef\u80fd\u4f1a\u60f3\u68c0\u67e5\u9664\u4e86\u503c\u7684\u5f62\u72b6\u4ee5\u5916\u7684\u4e1c\u897f\uff0c\u5728\u503c\u4e0a\u8fdb\u884c\u5404\u79cd\u5404\u6837\u7684\u68c0\u67e5\u3002\u4f60\u53ef\u80fd\u4f1a\u5c1d\u8bd5\u8fd9\u6837\u5199\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'switch person1 {\n| Teacher(_) => () // do nothing\n| Student({reportCard: {gpa}}) =>\n  if gpa < 0.5 {\n    Js.log("What\'s happening")\n  } else {\n    Js.log("Heyo")\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'if (person1.TAG) {\n  if (person1.reportCard.gpa < 0.5) {\n    console.log("What\'s happening");\n  } else {\n    console.log("Heyo");\n  }\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"switch"),"\u6a21\u5f0f\u652f\u6301\u4efb\u610f\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"\u68c0\u67e5\u7684\u5feb\u6377\u65b9\u5f0f\uff0c\u4ee5\u4fdd\u6301\u6a21\u5f0f\u5339\u914d\u7684\u7ebf\u6027\u7684\u5916\u89c2\u3002"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'switch person1 {\n| Teacher(_) => () // do nothing\n| Student({reportCard: {gpa}}) if gpa < 0.5 =>\n  Js.log("What\'s happening")\n| Student(_) =>\n  // fall-through, catch-all case\n  Js.log("Heyo")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'if (person1.TAG) {\n  if (person1.reportCard.gpa < 0.5) {\n    console.log("What\'s happening");\n  } else {\n    console.log("Heyo");\n  }\n}\n'))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," ReScript\u7248\u672c < 9.0 \u4f7f\u7528\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"when"),"\u5b50\u53e5\u800c\u4e0d\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"\u5b50\u53e5\u3002ReScript\u57289.0\u7248\u672c\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"when"),"\u5207\u6362\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"if"),". (",(0,r.kt)("inlineCode",{parentName:"p"},"when"),"\u4efb\u7136\u53ef\u4ee5\u4f7f\u7528\uff0c\u53ea\u662f\u88ab\u5e9f\u5f03\u4e86\u3002)"),(0,r.kt)("h3",o({},{id:"\u5339\u914d\u5f02\u5e38\u503c"}),"\u5339\u914d\u5f02\u5e38\u503c"),(0,r.kt)("p",null,"\u5982\u679c\u51fd\u6570\u53ef\u80fd\u4f1a\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\uff08\u7a0d\u540e\u4f1a\u4ecb\u7ecd\uff09, \u9664\u4e86\u53ef\u4ee5\u5339\u914d\u6b63\u5e38\u7684\u8fd4\u56de\u503c\u4e4b\u5916\uff0c\u8fd8\u53ef\u4ee5\u5728\u90a3\u4e2a\u5f02\u5e38\u4e0a\u8fdb\u884c\u6a21\u5f0f\u5339\u914d\u3002"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'switch List.find(i => i === theItem, myItems) {\n| item => Js.log(item)\n| exception Not_found => Js.log("No such item found!")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var exit = 0;\n\nvar item;\n\ntry {\n  item = List.find(function(i) {\n    return i === theItem;\n  }, myItems);\n  exit = 1;\n}\ncatch (raw_exn){\n  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);\n  if (exn.RE_EXN_ID === "Not_found") {\n    console.log("No such item found!");\n  } else {\n    throw exn;\n  }\n}\n\nif (exit === 1) {\n  console.log(item);\n}\n'))),(0,r.kt)("h3",o({},{id:"\u5728\u6570\u7ec4\u4e0a\u8fdb\u884c\u5339\u914d"}),"\u5728\u6570\u7ec4\u4e0a\u8fdb\u884c\u5339\u914d"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let students = ["Jane", "Harvey", "Patrick"]\nswitch students {\n| [] => Js.log("There are no students")\n| [student1] =>\n  Js.log("There\'s a single student here: " ++ student1)\n| manyStudents =>\n  // display the array of names\n  Js.log2("The students are: ", manyStudents)\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var students = ["Jane", "Harvey", "Patrick"];\n\nvar len = students.length;\n\nif (len !== 1) {\n  if (len !== 0) {\n    console.log("The students are: ", students);\n  } else {\n    console.log("There are no students");\n  }\n} else {\n  var student1 = students[0];\n  console.log("There\'s a single student here: " + student1);\n}\n'))),(0,r.kt)("h3",o({},{id:"\u5728\u5217\u8868\u4e0a\u8fdb\u884c\u5339\u914d"}),"\u5728\u5217\u8868\u4e0a\u8fdb\u884c\u5339\u914d"),(0,r.kt)("p",null,"\u5217\u8868\u4e0a\u7684\u6a21\u5f0f\u5339\u914d\u4e0e\u6570\u7ec4\u7c7b\u4f3c\uff0c\u4f46\u6709\u4e00\u4e2a\u989d\u5916\u7684\u7279\u70b9\uff0c\u5373\u63d0\u53d6\u5217\u8868\u7684\u5c3e\u90e8\uff08\u9664\u7b2c\u4e00\u4e2a\u5143\u7d20\u5916\u7684\u6240\u6709\u5143\u7d20\uff09."),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let rec printStudents = (students) => {\n  switch students {\n  | list{} => () // done\n  | list{student} => Js.log("Last student: " ++ student)\n  | list{student1, ...otherStudents} =>\n    Js.log(student1)\n    printStudents(otherStudents)\n  }\n}\nprintStudents(list{"Jane", "Harvey", "Patrick"})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'function printStudents(_students) {\n  while(true) {\n    var students = _students;\n    if (!students) {\n      return;\n    }\n    var otherStudents = students.tl;\n    var student = students.hd;\n    if (otherStudents) {\n      console.log(student);\n      _students = otherStudents;\n      continue;\n    }\n    console.log("Last student: " + student);\n    return;\n  };\n}\n\nprintStudents({\n  hd: "Jane",\n  tl: {\n    hd: "Harvey",\n    tl: {\n      hd: "Patrick",\n      tl: /* [] */0\n    }\n  }\n});\n'))),(0,r.kt)("h3",o({},{id:"\u4e00\u4e9b\u5c0f\u9677\u9631"}),"\u4e00\u4e9b\u5c0f\u9677\u9631"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),": \u4f60\u53ea\u80fd\u4f20\u9012\u5b57\u9762\u503c\uff08\u5373\u5177\u4f53\u7684\u503c\uff09\u4f5c\u4e3a\u6a21\u5f0f\uff0c\u800c\u4e0d\u80fd\u4f20\u9012let-binding\u540d\u79f0\u6216\u5176\u4ed6\u4e1c\u897f\uff0c\u4e0b\u9762\u7684\u505a\u6cd5\u4e0d\u80fd\u50cf\u9884\u671f\u7684\u90a3\u6837\u5de5\u4f5c\u3002"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let coordinates = (10, 20, 30)\nlet centerY = 20\nswitch coordinates {\n| (x, centerY, _) => Js.log(x)\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"var coordinates = [10, 20, 30];\nvar centerY = 20;\n\nconsole.log(10);\n"))),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b21\u4f7f\u7528 ReScript \u7684\u4eba\u53ef\u80fd\u4f1a\u4e0d\u5c0f\u5fc3\u5199\u4e0b\u8fd9\u6bb5\u4ee3\u7801\uff0c\u8ba4\u4e3a\u5f53\u7b2c\u4e8c\u4e2a\u503c\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"centerY"),"\u76f8\u540c\u7684\u65f6\u5019\u4f1a\u5339\u914d",(0,r.kt)("inlineCode",{parentName:"p"},"coordinates"),". \u5b9e\u9645\u4e0a\uff0c\u8fd9\u4f1a\u88ab\u89e3\u91ca\u4e3a\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"coordinates"),"\u4e0a\u8fdb\u884c\u5339\u914d\uff0c\u5e76\u5c06\u5143\u7ec4\u7684\u7b2c\u4e8c\u4e2a\u503c\u5206\u914d\u7ed9",(0,r.kt)("inlineCode",{parentName:"p"},"centerY"),", \u800c\u8fd9\u5e76\u4e0d\u662f\u6211\u4eec\u60f3\u8981\u7684\u7ed3\u679c\u3002"),(0,r.kt)("h2",o({},{id:"\u7a77\u4e3e\u68c0\u67e5"}),"\u7a77\u4e3e\u68c0\u67e5"),(0,r.kt)("p",null,"\u5982\u679c\u4e0a\u8ff0\u7279\u6027\u8fd8\u4e0d\u591f\uff0cReScript\u8fd8\u63d0\u4f9b\u4e86\u53ef\u4ee5\u8bf4\u662f\u6700\u91cd\u8981\u7684\u6a21\u5f0f\u5339\u914d\u529f\u80fd\u3002",(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u671f\u68c0\u67e5\u7f3a\u5931\u7684\u6a21\u5f0f"),"."),(0,r.kt)("p",null,"\u6211\u4eec\u518d\u6765\u91cd\u5ba1\u4e00\u4e0b\u4e0a\u9762\u7684\u4f8b\u5b50\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res"}),'let message = switch person1 {\n| Teacher({name: "Mary" | "Joe"}) =>\n  `Hey, still going to the party on Saturday?`\n| Student({name, reportCard: {passing: true, gpa}}) =>\n  `Congrats ${name}, nice GPA of ${Js.Float.toString(gpa)} you got there!`\n| Student({\n    reportCard: {gpa: 0.0},\n    status: Vacations(daysLeft) | Sabbatical(daysLeft)\n  }) =>\n  `Come back in ${Js.Int.toString(daysLeft)} days!`\n| Student({status: Sick}) =>\n  `How are you feeling?`\n| Student({name}) =>\n  `Good luck next semester ${name}!`\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'if (person1.TAG) {\n  var match$1 = person1.status;\n  var name = person1.name;\n  var match$2 = person1.reportCard;\n  if (match$2.passing) {\n    "Congrats " + name + ", nice GPA of " + match$2.gpa.toString() + " you got there!";\n  } else if (typeof match$1 === "number") {\n    if (match$1 !== 0) {\n      "Good luck next semester " + name + "!";\n    } else {\n      "How are you feeling?";\n    }\n  } else if (person1.reportCard.gpa !== 0.0) {\n    "Good luck next semester " + name + "!";\n  } else {\n    "Come back in " + match$1._0.toString() + " days!";\n  }\n} else {\n  switch (person1.name) {\n    case "Joe":\n    case "Mary":\n      break;\n    default:\n      throw {\n        RE_EXN_ID: "Match_failure",\n        _1: [\n          "playground.res",\n          13,\n          0\n        ],\n        Error: new Error()\n      };\n  }\n}\n'))),(0,r.kt)("p",null,"\u4f60\u770b\u5230\u6211\u4eec\u79fb\u9664\u7684\u90e8\u5206\u4e86\u5417? \u8fd9\u4e00\u6b21\uff0c\u6211\u4eec\u7701\u7565\u4e86\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"person1"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Teacher({name})"),"\u7684\u60c5\u51b5\u7684\u5904\u7406\uff0c\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"name"),"\u4e0d\u662f Mary \u6216Joe."),(0,r.kt)("p",null,"\u672a\u80fd\u5904\u7406\u503c\u7684\u6bcf\u4e00\u79cd\u60c5\u51b5\u53ef\u80fd\u6784\u6210\u4e86\u5927\u591a\u6570\u7684\u7a0b\u5e8f\u9519\u8bef\uff0c\u5f53\u4f60\u91cd\u6784\u522b\u4eba\u7f16\u5199\u7684\u4ee3\u7801\u65f6\uff0c\u8fd9\u79cd\u60c5\u51b5\u7ecf\u5e38\u53d1\u751f\u3002\u5e78\u8fd0\u7684\u662f\u5bf9\u4e8eReScript, \u9047\u5230\u8fd9\u79cd\u60c5\u51b5\u7f16\u8bd1\u5668\u4f1a\u544a\u8bc9\u4f60\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{}),'Warning 8: this pattern-matching is not exhaustive.\nHere is an example of a value that is not matched:\nSome({name: ""})\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BAM"),"! \u5728\u4f60\u8fd0\u884c\u4ee3\u7801\u4e4b\u524d\uff0c\u4f60\u5c31\u5df2\u7ecf\u62b9\u53bb\u4e86\u4e00\u6574\u7c7b\u91cd\u8981\u7684\u9519\u8bef\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5927\u90e8\u5206\u7684\u53ef\u7a7a\u503c\uff08nullable\uff09\u90fd\u662f\u8fd9\u6837\u5904\u7406\u7684\u3002"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),'let myNullableValue = Some(5)\n\nswitch myNullableValue {\n| Some(v) => Js.log("value is present")\n| None => Js.log("value is absent")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),'var myNullableValue = 5;\n\nif (myNullableValue !== undefined) {\n  console.log("value is present");\n} else {\n  console.log("value is absent");\n}\n'))),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4e0d\u5904\u7406",(0,r.kt)("inlineCode",{parentName:"p"},"None"),"\u7684\u60c5\u51b5\uff0c\u7f16\u8bd1\u5668\u4f1a\u53d1\u51fa\u8b66\u544a\u3002\u5728\u4f60\u7684\u4ee3\u7801\u4e2d\u4e0d\u518d\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \u76f8\u5173\u7684\u9519\u8bef\u4e86!"),(0,r.kt)("h2",o({},{id:"\u7ed3\u8bba--\u6280\u5de7--\u8bc0\u7a8d"}),"\u7ed3\u8bba & \u6280\u5de7 & \u8bc0\u7a8d"),(0,r.kt)("p",null,"\u5e0c\u671b\u5df2\u7ecf\u4f60\u770b\u5230\u6a21\u5f0f\u5339\u914d\u662f\u5982\u4f55\u901a\u8fc7\u7b80\u6d01\u7684\u6790\u6784\u8bed\u6cd5\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"switch")," \u9002\u5f53\u7684\u5904\u7406\u6761\u4ef6\u548c\u9759\u6001\u7684\u7a77\u4e3e\u68c0\u67e5\u6539\u53d8\u7f16\u5199\u6b63\u786e\u4ee3\u7801\u7684\u6e38\u620f\u89c4\u5219\u7684\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u5efa\u8bae\uff1a"),(0,r.kt)("p",null,"\u907f\u514d\u4e0d\u5fc5\u8981\u5730\u4f7f\u7528\u901a\u914d\u7b26 ",(0,r.kt)("inlineCode",{parentName:"p"},"_"),"\uff0c\u4f7f\u7528\u901a\u914d\u7b26",(0,r.kt)("inlineCode",{parentName:"p"},"_"),"\u5c06\u7ed5\u8fc7\u7f16\u8bd1\u5668\u7684\u7a77\u4e3e\u68c0\u67e5\u3002\u56e0\u6b64\uff0c\u5f53\u4f60\u5728\u53d8\u4f53\u4e2d\u589e\u52a0\u4e00\u4e2a\u65b0\u7684\u60c5\u51b5\u65f6\uff0c\u7f16\u8bd1\u5668\u5c06\u65e0\u6cd5\u901a\u77e5\u4f60\u53ef\u80fd\u51fa\u73b0\u7684\u9519\u8bef\u3002\u8bd5\u7740\u53ea\u5728\u9700\u8981\u5e94\u5bf9\u65e0\u9650\u7684\u53ef\u80fd\u6027\u7684\u65f6\u5019\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"_"),"\uff0c\u4f8b\u5982\u5b57\u7b26\u4e32\u3001int\u7b49\u3002"),(0,r.kt)("p",null,"\u5c3d\u91cf\u5c11\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"if"),"\u5b50\u53e5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5c3d\u53ef\u80fd\u6241\u5e73\u5316\u4f60\u7684\u6a21\u5f0f\u5339\u914d"),"\u3002 \u8fd9\u662f\u4e00\u4e2a\u771f\u6b63\u7684\u6d88\u9664\u9519\u8bef\u7684\u5de5\u5177\uff0c\u8fd9\u91cc\u6709\u4e00\u7cfb\u5217\u7684\u4ee3\u7801\u5b9e\u4f8b\uff0c\u7531\u4e0d\u597d\u7684\u4ee3\u7801\u5230\u6700\u597d\u7684\u4ee3\u7801\u3002"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let optionBoolToBool = opt => {\n  if opt == None {\n    false\n  } else if opt === Some(true) {\n    true\n  } else {\n    false\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function optionBoolToBool(opt) {\n  if (opt === undefined) {\n    return false;\n  } else {\n    return opt === true;\n  }\n}\n"))),(0,r.kt)("p",null,"\u73b0\u5728\u8fd9\u53ea\u662f\u4e0d\u90a3\u4e48\u806a\u660e\u7684\u505a\u6cd5\uff0c\u73b0\u5728\u6211\u4eec\u5c06\u5176\u8f6c\u4e3a\u6a21\u5f0f\u5339\u914d\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let optionBoolToBool = opt => {\n  switch opt {\n  | None => false\n  | Some(a) => a ? true : false\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function optionBoolToBool(opt) {\n  if (opt !== undefined && opt) {\n    return true;\n  } else {\n    return false;\n  }\n}\n"))),(0,r.kt)("p",null,"\u770b\u8d77\u6765\u6ca1\u90a3\u4e48\u50bb\u4e86\uff0c\u4f46\u4efb\u7136\u5b58\u5728\u5d4c\u5957\uff0c\u6a21\u5f0f\u5339\u914d\u8ba9\u4f60\u53ef\u4ee5\u8fd9\u4e48\u505a\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let optionBoolToBool = opt => {\n  switch opt {\n  | None => false\n  | Some(true) => true\n  | Some(false) => false\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function optionBoolToBool(opt) {\n  if (opt !== undefined && opt) {\n    return true;\n  } else {\n    return false;\n  }\n}\n"))),(0,r.kt)("p",null,"\u770b\u8d77\u6765\u66f4\u7ebf\u6027\u5316\u4e86\uff01\u73b0\u5728\uff0c\u4f60\u53ef\u80fd\u4f1a\u5c1d\u8bd5\u8fd9\u4e48\u505a\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let optionBoolToBool = opt => {\n  switch opt {\n  | Some(true) => true\n  | _ => false\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function optionBoolToBool(opt) {\n  if (opt !== undefined && opt) {\n    return true;\n  } else {\n    return false;\n  }\n}\n"))),(0,r.kt)("p",null,"\u8fd9\u786e\u5b9e\u66f4\u7b80\u6d01\u4e86\uff0c\u4f46\u4f1a\u7834\u574f\u4e0a\u9762\u63d0\u5230\u7684\u7a77\u4e3e\u68c0\u67e5\uff1b\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528\u8fd9\u4e2a\u3002\u8fd9\u662f\u6700\u597d\u7684\u5199\u6cd5\uff1a"),(0,r.kt)(i,{labels:["ReScript","JS Output"],mdxType:"CodeTab"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-res",metastring:"example",example:!0}),"let optionBoolToBool = opt => {\n  switch opt {\n  | Some(trueOrFalse) => trueOrFalse\n  | None => false\n  }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"function optionBoolToBool(opt) {\n  if (opt !== undefined) {\n    return opt;\n  } else {\n    return false;\n  }\n}\n"))),(0,r.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c\u8981\u60f3\u5728\u8fd9\u6bb5\u4ee3\u7801\u4e2d\u72af\u9519\u662f\u975e\u5e38\u56f0\u96be\u7684\uff01\u5f53\u4f60\u60f3\u4f7f\u7528\u4e00\u4e2a\u6709\u8bb8\u591a\u5206\u652f\u7684if-else\u65f6\uff0c\u6700\u597d\u7528\u6a21\u5f0f\u5339\u914d\u6765\u4ee3\u66ff\u3002\u5b83\u66f4\u7b80\u6d01\uff0c\u800c\u4e14",(0,r.kt)("a",o({parentName:"p"},{href:"variant#design-decisions"}),"\u6027\u80fd\u4e5f\u66f4\u597d"),". "))}m.isMDXComponent=!0,m.frontmatter={title:"\u6a21\u5f0f\u5339\u914d / \u6790\u6784",description:"Pattern matching and destructuring complex data structures in ReScript",canonical:"/docs/manual/latest/pattern-matching-destructuring",__ghEditHref:"https://github.com/butterunderflow/rescript-lang.org-chinese-translation/tree/chinese-translation/pages/docs-cn/manual/latest/pattern-matching-destructuring.mdx"}},36818:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs-cn/manual/latest/pattern-matching-destructuring",function(){return t(64470)}])}},function(e){e.O(0,[92888,49774,40179],(function(){return n=36818,e(e.s=n);var n}));var n=e.O();_N_E=n}]);