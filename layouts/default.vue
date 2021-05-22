<template>
  <div>
    <div class="block">

    <MegaMenu />
    </div>
    
    <Carousel />
    <div class="pt-2">
      <ul>
        <li><ProductList /></li>
        <div>
          <ProductCarousel />
        </div>
        <li><ProductList /></li>
      </ul>
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
  
</template>
<script>
import MegaMenu from "../components/MegaMenu";
import Carousel from "../components/Carousel";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import ProductCarousel from "../components/ProductCarousel";
export default {
  components:{
    MegaMenu,
    Carousel,
    Product,
    ProductList,
    ProductCarousel

  }
  
}

</script>