const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');


describe('ONG', () => {
    beforeEach(async ()=>{
        await connection.migrate.latest();
    })

    afterAll(async ()=>{
        await connection.destroy();
    })

    it('should be abble to create a new ONG', async () => {
        const res = await request(app)
        .post('/ongs')
        //.set('<authorization>','<value>') // use it if you have any headers
        .send({
            nome: "Test ONG",
            email: "contato@teste.com",
            whatsapp: "61000000000",
            city: "test",
            uf: "DF"
        });

        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    });
    
});
