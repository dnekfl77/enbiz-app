import { defineStore } from 'pinia';
import _ from 'lodash';

export const useAuthenticationStore = defineStore(
  'authentication',
  () => {
    const account = reactive<Account>({});
    const accessToken = ref<string>();
    const refreshToken = ref<string>();

    return {
      account,
      accessToken,
      refreshToken,
      save(data: any) {
        // Set account and token
        _.extend(account, data);
        accessToken.value = data.accessToken;
        refreshToken.value = data.refreshToken;
      },
      remove() {
        //
        delete account.email;
        delete account.name;
        delete accessToken.value;
        delete refreshToken.value;
      },
    };
  },
  { persist: true }
);
