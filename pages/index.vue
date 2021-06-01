<template>
  <div id="app" class="block">
    <!-- <div class="sticky top-4 md:pl-8 md:h-screen">
          
      </div> -->
    <MobileMenu class="mobile-menu"/>
    <client-only>
      <main id="page-wrap">
        <RoundedList />
        <div class="mobile-slide">
          <MobileCardList />
        </div>
        <div class="hidden xl:block">
          <Carousel />
        </div>

        <Promotion />

        <div class="hidden xl:block">
          <BrandCardList />
        </div>
        <el-col>
          <div class="container justify-center items-center mx-auto py-3">
            <glassProductList />
          </div>
        </el-col>

        <div class="container text-center mx-auto p-4 bg-blue-900 rounded-xl">
          <Button />
        </div>
        <div class="container justify-center items-center mx-auto py-3">
          <ProductCardList />
        </div>
        <!-- Banner -->
        <div class="container mx-auto bg-black py-4">
          <img
            class="object-cover h-32 lg:h-80 mx-auto sm:w-1/2"
            src="../assets/banner/banner_2.jpg"
          />
        </div>
        <ArticleGrid class="pt-4" />
        <ProductCarousel />
        <div class="container justify-center items-center mx-auto py-3">
          <Testimonials />
        </div>

        <!-- <aside class="sticky md:h-screen md:top-4">
        <div class="hidden md:flex">
          <img
            class="object-cover w-48" src="../assets/banner/verticle_3.jpg"
          />
        </div>
      </aside> -->
      </main>
    </client-only>
  </div>
</template>
<script>
import Button from "../components/Button";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import ProductCarousel from "../components/ProductCarousel";
import BrandCardList from "../components/BrandCardList";
/* import GlassMorphicProductList from "../components/GlassMorphicProductList"; */
import glassProductList from "../components/GlassMorphicProductList";
import SideRightBar from "../components/SideRightBar";
import ProductCardList from "../components/ProductCardList";
import ArticleGrid from "../components/ArticleGrid";
import Testimonials from "../components/Testimonials";
import Promotion from "../components/Promotion";
import RoundedList from "../components/RoundedList";
import MobileCardList from "../components/MobileCardList";
import MobileMenu from "../components/MobileMenu";
export default {
  components: {
    Carousel,
    Product,
    ProductList,
    ProductCarousel,
    glassProductList,
    /* GlassMorphicProductList */
    BrandCardList,
    ProductCardList,
    ArticleGrid,
    Testimonials,
    Promotion,
    RoundedList,
    MobileCardList,
    MobileMenu
  },
};
</script>
<style lang="scss" scoped>
.mobile-slide {
  position: relative;
  background-color: #e5e7eb;
  padding: 20px 0;
  overflow: hidden;
  @include md {
    display: none;
  }
}
.mobile-menu{
  @include md{
    display:none;
  }
}
</style>
