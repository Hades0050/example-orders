/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";
import fs from "fs";
import { Order } from "../model/order";
const dataPath = "./src/database/orders.json";

//Получить все заказы
const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    fs.readFile(dataPath, "utf8", function (err, data) {
      if (err) {
        throw err;
      }
      return res.status(200).json(JSON.parse(data));
    });
  } catch (err) {
    return res.status(500).json({ message: "error server" });
  }
};

//Создать заказ
const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    fs.readFile(dataPath, "utf8", function (err, data) {
      if (err) {
        throw err;
      }
      const json_data = JSON.parse(data);
      let order = new Order();
      //Если массив не пустой
      if (json_data && json_data.length > 0) {
        const findMaxId = json_data.reduce((acc: Order, curr: Order) =>
          acc.id > curr.id ? acc : curr
        ); // Ищем элемент с максимальным id
        req.body.id = findMaxId.id + 1; // Подобие автоинкремента
        order = new Order(req.body);
      } else {
        req.body.id = 1; // Ставим  id=1
        order = new Order(req.body);
      }
      json_data.push(order);
      fs.writeFile(dataPath, JSON.stringify(json_data), "utf8", () => {
        if (err) {
          throw err;
        }
        return res.status(200).json(order);
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "error server" });
  }
};

//Удалить заказ
const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    fs.readFile(dataPath, "utf8", function (err, data) {
      if (err) {
        throw err;
      }
      const id = Number(req.params["id"]);
      const json_data = JSON.parse(data);
      const findOrder = json_data.find((item: Order) => item.id === id); //Ищем заказ
      json_data.splice(json_data.indexOf(findOrder), 1);
      fs.writeFile(dataPath, JSON.stringify(json_data), "utf8", () => {
        if (err) {
          throw err;
        }
        return res.status(200).json(JSON.parse(data));
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "error server" });
  }
};

//Обновить статус заказа
const updateStatusOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    fs.readFile(dataPath, "utf8", function (err, data) {
      if (err) {
        throw err;
      }
      const id = Number(req.params["id"]);
      const json_data = JSON.parse(data);
      const findOrder: Order = json_data.find((item: Order) => item.id === id); // Ищем элемент с максимальным id
      findOrder.status = "Выполнен";
      fs.writeFile(dataPath, JSON.stringify(json_data), "utf8", () => {
            return res.status(200).json(findOrder);
      });
    });
  } catch (err) {
    return res.status(500).json({ message: "error server" });
  }
};

export default { getOrders, createOrder, deleteOrder, updateStatusOrder };
