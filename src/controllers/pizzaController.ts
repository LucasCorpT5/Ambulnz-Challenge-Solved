import { Request, Response } from "express"
import { pizzaService } from "../services/pizzaService";

export const pizzaController = {
    listAll: async(req: Request, res: Response) => {
        try {
            const pizzas = await pizzaService.listAllPizzas();

            return res.status(200).json({ pizzas });
        } catch(err) {
            if(err instanceof Error) {
                return res.status(404).json({ err: err.message });
            }
        }
    }
}