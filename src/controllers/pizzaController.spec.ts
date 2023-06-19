import app from "../server"
import request from "supertest";

describe("List pizzas", () => {
    it("should be able to list pizzas", async() => {
        const response = await request(app).get("/api/pizzas");

        console.log(response.body);
    })
})