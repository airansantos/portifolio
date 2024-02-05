import React from 'react'
import diploma from '../img/diploma.jpg';
import front from '../img/front.png';
import etica from '../img/etica.png';
import segurança from '../img/segurança.png';
import Footer from './Footer';
import './FormacaoAcademica.css'

const FormacaoAcademica = () => {
  return (
    <div className='formacao-container'>
      <div className='facul-container'>
        <div className='text-container'>
          <h2>Graduação em Análise e Desenvolvimento de Sistemas</h2>
          <p>A faculdade de Análise e Desenvolvimento de Sistemas capacita os estudantes para compreender, projetar e implementar soluções tecnológicas inovadoras. Ao explorar programação, banco de dados e engenharia de software, os alunos adquirem habilidades essenciais para atuar no desenvolvimento e aprimoramento de sistemas computacionais, preparando-se para desafios dinâmicos no campo da tecnologia da informação</p>
        </div>
        <img src={diploma} alt="Diploma" />
      </div>

      <h2 id='cursos-title'>Cursos de Capacitação e Aperfeiçoamanto👇</h2>

      <div className='cursos'>
        
        <div className='curso-container'>
          <div className='text-container'>
            <h2>Formação Front-end - HTML, CSS, JavaScript, React e +</h2>
            <p>O curso de Front-End com HTML, CSS, JavaScript, React e um pouquinho de TypeScript oferece uma abordagem abrangente para capacitar os alunos na criação de interfaces web modernas e interativas. Ao explorar os fundamentos do desenvolvimento web com HTML e CSS, além de aprofundar-se nas dinâmicas de interação com JavaScript e React, os participantes adquirem as habilidades essenciais para projetar e construir experiências de usuário envolventes e responsivas.</p>
          </div>
          <img src={front} alt="Certificado" />
        </div>

        <div className='curso-container'>
          <div className='text-container'>
            <h2>Ética no Desenvolvimento de Sistemas</h2>
            <p>O curso sobre Ética no Desenvolvimento de Sistemas proporciona uma compreensão aprofundada das questões éticas enfrentadas pelos profissionais de tecnologia. Explorando dilemas morais e melhores práticas, os participantes são capacitados a desenvolver sistemas inovadores com responsabilidade e consideração pelos impactos sociais e éticos.</p>
          </div>
          <img src={etica} alt="Certificado" />
        </div>

        <div className='curso-container'>
          <div className='text-container'>
            <h2>Segurança em Tecnologia da Informação</h2>
            <p>O curso de Segurança em Tecnologia da Informação capacita profissionais a implementar estratégias robustas de proteção de dados e sistemas, abordando ameaças cibernéticas e promovendo práticas defensivas eficazes. Os participantes adquirem habilidades essenciais para salvaguardar informações críticas em ambientes digitais.</p>
          </div>
          <img src={segurança} alt="certificado" />
        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default FormacaoAcademica