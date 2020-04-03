const connection = require("../database/connection")

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query

    const [count] = await connection("jobs").count()

    const jobs = await connection("jobs")
      .join("orgs", "orgs.id", "=", "jobs.org_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "jobs.*",
        "orgs.name",
        "orgs.email",
        "orgs.whatsapp",
        "orgs.city",
        "orgs.uf"
      ])

    res.header("X-Total-Count", count["count(*)"])
    
    return res.json(jobs)
  },

  async create(req, res) {
    const { title, description, salary, workload } = req.body
    const org_id = req.headers.authorization

    const [id] = await connection("jobs").insert({
      title,
      description,
      salary,
      workload,
      org_id
    })

    return res.json({ id })
  },

  async update(req, res) {
    const { id, title, description, salary, workload } = req.body
    const org_id = req.headers.authorization
    
    const job = await connection("jobs")
      .where("id", id).where("org_id", org_id)
      .update({
        title,
        description,
        salary,
        workload
      })
      .select("*")

    if(!job) {
      return res.status(400).json({ error: "Job or Authorization not found" })
    }

    return res.status(204).send()
  },

  async delete(req, res) {
    const { id } = req.params
    const org_id = req.headers.authorization

    const job = await connection("jobs")
      .where("id", id)
      .select("org_id")
      .first()

    if(job.org_id != org_id) {
      return res.status(401).json({ error: "No authorization for this" })
    }

    await connection("jobs").where("id", id).delete()

    return res.status(204).send()
  }
}
