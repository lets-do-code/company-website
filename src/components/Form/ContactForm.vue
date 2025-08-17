<template>
        <div class="flex flex-col items-center">
            <h1 class="text-2xl lg:text-4xl font-semibold text-[#0B132A]">
                Contact us
            </h1>
            
            <p class="text-base md:text-lg  text-[#0B132A]">
                
            </p>
            
            
        </div>
    <div>
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