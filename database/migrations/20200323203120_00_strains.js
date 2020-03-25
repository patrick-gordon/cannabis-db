
exports.up = function(knex) {
  return knex.schema.createTable('strains', strains => {
    strains.increments()

    strains
        .string('name', 128)
        .notNullable()
        .unique()

    strains
        .string('type', 10)
        .notNullable()
        

    strains
        .int('rating')

    strains
        .text('description')

  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('strains')
};
