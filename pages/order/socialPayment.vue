<template>
  <div class="min-h-screen flex flex-col py-12 text-sm">
    <form class="w-full max-w-2xl mx-auto shadow w-full rounded-lg divide-y divide-gray-200 py-2" name="payForm" id="payForm" ref="payForm">
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="order-no">주문번호</label>
        </div>
        <div class="w-4/5">
          <input
            :value="payInfo?.orderXxx"
            name="oid"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="order-no"
            type="text"
            placeholder="oid"
          />
        </div>
      </div>
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="goodname">상품명</label>
        </div>
        <div class="w-4/5">
          <input
            :value="payInfo?.goodName"
            name="goodname"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="goodname"
          />
        </div>
      </div>
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="price">상품금액</label>
        </div>
        <div class="w-4/5">
          <input
            :value="payInfo?.goodMny"
            name="price"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="price"
          />
        </div>
      </div>

      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="buyername">주문자명</label>
        </div>
        <div class="w-4/5">
          <input
            value="홍길동"
            name="buyername"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="buyername"
          />
        </div>
      </div>
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="buyertel">전화번호</label>
        </div>
        <div class="w-4/5">
          <input
            value="010-0000-0000"
            name="buyertel"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="buyertel"
          />
        </div>
      </div>
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="buyeremail">이메일</label>
        </div>
        <div class="w-4/5">
          <input
            value="mail@example.com"
            name="buyeremail"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="buyeremail"
          />
        </div>
      </div>

      <div class="p-5">
        <div class="grid grid-cols-4 gap-1">
          <button
            type="button"
            class="transition duration-300 col-span-1 border border-gray-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-bold text-center text-lg inline-block bg-green-500 hover:bg-green-700"
            @click="executeNaverPay"
          >
            네이버
          </button>
          <button
            type="button"
            class="transition duration-300 col-span-1 border border-gray-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-bold text-center text-lg inline-block bg-yellow-500 hover:bg-yellow-700"
            @click="executeKakaoPay"
          >
            카카오
          </button>
          <button
            type="button"
            class="transition duration-300 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-bold text-center inline-block"
            @click="cancelPay"
          >
            취소
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import _ from 'lodash';

const { data } = await useAsyncData(
  `info`,
  () => {
    return $fetch(`${useRuntimeConfig().public.api_url}/api/sample/payment/socialPayInfo`, {
      method: 'get',
      params: { key: _.random(100) },
      cache: 'no-cache',
      mode: 'cors',
    });
  },
  { server: true }
);

if (!data.value) {
  throw createError({ statusCode: 502, statusMessage: 'Page Not Found.' });
}

const payInfo = $ref<any>((data.value as any).payload);
const payForm = $ref<HTMLFormElement>();

const executeNaverPay = () => {
  const oPay = window.Naver.Pay.create({
    mode: 'development' || payInfo.naverPay.mode, // development or production
    clientId: 'dQPaTGkl7UD9gyUVttF3' || payInfo.naverPay.clientId, // clientId
    openType: 'popup',
    payType: 'normal',
    onAuthorize: (data: any) => {
      console.log(data.resultCode);
    },
  });

  oPay.open({
    merchantUserKey: `uer_${_.random(1000)}`,
    merchantPayKey: payInfo.orderXxx,
    productName: 'test product',
    totalPayAmount: '1000',
    taxScopeAmount: '1000',
    taxExScopeAmount: '0',
    returnUrl: 'http://localhost:3000/callback',
  });
};

const executeKakaoPay = async () => {
  const {
    data: { value: readyData },
  } = await readyKakao();
  console.log('readyData', readyData);

  localStorage.setItem(
    'kakaoPayInfo',
    JSON.stringify({
      ...readyData.payload,
      buyerName: payForm?.buyername.value,
      buyerTel: payForm?.buyertel.value,
      buyerEmail: payForm?.buyeremail.value,
    })
  );

  const { kakaoPay } = readyData.payload;
  window.location.href = kakaoPay.next_redirect_pc_url;
  //window.open(readyData.payload.next_redirect_pc_url, '_kakaoPay', 'width=500, height=600');
};

const readyKakao = async (): Promise<any> => {
  return await useFetch<any>(() => '/api/sample/payment/kakaoPayReady', {
    method: 'post',
    body: {
      partnerOrderId: payInfo.orderXxx, // "ST202208045790435",
      partnerUserId: `uer_${_.random(1000)}`,
      itemName: payForm?.goodname.value, // "백면 로고 슬리브리스",
      quantity: 1,
      totalAmount: payForm?.price.value,
      approvalUrl: 'http://localhost:3000/order/callbackKakaoReturn',
      cancelUrl: window.location.href,
      failUrl: window.location.href,
    },
  });
};

const cancelPay = () => {
  alert('Cancel');
};

onMounted(async () => {});

useHead({
  script: [{ src: payInfo.naverPay.jsUrl, type: 'text/javascript' }],
});
</script>

<style lang="scss" scoped>
// ...
form {
  > div {
    border: none;
  }
}
</style>
