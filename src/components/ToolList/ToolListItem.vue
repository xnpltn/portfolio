<script setup>

defineProps({
    title: String,
    image: String,
    desc: String
})



</script>


<template>
    <div>
        
        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
            <img :src="image" alt="">
        </div>
        <h3 class="mb-2 text-xl font-bold dark:text-white">{{ title }}</h3>
        <p class="text-gray-500 dark:text-gray-400">{{ desc }}</p>
    </div>
</template>