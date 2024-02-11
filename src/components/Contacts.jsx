import React from 'react'
import{FaWhatsappSquare} from"react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";

import { BsFiletypePdf } from "react-icons/bs";
import './Contacts.css';
import meCont from '../img/meCont.jfif'
const Contacts = () => {
  const numero = "(74) 991022-0447"
  return (
    <div id='contatos'>
      <div className='contacts-main'>
        <div id='me-container'>
          <img id='me-cont' src={meCont} alt="Airan Santos" title='Airan Santos'/>
          <div id='me-links'>
            <a title="Linkedin" href = "https://www.linkedin.com/in/airan-santos-23087b233" target="_blank"><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" target="_blank" alt="Linkedin"/></a>
            <a title="GitHub" href = "https://github.com/airansantos" target="_blank"><img height="50"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" target="_blank" alt="GitHub"/></a>
          </div>
        </div>
        <div className='contacts-container'>
          <h2>Contato Profissional👇</h2>
          <a className='email' href = "mailto:airan.sousasantos@gmail.com" target='blank'><MdMarkEmailUnread id='emi'/>airan.sousasantos@gmail.com</a>
          <a className='tel' href='https://wa.me/+557499100447' target='blank'><FaWhatsappSquare id='what' />{numero}</a>
          
        </div>
        <div id='curruculo'><a id="curr" href="../public/AIRAN_SANTOS_Front-end.pdf" download>Download Currículo<BsFiletypePdf /></a></div>
      </div>
    </div>
  )
}

export default Contacts