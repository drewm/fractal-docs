(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{71:function(t,e,n){"use strict";n.r(e);var i=n(0),s=Object(i.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("Collections are just groups of related components or documentation pages. When you create a directory that contains one or more components or pages inside it, you have created a collection.")]),n("p",[t._v("However beyond just grouping items, collections are useful because they can have their own "),n("router-link",{attrs:{to:"../core-concepts/configuration-files.html"}},[t._v("configuration files")]),t._v(" within which you can specify properties that will then be "),n("strong",[t._v("applied to all child items")]),t._v(" within that collection, saving you from having to specify them on each item. Of course, individual components, pages (or indeed sub-collections) can still "),n("router-link",{attrs:{to:"../core-concepts/configuration-files.html#configuration-inheritance"}},[t._v("override these defaults")]),t._v(" on a case-by-case basis if needed.")],1),t._m(1),t._m(2),t._m(3),t._m(4),n("p",[t._v("A sample collection configuration file contents might look like this:")]),t._m(5),t._m(6),n("p",[t._v("The "),n("router-link",{attrs:{to:"./configuration-reference.html"}},[t._v("collection configuration reference")]),t._v(" contains full details of all the collection properties available for use.")],1),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"collections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collections","aria-hidden":"true"}},[this._v("#")]),this._v(" Collections")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration files")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A collection configuration file follows the same rules as component and documentation page configuration files. It must reside in the collection directory and have the same name as the directory itself, followed by "),e("code",[this._v(".config.{js|json|yml}")]),this._v(", depending on the format.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("So a component collection called 'layouts' could have a YAML configuration file called "),e("code",[this._v("layouts.config.yml")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── components\n│   ├── layouts\n│   │   ├── layouts.config.yml\n│   │   ├── full-screen.hbs\n│   │   └── sidebar.hbs\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{attrs:{class:"token key atrule"}},[t._v("title")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Website Layouts"')]),t._v("\n"),n("span",{attrs:{class:"token key atrule"}},[t._v("status")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"ready"')]),t._v("\n"),n("span",{attrs:{class:"token key atrule"}},[t._v("context")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{attrs:{class:"token key atrule"}},[t._v("title")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"My Website"')]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"available-config-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-config-properties","aria-hidden":"true"}},[this._v("#")]),this._v(" Available config properties")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"ordering-collections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ordering-collections","aria-hidden":"true"}},[this._v("#")]),this._v(" Ordering collections")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A collection can be given an order by which to sort it with regards to its siblings. This can be done by using the "),e("code",[this._v("order")]),this._v(" property in the collection's configuration file, or it can be done by prefixing the collection directory name with a "),e("strong",[this._v("two-digit number")]),this._v(" (with leading zero, if required) "),e("strong",[this._v("followed by a hyphen")]),this._v(". For example:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── components\n│   ├── 01-patterns\n│   │   └── article.hbs\n│   └── 02-layouts\n│       └── sidebar.hbs\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hiding-collections"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hiding-collections","aria-hidden":"true"}},[this._v("#")]),this._v(" Hiding collections")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A collection can be hidden from navigation and listings by using the "),e("code",[this._v("hidden")]),this._v(" property in its configuration file or by prefixing the collection directory name with an underscore like this:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── components\n│   ├── _layouts\n│   │   └── sidebar.hbs\n│   └── patterns\n│       └── article.hbs\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In this case the "),e("code",[this._v("layouts")]),this._v(" collection would not show up in any navigation, but the "),e("code",[this._v("patterns")]),this._v(" collection would.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Note")]),e("p",[this._v("Any components or variants "),e("em",[this._v("within")]),this._v(" hidden collections can still be referenced by other components, included in templates etc.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),n("p",[t._v("You can also combine "),n("em",[t._v("ordering")]),t._v(" and "),n("em",[t._v("hiding")]),t._v(" by constructing a directory name such as "),n("code",[t._v("_01-patterns")]),t._v(".")])])}],!1,null,null,null);e.default=s.exports}}]);