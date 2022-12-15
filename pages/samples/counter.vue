<template>
  <h3>Counter sample</h3>
  <div>
    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="store.increment()">increment</button>
    <p>count: {{ store.count }}</p>
    <p>doubleCount: {{ store.doubleCount }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '~~/store/sample/counter';

const store = useCounterStore();
</script>
