
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

  .createTable('users', users => {
    users.increments();

    users
      .string('username', 128)
      .unique()
      .notNullable();
      
    users
      .string('password', 30)
      .notNullable();

    users
      .integer('favorites')
      .references('id')
      .inTable('favorites')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

  })

  .createTable('favorites', favorite => {
    favorite.increments('id').primary().notNullable()

    favorite
      .integer('strain_id')
      .references('id')
      .inTable('strains')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      
    favorite
      .integer('user_favorites')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('strains')
  .dropTableIfExists('users')
  .dropTableIfExists('favorites')
};
