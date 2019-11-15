const db = require('../database/dbConfig');
const Users = require('./user-model');

beforeEach(async () => {
    // this function executes and clears out the table before each test
    await db('users').truncate();
  });

describe('user model', () => {
    describe('add()', () => {
        it('should add the new user into the db', async () => {
            await Users.add({ username: 'amaka', password: '1234'})
            const users = await db('users');

            expect(users).toHaveLength(2);
        });

        it('should insert the provided user into the db', async () => {
            let user = await Users.add({ username: 'amaka', password: '1234'})
            expect(user.username).toBe('amaka');
        });
    });

    describe('remove()', () => {
        it('should remove the specified character from the db', async () => {
            const id = 1
            await Users.remove(id);

            const users = await db('users');
            expect(users).toHaveLength(1);
        })
    })
});