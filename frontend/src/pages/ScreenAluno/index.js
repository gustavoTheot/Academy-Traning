import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../../services/api';

import './style.css'
import Logout from '../../assets/logout.png'

export default function ScreenAluno(){
    const [treinoaluno, setTreinoAluno] = useState([]);

    const history = useHistory();
    const alunoID = localStorage.getItem('alunoID')
    /*
    useEffect(() => {
        api.get('alunotreino', {
            headers: {
                Authorization: alunoId, 
            }
        }).then(response => {
            setTreinoAluno(response.data)
        })
    }, [alunoId])*/

    useEffect(() => {
        api.get('alunotreino', {
            headers: {
                authorization: alunoID,
            }
        }).then(response => {
            setTreinoAluno(response.data)
        }) 
    }, [alunoID])
                
    function handleLogout(){
        localStorage.clear();

        history.push('/')
    }

    return(
        <div className="containerLogout">
            <div className="exit">
                <div className="headerLogout">
                    <h1>ACADEMY TRANING</h1>
                    <Link to="/">
                        <button onClick={handleLogout} className="buttonlogout">
                            <img src={Logout} alt="" className="imgLogout"/>
                        </button>
                    </Link>
                </div>

                
                <div className="mainLogout">
                    <div className="listtreinos">
                        <ul>
                            {treinoaluno.map(treino => (
                                <li key={treino.id}>
                                    <strong>DIA:</strong>
                                    <p>{treino.dia}</p>

                                    <strong>SERIE:</strong>
                                    <p>{treino.serie}</p>

                                    <strong>REPETIÇÕES:</strong>
                                    <p>{treino.repreticao}</p>

                                    <strong>EXERCICIO:</strong>
                                    <p>{treino.exercicio}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                      
                </div>
            </div> 
        </div>
        
      
    )
}

