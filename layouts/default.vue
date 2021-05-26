<template>
  <div>
    <div class="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300">
      <div class="container mx-auto">
        <TopNav />
      </div>
      <MegaMenu />
    </div>
    <div class="border-t-8 pb-2"></div>
    <div class="h-full" style="border-radius: 10px 10px 0 0">
      <Carousel />
    </div>
    <div class="flex">
      <aside class="h-screen sticky top-4 left-0 pl-8">
        <div class="flex border-2 rounded-lg">
          <MenuSide />
        </div>
      </aside>
      <main class="mx-32">
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
      </main>
      <aside class="h-screen sticky top-4 right-0">
        <div class="flex">
          <img
            class="object-cover w-48 hidden md:block" src="../assets/banner/verticle_3.jpg"
          />
        </div>
      </aside>
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
  },
};
</script>
