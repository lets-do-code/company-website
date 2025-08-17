<template>
    <div>
        <form onsubmit="handleSubmit" class="bg-gray-50 p-5 flex flex-col gap-5">
            <div class="flex flex-col gap-1">
                <label htmlFor="name" class="text-md text-black">Name</label>
                <input id="name" placeholder="Eg. John" value="" class="outline-none px-3 py-2 text-md text-black border"/>

            </div>
            <div class="flex flex-col gap-1">
                <label htmlFor="phone" class="text-md text-black">Phone</label>
                <input id="phone" placeholder="+91 999 9999 999" value="" class="outline-none px-3 py-2 text-md text-black border"/>

            </div>
            <div class="flex flex-col gap-1">
                <label htmlFor="email" class="text-md text-black">Email</label>
                <input id="email" placeholder="example@gmail.com" value="" class="outline-none px-3 py-2 text-md text-black border"/>

            </div>
            <div class="flex flex-col gap-1">
                <label htmlFor="message" class="text-md text-black">Message</label>
                <textarea id="message" rows="8" placeholder="Tell about your brand" value="" class=" resize-none outline-none px-3 py-2 text-md text-black border"/>

            </div>
        </form>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

    export default defineComponent({
        name:"Form"
    })
</script>