<template>
    <div class="flex flex-col justify-center">
         <h1 class="text-center text-2xl lg:text-4xl font-semibold text-[#0B132A]">
            Our Trusted Partner
        </h1>
            
        <p class="text-base text-center md:text-lg  text-[#0B132A]">
            People believe in our service and support
        </p>
    </div>
    <div class="w-full">
    <Swiper
        :slides-per-view="2"
        :space-between="20"
        :breakpoints="{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 }
        }"
        :loop="true"
        :autoplay="{ delay: 200, disableOnInteraction: false }"
        class="my-6"
    >
        <SwiperSlide v-for="(partner, index) in partners" :key="index">
            <img :src="partner" alt="Partner" class="w-full h-auto object-contain" />
        </SwiperSlide>
    </Swiper>
    </div>
    
   
</template>

<script>
import { defineComponent } from 'vue';

import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
    export default defineComponent(
        {
            name:"HomePartners",
            components: {
                Swiper,
                SwiperSlide,
            },

            data(){
                return {
                    partners:[
                        "/Mask Group (1).png",
                        "/Mask Group.png",     
                        "/Mask Group (1).png",

                        "/Mask Group.png",                       
                        "/Mask Group (1).png",

                        "/Mask Group.png",                       
                    ]
                }
            }
        }
    )
</script>
