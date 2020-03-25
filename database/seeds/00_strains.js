
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('strains').del()
    .then(function () {
      // Inserts seed entries
      return knex('strains').insert([
        {id: 1, name: '100-Og', type: 'hybrid', rating: 4 },
        {id: 2, name: '98-White-Widow', type: 'hybrid', rating: 4},
        {id: 3, name: '1024', type: 'sativa', rating: 4}
      ]);
    });
};
