import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Projects from './components/Projects.jsx'
import FormacaoAcademica from './components/FormacaoAcademica.jsx'
import Contacts from './components/Contacts.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Projetos" element={<Projects/>}></Route>
          <Route path="/FormaçãoAcademica" element={<FormacaoAcademica/>}></Route>
          <Route path="/Contatos" element={<Contacts />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
