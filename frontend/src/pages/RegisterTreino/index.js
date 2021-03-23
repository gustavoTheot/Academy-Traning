import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import api from '../../services/api'

import './style.css'

export default function RegisterTreino(){
    const[dia, setDia] = useState('');
    const[serie, setSerie] = useState('');
    const[repreticao, setRepreticao] = useState('');
    const[exercicio, setExercicio] = useState('');
    const[aluno_id, setAluno_id] = useState('');

    const history = useHistory();


    async function handleRegister(e){
        e.preventDefault();

        const data = {
            dia,
            serie,
            repreticao,
            exercicio,
            aluno_id
        };

        try{
            const response = await api.post('treino', data)

            alert(`Criado`);

            history.push('/ScreenProf');
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }
    return(
        <div className="containerRegisterProf">
            <form onSubmit={handleRegister} className="formularioprof">
                <input 
                    type="date"
                    placeholder="Dia"
                    value={dia}
                    onChange={e => setDia(e.target.value)}
                />

                <input 
                    type="text"
                    placeholder="Serie"
                    value={serie}
                    onChange={e => setSerie(e.target.value)}
                />

                <input 
                    placeholder="Repetição"
                    value={repreticao}
                    onChange={e => setRepreticao(e.target.value)}
                />

                <input 
                    type="text"
                    placeholder="Exercicio"
                    value={exercicio}
                    onChange={e => setExercicio(e.target.value)}
                />

                <input 
                    type="text"
                    placeholder="ID do aluno"
                    value={aluno_id}
                    onChange={e => setAluno_id(e.target.value)}
                />

                <button type="submit">Confirmar</button>

            </form>
        </div>
    )
}