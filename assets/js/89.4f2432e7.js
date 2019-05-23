(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{183:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"vuepress-plugin-pwa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-pwa","aria-hidden":"true"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-pwa",target:"_blank",rel:"noopener noreferrer"}},[t._v("@vuepress/plugin-pwa"),e("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("如果设置为 "),e("code",[t._v("true")]),t._v("，VuePress 将自动生成并注册一个 "),e("a",{attrs:{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Service Worker"),e("OutboundLink")],1),t._v("，用于缓存页面的内容以供离线使用（仅会在生产环境中启用）。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[t._v("PWA NOTES")]),t._v(" "),e("p",[e("code",[t._v("serviceWorker")]),t._v(" 选项仅仅用来控制 service worker，为了让你的网站完全地兼容 PWA，你需要在 "),e("code",[t._v(".vuepress/public")]),t._v(" 提供 Manifest 和 icons，更多细节，请参见 "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN docs about the Web App Manifest"),e("OutboundLink")],1),t._v(".\n此外，只有您能够使用 SSL 部署您的站点时才能启用此功能，因为 service worker 只能在 HTTPs 的 URL 下注册。")])]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),e("blockquote",[e("p",[t._v("如果没有“刷新”按钮，则只有在所有的 "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Clients",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clients"),e("OutboundLink")],1),t._v(" 被关闭后，新的 Service Worker 才会处于活动状态。这意味着用户在关闭你网站的所有标签之前无法看到新内容。但是 "),e("code",[t._v("refresh")]),t._v(" 按钮会立即激活新的 Service Worker。")])]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),e("p",[t._v("用于替换默认弹出组件的自定义组件。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),e("p",[t._v("如果你在 "),e("router-link",{attrs:{to:"./../../guide/i18n.html"}},[t._v("i18n")]),t._v(" 模式下:")],1),t._v(" "),t._m(24),e("p",[t._v("值得一提的是本插件已经内置了上述的 i18n 配置，所以如果你想直接使用默认的 i18n，你可以将上面的配置缩写为：")]),t._v(" "),t._m(25),e("p",[t._v("欢迎提交 PR 以增加默认的 "),e("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/plugin-pwa/lib/i18n.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("i18n 配置"),e("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(26),t._v(" "),e("p",[t._v("默认的 SW-Update Popup 组件提供了一个默认插槽，使您能够完全控制弹窗的外观。")]),t._v(" "),t._m(27),t._v(" "),t._m(28),e("p",[t._v("接着，更新你的插件配置：")]),t._v(" "),t._m(29),t._m(30),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"./../../guide/using-vue.html#使用组件"}},[t._v("VuePress > 使用组件")])],1),t._v(" "),e("li",[e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue > 作用域插槽"),e("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("PWA 插件")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("yarn add -D @vuepress/plugin-pwa@next\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# OR npm install -D @vuepress/plugin-pwa@next")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/pwa'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选项","aria-hidden":"true"}},[this._v("#")]),this._v(" 选项")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"serviceworker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serviceworker","aria-hidden":"true"}},[this._v("#")]),this._v(" serviceWorker")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("类型: "),s("code",[this._v("boolean")])]),this._v(" "),s("li",[this._v("默认值: "),s("code",[this._v("true")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("有一个别名化的模块 "),s("code",[this._v("@sw-event")]),this._v(" 模块将会 emit 以下事件：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("sw-ready")])]),t._v(" "),e("li",[e("code",[t._v("sw-cached")])]),t._v(" "),e("li",[e("code",[t._v("sw-updated")])]),t._v(" "),e("li",[e("code",[t._v("sw-offline")])]),t._v(" "),e("li",[e("code",[t._v("sw-error")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"updatepopup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updatepopup","aria-hidden":"true"}},[this._v("#")]),this._v(" updatePopup")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("类型: "),s("code",[this._v("boolean|popupConfig")])]),this._v(" "),s("li",[this._v("默认值: "),s("code",[this._v("undefined")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("类型 "),s("code",[this._v("popupConfig")]),this._v(" 的定义如下：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("normalPopupConfig")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  message"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// defaults to 'New content is available.'")]),t._v("\n  buttonText"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// defaults to 'Refresh'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("localedPopupConfig")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("localePath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normalPopupConfig\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" popupConfig "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" normalPopupConfig "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" localedPopupConfig\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("本选项开启了一个用于刷新内容的弹窗。这个弹窗将会在站点有内容更新时显示出来，并提供了一个 "),s("code",[this._v("refresh")]),this._v(" 按钮，允许用户立即刷新内容。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"popupcomponent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#popupcomponent","aria-hidden":"true"}},[this._v("#")]),this._v(" popupComponent")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("类型: "),s("code",[this._v("string")])]),this._v(" "),s("li",[this._v("默认值: "),s("code",[this._v("undefined")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("参考:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89-sw-update-popup-%E7%9A%84-ui"}},[this._v("自定义 SW-Update Popup")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"从-0-x-迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-0-x-迁移","aria-hidden":"true"}},[this._v("#")]),this._v(" 从 0.x 迁移")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"service-worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#service-worker","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Worker")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[this._v("module.exports = {\n"),s("span",{pre:!0,attrs:{class:"token deleted"}},[this._v("- serviceWorker: true,")]),this._v("\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[this._v("+ plugins: ['@vuepress/pwa']")]),this._v("\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"sw-update-popup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sw-update-popup","aria-hidden":"true"}},[this._v("#")]),this._v(" SW-Update Popup")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[t._v("module.exports = {\n  themeConfig: {\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-   serviceWorker: {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-     updatePopup: { ")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v('-        message: "New content is available.", ')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v('-        buttonText: "Refresh" ')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-     }")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-   }")]),t._v("\n  },\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+  plugins: {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+   '@vuepress/pwa': {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+      serviceWorker: true,")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+      updatePopup: {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v('+        message: "New content is available.",')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v('+        buttonText: "Refresh"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+      }")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+    }")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+ }")]),t._v("\n}\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-diff extra-class"},[e("pre",{pre:!0,attrs:{class:"language-diff"}},[e("code",[t._v("module.exports = {\n  themeConfig: {\n    '/': {\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-     serviceWorker: {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-       updatePopup: {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v('-         message: "New content is available.",')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v('-         buttonText: "Refresh"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-       }")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-     }")]),t._v("\n    },\n    '/zh/': {\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-     serviceWorker: {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-       updatePopup: {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v('-         message: "发现新内容可用",')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v('-         buttonText: "刷新"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-       }")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token deleted"}},[t._v("-     }")]),t._v("\n    }\n  },\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+  plugins: {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+    '@vuepress/pwa': {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+      serviceWorker: true,")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+      updatePopup: {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+        '/': {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v('+          message: "New content is available.",')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v('+          buttonText: "Refresh"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+        },")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+        '/zh/': {")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v('+          message: "发现新内容可用",')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v('+          buttonText: "刷新"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+        }")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+      }")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+    }")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token inserted"}},[t._v("+  }")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/pwa'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      serviceWorker"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      updatePopup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"自定义-sw-update-popup-的-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义-sw-update-popup-的-ui","aria-hidden":"true"}},[this._v("#")]),this._v(" 自定义 SW-Update Popup 的 UI")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先，您需要在 "),s("code",[this._v(".vuepress/components")]),this._v(" 中创建一个全局组件（例如"),s("code",[this._v("MySWUpdatePopup")]),this._v(")。 一个基于默认组件创建的简单组件如下：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-vue extra-class"},[e("pre",{pre:!0,attrs:{class:"language-vue"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SWUpdatePopup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("slot-scope")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{ enabled, reload, message, buttonText }"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("my-sw-update-popup"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      {{ message }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("br")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("reload"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ buttonText }}"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("SWUpdatePopup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SWUpdatePopup "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuepress/plugin-pwa/lib/SWUpdatePopup.vue'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  components"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" SWUpdatePopup "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token style language-css"}},[t._v("\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-sw-update-popup")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fixed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px solid #3eaf7c"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-sw-update-popup button")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #fefefe"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-diff extra-class"},[s("pre",{pre:!0,attrs:{class:"language-diff"}},[s("code",[this._v("module.exports = {\n   plugins: {\n    '@vuepress/pwa': {\n       serviceWorker: true,\n"),s("span",{pre:!0,attrs:{class:"token inserted"}},[this._v("+      popupComponent: 'MySWUpdatePopup',")]),this._v("\n       updatePopup: true\n     }\n  }\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("参考:")])])}],!1,null,null,null);s.default=n.exports}}]);