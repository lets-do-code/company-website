<template>

    <div class="flex flex-col gap-5">
        <Filter/>
        <div class="max-w-[1400px] mx-auto gap-y-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    </div>

</template>

<script>
import BlogCard from '@/components/BlogCard/BlogCard.vue';

import { defineComponent } from 'vue';
import Filter from '../Filter/Filter.vue';

export default defineComponent({
    components: {
        BlogCard,
        Filter
    },

})
</script>