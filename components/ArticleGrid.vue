<template>
    <div class="bg-gray-200 justify-center sm:mx-auto">
        <div class="grid grid-cols-2 gap-4">
            <div >
                <Article />
            </div>
            <div>
                <Article />
            </div>
            <div>
                <Article />
            </div>
            <div>
                <Article />
            </div>
        </div>
    </div>
</template>
<script>
import Article from '../components/Article';
export default {
    components: {
        Article
    }
}
</script>