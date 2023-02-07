<template>
  <div>LIST
    <ul>
      <li v-for="(item, index) in items">
      {{ index }} - <slot :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const items = [1, 2, 3, 4];
</script>
