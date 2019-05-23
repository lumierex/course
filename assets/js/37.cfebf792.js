(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{264:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"vuepress-plugin-container"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container","aria-hidden":"true"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-container",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-container"),s("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),s("p",[t._v("The character to use in delimiter.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("A plugin of registering markdown containers")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[this._v("#")]),this._v(" Install")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("yarn add -D @vuepress/plugin-container@next\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# OR npm install -D @vuepress/plugin-container@next")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/container'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[this._v("#")]),this._v(" Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type","aria-hidden":"true"}},[this._v("#")]),this._v(" type")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),this._v(" "),e("li",[this._v("This is a required option.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The type for the container. For example, if "),e("code",[this._v("type")]),this._v(" was set to "),e("code",[this._v("foo")]),this._v(", only the following syntax will be parsed as a container:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[this._v("::: foo bar\nwrite something here ~\n:::\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"defaulttitle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defaulttitle","aria-hidden":"true"}},[this._v("#")]),this._v(" defaultTitle")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),this._v(" "),e("li",[this._v("Default: the upper case of "),e("code",[this._v("type")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The default title for the container. If no title was provided, "),e("code",[this._v("defaultTitle")]),this._v(" will be showed as the title of the container.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"before"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#before","aria-hidden":"true"}},[this._v("#")]),this._v(" before")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string | Function")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("String to be placed before the block. If specified as a function, a argument "),s("code",[t._v("info")]),t._v(" will be passed to it. (In the example above, "),s("code",[t._v("info")]),t._v(" will be "),s("code",[t._v("bar")]),t._v(".) If specified, it will override "),s("code",[t._v("defaultTitle")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"after"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#after","aria-hidden":"true"}},[this._v("#")]),this._v(" after")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string | Function")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("String to be placed after the block. If specified as a function, a argument "),s("code",[t._v("info")]),t._v(" will be passed to it. (In the example above, "),s("code",[t._v("info")]),t._v(" will be "),s("code",[t._v("bar")]),t._v(".) If specified, it will override "),s("code",[t._v("defaultTitle")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"validate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#validate","aria-hidden":"true"}},[this._v("#")]),this._v(" validate")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Function")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A function to validate tail after opening marker, should return "),e("code",[this._v("true")]),this._v(" on success.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"render"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#render","aria-hidden":"true"}},[this._v("#")]),this._v(" render")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("Function")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("undefined")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The renderer function for opening/closing tokens. If specified, it will override "),e("code",[this._v("before")]),this._v(", "),e("code",[this._v("after")]),this._v(" and "),e("code",[this._v("defaultTitle")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"marker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#marker","aria-hidden":"true"}},[this._v("#")]),this._v(" marker")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Type: "),e("code",[this._v("string")])]),this._v(" "),e("li",[this._v("Default: "),e("code",[this._v("':'")])])])}],!1,null,null,null);e.default=r.exports}}]);