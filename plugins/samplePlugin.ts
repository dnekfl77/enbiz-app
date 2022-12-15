export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `${msg} ${msg}`,
    },
  };
});
