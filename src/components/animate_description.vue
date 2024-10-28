<template>
    <div class="container">
      <transition name="slide">
        <div v-if="show" class="box">内容</div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  const show = ref(false);
  </script>
  
  <style>
  .container {
    overflow: hidden;
  }
  
  .box {
    transition: transform 0.5s ease;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    transform: translateY(-100%);
  }
  
  .slide-enter-to,
  .slide-leave-from {
    transform: translateY(0);
  }
  </style>