import { Request, Response } from "express"
import { orderService } from "../services/orderService";

export const orderController = {
    createOrder: async(req: Request, res: Response) => {
        const { quantity, pizzaId, orderId } = req.body;

        try {
            const order = await orderService.createOrder(quantity, pizzaId, orderId);

            return res.status(201).json(order);
        } catch(err) {
            if(err instanceof Error) {
                return res.status(404).json({ err: err.message });
            }
        }
    },

    listAllOrders: async(req: Request, res: Response) => {
        try {
            const orders = await orderService.listOrders();

            return res.status(200).json({ orders });
        } catch(err) {
            if(err instanceof Error) {
                return res.status(404).json({ err: err.message });
            }
        }
    },

    listOrderById: async(req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const orderById = await orderService.listOrderById(id);

            return res.status(200).json({ orderById });
        } catch(err) {
            if(err instanceof Error) {
                return res.status(404).json({ err: err.message });
            }
        }
    }
}