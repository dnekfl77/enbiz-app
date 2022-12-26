<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/accounts/signUp">Sign Up</NuxtLink>
    <button @click="userState.remove">Sign Out</button>
    <div v-show="!_.isEmpty(userState.user)">Hello,{{ userState.user.username }} ({{ userState.user.email }})!</div>
  </nav>
</template>

<script lang="ts" setup>
import _ from 'lodash';
import { useUserState } from '~/composables/useUserState';

const userState = useUserState();

onMounted(() => {

});
</script>

<style lang="scss" scoped>
div {
  background-color: #4b806c;
}
</style>
