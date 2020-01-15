const db = require('../database/dbConfig');

module.exports = {
    get,
    getBy,
    add,
    remove,
    getById
}

function get() {
    return db('users')
        .select('id', 'username')
}

function getBy(filter) {
    return db('users')
        .where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);
    return getById(id)
}

async function remove(id) {
    await db('users')
    
    return getById(id)
      .delete()
}

function getById(id) {
    return db('users')
        .select('id', 'username')
        .where({ id })
        .first()
}