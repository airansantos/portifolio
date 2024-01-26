import React from 'react';
import{FaWhatsappSquare} from"react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import './Footer.css';

const Footer = () => {


const numero = "(74) 991022-0447"
  return (
    <footer>
      <h2>Contatos</h2>
      <div className='footerContainer'>
        
        <div>
          <a id='email' href = "mailto:airan.sousasantos@gmail.com"><MdMarkEmailUnread  id='em'/> airan.sousasantos@gmail.com</a>
        </div>

        
        <div> 
          
          <p id='tel'> <FaWhatsappSquare />{numero}</p>  
        </div>
      </div>
    </footer>
  )
}

export default Footer