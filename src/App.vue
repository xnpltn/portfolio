<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer/Footer.vue';
import ScrollTopButton from '@/components/ScrollTopButton.vue'



function scrollToTop(){
  window.scrollTo(0,0);
}

</script>

<template>
  <header>
    <Navbar/>
  </header>
  <ScrollTopButton @scroll-to-top="scrollToTop"/>
  <RouterView />
  <footer class="bg-gray-900">
    <Footer/>
  </footer>
</template>

