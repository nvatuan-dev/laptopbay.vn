exports.ids = [4,3];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandCard.vue?vue&type=template&id=a79bc868&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"relative bg-white py-5 px-5 rounded-3xl w-48 my-4 shadow-xl\"><div class=\"mt-8\"><div class=\"flex items-center\"><img"+(_vm._ssrAttr("src",_vm.brand.src))+"></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BrandCard.vue?vue&type=template&id=a79bc868&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BrandCardvue_type_script_lang_js_ = ({
  props: ['brand']
});
// CONCATENATED MODULE: ./components/BrandCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandCardvue_type_script_lang_js_ = (BrandCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BrandCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BrandCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c79b94a2"
  
)

/* harmony default export */ var BrandCard = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandCardList.vue?vue&type=template&id=e81d31ec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hidden md:flex"},[_vm._ssrNode("<div class=\"grid mx-auto gap-6 justify-between sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 \">","</div>",_vm._l((_vm.brands),function(brand){return _c('BrandCard',{key:brand.title,attrs:{"brand":brand}})}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/BrandCardList.vue?vue&type=template&id=e81d31ec&

// CONCATENATED MODULE: ./constant/brand.js
const brands = [{
  title: 'Gigabyte',
  src: __webpack_require__(49)
}, {
  title: 'HP',
  src: __webpack_require__(50)
}, {
  title: 'MSI',
  src: __webpack_require__(51)
}, {
  title: 'Razer',
  src: __webpack_require__(52)
}, {
  title: 'Roccat',
  src: __webpack_require__(53)
}];
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/BrandCardList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var BrandCardListvue_type_script_lang_js_ = ({
  props: ['brand'],

  data() {
    return {
      brands: brands
    };
  }

});
// CONCATENATED MODULE: ./components/BrandCardList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BrandCardListvue_type_script_lang_js_ = (BrandCardListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/BrandCardList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BrandCardListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bc373026"
  
)

/* harmony default export */ var BrandCardList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BrandCard: __webpack_require__(110).default})


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/gigabyte.49a9663.png";

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/hp.688ceea.png";

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/msi.8ec819e.png";

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/razer.5329576.png";

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/roccat.9d5cb21.png";

/***/ })

};;
//# sourceMappingURL=brand-card-list.js.map