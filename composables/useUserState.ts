import { defineStore, skipHydrate } from 'pinia';
import { useEyeDropper, useLocalStorage, useSessionStorage } from '@vueuse/core';

export const useUserState = defineStore(
  'user',
  () => {
    const user = ref<SocialUser>({});

    function save(_user: SocialUser) {
      user.value.username = _user.username;
      user.value.email = _user.email;
    }

    function remove() {
      user.value = {};
    }

    return { user: skipHydrate(user), save, remove };
  },
  {
    persist: true,
  }
);
