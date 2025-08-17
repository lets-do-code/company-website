<template>
    <div class="flex flex-col gap-10 justify-center items-center">
        <div class="flex flex-col items-center">
        <h1 class="text-2xl text-center lg:text-4xl font-semibold text-[#0B132A]">Globally Trusted</h1>
        <p class="text-base md:text-lg font-medium text-[#0B132A]">
            Our work shown Globally 
        </p>
        </div>
        <img class="w-full" src="/public/HugeGlobal.png" alt="mapview"/>
        <ContactButton/>

    </div>
    
</template>

<script>
import { defineComponent } from 'vue';
import ContactButton from '../Button/ContactButton.vue';

    export default defineComponent({
        name:"HomeMapView",
        components:{
            ContactButton
        }
    })
</script>