<template>
     <!-- <router-link :to="`/${category}/${generateSlug(article.title)}`"> -->
        <div @click="handleArticleClick" class="cursor-pointer flex flex-col pb-5 gap-4 w-full bg-white rounded-md tracking-wide">
            <header class="flex relative w-full text-xs font-bold text-center text-white whitespace-nowrap rounded-md aspect-[4/2]">
                <img loading="lazy"
                    :src="article.image"
                    :alt="article.title" class="object-cover inset-0 size-full" />
                <!-- <span class="absolute right-5 top-5 px-2.5 py-1.5 -mb-12 rounded-md bg-white/30">
                    {{ article.category }}
                </span> -->
            </header>
            <div class="flex flex-col gap-3 items-start w-full text-sm text-gray-500">
                <time datetime="2021-08-08">{{ article.date }}</time>
                <h2 class="text-lg font-bold leading-6">
                    {{ article.title }}
                </h2>
                <p class="self-stretch leading-5">
                {{article.description}}
                </p>
                <hr class="shrink-0 self-stretch h-px border border-solid border-[#E5E5E5]" />
                <footer class="flex gap-4 leading-5">
                    <img loading="lazy"
                        :src="article.author.image"
                        :alt="article.author.name" class="object-contain shrink-0 rounded-full aspect-square w-[50px]" />
                    <div class="my-auto">
                        <span class="font-bold text-zinc-600">By </span>
                        <span class="font-bold text-neutral-700">{{ article.author.name }}</span>
                        <br />
                        {{ article.author.role }}
                    </div>
                </footer>
            </div>
        </div>
    <!-- </router-link> -->
</template>


<script>
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';


export default defineComponent({
    props:['article','category'],

    methods:{


        generateSlug(title){
            return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        },

        ...mapActions(['setSelectedArticle']),

        handleArticleClick(){
            this.setSelectedArticle(this.article);
            this.$router.push(`/${this.category}/${this.generateSlug(this.article.title)}`)

        },  

       
        
    },


})

</script>