(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{238:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("描述 stylus 编译器编译顺序的简单图表如下：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("br"),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-register-components/index.js#L24",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-register-components"),s("OutboundLink")],1),t._v(": Automatically registering components on the client side.")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/plugin-pagination/index.js#L14",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-pagination"),s("OutboundLink")],1),t._v(": Automatically insert Vue plugins to expand the API of the client.")])]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/@vuepress/plugin-blog/index.js#L145",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-blog"),s("OutboundLink")],1),t._v(": Using compile-time metadata to generate some dynamic blog-related modules and initialize them on the client side by using "),s("code",[t._v("enhanceAppFiles")]),t._v(".")])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"faq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[this._v("#")]),this._v(" FAQ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"为什么不能把-palette-styl-和-index-styl-合并到一个-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么不能把-palette-styl-和-index-styl-合并到一个-api","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么不能把 "),e("code",[this._v("palette.styl")]),this._v(" 和 "),e("code",[this._v("index.styl")]),this._v(" 合并到一个 API?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("palete.styl")]),this._v(" 负责全局颜色设置。在编译期间，主题颜色常量应该首先由预处理器解析，然后应用于全局上下文。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("但对于 "),e("code",[this._v("index.styl")]),this._v("，它的工作是重写应用的默认样式。根据 CSS 的优先级原则，后一种样式具有更高的优先级，因此应该在 CSS 文件的末尾生成。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("@flowstart "),e("br"),this._v("\n阶段1=>操作: palette.styl "),e("br"),this._v("\n阶段2=>操作: 默认 app 样式 "),e("br"),this._v("\n阶段3=>操作: index.styl "),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("阶段1->阶段2->阶段3 "),e("br"),this._v("\n@flowend")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"what-s-the-differences-between-the-clientdynamicmodules-and-enhanceappfiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-s-the-differences-between-the-clientdynamicmodules-and-enhanceappfiles","aria-hidden":"true"}},[this._v("#")]),this._v(" What's the differences between the "),e("code",[this._v("clientDynamicModules")]),this._v(" and "),e("code",[this._v("enhanceAppFiles")]),this._v("?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("To be translated.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Let's take a look back first, both "),e("code",[this._v("clientDynamicModules")]),this._v(" and "),e("code",[this._v("enhanceAppFiles")]),this._v(" can generate modules with dynamic javascript code during compile time.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The difference is that the files generated by "),e("code",[this._v("enhanceAppFiles")]),this._v(" will be loaded and applied automatically when the application is initialized on the client side. While the files generated by "),e("code",[this._v("clientDynamicModules")]),this._v(" needs to be imported as "),e("code",[this._v("@dynamic/xxx")]),this._v(" by the users themselves.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Import by entry file automatically.")]),t._v("\n  enhanceAppFiles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'constans-a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`...`")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Need to use via: import '@dynamic/constans-b'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("clientDynamicModules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'constans-b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`...`")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"when-do-i-need-to-use-enhanceappfiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-do-i-need-to-use-enhanceappfiles","aria-hidden":"true"}},[this._v("#")]),this._v(" When do I need to use "),e("code",[this._v("enhanceAppFiles")]),this._v("?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("I want to execute some code on the client side automatically.")]),this._v(" "),e("li",[this._v("I don't have need for reuse of this module.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"when-do-i-need-to-use-clientdynamicmodules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-do-i-need-to-use-clientdynamicmodules","aria-hidden":"true"}},[this._v("#")]),this._v(" When do I need to use "),e("code",[this._v("clientDynamicModules")]),this._v("?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("I want to generate a dynamic module that needs to be invoked at a specific time.")]),this._v(" "),e("li",[this._v("I want to use this module in different modules.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Example:")])])}],!1,null,null,null);e.default=a.exports}}]);