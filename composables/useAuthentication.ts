import { useAuthenticationStore } from '~~/store/authorize/authentication';

export const useAuthentication = () => {
  const authenticationStore = useAuthenticationStore();

  return {
    account: authenticationStore.account,
    accessToken: authenticationStore.accessToken,
    refreshToken: authenticationStore.refreshToken,
    async signUp(body: any) {
      const result: any = await $fetch(`/api/sample/accounts/signSocial`, {
        method: 'post',
        body,
        cache: 'no-cache',
        mode: 'cors',
        immediate: false,
      }).catch((reason) => {
        return {
          code: '-',
          message: reason.message,
        };
      });

      if (result.code !== '0000') {
        return result;
      }

      authenticationStore.save(result.payload);

      return { code: result.code };
    },
    signOut() {
      authenticationStore.remove();
    },
    async refresh() {
        const result: any = await $fetch(`/api/sample/accounts/refresh`, {
          method: 'post',
          body: { refreshToken: this.refreshToken },
          cache: 'no-cache',
          mode: 'cors',
          immediate: false,
        }).catch((reason) => {
          return {
            code: '-',
            message: reason.message,
          };
        });
  
        if (result.code !== '0000') {
          return result;
        }
  
        authenticationStore.save(result.payload);
  
        return { code: result.code };
    },
    isAuthorized() {
      return !!authenticationStore.account?.name;
    },
  };
};
