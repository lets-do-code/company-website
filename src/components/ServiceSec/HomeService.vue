<template>
    <div class="flex flex-col justify-center gap-10">

        <div class="flex flex-col items-center">

            <h1 class="text-2xl lg:text-4xl font-semibold text-[#0B132A]">
                Our Top Service
            </h1>
            
            <p class="text-base md:text-lg  text-[#0B132A]">
                Service who makes us top industries expert
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div v-for="(service,index) in Services" >
                <ServiceCard :key="index" :data="service"/>
            </div>
        </div>
       
    </div>

    <div class="flex justify-center">

    <ContactButton/>
    </div>


</template>

<script>
import { defineComponent } from 'vue';
import ServiceCard from '../Card/ServiceCard.vue';
import ContactButton from '../Button/ContactButton.vue';

    export default defineComponent({
        name:"HomeService",
        components:{
            ServiceCard,
            ContactButton
        },
        data(){
            return {

            Services:[
                {
                    "title":"Custom Website Development",
                    "description":"We craft responsive, user-focused websites tailored to your brand and business goals — designed to perform across all devices",
                    "list":["1","2","3"],
                    "icon":""
                },
                {
                    "title":"Smart CRM Integration",
                    "description":"Streamline your sales and support workflows with intelligent CRM integrations that centralize data and boost productivity.",
                    "list":["1","2","3"],
                    "icon":""
                },
                {
                    "title":"Lead Generation Strategies",
                    "description":"We implement proven lead funnels and automation strategies that consistently drive high-quality leads to your business.",
                    "list":["1","2","3"],
                    "icon":""
                },
                {
                    "title":"Landing Pages",
                    "description":"High-converting, SEO-optimized landing pages built to engage your visitors and drive action with compelling CTAs.",
                    "list":["1","2","3"],
                    "icon":""
                },
                {
                    "title":"Ongoing Support & Maintenance",
                    "description":"We ensure your website and systems stay secure, up-to-date, and optimized with proactive support and maintenance.",
                    "list":["1","2","3"],
                    "icon":""
                },
                {
                    "title":"Conversion Optimization",
                    "description":"We analyze user behavior and optimize the user journey to increase conversions and maximize ROI across your digital platforms.",
                    "list":["1","2","3"],
                    "icon":""
                },
                {
                    "title":"SEO & Performance Tuning",
                    "description":"Our sites are built with speed, accessibility, and search engine performance in mind — for better visibility and user experience.",
                    "list":["1","2","3"],
                    "icon":""
                },
                {
                    "title":"Mobile Apps",
                    "description":"We develop secure, scalable Mobile Apps with third-party tools, APIs, and payment systems to enhance your digital ecosystem.",
                    "list":["1","2","3"],
                    "icon":""
                },
            ]
            }

        }
    })
</script>