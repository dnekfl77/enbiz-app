<template>
  <div>Token: {{ 1 + 1 }}</div>
</template>

<script lang="ts">
import _ from 'lodash';

definePageMeta({
  layout: 'empty',
});

export default {
  setup() {
console.log('callback setup.');
  }
}
</script>
