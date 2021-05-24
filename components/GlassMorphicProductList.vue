<template>
  <div>
    <div>
        <div class="inline-flex justify-between flex-wrap space-x-4 pb-3 pl-4">
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="prevPage" :disabled="currentPage ==1">Show Less</button>
            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" @click="nextPage" :disabled="currentPage == totalPages">Show More</button>
        </div>
      <GlassMorphicProduct
        v-for="(laptop,pIndex) in toBeShown"
        :key="pIndex"
        :laptop="laptop"
      />
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
      return this.products.slice(0, this.currentPage * 3);
    },
    totalPages() {
      return Math.ceil(this.products.length / 3);
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
