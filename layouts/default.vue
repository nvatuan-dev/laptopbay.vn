<template>
  <div>
    <div class="bg-yellow-300">
      <div class="container mx-auto">
        <TopNav />
      </div>
      <!-- <MegaMenu /> -->
    </div>
    <div class="border-t-8 pb-2"></div>
      <Nuxt />
    <Footer />
  </div>
</template>
<script>
import TopNav from "../components/TopNav";
export default {
  components:{
    TopNav,
  }
}
</script>