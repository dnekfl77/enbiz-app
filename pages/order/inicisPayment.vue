<template>
  <div class="min-h-screen flex flex-col py-12 text-sm">
    <form class="w-full max-w-2xl mx-auto shadow w-full rounded-lg divide-y divide-gray-200 py-2" name="payForm" id="payForm" ref="payForm">
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="order-no">주문번호</label>
        </div>
        <div class="w-4/5">
          <input
            :value="payInfo.orderXxx"
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
            :value="payInfo.goodName"
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
            :value="payInfo.goodMny"
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
        <div class="grid grid-cols-3 gap-1">
          <button
            type="button"
            class="transition duration-300 col-span-2 border border-gray-200 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-bold text-center text-lg inline-block bg-red-500 hover:bg-red-700"
            @click="executePay()"
          >
            결제요청
          </button>
          <button
            type="button"
            class="transition duration-300 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-bold text-center inline-block"
            @click="cancelPay()"
          >
            취소
          </button>
        </div>
      </div>

      <input type="hidden" name="version" value="1.0" />
      <input type="hidden" name="gopaymethod" value="Card:Directbank:vbank" />
      <input type="hidden" name="mid" :value="payInfo.inicisMid" />
      <input type="hidden" name="signature" :value="payInfo.signature" />
      <input type="hidden" name="mKey" :value="payInfo.mKey" />
      <input type="hidden" name="timestamp" :value="payInfo.timestamp" />
      <input type="hidden" name="currency" value="WON" />

      <!-- 가맹점 정보 설정-->
      <input type="hidden" name="returnUrl" value="http://localhost:3000/order/callbackInicisReturn" />
      <input type="hidden" name="closeUrl" value="http://localhost:3000/order/callbackInicisClose" />
      <input type="hidden" name="acceptmethod" value="HPP(1):below1000:va_receipt" />
    </form>
  </div>
</template>

<script lang="ts" setup>
import _ from 'lodash';

const { data } = await useAsyncData(`info`, () => {
  return $fetch(`${useRuntimeConfig().public.api_url}/api/sample/payment/inicisPayInfo`, {
    method: 'get',
    params: { key: _.random(100) },
    cache: 'no-cache',
    mode: 'cors',
  });
});

if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
}

const payInfo = $ref<any>((data.value as any).payload);
const payForm = $ref<HTMLFormElement>();

const executePay = () => {
  window.INIStdPay.pay('payForm');
};

const cancelPay = () => {
  alert('Cancel');
};

onMounted(async () => {
  window.m_Completepayment = async (form: any, event: any) => {
    const payFormEl = payForm as HTMLFormElement;
    GetField(payFormEl, form);

    if (payFormEl.res_cd.value === '0000') {
      const { data, error } = await useFetch(() => '/api/sample/payment/approve', {
        method: 'post',
        body: {
          enc_data: payFormEl.enc_data.value,
          enc_info: payFormEl.enc_info.value,
          tran_cd: payFormEl.tran_cd.value,
          ordr_idxx: payFormEl.ordr_idxx.value,
          use_pay_method: payFormEl.use_pay_method.value,
          good_mny: payFormEl.good_mny.value,
          good_name: payFormEl.good_name.value,
          buyr_name: payFormEl.buyr_name.value,
          buyr_tel1: payFormEl.buyr_tel1.value,
          buyr_mail: payFormEl.buyr_mail.value,
          target_pg: 'INICIS',
          payco_direct: '',
        },
      });

      alert((data.value as any).payload.res_msg);

      location.href = '/order/orders';
    } else {
      alert(`[${payFormEl.res_cd.value}] ${payFormEl.res_msg.value}`);
      event();
    }
  };
});

useHead({
  script: [{ src: payInfo.inicisJsUrl, type: 'text/javascript' }],
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
