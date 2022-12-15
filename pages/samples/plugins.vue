<template>
  <h2 class="font-bold text-xl">Plugins sample</h2>
  <div class="mt-3">
    <p>{{ $hello('world') }}</p>
  </div>
</template>

<script lang="ts" setup>
const { $hello } = useNuxtApp();
</script>
