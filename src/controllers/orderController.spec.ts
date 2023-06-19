import app from "../server"
import request from "supertest";

describe("Create order", () => {
    it("should be able to create order", async() => {
        const response = await request(app).post("/api/order/create").send({
            quantity: 10,
            pizzaId: "ccfc1d10-a718-48ad-8a67-4928b6c1d3e6",
            orderId: "00f1abd5-8d9e-4751-b85a-2b8983897a1a"
        })

        expect(response.statusCode).toBe(201);
        console.log(response.body);
    })
})

describe("List orders", () => {
    it("should be able to list orders", async() => {
        const response = await request(app).get("/api/orders");

        console.log(response.body);
    })
})

describe("List order by id", () => {
    it("should be able to list orders", async() => {
        const response = await request(app).get("/api/orders/dc6ec262-0ccb-4f45-92f8-8b2243781814");

        console.log(response.body);
    })
})