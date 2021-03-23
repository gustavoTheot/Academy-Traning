import React, {useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiTrash2} from 'react-icons/fi';

import api from '../../services/api'

import './style.css'
import Logout from '../../assets/logout.png'

export default function ListAll(){


    /*
    async function handleDeleteIncident(ID){
        try{
            await api.delete(`aluno/${ID}`);

            setAluno(aluno.filter(aluno => aluno.ID != ID)); {/**faz uma busca no array de acidentes e da uma varredura, procurar o que tem o mesmo ID e removelo do array }
        }catch(err){
            alert('Erro ao deletar esse caso, tente noamente.');
        }
    }*/
   
    const [search, setSearch] = useState([]);
    const [searchResult, setSearchResult] = useState('');
    
    function handleChange(){
        
    }
    useEffect(() => {
        api.get('aluno').then(response => {
            setSearchResult(response.data)
        }) 
    }, [search])

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

            <div className="search">
                <input 
                type="search" 
                placeholder="Busca por ID"
                value={search}
                onChange={handleChange}
                />
            </div>

            <div className="listProf">
                <ul>
                    {search.map(sear => (
                        <li key={sear.id}>
                            <strong>ID:</strong>
                            <p>{sear.ID}</p>

                            <strong>NOME:</strong>
                            <p>{sear.nome}</p>

                            <strong>ENDEREÇO:</strong>
                            <p>{sear.endereco}</p>

                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}