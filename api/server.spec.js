const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');
let token;


beforeAll(done => {
    return request(server)
      .post('/api/auth/register')
      .set('Accept', 'application/json')
      .send({
        username: 'username',
        password: 'password'
      })
      .end((err, response) => {
        token = response.body.token;
        done();
      });
  });


describe('server.js', () => {
    describe('index route', () => {
        it('should return an  OK status code from the index route', async () => {
            const expectedStatusCode = 200;
            const response = await request(server).get('/')
            expect(response.status).toBe(expectedStatusCode)
        })

        it('should return a JSON object fron the index route', async () => {
            const expectedBody = { api: 'running' };
            const response = await request(server).get('/');
      
            expect(response.body).toEqual(expectedBody);
        });
      
        it('should return a JSON object fron the index route', async () => {
            const response = await request(server).get('/');
        
            expect(response.type).toEqual('application/json');
         });
    })

    describe('jokes route', () => {
        // it('returns error without token', async () => {
        //   return request(server)
        //     .get('/api/jokes')
        //     .expect(401);
        // });

        it('successful with token', async () => {
          return request(server)
            .get('/api/jokes')
            // .set('Accept', 'application/json')
            .set('Authorization', token)
            .expect(200);
        });
      });
})