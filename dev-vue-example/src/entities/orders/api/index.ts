import { api } from '../../../app/providers/axios';
import { Order } from '../model';
export default class OrdersApi {
  // Получение заказов
  async fetch() {
    return api.axiosCall<Order[]>({
      url: `/orders`,
      method: 'get',
    });
  }
  // Создание заказа
  async create(val: Order) {
    return api.axiosCall<Order>({
      url: `/orders`,
      method: 'put',
      data: val,
    });

  }
  // Удаление заказа
  async delete(val: Order) {
    return api.axiosCall({
      url: `/orders/${val.id}`,
      method: 'delete',
    });
  }

  //  При нажатии на кнопку Изменить статус, статус изменяется на Выполнен и отправляется запрос на обновление статуса (Только выполнен?)
  async updateStatus(val: Order) {
    return api.axiosCall<Order>({
      url: `/status-order/${val.id}`,
      method: 'get',
    });
  }
}
export const ordersApi = new OrdersApi();
