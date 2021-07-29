const request = require('supertest')
const app = require('../app')
test("should return an object with key: code,data, and user_id"),(done)=>{
    request(app)
    .post("/register")
    .send(userTestData)
    .then((response)=>{
        //cek apakah status code 201
        //response.status.201
        expect(response.status).toBe(201);
        //cek apakah response body punya property namanya code dan hasilnya 201
        expect(response.body).toHaveProperty("code",201);
        //cek data "succes create" 
        expect(response.body).toHaveProperty("data","success create user");
        expect(response.body).toHaveProperty("user_id",expect.any(Number));
        //tidak boleh ada password
        expect(response.body).not.toHaveProperty("password")
        done()
    })
    .catch(err=>{
        done(err)
    })
}