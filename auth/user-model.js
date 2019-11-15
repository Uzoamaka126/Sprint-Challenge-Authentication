const db = require('../database/dbConfig');

module.exports = {
    get,
    getBy,
    add,
    getById
}

function get() {
    return db('users')
        .select('id', 'username', 'password')
}

function getBy(filter) {
    return db('users')
        .where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return getById(id)
}

function getById(id) {
    return db('users')
        .select('id', 'username', 'password')
        .where({ id })
        .first()
}