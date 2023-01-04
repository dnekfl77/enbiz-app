<template>
  <div>
    <select style="border: 1px solid gray" name="salutation" class="w-20" @change="emit('update:salutation', $event.target.value)">
      <option value="">-</option>
      <option v-for="v of salutations" :value="v" :key="v" :selected="salutation === v">{{ v }}</option>
    </select>
    <input style="border: 1px solid gray" class="ml-3" :value="name" type="text" name="name" @input="emit('update:name', $event.target.value)" />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  salutation: string;
  name: string;
  // age: number | undefined;
}>();
const emit = defineEmits<{
  (evnet: 'update:salutation', payload: string): void;
  (evnet: 'update:name', payload: string): void;
}>();

const salutations = ['Ms.', 'Mrs.', 'Miss'];
var nameEl = ref();

onMounted(() => {});
</script>
