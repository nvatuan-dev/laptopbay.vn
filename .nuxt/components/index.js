import { wrapFunctional } from './utils'

export { default as Arrow } from '../../components/Arrow.vue'
export { default as Carousel } from '../../components/Carousel.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as MegaMenu } from '../../components/MegaMenu.vue'
export { default as Product } from '../../components/Product.vue'
export { default as ProductCarousel } from '../../components/ProductCarousel.vue'
export { default as ProductList } from '../../components/ProductList.vue'
export { default as SearchBar } from '../../components/SearchBar.vue'

export const LazyArrow = import('../../components/Arrow.vue' /* webpackChunkName: "components/arrow" */).then(c => wrapFunctional(c.default || c))
export const LazyCarousel = import('../../components/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyMegaMenu = import('../../components/MegaMenu.vue' /* webpackChunkName: "components/mega-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyProduct = import('../../components/Product.vue' /* webpackChunkName: "components/product" */).then(c => wrapFunctional(c.default || c))
export const LazyProductCarousel = import('../../components/ProductCarousel.vue' /* webpackChunkName: "components/product-carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyProductList = import('../../components/ProductList.vue' /* webpackChunkName: "components/product-list" */).then(c => wrapFunctional(c.default || c))
export const LazySearchBar = import('../../components/SearchBar.vue' /* webpackChunkName: "components/search-bar" */).then(c => wrapFunctional(c.default || c))
