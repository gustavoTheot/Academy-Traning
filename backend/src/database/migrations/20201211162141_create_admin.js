exports.up = function(knex) {
    return knex.schema.createTable('admin', function(table){
        table.increments();
        table.string('usuario').notNullable();
        table.string('senha').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('admin');
};








