import React from "react";
import { Link } from "react-router-dom";
import logo from    '../../Imagenes/flechamouse.png';
import './NavBar.css'
export default function NavBar() {
    return <div className='componentNavBar'> 
        <a href="/"><label class="logo" ><img src={logo} alt='Img not found' />Luban!</label></a>
        <div className="navButtons">        
            <Link className="button" to="/home">Inicio</Link>
            <Link  className="button"to="/empleos">Empleos</Link>
            <Link  className="button"to="/talentos">Talentos</Link>
            <Link  className="button"to="/info">¿Cómo funciona?</Link>
            <Link className="button" to="/register">Registrarse</Link>
            <Link className="button" to="/aboutus">About Us</Link>
            <Link className="button log" to="/login">Log in</Link>
        </div>
  
    </div>
}