<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>
    <RouterLink to="/projects">
        <div class="container bg-gray-200 rounded w-72 text-black">
            <div class="slide">
                <div class="content h-96" id="div1">
                  <img src="/nuxt.png" alt="" class="card-image">
                </div>
                <div class="content h-96 " id="div2">Div 2</div>
                <div class="content h-96" id="div3">Div 3</div>
            </div>
        </div>
    </RouterLink>


</template>


<style>
    .container {
      position: relative;
      overflow: hidden;
    }

    .slide {
      display: flex;
      width: 864px; 
      animation: slideAnimation 6s infinite;
    }

    .content {
      width: 100%;
      box-sizing: border-box;
      padding: 20px;
      text-align: center;
      /* color: #fff; */
      display: grid;
      place-content: center;
    }

    .card-image{
      max-width: 100%;
    }

    /* #div1 { background-color: #3498db; }
    #div2 { background-color: #e74c3c; }
    #div3 { background-color: #2ecc71; } */

    @keyframes slideAnimation {
      0% { transform: translateX(0); }
      33.33% { transform: translateX(-300px); }
      66.66% { transform: translateX(-600px); }
      100% { transform: translateX(0); }
    }
</style>