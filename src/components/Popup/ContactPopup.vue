<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black/50 z-[99999]">
    <div class="bg-white rounded-lg shadow-lg p-6 w-[95%] max-w-md relative">
      <button @click="$emit('close')" class="absolute top-3 right-3 text-gray-500 hover:text-black">
        ✕
      </button>

      <h2 class="text-xl font-semibold mb-4 text-center text-[#000000]">Contact Us</h2>
      <Form />
    </div>
  </div>
</template>

<script setup>
import Form from '../Form/Form.vue'

defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})

defineEmits(['close'])
</script>
