const crypto = require('crypto')
const connection = require('../database/connection');

module.exports = {
    async index(resquest, response) {
        this.turma = await connection('turma').select('*');
        
        return response.json(turma)
    },

    async create(request, response) {
        const {turno} = request.body; 
        const professor_id = request.headers.authorization;
        const {aluno_id} = request.body; 

        let turmatamanho = turma.length +1;
        
        const ID = crypto.randomBytes(6).toString('HEX'); 

        try{
            if(turno == undefined || turno == "" || turno == null){
                return response.status(400).json({ error: 'Erro no turno'})
            }
            else if(aluno_id == undefined || aluno_id == "" || aluno_id == null){
                return response.status(400).json({ error: 'Erro na id do aluno'})
            }
            else if(turmatamanho >= 4){
                return response.status(400).json({ error: 'Erro na criação da turma'})
            }
            else{
                await connection('turma').insert({
                    ID,
                    turno,
                    professor_id,
                    aluno_id
            })}
        }catch(erro){
            return response.status(400).json({ error: 'Erro'})
        }   
        
        return response.json({turmatamanho});
    },

    async delete(resquest, response){
        const {id} = resquest.params;

        let resultf = await connection('turma').select('ID').where('id',id).delete();

        if(!resultf){
            return response.status(400).json({error:'ID inexistente'})
        }else{
            return response.status(200).json({msn:'ID deletado'})
        }
    }
}

   

    