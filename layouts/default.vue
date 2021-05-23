<template>
  <div>
    <MegaMenu />
        <Carousel />
    <div class="container">
      <Button />
      <div class="pt-2">
        <ul>
          <li><ProductList /></li>
          <li><ProductList /></li>
        </ul>
      </div>
        <ProductCarousel />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import MegaMenu from "../components/MegaMenu";
import Button from "../components/Button";
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