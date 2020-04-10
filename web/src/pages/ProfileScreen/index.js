import React, { useEffect, useState } from 'react'
import { FiPower, FiTrash2 } from "react-icons/fi"
import { useHistory } from "react-router-dom"

import imgLogo from "../../assets/logo.png"

import "./styles.css"

import api from "../../services/api"

function ProfileScreen() {
  const [jobs, setJobs] = useState([])
  const [org, setOrg] = useState({})
  
  const history = useHistory()
  const orgId = localStorage.getItem("orgId")
  const orgName = localStorage.getItem("orgName")


  async function handleDeleteJob(id) {
    await api.delete(`jobs/${id}`, {
      headers: {
        Authorization: orgId
      }
    })
  }

  function handleLogout() {
    localStorage.clear()
    history.push("/")
  }

  async function loadOrg() {
    const response = await api.get("org", {
      headers: {
        Authorization: orgId
      }
    })

    setOrg(response.data)
  }
  
  async function loadJobsProfile() {
    const response = await api.get("profile", {
      headers: {
        Authorization: orgId
      }
    })

    setJobs(response.data)
    loadOrg()
  }

  useEffect(() => {
    loadJobsProfile()
  }, [jobs])

  return (
    <div className="container-profile">
      <div className="header">
        <div>
          <img src={imgLogo} alt="Logo Free Jobs" className="img-logo" />
            <p>Bem vindo, <strong>{orgName}</strong></p>
        </div>
        <button className="btn-logout" onClick={handleLogout}><FiPower size={20} color="#c0392b" /></button>
      </div>

      <div className="container-info">
        <aside>
          <div>
            <strong>Nome</strong>
            <p>{org.name}</p>
            <strong>Email</strong>
            <p>{org.email}</p>
            <strong>WhatsApp</strong>
            <p>{org.whatsapp}</p>

            <button onClick={() => history.push("/job/new")} className="button btn-add">Novo Job</button>
          </div>
        </aside>

        <ul>
          {jobs.map(job => (
            <li className="job">
              <button className="delete-job" onClick={() => handleDeleteJob(job.id)}><FiTrash2 size={20} color="#999" /></button>
              <h1 className="title">{job.title}</h1>
              <p className="description">{job.description}</p>
              <p className="job-info"><span>Carga Horária: </span>{job.workload} horas</p>
              <p className="job-info"><span>Salário: </span>{Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(job.salary)}</p>
              <button className="button">Editar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProfileScreen