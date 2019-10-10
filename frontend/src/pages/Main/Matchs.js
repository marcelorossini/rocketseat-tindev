// React
import React, { useEffect, useState } from 'react';
// Services
import { Link } from 'react-router-dom';
// Services
import api from '../../services/api';
// Css
import './Matchs.css';

export default function Game(props) {
    // Lista de usuários
    const [matchs, setMatchs] = useState([]);
    
    // Ao alterar ousupario logado
    useEffect(() => {
        // Carrega lista de usuário do servidor        
        async function loadMatchs() {
            // Usuário
            const user = props.id_user;
            // Pesquisa os dados do usuário atual
            const response = await api.get(`/data?user=${user}`);
            // Matchs
            let likedUsers = response.data[0].likes;
            // Verifica se combinaram
            Promise.all(likedUsers.map(async id => {     
                return await api.get(`/data?user=${id}`);                           
            })).then(function(results) {
                // Remove os que não deram match
                results = results.filter(item => item.data[0].likes.includes(user));
                // Pega apenas os dados
                results = results.map(item => item.data[0]);    
                setMatchs(results);         
            })
        }            
        loadMatchs();                         
    }, [props.id_user]);

    return (
        <div>
            <ul className="matchs">
                {matchs.map((user, index) => (
                    <li key={user._id}>
                        <Link to="/chat"a>
                            <img src={user.avatar} alt={user.name}/>
                            <strong>{user.user}</strong>
                        </Link>
                    </li>                
                ))}             
            </ul>      
            <hr/>    
            <ul className="messages">
                {matchs.map((user, index) => (
                    <li key={user._id}>
                        <Link to="/chat"a>
                            <img src={user.avatar} alt={user.name}/>
                            <div>
                                <strong>{user.user}</strong>
                                <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
                            </div>
                        </Link>
                    </li>                
                ))}             
            </ul>                          
        </div>
    )
}