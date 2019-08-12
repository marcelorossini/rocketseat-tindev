// React
import React, { useState } from 'react';
// Services
import api from '../services/api';
// Css
import './Login.css';
// Assets
import logo from '../assets/logo.svg'

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    // Submit do form
    async function handleSubmit(e) {
        e.preventDefault();
        
        const response = await api.post('/devs', {
            username
        });
        
        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }    

    // Retorna componente
    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}> 
                <img src={logo} alt="Tindev"/>
                <input 
                    placeholder="Usuário do Github"
                    value={username}
                    onChange={e => setUsername(e.target.value) }
                ></input>
                <button type="submit">Enviar</button>
            </form>            
        </div>           
    );
}