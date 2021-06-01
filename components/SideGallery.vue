<template>
  <div>
    <div class="inline-flex pt-4 space-x-3 pl-14 lg:pl-20">
      <div
          v-for="(thumb, thumbIndex) in images"
          :key="thumbIndex"
          @click="index = thumbIndex"
        >
          <img width="275" height="275" :src="thumb.url" class="thumbnail" />
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
