import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiTrash2} from 'react-icons/fi';

import api from '../../services/api'

import './style.css'
import Logout from '../../assets/logout.png'

export default function ListaAluno(){
    const [aluno, setAluno] = useState([]);

    useEffect(() => {
        api.get('aluno').then(response => {
            setAluno(response.data)
        }) 
    }, [aluno])

    const history = useHistory();

    async function handleDeleteIncident(ID){
        try{
            await api.delete(`aluno/${ID}`);

            setAluno(aluno.filter(aluno => aluno.ID != ID)); {/**faz uma busca no array de acidentes e da uma varredura, procurar o que tem o mesmo ID e removelo do array */}
        }catch(err){
            alert('Erro ao deletar esse caso, tente noamente.');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/')
    }

    return(
        <div className="containerListProf">
            <div className="headerLogout">
                <h1>ACADEMY TRANING</h1>
                <Link to="/">
                    <button 
                    onClick={handleLogout} 
                    className="buttonlogout">
                        <img src={Logout} alt="" className="imgLogout"/>
                    </button>
                </Link>
            </div>

            <div className="listProf">
                <ul>
                    {aluno.map(alu => (
                        <li key={alu.id}>
                            <strong>ALUNO:</strong>
                            <p>{alu.nome}</p>

                            <strong>PASSWORD:</strong>
                            <p>{alu.senha}</p>

                            <strong>ENDEREÇO:</strong>
                            <p>{alu.endereco}</p>

                            <strong>CPF:</strong>
                            <p>{alu.cpf}</p>

                            <strong>ID:</strong>
                            <p>{alu.ID}</p>

                            <button onClick={() => handleDeleteIncident(alu.ID)} type="button"> {/* Está sendo passado uma função, e não o retorno de uma função */}
                            {<FiTrash2 size={20} color="#E2E2E2"/>}
                            </button>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}