<template>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-24 lg:mt-32">

        <div class="flex flex-col gap-5 items-center justify-center">
            <h1 class="text-2xl lg:text-4xl font-semibold text-[#0B132A]">
                Transforming Business Brands Into  Stunning Digital Experiences
            </h1>
            
            <p class="text-base md:text-lg  text-[#0B132A]">
                We help businesses stand out with high-converting, beautifully designed websites. Whether you're running a luxury resort or a growing startup, we craft digital experiences that inspire trust and drive results.
            </p>
            <div class="flex w-full gap-5">
                <ExploreButton/>
                <ContactButton/>
            </div>
               
        </div>
        <div class="w-full">
            <img class="w-full" src="/Banner.png" alt="banner" loading="lazy"/>
        </div>
        </div>
        
</template>


<script>
import { defineComponent } from 'vue';
import ExploreButton from '@/components/Button/ExploreButton.vue';
import ContactButton from '@/components/Button/ContactButton.vue';

export default defineComponent({
    components:{
        ExploreButton,
        ContactButton
    },
    name:'HomeBanner'
})
</script>