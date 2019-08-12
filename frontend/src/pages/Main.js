// React
import React, { useEffect, useState } from 'react';
// Services
import api from '../services/api';
import { Link } from 'react-router-dom';
// Css
import './Main.css';
// Assets
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default function Main({ match }) {
    // Lista de usuários
    const [users, setUsers] = useState([]);
    
    // Ao alterar ousupario logado
    useEffect(() => {
        // Carrega lista de usuário do servidor
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })
            // Preenche a variável com a lista de usuários
            setUsers(response.data);
        }
        loadUsers();
    }, [match.params.id]);

    // Deslike
    async function handleDislike(id) {
        // Consome
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                user: match.params.id
            }
        });
        // Altera lista de usuários, removendo o que recebeu o deslike
        setUsers(users.filter(user => user._id !== id));
    }      

    // Like
    async function handleLike(id) {
        // Consome
        await api.post(`/devs/${id}/likes`, null, {
            headers: {
                user: match.params.id
            }
        });
        // Altera lista de usuários, removendo o que recebeu o like
        setUsers(users.filter(user => user._id !== id));
    }  

    return (
        <div className="main-container">
            {/* Retorna para o login */}
            <Link to="/">
                <img src={logo} alt ="Tindev"/>
            </Link>            
            {/* If ternario */}
            { users.length > 0 ? (
                <ul>
                    {users.map(user => (                        
                        <li key={user._id}> {/* Necessário o atributo key para identificação pelo react */}
                            <img src={user.avatar} alt={user.name}/>
                            <footer>
                                <strong>{user.name || user.login}</strong>
                                <p>{user.bio}</p>
                            </footer>
        
                            <div className="buttons">
                                <button 
                                    type="button"
                                    onClick={() => handleDislike(user._id)} // Esse hack é senão envia o id automaticamente
                                >
                                    <img src={dislike} alt="Dislike"/>
                                </button>       
                                <button 
                                    type="button"
                                    onClick={() => handleLike(user._id)} // Esse hack é senão envia o id automaticamente
                                >
                                    <img src={like} alt="Like"/>
                                </button>                 
                            </div>
                        </li>  
                    ))}
                </ul>                    
            ) : (
                <div className="empty">
                    Acabou, tente novamente mais tarde :(
                </div>
            ) }                                                                           
        </div>
    )
}