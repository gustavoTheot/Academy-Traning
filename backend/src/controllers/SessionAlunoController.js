const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {ID} = request.body;
        const {senha} = request.body;

        const aluno = await connection('aluno').where('ID', ID).first();
        const senhas = await connection('aluno').where('senha', senha).first();

        if (!aluno | !senhas ){
            return response.status(400).json({ error: 'Erro. senha ou id errado!'})
        }

        return response.json(aluno);

    },

}