<template>
  <span>TOKEN: {{ route.query.pg_token }}</span>
</template>

<script lang="ts" setup>
import _ from 'lodash';

definePageMeta({
  layout: 'empty',
});

const route = useRoute();
onMounted(async () => {
  const {
    data: { value: responseData },
  } = await useAsyncData(async (ctx) => {
    try {
      const payInfo = JSON.parse(localStorage.getItem('kakaoPayInfo')!);

      return $fetch(`/api/sample/payment/approve`, {
        method: 'post',
        cache: 'no-cache',
        mode: 'cors',
        body: {
          tid: payInfo.kakaoPay.tid,
          partnerOrderId: payInfo.kakaoPay.partnerOrderId,
          partnerUserId: payInfo.kakaoPay.partnerUserId,
          pgToken: route.query.pg_token,
          target_pg: 'KAKAO',
          // ...
          buyerName: payInfo.buyerName,
          buyerTel: payInfo.buyerTel,
          buyerEmail: payInfo.buyerEmail,
        },
      });
    } catch (e) {
      console.log(e);
    }
  });

  if (!(responseData as any).code) {
    return;
  }

  alert('결제완료.');
  location.href = '/order/orders';
});
</script>
