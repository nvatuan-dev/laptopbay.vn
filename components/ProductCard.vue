<template>
    <div 
      v-tilt
      class="mx-2 mb-6 sm:mb-0 relative overflow-hidden rounded-lg max-w-xs shadow-lg hover:scale-105">
      <img 
        :src="product.src"
        class="max-h-80 h-64  object-cover object-center rounded-lg shadow-md"/>

      <div 
      class="relative px-4 -mt-16">
        <div class="bg-blue-500 p-2 rounded-lg shadow-lg">
          <div class="flex items-baseline">
            <span class="bg-teal-200 text-white text-teal-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">New</span>
            <div class="ml-2 text-white uppercase text-xs font-semibold tracking-wider">
              2 baths &bull; 3 rooms
            </div>
          </div>

          <h4 class="mt-1 text-white text-md font-semibold uppercase leading-tight truncate">
            {{ product.title }}
          </h4>

          <div class="text-white mt-0.5">
            {{ product.price }}
          </div>
          <div class="text-white mt-4">
            <span class="text-teal-600 text-md font-semibold"
              >4/5 ratings
            </span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'product',
  props: ['product']
}
</script>
