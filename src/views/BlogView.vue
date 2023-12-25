<script setup>

import Article from '@/components/Articles/Article.vue';
import { articles } from '@/composables/useArticles.js';

</script>

<template>
    <article >
        <section class="text-white grid " v-for="article in articles()" :key="article.title">
            <Article :title="article.title" :desc="article.description" :image="article.image"/>
        </section>
    </article>
</template>

<style>


</style>
