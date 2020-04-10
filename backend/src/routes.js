const express = require("express")
const router = express.Router()

const OrgController = require("./controllers/OrgController")
const SessionController = require("./controllers/SessionController")
const JobController = require("./controllers/JobController")
const ProfileController = require("./controllers/ProfileController")

// Orgs
router.get("/orgs", OrgController.index)
router.post("/orgs", OrgController.create)
router.get("/org", OrgController.search)

// Jobs
router.get("/jobs", JobController.index)
router.post("/jobs", JobController.create)
router.put("/jobs", JobController.update)
router.delete("/jobs/:id", JobController.delete)

// Profile
router.get("/profile", ProfileController.index)

// Sessions
router.post("/login", SessionController.create)

module.exports = router