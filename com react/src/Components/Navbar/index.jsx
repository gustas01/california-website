import React from "react";
import  Logo from './401-logo.png'
import './style.css'

export default function Navbar(){
    return(
        <nav>
            <img src={Logo} alt="logo" className="logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Beaches</a></li>
                <li><a href="#">Popular Places</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    );
}