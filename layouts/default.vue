<template>
  <div>
    <div class="block pb-2">
      <MegaMenu />
    </div>
    <div class="border-t-8 pb-2"></div>
    <div class="h-full" style="border-radius: 10px 10px 0 0">
      <Carousel />
    </div>
    <div class="flex">
      <aside class="h-screen sticky top-4 left-0">
        <div class="flex">
          <img
            class="object-cover w-48 md:object-scale-down" src="../assets/banner/verticle_3.jpg"
          />
        </div>
      </aside>
      <main class="mx-32">
        <div>
          <BrandCardList />
        </div>
        <SideRightBar />
        <div class="container justify-center items-center mx-auto py-3">
          <glassProductList />
        </div>
        <div class="container text-center mx-auto p-4 bg-gray-200">
          <Button />
        </div>
        <div class="container justify-center items-center mx-auto py-3">
          <ProductCardList />
        </div>
        <!-- Banner -->
        <div class="container mx-auto bg-black pb-4">
          <img
            class="object-cover h-80 mx-auto md:object-scale-down"
            src="../assets/banner/banner_1.jpg"
          />
        </div>
        <div
          class="
            container
            justify-center
            items-center
            mx-auto
            py-4
            bg-gray-200
            rounded-xl
          "
        >
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
      </main>
      <aside class="h-screen sticky top-4 right-0">
        <div class="flex">
          <img
            class="object-cover w-48 md:object-scale-down" src="../assets/banner/verticle_3.jpg"
          />
        </div>
      </aside>
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
import ProductCardList from "../components/ProductCardList";
import ArticleGrid from "../components/ArticleGrid";
export default {
  components: {
    MegaMenu,
    Carousel,
    Product,
    ProductList,
    ProductCarousel,
    glassProductList,
    /* GlassMorphicProductList */
    BrandCardList,
    ProductCardList,
    ArticleGrid
  },
};
</script>
