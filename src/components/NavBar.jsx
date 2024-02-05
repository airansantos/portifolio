import React from 'react';
import './NavBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className='nav'>
        <ul className="navLinks">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/Projetos">Projetos</Link></li>
            <li><Link to="/FormaçãoAcademica">Formação Academica</Link></li>
            <li><Link to="/Contatos">Contatos</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar