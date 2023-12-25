<script setup>
import Banner from '@/components/Banner.vue';

</script>

<template>
    
    <section class="bg-gray-900">
    <div class="py-16 px-12 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 sm:py-16 grid place-items-center">
        
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-5xl text-white bbc-msn">XNPLTN</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">'From tiny bytes, vast systems rise, Engineering dreams into reality's call.'</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">  
        </div>
        <div class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  rounded text-gray-200 hover:bg-gray-200 ">
            <p>Wanna see something cool? Click the banner below &darr;</p>
            
        </div>
        <Banner/>
    </div>
    
</section>

</template>


<style>

/* .bbc-msn{
    background: linear-gradient(#232bc2,#c22372);
    
} */

</style>