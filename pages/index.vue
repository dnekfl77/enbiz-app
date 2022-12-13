<template>
  <div class="text-3xl font-bold underline">Index</div>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const counter = ref<number>(0);
</script>
