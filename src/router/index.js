import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import { createRouter, createWebHistory } from "vue-router";
import ArticalDetails from "@/views/ArticalDetails.vue";
import ThankYou from "@/views/ThankYou.vue";


const routes = [
    { path: '/', name: "Home", component: Home },
    { path: '/thank-you', name: "thankyou", component: ThankYou },
    { path: '/login', name: "Login", component: Login },
    { path: '/:category/:slug', name: "ArticalDetails", component: ArticalDetails, props: true }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router