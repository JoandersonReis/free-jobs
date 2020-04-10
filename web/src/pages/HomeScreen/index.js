import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FiLogIn } from "react-icons/fi"
import { useHistory } from "react-router-dom"

import imgLogo from "../../assets/job.jpg"

import "./styles.css"

import api from "../../services/api"

function App() {
  const [ id, setId ] = useState("")

  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post("login", { id })

      localStorage.setItem("orgId", id)
      localStorage.setItem("orgName", response.data.name)
      
      history.push("profile")
    } catch(err) {
      alert("Erro, tente novamente")
    }

  }

  return (
    <div className="container">
      <div className="container-login">
        <section>
          <h1 className="title">Entre e gere novas oportunidades no mercado!</h1>
          <form onSubmit={handleLogin}>
            <input
             placeholder="Digite seu ID"
             onChange = {e => setId(e.target.value)}
            />

            <button type="submit" className="button">Login</button>
            <Link to="/org/new" className="register-link">
              <FiLogIn size={16} color="#1379B9" className="icon" />
              Novo Cadastro
            </Link>
          </form>
        </section>
        <img src={imgLogo} alt="Free Jobs"/>
      </div>
    </div>
  )
}

export default App