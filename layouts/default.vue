<template>
  <div>
    <div class="block pb-2">
      <MegaMenu />
    </div>
    <div>
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