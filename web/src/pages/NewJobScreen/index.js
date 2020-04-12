import React, { useState } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link } from "react-router-dom"

import imgLogo from "../../assets/logo.png"

import "./styles.css"

import api from "../../services/api"

function NewJobScreen() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [salary, setSalary] = useState("")
  const [workload, setWorkload] = useState("")

  const orgId = localStorage.getItem("orgId")

  async function handleAddNewJob(e) {
    e.preventDefault()

    try {
      const data = {
        title,
        description,
        salary,
        workload
      }

      await api.post("/jobs", data, {headers: {
        Authorization: orgId 
      }})

      setTitle("")
      setDescription("")
      setSalary("")
      setWorkload("")

      alert("Job adicionado com sucesso")
    }catch(err) {
      alert("Erro, tente novamente!")
    }
  }

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
        <form onSubmit={handleAddNewJob}>
          <input 
            className="input" 
            placeholder="Titulo" 
            required
            onChange={e => setTitle(e.target.value)}
            value={title}
          />
          <textarea 
            maxLength="150" 
            className="input-description" 
            placeholder="Descrição" 
            required
            onChange={e => setDescription(e.target.value)}
            value={description}  
          ></textarea>
          <input 
            className="input" 
            placeholder="Salário" 
            required
            onChange={e => setSalary(e.target.value)}
            value={salary}
          />
          <input 
            type="number" 
            className="input" 
            placeholder="Carga Horária" 
            required
            onChange={e => setWorkload(e.target.value)} 
            value={workload} 
          />

          <button type="submit" className="button">Cadastrar</button>
        </form>
      </section>
    </div>
  </div>
  )
}

export default NewJobScreen
