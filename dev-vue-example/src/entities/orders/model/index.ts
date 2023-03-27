import { useUsersStore } from './../../users/store/index';
class Order {
  public id: number;
  public name: string;
  public address: string;
  public date: string;
  public status: string;
  public comment: string;

  constructor(order?: Order) {
    this.id = order?.id ? order.id : 0;
    this.name = order?.name ? order.name : "";// Можно ведь полностью убрать поле name из формы и предзаполнять здесь или распарсить токен на сервере и подставить имя пользователя?
    this.address = order?.address ? order.address : "";
    this.date = order?.date ? order.date : new Date().toLocaleDateString(); // Лучше создавать дату на стороне сервера и в Unix, по опыту мороки меньше потом будет с форматированием
    this.status = order?.status ? order.status : "Новый";
    this.comment = order?.comment ? order.comment : "";
  }

  static getFormOrder() {
    const store=useUsersStore()//Подкючаем хранилище пользвоателей
    return {
      fields: [
        {
          placeholder: 'Введите ваше имя',
          name: 'name',
          as: 'input',
          rules: 'required',
          value:store.user?.name// Как в тз указано! предзаполняем форму пользователей
        },
        {
          placeholder: 'Введите ваш адрес',
          name: 'address',
          as: 'input',
          rules: 'required',
        },
        {
          placeholder: 'Коментарий',
          name: 'comment',
          as: 'input',
          rules: 'required',
        },
      ],
    };
  }

}

export { Order };
