import { defineStore, skipHydrate } from 'pinia';
import _ from 'lodash';
import { useStorage, useLocalStorage, useSessionStorage, createGlobalState } from '@vueuse/core';

export const useStorageStore = defineStore('storage', () => {
  const localStore = useLocalStorage<any>(
    'localStore',
    {},
    {
      mergeDefaults: (s, d) => _.merge(s, d),
      deep: true,
    }
  );
  const sessionStore = useSessionStorage<any>(
    'sessionStore',
    {},
    {
      mergeDefaults: (s, d) => _.merge(s, d),
      deep: true,
    }
  );
  const cookieStore = useCookie<any>('cookieStore', { secure: true, default: () => {} });

  function putLocalStorage(key: string, value: any) {
    localStore.value[key] = value;
  }

  function putSessionStorage(key: string, value: any) {
    sessionStore.value[key] = value;
  }

  function putCookieStorage(key: string, value: any) {
    cookieStore.value[key] = value;
  }

  return {
    // localStore: skipHydrate(localStore),
    // sessionStore: skipHydrate(sessionStore),
    // cookieStore: skipHydrate(cookieStore),
    localStore,
    sessionStore,
    cookieStore,
    putLocalStorage,
    putSessionStorage,
    putCookieStorage,
  };
});

export const useGlobalState = createGlobalState(() => useStorage('vueuse-local-storage', 'initialValue'));
