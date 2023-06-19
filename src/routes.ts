import express from "express";
import { pizzaController } from "./controllers/pizzaController";
import { orderController } from "./controllers/orderController";

const router = express.Router();

router.get("/api/pizzas", pizzaController.listAll);

router.post("/api/order/create", orderController.createOrder);
router.get("/api/orders", orderController.listAllOrders);
router.get("/api/orders/:id", orderController.listOrderById);

export {
    router
}