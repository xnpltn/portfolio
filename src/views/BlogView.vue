<script setup>
import { onBeforeMount, ref, onMounted } from 'vue';
import Article from '@/components/Articles/Article.vue';
import db from '@/fakedb.json'
const articles = db.Articles

const loading = ref(false)


     
</script>

<template>
    <article >
        <section class="text-white grid " v-for="article in articles" :key="article.title">
            <Article :title="article.title" :desc="article.description" :image="article.image"/>
        </section>
    </article>
</template>

<style>


</style>
