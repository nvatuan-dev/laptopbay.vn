<template>
   <client-only>
      <div class="container-carousel">
               <MenuSide class="inline-block pl-6"/>
               <vue-flux class="carousel-wrap "
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

               <SideGalleryVerticle />
               <SideGallery class="pl-52"/>

      </div>
      
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
import SideGalleryVerticle from "../components/SideGalleryVerticle";
export default {
   components: {
      VueFlux,
      FluxCaption,
      FluxControls,
      FluxPagination,
      FluxPreloader,
      MenuSide,
      SideGallery,
      SideGalleryVerticle,
      MenuSide
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
      width: 895px;
      margin:0 auto;
      border-radius: 25px;
      z-index: 1;
      display: inline-flex;
   }
   @media only screen and (max-width: 1500px) {
      .carousel-wrap {
      width: 860px;
      margin:0 auto;
      border-radius: 25px;
      z-index: 1;
      display: inline-flex;
   }
   }
   .container-carousel{
      /* max-width: 1400px; */
      margin-left: auto;
      margin-right: auto;
      padding-top: 35px;
      padding-bottom:35px;
      background-color: rgb(30, 58, 138);
      border-radius: 25px;
   }
   
</style>