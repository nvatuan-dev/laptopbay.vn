exports.ids = [7,6];
exports.modules = {

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GlassMorphicProductList.vue?vue&type=template&id=ea84cc82&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"flex justify-center bg-blue-600 rounded-2xl\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-2 md:gap-x-1 md:grid-cols-3 xl:grid-cols-5 xl:gap-x-6 gap-y-4 py-4 items-center px-auto\">","</div>",_vm._l((_vm.toBeShown),function(laptop,pIndex){return _c('GlassMorphicProduct',{key:pIndex,attrs:{"laptop":laptop}})}),1)]),_vm._ssrNode(" <div class=\"inline-flex justify-between flex-wrap space-x-4 py-3 pl-4\"><button"+(_vm._ssrAttr("disabled",_vm.currentPage ==1))+" class=\"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded\">Show Less</button> <button"+(_vm._ssrAttr("disabled",_vm.currentPage == _vm.totalPages))+" class=\"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded\">Show More</button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/GlassMorphicProductList.vue?vue&type=template&id=ea84cc82&

// CONCATENATED MODULE: ./constant/product.js
const products = [{
  title: 'Thinkpad T14S',
  src: __webpack_require__(54)
}, {
  title: 'Thinkpad T460',
  src: __webpack_require__(55)
}, {
  title: 'Thinkpad T560',
  src: __webpack_require__(56)
}, {
  title: 'Thinkpad X1 Gen 6',
  src: __webpack_require__(41)
}, {
  title: 'Thinkpad X1 Gen 7',
  src: __webpack_require__(41)
}, {
  title: 'Thinkpad X1 Gen 9',
  src: __webpack_require__(35)
}, {
  title: 'Thinkpad X1 Gen 9',
  src: __webpack_require__(35)
}, {
  title: 'Thinkpad X1 Gen 9',
  src: __webpack_require__(35)
}, {
  title: 'Thinkpad X1 Gen 9',
  src: __webpack_require__(35)
}, {
  title: 'Thinkpad X1 Gen 9',
  src: __webpack_require__(35)
}, {
  title: 'Thinkpad X1 Gen 9',
  src: __webpack_require__(35)
}];
// EXTERNAL MODULE: ./components/GlassMorphicProduct.vue + 4 modules
var GlassMorphicProduct = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GlassMorphicProductList.vue?vue&type=script&lang=js&
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


/* harmony default export */ var GlassMorphicProductListvue_type_script_lang_js_ = ({
  name: "glassProductList",
  components: {
    GlassMorphicProduct: GlassMorphicProduct["default"]
  },
  props: ["laptop"],

  data() {
    return {
      products: products,
      currentPage: 1
    };
  },

  computed: {
    toBeShown() {
      return this.products.slice(0, this.currentPage * 5);
    },

    totalPages() {
      return Math.ceil(this.products.length / 5);
    }

  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },

    prevPage() {
      this.currentPage = this.currentPage - 1 || 1;
    }

  }
});
// CONCATENATED MODULE: ./components/GlassMorphicProductList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GlassMorphicProductListvue_type_script_lang_js_ = (GlassMorphicProductListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/GlassMorphicProductList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GlassMorphicProductListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "62c067bf"
  
)

/* harmony default export */ var GlassMorphicProductList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {GlassMorphicProduct: __webpack_require__(65).default,Button: __webpack_require__(8).default})


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/x1gen9.c7a14c5.png";

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/x1gen6.d4638c1.png";

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/T14s.6538a8d.png";

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/T460.8fc921f.png";

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/T560.ff7ab52.png";

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("4bb82e04", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GlassMorphicProduct.vue?vue&type=template&id=504fb8b0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"card\" data-v-504fb8b0><div class=\"img-box\" data-v-504fb8b0><img"+(_vm._ssrAttr("src",_vm.laptop.src))+" data-v-504fb8b0> <h2 data-v-504fb8b0>"+_vm._ssrEscape(_vm._s(_vm.laptop.title))+"</h2></div> <div class=\"content\" data-v-504fb8b0><div class=\"color\" data-v-504fb8b0><h3 data-v-504fb8b0>Color</h3> <span data-v-504fb8b0></span> <span data-v-504fb8b0></span> <span data-v-504fb8b0></span></div> <a href=\"#\" data-v-504fb8b0>Discorver</a></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/GlassMorphicProduct.vue?vue&type=template&id=504fb8b0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GlassMorphicProduct.vue?vue&type=script&lang=js&
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
/* harmony default export */ var GlassMorphicProductvue_type_script_lang_js_ = ({
  props: ['laptop']
});
// CONCATENATED MODULE: ./components/GlassMorphicProduct.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GlassMorphicProductvue_type_script_lang_js_ = (GlassMorphicProductvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/GlassMorphicProduct.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GlassMorphicProductvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "504fb8b0",
  "b6ca22fe"
  
)

/* harmony default export */ var GlassMorphicProduct = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlassMorphicProduct_vue_vue_type_style_index_0_id_504fb8b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlassMorphicProduct_vue_vue_type_style_index_0_id_504fb8b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlassMorphicProduct_vue_vue_type_style_index_0_id_504fb8b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlassMorphicProduct_vue_vue_type_style_index_0_id_504fb8b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GlassMorphicProduct_vue_vue_type_style_index_0_id_504fb8b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container>.card[data-v-504fb8b0]{\n  position:relative;\n  width:130px;\n  height:200px;\n  margin:5px 15px;\n  display:inline-block;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  background:hsla(0,0%,100%,.4);\n  box-shadow:0 10px 25px rgba(0,0,0,.4);\n  -webkit-backdrop-filter:blur(20 px);\n          backdrop-filter:blur(20 px);\n  border-radius:15px\n}\n@media(min-width:768px){\n.container>.card[data-v-504fb8b0]{\n    width:180px;\n    height:320px;\n    margin:20px 40px\n}\n}\n.container>.card .img-box[data-v-504fb8b0]{\n  position:relative;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  padding:20px;\n  transition:.5s ease-in-out\n}\n.container>.card .img-box img[data-v-504fb8b0]{\n  max-width:100%;\n  margin:0 0 20px;\n  transition:.5s ease-in-out\n}\n.container>.card .img-box h2[data-v-504fb8b0]{\n  color:#fff;\n  font-weight:800;\n  font-size:12px;\n  text-align:center\n}\n@media(min-width:768px){\n.container>.card .img-box h2[data-v-504fb8b0]{\n    font-size:18px\n}\n}\n.container>.card .content[data-v-504fb8b0]{\n  position:absolute;\n  bottom:20px;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  flex-direction:column;\n  transition:.5s ease-in-out;\n  opacity:0;\n  visibility:hidden\n}\n.container>.card .content .color[data-v-504fb8b0]{\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  padding-left:10px\n}\n@media(min-width:768px){\n.container>.card .content .color[data-v-504fb8b0]{\n    padding:8px 20px\n}\n}\n.container>.card .content .color h3[data-v-504fb8b0]{\n  color:#fff;\n  font-weight:300;\n  font-size:10px;\n  text-transform:uppercase;\n  letter-spacing:2px;\n  margin-right:2px\n}\n@media(min-width:768px){\n.container>.card .content .color h3[data-v-504fb8b0]{\n    font-weight:400;\n    font-size:14px;\n    margin-right:10px\n}\n}\n.container>.card .content .color span[data-v-504fb8b0]{\n  width:15px;\n  height:15px;\n  background:#fff;\n  border-radius:50%;\n  margin:0 5px;\n  border:2px solid #fff;\n  box-sizing:border-box;\n  cursor:pointer\n}\n@media(min-width:768px){\n.container>.card .content .color span[data-v-504fb8b0]{\n    width:20px;\n    height:20px\n}\n}\n.container>.card .content .color span[data-v-504fb8b0]:nth-child(2){\n  background:#111\n}\n.container>.card .content .color span[data-v-504fb8b0]:nth-child(3){\n  background:#a4b2bf\n}\n.container>.card .content a[data-v-504fb8b0]{\n  position:relative;\n  top:10px;\n  display:inline-block;\n  background:#fff;\n  border-radius:40px;\n  font-weight:500;\n  padding:1px;\n  font-size:10px;\n  letter-spacing:1px;\n  color:#111;\n  text-decoration:none;\n  text-transform:uppercase\n}\n@media(min-width:768px){\n.container>.card .content a[data-v-504fb8b0]{\n    font-weight:600;\n    padding:8px;\n    font-size:12px\n}\n}\n.container>.card:hover .img-box[data-v-504fb8b0]{\n  transform:translateY(-40px)\n}\n.container>.card:hover .img-box img[data-v-504fb8b0]{\n  transform:translate(-20px,-40px) rotate(-25deg) scale(1.4)\n}\n.container>.card:hover .img-box h2[data-v-504fb8b0]{\n  transform:translateY(-60px)\n}\n.container>.card:hover .content[data-v-504fb8b0]{\n  opacity:1;\n  visibility:visible;\n  transform:translateY(-50px)\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=glass-morphic-product-list.js.map