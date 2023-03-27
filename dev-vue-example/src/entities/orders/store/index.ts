import { IColumn } from './../../../widgets/table/const/index';
import { defineStore } from 'pinia';
import { ordersApi } from '../api';
import { Order } from '../model';
import  moment from 'moment';
import 'moment/dist/locale/ru';

export const useOrdersStore = defineStore('orders', {
  state: () => ({
    columns: [
      {
        name: 'Id',
        label: '№',
        field: 'id',
      },
      {
        name: 'name',
        label: 'Имя клиента',
        field: 'name',
      },
      {
        name: 'Address',
        label: 'Адрес',
        field: 'address',
        sortable: true,
      },
      {
        name: 'Date',
        label: 'Дата заказа',
        field: 'date',
        sortable: true,
        format: (val: string) => {
          return  moment(val,'DD.MM.YYYY').format('DD MMMM YYYY')
        },
      },
      {
        name: 'Status',
        label: 'Статус',
        field: 'status',
        style: (val: string) => {
          return val.toUpperCase() === 'ВЫПОЛНЕН'
            ? 'color:green'
            : 'color:blue';
        },
      },
      {
        name: 'Сomment',
        label: 'Коментарий',
        field: 'comment',
      },
    ]as IColumn[],
    data: [] as Order[],
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    //получение
    async fetch() {
      const response = await ordersApi.fetch();
      Array.isArray(response) ? (this.data = response) : (this.data = []);
    },
    //Cоздание
    async create(val: Order) {
      const order = new Order(val);
      const response = await ordersApi.create(order);
      this.data.push(response);
    },
    //Удаленик
    async delete(val: Order) {
      await ordersApi.delete(val);
      this.data.splice(this.data.indexOf(val), 1);
    },
    //Обновление статуса заказ
    async updateStatus(val: Order) {
      const response = await ordersApi.updateStatus(val);
      this.data.splice(this.data.indexOf(val), 1, response);
    },
  },
});
