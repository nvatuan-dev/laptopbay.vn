exports.ids = [10];
exports.modules = Array(35).concat([
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/x1gen9.c7a14c5.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/keyboard.a874c69.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/razer_large.dc61cf4.jpg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/thinkpad_mouse.22a35a3.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/promotion_1.c4708b1.jpg";

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/x1gen6.d4638c1.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/review.7d3f161.png";

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gigabyte.49a9663.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hp.688ceea.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/msi.8ec819e.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/razer.5329576.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/roccat.9d5cb21.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/T14s.6538a8d.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/T460.8fc921f.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/T560.ff7ab52.png";

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sidebar.81ac349.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/rightbar.4a33142.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(107);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6f5f6d62", content, true, context)
};

/***/ }),
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_2.ead97f8.jpg";

/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileCard.vue?vue&type=template&id=83daa6a4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",class:{'open': _vm.open && _vm.active},on:{"click":function($event){_vm.open = !_vm.open}}},[_vm._ssrNode("<div class=\"img\""+(_vm._ssrStyle(null,_vm.backgroundImage, null))+" data-v-83daa6a4></div> <div class=\"title\" data-v-83daa6a4>"+_vm._ssrEscape(_vm._s(_vm.item.title))+"</div> <div class=\"description\" data-v-83daa6a4>"+_vm._ssrEscape(_vm._s(_vm.item.description))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MobileCard.vue?vue&type=template&id=83daa6a4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MobileCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MobileCardvue_type_script_lang_js_ = ({
  data: () => {
    return {
      open: false
    };
  },
  props: ['item', 'active'],
  computed: {
    backgroundImage() {
      return {
        'background-image': 'url(' + __webpack_require__(81)("./assets" + this.item.img) + ')'
      };
    }

  }
});
// CONCATENATED MODULE: ./components/MobileCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MobileCardvue_type_script_lang_js_ = (MobileCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/MobileCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(106)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MobileCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "83daa6a4",
  "9e8325ec"
  
)

/* harmony default export */ var MobileCard = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./assets/Logo.png": 22,
	"./assets/acer3.png": 82,
	"./assets/banner/banner_1.jpg": 83,
	"./assets/banner/banner_2.jpg": 62,
	"./assets/banner/banner_3.jpg": 84,
	"./assets/banner/verticle_1.jpg": 85,
	"./assets/banner/verticle_2.jpeg": 86,
	"./assets/banner/verticle_3.jpg": 87,
	"./assets/bocongthuong.png": 88,
	"./assets/brand/gigabyte.png": 49,
	"./assets/brand/hp.png": 50,
	"./assets/brand/msi.png": 51,
	"./assets/brand/razer.png": 52,
	"./assets/brand/roccat.png": 53,
	"./assets/css/tailwind.css": 13,
	"./assets/facebook.png": 89,
	"./assets/google-plus.png": 90,
	"./assets/instagram.png": 91,
	"./assets/laptop-png/T14s.png": 54,
	"./assets/laptop-png/T460.png": 55,
	"./assets/laptop-png/T560.png": 56,
	"./assets/laptop-png/x1gen6.png": 41,
	"./assets/laptop-png/x1gen7.png": 92,
	"./assets/laptop-png/x1gen9.png": 35,
	"./assets/mobileSlider/slide_01.jpg": 93,
	"./assets/mobileSlider/slide_02.jpg": 94,
	"./assets/mobileSlider/slide_03.jpg": 95,
	"./assets/mobileSlider/slide_04.jpg": 96,
	"./assets/others/keyboard.jpg": 36,
	"./assets/others/razer_large.jpg": 37,
	"./assets/others/thinkpad_mouse.jpg": 38,
	"./assets/others/thumb_keyboard.png": 97,
	"./assets/others/thumb_mouse.png": 98,
	"./assets/others/thumb_razer.png": 99,
	"./assets/promotion/promotion_1.jpg": 39,
	"./assets/review.png": 42,
	"./assets/rightbar.png": 59,
	"./assets/scss/base/_breakpoints.scss": 100,
	"./assets/scss/base/_mixins.scss": 102,
	"./assets/scss/main.scss": 104,
	"./assets/sidebar.png": 58
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 81;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/acer3.1fcc423.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_1.b954699.jpg";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/banner_3.8728721.jpg";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/verticle_1.8d2ab55.jpg";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/verticle_2.a1a894d.jpeg";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/verticle_3.8121014.jpg";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bocongthuong.bf53676.png";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADQAAAA0AF5Y8+UAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAIpQTFRF////AAD/RliVSVeSSFyQRlmTRleRSFmWR1qSSFmUR1mTR1iUSFqSR1qTR1mUR1mTSFiSR1iTR1iUR1mTR1qTRlmUR1mUR1qSR1qTRlmTR1mTRliTRlmTR1mTR1iTR1mTR1qTR1mTR1mTRlmTR1mTR1mTR1mTR1mTR1mUR1mTRlmTR1mTR1mTR1mTDzUfHgAAAC10Uk5TAAEdIycoLC42OVNdYG9wdnyChZCXmJ2iqLXCx9LV2+Dh4uPk5ebn8PL09vz+lXQN5AAAAJhJREFUKM910scSwjAMRdEbSCAU04LpmN6t//89VsnISfx2mrN5I4nEOC+1eGcSjLTG4NrB4dvBE4y/5bCf9Y4iIgF8cwA2DZgSgQ6QTmavOryBrBw0nIBRDMZN2NsFMLDWfkLoUmYVg20IaQWHEHbFHMiLYt1o9WxvJfKIwT0GtwDUoa4KvD7tRYHTz3BWYFDvUy3RO5P8AZLpTyodVpEmAAAAAElFTkSuQmCC"

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAC6AAAAugFPHmCFAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAQ5QTFRF/////wAA/4AA/zMz/1Ur/0lJ/0BA/1U5/00z8k0z9Eo19Ucz9U479kw59kY190088k059U049Uo28Uw58kw68ks58kk48kg380w480k29Eg59Es49Eo58kk48ks48ko38kw580s580o480s38ko48ko48kk49Es59Eo48kk48ko380s480k380k380o480k480s49Eo39Eo59Eo38ks48ko48ko480s480o380o49Es39Eo48kk480o480k480o580k380o480s480o480s48ko480o480o380o480o480s580o49Eo480o480o480o480o480o380o480o480o480o480o480o480o480o4G6u0kQAAAFl0Uk5TAAECBQYHCAkKFBgZGhsdHigyNDY5Ojs8QEJDREhNTk9RVVZYYGRlcHJ2eHt9gYOEhYaHioyNjpOYm52eoKiusLi7vMDDyszP0NLU1t/h4+ft7/X3+Pv8/f6Hta2jAAAAzklEQVQYGb3Bh1aCYACG4ZfISmnYsGkWWdHegzZli/ai+O7/RvrB4zngBfg8dErvpHd24A7QbvpFiWinQM6RWkKyFiQ9rNeWL2KdklH6kPZtjIkli9SYNwqsSjfkNRQAl1IFY6qeGqK/fKfbssO7/vqAoprq9o8SX7zp2wZKaprtjpX45UqqAF2bvn8SKS4yUg11Xx1mQwosUrtSiNFQADif0qGNUYulFQzXn8dYlPS4Nrf1JOnaIuNYLc8OOTOvSkTbBdr0jHvne+4gnfYPOmgyS2bncE0AAAAASUVORK5CYII="

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAACaAAAAmgHdNkERAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAXFQTFRF////gCuqgCvV1YBV1aorpCSStB6HqhyOuByAxkdVxlVHlyOinhqVwSNqwSxhymFGnh6WrhuIeiS4hR+z1oBC24pCrh6IyEhRwRl3xT5auRqAwiZswi1mxkNTjSCnlSCh0GpG03VGhCCxrhuHuBuAvxl4xCBxxCVsxCxlxDNgxDtbx0JTx0pO2IBCdCXAlB6g0WtI35c/ph6Plh+fgyGxph6OyVNM1oBDnh6XtxqAxB9wxTRgxUJUpx2PwBh3xTxZyVRLdCTCnh6Yzl9K3pY+gyGxnR6Yzl9J14BCeyK5jR+o03VF24tAcyTBpx2OyVRL3pY+rxyHuBqAxkNUxkpPpx2Pwx9wxTRgyVRLjSCo1XVFpx2PhCGx14BCuBp/wBl3xTxaxkNUnh6YcyTBeyK5hCGxjSColR+gnh6Ypx2PrxyHuBp/wBl3wx9wwyZrxC1lxTRgxTxaxkNUx0pPyVRLzV9J0GpH1HVF14BC24tA3pY+6cS+zQAAAGN0Uk5TAAYGBgYOERISEhIWHR0dHSIvMjIyMjw8Pj5QUFBQV1dXV2hoaGhoaGhoaGhoaG5ubm5whYqKioqRkpKSkp2dnZ2qqqqqxMTExNPT09Pe3t7e5ubm5ujo6Ojw8PH6+vv7+/v+xuMUVAAAAWhJREFUGBldwYVSAgEAQMFndyIGBtiFrdiiYoEtdhfCdSGiX+9xwzDKLrbC8Y3Dt5zDjfFCHI3h9zzhRmyu+1hse7YnZ3Y7Frt3QUHk46aLf7puPiIFTMTjXv7yzlR54/EJNhM7ZFVXA/WviQV2EpscCXNklK1eCMLFalnJnTDNnHCEKPZiaz4VHafNpQ3QK4pIUh9QfiY9Lno8i4/SWTnQJ0nIcj+wJj+1Ymt9kteAfllGUQaAS2UJx5JyCQwoCqo6CDWq2o6jXVVrYFBV0bQhqNW0DhwdmlYLQ5qGrg8DV/oyjmX9ChjWdQxjBAgaz23Y2p6NIDBiGJjmKFARNV9WOjtXXsxoBTBqmliWH1vLueU4b8HmtyyOkwEyKtevk8nr9UoyAsljQp+7ZNXVkbX7GWIylfKRx5dKTVK0/3XbzT/dt1/7RdD0kE7vzY/lzO+l0w9N2NwH33kO3DiKp7ZOfnJOtqaKgV/NHmsUh+tSjQAAAABJRU5ErkJggg=="

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/x1gen7.1ec4310.png";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide_01.3531baf.jpg";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide_02.07b362a.jpg";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide_03.d59817d.jpg";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/slide_04.005d282.jpg";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/thumb_keyboard.1c525bc.png";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/thumb_mouse.491cb02.png";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/thumb_razer.2dd55a4.png";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("fc2340ac", content, true)

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(103);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("9c9a9154", content, true)

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(6).default("0cbdfe06", content, true)

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCard_vue_vue_type_style_index_0_id_83daa6a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCard_vue_vue_type_style_index_0_id_83daa6a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCard_vue_vue_type_style_index_0_id_83daa6a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCard_vue_vue_type_style_index_0_id_83daa6a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_4_node_modules_sass_resources_loader_lib_loader_js_ref_7_oneOf_1_5_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileCard_vue_vue_type_style_index_0_id_83daa6a4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-83daa6a4]{\n  position:relative;\n  width:100%;\n  height:600px;\n  background-color:#efefef;\n  overflow:hidden;\n  transition:all .5s ease\n}\n.card.open[data-v-83daa6a4]{\n  height:800px;\n  transform:translateY(-50px)\n}\n.card .img[data-v-83daa6a4]{\n  width:100%;\n  height:600px;\n  background-position:50%;\n  background-size:cover\n}\n.card .title[data-v-83daa6a4]{\n  position:absolute;\n  top:50px;\n  padding:5px 20px;\n  width:calc(100% - 20px);\n  height:40px;\n  font-size:1.6rem;\n  color:#fff;\n  background-color:rgba(0,0,0,.5)\n}\n.card .description[data-v-83daa6a4]{\n  padding:20px;\n  color:#333\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })
]);;
//# sourceMappingURL=mobile-card.js.map