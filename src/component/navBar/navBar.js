import React from 'react';
import './navBar.css'

function Navbar() {

    return ( 
        <div className="header">
        <div className="logo">
            <img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/>
        </div>

        <div className="header-menu">
            <ul className="header-menu">
                <li><a href="#">About us</a></li>
                <li><a href="#">Career</a></li>
                <li className="dropdown"><a href="#" className="dropbtn">Departments</a>
                    <div className="dropdown-content">
                            <a href="#">Marketing PR</a>
                            <a href="#">Customer Success & Sales</a>
                            <a href="#">IT, Product, Design & UX, Data</a>
                            <a href="#">Finance & Administration</a>
                            <a href="#">HR & more</a>
                    </div>
                </li>
            </ul>
            
            
            
        </div>
    </div>
    );
}
export default Navbar;

