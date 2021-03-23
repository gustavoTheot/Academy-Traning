exports.up = function(knex) {
    return knex.schema.createTable('professor', function(table){
        table.string('ID').primary();
        table.string('senha').notNullable();
        table.string('nome').notNullable();
        table.string('endereco').notNullable();
        table.string('CREF').unique().notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('professor');
};