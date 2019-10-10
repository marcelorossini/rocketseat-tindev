import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import './Chat.css';

export default function Chat() {
    return (
        <div className="chat-wrapper">
            <div className="chat-container">
                <div className="chat-header">
                    <img src="https://avatars2.githubusercontent.com/u/127287?v=4"/>
                    <strong>Teste da Silva</strong>
                </div>
                <div className="chat-content">
                    <div className="chat-content-ballon ballon-receptor">
                        Testandoooooo
                    </div>
                    <div className="chat-content-ballon ballon-sender">
                        Marceloooooooo<br/>
                        asd<br/>
                    </div>   
                    <div className="chat-content-ballon ballon-receptor">
                        Testandoooooo
                    </div>       
                    <div className="chat-content-ballon ballon-receptor">
                        Testandoooooo
                    </div>  
                    <div className="chat-content-ballon ballon-sender">
                        Marceloooooooo<br/>
                        asd<br/>
                    </div>  
                    <div className="chat-content-ballon ballon-sender">
                        Marceloooooooo<br/>
                        asd<br/>
                    </div>  
                    <div className="chat-content-ballon ballon-sender">
                        Marceloooooooo<br/>
                        asd<br/>
                    </div>    
                    <div className="chat-content-ballon ballon-receptor">
                        Testandoooooo
                    </div>
                    <div className="chat-content-ballon ballon-sender">
                        Marceloooooooo<br/>
                        asd<br/>
                    </div>   
                    <div className="chat-content-ballon ballon-receptor">
                        Testandoooooo
                    </div>       
                    <div className="chat-content-ballon ballon-receptor">
                        Testandoooooo
                    </div>  
                    <div className="chat-content-ballon ballon-sender">
                        Marceloooooooo<br/>
                        asd<br/>
                    </div>  
                    <div className="chat-content-ballon ballon-sender">
                        Marceloooooooo<br/>
                        asd<br/>
                    </div>  
                    <div className="chat-content-ballon ballon-sender">
                        Marceloooooooo<br/>
                        asd<br/>
                    </div>                                                                                                                                   
                </div>
                <div className="chat-message">
                    <textarea></textarea>
                    <button type="button"><FontAwesomeIcon icon={faAngleRight} /></button>
                </div>                        
            </div>
        </div>
    )
}