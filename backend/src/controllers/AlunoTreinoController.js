const connection = require('../database/connection')

module.exports = {
    async index(resquest, response) {
        const aluno_id = resquest.headers.authorization;

        /*const treinoaluno = await connection('treino').where('aluno_id', aluno_id).join('aluno', 'aluno.id', '=', 'treino.aluno_id').select(['treino.*', 'aluno.nome', 'aluno.senha', 'aluno.endereco', 'aluno.cpf']);*/

        const treinos = await connection('treino').where('aluno_id', aluno_id).select('*');

        return response.json(treinos)
    }
}