import React from 'react';
import './City.css'

function City(props) {
    return(

        <div className="city">

            <img src={props.image}/>
            <div className='city_description'>
                <p>{props.name}</p>
                <a className="btn">SEE OPENINGS</a>
            </div>
            
        </div>

    )



}

export default City ;
