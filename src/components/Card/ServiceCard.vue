<template>
    <div class="bg-gradient-to-r from-gray-50 to-red-50 p-5 shadow-md min-h-[12rem] h-full flex flex-col gap-2">
        <div class="h-14 w-14 bg-red-50 flex justify-center overflow-hidden items-center rounded-full">
        <img src="/public/About.png" alt="icon" class="h-full w-full object-contain"/>

        </div>
        <h1 class="text-xl lg:text-2xl font-semibold text-[#0B132A]">{{data.title}}</h1>
        <p class="text-base md:text-md  text-[#0B132A]">    
            {{data.description}}
        </p>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

    export default defineComponent({
        name:"ServiceCard",
        props:{
            data:{
                type:Object,
                required:true
            }
        }
    })
</script>