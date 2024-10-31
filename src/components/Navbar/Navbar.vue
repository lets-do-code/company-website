<template>
  <header class="fixed z-[9999] w-full flex flex-col font-bold bg-black/40 tracking-wider">
    <div class="flex flex-wrap gap-5 justify-between max-w-[1400px] mx-auto py-7 px-5 w-full ">
      <h1 class="text-xl text-[#E5E5E5]">RUNO</h1>
      <nav class="max-sm:hidden flex gap-4 self-start text-sm ">

        <a v-for="link in navLinks" :key="link.id" :href="link.path" class="my-auto text-[#E5E5E5] ">{{ link.name }}</a>
        <div class="shrink-0 w-px border border-solid border-[#E5E5E5] h-[23px]"></div>
        <img loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee7214b655bbfcacbfb84d3898715c4819a1bb548e37539148044f6da97c43c4?placeholderIfAbsent=true&apiKey=c81aa461ed88497c9715fa37b92c8996"
          alt="" class="object-contain shrink-0 self-start max-w-full aspect-[8.62] w-[172px]" />
        <div class="shrink-0 w-px border border-solid border-[#E5E5E5] h-[23px]"></div>
        <img loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/62fe2ae1302857022ca3e0f6c71a44a15572c69a20b89fb2593ebff18efe03a4?placeholderIfAbsent=true&apiKey=c81aa461ed88497c9715fa37b92c8996"
          alt="Search icon" class="object-contain shrink-0 self-start w-5 aspect-square" />
      </nav>
    </div>
  </header>
</template>

<script>

export default {
  data() {
    return {
      navLinks: [
        { name: 'Home', path: '/', id: 'home', },
        { name: 'About', path: '/about', id: 'about' },
        { name: 'Articles', path: '/article', id: 'article', },
        { name: 'Contact', path: '/contact', id: 'contact', },
      ],
    }
  },
  
}

</script>