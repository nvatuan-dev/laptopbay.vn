module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/article","2":"components/article-grid","3":"components/brand-card","4":"components/brand-card-list","5":"components/carousel","6":"components/glass-morphic-product","7":"components/glass-morphic-product-list","8":"components/mega-menu","9":"components/menu-side","10":"components/mobile-card","11":"components/mobile-card-list","12":"components/mobile-menu","13":"components/product","14":"components/product-card","15":"components/product-card-list","16":"components/product-carousel","17":"components/product-list","18":"components/promotion","19":"components/rounded-list","20":"components/side-gallery","21":"components/side-gallery-verticle","22":"components/side-right-bar","23":"components/testimonials","24":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vue-carousel-card");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Button.vue?vue&type=template&id=0e356a9c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex justify-center rounded-lg text-lg",attrs:{"role":"group"}},[_vm._ssrNode("<div class=\"inline-flex justify-center pt-0.5 space-x-4\"><button class=\"bg-white text-blue-500 text-bold hover:bg-blue-500 hover:text-white border border-blue-500 rounded-full px-4 py-2 mx-0 outline-none focus:shadow-outline\">Dell</button> <button class=\"bg-white text-blue-500 text-bold hover:bg-blue-500 hover:text-white border border-blue-500 rounded-full px-4 py-2 mx-0 outline-none focus:shadow-outline\">Thinkpad</button> <button class=\"bg-white text-blue-500 text-bold hover:bg-blue-500 hover:text-white border border-blue-500 rounded-full px-4 py-2 mx-0 outline-none focus:shadow-outline\">HP</button></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Button.vue?vue&type=template&id=0e356a9c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Button.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6189552c"
  
)

/* harmony default export */ var Button = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Button: __webpack_require__(8).default})


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopNav.vue?vue&type=template&id=0cc7aa5c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"block md:flex md:flex-wrap items-center justify-between rounded-xl w-full md:px-2 py-3 bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200 border-blue-400 border-4"},[_vm._ssrNode("<div class=\"block py-2 px-4 mx-auto justify-end lg:flex lg:flex-inline lg:items-center justify-between border-blue-400\">","</div>",[_vm._ssrNode("<div class=\"w-full relative flex justify-between pl-12 md:pl-8 lg:w-auto lg:static lg:block lg:justify-start\"><img"+(_vm._ssrAttr("src",__webpack_require__(22)))+" class=\"h-16 w-24 md:h-24 md:w-32 inline-block\"> <button type=\"button\" class=\"cursor-pointer static text-xl leading-none px-3 py-1 border border-solid border-transparent inline-block md:hidden outline-none focus:outline-none\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-8 w-8\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 6h16M4 12h16M4 18h16\"></path></svg></button></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("lg:flex lg:flex-grow justify-items-start bg-white lg:bg-transparent lg:shadow-none",{'hidden': !_vm.showMenu, 'flex': _vm.showMenu}))+">","</div>",[_c('el-input',{staticClass:"bg-white border-blue-400 rounded-lg hidden lg:inline-block lg:px-8 lg:py-4 xl:px-16 ",attrs:{"placeholder":"Tìm sản phẩm"}}),_vm._ssrNode(" <ul class=\"flex flex-col lg:flex-row list-none lg:ml-auto md:pl-32\"><li class=\"flex items-center\"><a href class=\"lg:text-blue-400 lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-user\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <circle cx=\"12\" cy=\"7\" r=\"4\"></circle> <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path></svg> <span class=\"lg:hidden inline-flex ml-2\">Đăng nhập</span> <p class=\"ml-2 hidden lg:flex text-sm \">Đăng nhập</p></a></li> <li class=\"flex items-center\"><a href class=\"lg:text-blue-400 lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-user\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <circle cx=\"12\" cy=\"7\" r=\"4\"></circle> <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path></svg> <span class=\"lg:hidden inline-block ml-2\">Đăng nhập</span> <p class=\"ml-2 hidden lg:flex text-sm \">Đăng nhập</p></a></li> <li class=\"flex items-center\"><a href class=\"lg:text-blue-400 lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-user\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <circle cx=\"12\" cy=\"7\" r=\"4\"></circle> <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path></svg> <span class=\"lg:hidden inline-block ml-2\">Đăng nhập</span> <p class=\"ml-2 hidden lg:flex text-sm \">Đăng nhập</p></a></li> <li class=\"flex items-center\"><a href class=\"lg:text-blue-400 lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-user\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <circle cx=\"12\" cy=\"7\" r=\"4\"></circle> <path d=\"M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\"></path></svg> <span class=\"lg:hidden inline-flex ml-2\">Đăng nhập</span> <p class=\"ml-2 hidden lg:flex text-sm \">Đăng nhập</p></a></li></ul>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/TopNav.vue?vue&type=template&id=0cc7aa5c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TopNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TopNavvue_type_script_lang_js_ = ({
  data() {
    return {
      showMenu: false
    };
  },

  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    }
  }
});
// CONCATENATED MODULE: ./components/TopNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TopNavvue_type_script_lang_js_ = (TopNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/TopNav.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TopNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1cb3d874"
  
)

/* harmony default export */ var TopNav = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Button: __webpack_require__(8).default})


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("382a115c", content, true)

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("162ac6c2", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("53f61d5f", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=0e8da214&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"relative bg-gray-300 pt-8 pb-6"},[_vm._ssrNode("<div class=\"bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20\" style=\"height: 80px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\" version=\"1.1\" viewBox=\"0 0 2560 100\" x=\"0\" y=\"0\" class=\"absolute bottom-0 overflow-hidden\"><polygon points=\"2560 0 2560 100 0 100\" class=\"text-gray-300 fill-current\"></polygon></svg></div> <div class=\"container mx-auto px-4\"><div class=\"flex flex-wrap\"><div class=\"w-full lg:w-6/12 px-4\"><h4 class=\"text-3xl font-semibold\">Let's keep in touch!</h4> <h5 class=\"text-lg mt-0 mb-2 text-gray-700\">\n                Find us on any of these platforms, we respond 1-2 business days.\n            </h5> <div class=\"mt-6\"><button type=\"button\" class=\"bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"2 2 20 20\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-brand-twitter\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <path d=\"M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z\"></path></svg></button> <button type=\"button\" class=\"bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3\"><a href=\"https://www.facebook.com/nightbaronpro/\" target=\"_blank\"></a> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"2 2 20 20\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-brand-facebook\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <path d=\"M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3\"></path></svg> <i class=\"flex fab fa-facebook\"></i></button> <button type=\"button\" class=\"bg-white text-red-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"2 2 20 20\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-mail\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\"></rect> <polyline points=\"3 7 12 13 21 7\"></polyline></svg> <i class=\"flex fab fa-dribbble\"></i></button> <button type=\"button\" class=\"bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"2 2 20 20\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-brand-github\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <path d=\"M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5\"></path></svg></button></div></div> <div class=\"w-full lg:w-6/12 px-4\"><div class=\"flex flex-wrap items-top mb-6\"><div class=\"w-full lg:w-4/12 px-4 ml-auto\"><span class=\"block uppercase text-gray-600 text-sm font-semibold mb-2\">Useful Links</span> <ul class=\"list-unstyled\"><li><a href class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\">About Us</a></li> <li><a href class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\">Blog</a></li> <li><a href class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\">Github</a></li> <li><a href class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\">Free Products</a></li></ul></div> <div class=\"w-full lg:w-4/12 px-4\"><span class=\"block uppercase text-gray-600 text-sm font-semibold mb-2\">Other Resources</span> <ul class=\"list-unstyled\"><li><a href class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\">MIT License</a></li> <li><a href class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\">Terms &amp; Conditions</a></li> <li><a href class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\">Privacy Policy</a></li> <li><a href class=\"text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm\">Contact Us</a></li></ul></div></div></div></div> <hr class=\"my-6 border-gray-400\"> <div class=\"flex flex-wrap items-center md:justify-between justify-center\"><div class=\"w-full md:w-4/12 px-4 mx-auto text-center\"><div class=\"text-sm text-gray-600 font-semibold py-1\">"+_vm._ssrEscape("\n            Copyright © "+_vm._s(_vm.date)+" LaptopBay by\n            ")+"<a href=\"#\" class=\"text-gray-600 hover:text-gray-900\">laptopbay.vn</a>.\n        </div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=0e8da214&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  data() {
    return {
      date: new Date().getFullYear()
    };
  }

});
// CONCATENATED MODULE: ./components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0e888753"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Button: __webpack_require__(8).default,Footer: __webpack_require__(16).default})


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-tilt.js");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("element-ui");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/locale/lang/en");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Logo.4cd10da.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24);
module.exports = __webpack_require__(33);


/***/ }),
/* 24 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{\n  padding:1rem;\n  background:#f7f8fb;\n  color:#47494e;\n  text-align:center;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  font-family:sans-serif;\n  font-weight:100!important;\n  -ms-text-size-adjust:100%;\n  -webkit-text-size-adjust:100%;\n  -webkit-font-smoothing:antialiased;\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n.__nuxt-error-page .error{\n  max-width:450px\n}\n.__nuxt-error-page .title{\n  font-size:1.5rem;\n  margin-top:15px;\n  color:#47494e;\n  margin-bottom:8px\n}\n.__nuxt-error-page .description{\n  color:#7f828b;\n  line-height:21px;\n  margin-bottom:10px\n}\n.__nuxt-error-page a{\n  color:#7f828b!important;\n  text-decoration:none\n}\n.__nuxt-error-page .logo{\n  position:fixed;\n  left:12px;\n  bottom:12px\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{\n  position:fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:2px;\n  width:0;\n  opacity:1;\n  transition:width .1s,opacity .4s;\n  background-color:#000;\n  z-index:999999\n}\n.nuxt-progress.nuxt-progress-notransition{\n  transition:none\n}\n.nuxt-progress-failed{\n  background-color:red\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*! tailwindcss v2.1.2 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\n/**\n * Work around a Firefox/IE bug where the transparent `button` background\n * results in a loss of the default `button` focus styles.\n */\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * Make replaced elements `display: block` by default as that's\n * the behavior you want almost all of the time. Inspired by\n * CSS Remedy, with `svg` added as well.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block;\n  vertical-align: middle;\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.space-y-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0 !important;\n  margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse))) !important;\n  margin-bottom:calc(0.5rem * var(--tw-space-y-reverse)) !important;\n}\n\n.space-x-3 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0 !important;\n  margin-right:calc(0.75rem * var(--tw-space-x-reverse)) !important;\n  margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse))) !important;\n}\n\n.space-x-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0 !important;\n  margin-right:calc(1rem * var(--tw-space-x-reverse)) !important;\n  margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse))) !important;\n}\n\n.space-y-5 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0 !important;\n  margin-top:calc(1.25rem * calc(1 - var(--tw-space-y-reverse))) !important;\n  margin-bottom:calc(1.25rem * var(--tw-space-y-reverse)) !important;\n}\n\n.bg-transparent{\n  background-color:transparent !important;\n}\n\n.bg-black{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(0, 0, 0, var(--tw-bg-opacity)) !important;\n}\n\n.bg-white{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity)) !important;\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity)) !important;\n}\n\n.bg-gray-200{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity)) !important;\n}\n\n.bg-gray-300{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity)) !important;\n}\n\n.bg-blue-500{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity)) !important;\n}\n\n.bg-blue-600{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(37, 99, 235, var(--tw-bg-opacity)) !important;\n}\n\n.bg-blue-900{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(30, 58, 138, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-red-400:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(248, 113, 113, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-yellow-400:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(251, 191, 36, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-green-400:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(52, 211, 153, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-blue-500:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(59, 130, 246, var(--tw-bg-opacity)) !important;\n}\n\n.hover\\:bg-indigo-400:hover{\n  --tw-bg-opacity:1 !important;\n  background-color:rgba(129, 140, 248, var(--tw-bg-opacity)) !important;\n}\n\n.bg-gradient-to-r{\n  background-image:linear-gradient(to right, var(--tw-gradient-stops)) !important;\n}\n\n.from-yellow-200{\n  --tw-gradient-from:#fde68a !important;\n  --tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(253, 230, 138, 0)) !important;\n}\n\n.via-yellow-500{\n  --tw-gradient-stops:var(--tw-gradient-from), #f59e0b, var(--tw-gradient-to, rgba(245, 158, 11, 0)) !important;\n}\n\n.to-yellow-200{\n  --tw-gradient-to:#fde68a !important;\n}\n\n.bg-opacity-95{\n  --tw-bg-opacity:0.95 !important;\n}\n\n.border-transparent{\n  border-color:transparent !important;\n}\n\n.border-gray-400{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(156, 163, 175, var(--tw-border-opacity)) !important;\n}\n\n.border-red-600{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(220, 38, 38, var(--tw-border-opacity)) !important;\n}\n\n.border-yellow-600{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(217, 119, 6, var(--tw-border-opacity)) !important;\n}\n\n.border-green-600{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(5, 150, 105, var(--tw-border-opacity)) !important;\n}\n\n.border-blue-400{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(96, 165, 250, var(--tw-border-opacity)) !important;\n}\n\n.border-blue-500{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(59, 130, 246, var(--tw-border-opacity)) !important;\n}\n\n.border-blue-600{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(37, 99, 235, var(--tw-border-opacity)) !important;\n}\n\n.border-indigo-600{\n  --tw-border-opacity:1 !important;\n  border-color:rgba(79, 70, 229, var(--tw-border-opacity)) !important;\n}\n\n.hover\\:border-transparent:hover{\n  border-color:transparent !important;\n}\n\n.border-opacity-60{\n  --tw-border-opacity:0.6 !important;\n}\n\n.rounded{\n  border-radius:0.25rem !important;\n}\n\n.rounded-md{\n  border-radius:0.375rem !important;\n}\n\n.rounded-lg{\n  border-radius:0.5rem !important;\n}\n\n.rounded-xl{\n  border-radius:0.75rem !important;\n}\n\n.rounded-2xl{\n  border-radius:1rem !important;\n}\n\n.rounded-3xl{\n  border-radius:1.5rem !important;\n}\n\n.rounded-full{\n  border-radius:9999px !important;\n}\n\n.border-solid{\n  border-style:solid !important;\n}\n\n.border-0{\n  border-width:0px !important;\n}\n\n.border-2{\n  border-width:2px !important;\n}\n\n.border-4{\n  border-width:4px !important;\n}\n\n.border{\n  border-width:1px !important;\n}\n\n.border-t-2{\n  border-top-width:2px !important;\n}\n\n.border-t-8{\n  border-top-width:8px !important;\n}\n\n.border-r{\n  border-right-width:1px !important;\n}\n\n.border-l{\n  border-left-width:1px !important;\n}\n\n.box-border{\n  box-sizing:border-box !important;\n}\n\n.cursor-pointer{\n  cursor:pointer !important;\n}\n\n.block{\n  display:block !important;\n}\n\n.inline-block{\n  display:inline-block !important;\n}\n\n.inline{\n  display:inline !important;\n}\n\n.flex{\n  display:flex !important;\n}\n\n.inline-flex{\n  display:inline-flex !important;\n}\n\n.table{\n  display:table !important;\n}\n\n.grid{\n  display:grid !important;\n}\n\n.hidden{\n  display:none !important;\n}\n\n.flex-col{\n  flex-direction:column !important;\n}\n\n.flex-wrap{\n  flex-wrap:wrap !important;\n}\n\n.items-start{\n  align-items:flex-start !important;\n}\n\n.items-end{\n  align-items:flex-end !important;\n}\n\n.items-center{\n  align-items:center !important;\n}\n\n.items-baseline{\n  align-items:baseline !important;\n}\n\n.justify-items-start{\n  justify-items:start !important;\n}\n\n.justify-start{\n  justify-content:flex-start !important;\n}\n\n.justify-end{\n  justify-content:flex-end !important;\n}\n\n.justify-center{\n  justify-content:center !important;\n}\n\n.justify-between{\n  justify-content:space-between !important;\n}\n\n.justify-around{\n  justify-content:space-around !important;\n}\n\n.flex-1{\n  flex:1 1 0% !important;\n}\n\n.font-normal{\n  font-weight:400 !important;\n}\n\n.font-medium{\n  font-weight:500 !important;\n}\n\n.font-semibold{\n  font-weight:600 !important;\n}\n\n.font-bold{\n  font-weight:700 !important;\n}\n\n.h-4{\n  height:1rem !important;\n}\n\n.h-6{\n  height:1.5rem !important;\n}\n\n.h-8{\n  height:2rem !important;\n}\n\n.h-10{\n  height:2.5rem !important;\n}\n\n.h-16{\n  height:4rem !important;\n}\n\n.h-32{\n  height:8rem !important;\n}\n\n.h-44{\n  height:11rem !important;\n}\n\n.h-48{\n  height:12rem !important;\n}\n\n.h-auto{\n  height:auto !important;\n}\n\n.h-full{\n  height:100% !important;\n}\n\n.text-xs{\n  font-size:0.75rem !important;\n  line-height:1rem !important;\n}\n\n.text-sm{\n  font-size:0.875rem !important;\n  line-height:1.25rem !important;\n}\n\n.text-lg{\n  font-size:1.125rem !important;\n  line-height:1.75rem !important;\n}\n\n.text-xl{\n  font-size:1.25rem !important;\n  line-height:1.75rem !important;\n}\n\n.text-3xl{\n  font-size:1.875rem !important;\n  line-height:2.25rem !important;\n}\n\n.text-5xl{\n  font-size:3rem !important;\n  line-height:1 !important;\n}\n\n.leading-none{\n  line-height:1 !important;\n}\n\n.leading-tight{\n  line-height:1.25 !important;\n}\n\n.list-none{\n  list-style-type:none !important;\n}\n\n.m-auto{\n  margin:auto !important;\n}\n\n.mx-0{\n  margin-left:0px !important;\n  margin-right:0px !important;\n}\n\n.mx-2{\n  margin-left:0.5rem !important;\n  margin-right:0.5rem !important;\n}\n\n.my-4{\n  margin-top:1rem !important;\n  margin-bottom:1rem !important;\n}\n\n.my-6{\n  margin-top:1.5rem !important;\n  margin-bottom:1.5rem !important;\n}\n\n.mx-6{\n  margin-left:1.5rem !important;\n  margin-right:1.5rem !important;\n}\n\n.mx-auto{\n  margin-left:auto !important;\n  margin-right:auto !important;\n}\n\n.mt-0{\n  margin-top:0px !important;\n}\n\n.mt-1{\n  margin-top:0.25rem !important;\n}\n\n.mt-2{\n  margin-top:0.5rem !important;\n}\n\n.mr-2{\n  margin-right:0.5rem !important;\n}\n\n.mb-2{\n  margin-bottom:0.5rem !important;\n}\n\n.ml-2{\n  margin-left:0.5rem !important;\n}\n\n.mr-4{\n  margin-right:1rem !important;\n}\n\n.mb-4{\n  margin-bottom:1rem !important;\n}\n\n.mt-6{\n  margin-top:1.5rem !important;\n}\n\n.mb-6{\n  margin-bottom:1.5rem !important;\n}\n\n.mt-8{\n  margin-top:2rem !important;\n}\n\n.mb-8{\n  margin-bottom:2rem !important;\n}\n\n.mb-12{\n  margin-bottom:3rem !important;\n}\n\n.mt-16{\n  margin-top:4rem !important;\n}\n\n.ml-auto{\n  margin-left:auto !important;\n}\n\n.mt-0\\.5{\n  margin-top:0.125rem !important;\n}\n\n.-mt-20{\n  margin-top:-5rem !important;\n}\n\n.max-w-xs{\n  max-width:20rem !important;\n}\n\n.max-w-md{\n  max-width:28rem !important;\n}\n\n.max-w-3xl{\n  max-width:48rem !important;\n}\n\n.max-w-full{\n  max-width:100% !important;\n}\n\n.object-cover{\n  -o-object-fit:cover !important;\n     object-fit:cover !important;\n}\n\n.outline-none{\n  outline:2px solid transparent !important;\n  outline-offset:2px !important;\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent !important;\n  outline-offset:2px !important;\n}\n\n.overflow-hidden{\n  overflow:hidden !important;\n}\n\n.p-2{\n  padding:0.5rem !important;\n}\n\n.p-3{\n  padding:0.75rem !important;\n}\n\n.p-4{\n  padding:1rem !important;\n}\n\n.px-0{\n  padding-left:0px !important;\n  padding-right:0px !important;\n}\n\n.py-1{\n  padding-top:0.25rem !important;\n  padding-bottom:0.25rem !important;\n}\n\n.px-1{\n  padding-left:0.25rem !important;\n  padding-right:0.25rem !important;\n}\n\n.py-2{\n  padding-top:0.5rem !important;\n  padding-bottom:0.5rem !important;\n}\n\n.px-2{\n  padding-left:0.5rem !important;\n  padding-right:0.5rem !important;\n}\n\n.py-3{\n  padding-top:0.75rem !important;\n  padding-bottom:0.75rem !important;\n}\n\n.px-3{\n  padding-left:0.75rem !important;\n  padding-right:0.75rem !important;\n}\n\n.py-4{\n  padding-top:1rem !important;\n  padding-bottom:1rem !important;\n}\n\n.px-4{\n  padding-left:1rem !important;\n  padding-right:1rem !important;\n}\n\n.py-5{\n  padding-top:1.25rem !important;\n  padding-bottom:1.25rem !important;\n}\n\n.px-5{\n  padding-left:1.25rem !important;\n  padding-right:1.25rem !important;\n}\n\n.px-6{\n  padding-left:1.5rem !important;\n  padding-right:1.5rem !important;\n}\n\n.py-8{\n  padding-top:2rem !important;\n  padding-bottom:2rem !important;\n}\n\n.px-8{\n  padding-left:2rem !important;\n  padding-right:2rem !important;\n}\n\n.px-10{\n  padding-left:2.5rem !important;\n  padding-right:2.5rem !important;\n}\n\n.py-12{\n  padding-top:3rem !important;\n  padding-bottom:3rem !important;\n}\n\n.py-2\\.5{\n  padding-top:0.625rem !important;\n  padding-bottom:0.625rem !important;\n}\n\n.pt-0{\n  padding-top:0px !important;\n}\n\n.pt-1{\n  padding-top:0.25rem !important;\n}\n\n.pb-2{\n  padding-bottom:0.5rem !important;\n}\n\n.pt-3{\n  padding-top:0.75rem !important;\n}\n\n.pt-4{\n  padding-top:1rem !important;\n}\n\n.pl-4{\n  padding-left:1rem !important;\n}\n\n.pb-6{\n  padding-bottom:1.5rem !important;\n}\n\n.pl-6{\n  padding-left:1.5rem !important;\n}\n\n.pt-8{\n  padding-top:2rem !important;\n}\n\n.pl-10{\n  padding-left:2.5rem !important;\n}\n\n.pr-12{\n  padding-right:3rem !important;\n}\n\n.pl-12{\n  padding-left:3rem !important;\n}\n\n.pl-14{\n  padding-left:3.5rem !important;\n}\n\n.pl-52{\n  padding-left:13rem !important;\n}\n\n.pt-0\\.5{\n  padding-top:0.125rem !important;\n}\n\n.pointer-events-none{\n  pointer-events:none !important;\n}\n\n.static{\n  position:static !important;\n}\n\n.fixed{\n  position:fixed !important;\n}\n\n.absolute{\n  position:absolute !important;\n}\n\n.relative{\n  position:relative !important;\n}\n\n.sticky{\n  position:sticky !important;\n}\n\n.top-0{\n  top:0px !important;\n}\n\n.right-0{\n  right:0px !important;\n}\n\n.bottom-0{\n  bottom:0px !important;\n}\n\n.left-0{\n  left:0px !important;\n}\n\n.top-4{\n  top:1rem !important;\n}\n\n.bottom-auto{\n  bottom:auto !important;\n}\n\n*{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n\n.shadow-lg{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n\n.shadow-xl{\n  --tw-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n}\n\n*{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.fill-current{\n  fill:currentColor !important;\n}\n\n.text-center{\n  text-align:center !important;\n}\n\n.text-black{\n  --tw-text-opacity:1 !important;\n  color:rgba(0, 0, 0, var(--tw-text-opacity)) !important;\n}\n\n.text-white{\n  --tw-text-opacity:1 !important;\n  color:rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-300{\n  --tw-text-opacity:1 !important;\n  color:rgba(209, 213, 219, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-500{\n  --tw-text-opacity:1 !important;\n  color:rgba(107, 114, 128, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-600{\n  --tw-text-opacity:1 !important;\n  color:rgba(75, 85, 99, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-700{\n  --tw-text-opacity:1 !important;\n  color:rgba(55, 65, 81, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-800{\n  --tw-text-opacity:1 !important;\n  color:rgba(31, 41, 55, var(--tw-text-opacity)) !important;\n}\n\n.text-gray-900{\n  --tw-text-opacity:1 !important;\n  color:rgba(17, 24, 39, var(--tw-text-opacity)) !important;\n}\n\n.text-red-600{\n  --tw-text-opacity:1 !important;\n  color:rgba(220, 38, 38, var(--tw-text-opacity)) !important;\n}\n\n.text-blue-400{\n  --tw-text-opacity:1 !important;\n  color:rgba(96, 165, 250, var(--tw-text-opacity)) !important;\n}\n\n.text-blue-500{\n  --tw-text-opacity:1 !important;\n  color:rgba(59, 130, 246, var(--tw-text-opacity)) !important;\n}\n\n.text-blue-600{\n  --tw-text-opacity:1 !important;\n  color:rgba(37, 99, 235, var(--tw-text-opacity)) !important;\n}\n\n.text-blue-700{\n  --tw-text-opacity:1 !important;\n  color:rgba(29, 78, 216, var(--tw-text-opacity)) !important;\n}\n\n.text-indigo-500{\n  --tw-text-opacity:1 !important;\n  color:rgba(99, 102, 241, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-white:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n}\n\n.hover\\:text-gray-900:hover{\n  --tw-text-opacity:1 !important;\n  color:rgba(17, 24, 39, var(--tw-text-opacity)) !important;\n}\n\n.truncate{\n  overflow:hidden !important;\n  text-overflow:ellipsis !important;\n  white-space:nowrap !important;\n}\n\n.uppercase{\n  text-transform:uppercase !important;\n}\n\n.no-underline{\n  text-decoration:none !important;\n}\n\n.hover\\:underline:hover{\n  text-decoration:underline !important;\n}\n\n.tracking-tight{\n  letter-spacing:-0.025em !important;\n}\n\n.tracking-wide{\n  letter-spacing:0.025em !important;\n}\n\n.tracking-wider{\n  letter-spacing:0.05em !important;\n}\n\n.align-middle{\n  vertical-align:middle !important;\n}\n\n.w-4{\n  width:1rem !important;\n}\n\n.w-6{\n  width:1.5rem !important;\n}\n\n.w-8{\n  width:2rem !important;\n}\n\n.w-10{\n  width:2.5rem !important;\n}\n\n.w-16{\n  width:4rem !important;\n}\n\n.w-24{\n  width:6rem !important;\n}\n\n.w-48{\n  width:12rem !important;\n}\n\n.w-auto{\n  width:auto !important;\n}\n\n.w-1\\/2{\n  width:50% !important;\n}\n\n.w-3\\/5{\n  width:60% !important;\n}\n\n.w-full{\n  width:100% !important;\n}\n\n.gap-2{\n  gap:0.5rem !important;\n}\n\n.gap-4{\n  gap:1rem !important;\n}\n\n.gap-6{\n  gap:1.5rem !important;\n}\n\n.gap-x-2{\n  -moz-column-gap:0.5rem !important;\n       column-gap:0.5rem !important;\n}\n\n.gap-y-4{\n  row-gap:1rem !important;\n}\n\n.grid-cols-2{\n  grid-template-columns:repeat(2, minmax(0, 1fr)) !important;\n}\n\n.grid-cols-4{\n  grid-template-columns:repeat(4, minmax(0, 1fr)) !important;\n}\n\n.transform{\n  --tw-translate-x:0 !important;\n  --tw-translate-y:0 !important;\n  --tw-rotate:0 !important;\n  --tw-skew-x:0 !important;\n  --tw-skew-y:0 !important;\n  --tw-scale-x:1 !important;\n  --tw-scale-y:1 !important;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;\n}\n\n.transition{\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter !important;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter !important;\n  transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter !important;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1) !important;\n  transition-duration:150ms !important;\n}\n\n.transition-colors{\n  transition-property:background-color, border-color, color, fill, stroke !important;\n  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1) !important;\n  transition-duration:150ms !important;\n}\n\n.duration-500{\n  transition-duration:500ms !important;\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.filter{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/) !important;\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;\n}\n\n.blur{\n  --tw-blur:blur(8px) !important;\n}\n\n.drop-shadow{\n  --tw-drop-shadow:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.06)) !important;\n}\n\n.backdrop-filter{\n  --tw-backdrop-blur:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-backdrop-brightness:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-backdrop-contrast:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-backdrop-grayscale:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-backdrop-hue-rotate:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-backdrop-invert:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-backdrop-opacity:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-backdrop-saturate:var(--tw-empty,/*!*/ /*!*/) !important;\n  --tw-backdrop-sepia:var(--tw-empty,/*!*/ /*!*/) !important;\n  -webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;\n          backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;\n}\n\n@media (min-width: 640px){\n  .sm\\:mx-auto{\n    margin-left:auto !important;\n    margin-right:auto !important;\n  }\n\n  .sm\\:mb-0{\n    margin-bottom:0px !important;\n  }\n\n  .sm\\:mt-4{\n    margin-top:1rem !important;\n  }\n\n  .sm\\:py-4{\n    padding-top:1rem !important;\n    padding-bottom:1rem !important;\n  }\n\n  .sm\\:px-4{\n    padding-left:1rem !important;\n    padding-right:1rem !important;\n  }\n\n  .sm\\:text-white{\n    --tw-text-opacity:1 !important;\n    color:rgba(255, 255, 255, var(--tw-text-opacity)) !important;\n  }\n\n  .sm\\:w-1\\/2{\n    width:50% !important;\n  }\n\n  .sm\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr)) !important;\n  }\n}\n\n@media (min-width: 768px){\n  .md\\:container{\n    width:100%;\n  }\n\n  @media (min-width: 640px){\n    .md\\:container{\n      max-width:640px;\n    }\n  }\n\n  @media (min-width: 768px){\n    .md\\:container{\n      max-width:768px;\n    }\n  }\n\n  @media (min-width: 1024px){\n    .md\\:container{\n      max-width:1024px;\n    }\n  }\n\n  @media (min-width: 1280px){\n    .md\\:container{\n      max-width:1280px;\n    }\n  }\n\n  @media (min-width: 1536px){\n    .md\\:container{\n      max-width:1536px;\n    }\n  }\n\n  .md\\:flex{\n    display:flex !important;\n  }\n\n  .md\\:hidden{\n    display:none !important;\n  }\n\n  .md\\:flex-wrap{\n    flex-wrap:wrap !important;\n  }\n\n  .md\\:justify-between{\n    justify-content:space-between !important;\n  }\n\n  .md\\:flex-shrink-0{\n    flex-shrink:0 !important;\n  }\n\n  .md\\:h-8{\n    height:2rem !important;\n  }\n\n  .md\\:h-24{\n    height:6rem !important;\n  }\n\n  .md\\:h-auto{\n    height:auto !important;\n  }\n\n  .md\\:h-full{\n    height:100% !important;\n  }\n\n  .md\\:h-screen{\n    height:100vh !important;\n  }\n\n  .md\\:-mt-16{\n    margin-top:-4rem !important;\n  }\n\n  .md\\:max-w-2xl{\n    max-width:42rem !important;\n  }\n\n  .md\\:p-4{\n    padding:1rem !important;\n  }\n\n  .md\\:px-2{\n    padding-left:0.5rem !important;\n    padding-right:0.5rem !important;\n  }\n\n  .md\\:pl-8{\n    padding-left:2rem !important;\n  }\n\n  .md\\:pl-32{\n    padding-left:8rem !important;\n  }\n\n  .md\\:top-4{\n    top:1rem !important;\n  }\n\n  .md\\:w-8{\n    width:2rem !important;\n  }\n\n  .md\\:w-32{\n    width:8rem !important;\n  }\n\n  .md\\:w-48{\n    width:12rem !important;\n  }\n\n  .md\\:w-4\\/12{\n    width:33.333333% !important;\n  }\n\n  .md\\:w-full{\n    width:100% !important;\n  }\n\n  .md\\:gap-x-1{\n    -moz-column-gap:0.25rem !important;\n         column-gap:0.25rem !important;\n  }\n\n  .md\\:gap-x-4{\n    -moz-column-gap:1rem !important;\n         column-gap:1rem !important;\n  }\n\n  .md\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr)) !important;\n  }\n\n  .md\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr)) !important;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:bg-transparent{\n    background-color:transparent !important;\n  }\n\n  .lg\\:border-gray-200{\n    --tw-border-opacity:1 !important;\n    border-color:rgba(229, 231, 235, var(--tw-border-opacity)) !important;\n  }\n\n  .lg\\:block{\n    display:block !important;\n  }\n\n  .lg\\:inline-block{\n    display:inline-block !important;\n  }\n\n  .lg\\:flex{\n    display:flex !important;\n  }\n\n  .lg\\:hidden{\n    display:none !important;\n  }\n\n  .lg\\:flex-row{\n    flex-direction:row !important;\n  }\n\n  .lg\\:items-center{\n    align-items:center !important;\n  }\n\n  .lg\\:justify-start{\n    justify-content:flex-start !important;\n  }\n\n  .lg\\:flex-grow{\n    flex-grow:1 !important;\n  }\n\n  .lg\\:h-80{\n    height:20rem !important;\n  }\n\n  .lg\\:mx-8{\n    margin-left:2rem !important;\n    margin-right:2rem !important;\n  }\n\n  .lg\\:mb-0{\n    margin-bottom:0px !important;\n  }\n\n  .lg\\:ml-auto{\n    margin-left:auto !important;\n  }\n\n  .lg\\:py-2{\n    padding-top:0.5rem !important;\n    padding-bottom:0.5rem !important;\n  }\n\n  .lg\\:py-4{\n    padding-top:1rem !important;\n    padding-bottom:1rem !important;\n  }\n\n  .lg\\:px-8{\n    padding-left:2rem !important;\n    padding-right:2rem !important;\n  }\n\n  .lg\\:pl-20{\n    padding-left:5rem !important;\n  }\n\n  .lg\\:static{\n    position:static !important;\n  }\n\n  .lg\\:shadow-none{\n    --tw-shadow:0 0 #0000 !important;\n    box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;\n  }\n\n  .lg\\:text-blue-400{\n    --tw-text-opacity:1 !important;\n    color:rgba(96, 165, 250, var(--tw-text-opacity)) !important;\n  }\n\n  .lg\\:hover\\:text-gray-300:hover{\n    --tw-text-opacity:1 !important;\n    color:rgba(209, 213, 219, var(--tw-text-opacity)) !important;\n  }\n\n  .lg\\:tracking-wide{\n    letter-spacing:0.025em !important;\n  }\n\n  .lg\\:w-80{\n    width:20rem !important;\n  }\n\n  .lg\\:w-auto{\n    width:auto !important;\n  }\n\n  .lg\\:w-1\\/3{\n    width:33.333333% !important;\n  }\n\n  .lg\\:w-4\\/12{\n    width:33.333333% !important;\n  }\n\n  .lg\\:w-6\\/12{\n    width:50% !important;\n  }\n\n  .lg\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr)) !important;\n  }\n\n  .lg\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr)) !important;\n  }\n\n  .lg\\:grid-cols-5{\n    grid-template-columns:repeat(5, minmax(0, 1fr)) !important;\n  }\n}\n\n@media (min-width: 1280px){\n  .xl\\:block{\n    display:block !important;\n  }\n\n  .xl\\:grid{\n    display:grid !important;\n  }\n\n  .xl\\:px-16{\n    padding-left:4rem !important;\n    padding-right:4rem !important;\n  }\n\n  .xl\\:w-4\\/5{\n    width:80% !important;\n  }\n\n  .xl\\:gap-x-6{\n    -moz-column-gap:1.5rem !important;\n         column-gap:1.5rem !important;\n  }\n\n  .xl\\:grid-cols-4{\n    grid-template-columns:repeat(4, minmax(0, 1fr)) !important;\n  }\n\n  .xl\\:grid-cols-5{\n    grid-template-columns:repeat(5, minmax(0, 1fr)) !important;\n  }\n}\n\n@media (min-width: 1536px){\n  .\\32xl\\:inline-flex{\n    display:inline-flex !important;\n  }\n\n  .\\32xl\\:h-full{\n    height:100% !important;\n  }\n\n  .\\32xl\\:ml-4{\n    margin-left:1rem !important;\n  }\n\n  .\\32xl\\:w-full{\n    width:100% !important;\n  }\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_1__);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1___default.a);

const store = () => {
  return new vuex__WEBPACK_IMPORTED_MODULE_1___default.a.Store({
    state: {
      currentIndex: 0,
      cards: [{
        title: "Start A New Day",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: "/mobileSlider/slide_01.jpg"
      }, {
        title: "Feel The Nature",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: "/mobileSlider/slide_02.jpg"
      }, {
        title: "Take A Deep Breath",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: "/mobileSlider/slide_03.jpg"
      }, {
        title: "Time For A Change",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        img: "/mobileSlider/slide_04.jpg"
      }]
    },
    getters: {
      currentIndex: state => {
        return state.currentIndex;
      },
      cards: state => {
        return state.cards;
      }
    },
    mutations: {
      nextIndex: state => {
        if (state.currentIndex < state.cards.length - 1) state.currentIndex++;
      },
      prevIndex: state => {
        if (state.currentIndex > 0) state.currentIndex--;
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("b064530a", content, true)

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".carousel-card{\n  overflow-y:hidden;\n  overflow-x:hidden;\n  position:relative\n}\n\n.carousel-card-container{\n  position:relative;\n  height:300px\n}\n\n.carousel-card-arrow{\n  border:none;\n  outline:0;\n  padding:0;\n  margin:0;\n  height:36px;\n  width:36px;\n  cursor:pointer;\n  -webkit-transition:.3s;\n  transition:.3s;\n  border-radius:50%;\n  background-color:rgba(31,45,61,.11);\n  color:#fff;\n  position:absolute;\n  top:50%;\n  z-index:10;\n  -webkit-transform:translateY(-50%);\n          transform:translateY(-50%);\n  text-align:center;\n  font-size:12px\n}\n\n.carousel-card-arrow:hover{\n  background-color:rgba(31,45,61,.23)\n}\n\n.carousel-card-arrow i{\n  background-size:80%;\n  display:inline-block;\n  width:100%;\n  height:100%;\n  background-position-y:50%\n}\n\n.carousel-card-arrow:hover i{\n  cursor:pointer\n}\n\n.carousel-card-arrow-left{\n  left:16px\n}\n\n.carousel-card-arrow-left i{\n  background-image:url(data:image/png;base64,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);\n  background-position-x:30%\n}\n\n.carousel-card-arrow-right{\n  right:16px\n}\n\n.carousel-card-arrow-right i{\n  background-image:url(data:image/png;base64,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);\n  background-position-x:70%\n}\n\n.carousel-card-indicators{\n  position:absolute;\n  list-style:none;\n  bottom:0;\n  left:50%;\n  -webkit-transform:translateX(-50%);\n          transform:translateX(-50%);\n  margin:0;\n  padding:0;\n  z-index:2\n}\n\n.carousel-card-indicators-outside{\n  bottom:26px;\n  text-align:center;\n  position:static;\n  -webkit-transform:none;\n          transform:none\n}\n\n.carousel-card-indicators-outside .carousel-card-indicator:hover button{\n  opacity:.64\n}\n\n.carousel-card-indicators-outside button{\n  background-color:#c0c4cc;\n  opacity:.24\n}\n\n.carousel-card-indicators-labels{\n  left:0;\n  right:0;\n  -webkit-transform:none;\n          transform:none;\n  text-align:center\n}\n\n.carousel-card-indicators-labels .carousel-card-button{\n  height:auto;\n  width:auto;\n  padding:2px 18px;\n  font-size:12px\n}\n\n.carousel-card-indicators-labels .carousel-card-indicator{\n  padding:6px 4px\n}\n\n.carousel-card-indicator{\n  display:inline-block;\n  background-color:transparent;\n  padding:12px 4px;\n  cursor:pointer\n}\n\n.carousel-card-indicator:hover button{\n  opacity:.72\n}\n\n.carousel-card-indicator.is-active button{\n  opacity:1\n}\n\n.carousel-card-button{\n  display:block;\n  opacity:.48;\n  width:30px;\n  height:2px;\n  background-color:#fff;\n  border:none;\n  outline:0;\n  padding:0;\n  margin:0;\n  cursor:pointer;\n  -webkit-transition:.3s;\n  transition:.3s\n}\n\n.carousel-card-arrow-left-enter,.carousel-card-arrow-left-leave-active{\n  -webkit-transform:translateY(-50%) translateX(-10px);\n          transform:translateY(-50%) translateX(-10px);\n  opacity:0\n}\n\n.carousel-card-arrow-right-enter,.carousel-card-arrow-right-leave-active{\n  -webkit-transform:translateY(-50%) translateX(10px);\n          transform:translateY(-50%) translateX(10px);\n  opacity:0\n}\n\n.carousel-card-item,.carousel-card-mask{\n  position:absolute;\n  height:100%;\n  top:0;\n  left:0\n}\n\n.carousel-card-item{\n  width:100%;\n  display:inline-block;\n  overflow:hidden;\n  z-index:0\n}\n\n.carousel-card-item.is-active{\n  z-index:2\n}\n\n.carousel-card-item-card,.carousel-card-item.is-animating{\n  -webkit-transition:-webkit-transform .4s ease-in-out;\n  transition:-webkit-transform .4s ease-in-out;\n  transition:transform .4s ease-in-out;\n  transition:transform .4s ease-in-out, -webkit-transform .4s ease-in-out\n}\n\n.carousel-card-item-card{\n  width:50%\n}\n\n.carousel-card-item-card.is-in-stage{\n  cursor:pointer;\n  z-index:1\n}\n\n.carousel-card-item-card.is-active{\n  z-index:2\n}\n\n.carousel-card-item-card.is-in-stage.is-hover .carousel-card-mask,.carousel-card-item-card.is-in-stage:hover .carousel-card-mask{\n  opacity:.12\n}\n\n.carousel-card-mask{\n  width:100%;\n  background-color:#fff;\n  opacity:.24;\n  -webkit-transition:.2s;\n  transition:.2s\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(17);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(18);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(11);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(7);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(12);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _66ae2d8e = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 24).then(__webpack_require__.bind(null, 140)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _66ae2d8e,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "f4e6092a"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(27)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "66da6c42"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./assets/css/tailwind.css
var tailwind = __webpack_require__(13);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=677c88c9&
var defaultvue_type_template_id_677c88c9_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('TopNav'),_vm._ssrNode(" <div class=\"border-t-8 pb-2\"></div> "),_c('Nuxt'),_vm._ssrNode(" "),_c('Footer')],2)}
var defaultvue_type_template_id_677c88c9_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=677c88c9&

// EXTERNAL MODULE: ./components/TopNav.vue + 4 modules
var TopNav = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    TopNav: TopNav["default"]
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue





/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_677c88c9_render,
  defaultvue_type_template_id_677c88c9_staticRenderFns,
  false,
  null,
  null,
  "8307fc00"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {TopNav: __webpack_require__(10).default,Footer: __webpack_require__(16).default})

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/errror.vue?vue&type=template&id=19ce8e79&
var errrorvue_type_template_id_19ce8e79_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.error.statusCode === 404)?("<h1>Page not found</h1>"):("<h1>An error occurred</h1>"))+" "),_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Home page")])],2)}
var errrorvue_type_template_id_19ce8e79_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/errror.vue?vue&type=template&id=19ce8e79&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/errror.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var errrorvue_type_script_lang_js_ = ({
  props: ['error'],
  layout: 'error' // you can set a custom layout for the error page

});
// CONCATENATED MODULE: ./layouts/errror.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errrorvue_type_script_lang_js_ = (errrorvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/errror.vue





/* normalize component */

var errror_component = Object(componentNormalizer["a" /* default */])(
  layouts_errrorvue_type_script_lang_js_,
  errrorvue_type_template_id_19ce8e79_render,
  errrorvue_type_template_id_19ce8e79_staticRenderFns,
  false,
  null,
  null,
  "4513b261"
  
)

/* harmony default export */ var errror = (errror_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js









const layouts = {
  "_default": sanitizeComponent(layouts_default),
  "_errror": sanitizeComponent(errror)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(30), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {}; // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}
// CONCATENATED MODULE: ./.nuxt/components/utils.js
// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js


const components = {
  Article: () => __webpack_require__.e(/* import() | components/article */ 1).then(__webpack_require__.bind(null, 69)).then(c => wrapFunctional(c.default || c)),
  ArticleGrid: () => __webpack_require__.e(/* import() | components/article-grid */ 2).then(__webpack_require__.bind(null, 128)).then(c => wrapFunctional(c.default || c)),
  BrandCard: () => __webpack_require__.e(/* import() | components/brand-card */ 3).then(__webpack_require__.bind(null, 110)).then(c => wrapFunctional(c.default || c)),
  BrandCardList: () => __webpack_require__.e(/* import() | components/brand-card-list */ 4).then(__webpack_require__.bind(null, 124)).then(c => wrapFunctional(c.default || c)),
  Button: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 8)).then(c => wrapFunctional(c.default || c)),
  Carousel: () => __webpack_require__.e(/* import() | components/carousel */ 5).then(__webpack_require__.bind(null, 125)).then(c => wrapFunctional(c.default || c)),
  Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 16)).then(c => wrapFunctional(c.default || c)),
  GlassMorphicProduct: () => __webpack_require__.e(/* import() | components/glass-morphic-product */ 6).then(__webpack_require__.bind(null, 65)).then(c => wrapFunctional(c.default || c)),
  GlassMorphicProductList: () => __webpack_require__.e(/* import() | components/glass-morphic-product-list */ 7).then(__webpack_require__.bind(null, 135)).then(c => wrapFunctional(c.default || c)),
  MegaMenu: () => __webpack_require__.e(/* import() | components/mega-menu */ 8).then(__webpack_require__.bind(null, 141)).then(c => wrapFunctional(c.default || c)),
  MenuSide: () => __webpack_require__.e(/* import() | components/menu-side */ 9).then(__webpack_require__.bind(null, 68)).then(c => wrapFunctional(c.default || c)),
  MobileCard: () => __webpack_require__.e(/* import() | components/mobile-card */ 10).then(__webpack_require__.bind(null, 67)).then(c => wrapFunctional(c.default || c)),
  MobileCardList: () => __webpack_require__.e(/* import() | components/mobile-card-list */ 11).then(__webpack_require__.bind(null, 129)).then(c => wrapFunctional(c.default || c)),
  MobileMenu: () => __webpack_require__.e(/* import() | components/mobile-menu */ 12).then(__webpack_require__.bind(null, 133)).then(c => wrapFunctional(c.default || c)),
  Product: () => __webpack_require__.e(/* import() | components/product */ 13).then(__webpack_require__.bind(null, 61)).then(c => wrapFunctional(c.default || c)),
  ProductCard: () => __webpack_require__.e(/* import() | components/product-card */ 14).then(__webpack_require__.bind(null, 66)).then(c => wrapFunctional(c.default || c)),
  ProductCardList: () => __webpack_require__.e(/* import() | components/product-card-list */ 15).then(__webpack_require__.bind(null, 127)).then(c => wrapFunctional(c.default || c)),
  ProductCarousel: () => __webpack_require__.e(/* import() | components/product-carousel */ 16).then(__webpack_require__.bind(null, 126)).then(c => wrapFunctional(c.default || c)),
  ProductList: () => __webpack_require__.e(/* import() | components/product-list */ 17).then(__webpack_require__.bind(null, 136)).then(c => wrapFunctional(c.default || c)),
  Promotion: () => __webpack_require__.e(/* import() | components/promotion */ 18).then(__webpack_require__.bind(null, 131)).then(c => wrapFunctional(c.default || c)),
  RoundedList: () => __webpack_require__.e(/* import() | components/rounded-list */ 19).then(__webpack_require__.bind(null, 132)).then(c => wrapFunctional(c.default || c)),
  SideGallery: () => __webpack_require__.e(/* import() | components/side-gallery */ 20).then(__webpack_require__.bind(null, 63)).then(c => wrapFunctional(c.default || c)),
  SideGalleryVerticle: () => __webpack_require__.e(/* import() | components/side-gallery-verticle */ 21).then(__webpack_require__.bind(null, 64)).then(c => wrapFunctional(c.default || c)),
  SideRightBar: () => __webpack_require__.e(/* import() | components/side-right-bar */ 22).then(__webpack_require__.bind(null, 137)).then(c => wrapFunctional(c.default || c)),
  Testimonials: () => __webpack_require__.e(/* import() | components/testimonials */ 23).then(__webpack_require__.bind(null, 130)).then(c => wrapFunctional(c.default || c)),
  TopNav: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 10)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: external "vue-carousel-card"
var external_vue_carousel_card_ = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vue-carousel-card/styles/index.css
var styles = __webpack_require__(31);

// CONCATENATED MODULE: ./plugins/vue-carousel-card.js



/* harmony default export */ var vue_carousel_card = (() => {
  external_vue_default.a.component(external_vue_carousel_card_["CarouselCard"].name, external_vue_carousel_card_["CarouselCard"]);
  external_vue_default.a.component(external_vue_carousel_card_["CarouselCardItem"].name, external_vue_carousel_card_["CarouselCardItem"]);
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(9);

// EXTERNAL MODULE: external "vue-tilt.js"
var external_vue_tilt_js_ = __webpack_require__(19);
var external_vue_tilt_js_default = /*#__PURE__*/__webpack_require__.n(external_vue_tilt_js_);

// CONCATENATED MODULE: ./plugins/vue-tilt.js


external_vue_default.a.use(external_vue_tilt_js_default.a);
// EXTERNAL MODULE: external "element-ui"
var external_element_ui_ = __webpack_require__(20);
var external_element_ui_default = /*#__PURE__*/__webpack_require__.n(external_element_ui_);

// EXTERNAL MODULE: external "element-ui/lib/locale/lang/en"
var en_ = __webpack_require__(21);
var en_default = /*#__PURE__*/__webpack_require__.n(en_);

// CONCATENATED MODULE: ./plugins/element-ui.js



/* harmony default export */ var element_ui = (() => {
  external_vue_default.a.use(external_element_ui_default.a, {
    locale: en_default.a
  });
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: ..\\plugins\\vue-carousel-card (mode: 'all')

 // Source: ..\\plugins\\lightGallery.client.js (mode: 'client')

 // Source: ..\\plugins\\vue-fb-customer-chat.js (mode: 'client')

 // Source: ..\\plugins\\vue-tilt.js (mode: 'all')

 // Source: ..\\plugins\\element-ui (mode: 'all')

 // Source: ..\\plugins\\slide-menu (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "el-fade-in-linear",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "laptopbay",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof vue_carousel_card === 'function') {
    await vue_carousel_card(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue-tilt.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue-tilt.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof element_ui === 'function') {
    await element_ui(app.context, inject);
  }

  if (false) {} // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("vue-flux/dist-ssr/vue-flux.umd.min.js");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map