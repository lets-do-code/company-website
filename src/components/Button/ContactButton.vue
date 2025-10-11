<template>
    <button  @click="handleClick" class="border border-[#F53838] text-[#F53838] hover:bg-[#F53838] py-2 hover:text-white duration-300 transition-all active:scale-95 px-5 lg:px-10 rounded-full font-bold">
    
            Contact Us
    
        </button>
    
</template>

<script setup>
const emit = defineEmits(['open'])

const handleClick = () => {
    emit('open')
}
</script>


