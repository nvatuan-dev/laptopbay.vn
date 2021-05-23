<template>
  <section class="m-auto">
    <div class="demo">
      <CarouselCard :interval="2000" height="300px" type="card" arrow="always">
        <CarouselCardItem v-for="product in products " :key="product.src" :product="product">
          <div class="product-detail">
            <img :src="product.src" class="image" />
            <h2>{{ product.title }}</h2>
          </div>
        </CarouselCardItem>
      </CarouselCard>
    </div>
  </section>
</template>
<script>
export default {
  props: ['product'],
  data () {
    return {
      products: [
        {
          title: 'Thinkpad X1',
          src: require('../static/laptop_images/1.jpg')
        },
        {
          title: 'Asus',
          src: require('../static/laptop_images/2.jpeg')
        },
        {
          title: 'Lenovo',
          src: require('../static/laptop_images/3.jpg')
        },
        {
          title: 'Dell',
          src: require('../static/laptop_images/4.jpeg')
        }
      ]
    }
  }
}
</script>
<style scoped>
  .demo {
    width: 800px;
    margin: auto;
  }
  /* .image {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  .product-detail {
    background-color: #FFF;
    padding: 20px;
    margin: 0px auto;
  }
  .product-detail h2 {
    font-size: 18px;
    font-weight: 700;
    color: #9d29ee;
    margin: 0 auto;
  }
</style>