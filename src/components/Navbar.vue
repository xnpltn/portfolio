<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="container">
        <div class="logo">
            <span>XNPLTN</span>
        </div>
        <nav class="nav">
            <div>
                <ul>
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                        <RouterLink to="/about">About</RouterLink>
                        <RouterLink to="/projects">Projects</RouterLink>
                        <RouterLink to="/blog">Blog</RouterLink>
                    </li>
                </ul>
            </div>

        </nav>
    </div>
</template>



<style scoped>

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}



</style>