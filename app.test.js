const request = require("supertest");
const app = require("./app");

describe("API ola mundo", () => {
    it('Deve retornar "Ola Mundo DevSecOps!" na rota /', async () => {
        
        const response = await request(app).get("/");
        
        expect(response.statusCode).toBe(200);

        expect(response.text).toBe("Ola mundo DevSecOps!");
    
    });
});
