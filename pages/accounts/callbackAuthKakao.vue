<template></template>

<script lang="ts" setup>
definePageMeta({
  layout: 'empty',
});

onMounted(() => {
  const route = useRoute();
  const config = useRuntimeConfig();

  console.log('query:', route.query.code);
  console.log('params:', route.params);

  const { data, pending, error, refresh } = useFetch(() => `/api/sample/social/sign`, {
    method: 'post',
    body: {
      // request params
      code: route.query.code,
      redirectUrl: config.public.kakao_authoriz_callback_url,
      state: route.query.state,
      socialType: 'KAKAO',
    },
    onRequest: ({ request, options }) => {
      console.log('options.headers:', options.headers);
    },
    onResponse: ({ request, response, options }) => {
      if (response._data.code !== '0000') {
        return alert(response._data.message), window.close();
      }

      (function (payload: any) {
        console.log('payload:', payload);
        opener.signUpCallback({ username: payload.name, email: payload.email, ...payload });
      })(response._data.payload);

      window.close();

      return response._data;
    },
  });
  console.log('data:name:', data);
  console.log('refresh:', refresh());
});
</script>
