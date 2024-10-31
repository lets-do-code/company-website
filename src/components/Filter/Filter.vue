<template>
    <div class="max-w-[1400px] mx-auto border w-full px-5">
            <div class=" w-full text-4xl font-semibold text-[#495057]">Popular topics</div>
            <nav class="flex justify-between gap-5 mt-5 text-sm font-bold leading-6 text-[#495057]" aria-label="Filter categories">
                <div class="flex gap-5 overflow-x-auto whitespace-nowrap">
                    <button v-for="clink in categoryLinks" :key="clink.id" :href="clink.name" class="hover:text-orange-300" aria-current="page">{{ clink.name }}</button>
                </div>
                <a href="#" class="hover:text-orange-300 whitespace-nowrap">View All</a>
            </nav>
    </div>
  </template>
  <script>
  export default {
     data(){
        return {
            categoryLinks:[
                {id:"all",name:"All"},
                {id:"adventure",name:"Adventure"},
                {id:"travel",name:"Travel"},
                {id:"fashion",name:"Fashion"},
                {id:"technology",name:"Technology"},
                {id:"branding",name:"Branding"},
            ]
        }
     }
  }
  </script>