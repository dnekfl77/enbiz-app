<template>
  <h3>Persistedstate sample</h3>
  <div>
    <p>user: {{ userState.user.username }}</p>
  </div>
  <div class="mt-2">
    <button type="button" class="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="changeUsername()">
      Change username
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useUserState } from '~/composables/useUserState';

const userState = useUserState();

function changeUsername() {
  alert('changeUsername');
  userState.save({ username: 'Changed name' });
}
</script>
