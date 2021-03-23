import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiTrash2} from 'react-icons/fi';

import api from '../../services/api'

import './style.css'
import Logout from '../../assets/logout.png'

export default function ListaTreino(){
    const [treino, setTreino] = useState([]);

    useEffect(() => {
        api.get('treino').then(response => {
            setTreino(response.data)
        }) 
    }, [treino])

    const history = useHistory();

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
                    {treino.map(trein => (
                        <li key={trein.id}>
                            <strong>Dia:</strong>
                            <p>{trein.dia}</p>

                            <strong>Série:</strong>
                            <p>{trein.serie}</p>

                            <strong>Repetição:</strong>
                            <p>{trein.repreticao}</p>

                            <strong>Exercicio:</strong>
                            <p>{trein.exercicio}</p>

                            <strong>ID do Aluno:</strong>
                            <p>{trein.aluno_id}</p> 

                            <strong>Aluno:</strong>
                            <p>{trein.nome}</p> 
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}