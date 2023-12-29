<script setup>
import Banner from '@/components/Banner.vue';

</script>

<template>
    
    <section class="bg-gray-900">
    <div class="py-16 px-12 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 sm:py-16 grid place-items-center">
        
        <!-- <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-white bbc-msn">XNPLTN</h1> -->
        <div class="bg-gray-700 animate-pulse from-gray-700  md:mb-5 mb-5 rounded-xl py-3 px-3">
            <p class="mb-1 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48 ">"From tiny bytes, vast systems rise, Engineering dreams into reality's call."</p>
            <p><span class=" text-xs">-Unknown Author</span></p>
        </div>
        <div class="flex flex-col mb-16 lg:mb-16 lg:mt-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <p class="mb-2 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
                I'm a passionate developer who bridges the gap between ideas and reality with Python, JavaScript, Vue.js, Nuxt.js, Django, and FastAPI. My expertise lies in crafting efficient backends and unlocking insights through machine learning.
            </p>  
        </div>
        <div class=" max-w-sm h-64 w-64 border rounded-lg shadow bg-gray-800 border-gray-700 origin-center rotate-45">
            
            <div class="flex flex-col items-center pb-10 origin-center -rotate-45">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg mr-5" src="/logo/logo-white.png" alt="Bonnie image"/>
                <div class="flex mt-4 md:mt-6 mr-5">
                    <RouterLink to="/projects" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900 ">See My projects &#8599;</RouterLink>
                </div>
            </div>
        </div>

        
    </div>
    
</section>

</template>


<style>

/* .bbc-msn{
    background: linear-gradient(#232bc2,#c22372);
    
} */

</style>