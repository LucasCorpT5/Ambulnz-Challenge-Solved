import prisma from "../prisma"

export const pizzaService = {
    listAllPizzas: async() => {
        const pizzas = await prisma.pizza.findMany();

        return pizzas;
    }
}