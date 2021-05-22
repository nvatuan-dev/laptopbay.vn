<template>
  <div class="product">
    
      <div class="product-image-wrap">
        <img :src="product.src" class="image" />
      </div>
      <div class="product-detail">
        <h2>{{ product.title }}</h2>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'product',
  props: ['product']
}
</script>

<style>
  .product {
    flex: 1 1 33.333%;
    width: 100%;
    padding: 25px;
  }
  
  .product-text-wrap h2 {
    color: #313131;
    font-size: 128px;
    font-weight: 900;
    opacity: 0.2;
    transform-origin: center;
  }
  .product-image-wrap {
    position: relative;
    z-index: 1;
    transform-origin: center;
  }
  .product-image-wrap .image {
    width: 100%;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.25));
  }
  .product-detail {
    background-color: #FFF;
    padding: 25px;
    margin: 0px auto;
  }
  .product-detail h2 {
    font-size: 18px;
    font-weight: 700;
    color: #676767;
    margin-bottom: 5px;
  }
  .product-detail p {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 300;
    color: #676767;
  }
</style>