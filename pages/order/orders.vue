<template>
  <!-- ... -->
  <div class="flex flex-col text-sm w-full max-w-7xl mx-auto shadow w-full rounded-lg divide-y divide-gray-200">
    <h2 class="p-4 text-base font-bold">Orders</h2>
    <div class="p-4 grid grid-flow-row-dense grid-cols-8 grid-rows-1" v-for="order in ordersStore.orders" :key="order.orderNo">
      <span class="col-span-1 py-2">{{ order.orderNo }}</span>
      <span class="col-span-3 py-2">{{ order.goodsName }}</span>
      <span class="col-span-1 py-2">{{ numberWithCommas(order.goodsPrice) }}</span>
      <span class="col-span-1 py-2">{{ order.buyerName }}</span>
      <span class="col-span-1 py-2">{{ moment(order.createDt).format('DD/MM/YY hh:mm:ss') }}</span>
      <button
        type="button"
        class="col-span-1 transition duration-300 border border-gray-200 text-white w-full rounded-lg text-sm shadow-sm hover:shadow-md text-center inline-block bg-red-500 hover:bg-red-700 py-1 disabled:opacity-50"
        :data="order"
        @click.stop.prevent="cancelPay($event, order)"
        :disabled="order.pay?.payState != 'COMPLETE'"
      >
        Cancel
      </button>
    </div>
  </div>
  <button @click.stop.prevent="changeOrders">RELAD</button>
</template>

<script lang="ts" setup>
import _ from 'lodash';
import { useOrdersStore } from '~/store/order/orders';
import moment from 'moment';

const ordersStore = useOrdersStore();
const { data, refresh } = useFetch(() => `/api/sample/order/selectOrders`, {
  server: false,
  method: 'get',
  onResponse: ({ response: { _data: responseData } }) => {
    ordersStore.newOrders(responseData.payload);
  },
});

const changeOrders = () => refresh();

const cancelPay = async function (event: Event, ord: Ord) {
  if (!confirm('취소?')) {
    return;
  }

  const { data, error } = await useFetch(() => '/api/sample/order/cancelOrder', {
    method: 'post',
    body: { ...ord },
  });

  const response: any = data.value;
  if (response.code != '0000') {
    return alert('error');
  }

  alert('취소완료'), refresh();
};

onMounted(() => refresh());
</script>

<style scoped>
/* */
</style>
