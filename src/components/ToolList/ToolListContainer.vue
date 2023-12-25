<script setup>
import ToolListItem from './ToolListItem.vue';

defineProps({
    items: Array,
    itemsTitle: String,
    itemsDesc: String
})

</script>


<template>
    <section>
        <div class="max-w-screen-md  lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white mt-10 ">{{ itemsTitle }}</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">{{ itemsDesc }}</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <ToolListItem v-for="tool in items" :key="tool.name" :title="tool.name" :image="tool.image" :desc="tool.desc"/>
      </div>
    </section>
</template>