<template>
  <div class="p-4">
    <custom-input v-model:salutation="customer.salutation" v-model:name="customer.name" />
    <p>{{ customer }}</p>
  </div>
</template>

<script lang="ts" setup>
var customer = reactive({ salutation: '', name: '' });

onMounted(() => {
});
</script>

<style lang="scss" scoped></style>
