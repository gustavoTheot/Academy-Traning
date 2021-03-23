const connection = require('../database/connection'); 

module.exports = {
    async create(request, response){
        const {usuario} = request.body;
        const {senha} = request.body;

        const admin = await connection('admin').where('usuario', usuario).first();
        const senhas = await connection('admin').where('senha', senha).first();

        if (!admin | !senhas ){
            return response.status(400).json({ error: 'Erro. senha ou id errado!'})
        }

        return response.json(admin);
    }
}