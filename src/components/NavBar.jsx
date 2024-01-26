import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
        <ul className="navLinks">
            <li><a href="#inicio">INICIO</a></li>
            <li><a href="#projetos">PROJETOS</a></li>
            <li><a href="#formacao">FORMAÇÃO ACADEMICA</a></li>
            <li><a href="#contatos">CONTATOS</a></li>
        </ul>
    </nav>
  )
}

export default NavBar