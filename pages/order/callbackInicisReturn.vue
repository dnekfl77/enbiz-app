<template>
  <!-- Close -->
</template>

<script lang="ts" setup>
import { H3Error, H3Event, readBody } from 'h3';
import _ from 'lodash';
import { useCallbackStore } from '~~/store/order/callback';

definePageMeta({
  layout: 'empty',
});

const callbackState = useCallbackStore();

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
  callbackState.setResult((responseData as any).code, (responseData as any).message);
}

onMounted(() => {
  if (callbackState.result.code != '0000') {
    return alert(callbackState.result.message);
  }

  alert('결제완료.');

  location.href = '/order/orders';
});
</script>
