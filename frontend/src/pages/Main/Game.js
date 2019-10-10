// React
import React, { useEffect, useState } from 'react';
// Services
import api from '../../services/api';
// Css
import './Main.css';
// Assets
import like from '../../assets/like.svg'
import dislike from '../../assets/dislike.svg'

export default function Game(props) {
    // Lista de usuários
    const [users, setUsers] = useState([]);
    
    // Ao alterar ousupario logado
    useEffect(() => {
        // Carrega lista de usuário do servidor
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {
                    user: props.id_user,
                }
            })
            // Preenche a variável com a lista de usuários
            setUsers(response.data);
        }
        loadUsers();
    }, [props.id_user]);

    // Deslike
    async function handleDislike(id) {
        // Consome
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {
                user: props.id_user
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
                user: props.id_user
            }
        });
        // Altera lista de usuários, removendo o que recebeu o like
        setUsers(users.filter(user => user._id !== id));
    }  

    return (
        <div>
            {/* If ternario */}
            { users.length > 0 ? (
                <ul className="profiles">
                    {users.map(user => (                        
                        <li key={user._id}> {/* Necessário o atributo key para identificação pelo react */}
                            <img src={user.avatar} alt={user.name}/>
                            <footer>
                                <strong>{user.name || user.user}</strong>
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