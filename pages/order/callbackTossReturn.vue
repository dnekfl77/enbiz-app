<template>
  <div>Token: {{ route.query.paymentKey }}</div>
</template>

<script lang="ts" setup>
import _ from 'lodash';

definePageMeta({
  layout: 'empty',
});

const route = useRoute();

/** After loading... */

onMounted(async () => {
  setTimeout(async () => {
    
    const {
      data: { value: responseData },
    } = await useLazyAsyncData(
      (ctx) => {
        console.log('ctx:', ctx);
        return $fetch(`/api/sample/payment/toss/approve`, {
          method: 'post',
          cache: 'no-cache',
          mode: 'cors',
          body: {
            ...route.query,
          },
        });
      },
      { server: false }
    );
    
      alert('hello.');
    
      if (!(responseData as any).code) {
        return;
      }
    
      alert('결제완료.');
  }, 100)
  //location.href = '/order/orders';
});
</script>
