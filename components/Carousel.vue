<template>
   <client-only>
      <section class="container-carousel">
         <div>
            <MenuSide />
         </div>
         <div>
            <vue-flux class="carousel-wrap"
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
         </div>
      <SideGallery />
      </section>
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
import MenuSide from "../components/MenuSide";
import SideGallery from "../components/SideGallery";
export default {
   components: {
      VueFlux,
      FluxCaption,
      FluxControls,
      FluxPagination,
      FluxPreloader,
      MenuSide,
      SideGallery
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
<style>
   .carousel-wrap {
      width: 900px;
      margin:0 auto;
      border-radius: 25px;
      z-index: 1;
      display: flex;
   }
   .container-carousel{
      /* max-width: 1400px; */
      margin:0 auto;
      padding-top:30px;
      padding-bottom: 30px;
      background-image: linear-gradient(270deg, #2563EB, #34D399);
      border-radius: 25px;

   }
   
</style>