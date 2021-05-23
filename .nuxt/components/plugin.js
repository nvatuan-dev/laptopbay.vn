import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Arrow: () => import('../../components/Arrow.vue' /* webpackChunkName: "components/arrow" */).then(c => wrapFunctional(c.default || c)),
  Carousel: () => import('../../components/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  GlassMorphicProduct: () => import('../../components/GlassMorphicProduct.vue' /* webpackChunkName: "components/glass-morphic-product" */).then(c => wrapFunctional(c.default || c)),
  GlassMorphicProductList: () => import('../../components/GlassMorphicProductList.vue' /* webpackChunkName: "components/glass-morphic-product-list" */).then(c => wrapFunctional(c.default || c)),
  MegaMenu: () => import('../../components/MegaMenu.vue' /* webpackChunkName: "components/mega-menu" */).then(c => wrapFunctional(c.default || c)),
  Product: () => import('../../components/Product.vue' /* webpackChunkName: "components/product" */).then(c => wrapFunctional(c.default || c)),
  ProductCarousel: () => import('../../components/ProductCarousel.vue' /* webpackChunkName: "components/product-carousel" */).then(c => wrapFunctional(c.default || c)),
  ProductList: () => import('../../components/ProductList.vue' /* webpackChunkName: "components/product-list" */).then(c => wrapFunctional(c.default || c)),
  SearchBar: () => import('../../components/SearchBar.vue' /* webpackChunkName: "components/search-bar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
