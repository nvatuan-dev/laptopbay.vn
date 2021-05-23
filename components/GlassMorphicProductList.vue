<template>
  
    
    <div>
        <div>
            <button @click="prevPage" :disabled="currentPage ==1">Show Less</button>
            <button @click="nextPage" :disabled="currentPage == totalPages">Show More</button>
        </div>
      <GlassMorphicProduct
        v-for="(laptop,pIndex) in toBeShown"
        :key="pIndex"
        :laptop="laptop"
      />
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
