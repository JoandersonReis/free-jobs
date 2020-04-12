import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { FiArrowLeft } from "react-icons/fi"

import imgLogo from "../../assets/logo.png"

import api from "../../services/api"

function RegisterScreen() {
  const [orgName, setOrgName] = useState("")
  const [orgEmail, setOrgEmail] = useState("") 
  const [orgWhatsapp, setOrgWhatsapp] = useState("") 
  const [orgCity, setOrgCity] = useState("") 
  const [orgUf, setOrgUf] = useState("")
  
  
  async function handleRegister(e) {
    e.preventDefault()

    try {
      const response = await api.post("orgs", {
        name: orgName,
        email: orgEmail,
        whatsapp: orgWhatsapp,
        city: orgCity,
        uf: orgUf
      })

      setOrgName("")
      setOrgEmail("")
      setOrgWhatsapp("")
      setOrgCity("")
      setOrgUf("")
      alert(`Cadastro foi um sucesso! seu ID é ${response.data.id}`)
    } catch(err) {
      alert("Erro ao registrar a empresa, tente novamente!")
    }
  }

  return (
  <div className="container">
    <div className="container-register">
      <aside className="apresentation">
        <img className="img-logo" src={imgLogo} alt="Logo free jobs"/>

        <h1>Registre-se</h1>

        <p>- Crie oportunidades para outras pessoas</p>
        <p>- Tenha seu perfil em nosso projeto</p>

        <Link to="/" className="back-link">
          <FiArrowLeft size={18} color="#1379B9" />
          Ja tenho conta
        </Link>
      </aside>

      <section className="container-inputs">
        <form onSubmit={handleRegister}>
          <input 
            className="input" 
            placeholder="Nome da empresa"
            onChange={e => setOrgName(e.target.value)} 
            value={orgName}
          />
          <input 
            type="email" 
            className="input" 
            placeholder="E-mail da empresa"
            onChange={e => setOrgEmail(e.target.value)}
            value={orgEmail}
          />
          <input 
            className="input" 
            placeholder="Whatsapp da empresa"
            onChange={e => setOrgWhatsapp(e.target.value)} 
            value={orgWhatsapp}
          />
          <input 
            className="input" 
            placeholder="Cidade da empresa" 
            onChange={e => setOrgCity(e.target.value)}
            value={orgCity}
          />
          <input 
            className="input" 
            placeholder="UF da empresa"
            onChange={e => setOrgUf(e.target.value)}
            value={orgUf}
          />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </section>
    </div>
  </div>
  )
}

export default RegisterScreen