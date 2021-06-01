exports.ids = [15,14];
exports.modules = {

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCardList.vue?vue&type=template&id=37b1b0ad&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex justify-center bg-gray-200 rounded-2xl"},[_vm._ssrNode("<div class=\"grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 md:gap-x-4 gap-y-4 py-4 items-center\">","</div>",_vm._l((_vm.products),function(product){return _c('ProductCard',{key:product.title,attrs:{"product":product}})}),1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductCardList.vue?vue&type=template&id=37b1b0ad&

// EXTERNAL MODULE: ./components/ProductCard.vue + 4 modules
var ProductCard = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCardList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var ProductCardListvue_type_script_lang_js_ = ({
  components: {
    ProductCard: ProductCard["default"]
  },

  data() {
    return {
      products: [{
        title: 'Thinkpad X1',
        price: '$500',
        src: __webpack_require__(43)
      }, {
        title: 'Thinkpad X1',
        price: '$650',
        src: __webpack_require__(44)
      }, {
        title: 'Thinkpad X1',
        price: '$720',
        src: __webpack_require__(45)
      }, {
        title: 'Macbook',
        price: '$1000',
        src: __webpack_require__(40)
      }, {
        title: 'Macbook',
        price: '$1000',
        src: __webpack_require__(40)
      }, {
        title: 'Macbook',
        price: '$1000',
        src: __webpack_require__(40)
      }, {
        title: 'Macbook',
        price: '$1000',
        src: __webpack_require__(40)
      }, {
        title: 'Macbook',
        price: '$1000',
        src: __webpack_require__(40)
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/ProductCardList.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductCardListvue_type_script_lang_js_ = (ProductCardListvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ProductCardList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0becb555"
  
)

/* harmony default export */ var ProductCardList = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ProductCard: __webpack_require__(66).default})


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/4.19cc8c1.jpg";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1.571d398.jpg";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/2.3ade9c0.jpeg";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/3.3a49264.jpg";

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=template&id=1458e2b8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"tilt",rawName:"v-tilt"}],staticClass:"mx-2 mb-6 sm:mb-0 relative overflow-hidden rounded-lg max-w-xs shadow-lg"},[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.product.src))+" class=\"w-full object-cover rounded-lg h-44 md:w-full lg:w-80 md:h-auto md:w-48\"> <div class=\"relative px-1 h-auto sm:px-4 md:-mt-16\"><div class=\"bg-blue-500 p-2 rounded-lg shadow-lg\"><div class=\"hidden md:flex items-baseline\"><span class=\"bg-teal-200 text-white text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide\">New</span> <div class=\"ml-2 text-white uppercase text-xs font-semibold tracking-wider\">\n          2 baths • 3 rooms\n        </div></div> <h4 class=\"mt-1 text-white text-md font-semibold uppercase leading-tight truncate\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.product.title)+"\n      ")+"</h4> <div class=\"text-white mt-0.5\">"+_vm._ssrEscape("\n        "+_vm._s(_vm.product.price)+"\n      ")+"</div> <div class=\"hidden sm:text-white sm:mt-4\"><span class=\"text-teal-600 text-md font-semibold\">4/5 ratings\n        </span></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=template&id=1458e2b8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ProductCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ProductCardvue_type_script_lang_js_ = ({
  name: 'product',
  props: ['product']
});
// CONCATENATED MODULE: ./components/ProductCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ProductCardvue_type_script_lang_js_ = (ProductCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/ProductCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ProductCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "30097717"
  
)

/* harmony default export */ var ProductCard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=product-card-list.js.map