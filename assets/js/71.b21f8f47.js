(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{202:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("在 1.x.x 版本之前，VuePress 会检索文档源目录下的所有 markdown 文件并按照文件的层次结构去定义页面链接。\n比如你有以下的文件结构：")]),t._v(" "),t._m(2),s("p",[t._v("那么你就会获得以下的可用页面：")]),t._v(" "),t._m(3),s("p",[t._v("看起来我们已经发现了 blog 的阴暗面。让我们继续看下去。")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("一个永久链接是一个旨在未来很多年里维持不变的 URL，由此产生一个发生链接失效（link rot"),s("sup",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Link_rot",target:"_blank",rel:"noopener noreferrer"}},[t._v("1"),s("OutboundLink")],1)]),t._v("）的可能性较小的超链接。VuePress 支持一种灵活的方式去生成固定链接，这种方式允许你使用各种模板变量。")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("你可以使用全局配置来向所有页面应用永久链接：")]),t._v(" "),t._m(7),s("p",[t._v("另外，你也可以只为单独一个页面去设置永久链接。这种方式比全局配置拥有更高的优先级。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),s("table",[t._m(11),t._v(" "),s("tbody",[t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("tr",[s("td",[t._v(":regular")]),t._v(" "),s("td",[t._v("VuePress默认的生成永久链接的方式，具体实现看 "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/shared-utils/src/fileToPath.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1)])])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"永久链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#永久链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 永久链接")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景","aria-hidden":"true"}},[this._v("#")]),this._v(" 背景")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── package.json\n└── source\n    ├── _post\n    │   └── intro-vuepress.md\n    ├── index.md\n    └── tags.md\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("/source/\n/source/tags.html\n/source/_post/intro-vuepress.html\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"永久链接-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#永久链接-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 永久链接")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("默认的永久链接是"),e("code",[this._v("/:regular")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"配置永久链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置永久链接","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置永久链接")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  permalink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/:year/:month/:day/:slug"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("📝 "),e("strong",[this._v("hello.md")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-markdown extra-class"},[e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[e("span",{pre:!0,attrs:{class:"token hr punctuation"}},[this._v("---")]),this._v("\ntitle: Hello World\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[this._v("permalink: /hello-world\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("---")])]),this._v("\n\nHello!\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"模板变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模板变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 模板变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("变量")]),this._v(" "),e("th",[this._v("介绍")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":year")]),this._v(" "),e("td",[this._v("文章发布的年份 (4数字)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":month")]),this._v(" "),e("td",[this._v("文章发布的月份 (2数字)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":i_month")]),this._v(" "),e("td",[this._v("文章发布的月份 (前面不带0)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":day")]),this._v(" "),e("td",[this._v("文章发布的日份 (2数字)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":i_day")]),this._v(" "),e("td",[this._v("文章发布的日份 (前面不带0)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v(":slug")]),this._v(" "),e("td",[this._v("蛞蝓化文件路径 (不带扩展名)")])])}],!1,null,null,null);e.default=a.exports}}]);