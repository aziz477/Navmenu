import React from 'react';
import './card.css';
import Select from './Select/Select';
const Card = props => {     
    return(         
        <div className="service-card">
            <p>{props.cardTile}</p>
            <h3 className="card-desc">{props.cardDesc}</h3>
            {props.affiche ? <Select/> : ""}
            <img className="service-card-image" src={props.cardImg} alt='pc logo'/>
        </div>
    ) 
};
export default Card;

  