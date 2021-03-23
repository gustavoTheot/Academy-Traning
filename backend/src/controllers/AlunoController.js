const connection = require('../database/connection');
const crypto = require('crypto')

module.exports = {
    async index(resquest, response) {
        const aluno = await connection('aluno').select('*');

        return response.json(aluno)
    },

    async create(request, response) {
        const {senha, nome, endereco, cpf} = request.body;

        const ID = crypto.randomBytes(6).toString('HEX');

        try{
            if(senha == undefined || senha == "" || senha == null){
            return response.status(400).json({ error: 'Senha invalida'})
            }
            else if(nome == undefined || nome == "" || nome == null){
                return response.status(400).json({ error: 'Nome invalido'})
            }
            else if(endereco == undefined || endereco == "" || endereco == null){
                return response.status(400).json({ error: 'Endereço invalido'})
            }
            else if(cpf == undefined || cpf == "" || cpf == null || cpf.length != 11){
                return response.status(400).json({ error: 'CPF invalido'})
            }
            else{
                await connection('aluno').insert({
                    ID,
                    senha,
                    nome,
                    endereco,
                    cpf  
                })
            }
        }catch(err){
            return response.status(400).json({ error: 'Erro, o CPF já pode está registrado'})
        }
        
        
        return response.json({});
    },

    async delete(resquest, response){
        const {id} = resquest.params;
       
        let resultf = await connection('aluno').select('ID').where('id',id).delete();

        if(!resultf){
            return response.status(400).json({error:'erro. ID inexistente'})
        }else{
            return response.status(200).json({msn:'ID deletato'})
        }
       
    }
    
}