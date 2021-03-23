import React from 'react'
import {Link, useHistory} from 'react-router-dom'


import './style.css'
import Logout from '../../assets/logout.png'

export default function ScreenAdm(){
    const history = useHistory();

    function handleLogout(){
        localStorage.clear();

        history.push('/')
    }
    return(
        <div className="containerScreenAdmin">
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

            <div className="cadastro">
                <div className="cadastrarProf">
                    <Link to='/RegisterProf'>
                        <h1>Cadastro Professor</h1>
                    </Link>
                </div>

                <div className="listarProf">
                    <Link to='/ListaProf'>
                        <h1>Lista de Professores</h1>
                    </Link>
                </div>

                <div className="listAll">
                    <Link to='/listAll'>
                        <h1>Lista de Usuários</h1>
                    </Link>
                </div>

                
            </div>
            
        </div>
    )
}