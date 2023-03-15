export default defineNuxtPlugin(() => {
  return {
    provide: {
      auth: (msg: string) => `${msg} ${msg}`,
    },
  };
});