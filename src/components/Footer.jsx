import React from 'react';
import{FaWhatsappSquare} from"react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import './Footer.css';

const Footer = () => {


const numero = "(74) 991022-0447"
  return (
    <footer>
      <div className='footerContainer'>
        <div className='contatos'>

          <div>
            <a id='email' href = "mailto:airan.sousasantos@gmail.com"><MdMarkEmailUnread  id='email'/>airan.sousasantos@gmail.com</a>
          </div>

        
          <div> 
          
            <p id='tel'><FaWhatsappSquare id='whatsapp'/>{numero}</p>  
          </div>

          </div>
      </div>
    </footer>
  )
}

export default Footer