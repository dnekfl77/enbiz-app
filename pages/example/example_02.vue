<template>
  <div>Hello, {{ username }} !</div>
</template>

<script lang="ts" setup>
const username = ref();

onMounted(() => {
  username.value = 'Man';
});
</script>
