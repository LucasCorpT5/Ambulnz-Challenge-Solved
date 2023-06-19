import prisma from "../prisma"

export const orderService = {
    createOrder: async(quantity: number, pizzaId: string, orderId: string) => {
        const order = await prisma.orderItem.create({
            data: {
                quantity,
                pizza: {
                    connect: { id: pizzaId }
                },
                order: {
                    connect: { id: orderId }
                }
            }
        });

        return order;
    },
    listOrders: async() => {
        const orders = await prisma.orderItem.findMany();

        return orders;
    },

    listOrderById: async(id: string) => {
        const order = await prisma.orderItem.findMany({
            where: {
                id
            }
        });

        return order;
    }
}