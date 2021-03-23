const connection = require('../database/connection'); 

module.exports = {
    async index(request, response){
        const aluno = await connection('aluno').select('*')
        const professor = await connection('professor').select('*')

        return response.json({aluno, professor})  
    }
}