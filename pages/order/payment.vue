<template>
  <div class="min-h-screen flex flex-col py-12 text-sm">
    <form class="w-full max-w-2xl mx-auto shadow w-full rounded-lg divide-y divide-gray-200 py-2" name="payForm" ref="payForm">
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="order-no">주문번호</label>
        </div>
        <div class="w-4/5">
          <input
            :value="payInfo.orderXxx"
            name="ordr_idxx"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="order-no"
            type="text"
            placeholder="ordr_idxx"
          />
        </div>
      </div>
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="inline-full-name">상품명</label>
        </div>
        <div class="w-4/5">
          <input
            name="good_name"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="good_name"
          />
        </div>
      </div>
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="inline-full-name">상품금액</label>
        </div>
        <div class="w-4/5">
          <input
            name="good_mny"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="good_mny"
          />
        </div>
      </div>

      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="inline-full-name">주문자명</label>
        </div>
        <div class="w-4/5">
          <input
            name="buyr_name"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="buyr_name"
          />
        </div>
      </div>
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="inline-full-name">전화번호</label>
        </div>
        <div class="w-4/5">
          <input
            name="buyr_tel1"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="buyr_tel1"
          />
        </div>
      </div>
      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4" for="inline-full-name">이메일</label>
        </div>
        <div class="w-4/5">
          <input
            name="buyr_mail"
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            placeholder="buyr_mail"
          />
        </div>
      </div>

      <div class="flex items-center p-2">
        <div class="w-1/5">
          <label class="block text-gray-600 text-right mb-1 pr-4">결제수단</label>
        </div>
        <div class="w-4/5">
          <ul class="list-check-1">
            <li>
              <input type="radio" id="radio-2-1" class="ipt-radio-1" name="pay_method" value="100000000000" checked />
              <label for="radio-2-1"
                ><span class="ico-radio"><span></span></span>신용카드</label
              >
            </li>
            <li>
              <input type="radio" id="radio-2-2" class="ipt-radio-1" name="pay_method" value="010000000000" />
              <label for="radio-2-2"
                ><span class="ico-radio"><span></span></span>계좌이체</label
              >
            </li>
            <li>
              <input type="radio" id="radio-2-3" class="ipt-radio-1" name="pay_method" value="001000000000" />
              <label for="radio-2-3"
                ><span class="ico-radio"><span></span></span>가상계좌</label
              >
            </li>
            <li>
              <input type="radio" id="radio-2-4" class="ipt-radio-1" name="pay_method" value="000100000000" />
              <label for="radio-2-4"
                ><span class="ico-radio"><span></span></span>포인트</label
              >
            </li>
            <li>
              <input type="radio" id="radio-2-5" class="ipt-radio-1" name="pay_method" value="000010000000" />
              <label for="radio-2-5"
                ><span class="ico-radio"><span></span></span>휴대폰</label
              >
            </li>
            <li>
              <input type="radio" id="radio-2-6" class="ipt-radio-1" name="pay_method" value="000000001000" />
              <label for="radio-2-6"
                ><span class="ico-radio"><span></span></span>상품권</label
              >
            </li>
            <li>
              <input type="radio" id="radio-2-8" class="ipt-radio-1" name="pay_method" value="111000000000" />
              <label for="radio-2-8"
                ><span class="ico-radio"><span></span></span>신용카드/계좌이체/가상계좌</label
              >
            </li>
          </ul>
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

      <!-- 가맹점 정보 설정-->
      <input type="hidden" name="site_cd" :value="payInfo.kcpSiteCd" />
      <input type="hidden" name="site_name" :value="payInfo.kcpSiteName" />
      <input type="hidden" name="pay_method" value="" />
      <!--
        ※필수 항목
        표준웹에서 값을 설정하는 부분으로 반드시 포함되어야 합니다.값을 설정하지 마십시오
      -->
      <input type="hidden" name="res_cd" value="" />
      <input type="hidden" name="res_msg" value="" />
      <input type="hidden" name="enc_info" value="" />
      <input type="hidden" name="enc_data" value="" />
      <input type="hidden" name="ret_pay_method" value="" />
      <input type="hidden" name="tran_cd" value="" />
      <input type="hidden" name="use_pay_method" value="" />
      <!-- 주문정보 검증 관련 정보 : 표준웹 에서 설정하는 정보입니다 -->
      <input type="hidden" name="ordr_chk" value="" />
      <!--  현금영수증 관련 정보 : 표준웹 에서 설정하는 정보입니다 -->
      <input type="hidden" name="cash_yn" value="" />
      <input type="hidden" name="cash_tr_code" value="" />
      <input type="hidden" name="cash_id_info" value="" />

      <!--
        ====================================================
        추가 옵션 정보
        ※ 옵션 - 결제에 필요한 추가 옵션 정보를 입력 및 설정합니다.
        ====================================================
      -->

      <!--사용카드 설정 여부 파라미터 입니다.(통합결제창 노출 유무) -->
      <!-- <input type="hidden" name="used_card_YN"        value="Y" /> -->
      <!-- 사용카드 설정 파라미터 입니다. (해당 카드만 결제창에 보이게 설정하는 파라미터입니다. used_card_YN 값이 Y일때 적용됩니다. -->
      <!-- <input type="hidden" name="used_card"        value="CCBC:CCKM:CCSS" /> -->

      <!--
        신용카드 결제시 OK캐쉬백 적립 여부를 묻는 창을 설정하는 파라미터 입니다
        포인트 가맹점의 경우에만 창이 보여집니다
      -->
      <!-- <input type="hidden" name="save_ocb"        value="Y" /> -->

      <!-- 고정 할부 개월 수 선택
        value값을 "7" 로 설정했을 경우 => 카드결제시 결제창에 할부 7개월만 선택가능  -->
      <!-- <input type="hidden" name="fix_inst"        value="07" /> -->

      <!-- 무이자 옵션
        ※ 설정할부    (가맹점 관리자 페이지에 설정 된 무이자 설정을 따른다) - "" 로 설정
        ※ 일반할부    (KCP 이벤트 이외에 설정 된 모든 무이자 설정을 무시한다) - "N" 로 설정
        ※ 무자 할부 (가맹점 관리자 페이지에 설정 된 무이자 이벤트 중 원하는 무이자 설정을 세팅한다) - "Y" 로 설정 -->
      <!-- <input type="hidden" name="kcp_noint"       value="" /> -->

      <!-- 무이자 설정
        ※ 주의 1 : 할부는 결제금액이 50,000 원 이상일 경우에만 가능
        ※ 주의 2 : 무이자 설정값은 무이자 옵션이 Y일 경우에만 결제 창에 적용
        예) BC 2,3,6개월, 국민 3,6개월, 삼성 6,9개월 무이자 : CCBC-02:03:06,CCKM-03:06,CCSS-03:06:04 -->
      <!-- <input type="hidden" name="kcp_noint_quota" value="CCBC-02:03:06,CCKM-03:06,CCSS-03:06:09" /> -->

      <!--  해외카드 구분하는 파라미터 입니다.(해외비자, 해외마스터, 해외JCB로 구분하여 표시) -->
      <!-- <input type="hidden" name="used_card_CCXX"        value="Y"/> -->

      <!--  가상계좌 은행 선택 파라미터
        ※ 해당 은행을 결제창에서 보이게 합니다.(은행코드는 매뉴얼을 참조)  -->
      <!-- <input type="hidden" name="wish_vbank_list" value="05:03:04:07:11:23:26:32:34:81:71" /> -->

      <!--  가상계좌 입금 기한 설정하는 파라미터 - 발급일 + 3일 -->
      <!-- <input type="hidden" name="vcnt_expire_term" value="3"/> -->

      <!-- 가상계좌 입금 시간 설정하는 파라미터
        HHMMSS형식으로 입력하시기 바랍니다
          설정을 안하시는경우 기본적으로 23시59분59초가 세팅이 됩니다 -->
      <!-- <input type="hidden" name="vcnt_expire_term_time" value="120000" /> -->

      <!-- 포인트 결제시 복합 결제(신용카드+포인트) 여부를 결정할 수 있습니다.- N 일경우 복합결제 사용안함 -->
      <!-- <input type="hidden" name="complex_pnt_yn" value="N" /> -->

      <!-- 현금영수증 등록 창을 출력 여부를 설정하는 파라미터 입니다
        ※ Y : 현금영수증 등록 창 출력
        ※ N : 현금영수증 등록 창 출력 안함
        ※ 주의 : 현금영수증 사용 시 KCP 상점관리자 페이지에서 현금영수증 사용 동의를 하셔야 합니다 -->
      <!-- <input type="hidden" name="disp_tax_yn"     value="Y" /> -->

      <!--  결제창에 가맹점 사이트의 로고를 표준웹 좌측 상단에 출력하는 파라미터 입니다
        업체의 로고가 있는 URL을 정확히 입력하셔야 하며, 최대 150 X 50  미만 크기 지원
        ※ 주의 : 로고 용량이 150 X 50 이상일 경우 site_name 값이 표시됩니다. -->
      <!-- <input type="hidden" name="site_logo"       value="" /> -->

      <!-- 결제창 영문 표시 파라미터 입니다. 영문을 기본으로 사용하시려면 Y로 세팅하시기 바랍니다 -->
      <!-- <input type="hidden" name="eng_flag"      value="Y"> -->

      <!--  KCP는 과세상품과 비과세상품을 동시에 판매하는 업체들의 결제관리에 대한 편의성을 제공해드리고자,
        복합과세 전용 사이트코드를 지원해 드리며 총 금액에 대해 복합과세 처리가 가능하도록 제공하고 있습니다
        복합과세 전용 사이트 코드로 계약하신 가맹점에만 해당이 됩니다
        상품별이 아니라 금액으로 구분하여 요청하셔야 합니다
        총결제 금액은 과세금액 + 부과세 + 비과세금액의 합과 같아야 합니다.
        (good_mny = comm_tax_mny + comm_vat_mny + comm_free_mny) -->
      <!-- <input type="hidden" name="tax_flag"       value="TG03" /> -->
      <!-- 변경불가     -->
      <!-- <input type="hidden" name="comm_tax_mny"   value=""     /> -->
      <!-- 과세금액     -->
      <!-- <input type="hidden" name="comm_vat_mny"   value=""     /> -->
      <!-- 부가세      -->
      <!-- <input type="hidden" name="comm_free_mny"  value=""     /> -->
      <!-- 비과세 금액 -->

      <!--  skin_indx 값은 스킨을 변경할 수 있는 파라미터이며 총 7가지가 지원됩니다.
        변경을 원하시면 1부터 7까지 값을 넣어주시기 바랍니다. -->
      <!-- <input type="hidden" name="skin_indx"      value="1" /> -->
      <!-- 상품코드 설정 파라미터 입니다.(상품권을 따로 구분하여 처리할 수 있는 옵션기능입니다.) -->
      <!-- <input type="hidden" name="good_cd"      value="" /> -->

      <!-- 가맹점에서 관리하는 고객 아이디 설정을 해야 합니다. 상품권 결제 시 반드시 입력하시기 바랍니다. -->
      <!-- <input type="hidden" name="shop_user_id"    value="" /> -->

      <!--  복지포인트 결제시 가맹점에 할당되어진 코드 값을 입력해야합니다. -->
      <!-- <input type="hidden" name="pt_memcorp_cd"   value="" /> -->

      <!--  결제창의 상단문구를 변경할 수 있는 파라미터 입니다. -->
      <!-- <input type="hidden" name="kcp_pay_title"   value="상단문구추가" /> -->
    </form>
  </div>
</template>

<script lang="ts" setup>
import _ from 'lodash';

const payInfo: {
  // ...
  kcpSiteCd?: string;
  kcpSiteName?: string;
  kcpJsUrl?: string;
  goodMny?: number;
  goodName?: string;
  orderXxx?: string;
} = {};

// const info = await useAsyncData

const {data: res} = await useAsyncData(`info-${_.random(10)}`, () => {
  return $fetch('/api/sample/payment/fetchPayInfo', {
    method: 'GET',
    params: { key: _.random(100)},
    cache: 'reload'
  });
})

console.log('res.value:',res.value);

const { data, pending, error, refresh } = await useFetch(() => `/api/sample/payment/fetchPayInfo`, {
  key: `_.random(16)`,
  method: 'GET',
  immediate: true,
  server: false,
  headers: {
    // ...
  },
  onRequest: ({ request, options }) => {
    console.log('options.headers:', options.headers);
  },
  onResponse: ({ request, response, options }) => {
    if (response._data.code !== '0000') {
      return alert(response._data.message);
    }

    console.log('response._data:', response._data);

    return _.merge(payInfo, response._data.payload);
  },
  onRequestError: ({ request, options, error }) => {
    alert(error);
  },
  onResponseError: ({ request, response, options }) => {
    alert('error');
  },
});

useHead({
  // script: [{ src: payInfo.kcpJsUrl, type: 'text/javascript' }],
  script: [{ src: useRuntimeConfig().public.kcp_js_url, type: 'text/javascript' }],
});

const payForm = $ref();
const executePay = () => {
  KCP_Pay_Execute(payForm);
};

const cancelPay = () => {
  alert('Cancel');
};
</script>

<style lang="scss" scoped>
// ...
form {
  > div {
    border: none;
  }
}
</style>
