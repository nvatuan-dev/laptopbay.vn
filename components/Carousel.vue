<template>
   <client-only>
      <vue-flux
      :options="vfOptions"
      :images="vfImages"
      :transitions="vfTransitions">

         <template v-slot:preloader>
            <flux-preloader />
         </template>

         <template v-slot:caption>
            <flux-caption />
         </template>

         <template v-slot:controls>
            <flux-controls />
         </template>

         <template v-slot:pagination>
            <flux-pagination />
         </template>
      </vue-flux>
   </client-only>
</template>
<script>
import {
   VueFlux,
   FluxCaption,
   FluxControls,
   FluxPagination,
   FluxPreloader
} from 'vue-flux/dist-ssr/vue-flux.umd.min.js';
import 'vue-flux/dist-ssr/vue-flux.css';
export default {
   components: {
      VueFlux,
      FluxCaption,
      FluxControls,
      FluxPagination,
      FluxPreloader,
   },

   data: () => ({
      vfOptions: {
         autoplay: true,
         aspectRatio: "16:9"
      },
      vfImages: [
          "https://laptopchat.vn/wp-content/uploads/2020/12/Lenovo-ThinkPad-P1-Gen-3.jpg",
          "https://cdn.editorji.com/5f1c3122c3ee8_alienware-m15-r3.jpg",
          "https://www.esquireme.com/public/images/2020/06/25/lenovo-legion-y740-15-2.jpg",
      ],
      vfTransitions: ['blinds2d' ],
   }),
}
</script>