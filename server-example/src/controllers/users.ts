/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";
import fs from "fs";
import { generateAccessToken } from "../middleware/jwt";

interface User {
  user: string;
  password: string;
  name?: string;
  role?: string;
}
const dataPath = "./src/database/users.json";
// авторизация (По хорошему нужно шифрование пароля)
const login = async (req: Request<User>, res: Response, next: NextFunction) => {
  try {
    fs.readFile(dataPath, "utf8", function (err, data) {
      const { username, password } = req.body;
      if (username && password) {
        const json_data = JSON.parse(data);
        const findUser = json_data.find(
          (item: User) => item.user === username && item.password === password
        );
        if (findUser) {
          const token = generateAccessToken(username);
          return res.status(200).json({ user: findUser, token: token });
        } else {
          return res.status(401).json({
            message: "not authorized",
          });
        }
      }
    });
  } catch (err) {
    return res.status(500).json({ message: "error server" });
  }
};

export default { login };
