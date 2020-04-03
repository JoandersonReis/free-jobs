const connection = require("../database/connection")

module.exports = {
  async create(req, res) {
    const { id } = req.body

    const org = await connection("orgs")
      .where("id", id)
      .select("name")
      .first()
    
    if(!org) {
      return res.status(400).json({ error: "No ORG found this ID" })
    } 

    return res.json(org)  
  }
}