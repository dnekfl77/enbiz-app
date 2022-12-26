<template>
  <h3>Popup sample</h3>
  <div class="mt-3">
    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="openPopup()">Open</button>
  </div>
</template>

<script lang="ts" setup>
function openPopup() {
  window.open('https://www.naver.com', 'openNaver', '');
}
</script>
