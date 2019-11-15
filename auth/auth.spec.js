const request = require('supertest');
const express = require('express');

const app = express();
const server = require('../api/server')
const db = require('../database/dbConfig');
const Users = require('./user-model');

describe('user model', () => {
    beforeEach(async () => {
        // this function executes and clears out the table before each test
        await db('users').truncate();
    });

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
        it('can signup', async () => {
            return request(server)
            .post('/api/auth/register')
            .set('Accept', 'application/json')
            .send({ username: 'ada', password: '1234' })
            .expect(201);
        });

        it('unsuccessfully login', async () => {
            return request(server)
            .post('/api/auth/login')
            .set('Accept', 'application/json')
            .send({ username: 'ada2', password: '1234' })
            .expect(401);
        });
    }); 
});