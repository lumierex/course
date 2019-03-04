(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{392:function(e,t,a){"use strict";a.r(t);var r=a(14),s=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-container","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-container",target:"_blank",rel:"noopener noreferrer"}},[e._v("@vuepress/plugin-container"),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("A plugin of registering markdown containers")])]),e._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install","aria-hidden":"true"}},[e._v("#")]),e._v(" Install")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("yarn add -D @vuepress/plugin-container@next\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# OR npm install -D @vuepress/plugin-container@next")]),e._v("\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@vuepress/container'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options","aria-hidden":"true"}},[e._v("#")]),e._v(" Options")]),e._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type","aria-hidden":"true"}},[e._v("#")]),e._v(" type")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("This is a required option.")])]),e._v(" "),a("p",[e._v("The type for the container. For example, if "),a("code",[e._v("type")]),e._v(" was set to "),a("code",[e._v("foo")]),e._v(", only the following syntax will be parsed as a container:")]),e._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[e._v("::: foo bar\nwrite something here ~\n:::\n")])])]),a("h3",{attrs:{id:"defaulttitle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaulttitle","aria-hidden":"true"}},[e._v("#")]),e._v(" defaultTitle")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: the upper case of "),a("code",[e._v("type")])])]),e._v(" "),a("p",[e._v("The default title for the container. If no title was provided, "),a("code",[e._v("defaultTitle")]),e._v(" will be showed as the title of the container.")]),e._v(" "),a("h3",{attrs:{id:"before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before","aria-hidden":"true"}},[e._v("#")]),e._v(" before")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string | Function")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("String to be placed before the block. If specified as a function, a argument "),a("code",[e._v("info")]),e._v(" will be passed to it. (In the example above, "),a("code",[e._v("info")]),e._v(" will be "),a("code",[e._v("bar")]),e._v(".) If specified, it will override "),a("code",[e._v("defaultTitle")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after","aria-hidden":"true"}},[e._v("#")]),e._v(" after")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string | Function")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("String to be placed after the block. If specified as a function, a argument "),a("code",[e._v("info")]),e._v(" will be passed to it. (In the example above, "),a("code",[e._v("info")]),e._v(" will be "),a("code",[e._v("bar")]),e._v(".) If specified, it will override "),a("code",[e._v("defaultTitle")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"validate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate","aria-hidden":"true"}},[e._v("#")]),e._v(" validate")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Function")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("A function to validate tail after opening marker, should return "),a("code",[e._v("true")]),e._v(" on success.")]),e._v(" "),a("h3",{attrs:{id:"render"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#render","aria-hidden":"true"}},[e._v("#")]),e._v(" render")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("Function")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("undefined")])])]),e._v(" "),a("p",[e._v("The renderer function for opening/closing tokens. If specified, it will override "),a("code",[e._v("before")]),e._v(", "),a("code",[e._v("after")]),e._v(" and "),a("code",[e._v("defaultTitle")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"marker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#marker","aria-hidden":"true"}},[e._v("#")]),e._v(" marker")]),e._v(" "),a("ul",[a("li",[e._v("Type: "),a("code",[e._v("string")])]),e._v(" "),a("li",[e._v("Default: "),a("code",[e._v("':'")])])]),e._v(" "),a("p",[e._v("The character to use in delimiter.")])])},[],!1,null,null,null);t.default=s.exports}}]);