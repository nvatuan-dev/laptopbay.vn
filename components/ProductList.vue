<template>
  <section id="productlist">
    <div class="products">
      <Product
        v-for="product in products"
        :key="product.title"
        :product="product"
      />
    </div>
  </section>
</template>

<script>
import Product from '../components/Product';
export default {
  name: 'productList',
  components: {
    Product
  },
  data () {
    return {
      products: [
        {
          title: 'Thinkpad X1',
          bgtext: 'NIKE',
          src: require('../static/laptop_images/1.jpg')
        },
        {
          title: 'Thinkpad X1',
          bgtext: 'AIR',
          src: require('../static/laptop_images/2.jpeg')
        },
        {
          title: 'Thinkpad X1',
          bgtext: 'MAX',
          src: require('../static/laptop_images/3.jpg')
        }
      ]
    }
  }
}
</script>

<style>
  * {
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'montseratt', sans-serif;
  }
  section {
    width: 100vw;
    min-height: auto;
    overflow: hidden;
    background-color: #EEE;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .products {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
  }
</style>