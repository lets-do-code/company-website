<template>
    <div class="flex  gap-5 bg-gradient-to-r from-gray-50 to-red-50 p-5 min-h-[12rem] h-full">
        <div class="h-14 w-14 aspect-square rounded-full border">
            <img src="/About.png" alt="icon" class="w-full object-cover overflow-hidden"/>
        </div>
        <div class="flex flex-col gap-2">
            <h1 class="text-lg font-medium lg:text-lg text-[#0B132A]">{{ data.name }}</h1>
            <p class="text-base lg:text-md text-[#0B132A]">{{ data.review }}</p>

        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

    export default defineComponent({
        name:"TestimonialCard",
        props:{
            data:{
                type:Object,
                required:true
            }
        }
    })
</script>