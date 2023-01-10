<template>
  <div>Hello</div>
  <p>{{ count }}</p>
  <p>{{ one }}</p>
  <div>
    <button type="button" @click="add">Add</button>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0);
const one = computed(() => count.value + 2);

const add = () => {
  count.value ++;
};
</script>
