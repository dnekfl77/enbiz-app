import { defineStore } from 'pinia';
import _ from 'lodash';

export const useOrdersStore = defineStore('orders', () => {
  const orders = ref<Array<Ord>>([]);

  const newOrders = (data: Ord[]) => {
    orders.value.splice(0, orders.value.length);
    _.each(data, (v) => {
      orders.value.push(v);
    });
  };

  return { orders, newOrders };
});
