const app = require('../app')
const server = require('../start')
const supertest = require('supertest')
const request = supertest(app)
const mongoose = require('../utils/db')

test('Sends GET method to /api/products -> Return products and 200 OK code', async () => {
    let res = await request.get('/api/products')
        .expect(200)
    // OPTIONAL console.log(res.body);
})

test('Sends GET method to /api/products/:id? -> Return specific product by ID and 200 OK code', async () => {
    let res = await request.get('/api/products/2')
        .expect(200)
    // OPTIONAL console.log(res.body);
})

test('Sends POST method to /api/products/ -> POSTS specified product and RETURN 201 OK CREATED!', async () => {
    const newProduct = {
        title: 'jest test product 2',
        price: 13.5,
        description: 'jest test 2',
        image: 'https://i.pravatar.cc',
        category: 'jest 2',
        id: 50
    }
    let res = await request.post('/api/products/')
        .send(newProduct)
        .expect(201)
    // OPTIONAL console.log(res.body);
})

afterAll(() => {
    mongoose.connection.close()
    server.close()
})