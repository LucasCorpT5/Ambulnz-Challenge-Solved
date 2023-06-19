import app from "../server"
import request from "supertest";

describe("Create order", () => {
    it("should be able to create order", async() => {
        const response = await request(app).post("/api/order/create").send({
            quantity: 10,
            pizzaId: "a6340a59-b01b-435d-baf7-4731795c8f46",
            orderId: "a34c8aa9-46d3-4f83-be84-0fea4dbd776b"
        })

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
        const response = await request(app).get("/api/orders/dd9508b8-3552-4570-85da-027c33d9103d");

        console.log(response.body);
    })
})