<script lang="ts" setup>
useHead({
  meta: [
    // ...
    { charset: 'utf-8' },
    { name: 'Pragma', content: 'no-cache' },
    { name: 'Expires', content: '-1' },
  ],
});
</script>

<template>
  <div class="container mx-auto px-4">
    <NavigationBar />
    <div class="mt-5">
      <slot />
    </div>
  </div>
</template>

<style>
/* :root {
  --primary-color: #00c58e;
} */
</style>
