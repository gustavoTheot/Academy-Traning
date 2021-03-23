import React from 'react'
import {Link, useHistory} from 'react-router-dom'

import './style.css'
import Logout from '../../assets/logout.png'

export default function ScreenProf(){
    const history = useHistory();

    function handleLogout(){
        localStorage.clear();

        history.push('/')
    }

    return(
        <div className="containerScreenProf">
            <div className="exit">
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
            </div>
            <div className="actions">
                <div className="creatTurm">
                    <Link to='/CriarTurma'>
                    <   h1>Criar Turma</h1>
                    </Link>
                </div>
                <div className="listAlunos">
                    <Link to='/AddAluno'>
                        <h1>Cadastro Aluno</h1>
                    </Link>
                </div>
                <div className="creatTraning">
                    <Link to='RegisterTreino'>
                        <h1>Cadastro Treino</h1>
                    </Link>
                </div>
                <div className="listAlunos">
                    <Link to='/ListAluno'>
                        <h1>Lista de Alunos</h1>
                    </Link>
                </div>
                <div className="listAlunos">
                    <Link to='/ListTurma'>
                        <h1>Lista de Turma</h1>
                    </Link>
                </div>
                <div className="listTreino">
                    <Link to='/ListTreino'>
                        <h1>Lista de Treino</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}