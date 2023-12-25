<script setup>


defineProps({
    title: String,
    image: String,
    desc: String,
})

</script>

<template>
    <section class="bg-white dark:bg-gray-900 border-t border-gray-700">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16" >
            <div class="flex flex-col justify-center">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-lg dark:text-white">{{ title }}</h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-base dark:text-gray-400">{{ desc }}</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center bg-gray-700 hover:bg-gray-800  rounded-lg   text-white">
                        Continue Reading
                    </a>  
                </div>
            </div>
            <div class="flex flex-col justify-center  rounded-xl h-80 overflow-hidden">
                <img :src="image" class=" object-cover h-full rounded-xl"/>
            </div>
        </div>
        
    </section>

</template>