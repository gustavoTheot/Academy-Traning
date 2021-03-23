const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const {id} = request.body;

        let resultAluno = await connection('aluno').select('*').where('id', id)
        let resultProf = await connection('professor').select('*').where('id', id)

        if(resultAluno == "" && resultProf == ""){
            return response.status(400).json({error: 'Error'})
        }
        else{
            return response.json({resultAluno, resultProf})
        }
    }
}