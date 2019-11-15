const request = require('supertest');
const jokesServer = require('./jokes-router');


describe('jokes-router.js', () => {
    describe('get jokes route', () => {
        it('should return an  OK status code from the jokes route', async () => {
            const expectedStatusCode = 200;
            const response = await request(jokesServer).get('/')
            expect(response.status).toBe(expectedStatusCode)
        })

        it('should return a JSON object fron the jokes route', async () => {
            const response = await request(jokesServer).get('/https://icanhazdadjoke.com/search');
            const expectedBody = { response.body.results };

            expect(response.body).toEqual(expectedBody);
        });
    });
});