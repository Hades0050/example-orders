class Order {
  public id: number;
  public name: string;
  public address: string;
  public date: string;
  public status: string;
  public comment: string;

  constructor(order?: Order) {
    this.id = order?.id ? order.id : 1;
    this.name = order?.name ? order.name : "";
    this.address = order?.address ? order.address : "";
    this.date = order?.date ? order.date : new Date().toString();
    this.status = order?.status ? order.status : "Новый";
    this.comment = order?.comment ? order.comment : "";
  }
  
}

export { Order };
