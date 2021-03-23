import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiTrash2} from 'react-icons/fi';

import api from '../../services/api'

import Logout from '../../assets/logout.png'

export default function ListaTurma(){
    const [turma, setTurma] = useState([]);

    useEffect(() => {
        api.get('turma').then(response => {
            setTurma(response.data)
        }) 
    }, [turma])

    const history = useHistory();

    async function handleDeleteIncident(ID){
        try{
            await api.delete(`turma/${ID}`);

            setTurma(turma.filter(turma => turma.ID != ID)); {/**faz uma busca no array de acidentes e da uma varredura, procurar o que tem o mesmo ID e removelo do array */}
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
                    {turma.map(tur => (
                        <li key={tur.id}>
                            <strong>ID:</strong>
                            <p>{tur.ID}</p>

                            <strong>turno:</strong>
                            <p>{tur.turno}</p>

                            <strong>aluno_id:</strong>
                            <p>{tur.aluno_id}</p>


                            <button onClick={() => handleDeleteIncident(tur.ID)} type="button"> {/* Está sendo passado uma função, e não o retorno de uma função */}
                            {<FiTrash2 size={20} color="#E2E2E2"/>}
                            </button>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}