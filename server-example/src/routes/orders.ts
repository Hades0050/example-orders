/** source/routes/posts.ts */
import express, { Router } from "express";
import controller from "../controllers/orders";
import { authenticateToken } from "../middleware/jwt";
const router:Router  = express.Router();

router.get("/orders",authenticateToken, controller.getOrders);
router.delete("/orders/:id", controller.deleteOrder);
router.get("/status-order/:id", controller.updateStatusOrder);
router.put("/orders",authenticateToken, controller.createOrder);

export = router;
