<template>
    <div>
        <div class="relative bg-white py-5 px-5 rounded-3xl w-48 my-4 shadow-xl">
            <div class="mt-8">
                <div class="flex items-center">
                    <img :src="brand.src">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: ['brand']
}
</script>