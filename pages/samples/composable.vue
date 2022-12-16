<template>
  <h2 class="font-bold text-xl">Storage sample</h2>
  <div class="mt-3">
    <p>user: {{ userState }}</p>
  </div>
  <div class="mt-3">
    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="saveUser()">save</button>
  </div>
</template>

<script lang="ts" setup>
import { useUserState } from '~~/composables/useUserState';

const userState = useUserState();

function saveUser() {
  userState.value = { username: 'foo', age: 0xff };
}
</script>
