import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiTrash2} from 'react-icons/fi';

import api from '../../services/api'

import './style.css'
import Logout from '../../assets/logout.png'

export default function ListaProf(){
    const [professor, setProfessor] = useState([]);

    useEffect(() => {
        api.get('professor').then(response => {
            setProfessor(response.data)
        }) 
    }, [professor])

    const history = useHistory();

    async function handleDeleteIncident(ID){
        try{
            await api.delete(`professor/${ID}`);

            setProfessor(professor.filter(professor => professor.ID != ID)); {/**faz uma busca no array de acidentes e da uma varredura, procurar o que tem o mesmo ID e removelo do array */}
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
                    {professor.map(prof => (
                        <li key={prof.id}>
                            <strong>NOME:</strong>
                            <p>{prof.nome}</p>

                            <strong>SENHA:</strong>
                            <p>{prof.senha}</p>

                            <strong>ENDEREÇO:</strong>
                            <p>{prof.endereco}</p>

                            <strong>CREF:</strong>
                            <p>{prof.CREF}</p>

                            <strong>ID:</strong>
                            <p>{prof.ID}</p>

                            <button onClick={() => handleDeleteIncident(prof.ID)} type="button"> {/* Está sendo passado uma função, e não o retorno de uma função */}
                            {<FiTrash2 size={20} color="#E2E2E2"/>}
                            </button>
 
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}