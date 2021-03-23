const connection = require('../database/connection'); 

module.exports = {
    async index (request, response){
        
        const treino = await connection('treino').select('*')

        return response.json({treino})
    }
}