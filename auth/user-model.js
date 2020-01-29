const db = require('../database/dbConfig');

module.exports = {
    get,
    getBy,
    add,
    remove,
    getById
}

// Get single user
function get() {
    return db('users')
        .select('id', 'username')
}

// Get all users
function getBy(filter) {
    return db('users')
        .where(filter)
        .first()
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