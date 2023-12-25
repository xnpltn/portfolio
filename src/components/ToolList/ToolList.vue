<script setup>
import ToolListContainer from './ToolListContainer.vue';
import { toolsList } from '@/composables/useToolsList.js';
import { languagesList  } from '@/composables/useLanguagesList.js';
import { frameworksList } from '@/composables/useFrameworksList.js';

</script>


<template>
    <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

      <ToolListContainer :items="toolsList()" itemsTitle="Favourite Tools." itemsDesc="See my favourite tools. They are the ones that helps my coding path go smooth! 😎"/>
      <ToolListContainer :items="languagesList()" itemsTitle="Programming Languages" itemsDesc="See my favourite tools. They are the ones that helps my coding path go smooth! 😎"/>
      <ToolListContainer :items="frameworksList()" itemsTitle="Frameworks" itemsDesc="See my favourite tools. They are the ones that helps my coding path go smooth! 😎" />
      

  </div>
</section>
</template>

<style scoped>


</style>