<template>

    <div class="flex flex-col items-center justify-center">
            <h1 class="text-2xl lg:text-4xl font-semibold text-[#0B132A]">
                Our Clients Review
            </h1>
            
            <p class="text-base md:text-lg  text-[#0B132A]">
                We beleive in clients satisfaction
            </p>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div v-for="(review,index) in reviews">
            <TestimonialCard :key="index" :data="review"/>

        </div>
    </div>

</template>

<script>
import { defineComponent } from 'vue';
import TestimonialCard from './TestimonialCard.vue';

    export default defineComponent({
        name:"Testimonial",
        components:{
            TestimonialCard
        },
        data(){
            return {
                reviews:[
                {
                    "name": "Angle",
                    "icon": "",
                    "review": `"One of the most genuine and reliable website development agencies I’ve worked with. The team is professional, transparent, and truly authentic in their approach."`,
                    "rating": 5
                },
                {
                    "name": "Sophia",
                    "icon": "",
                    "review": `"They delivered exactly what I needed with complete honesty and dedication. A trustworthy and authentic agency I can highly recommend."`,
                    "rating": 5
                },
                {
                    "name": "David",
                    "icon": "",
                    "review": `"The team went above and beyond to create a high-quality website for us. Their genuine commitment and authentic work style set them apart."`,
                    "rating": 5
                },
                {
                    "name": "Riya",
                    "icon": "",
                    "review": `"A very professional and authentic experience. They kept every promise and delivered more than expected. Truly a genuine agency."`,
                    "rating": 5
                },
                {
                    "name": "Michael",
                    "icon": "",
                    "review": `"If you’re looking for a genuine partner for your online presence, this is the agency. Reliable, authentic, and always supportive."`,
                    "rating": 5
                },
                {
                    "name": "Ananya",
                    "icon": "",
                    "review": `"Working with them was smooth and completely transparent. A genuine agency that builds trust with every step."`,
                    "rating": 5
                }
            ]

            }
        }
    })
</script>