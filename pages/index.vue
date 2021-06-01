<template>
  <div id="app" class="block">
    <!-- <div class="sticky top-4 md:pl-8 md:h-screen">
          
      </div> -->
    <MobileMenu class="mobile-menu" />
    <client-only>
      <main id="page-wrap">
        <RoundedList class="mx-auto lg:mx-12"/>
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
            <div class="pt-4 pb-6">
              <div class="inline-flex items-center bg-white leading-none text-green-400 rounded-full p-2 shadow-xl py-4 border-green-400 border-2 w-80">
                <span class="inline-flex bg-green-400 rounded-full h-10 w-10 px-3 justify-center items-center"></span>
                <span class="inline-flex mx-auto text-xl font-semibold">Sales Products</span>
              </div>
            </div>
            <glassProductList />
          </div>
        </el-col>

        <!-- Banner -->
        <div class="container mx-auto bg-black py-4">
          <img
            class="object-cover h-32 lg:h-80 mx-auto sm:w-1/2"
            src="../assets/banner/banner_1.jpg"
          />
        </div>

        <!-- <div class="container text-center mx-auto p-4 bg-blue-900 rounded-xl">
          <Button />
        </div> -->
        <div class="container justify-center items-center mx-auto py-3">
          <div class="pt-4 pb-6">
              <div class="inline-flex items-center bg-white leading-none text-green-400 rounded-full p-2 shadow-xl py-4 border-green-400 border-2 w-80">
                <span class="inline-flex bg-green-400 rounded-full h-10 w-10 px-3 justify-center items-center"></span>
                <span class="inline-flex mx-auto text-xl font-semibold">Sales Products</span>
              </div>
            </div>
          <ProductCardList />
        </div>
        <!-- Banner -->
        <div class="container mx-auto bg-black py-4">
          <img
            class="object-cover h-32 lg:h-80 mx-auto sm:w-1/2"
            src="../assets/banner/banner_2.jpg"
          />
        </div>
        <div class="container justify-center items-center mx-auto py-3">
          <div class="pt-4 pb-6">
              <div class="inline-flex items-center bg-white leading-none text-green-400 rounded-full p-2 shadow-xl py-4 border-green-400 border-2 w-80">
                <span class="inline-flex bg-green-400 rounded-full h-10 w-10 px-3 justify-center items-center"></span>
                <span class="inline-flex mx-auto text-xl font-semibold">Sales Products</span>
              </div>
            </div>
          <ProductCardList />
        </div>
        <div class="container justify-center items-center mx-auto py-3">
          <div class="pt-4 pb-6">
              <div class="inline-flex items-center bg-white leading-none text-green-400 rounded-full p-2 shadow-xl py-4 border-green-400 border-2 w-80">
                <span class="inline-flex bg-green-400 rounded-full h-10 w-10 px-3 justify-center items-center"></span>
                <span class="inline-flex mx-auto text-xl font-semibold">Review Products</span>
              </div>
            </div>
            <ArticleGrid class="pt-4" />
        </div>
        
        <ProductCarousel />
        <div class="container justify-center items-center mx-auto py-3">
          <Testimonials />
        </div>
        <div class="flex justify-center pb-16">
          <div class="flex flex-col shadow-xl">
            <div class="py-6 px-14 bg-gradient-to-tr from-pink-500 to-pink-300 rounded-tl-2xl rounded-tr-2xl text-center space-y-8">
              <h2 class="text-white text-xs uppercase">don't miss out the latest</h2>
              <h4 class="text-white text-center font-bold text-xl">
                Weekly FREE UI resources<br />
                straight to your inbox
              </h4>
            </div>
            <div class="flex flex-col py-6 px-8 space-y-5 bg-white">
              <input type="text" placeholder="Enter your email address" class="px-2 py-2 border-2 rounded-md border-gray-200 focus:outline-none focus:ring-1 focus:ring-pink-300 focus:border-transparent" />
              <button class="w-full py-3 bg-pink-400 text-white rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent shadow-lg">Stay Inspired</button>
              <span class="text-center text-gray-400 text-sm">or subscribe using</span>
              <div class="flex justify-between">
                <div class="w-16 h-16 p-3 flex items-center justify-center border-2 border-transparent hover:border-gray-200 fill-current text-blue-300">
                  <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>Twitter icon</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <div class="w-16 h-16 p-3 flex items-center justify-center border-2 border-transparent hover:border-gray-200 fill-current text-red-600">
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Google icon</title>
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                  </svg>
                </div>
                <div class="w-16 h-16 p-4 flex items-center justify-center border-2 border-transparent hover:border-gray-200 fill-current text-blue-800">
                  <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>Facebook icon</title>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
          </div>
      </div>
    </div>
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
    MobileMenu,
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
.mobile-menu {
  @include md {
    display: none;
  }
}
</style>
