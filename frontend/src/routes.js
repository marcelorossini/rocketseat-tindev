import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main/';
import Chat from './pages/Chat';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/main/:id" exact component={Main}/>
            <Route path="/main/matchs/:id" component={Main}/>
            <Route path="/chat" exact component={Chat}/>
        </BrowserRouter>
    );
}