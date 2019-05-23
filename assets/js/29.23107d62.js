(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{251:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("h3",{attrs:{id:"ga"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ga","aria-hidden":"true"}},[e._v("#")]),e._v(" ga "),s("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),s("p",[e._v("GA has been separated into a standalone plugin "),s("router-link",{attrs:{to:"./../plugin/official/plugin-google-analytics.html"}},[e._v("@vuepress/plugin-google-analytics")]),e._v(".")],1),e._v(" "),s("p",[e._v("::: upgrade")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._m(4),e._v(" "),e._m(5),s("p",[e._v(":::")]),e._v(" "),s("h3",{attrs:{id:"markdown-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#markdown-config","aria-hidden":"true"}},[e._v("#")]),e._v(" markdown.config "),s("Badge",{attrs:{text:"renamed"}})],1),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),s("p",[e._v(":::")]),e._v(" "),s("h3",{attrs:{id:"serviceworker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker","aria-hidden":"true"}},[e._v("#")]),e._v(" serviceWorker "),s("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),s("p",[e._v("Service Worker related features have been separated into a standalone plugin "),s("router-link",{attrs:{to:"./../plugin/official/plugin-pwa.html"}},[e._v("@vuepress/plugin-pwa")]),e._v(".")],1),e._v(" "),s("p",[e._v("::: upgrade\nSee: "),s("router-link",{attrs:{to:"./../plugin/official/plugin-pwa.html#migration-from-0-x"}},[e._v("@vuepress/plugin-pwa > Migration from 0.x")]),e._v("\n:::")],1),e._v(" "),e._m(9),e._v(" "),s("h3",{attrs:{id:"vuepress-override-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-override-styl","aria-hidden":"true"}},[e._v("#")]),e._v(" "),s("code",[e._v(".vuepress/override.styl")]),e._v(" "),s("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("::: upgrade\nSee: "),s("router-link",{attrs:{to:"./../config/#palette-styl"}},[e._v("Config > palette.styl")]),e._v("\n:::")],1),e._v(" "),s("h3",{attrs:{id:"vuepress-style-styl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-style-styl","aria-hidden":"true"}},[e._v("#")]),e._v(" "),s("code",[e._v(".vuepress/style.styl")]),e._v(" "),s("Badge",{attrs:{text:"replaced"}})],1),e._v(" "),e._m(11),e._v(" "),s("p",[e._v("::: upgrade\nSee: "),s("router-link",{attrs:{to:"./../config/#index-styl"}},[e._v("Config > index.styl")]),e._v("\n:::")],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"migration-from-0-x"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migration-from-0-x","aria-hidden":"true"}},[this._v("#")]),this._v(" Migration from 0.x")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"site-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#site-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Site Config")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Install "),t("code",[this._v("@vuepress/plugin-google-analytics")]),this._v(":")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yarn add -D @vuepress/plugin-google-analytics@next\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# OR npm install -D @vuepress/plugin-google-analytics@next")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("Update "),t("code",[this._v("vuepress/config.js")]),this._v(":")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[e._v("module.exports = {\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-  ga: 'UA-12345678-9'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+  plugins: [")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+    ['@vuepress/google-analytics', {")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+      ga: 'UA-12345678-9'")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+    }]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+ ]")]),e._v("\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Using "),t("code",[this._v("extendMarkdown")]),this._v("：。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("::: upgrade\nUpdate "),t("code",[this._v("vuepress/config.js")]),this._v(":")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[e._v("// vuepress/config.js\nmodule.exports = {\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-  markdown: {")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-    config(md) { /* ... */ }")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("-  },")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[e._v("+  extendMarkdown(md) { /* ... */ }")]),e._v("\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"default-theme-config"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-theme-config","aria-hidden":"true"}},[this._v("#")]),this._v(" Default Theme Config")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Replaced by "),t("code",[this._v(".vuepress/styles/palette.styl")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Replaced by "),t("code",[this._v(".vuepress/styles/index.styl")]),this._v(".")])}],!1,null,null,null);t.default=r.exports}}]);