<template>
  <h2 class="font-bold text-xl">Storage sample</h2>
  <div class="mt-3">
    <p>localStorage: {{ store.localStore }}</p>
    <p>sessionStorage: {{ store.sessionStore }}</p>
    <p>cookieStorage: {{ store.cookieStore }}</p>
    <div class="mt-2">
      <button
        type="button"
        class="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="pushLocalStore()"
      >
        local push
      </button>
      <button
        type="button"
        class="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="pushSessoinStore()"
      >
        session push
      </button>
      <button
        type="button"
        class="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="pushCookieStore()"
      >
        cookie push
      </button>
    </div>
  </div>
  <div class="mt-3">
    <p>gloablStorage: {{ globalStore }}</p>
    <div class="mt-2">
      <button
        type="button"
        class="ml-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="pushGlobalStore()"
      >
        global push
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStorageStore, useGlobalState } from '~/store/sample/storage';
import _ from 'lodash';

const store = useStorageStore();

function pushSessoinStore() {
  store.putSessionStorage(`key-${_.random(0, 100)}`, _.random(0, 100));
}

function pushLocalStore() {
  store.putLocalStorage(`key-${_.random(0, 100)}`, _.random(0, 100));
}

function pushCookieStore() {
  store.putCookieStorage(`key-${_.random(0, 100)}`, _.random(0, 100));
}

const globalStore = useGlobalState();

function pushGlobalStore() {
  globalStore.value = `global-${_.random(0, 1000)}`;
}
</script>
