
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
        .integer('rating')

    strains
        .text('description')
  })

  .createTable('users', tbl => {
    users.increments();

    users
      .string('username', 128)
      .unique()
      .notNullable();
      
    users
      .string('password', 30)
      .notNullable();
  })

  .createTable('favorites', tbl => {
    favorite.increments('id').primary().notNullable()

    favorite
      .integer('strain_id')
      .refrences('id')
      .inTable('strains')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      
    favorite
      .integer()
    
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('strains')
};
