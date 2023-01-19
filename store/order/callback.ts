import { defineStore } from 'pinia';
import _ from 'lodash';

export const useCallbackStore = defineStore('callbackState', () => {
  const result = reactive<{ code?: string; message?: string }>({});

  function setResult(code: string, message: string) {
    result.code = code;
    result.message = message;
  }

  return { result, setResult };
});
