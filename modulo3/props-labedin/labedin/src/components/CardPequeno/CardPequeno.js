import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="bigcard-container">
             <img src={ props.imagem }/>
            
            <div className="container-pequeno"> 
                <div className="email">
                    <h4>{props.informeEmail}</h4>            
                    <p>{ props.email}</p>    
                    </div>
                <div className="endereco">
           
                    <h4>{props.informeEndereco}</h4>            
                    <p>{ props.endereco}</p>
                         
                </div>
            </div>
        </div>
    )
}

export default CardPequeno;