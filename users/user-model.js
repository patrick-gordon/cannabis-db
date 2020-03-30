const db = require('../database/dbConfig');


module.exports= {
    add,
    find,
    findBy,
    findById,
    findByUser,
    findFavorites,
    deleteFavorites,
    updateById
};

async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(id);
}

async function updateById(id, user) {
    await db('users')
        .where({ id: id})
        .update(user);
        return findById(id);
}