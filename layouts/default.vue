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
    <div class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
      <ProductList />
      <div class="flex items-center justify-center">
        <div class="grid">
          <img class="object-cover h-80 md:object-scale-down" src= "../assets/banner/banner_1.jpg">
        </div>
      </div>
      <ProductCarousel />
    </div>
    <SideRightBar />
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
import SideRightBar from "../components/SideRightBar";
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