<template>
  <!-- Close -->
</template>

<script lang="ts" setup>
import { stringLiteral } from '@babel/types';
import { H3Error, H3Event, readBody } from 'h3';
import _ from 'lodash';

definePageMeta({
  layout: 'empty',
});

const resp = ref<{ code?: string }>({});
if (process.server) {
  const body = await readBody(useNuxtApp().ssrContext?.event as H3Event);

  const {
    data: { value: responseData },
  } = await useAsyncData(async (ctx) => {
    try {
      return $fetch(`${useRuntimeConfig().public.api_url}/api/sample/payment/approve`, {
        method: 'post',
        cache: 'no-cache',
        mode: 'cors',
        body: {
          authUrl: body.authUrl,
          resultCode: body.resultCode,
          orderNumber: body.orderNumber,
          authToken: body.authToken,
          checkAckUrl: body.checkAckUrl,
          netCancelUrl: body.netCancelUrl,
          mid: body.mid,
          merchantData: body.merchantData,
          timestamp: body.timestamp,
          target_pg: 'INICIS',
        },
      });
    } catch (e) {
      console.log(e);
    }
  });

  console.log('(responseData as any)?.code:', (responseData as any)?.code);

  resp.value.code = (responseData as any)?.code;
}

if (!process.server)
  onMounted(() => {
    console.log('resp:', resp);
alert(resp.value.code);
    location.href = '/order/orders';
  });
</script>
