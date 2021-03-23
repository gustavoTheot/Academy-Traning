exports.up = function(knex) {
    return knex.schema.createTable('aluno', function(table){
        table.string('ID').primary();
        table.string('senha').notNullable();
        table.string('nome').notNullable();
        table.string('endereco').notNullable();
        table.string('cpf').unique().notNullable();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('aluno');
  };
  