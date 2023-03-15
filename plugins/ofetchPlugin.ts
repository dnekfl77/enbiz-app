import { ofetch } from 'ofetch';

export default defineNuxtPlugin((_nuxtApp) => {
  globalThis.$fetch = ofetch.create({
    onRequest({ options }) {
      const authentication = useAuthentication();
      if (authentication.isAuthorized()) {
        options.headers = { Authorization: `Bearer ${authentication.refreshToken}` };
        console.log(options);
      } else {
        console.log('Not authenticated');
      }
    },
    onRequestError({ error }) {
      console.error(error);
    },
  });
});
