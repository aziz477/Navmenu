import React from 'react'
import './NavMenu.css'
function NavMenu() {
    return (
        <div className="nav">
                <ul className="nav-menu">
                    <li><a href="#">Home</a></li>
                        <li className="dropdown"><a href="#" className="dropbtn">Services</a>
                            <div className="dropdown-content">
                                <a href="#">For Entrepreneurs</a>
                                <a href="#">For Students</a>
                                <a href="#">For Hobbyists</a>
                            </div>
                        </li>
                    <li><a href="#">Contact</a></li>
                </ul>  
        </div>
    )
};
export default NavMenu;
