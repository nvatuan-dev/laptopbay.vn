<template>
  <div>
    <div class="block pb-2">
      <MegaMenu />
    </div>
    <div class="border-t-2 "></div>
    <div class="h-full" style="border-radius: 10px 10px 0 0">
      <Carousel />
    </div>
    <div>
      <BrandCardList />
    </div>
    <Button />
    <div class="product-section pt-2">
      <ul>
        <li><ProductList /></li>
        <div>
          <ProductCarousel />
        </div>
      </ul>
    </div>
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