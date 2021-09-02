const app = require('../app')
const server = require('../start')
const supertest = require('supertest')
const request = supertest(app)
const mongoose = require('../utils/db')


test('Sends GET method to / Return content and 200 OK code', async () => {
    await request.get('/')
        .expect(200)
})

afterAll(() => {
    mongoose.connection.close()
    server.close()
})