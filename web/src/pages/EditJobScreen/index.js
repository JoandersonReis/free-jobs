import React, { useState } from "react"
import { FiArrowLeft } from "react-icons/fi"
import { Link, useHistory } from "react-router-dom"

import imgLogo from "../../assets/logo.png"

import api from "../../services/api"

function EditJobScreen() {
  const history = useHistory()
  const data = history.location.state

  const [ id, setId ] = useState(data.id)
  const [ title, setTitle ] = useState(data.title)
  const [ description, setDescription ] = useState(data.description)
  const [ salary, setSalary ] = useState(data.salary)
  const [ workload, setWorkload ] = useState(data.workload)

  const orgId = localStorage.getItem("orgId")

  async function handleEditJob(e) {
    e.preventDefault()

    try {
      const data = {
        id,
        title,
        description,
        salary,
        workload
      }

      await api.put("jobs", data, {headers: {
        Authorization: orgId
      }})

      history.goBack()
    } catch(err) {
      alert("Erro ao editar Job. Tente novamente!" + err)
    }
  }

  return (
    <div className="container">
    <div className="container-register">
      <aside className="apresentation">
        <img className="img-logo" src={imgLogo} alt="Logo free jobs"/>

        <h1>Editar Job</h1>

        <p>- Edite um Job nessa tela.</p>
        <p>- Melhore a descrição ou titulo do produto.</p>

        <Link to="/profile" className="back-link">
          <FiArrowLeft size={18} color="#1379B9" />
          Voltar
        </Link>
      </aside>

      <section className="container-inputs">
        <form onSubmit={handleEditJob}>
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
            onChange={e => setDescription(e.target.value)} 
            required
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

          <button type="submit" className="button">Editar</button>
        </form>
      </section>
    </div>
  </div>
  )
}

export default EditJobScreen
