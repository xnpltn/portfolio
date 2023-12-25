<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer/Footer.vue';

</script>

<template>
  <header>
    <Navbar/>
  </header>

  <RouterView />
  <footer class="bg-gray-900">
    <Footer/>
  </footer>
</template>

