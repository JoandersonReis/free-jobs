import React from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import imgLogo from "../../assets/logo.png"

import "./styles.css"

function NewJobScreen() {
  return (
    <div className="container">
    <div className="container-register">
      <aside className="apresentation">
        <img className="img-logo" src={imgLogo} alt="Logo free jobs"/>

        <h1>Registre um novo Job</h1>

        <p>- Crie oportunidades para outras pessoas.</p>
        <p>- Aumente sua equipe de funcionários.</p>

        <Link to="/profile" className="back-link">
          <FiArrowLeft size={18} color="#1379B9" />
          Voltar
        </Link>
      </aside>

      <section className="container-inputs">
        <form>
          <input className="input" placeholder="Titulo" required />
          <textarea maxLength="150" className="input-description" placeholder="Descrição" required ></textarea>
          <input className="input" placeholder="Salário" required />
          <input type="number" className="input" placeholder="Carga Horária" required />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </section>
    </div>
  </div>
  )
}

export default NewJobScreen
