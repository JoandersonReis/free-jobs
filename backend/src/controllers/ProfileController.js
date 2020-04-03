const connection = require("../database/connection")

module.exports = {
  async index(req, res) {
    const org_id = req.headers.authorization

    const jobs = await connection("jobs")
      .where("org_id", org_id)
      .select("*")
    
    if(!jobs) {
      return res.status(400).json({ error: "No ONG found authorization" })
    }
    
    return res.json(jobs)
  }
}
