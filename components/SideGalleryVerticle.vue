<template>
  <div>
    <div class="flex-col pt-3 space-y-5">
      <div
          v-for="(thumb, thumbIndex) in images"
          :key="thumbIndex"
          @click="index = thumbIndex"
        >
          <img width="220" height="220" :src="thumb.url" class="thumbnail" />
      </div>
    </div>
        <LightGallery
          :images="images"
          :index="index"
          :disable-scroll="false"
          @close="index = null"
        />
  </div>
</template>
<script>
export default {
  components: {},
  data:() => ({
      images: [
          { title:'Keyboard', url: require('../assets/others/keyboard.jpg')},
          { title:'Headphone', url: require('../assets/others/razer_large.jpg') },
          { title:'Mouse', url: require('../assets/others/thinkpad_mouse.jpg') }
        ],
      index: null,
    }
  ),
};
</script>
<style scoped>
.thumbnail {
  border: 1px solid #cdcdcd;
  padding: 5px;
  background: #eeeeee;
  border-radius: 5px;
  cursor: pointer;
}
</style>
