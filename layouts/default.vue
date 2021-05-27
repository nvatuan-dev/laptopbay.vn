<template>
  <div>
    <div class="bg-gray-200">
      <div class="container mx-auto">
        <TopNav />
      </div>
    </div>
    <div class="border-t-8 pb-2"></div>
    <div class="flex">
      <aside class="h-screen sticky top-4 pl-8">
        <div class="flex border-2 rounded-lg">
          <MenuSide />
        </div>
      </aside>
      <div class="mr-32 ml-2">
        <div class="block">
          <RoundedList />
          <Carousel />
        </div>
        <div>
          <Promotion />
        </div>
        <div>
          <BrandCardList />
        </div>
        <SideRightBar />
        <div class="container justify-center items-center mx-auto py-3">
          <glassProductList />
        </div>
        <div class="container text-center mx-auto p-4 bg-blue-900 rounded-xl">
          <Button />
        </div>
        <div class="container justify-center items-center mx-auto py-3">
          <ProductCardList />
        </div>
        <!-- Banner -->
        <div class="container mx-auto bg-black pb-4">
          <img
            class="object-cover h-80 mx-auto md:object-scale-down" src="../assets/banner/banner_2.jpg"
          />
        </div>
        <div class="container justify-center items-center mx-auto py-3">
          <ArticleGrid />
        </div>
        <ProductCarousel />
        <div class="container justify-center items-center mx-auto py-3">
          <Testimonials />
        </div>
      </div>
      <!-- <aside class="sticky md:h-screen md:top-4">
        <div class="hidden md:flex">
          <img
            class="object-cover w-48" src="../assets/banner/verticle_3.jpg"
          />
        </div>
      </aside> -->
    </div>
    <Footer />
  </div>
</template>
<script>
import TopNav from "../components/TopNav";
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
export default {
  components: {
    TopNav,
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
    RoundedList
  },
};
</script>
