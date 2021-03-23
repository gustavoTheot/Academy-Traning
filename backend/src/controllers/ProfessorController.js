const connection = require('../database/connection');
const crypto = require('crypto')

module.exports = {
    async index(resquest, response) {
        const professor = await connection('professor').select('*');
        
        return response.json(professor)
    },

    async create(request, response) {
        const {senha, nome, endereco, CREF} = request.body;

        const existente = await connection('professor').where('CREF', CREF).first();

        const ID = crypto.randomBytes(6).toString('HEX');

        try{
            if(senha == undefined || senha == "" || senha == null){
                return response.status(400).json({ error: 'Senha invalido'})
            }
            else if(nome == undefined || nome == "" || nome == null){
                return response.status(400).json({ error: 'Nome invalido'})
            }
            else if(endereco == undefined || endereco == "" || endereco == null){
                return response.status(400).json({ error: 'Endereço invalido'})
            }
            else if(CREF == undefined || CREF == "" || CREF == null || CREF.length != 6){
                return response.status(400).json({ error: 'CREF invalido'})
            }
            else if(CREF == CREF.existente){
                return response.status(400).json({ error: 'CREF já utilizado'})
            }
            else{
                await connection('professor').insert({
                    ID,
                    senha,
                    nome,
                    endereco,
                    CREF 
                })
            }
        }catch(err){
            return response.status(400).json({ error: 'Erro, o CREF pode está invalido'})
        }

        
        return response.json({});
    },

    async delete(resquest, response){
        const {id} = resquest.params;

        let resultf = await connection('professor').select('ID').where('id',id).delete();

        if(!resultf){
            return response.status(400).json({error:'erro. ID inexistente'})
        }else{
            return response.status(200).json({msn:'ID deletato'})
        }
    }
    
}