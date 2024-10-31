<template>
    <div class="flex flex-col gap-20">
        <Banner />
        <BlogSection />
        <BigPostBanner/>
        <EditorSection/>
    </div>
</template>




<script>
import Banner from '@/components/Banner/Banner.vue';
import BigPostBanner from '@/components/Banner/BigPostBanner.vue';
import BlogSection from '@/components/BlogCard/BlogSection.vue';
import EditorSection from '@/components/Editor/EditorSection.vue';

import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Banner,
        BlogSection,
        BigPostBanner,
        EditorSection
    },

})
</script>
