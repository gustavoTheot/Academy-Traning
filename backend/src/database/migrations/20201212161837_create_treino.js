exports.up = function(knex) {
    return knex.schema.createTable('treino', function(table){
        table.increments();
        table.string('dia').notNullable();
        table.string('serie').notNullable();
        table.string('repreticao').notNullable();
        table.string('exercicio').notNullable();

        table.string('aluno_id').notNullable()
        table.foreign("aluno_id").references('ID').inTable('auno');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('treino');
};

