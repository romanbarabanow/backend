const { Router } = require("express")

const ServicesController = require("../controllers/ServicesController")

const middleware = require("../middleware/auth.middleware")

const router = Router()

router.get("/services", ServicesController.getService)
router.post("/services", middleware, ServicesController.changeService)
router.get("/services/catering", ServicesController.changeCatering)
router.post("/services/catering", ServicesController.getCatering)

module.exports = router
