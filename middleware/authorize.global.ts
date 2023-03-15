import _ from 'lodash';
import { useAuthentication } from '~~/composables/useAuthentication';

// 접근 가능 페이지 설정
export default defineNuxtRouteMiddleware((to, from) => {
  if (!_.startsWith(to.path, '/order')) {
    return;
  }

  const authentication = useAuthentication();
  if (!authentication.isAuthorized()) {
    return navigateTo('/accounts/signUp?required=true');
  }
});
