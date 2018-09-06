(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{81:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("Context data is data that is made available to your "),s("router-link",{attrs:{to:"./configuration-files.html"}},[t._v("view templates")]),t._v(" when they are rendered.")],1),s("p",[t._v("It is typically defined within a "),s("router-link",{attrs:{to:"./configuration-files.html"}},[t._v("configuration file")]),t._v(", although documentation pages can opt to define it in in a "),s("router-link",{attrs:{to:"../documentation/#yaml-front-matter"}},[t._v("YAML front-matter section")]),t._v(" instead if desired.")],1),s("p",[t._v("Context data can consist of simple data types such strings, booleans, numbers, arrays and objects. It can also contain Promises (which will be resolved before context data is made available for use) and special 'static data references' that allow referencing of context data from other components or documentation pages.")]),t._m(1),t._m(2),t._m(3),s("p",[t._v("Any data set within this context object will then be made available to that item's "),s("router-link",{attrs:{to:"./view-templates.html"}},[t._v("view template")]),t._v(" as variables. For example:")],1),t._m(4),t._m(5),t._m(6),t._m(7),s("p",[t._v("This is made possible using the "),s("code",[t._v("@handle")]),s("router-link",{attrs:{to:"./naming.html#referencing-other-items"}},[t._v("reference syntax")]),t._v(" in your context data definitions. For example, if we create a configuration file for a component called "),s("code",[t._v("list-items")]),t._v(" that looks like this:")],1),t._m(8),t._m(9),t._m(10),s("p",[t._v("You can also choose to access only part of another component's context data by using a dot-notation string after the main identifier handle:")]),t._m(11),t._m(12),t._m(13),s("p",[t._v("Fractal provides the option "),s("router-link",{attrs:{to:"./configuration-files.html#javascript-module-format"}},[t._v("to use CommonJS-style modules")]),t._v(" to define configuration data for components and documentation pages. Whilst slightly more complex than using JSON or YAML as a data format, it has the advantage of letting you be able to use the full power of JavaScript to generate context data for your components.")],1),t._m(14),s("p",[t._v("You can use any NodeJS functionality or NPM modules you like in your configuration data files, so the possibilities for generating dynamic data are effectively endless!")]),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),s("p",[t._v("Obviously this is a simple example, but the principle can often be useful when you want to preview components with large amounts of data in them.")]),t._m(21),s("p",[t._v("If you already have an API for your site or application, and you want to preview your components using 'real' data (or indeed if you want to use content from any other APIs) then you can handle that in your component configuration files too.")]),t._m(22),s("p",[t._v("In the following example, we are going to make a request to our fictional members API endpoint, which returns a JSON-encoded list of members.")]),t._m(23),t._m(24)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"context-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Context Data")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"defining-using-context-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-using-context-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining & using context data")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To define context data for a component or documentation page you should to set a "),a("code",[this._v("context")]),this._v(" object in the relevant configuration file:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// my-component.config.json")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"context"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// context data goes here")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// users.config.json")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token string"}},[t._v('"context"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v('"title"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Our users"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{attrs:{class:"token string"}},[t._v('"users"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token string"}},[t._v('"name"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Mickey Mouse"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token string"}},[t._v('"email"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"mickey@mouse.com"')]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{attrs:{class:"token string"}},[t._v('"name"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Daffy Duck"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token string"}},[t._v('"email"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"daffy@duck.com"')]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-handlebars"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- users.hbs --\x3e")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("title")]),t._v(" "),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token block keyword"}},[t._v("#each")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("users")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("name")]),t._v(" "),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" "),s("span",{attrs:{class:"token variable"}},[t._v("email")]),t._v(" "),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token handlebars language-handlebars"}},[s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),s("span",{attrs:{class:"token block keyword"}},[t._v("/each")]),s("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"static-data-references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static-data-references","aria-hidden":"true"}},[this._v("#")]),this._v(" Static data references")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Context data object also support the use of "),a("em",[this._v("data references")]),this._v(". These are special references, resolved at runtime, that allow you to 'point' to other item's context data.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("context")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" My favourite list items\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("items")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" one\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" two\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" three\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" four\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("It is then possible to access the "),a("code",[this._v("list-items")]),this._v(" component's context data in another component as follows:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("context")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("list")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@list-items'")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# When resolved, the above context data (which will get passed to the template when rendered) will look as follows:")]),t._v("\n\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("context")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("list")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" My favourite list items\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("items")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" one\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" two\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" three\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" four\n")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("context")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("list")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@list-items.items'")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("# resolves to:")]),t._v("\n\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("context")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("list")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" one\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" two\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" three\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" four\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),a("p",[this._v("The reference syntax only applies to items of "),a("strong",[this._v("the same type")]),this._v(" - a component cannot access a documentation page's context data (or vice versa).")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"dynamic-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-data","aria-hidden":"true"}},[this._v("#")]),this._v(" Dynamic data")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("This can be handy if you want to provide data to your components from an API, or to use a library such as "),a("a",{attrs:{href:"https://github.com/marak/Faker.js",target:"_blank",rel:"noopener noreferrer"}},[this._v("Faker")]),this._v(" to generate placeholder data for your components.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"generating-dynamic-data-with-faker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-dynamic-data-with-faker","aria-hidden":"true"}},[this._v("#")]),this._v(" Generating dynamic data with Faker")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("To save us hard-coding lots of context data into our data file, we can use the excellent "),a("a",{attrs:{href:"https://github.com/marak/Faker.js",target:"_blank",rel:"noopener noreferrer"}},[this._v("faker.js")]),this._v(" library to generate a list of members for us.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("First you'll need to make sure you have installed Faker in your component library project - "),a("code",[this._v("npm install faker --save")]),this._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("And now let's look at an example "),a("code",[this._v("member-list.config.js")]),this._v(" file and see how we can use Faker to dynamically generate a list of members for us.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// member-list.config.js")]),t._v("\n"),s("span",{attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" faker "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'faker'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// require the faker module")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" memberCount "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// how many members we should generate data for")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" memberData "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" memberCount"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    memberData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" faker"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("findName")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// generate a random name")]),t._v("\n        email"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" faker"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("internet"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("email")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{attrs:{class:"token comment"}},[t._v("// generate a random email address")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcontext"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tmembers"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" memberData "),s("span",{attrs:{class:"token comment"}},[t._v("// use our generated list of members as context data for our template.")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("When our component is now rendered with this data, we will get a list of ten members, all with realistic names and email addresses. And if we want to generate 100 list items instead, all we have to do is update the value of the "),a("code",[this._v("memberCount")]),this._v(" constant to 100.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"using-data-from-an-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-data-from-an-api","aria-hidden":"true"}},[this._v("#")]),this._v(" Using data from an API")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("The key to this is that if any values in the context data are "),a("a",{attrs:{href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[this._v("Promises")]),this._v(", Fractal will first wait for those promises to be resolved before rendering the template using the context data. So we can use a Promise-based request module (such as "),a("a",{attrs:{href:"https://github.com/request/request-promise",target:"_blank",rel:"noopener noreferrer"}},[this._v("request-promise")]),this._v(") to make API requests and then just pass the returned promise into our context data object.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("// member-list.config.js")]),t._v("\n"),s("span",{attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("require")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'request-promise'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// require the request-promise module")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// make the request to the API, returns a Promise")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("request")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    uri"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'http://www.mysite-api.com/members'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    json"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("// do some post-processing on the response to wrangle it into the correct format")]),t._v("\nresponse"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("membersApiData"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" memberData "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" member "),s("span",{attrs:{class:"token keyword"}},[t._v("of")]),t._v(" membersApiData"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        memberData"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("push")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            name"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`")]),s("span",{attrs:{class:"token interpolation"}},[s("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("member"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstName"),s("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{attrs:{class:"token string"}},[t._v(" ")]),s("span",{attrs:{class:"token interpolation"}},[s("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("member"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastName"),s("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{attrs:{class:"token string"}},[t._v("`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            email"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" member"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("emailAddress\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" memberData"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tcontext"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tmembers"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" response "),s("span",{attrs:{class:"token comment"}},[t._v("// use the response as context data for our template.")]),t._v("\n\t"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Now when the component is rendered, it will first make an API request to the endpoint and wait for the Promise (and its associated "),a("code",[this._v("then()")]),this._v(" step) to be resolved before using the output to pass as context data to the template.")])}],!1,null,null,null);a.default=e.exports}}]);