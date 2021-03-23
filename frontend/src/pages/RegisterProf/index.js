import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import api from '../../services/api'

import './style.css'

export default function RegisterProf(){
    const[senha, setSenha] = useState('');
    const[nome, setNome] = useState('');
    const[endereco, setEndereco] = useState('');
    const[CREF, setCREF] = useState('');

    const history = useHistory();


    async function handleRegister(e){
        e.preventDefault();

        const data = {
            nome,
            senha,
            endereco,
            CREF
        };

        try{
            const response = await api.post('professor', data)

            alert(`Criado`);

            history.push('/ScreenADM');
        } catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }
    return(
        <div className="containerRegisterProf">
            <form onSubmit={handleRegister} className="formularioprof">
                <input 
                    type="Usuario"
                    placeholder="Usuário"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />

                <input 
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />

                <input 
                    placeholder="Endereço"
                    value={endereco}
                    onChange={e => setEndereco(e.target.value)}
                />

                <input 
                    placeholder="CREF"
                    value={CREF}
                    onChange={e => setCREF(e.target.value)}
                />

                <button type="submit">Confirmar</button>

            </form>
        </div>
    )
}