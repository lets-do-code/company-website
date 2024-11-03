<template>

    <div class="flex flex-col gap-5">
        <!-- <Filter/> -->

        <div v-for="categoryArticle in categoryArticles" :key="categoryArticle.id" class="max-w-[1240px] mx-auto px-5 mb-14">
            <h1 class="text-3xl font-semibold text-[#495057] capitalize">{{ categoryArticle.category }}</h1>
            <hr class="shrink-0 self-stretch h-px border-2 w-full border-solid border-[#495057]" />
            <div class=" gap-y-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6">
                <BlogCard v-for="article in categoryArticle.data" :key="article.id" :article="article" :category="categoryArticle.category" />
            </div>
        </div>
        <div v-if="loading" class="text-center">Loading articles...</div>
    <div v-if="!loading && categoryArticles.length === 0" class="text-center">No articles available.</div>
        
    </div>

</template>

<script>
import BlogCard from '@/components/BlogCard/BlogCard.vue';
import { defineComponent } from 'vue';
import Filter from '../Filter/Filter.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
    components: {
        BlogCard,
        Filter
    },

    data(){
        return {
            loading: true, // State to track loading status
        };
    },

    computed:{
        ...mapGetters(['categoryArticles'])
    },

    created() {
        this.fetchArticles();
    },

    methods:{
        fetchArticles(){
            this.$store.dispatch('fetchArticles')
            .then(()=>{
                this.loading = false;
            })
            .catch(error=>{
                console.log("Error:",error);
                this.loading = false
            })
        }
    }

})
</script>