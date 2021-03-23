import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import api from '../../services/api'

import './style.css'

export default function CriarTurma(){
    const [turno, setTurno] = useState('')
    const [aluno_id, setAluno_id] = useState('')

    const history = useHistory();

    const professor_id = localStorage.getItem('ID')

    async function handleRegister(e){
        e.preventDefault();

        const data = {
            turno,
            professor_id,
            aluno_id
        };

        try{
            await api.post('turma', data,{
                headers:{
					Authorization: professor_id,
				}
            })

            history.push(`Criado`);

            history.push('/ScreenProf');
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return(
        <div className="containerRegisterProf">
            <form onSubmit={handleRegister} className="formularioprof">
                <input 
                    type="text"
                    placeholder="Turno"
                    value={turno}
                    onChange={e => setTurno(e.target.value)}
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