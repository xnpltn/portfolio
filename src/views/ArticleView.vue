<script setup>

import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router';
import { articles } from '@/composables/useArticles';

const route = useRoute()
console.log(route.params.id)
console.log(articles().find((item)=> item.id == route.params.id))

const article = ref(null)

onBeforeMount(()=>{
    article.value = articles().find((item)=> item.id == route.params.id)
})



</script>

<template>
    <div class="grid place-items-center py-96" v-if="article">
        Article {{ route.params.id }}
        {{ articles().find((item)=> item.id == route.params.id) }}
    </div>
    <div v-else class="grid place-items-center py-96">
        Not Found
    </div>
</template>