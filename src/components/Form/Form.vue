<template>
    <div>
    
        <form @submit.prevent="handleSubmit" class="bg-gray-50 p-5 flex flex-col gap-5 rounded-md shadow-sm">
    
            <div class="flex flex-col gap-1">
    
                <label for="name" class="text-md text-black">Name</label>
    
                <input id="name" v-model="form.name" placeholder="Eg. John" class="outline-none px-3 py-2 text-md text-black border rounded-md" required />
    
            </div>
    
    
    
            <div class="flex flex-col gap-1">
    
                <label for="phone" class="text-md text-black">Phone</label>
    
                <input id="phone" v-model="form.phone" placeholder="+91 999 9999 999" class="outline-none px-3 py-2 text-md text-black border rounded-md" required />
    
            </div>
    
    
    
            <div class="flex flex-col gap-1">
    
                <label for="email" class="text-md text-black">Email</label>
    
                <input id="email" v-model="form.email" placeholder="example@gmail.com" type="email" class="outline-none px-3 py-2 text-md text-black border rounded-md" required />
    
            </div>
    
    
    
            <div class="flex flex-col gap-1">
    
                <label for="message" class="text-md text-black">Message</label>
    
                <textarea id="message" v-model="form.message" rows="6" placeholder="Tell about your brand" class="resize-none outline-none px-3 py-2 text-md text-black border rounded-md"></textarea>
    
            </div>
    
    
    
            <button type="submit" class="py-2 bg-[#F53838] text-white text-md rounded-md hover:bg-red-600 transition" :disabled="loading">
    
            {{ loading ? "Submitting..." : "Submit" }}
    
          </button>
    
    
    
            <p v-if="success" class="text-green-600 text-sm">✅ Form submitted successfully!</p>
    
            <p v-if="error" class="text-red-600 text-sm">❌ {{ error }}</p>
    
        </form>
    
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const form = ref({
    name: "",
    phone: "",
    email: "",
    message: "",
});

const loading = ref(false);
const success = ref(false);
const error = ref("");
const router = useRouter();

// 🔗 Your Privyr webhook URL
const WEBHOOK_URL = "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/vhOkL5zd";

const handleSubmit = async () => {
    loading.value = true;
    success.value = false;
    error.value = "";

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: form.value.name,
                phone: form.value.phone,
                email: form.value.email,
                other_fields: {
                    message: form.value.message,
                },
            }),
        });

        if (!response.ok) throw new Error("Failed to submit form");

        success.value = true;

        form.value = { name: "", phone: "", email: "", message: "" };
        router.push("/thank-you");
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
};
</script>
