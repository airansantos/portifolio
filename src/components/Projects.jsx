import './Projects.css';
import React from 'react'
import hidro from '../img/hidro.png'
import imc from '../img/imc.png'
import costs from '../img/costs.png'
import Footer from './Footer';

const Projects = () => {
  return (
    <>
      <div className='projetos'>

        <div className='projeto'>
          <div className='text-projeto'>
            <h2>Calculadora Hidropônica</h2>
            <p>Projeto realizado para auxiliar na manutençao da soluçao hidroponica</p>
            <div className='skills-projeto'>
              <p>Tecnologias Ultilizadas:</p>
              <img title="HTML"  align="center" alt="Airan-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
              <img title="CSS"  align="center" alt="Airan-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
              <img  title="JavaScript"  align="center" alt="Airan-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
            </div>
          </div>
          <img className='img-projeto' src={hidro} alt="Calculadora Hidropônica" />
          <div className='links-projeto'>
            <a title="GitHub" href = "https://github.com/airansantos" target="_blank"><img height="50"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" target="_blank" alt="GitHub"/></a>
            <a className='ver-btn' href="./Projetos/index.html" target='blank'>Ver Projeto...</a>
          </div>
        </div>
      
      
      
        <div className='projeto'>
          <div className='text-projeto'>
            <h2>Costs</h2>
            <p>Projeto realizado durando o curso de front-end</p>
            <div className='skills-projeto'>
              <p>Tecnologias Ultilizadas:</p>
              <img title="HTML"  align="center" alt="Airan-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
              <img title="CSS"  align="center" alt="Airan-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
              <img title="JavaScript"  align="center" alt="Airan-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
              <img title="React" id="airanReact" align="center" alt="Airan-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
            </div>
          </div>
          <img className='img-projeto' src={costs} alt="Calculadora de IMC" />
          <div className='links-projeto'>
            <a title="GitHub" href = "https://github.com/airansantos" target="_blank"><img height="50"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" target="_blank" alt="GitHub"/></a>
            <a className='ver-btn' href="./Projetos/index.html" target='blank'>Ver Projeto...</a>
          </div>
        </div>




        <div className='projeto'>
          <div className='text-projeto'>
            <h2>Calculadora de IMC</h2>
            <p>Projeto realizado durando o curso de front-end</p>
            <div className='skills-projeto'>
              <p>Tecnologias Ultilizadas:</p>
              <img title="HTML"  align="center" alt="Airan-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
              <img title="CSS"  align="center" alt="Airan-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
              <img title="JavaScript"  align="center" alt="Airan-Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
              <img title="React" id="airanReact" align="center" alt="Airan-React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
            </div>
          </div>
          <img className='img-projeto' src={imc} alt="Calculadora de IMC" />
          <div className='links-projeto'>
            <a title="GitHub" href = "https://github.com/airansantos" target="_blank"><img height="50"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" target="_blank" alt="GitHub"/></a>
            <a className='ver-btn' href="./Projetos/index.html" target='blank'>Ver Projeto...</a>
          </div>
        </div>
      

      </div>
      <Footer/>
    </>
  )
}

export default Projects