import React from 'react'
import './logos.css'

function Logos(props) {
    return (
        <div className='logo'>
            <svg xmlns="http://www.w3.org/2000/svg" width={props.w} height={props.h} viewBox="0 0 200 32">
                <path d={props.p}></path>
            </svg>
        </div>
    )
};
export default Logos;