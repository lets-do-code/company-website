<script setup lang="ts">
import Footer from './components/Footer/Footer.vue';
import Navbar from './components/Navbar/Navbar.vue';
</script>


<template>
  <Navbar/>

  <div id="app" class="max-w-[1240px] mx-auto !px-5">
    <router-view/>
  </div>
  <Footer/>

</template>  

<style>
#app {
  min-height: 100vh;
}
#app > .router-view {
  flex-grow: 1;
}
</style>


