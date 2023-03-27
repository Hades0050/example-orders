import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY: Secret = process.env.SECRET_KEY as string;
//Создание токена (временный)
const generateAccessToken = (username: string) => {
  return jwt.sign({ username: username }, SECRET_KEY, { expiresIn: "1800s" });
};
//Валидация токена
const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.token;
  if (token == null) return res.sendStatus(401);
  if (typeof token === "string") {
    jwt.verify(token, SECRET_KEY as string, (err: any, user: any) => {
      if (err) return res.sendStatus(403);
      next();
    });
  }
};

export { generateAccessToken, authenticateToken };
