import React from 'react';
import './stats.css'

function FeatureCard(props) {
    return(
        <div className="feature-card">
        <img src={props.icon} />
        <h2>{props.title}</h2>
        <p>
            {props.description}
        </p>
        </div>
    )
};

export default FeatureCard;