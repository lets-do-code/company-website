

<template>
    <div class="flex flex-col gap-5 max-w-[1240px] mx-auto w-full px-5">
        <h1 class=" w-full text-4xl font-semibold text-[#495057]">
            Editor’s Pick
        </h1>
        <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            <EditorCard/>
            <EditorCard/>
            <EditorCard/>
            <!-- <EditorCard/> -->
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import EditorCard from './EditorCard.vue';

export default defineComponent({
    components: {
        EditorCard,
    },

})
</script>