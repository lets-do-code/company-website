<template>
    <div class="flex flex-col gap-20">
        <HomeBanner/>
        <HomeStats/>
        <HomeAbout/>
        <HomeService/>
        <HomePartners/>
        <HomeMapView/>
        <Testimonial/>
        <ContactForm/>
    </div>
</template>




<script>
import HomeAbout from "@/components/About/HomeAbout.vue";
import HomeBanner from "@/components/Banner/HomeBanner.vue"
import ContactForm from "@/components/Form/ContactForm.vue";
import HomePartners from "@/components/Partner/HomePartners.vue";
import HomeMapView from "@/components/Presence/HomeMapView.vue";
import HomeService from "@/components/ServiceSec/HomeService.vue";
import HomeStats from "@/components/Stats/HomeStats.vue";
import Testimonial from "@/components/Testimonial/Testimonial.vue";

import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        HomeBanner,
        HomeStats,
        HomeAbout,
        HomeMapView,
        HomePartners,
        HomeService,
        Testimonial,
        ContactForm
    },

})
</script>
