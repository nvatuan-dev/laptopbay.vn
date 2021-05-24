import { wrapFunctional } from './utils'

export { default as Arrow } from '../../components/Arrow.vue'
export { default as BrandCard } from '../../components/BrandCard.vue'
export { default as BrandCardList } from '../../components/BrandCardList.vue'
export { default as Button } from '../../components/Button.vue'
export { default as Carousel } from '../../components/Carousel.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as GlassMorphicProduct } from '../../components/GlassMorphicProduct.vue'
export { default as GlassMorphicProductList } from '../../components/GlassMorphicProductList.vue'
export { default as MegaMenu } from '../../components/MegaMenu.vue'
export { default as MenuSide } from '../../components/MenuSide.vue'
export { default as Product } from '../../components/Product.vue'
export { default as ProductCarousel } from '../../components/ProductCarousel.vue'
export { default as ProductList } from '../../components/ProductList.vue'
export { default as SearchBar } from '../../components/SearchBar.vue'
export { default as SideGallery } from '../../components/SideGallery.vue'

export const LazyArrow = import('../../components/Arrow.vue' /* webpackChunkName: "components/arrow" */).then(c => wrapFunctional(c.default || c))
export const LazyBrandCard = import('../../components/BrandCard.vue' /* webpackChunkName: "components/brand-card" */).then(c => wrapFunctional(c.default || c))
export const LazyBrandCardList = import('../../components/BrandCardList.vue' /* webpackChunkName: "components/brand-card-list" */).then(c => wrapFunctional(c.default || c))
export const LazyButton = import('../../components/Button.vue' /* webpackChunkName: "components/button" */).then(c => wrapFunctional(c.default || c))
export const LazyCarousel = import('../../components/Carousel.vue' /* webpackChunkName: "components/carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyGlassMorphicProduct = import('../../components/GlassMorphicProduct.vue' /* webpackChunkName: "components/glass-morphic-product" */).then(c => wrapFunctional(c.default || c))
export const LazyGlassMorphicProductList = import('../../components/GlassMorphicProductList.vue' /* webpackChunkName: "components/glass-morphic-product-list" */).then(c => wrapFunctional(c.default || c))
export const LazyMegaMenu = import('../../components/MegaMenu.vue' /* webpackChunkName: "components/mega-menu" */).then(c => wrapFunctional(c.default || c))
export const LazyMenuSide = import('../../components/MenuSide.vue' /* webpackChunkName: "components/menu-side" */).then(c => wrapFunctional(c.default || c))
export const LazyProduct = import('../../components/Product.vue' /* webpackChunkName: "components/product" */).then(c => wrapFunctional(c.default || c))
export const LazyProductCarousel = import('../../components/ProductCarousel.vue' /* webpackChunkName: "components/product-carousel" */).then(c => wrapFunctional(c.default || c))
export const LazyProductList = import('../../components/ProductList.vue' /* webpackChunkName: "components/product-list" */).then(c => wrapFunctional(c.default || c))
export const LazySearchBar = import('../../components/SearchBar.vue' /* webpackChunkName: "components/search-bar" */).then(c => wrapFunctional(c.default || c))
export const LazySideGallery = import('../../components/SideGallery.vue' /* webpackChunkName: "components/side-gallery" */).then(c => wrapFunctional(c.default || c))
