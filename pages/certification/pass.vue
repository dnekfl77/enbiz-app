<template>
  <div class="w-full max-w-2xl mx-auto shadow w-full rounded-lg divide-y divide-gray-200 pt-10">
    <div class="flex items-center p-2">
      <div class="w-1/3"></div>
      <div class="w-2/3">
        <button
          type="button"
          class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block"
          @click="onCertification"
        >
          certification
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import _ from 'lodash';

const onCertification = async (evt: Event) => {
  const config = useRuntimeConfig();

  const {
    data: { value: responeData },
  } = await useFetch(() => '/api/sample/certification/encryptNiceData', {
    method: 'get',
    params: {
      deviceType: 'PC',
      returnUrl: 'http://localhost:3000/certification/callbackPass',
      errorUrl: 'http://localhost:3000/certification/callbackPass',
    },
  });

  console.log('responeData:', responeData);
  console.log('res.data.value:', (responeData as any).code);

  if ((responeData as any).code !== '0000') {
    return; // 실패 처리
  }

  const { cipherData } = (responeData as any).payload;
  const data = {
    m: 'checkplusService',
    EncodeData: cipherData,
  };

  const queryString = _.map(data, (v, k) => [k, v].join('=')).join('&');
  const passUrl = `${config.public.pass_url}?${queryString}`;

  console.log('queryString:', queryString);
  console.log('passUrl', passUrl);

  if (true) {
    window.open(passUrl, '_blank', `width=480, height=700, left=100, top=100, scrollbars=yes, resizable=1`);
  }
};
</script>



m=checkplusService&EncodeData=AgAFRzczNzVMxsG/DcVXjvNduZvzI8ozerEuu9psPVJ6yv2R/rXPNbCNPRXwSRHDODfV+lsEk1y2VI6kyL0t646WWEGlNr4q4lmnwzS0vKDrbu2DWYvNZ/5YnqIDXOGd51xGsn2FYHIUxNJdT25PWlVfMEfXhkNZghj8o7i+jN8wB3/dgPPFnVTzW5aitbyT80TSnqzF0jaNJW4hw+6RdfUpNPvmNYLjUN9Q31oBMJH6+tmu56UjfBO2SM/ebNDNzHiE+fT7q6exMdnY6et+ypclx+PqG0jLFXiMusEEMC39eL3xACQ3kuhDdol5K2EVwgswOBJU0SNdxPDDn4pokoBaGTiuK01sEwO6ttiIsQ96AjGVpr0Z2zqPQY8oS9bLlM32ZE0n1H2jXXlCIJlzYV86Bqpychzs


