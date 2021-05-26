<template>
    <div class="hidden md:flex">
        <div class="grid mx-auto gap-6 justify-between sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 ">
            <BrandCard 
                v-for="brand in brands"
                :key="brand.title"
                :brand="brand"
            />
        </div>
    </div>
</template>
<script>
import {brands} from "../constant/brand";
export default {
  props: ['brand'],
  data(){
      return{
          brands
      }
  }
}
</script>