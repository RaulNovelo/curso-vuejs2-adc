(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuex-introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex-introduction"}},[t._v("#")]),t._v(" Vuex Introduction")]),t._v(" "),s("p",[t._v("Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue's official devtools extension to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/3300/1*ROtQY0XW1itY-76_ufVHww.png",alt:""}})]),t._v(" "),s("h1",{attrs:{id:"why-vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-vuex"}},[t._v("#")]),t._v(" Why vuex?")]),t._v(" "),s("p",[t._v("Vuex helps us deal with shared state management with the cost of more concepts and boilerplate. It's a trade-off between short term and long term productivity.\n"),s("img",{attrs:{src:"https://vuex.vuejs.org/flow.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"normal-vue-js-flow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#normal-vue-js-flow"}},[t._v("#")]),t._v(" Normal Vue.js flow")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://vuejs.org/images/lifecycle.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"comminicate-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#comminicate-components"}},[t._v("#")]),t._v(" Comminicate components")]),t._v(" "),s("ul",[s("li",[t._v("Parents send data to the child through props")]),t._v(" "),s("li",[t._v("the child sends data to the parents through events")]),t._v(" "),s("li",[t._v("Or use the data bus with events")])]),t._v(" "),s("h2",{attrs:{id:"when-to-use-vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-vuex"}},[t._v("#")]),t._v(" When to use vuex?")]),t._v(" "),s("p",[t._v("If you've never built a large-scale SPA and jump right into Vuex, it may feel verbose and daunting. That's perfectly normal - if your app is simple, you will most likely be fine without Vuex. A simple store pattern may be all you need. But if you are building a medium-to-large-scale SPA, chances are you have run into situations that make you think about how to better handle state outside of your Vue components, and Vuex will be the natural next step for you. There's a good quote from Dan Abramov, the author of Redux:")]),t._v(" "),s("blockquote",[s("p",[t._v("Flux libraries are like glasses: you’ll know when you need them.")])]),t._v(" "),s("h2",{attrs:{id:"how-to-start-we"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-start-we"}},[t._v("#")]),t._v(" How to start we")]),t._v(" "),s("pre",[s("code",[t._v("  state.count++\n}\n")])]),t._v(" "),s("p",[t._v("}\n})")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n\n# ACTIONS => DISPATCH\n```js\nconst store = new Vuex.Store({\n  state: {\n    count: 0\n  },\n  mutations: {\n    increment (state) {\n      state.count++\n    }\n  },\n  actions: {\n    increment (context) {\n      context.commit('increment')\n    }\n  }\n})\n")])])]),s("h1",{attrs:{id:"modules-namespaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-namespaces"}},[t._v("#")]),t._v(" MODULES & NAMESPACES")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moduleA "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  getters"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" moduleB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  mutations"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  modules"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moduleA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" moduleB\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> `moduleA`'s state")]),t._v("\nstore"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("b "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> `moduleB`'s state")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"https://vuex.vuejs.org/vuex.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"how-access-to-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-access-to-store"}},[t._v("#")]),t._v(" How access to STORE?")]),t._v(" "),s("ul",[s("li",[t._v("GLOBAL")]),t._v(" "),s("li",[t._v("MODULE IMPORTS")])])])}),[],!1,null,null,null);a.default=n.exports}}]);