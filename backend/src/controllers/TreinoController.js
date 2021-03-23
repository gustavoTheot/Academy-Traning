const connection = require('../database/connection');

module.exports = {
    async index(resquest, response) {
        const count = await connection('treino').select('*');

        const treinos = await connection('treino')
        .join('aluno', 'aluno.id', '=', 'treino.aluno_id').select(['treino.*', 'aluno.nome', 'aluno.senha', 'aluno.endereco', 'aluno.cpf'])
        
        return response.json(treinos)
    },

    async create(request, response) {
        const {dia, serie, repreticao, exercicio} = request.body;
        const {aluno_id} = request.body;

        try{
            if(dia == undefined || dia == "" || dia == null){
                return response.status(400).json({ error: 'Valor da data está invalido'})
            }
            else if(serie % 1 != 0 || serie <= 0 || serie == undefined || serie == "" || serie == null){
                return response.status(400).json({ error: 'Valor da série está invalido'})
            }
            else if(repreticao % 1 != 0 || repreticao <= 0 || repreticao == undefined || repreticao == "" || repreticao == null){
                return response.status(400).json({ error: 'Valor de repetição está invalido'})
            }
            else if(exercicio == undefined || exercicio == "" || exercicio == null){
                return response.status(400).json({ error: 'Valor de exercício está invalido'})
            }
            else{
                await connection('treino').insert({
                    dia,
                    serie,
                    repreticao,
                    exercicio,    
                    aluno_id
                })
            }
        }catch(err){
            return response.status(400).json({ error})
        }


        return response.json({mensagem: "Error"});
    }
    
}