exports.up = function(knex) {
    return knex.schema.createTable('turma', function(table){
        table.string('ID').primary
        table.string('turno').notNullable();

        table.string('professor_id').notNullable();
        table.foreign('professor_id').references('ID').inTable('professor')

        table.string('aluno_id').notNullable();
        table.foreign('aluno_id').references('ID').inTable('aluno')

        /*
        table.string('QTurma').notNullable();
        table.foreign('QTurma').references('ID').inTable('professor')
        */
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('turma');
};
