<template>
    <section>
        <div class="grid grid-cols-1 md:grid-cols-4">
            <GlassMorphicProduct 
            v-for="laptop in products.laptop"
            :key="laptop.title"
            :laptop="laptop"
            />
        </div>
    </section>    
</template>
<script>
import {products} from '../constant/product';
import GlassMorphicProduct from "../components/GlassMorphicProduct";
export default {
    name:'glassProductList',
    components: {
        GlassMorphicProduct
    },
    props:['laptop'],
    data() {
        return {
            products
        }
    }
}
</script>
