exports.ids = [5,9,20,21];
exports.modules = {

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(112);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("7ade0e08", content, true)

/***/ }),

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".vue-flux .flux-button{\n  padding:0;\n  width:6%;\n  min-width:26px;\n  min-height:26px;\n  max-width:40px;\n  max-height:40px\n}\n\n.flux-button{\n  border:0;\n  cursor:pointer;\n  background-color:transparent\n}\n\n.flux-button:hover>svg line,.flux-button:hover>svg polyline{\n  stroke:#ff0\n}\n\n.flux-button:hover>svg polygon,.flux-button:hover>svg rect{\n  fill:#ff0\n}\n\n.flux-button>svg{\n  width:100%\n}\n\n.flux-button>svg *{\n  cursor:pointer\n}\n\n.flux-button>svg>circle{\n  fill:rgba(0,0,0,.7)\n}\n\n.flux-button>svg line,.flux-button>svg polygon,.flux-button>svg polyline,.flux-button>svg rect{\n  stroke-linecap:round;\n  stroke-linejoin:round;\n  stroke:#fff;\n  stroke-width:14;\n  fill:none\n}\n\n.flux-button>svg polygon,.flux-button>svg rect{\n  fill:#fff;\n  stroke-width:0\n}\n\n.flux-parallax img{\n  position:absolute;\n  visibility:hidden\n}\n\n.flux-parallax :not(.image){\n  z-index:1\n}\n\n.flux-transition,.vue-flux{\n  position:relative\n}\n\n.vue-flux .flux-transition{\n  position:absolute\n}\n\n.vue-flux .complements,.vue-flux>.flux-image{\n  position:absolute;\n  top:0;\n  left:0\n}\n\n.vue-flux .complements{\n  right:0;\n  bottom:0;\n  display:flex;\n  flex-direction:column;\n  justify-content:space-between;\n  z-index:45\n}\n\n.vue-flux .complements .remainder{\n  flex-basis:50%\n}\n\n.vue-flux .flux-caption{\n  flex:none;\n  width:100%;\n  font-size:.8rem;\n  line-height:1.1rem;\n  padding:6px;\n  box-sizing:border-box;\n  color:#fff;\n  text-align:center;\n  background-color:rgba(0,0,0,.65);\n  opacity:0\n}\n\n.vue-flux .flux-caption.visible{\n  opacity:1;\n  transition:opacity .3s ease-in\n}\n\n.vue-flux .flux-controls{\n  flex:none;\n  display:flex;\n  justify-content:space-between\n}\n\n.vue-flux .flux-controls.fade-enter,.vue-flux .flux-controls.fade-leave-to{\n  opacity:0\n}\n\n.vue-flux .flux-controls.fade-enter-active,.vue-flux .flux-controls.fade-leave-active{\n  transition:opacity .3s ease-in\n}\n\n.vue-flux .flux-controls .prev{\n  margin-left:4%\n}\n\n.vue-flux .flux-controls .next{\n  margin-right:4%\n}\n\n.vue-flux .flux-index{\n  flex:none;\n  margin-bottom:2%;\n  font-size:0;\n  text-align:center\n}\n\n.vue-flux .flux-index .fade-enter,.vue-flux .flux-index .fade-leave-to{\n  opacity:0\n}\n\n.vue-flux .flux-index .fade-enter-active,.vue-flux .flux-index .fade-leave-active{\n  transition:opacity .3s ease-in\n}\n\n.vue-flux .flux-index nav{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  display:block;\n  margin:0;\n  overflow:hidden;\n  visibility:hidden\n}\n\n.vue-flux .flux-index nav.visible{\n  z-index:101;\n  visibility:visible\n}\n\n.vue-flux .flux-index ul{\n  display:block;\n  height:100%;\n  margin:100% 0 0;\n  padding:24px 0 0 24px;\n  list-style-type:none;\n  text-align:center;\n  overflow-y:auto;\n  background-color:#000;\n  transition:all .5s linear;\n  font-size:0\n}\n\n.vue-flux .flux-index li{\n  position:relative;\n  display:inline-block;\n  box-sizing:content-box;\n  margin:0 24px 24px 0;\n  cursor:pointer;\n  transition:all .3s ease\n}\n\n.vue-flux .flux-index li:hover{\n  box-shadow:0 0 3px 2px hsla(0,0%,100%,.6)\n}\n\n.vue-flux .flux-index li.current{\n  cursor:auto;\n  border:1px solid #fff;\n  box-shadow:none\n}\n\n.vue-flux .flux-pagination{\n  flex:none;\n  margin-bottom:.5%\n}\n\n.vue-flux .flux-pagination ul{\n  display:flex;\n  flex-wrap:wrap;\n  justify-content:center;\n  margin:0;\n  padding:0;\n  list-style-type:none;\n  text-align:center;\n  position:relative\n}\n\n.vue-flux .flux-pagination li{\n  display:block;\n  margin:0 1% 1.5%;\n  cursor:pointer;\n  width:2%;\n  height:0;\n  min-width:10px;\n  min-height:10px;\n  padding-bottom:2%;\n  position:relative;\n  box-sizing:border-box\n}\n\n.vue-flux .flux-pagination .pagination-item{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  box-sizing:border-box;\n  border:2px solid #fff;\n  border-radius:50%;\n  background-color:rgba(0,0,0,.7);\n  transition:background-color .2s ease-in,border .2s ease-in\n}\n\n.vue-flux .flux-pagination .pagination-item:hover{\n  border-color:#000;\n  background-color:#fff\n}\n\n.vue-flux .flux-pagination .pagination-item.active{\n  border-color:#fff;\n  background-color:#fff\n}\n\n.vue-flux .preloader{\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  z-index:-1\n}\n\n.vue-flux .preloader .spinner{\n  position:absolute;\n  top:50%;\n  left:50%;\n  margin-top:-40px;\n  margin-left:-40px;\n  width:80px;\n  height:80px;\n  z-index:14\n}\n\n.vue-flux .preloader .spinner .pct{\n  position:absolute;\n  right:0;\n  left:0;\n  height:80px;\n  line-height:80px;\n  text-align:center;\n  font-weight:700;\n  z-index:1\n}\n\n.vue-flux .preloader .spinner .border{\n  box-sizing:border-box;\n  width:100%;\n  height:100%;\n  border-color:#3498db #f3f3f3;\n  border-style:solid;\n  border-width:14px;\n  border-radius:50%;\n  background-color:#f3f3f3;\n  -webkit-animation:spin 2s linear infinite;\n  animation:spin 2s linear infinite\n}\n\n@-webkit-keyframes spin{\n  0%{\n    transform:rotate(0deg)\n  }\n\n  to{\n    transform:rotate(1turn)\n  }\n}\n\n@keyframes spin{\n  0%{\n    transform:rotate(0deg)\n  }\n\n  to{\n    transform:rotate(1turn)\n  }\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".carousel-wrap{\n  width:895px;\n  margin:0 auto;\n  border-radius:25px;\n  z-index:1;\n  display:inline-flex\n}\n@media only screen and (max-width:1500px){\n.carousel-wrap{\n    width:860px;\n    margin:0 auto;\n    border-radius:25px;\n    z-index:1;\n    display:inline-flex\n}\n}\n.container-carousel{\n  margin-left:auto;\n  margin-right:auto;\n  padding-top:35px;\n  padding-bottom:35px;\n  background-color:#1e3a8a;\n  border-radius:25px\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Carousel.vue?vue&type=template&id=32010702&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"container-carousel"},[_c('MenuSide',{staticClass:"inline-block pl-6"}),_vm._v(" "),_c('vue-flux',{staticClass:"carousel-wrap ",attrs:{"options":_vm.vfOptions,"images":_vm.vfImages,"transitions":_vm.vfTransitions},scopedSlots:_vm._u([{key:"preloader",fn:function(){return [_c('flux-preloader')]},proxy:true},{key:"caption",fn:function(){return [_c('flux-caption')]},proxy:true},{key:"controls",fn:function(){return [_c('flux-controls')]},proxy:true},{key:"pagination",fn:function(){return [_c('flux-pagination')]},proxy:true}])}),_vm._v(" "),_c('SideGalleryVerticle'),_vm._v(" "),_c('SideGallery',{staticClass:"pl-52"})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Carousel.vue?vue&type=template&id=32010702&

// EXTERNAL MODULE: external "vue-flux/dist-ssr/vue-flux.umd.min.js"
var vue_flux_umd_min_js_ = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/vue-flux/dist-ssr/vue-flux.css
var vue_flux = __webpack_require__(111);

// EXTERNAL MODULE: ./components/MenuSide.vue + 2 modules
var MenuSide = __webpack_require__(68);

// EXTERNAL MODULE: ./components/SideGallery.vue + 4 modules
var SideGallery = __webpack_require__(63);

// EXTERNAL MODULE: ./components/SideGalleryVerticle.vue + 4 modules
var SideGalleryVerticle = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Carousel.vue?vue&type=script&lang=js&
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





/* harmony default export */ var Carouselvue_type_script_lang_js_ = ({
  components: {
    VueFlux: vue_flux_umd_min_js_["VueFlux"],
    FluxCaption: vue_flux_umd_min_js_["FluxCaption"],
    FluxControls: vue_flux_umd_min_js_["FluxControls"],
    FluxPagination: vue_flux_umd_min_js_["FluxPagination"],
    FluxPreloader: vue_flux_umd_min_js_["FluxPreloader"],
    MenuSide: MenuSide["default"],
    SideGallery: SideGallery["default"],
    SideGalleryVerticle: SideGalleryVerticle["default"],
    MenuSide: MenuSide["default"]
  },
  data: () => ({
    vfOptions: {
      autoplay: true,
      aspectRatio: "16:9"
    },
    vfImages: ["https://laptopchat.vn/wp-content/uploads/2020/12/Lenovo-ThinkPad-P1-Gen-3.jpg", "https://cdn.editorji.com/5f1c3122c3ee8_alienware-m15-r3.jpg", "https://www.esquireme.com/public/images/2020/06/25/lenovo-legion-y740-15-2.jpg"],
    vfTransitions: ['blinds2d']
  })
});
// CONCATENATED MODULE: ./components/Carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Carouselvue_type_script_lang_js_ = (Carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Carousel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(113)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Carouselvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5a9a2098"
  
)

/* harmony default export */ var Carousel = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MenuSide: __webpack_require__(68).default,SideGalleryVerticle: __webpack_require__(64).default,SideGallery: __webpack_require__(63).default})


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/keyboard.a874c69.jpg";

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/razer_large.dc61cf4.jpg";

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/thinkpad_mouse.22a35a3.jpg";

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("062bd4aa", content, true, context)
};

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(73);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("31307f52", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideGallery.vue?vue&type=template&id=6869fd8d&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"inline-flex pt-4 space-x-3 pl-14 lg:pl-20\" data-v-6869fd8d>"+(_vm._ssrList((_vm.images),function(thumb,thumbIndex){return ("<div data-v-6869fd8d><img width=\"275\" height=\"275\""+(_vm._ssrAttr("src",thumb.url))+" class=\"thumbnail\" data-v-6869fd8d></div>")}))+"</div> "),_c('LightGallery',{attrs:{"images":_vm.images,"index":_vm.index,"disable-scroll":false},on:{"close":function($event){_vm.index = null}}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SideGallery.vue?vue&type=template&id=6869fd8d&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideGallery.vue?vue&type=script&lang=js&
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
/* harmony default export */ var SideGalleryvue_type_script_lang_js_ = ({
  components: {},
  data: () => ({
    images: [{
      title: 'Keyboard',
      url: __webpack_require__(36)
    }, {
      title: 'Headphone',
      url: __webpack_require__(37)
    }, {
      title: 'Mouse',
      url: __webpack_require__(38)
    }],
    index: null
  })
});
// CONCATENATED MODULE: ./components/SideGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SideGalleryvue_type_script_lang_js_ = (SideGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SideGallery.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SideGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6869fd8d",
  "40e28e73"
  
)

/* harmony default export */ var SideGallery = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideGalleryVerticle.vue?vue&type=template&id=85520f9c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hidden 2xl:inline-flex 2xl:h-full 2xl:ml-4"},[_vm._ssrNode("<div class=\"flex-col pt-3 space-y-5\">"+(_vm._ssrList((_vm.images),function(thumb,thumbIndex){return ("<div><img width=\"230\" height=\"230\""+(_vm._ssrAttr("src",thumb.url))+" class=\"thumbnail\"></div>")}))+"</div> "),_c('LightGallery',{attrs:{"images":_vm.images,"index":_vm.index,"disable-scroll":false},on:{"close":function($event){_vm.index = null}}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SideGalleryVerticle.vue?vue&type=template&id=85520f9c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideGalleryVerticle.vue?vue&type=script&lang=js&
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
/* harmony default export */ var SideGalleryVerticlevue_type_script_lang_js_ = ({
  components: {},
  data: () => ({
    images: [{
      title: 'Keyboard',
      url: __webpack_require__(36)
    }, {
      title: 'Headphone',
      url: __webpack_require__(37)
    }, {
      title: 'Mouse',
      url: __webpack_require__(38)
    }],
    index: null
  })
});
// CONCATENATED MODULE: ./components/SideGalleryVerticle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SideGalleryVerticlevue_type_script_lang_js_ = (SideGalleryVerticlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/SideGalleryVerticle.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(72)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SideGalleryVerticlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7d7f8352"
  
)

/* harmony default export */ var SideGalleryVerticle = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MenuSide.vue?vue&type=template&id=65745aa2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex-col border-2 rounded-lg space-y-2 px-2 bg-white mx-6"},[_vm._ssrNode("<div class=\"pt-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-propeller inline\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <circle cx=\"12\" cy=\"13\" r=\"3\"></circle> <path d=\"M14.167 10.5c.722 -1.538 1.156 -3.043 1.303 -4.514c.22 -1.63 -.762 -2.986 -3.47 -2.986s-3.69 1.357 -3.47 2.986c.147 1.471 .581 2.976 1.303 4.514\"></path> <path d=\"M13.169 16.751c.97 1.395 2.057 2.523 3.257 3.386c1.3 1.006 2.967 .833 4.321 -1.512c1.354 -2.345 .67 -3.874 -.85 -4.498c-1.348 -.608 -2.868 -.985 -4.562 -1.128\"></path> <path d=\"M8.664 12.999c-1.693 .143 -3.213 .52 -4.56 1.128c-1.522 .623 -2.206 2.153 -.852 4.498s3.02 2.517 4.321 1.512c1.2 -.863 2.287 -1.991 3.258 -3.386\"></path></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Điện máy - Điện gia dụng</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-device-laptop inline\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <line x1=\"3\" y1=\"19\" x2=\"21\" y2=\"19\"></line> <rect x=\"5\" y=\"6\" width=\"14\" height=\"10\" rx=\"1\"></rect></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Laptop &amp; Macbook</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-device-tv inline\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <rect x=\"3\" y=\"7\" width=\"18\" height=\"13\" rx=\"2\"></rect> <polyline points=\"16 3 12 7 8 3\"></polyline></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Tivi - Màn hình TV</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 inline\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z\"></path></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Điện thoại &amp; Thiết bị thông minh</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-devices-pc inline\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <path d=\"M3 5h6v14h-6z\"></path> <path d=\"M12 9h10v7h-10z\"></path> <path d=\"M14 19h6\"></path> <path d=\"M17 16v3\"></path> <path d=\"M6 13v.01\"></path> <path d=\"M6 16v.01\"></path></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">PC - Máy tính đồng bộ</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 inline\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"></path></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Màn hình máy tính</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" class=\"h-6 w-6 inline\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z\"></path></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Linh kiện máy tính</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-device-gamepad inline\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"></rect> <path d=\"M6 12h4m-2 -2v4\"></path> <line x1=\"15\" y1=\"11\" x2=\"15\" y2=\"11.01\"></line> <line x1=\"18\" y1=\"13\" x2=\"18\" y2=\"13.01\"></line></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Hi-End Gaming</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-device-computer-camera inline\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <circle cx=\"12\" cy=\"10\" r=\"7\"></circle> <circle cx=\"12\" cy=\"10\" r=\"3\"></circle> <path d=\"M8 16l-2.091 3.486a1 1 0 0 0 .857 1.514h10.468a1 1 0 0 0 .857 -1.514l-2.091 -3.486\"></path></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Phụ kiện &amp; Thiết bị ngoại vi</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-device-speaker inline\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <rect x=\"5\" y=\"3\" width=\"14\" height=\"18\" rx=\"2\"></rect> <circle cx=\"12\" cy=\"14\" r=\"3\"></circle> <line x1=\"12\" y1=\"7\" x2=\"12\" y2=\"7.01\"></line></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Thiết bị âm thanh</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-camera inline\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <path d=\"M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2\"></path> <circle cx=\"12\" cy=\"13\" r=\"3\"></circle></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Máy ảnh - Máy quay phim</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-printer inline\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <path d=\"M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2\"></path> <path d=\"M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4\"></path> <rect x=\"7\" y=\"13\" width=\"10\" height=\"8\" rx=\"2\"></rect></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Thiết bị văn phòng</a></div> <div class=\"border-t-2\"></div> <div class=\"flex-1 pb-2\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"icon icon-tabler icon-tabler-router inline\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path> <rect x=\"3\" y=\"13\" width=\"18\" height=\"8\" rx=\"2\"></rect> <line x1=\"17\" y1=\"17\" x2=\"17\" y2=\"17.01\"></line> <line x1=\"13\" y1=\"17\" x2=\"13\" y2=\"17.01\"></line> <line x1=\"15\" y1=\"13\" x2=\"15\" y2=\"11\"></line> <path d=\"M11.75 8.75a4 4 0 0 1 6.5 0\"></path> <path d=\"M8.5 6.5a8 8 0 0 1 13 0\"></path></svg> <a href=\"#\" class=\"no-underline cursor-pointer text-xs\">Thiết bị mạng - An ninh</a></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MenuSide.vue?vue&type=template&id=65745aa2&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/MenuSide.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "76d718e4"
  
)

/* harmony default export */ var MenuSide = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideGallery_vue_vue_type_style_index_0_id_6869fd8d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideGallery_vue_vue_type_style_index_0_id_6869fd8d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideGallery_vue_vue_type_style_index_0_id_6869fd8d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideGallery_vue_vue_type_style_index_0_id_6869fd8d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideGallery_vue_vue_type_style_index_0_id_6869fd8d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".thumbnail[data-v-6869fd8d]{\n  border:1px solid #cdcdcd;\n  padding:5px;\n  background:#eee;\n  border-radius:5px;\n  cursor:pointer\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideGalleryVerticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideGalleryVerticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideGalleryVerticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideGalleryVerticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideGalleryVerticle_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".thumbnail{\n  border:1px solid #cdcdcd;\n  padding:5px;\n  background:#eee;\n  border-radius:5px;\n  cursor:pointer\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(114);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2b494d62", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=carousel.js.map