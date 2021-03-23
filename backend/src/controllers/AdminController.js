const { request } = require('express');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const admin = await connection('admin').select('*');

        return response.json(admin);
    },

    async create(request, response) {
        const {usuario, senha} = request.body;

        try{
            if(usuario == undefined || usuario == "" || usuario == null){
            return response.status(400).json({ error: 'Usuário invalido'})
            }
            else if(senha == undefined || senha == "" || senha == null){
                return response.status(400).json({ error: 'Senha invalida'})
            }
            else{
                await connection('admin').insert({
                    usuario,
                    senha 
                })
            }
        }catch(err){
            return response.status(400).json({ error: 'Erro, o CPF já pode está registrado'})
        }
        
        return response.json({});
    },

    async delete(resquest, response){
        const {id} = resquest.params;

        await connection('admin').select('ID').where('id',id).delete();

        return response.status(200).json({mensagem:'Deletado!'}).send()
    }
}