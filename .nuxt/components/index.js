import { wrapFunctional } from './utils'

export { default as Carousel } from '../../components/Carousel.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as MegaMenu } from '../../components/MegaMenu.vue'
export { default as Product } from '../../components/Product.vue'
export { default as ProductList } from '../../components/ProductList.vue'
export { default as SearchBar } from '../../components/SearchBar.vue'

export const LazyCarousel = import('../../components/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyMegaMenu = import('../../components/MegaMenu.vue' /* webpackChunkName: "components/mega-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyProduct = import('../../components/Product.vue' /* webpackChunkName: "components/product" */).then(c => wrapFunctional(c.default || c))
export const LazyProductList = import('../../components/ProductList.vue' /* webpackChunkName: "components/product-list" */).then(c => wrapFunctional(c.default || c))
export const LazySearchBar = import('../../components/SearchBar.vue' /* webpackChunkName: "components/search-bar" */).then(c => wrapFunctional(c.default || c))
