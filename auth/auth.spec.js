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

   
});