const db = require('../database/dbConfig.js');

const getStrains = () => {
    return db('strains')
}

const getStrainsByName = (name) => {
    return db('strains')
        .select('*')
        .where({ name })
        .first()
}
const getStrainsByType = (type) => {
    return db('strains')
    .select('*')
    .where({ type })
}

module.exports = {
    getStrains,
    getStrainsByName,
    getStrainsByType
}
