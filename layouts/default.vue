<template>
  <div>
    <div class="block pb-2">
      <MegaMenu />
    </div>
    <div class="border-t-8 pb-2"></div>
    <div class="h-full" style="border-radius: 10px 10px 0 0">
      <Carousel />
    </div>
    <div>
      <BrandCardList />
    </div>
    <Button />
    <div>
      <ProductList />
    </div>
    <!-- Banner -->
    <div>
      <img src= "../assets/banner/banner_1.jpg">
    </div>
    <div>
      <ProductCarousel />
    </div>
    <glassProductList />
    <Button />
    <div class="pl-4">
      <glassProductList />
    </div>
    <Footer />
  </div>
</template>
<script>
import MegaMenu from "../components/MegaMenu";
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import ProductCarousel from "../components/ProductCarousel";
import BrandCardList from "../components/BrandCardList";
/* import GlassMorphicProductList from "../components/GlassMorphicProductList"; */
import glassProductList from "../components/GlassMorphicProductList";
export default {
  components:{
    MegaMenu,
    Carousel,
    Product,
    ProductList,
    ProductCarousel,
    glassProductList,
    /* GlassMorphicProductList */
    BrandCardList
  },
  
}

</script>