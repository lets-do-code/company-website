<template>
    <!-- <div class="flex flex-col items-center">
        <h1 class="text-2xl lg:text-4xl font-semibold text-[#0B132A]">
            Contact us
        </h1>
        
        <p class="text-base md:text-lg  text-[#0B132A]">
            
        </p>            
    </div> -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5">
        <div>
            <h1 class="text-2xl lg:text-4xl font-semibold text-[#0B132A]">Contact Details</h1>
            <h1 class="text-base lg:text-md font-semibold text-[#0B132A] mt-5">
                Email: <span>contact@kyraitsolutions.com</span>
            </h1>
            <h1 class="text-base lg:text-md font-semibold text-[#0B132A] mt-2">
                Phone: <span>+91 999 9999 999</span>
            </h1>
            <img src="/About.png" alt="contact"/>
        </div>
        <Form/>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Form from './Form.vue';

    export default defineComponent({
        name:"ContactForm",
        components:{
            Form
        }
    })
</script>