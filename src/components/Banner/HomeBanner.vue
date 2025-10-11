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
                <button @click="scrollToContact"  class="border border-[#F53838] text-[#F53838] hover:bg-[#F53838] py-2 hover:text-white duration-300 transition-all active:scale-95 px-5 lg:px-10 rounded-full font-bold">
                    Contact Us
                </button>
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
    name:'HomeBanner',

    methods: {
    scrollToContact() {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
  },
})

</script>