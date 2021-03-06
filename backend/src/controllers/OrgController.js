const connection = require("../database/connection")
const crypto = require("crypto")

module.exports = {
  async index(req, res) {
    const orgs = await connection("orgs").select("*")

    return res.json(orgs)
  },

  async create(req, res) {
    const {name, email, whatsapp, city, uf} = req.body

    const id = crypto.randomBytes(4).toString("HEX")

    await connection("orgs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.json({ id })
  },

  async search(req, res) {
    const authorization = req.headers.authorization

    const org = await connection("orgs").where("id", authorization).select("*").first()

    return res.json(org)
  }
}