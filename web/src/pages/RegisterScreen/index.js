import React from 'react'
import { Link } from "react-router-dom"

import { FiArrowLeft } from "react-icons/fi"

import imgLogo from "../../assets/logo.png"

function RegisterScreen() {
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
        <form>
          <input className="input" placeholder="Nome da empresa" />
          <input type="email" className="input" placeholder="E-mail da empresa" />
          <input className="input" placeholder="Whatsapp da empresa" />
          <input className="input" placeholder="Cidade da empresa" />
          <input className="input" placeholder="UF da empresa" />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </section>
    </div>
  </div>
  )
}

export default RegisterScreen