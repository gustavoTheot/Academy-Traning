const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {ID} = request.body;
        const {senha} = request.body;

        const professor = await connection('professor').where('ID', ID).first();
        const senhas = await connection('professor').where('senha', senha).first();

        if (!professor | !senhas ){
            return response.status(400).json({ error: 'Erro. senha ou id errado!'})
        }

        return response.json(professor);

    }
}