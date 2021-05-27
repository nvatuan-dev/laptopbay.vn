<template>
  <div>
    <div>
      <div class="container max-w-full">
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