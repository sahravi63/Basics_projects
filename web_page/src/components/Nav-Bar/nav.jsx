import React from "react";
import {Link} from "react-router-dom";
import "./nav.css";

function Nav(){
    return(

        <nav className="nav-bar">
            <ul>
                <li className=""nav-item><Link to="/">Home</Link></li>
                <li className=""nav-item><Link to="/Contact-Us">Contact-US</Link></li>
                <li className=""nav-item><Link to="/About">About-Us</Link></li>
                <li className=""nav-item><Link to="/Profile">Profile</Link></li>
            </ul>
        </nav>
    );
}
export default Nav;