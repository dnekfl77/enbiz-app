// referesh 토큰을 이용한 access token 요청
export default defineNuxtRouteMiddleware((to, from) => {
  const authentication = useAuthentication();
  const token = authentication.accessToken;

  if (!token) {
    return;
  }

  const jwtPayload = JSON.parse(atob(token?.split('.')[1]));
  const isExpired = Date.now() >= jwtPayload.exp * 1000;

  console.log(jwtPayload);
  console.log(`isExpired: ${isExpired}`);

  if (!isExpired) {
    return;
  }

  authentication.refresh();
});
