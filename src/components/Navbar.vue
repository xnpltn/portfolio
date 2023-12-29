<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const items = [
    {name: 'Home', to: '/'},
    {name: 'Projects', to: '/projects'},
    {name: 'Blog', to: '/blog'},
    {name: 'Me', to: '/me'},
]

const show = ref(false)

function toggleNav(){
    show.value = !show.value
}


</script>
<template>
    <nav class="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b  border-gray-600 text-base px-8">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/logo/logo-white.png" class="w-6 h-6"/>
                <span class="self-center font-semibold whitespace-nowrap dark:text-white">Xnpltn</span>
            </a>
            <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" class="text-white font-medium rounded-lg text-sm px-4 py-2 text-center bg-gray-700 hover:bg-gray-800 ">Contact Me</button>
                <button @click="toggleNav" data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div :class="{
                'items-center justify-between  w-full md:flex md:w-auto md:order-1' : true,
                'hidden': !show
            }" >
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li v-for="item in items" :key="item.name">
                        <RouterLink :to="item.to" class="block py-3 px-4 text-sm  rounded hover:bg-gray-700 md:hover:bg-transparent  md:p-0 text-white">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>


<style scoped>


</style>