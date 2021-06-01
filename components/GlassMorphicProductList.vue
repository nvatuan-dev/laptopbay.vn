<template>
  <div>
    <div class="flex justify-center bg-blue-600 rounded-2xl">
        <div class="grid grid-cols-2 md:gap-x-1 md:grid-cols-3 xl:grid-cols-5 xl:gap-x-6 gap-y-4 py-4 items-center px-auto">
          <GlassMorphicProduct
          v-for="(laptop,pIndex) in toBeShown"
          :key="pIndex"
          :laptop="laptop"
          />
        </div>
    </div>
    <div class="inline-flex justify-between flex-wrap space-x-4 py-3 pl-4">
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="prevPage" :disabled="currentPage ==1">Show Less</button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="nextPage" :disabled="currentPage == totalPages">Show More</button>
    </div>
  </div>
  
</template>
<script>
import { products } from "../constant/product";
import GlassMorphicProduct from "../components/GlassMorphicProduct";
export default {
  name: "glassProductList",
  components: {
    GlassMorphicProduct,
  },
  props: ["laptop"],
  data() {
    return {
      products,
      currentPage: 1
    };
  },
  computed: {
    toBeShown() {
      return this.products.slice(0, this.currentPage * 5);
    },
    totalPages() {
      return Math.ceil(this.products.length / 5);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      this.currentPage = this.currentPage - 1 || 1;
    },
  },
};
</script>
