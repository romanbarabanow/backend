const { Router } = require("express")

const ServicesController = require("../controllers/ServicesController")

const router = Router()

router.get("/services", ServicesController.getService)
router.post("/services", ServicesController.changeService)

module.exports = router
