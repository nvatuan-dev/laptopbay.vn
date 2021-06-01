<template>
    <div 
      v-tilt
      class="mx-2 mb-6 sm:mb-0 relative overflow-hidden rounded-lg max-w-xs shadow-lg">
      <img 
        :src="product.src"
        class="w-full object-cover rounded-lg h-44 md:w-full lg:w-80 md:h-auto md:w-48"/>

      <div 
      class="relative px-1 h-auto sm:px-4 md:-mt-16">
        <div class="bg-blue-500 p-2 rounded-lg shadow-lg">
          <div class="hidden md:flex items-baseline">
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
          <div class="hidden sm:text-white sm:mt-4">
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
