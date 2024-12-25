import React, { useState } from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';
import { BsBorderWidth } from "react-icons/bs";

const NavBar = () => {
  const[isOpen, setIsOpen] = useState(false);

  const handleClick =()=>{
    setIsOpen((open)=>!open);
  }

  return (
    <nav className={`nav ${isOpen ? 'is-open' : ""}`}>
        <ul className={`navLinks ${isOpen ? 'is-open' : ""}`}>
            <li><NavLink activeClassName="active" class="active" to="/">Início</NavLink></li>
            <li><NavLink activeClassName="active" to="/Projetos">Projetos</NavLink></li>
            <li><NavLink activeClassName="active" to="/FormaçãoAcademica">Formação Academica</NavLink></li>
            <li><NavLink activeClassName="active" to="/Contatos">Contatos</NavLink></li>
        </ul>
        <button id='hamburger' onClick={handleClick}>< BsBorderWidth /></button>
    </nav>
  )
}

export default NavBar
