import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

import api from '../../services/api'

import './style.css'
import Logo from '../../assets/logo.png'
import Icone from '../../assets/icone.png'

export default function Logon(){
    const [ID, setID] = useState('');
    const [senha, setSenha] = useState('')
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('sessionaluno', {ID, senha})

            localStorage.setItem('alunoID', ID);
            history.push('/ScreenAluno')
        }catch(err){
            alert('Falha no login')
        }
    }

    return(
        <div className="containerLogon">
            <div className="main">
                <img src={Logo} alt=""/>
            </div>

            <div className="login">
                <img src={Icone} alt=""/>
                <form onSubmit={handleLogin} className="form">
                
                    <input 
                        type="text" 
                        id="user" 
                        placeholder="ID" 
                        value={ID}
                        onChange={e => setID(e.target.value)}
                    />

                    <input 
                        type="password" 
                        id="user" 
                        placeholder="Senha" 
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />  

                    <div className="link">
                        <Link to='/LogonProf'>
                            <p>Entrar como Professor</p>
                        </Link>

                        <Link to='/LogonAdm'>
                            <p>Entrar como ADM</p>
                        </Link>
                    </div>

                    <button>OK</button>
                </form>
            </div>
        </div>
    );
}