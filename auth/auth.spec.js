const request = require('supertest');
const server = require('../api/server');
const bcrypt = require('bcryptjs');

// const app = express();
const db = require('../database/dbConfig');
let originalTimeout;


describe('server.js', () => {
    
    // beforeAll(done => {
    //     return request(server)
    //       .post('/api/auth/register')
    //       .set('Accept', 'application/json')
    //       .send({
    //         username: 'username',
    //         password: 'password'
    //       })
    //   });

    describe('add function', () => {
        it('should add the new user into the db', async () => {
         
            usersCount = await db('users');
            
            expect(usersCount).toHaveLength(0);
        
            await Users.add({ username: 'amaka', password: '1234'})
            usersCount = await db('users');

            expect(usersCount).toHaveLength(1)
        });
        
        it('inserts users into the db', async ()=> {
            let user = await Users.add({ username: 'peter', password: '1234'})
             expect(user.username).toBe('peter')
        })
    });

    describe('server.js', () => {
        describe('POST /api/auth/register', () => {

            it('creates a new user', () => {
                    return request(server)
                        .post('/api/auth/register')
                        .set('Accept', 'application/json')
                        .send({ username: 'ada', password: '1234' })
                        .then(res => {
                            expect(res.status).toBe(201)
                        })
                 });
            })
        });
        
        describe('[POST] /api/auth/login', () => {
            it('unsuccessfully login', () => {
                return request(server)
                .post('/api/auth/login')
                .set('Accept', 'application/json')
                .send({ username: 'ada2', password: '1234' })
                .expect(401);
            });

            it('login a user successfully', () => {
                const token = generateToken({
                    id: 1,
                    username: 'amaaka',
                });

                return request(server)
                .post('/api/auth/login')
                .set('Accept', 'application/json')
                .send({ username: 'ada', password: '1234' })
                .expect(200);
            });
        })
    }); 
    
});