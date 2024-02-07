import React from 'react';
import './NavBar.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className='nav'>
        <ul className="navLinks">
            <li><NavLink activeClassName="active" to="/">Início</NavLink></li>
            <li><NavLink activeClassName="active" to="/Projetos">Projetos</NavLink></li>
            <li><NavLink activeClassName="active" to="/FormaçãoAcademica">Formação Academica</NavLink></li>
            <li><NavLink activeClassName="active" to="/Contatos">Contatos</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar