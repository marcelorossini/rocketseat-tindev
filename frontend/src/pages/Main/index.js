// React
import React, { useState, useEffect } from 'react';
// Services
import { Link } from 'react-router-dom';
// Css
import './Main.css';
// Assets
import logo from '../../assets/logo.svg'
import Game from './Game'
import Matchs from './Matchs'

export default function Main({ match, history }) {
    const [url, setUrl] = useState(window.location.pathname.split('/'));

    useEffect(() => {
        changeActiveMenu()
    }, [url]);

    function changeActiveMenu() {
        let menuItem;
        if ( url[2] === 'matchs' ) {
            menuItem = document.querySelector('#matchs');
        } else {
            menuItem = document.querySelector('#game')
        }
        menuItem.classList.add('active');
    }

    return (
        <div className="main-container">
            {/* Retorna para o login */}
            <Link to="/">
                <img src={logo} alt ="Tindev"/>
            </Link>        

            <ul id="menu">
                <li id="game"><Link to={`/main/${match.params.id}`}>Jogo</Link></li>
                <li id="matchs"><Link to={`/main/matchs/${match.params.id}`}>Matchs</Link></li>
            </ul>

            { url[2] === 'matchs'  ? (
                <Matchs id_user={match.params.id}/>
            ) : (
                <Game id_user={match.params.id}/>
            ) }   
        </div>
    )
}