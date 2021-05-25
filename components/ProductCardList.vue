<template>
  <div class="flex justify-center bg-gray-200 rounded-2xl">
    <div class="md:grid grid-cols-4 gap-x-8 gap-y-4 py-4 items-center">

        <ProductCard 
        v-for="product in products"
        :key="product.title"
        :product="product"
        /> 
    </div>
  </div>
    
</template>
<script>
import ProductCard from '../components/ProductCard';
export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: [
        {
          title: 'Thinkpad X1',
          price:'$500',
          src: require('../static/laptop_images/1.jpg')
        },
        {
          title: 'Thinkpad X1',
          price:'$650',
          src: require('../static/laptop_images/2.jpeg')
        },
        {
          title: 'Thinkpad X1',
          price:'$720',
          src: require('../static/laptop_images/3.jpg')
        },
        {
          title: 'Macbook',
          price:'$1000',
          src: require('../static/laptop_images/4.jpg')
        },
        {
          title: 'Macbook',
          price:'$1000',
          src: require('../static/laptop_images/4.jpg')
        },
        {
          title: 'Macbook',
          price:'$1000',
          src: require('../static/laptop_images/4.jpg')
        },
        {
          title: 'Macbook',
          price:'$1000',
          src: require('../static/laptop_images/4.jpg')
        },
        {
          title: 'Macbook',
          price:'$1000',
          src: require('../static/laptop_images/4.jpg')
        },
      ]
    }
  }
}
</script>