import React from 'react';
import { FiX } from "react-icons/fi";
import './Home.css';
import me from '../img/me.png';
import { useState } from 'react';
import Footer from './Footer';
//resumo de uma linha sobre html

const Home = () => {
    const [texto, setTexto] = useState('Aqui estão algumas das minhas habilidades👆, estudo quase que diariamente para aprimorar e aumentar minhas habilidades como dev.');
    const [nomeDaClasse, setNomeDaClasse] = useState('s');
    const [nomeDaId, setNomeDaId] = useState('b');
    const [idMe, setIdMe] = useState('eu');
    const handleClick = (event) => {
        const airanHtml = document.getElementById('airanHtml');
        const airanCss = document.getElementById('airanCss');
        const airanJs = document.getElementById('airanJs');
        const airanReact = document.getElementById('airanReact');
        const airanGit = document.getElementById('airanGit');
        const spanBtn = document.getElementsByClassName('spanBtn');
        
        if(event.target === airanHtml){
            setTexto('HTML (Hypertext Markup Language) é a linguagem de marcação padrão para a criação e estruturação de conteúdo na web, utilizando tags para definir elementos como texto, imagens e links em documentos acessíveis por navegadores.')
            setNomeDaClasse('spanInfoHtml')
            setNomeDaId('spanBtn')
            setIdMe('meHtml')
        }else if( event.target ===  airanCss){
            setTexto('CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para descrever a apresentação de documentos HTML ou XML, permitindo o controle estilístico de elementos como cores, layouts, fontes e espaçamentos em páginas web.')
            setNomeDaClasse('spanInfoCss')
            setNomeDaId('spanBtn')
            setIdMe('meCss')
        }else if(event.target ===  airanJs){
            setTexto('JavaScript é uma linguagem de programação de alto nível, orientada a objetos e amplamente usada para desenvolvimento web, permitindo a criação de interatividade e dinamismo nas páginas por meio de scripts executados nos navegadores.')
            setNomeDaClasse('spanInfoJs')
            setNomeDaId('spanBtn')
            setIdMe('meJs')
        }else if(event.target ===  airanReact){
            setTexto('React é uma biblioteca JavaScript de código aberto mantida pelo Facebook, utilizada para construir interfaces de usuário declarativas e eficientes, baseada em componentes reutilizáveis.')
            setNomeDaClasse('spanInfoReact')
            setNomeDaId('spanBtn')
            setIdMe('meReact')
        }else if( event.target ===  airanGit){
            setTexto('Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear e gerenciar alterações em projetos de software, facilitando o trabalho colaborativo e o controle preciso do histórico de código-fonte.')
            setNomeDaClasse('spanInfoGit')
            setNomeDaId('spanBtn')
            setIdMe('meGit')
        }else{
            return
        } 
        
      };




    
    return(
        <main>
            <div className="meContainer">
                <img id={idMe} className="me" src={me} alt="Me" title='Airan Santos'/>
                
                <div className="meContact">
                    <a title="GitHub" href = "https://github.com/airansantos" target="_blank"><img height="50"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" target="_blank" alt="GitHub"/></a>
                    <a title="Linkedin" href = "https://www.linkedin.com/in/airan-santos-23087b233" target="_blank"><img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" target="_blank" alt="Linkedin"/></a> 
                </div>

                <div className="resum">
                    <h1>Desenvolvedor Web de Front-End👋</h1>
                    <p>Olá, eu sou <b className='meu-nome'>Airan Santos</b>. Um desenvolvedor Front-end apaixonado por tecnologia que mora na Bahia, Brasil📍.</p>
                </div>
            
                <div className="skills">
                    <p>Skills</p>
                    <img onClick={handleClick} title="HTML" id="airanHtml" align="center" alt="Airan-HTML" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"/>
                    <img onClick={handleClick} title="CSS" id="airanCss" align="center" alt="Airan-CSS" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"/>
                    <img onClick={handleClick} title="JavaScript" id="airanJs" align="center" alt="Airan-Js" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"/>
                    <img onClick={handleClick} title="React" id="airanReact" align="center" alt="Airan-React" height="50" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"/>
                    <img onClick={handleClick} title="Git" id="airanGit" align="center" alt="Airan-git" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                </div>
                <div>
                    <div className={nomeDaClasse}>
                        <span id='texto'>{texto}</span>
                         
                    </div>  
                </div>

            </div>
        </main>
    )
}

export default Home;
//<button onClick={handleClick} id={nomeDaId} className='spanBtn'><FiX/></button>